"""Activity orchestration must keep failures retryable and stored data durable."""

import json
from datetime import datetime, timezone

import pytest

from quirq_wiki import activity

NOW = datetime(2026, 10, 8, 12, tzinfo=timezone.utc)


@pytest.fixture(autouse=True)
def stub_visibility(monkeypatch):
    monkeypatch.setattr(activity, "_assert_public_repo", lambda *args: None)


def test_discovery_includes_wiki_forks_archived_and_excludes_private(monkeypatch):
    monkeypatch.setattr(activity, "github_request", lambda *a, **k: [
        {"name": "wiki", "private": False},
        {"name": "fork", "fork": True, "private": False},
        {"name": "archive", "archived": True, "private": False},
        {"name": "secret", "private": True},
    ])
    assert activity.discover_activity_repos("quirq-ai") == ["archive", "fork", "wiki"]


def test_discovery_rejects_missing_visibility_and_unsafe_names(monkeypatch):
    monkeypatch.setattr(activity, "github_request", lambda *a, **k: [{"name": "unknown"}])
    with pytest.raises(ValueError, match="visibility"):
        activity.discover_activity_repos("quirq-ai")
    monkeypatch.setattr(activity, "github_request", lambda *a, **k: [{"name": "../bad", "private": False}])
    with pytest.raises(ValueError, match="Invalid GitHub"):
        activity.discover_activity_repos("quirq-ai")


def test_partial_failure_keeps_cursor_and_retry_uses_overlap(tmp_path, monkeypatch):
    monkeypatch.setattr(activity, "discover_activity_repos", lambda *a, **k: ["alpha", "beta"])
    starts = []

    def collect(**kwargs):
        starts.append((kwargs["repo"], activity.utc_timestamp(kwargs["since"])))
        if kwargs["repo"] == "beta":
            raise RuntimeError("GitHub API 403: rate limit")
        return {"records": [], "pending_runs": [123]}

    monkeypatch.setattr(activity, "collect_activity", collect)
    result = activity.generate_activity(wiki_root=tmp_path, until=NOW)
    assert result.succeeded == ["quirq-ai/alpha"]
    assert "quirq-ai/beta" in result.failed
    state = json.loads((tmp_path / "_activity" / "state.json").read_text(encoding="utf-8"))
    assert state["repos"]["quirq-ai/alpha"]["last_success"] == "2026-10-08T12:00:00Z"
    assert not state["repos"]["quirq-ai/beta"].get("last_success")
    starts.clear()
    activity.generate_activity(wiki_root=tmp_path, until=NOW)
    assert starts == [("alpha", "2026-10-07T12:00:00Z"), ("beta", "2026-10-01T12:00:00Z")]


def test_storage_failure_does_not_checkpoint_success(tmp_path, monkeypatch):
    monkeypatch.setattr(activity, "discover_activity_repos", lambda *a, **k: ["alpha"])
    monkeypatch.setattr(activity, "collect_activity", lambda **k: {"records": [], "pending_runs": []})

    def fail(*args):
        raise OSError("disk full")

    monkeypatch.setattr(activity, "save_records", fail)
    result = activity.generate_activity(wiki_root=tmp_path, until=NOW)
    assert result.failed == {"quirq-ai/alpha": "disk full"}
    state = json.loads((tmp_path / "_activity" / "state.json").read_text(encoding="utf-8"))
    assert not state["repos"]["quirq-ai/alpha"].get("last_success")


def test_since_backfill_and_private_repo_rejection(tmp_path, monkeypatch):
    monkeypatch.setattr(activity, "discover_activity_repos", lambda *a, **k: ["alpha"])
    with pytest.raises(ValueError, match="currently public"):
        activity.generate_activity(wiki_root=tmp_path, repo_name="secret", until=NOW)
    monkeypatch.setattr(activity, "collect_activity", lambda **k: {"records": [], "pending_runs": []})
    since = datetime(2026, 10, 7, tzinfo=timezone.utc)
    activity.generate_activity(wiki_root=tmp_path, since=since, until=NOW)
    state = json.loads((tmp_path / "_activity" / "state.json").read_text(encoding="utf-8"))
    assert state["repos"]["quirq-ai/alpha"]["since"] == "2026-10-07T00:00:00Z"


def test_lock_prevents_concurrent_collection_and_releases(tmp_path):
    with activity._collection_lock(tmp_path):
        with pytest.raises(RuntimeError, match="already running"):
            with activity._collection_lock(tmp_path):
                pass
    with activity._collection_lock(tmp_path):
        pass


def test_failed_explicit_backfill_resumes_older_window(tmp_path, monkeypatch):
    monkeypatch.setattr(activity, "discover_activity_repos", lambda *a, **k: ["alpha"])
    monkeypatch.setattr(activity, "collect_activity", lambda **k: {"records": [], "pending_runs": []})
    activity.generate_activity(wiki_root=tmp_path, until=NOW)

    def fail(**kwargs):
        raise RuntimeError("temporary API error")

    monkeypatch.setattr(activity, "collect_activity", fail)
    earlier = datetime(2026, 9, 1, tzinfo=timezone.utc)
    activity.generate_activity(wiki_root=tmp_path, since=earlier, until=NOW)
    starts = []

    def recover(**kwargs):
        starts.append(kwargs["since"])
        return {"records": [], "pending_runs": []}

    monkeypatch.setattr(activity, "collect_activity", recover)
    activity.generate_activity(wiki_root=tmp_path, until=NOW)
    assert starts == [earlier]
    state = json.loads((tmp_path / "_activity" / "state.json").read_text(encoding="utf-8"))
    assert "retry_since" not in state["repos"]["quirq-ai/alpha"]


def test_visibility_change_before_save_discards_collection(tmp_path, monkeypatch):
    monkeypatch.setattr(activity, "discover_activity_repos", lambda *a, **k: ["alpha"])
    checks = []

    def visibility(*args):
        checks.append(True)
        if len(checks) == 2:
            raise RuntimeError("No longer public")

    monkeypatch.setattr(activity, "_assert_public_repo", visibility)
    monkeypatch.setattr(activity, "collect_activity", lambda **k: {"records": [], "pending_runs": []})
    saved = []
    monkeypatch.setattr(activity, "save_records", lambda *args: saved.append(True))
    result = activity.generate_activity(wiki_root=tmp_path, until=NOW)
    assert result.failed == {"quirq-ai/alpha": "No longer public"}
    assert not saved
