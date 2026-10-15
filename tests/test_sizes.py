"""Size snapshots: public repos only, honest totals, one snapshot per day."""

import json
from datetime import datetime, timezone
from urllib.error import HTTPError

import pytest

from quirq_wiki.sizes import forget_repo, save_snapshot, take_snapshot

NOW = datetime(2026, 10, 15, 6, 45, tzinfo=timezone.utc)


def repo(name, size=10, branch="main", private=False, **extra):
    return {"name": name, "private": private, "default_branch": branch, "size": size, **extra}


def tree(*sizes, truncated=False):
    entries = [{"type": "blob", "path": f"f{i}", "size": size} for i, size in enumerate(sizes)]
    entries += [{"type": "tree", "path": "dir"}, {"type": "commit", "path": "submodule"}]
    return {"sha": "abc", "tree": entries, "truncated": truncated}


def http_error(code, message):
    error = RuntimeError(f"GitHub API {code}: {message}")
    error.__cause__ = HTTPError("https://api.github.com/", code, message, {}, None)
    return error


def request_for(repos, trees, confirmed=None):
    asked = []

    def request(url, **kwargs):
        asked.append(url)
        if "/orgs/" in url:
            return repos
        name, _, rest = url.split("/repos/quirq-ai/", 1)[1].partition("/")
        if not rest:  # the visibility re-check after measuring
            result = (confirmed or {}).get(name, {"private": False, "visibility": "public",
                                                  "full_name": f"quirq-ai/{name}"})
        else:
            result = trees[name]
        if isinstance(result, Exception):
            raise result
        return result

    return request, asked


def test_counts_files_and_bytes_and_leaves_private_repos_out():
    request, asked = request_for(
        [repo("b", size=7), repo("a", size=3), repo("secret", private=True),
         repo("_claude", visibility="private"), repo("inside", visibility="internal")],
        {"a": tree(10, 20), "b": tree(5)},
    )
    snapshot = take_snapshot(now=NOW, request=request)
    assert [row["repo"] for row in snapshot["repos"]] == ["a", "b"]
    assert snapshot["repos"][0]["files"] == 2 and snapshot["repos"][0]["bytes"] == 30
    assert snapshot["totals"] == {"repos": 2, "files": 3, "bytes": 35, "github_kb": 10,
                                  "github_complete": True, "left_out": 0, "complete": True}
    assert not any(name in url for url in asked for name in ("secret", "_claude", "inside"))
    assert snapshot["taken_at"] == "2026-10-15T06:45:00Z"


def test_empty_repositories_count_as_zero_and_a_new_one_is_still_read():
    request, asked = request_for(
        [repo("conflict"), repo("fresh", size=0), repo("nobranch", branch=None)],
        {"conflict": http_error(409, "Git Repository is empty."), "fresh": tree(4, 6)},
    )
    snapshot = take_snapshot(now=NOW, request=request)
    assert [(row["files"], row["bytes"], row["error"]) for row in snapshot["repos"]] == [
        (0, 0, None), (2, 10, None), (0, 0, None)]
    # GitHub's size starts at 0 for a new repository, so "fresh" is still read.
    assert any("/fresh/git/trees/" in url for url in asked)
    assert not any("/nobranch/" in url for url in asked)
    assert snapshot["totals"]["complete"]


def test_a_repository_not_confirmed_public_after_measuring_is_left_out():
    request, _ = request_for(
        [repo("a"), repo("flipped")],
        {"a": tree(1), "flipped": tree(2)},
        confirmed={"flipped": {"private": True, "visibility": "private", "full_name": "quirq-ai/flipped"}},
    )
    messages = []
    snapshot = take_snapshot(now=NOW, request=request, progress=messages.append)
    assert [row["repo"] for row in snapshot["repos"]] == ["a"]
    assert snapshot["totals"]["files"] == 1 and snapshot["totals"]["complete"] is False
    assert not any("flipped" in message for message in messages)


def test_a_missing_github_size_makes_that_total_a_floor():
    request, _ = request_for([repo("a", size=None)], {"a": tree(1)})
    totals = take_snapshot(now=NOW, request=request)["totals"]
    assert totals["github_complete"] is False and totals["complete"] is True


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


def test_a_same_day_rerun_keeps_the_earlier_measurement_of_a_repository_it_could_not_read(tmp_path):
    good, _ = request_for([repo("a"), repo("b")], {"a": tree(1, 1), "b": tree(5)})
    save_snapshot(tmp_path, take_snapshot(now=NOW, request=good))
    worse, _ = request_for([repo("a"), repo("b")], {"a": tree(1, 1, 1), "b": http_error(502, "Bad Gateway")})
    later = datetime(2026, 10, 15, 15, 0, tzinfo=timezone.utc)
    save_snapshot(tmp_path, take_snapshot(now=later, request=worse))
    lines = (tmp_path / "_sizes" / "history.jsonl").read_text(encoding="utf-8").splitlines()
    assert len(lines) == 1
    day = json.loads(lines[0])
    assert day["taken_at"] == "2026-10-15T15:00:00Z"
    assert [(row["repo"], row["files"], row["error"]) for row in day["repos"]] == [("a", 3, None), ("b", 1, None)]
    assert day["totals"]["files"] == 4 and day["totals"]["complete"] is True


def test_forget_removes_a_repository_from_every_snapshot(tmp_path):
    for stamp in ("2026-10-14T06:45:00+00:00", "2026-10-15T06:45:00+00:00"):
        request, _ = request_for([repo("a"), repo("gone")], {"a": tree(1), "gone": tree(7, 7)})
        save_snapshot(tmp_path, take_snapshot(now=datetime.fromisoformat(stamp), request=request))
    assert forget_repo(tmp_path, "gone") == 2
    folder = tmp_path / "_sizes"
    for name in ("history.jsonl", "latest.json", "README.md"):
        assert "gone" not in (folder / name).read_text(encoding="utf-8")
    days = [json.loads(line) for line in (folder / "history.jsonl").read_text(encoding="utf-8").splitlines()]
    assert [(d["totals"]["repos"], d["totals"]["bytes"], d["totals"]["complete"]) for d in days] == [(1, 1, True)] * 2
    assert not list(folder.glob("*.tmp")) and not list(folder.glob(".*.tmp"))
