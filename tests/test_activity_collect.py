from datetime import datetime, timezone
from urllib.error import HTTPError
from urllib.parse import urlsplit, parse_qs

import pytest

from quirq_wiki.activity_collect import collect_activity

SINCE = datetime(2026, 10, 1, tzinfo=timezone.utc)
UNTIL = datetime(2026, 10, 8, tzinfo=timezone.utc)
STAMP = "2026-10-07T12:00:00Z"


def request_for(data):
    def request(url, **kwargs):
        endpoint = urlsplit(url).path.split("/repos/quirq-ai/demo/", 1)[1]
        query = parse_qs(urlsplit(url).query)
        page = int(query.get("page", [1])[0])
        result = data.get(endpoint, {"workflow_runs": []} if endpoint == "actions/runs" else [])
        if callable(result):
            return result(page, query)
        if isinstance(result, Exception):
            raise result
        return result
    return request


def collect(data, **extra):
    return collect_activity(org="quirq-ai", repo="demo", since=SINCE, until=UNTIL, request=request_for(data), **extra)


def test_all_branches_dedup_and_issue_pr_classification():
    commit = {"sha": "abc", "commit": {"committer": {"date": STAMP, "email": "hidden"}, "message": "Commit title\nsecret body"}, "author": {"login": "a"}, "html_url": "https://github.com/quirq-ai/demo/commit/abc"}
    issue = {"number": 1, "updated_at": STAMP, "created_at": STAMP, "user": {"login": "a"}, "title": "Issue", "state": "open", "body": "hidden", "html_url": "https://github.com/quirq-ai/demo/issues/1"}
    pull = dict(issue, number=2, pull_request={"merged_at": STAMP}, title="PR")
    result = collect({"branches": [{"name": "main"}, {"name": "feature"}], "commits": [commit], "issues": [issue, pull]})
    records = result["records"]
    assert [r["kind"] for r in records] == ["commit", "issue", "pull_request"]
    assert records[0]["details"]["branches"] == ["feature", "main"]
    assert "hidden" not in str(records) and "secret body" not in str(records)
    assert records[2]["details"]["merged_at"] == STAMP


def test_pagination_and_private_draft_release_filter():
    def issues(page, query):
        return [{"number": (page-1)*100+i, "updated_at": STAMP, "title": "Issue", "html_url": "https://github.com/quirq-ai/demo/issues/1"} for i in range(1, 101 if page == 1 else 2)]
    release = {"id": 4, "draft": False, "published_at": STAMP, "tag_name": "v1", "html_url": "https://github.com/quirq-ai/demo/releases/tag/v1"}
    result = collect({"issues": issues, "releases": [release, dict(release, id=5, draft=True)]})
    assert len(result["records"]) == 102
    assert len([r for r in result["records"] if r["kind"] == "release"]) == 1


def test_workflow_old_creation_recent_update_and_pending():
    workflow = {"id": 7, "status": "in_progress", "created_at": "2025-01-01T00:00:00Z", "updated_at": STAMP, "name": "CI", "html_url": "https://github.com/quirq-ai/demo/actions/runs/7"}
    result = collect({"actions/runs": {"workflow_runs": [workflow]}})
    assert result["pending_runs"] == [7]
    assert result["records"][0]["kind"] == "workflow"


def test_deleted_pending_run_does_not_permanently_block():
    error = RuntimeError("GitHub API 404")
    error.__cause__ = HTTPError("https://api.github.com/", 404, "missing", {}, None)
    assert collect({"actions/runs/99": error}, pending_runs=[99])["pending_runs"] == []
    error.__cause__ = HTTPError("https://api.github.com/", 403, "forbidden", {}, None)
    with pytest.raises(RuntimeError):
        collect({"actions/runs/99": error}, pending_runs=[99])


def test_errors_and_malformed_responses_do_not_look_like_empty_success():
    with pytest.raises(RuntimeError):
        collect({"issues": RuntimeError("rate limited")})
    with pytest.raises(ValueError):
        collect({"actions/runs": {"wrong": []}})
    error = RuntimeError("Empty Git repository")
    error.__cause__ = HTTPError("https://api.github.com/", 409, "empty", {}, None)
    assert collect({"branches": error})["records"] == []
    with pytest.raises(RuntimeError):
        collect({"issues": error})


def test_empty_commit_message_does_not_block_repository():
    commit = {"sha": "abc", "commit": {"committer": {"date": STAMP}, "message": ""}, "html_url": "https://github.com/quirq-ai/demo/commit/abc"}
    result = collect({"branches": [{"name": "main"}], "commits": [commit]})
    assert result["records"][0]["title"] == "(empty commit message)"
