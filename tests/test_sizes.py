"""Size snapshots: public repos only, honest totals, one snapshot per day."""

import json
from datetime import datetime, timezone
from urllib.error import HTTPError

import pytest

from quirq_wiki.sizes import save_snapshot, take_snapshot

NOW = datetime(2026, 10, 15, 6, 45, tzinfo=timezone.utc)


def repo(name, size=10, branch="main", private=False):
    return {"name": name, "private": private, "default_branch": branch, "size": size}


def tree(*sizes, truncated=False):
    entries = [{"type": "blob", "path": f"f{i}", "size": size} for i, size in enumerate(sizes)]
    entries += [{"type": "tree", "path": "dir"}, {"type": "commit", "path": "submodule"}]
    return {"sha": "abc", "tree": entries, "truncated": truncated}


def http_error(code, message):
    error = RuntimeError(f"GitHub API {code}: {message}")
    error.__cause__ = HTTPError("https://api.github.com/", code, message, {}, None)
    return error


def request_for(repos, trees):
    asked = []

    def request(url, **kwargs):
        asked.append(url)
        if "/orgs/" in url:
            return repos
        name = url.split("/repos/quirq-ai/", 1)[1].split("/", 1)[0]
        result = trees[name]
        if isinstance(result, Exception):
            raise result
        return result

    return request, asked


def test_counts_files_and_bytes_and_leaves_private_repos_out():
    request, asked = request_for(
        [repo("b", size=7), repo("a", size=3), repo("secret", private=True)],
        {"a": tree(10, 20), "b": tree(5)},
    )
    snapshot = take_snapshot(now=NOW, request=request)
    assert [row["repo"] for row in snapshot["repos"]] == ["a", "b"]
    assert snapshot["repos"][0]["files"] == 2 and snapshot["repos"][0]["bytes"] == 30
    assert snapshot["totals"] == {"repos": 2, "files": 3, "bytes": 35, "github_kb": 10, "complete": True}
    assert not any("secret" in url for url in asked)
    assert snapshot["taken_at"] == "2026-10-15T06:45:00Z"


def test_empty_repositories_count_as_zero():
    request, asked = request_for(
        [repo("empty", size=0), repo("nobranch", branch=None), repo("conflict")],
        {"conflict": http_error(409, "Git Repository is empty.")},
    )
    snapshot = take_snapshot(now=NOW, request=request)
    assert [(row["files"], row["bytes"], row["error"]) for row in snapshot["repos"]] == [(0, 0, None)] * 3
    assert len(asked) == 2  # the org listing and the one repository with a tree to read
    assert snapshot["totals"]["complete"]


def test_failures_and_cut_trees_make_the_totals_a_floor():
    request, _ = request_for(
        [repo("big"), repo("broken"), repo("fine")],
        {"big": tree(1, truncated=True), "broken": http_error(500, "boom"), "fine": tree(2)},
    )
    snapshot = take_snapshot(now=NOW, request=request)
    broken = snapshot["repos"][1]
    assert broken["files"] is None and broken["bytes"] is None and "500" in broken["error"]
    assert snapshot["repos"][0]["truncated"]
    assert snapshot["totals"]["files"] == 2 and snapshot["totals"]["bytes"] == 3
    assert snapshot["totals"]["complete"] is False


def test_rate_limit_writes_nothing():
    request, _ = request_for([repo("a")], {"a": http_error(403, "API rate limit exceeded")})
    with pytest.raises(RuntimeError, match="rate limit"):
        take_snapshot(now=NOW, request=request)


def test_one_snapshot_per_day_and_readable_summaries(tmp_path):
    def snapshot_at(stamp, files):
        request, _ = request_for([repo("a")], {"a": tree(*([1] * files))})
        return take_snapshot(now=datetime.fromisoformat(stamp), request=request)

    save_snapshot(tmp_path, snapshot_at("2026-10-14T06:45:00+00:00", 1))
    save_snapshot(tmp_path, snapshot_at("2026-10-15T06:45:00+00:00", 2))
    save_snapshot(tmp_path, snapshot_at("2026-10-15T09:00:00+00:00", 3))
    lines = (tmp_path / "_sizes" / "history.jsonl").read_text(encoding="utf-8").splitlines()
    assert [json.loads(line)["totals"]["files"] for line in lines] == [1, 3]
    latest = json.loads((tmp_path / "_sizes" / "latest.json").read_text(encoding="utf-8"))
    assert latest["taken_at"] == "2026-10-15T09:00:00Z"
    readme = (tmp_path / "_sizes" / "README.md").read_text(encoding="utf-8")
    assert "| [a](https://github.com/quirq-ai/a) | 3 |" in readme
    assert "| 2026-10-14 | 1 | 1 |" in readme


def test_a_corrupt_history_line_is_refused(tmp_path):
    folder = tmp_path / "_sizes"
    folder.mkdir()
    (folder / "history.jsonl").write_text("{not json\n", encoding="utf-8")
    request, _ = request_for([repo("a")], {"a": tree(1)})
    with pytest.raises(ValueError, match="not valid JSON"):
        save_snapshot(tmp_path, take_snapshot(now=NOW, request=request))
