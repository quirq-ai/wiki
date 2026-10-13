import json
from pathlib import Path

import pytest

from quirq_wiki.activity_store import save_records, write_activity_indexes


def record(identifier="one", day="2026-10-08", **fields):
    return dict(id=identifier, repo="quirq-ai/gardener", kind="commit",
                occurred_at=day + "T12:00:00Z", actor="writer", title="A change",
                url="https://github.com/quirq-ai/gardener/commit/abc", details={}, **fields)


def test_dedup_and_daily_preservation(tmp_path):
    first = record()
    assert len(save_records(tmp_path, [first, first])) == 2
    before = (tmp_path / "_activity/2026/10/08/records.jsonl").read_bytes()
    assert save_records(tmp_path, [first]) == []
    save_records(tmp_path, [record("older", "2026-10-07")])
    assert (tmp_path / "_activity/2026/10/08/records.jsonl").read_bytes() == before
    assert len(before.splitlines()) == 1


def test_invalid_collection_writes_nothing(tmp_path):
    bad = record()
    bad["repo"] = "quirq-ai/../bad"
    with pytest.raises(ValueError):
        save_records(tmp_path, [record(), bad])
    assert not (tmp_path / "_activity").exists()
    bad = record()
    bad["url"] = "javascript:alert(1)"
    with pytest.raises(ValueError):
        save_records(tmp_path, [bad])


def test_corrupt_archive_is_never_overwritten(tmp_path):
    save_records(tmp_path, [record()])
    path = tmp_path / "_activity/2026/10/08/records.jsonl"
    path.write_text("broken json\n", encoding="utf-8")
    with pytest.raises(ValueError, match="Corrupt activity archive"):
        save_records(tmp_path, [record("new")])
    assert path.read_text(encoding="utf-8") == "broken json\n"


def test_indexes_escape_untrusted_metadata_and_link_batches(tmp_path):
    unsafe = record()
    unsafe["title"] = '<script>alert(1)</script> | [evil](javascript:x)'
    unsafe["actor"] = "writer\n| another row"
    unsafe["url"] += "(value)"
    save_records(tmp_path, [unsafe])
    state = {"updated_at": "2026-10-08T13:00:00Z", "repos": {"quirq-ai/gardener": {
        "since": "2026-10-01T00:00:00Z", "last_success": "2026-10-08T13:00:00Z", "error": None}}}
    assert write_activity_indexes(tmp_path, state)
    daily = (tmp_path / "_activity/2026/10/08/README.md").read_text(encoding="utf-8")
    assert "<script>" not in daily
    assert "&lt;script&gt;" in daily
    assert "\\|" in daily
    assert "%28value%29" in daily
    index = (tmp_path / "_activity/INDEX.md").read_text(encoding="utf-8")
    assert "2026/10/08/README.md" in index and "repos/gardener.md" in index
    assert write_activity_indexes(tmp_path, state) == []


def test_wrong_date_and_duplicate_archive_fail_loudly(tmp_path):
    save_records(tmp_path, [record()])
    path = tmp_path / "_activity/2026/10/08/records.jsonl"
    original = path.read_text(encoding="utf-8")
    path.write_text(original + original, encoding="utf-8")
    with pytest.raises(ValueError, match="duplicate"):
        save_records(tmp_path, [])
    wrong = record(day="2026-10-07")
    path.write_text(json.dumps(wrong) + "\n", encoding="utf-8")
    with pytest.raises(ValueError, match="wrong date"):
        save_records(tmp_path, [])


def test_retry_repairs_readable_index_after_interrupted_write(tmp_path, monkeypatch):
    from quirq_wiki import activity_store
    atomic = activity_store._atomic

    def interrupted(path, content):
        if path.name == "README.md":
            raise OSError("simulated interruption")
        return atomic(path, content)

    monkeypatch.setattr(activity_store, "_atomic", interrupted)
    with pytest.raises(OSError):
        save_records(tmp_path, [record()])
    monkeypatch.setattr(activity_store, "_atomic", atomic)
    assert save_records(tmp_path, [record()]) == []
    write_activity_indexes(tmp_path, {"repos": {}, "updated_at": "2026-10-08T12:00:00Z"})
    assert (tmp_path / "_activity/2026/10/08/README.md").is_file()
    assert len((tmp_path / "_activity/2026/10/08/records.jsonl").read_text(encoding="utf-8").splitlines()) == 1


def test_subsecond_records_are_in_chronological_order(tmp_path):
    earlier, later = record("a"), record("b")
    later["occurred_at"] = "2026-10-08T12:00:00.123Z"
    save_records(tmp_path, [later, earlier])
    lines = (tmp_path / "_activity/2026/10/08/records.jsonl").read_text(encoding="utf-8").splitlines()
    assert [json.loads(line)["id"] for line in lines] == ["a", "b"]
