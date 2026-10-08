"""Deterministic daily JSONL batches and readable indexes for activity."""

from __future__ import annotations

import html
import json
import os
import re
import tempfile
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import quote, urlsplit

KINDS = {"commit", "pull_request", "issue", "release", "workflow"}
COVERAGE = (
    "These are observed public metadata revisions, not an exhaustive event audit. "
    "Commits use commit dates and current branches; deleted history and changes between polls "
    "may be unavailable. Issue/PR actors are the authors, not necessarily the latest editors. "
    "The requested first window and last successful collection are shown below. "
    "Daily dates are UTC source timestamps; observed_at records the collection time."
)


def _md(value) -> str:
    text = html.escape(str(value), quote=True).replace("\r", " ").replace("\n", " ")
    for character in ("\\", "`", "*", "_", "[", "]", "|", "~"):
        text = text.replace(character, "\\" + character)
    return text


def _url(value: str) -> str:
    parsed = urlsplit(value)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc or any(ord(c) < 32 for c in value):
        raise ValueError("Activity record URL must be HTTP(S)")
    return quote(value, safe=":/?#=&%+@!~*'$;,")


def _repo(value: str) -> str:
    if not isinstance(value, str) or len(value.split("/")) != 2:
        raise ValueError("Activity repository must be owner/name")
    for name in value.split("/"):
        if not re.fullmatch(r"[A-Za-z0-9_.-]+", name) or name in {".", ".."}:
            raise ValueError("Invalid activity repository name")
    return value.split("/", 1)[1]


def _validate(record: dict) -> dict:
    if not isinstance(record, dict):
        raise ValueError("Activity record must be an object")
    for key in ("id", "repo", "kind", "occurred_at", "actor", "title", "url"):
        if not isinstance(record.get(key), str) or not record[key]:
            raise ValueError(f"Activity record has invalid {key}")
    _repo(record["repo"])
    if record["kind"] not in KINDS or not isinstance(record.get("details"), dict):
        raise ValueError("Activity record has invalid kind or details")
    for key in ("occurred_at", "observed_at"):
        if key not in record:
            continue
        stamp = datetime.fromisoformat(record[key].replace("Z", "+00:00"))
        if stamp.tzinfo is None or stamp.utcoffset().total_seconds() != 0:
            raise ValueError(f"Activity {key} must be UTC with timezone")
    _url(record["url"])
    json.dumps(record, allow_nan=False)
    return record


def _day(record: dict) -> str:
    return datetime.fromisoformat(record["occurred_at"].replace("Z", "+00:00")).astimezone(timezone.utc).strftime("%Y/%m/%d")


def _sort(record: dict):
    return datetime.fromisoformat(record["occurred_at"].replace("Z", "+00:00")), record["repo"], record["kind"], record["id"]


def _atomic(path: Path, content: str) -> bool:
    if path.is_file() and path.read_text(encoding="utf-8") == content:
        return False
    path.parent.mkdir(parents=True, exist_ok=True)
    descriptor, temporary = tempfile.mkstemp(dir=path.parent, prefix=".activity-", suffix=".tmp")
    try:
        with os.fdopen(descriptor, "w", encoding="utf-8", newline="\n") as handle:
            handle.write(content)
        os.replace(temporary, path)
    finally:
        Path(temporary).unlink(missing_ok=True)
    return True


def _load(root: Path) -> dict[str, list[dict]]:
    batches = {}
    seen = set()
    for path in sorted(root.glob("*/*/*/records.jsonl")):
        day = path.parent.relative_to(root).as_posix()
        try:
            datetime.strptime(day, "%Y/%m/%d")
            records = []
            for line in path.read_text(encoding="utf-8").splitlines():
                if not line.strip():
                    raise ValueError("blank JSONL record")
                record = _validate(json.loads(line))
                if _day(record) != day:
                    raise ValueError("record stored in wrong date batch")
                key = record["repo"], record["id"]
                if key in seen:
                    raise ValueError("duplicate stored activity ID")
                seen.add(key)
                records.append(record)
            batches[day] = records
        except (ValueError, TypeError, KeyError) as exc:
            raise ValueError(f"Corrupt activity archive {path}: {exc}") from exc
    return batches


def _counts(records: list[dict]) -> str:
    counts = Counter(record["kind"] for record in records)
    return ", ".join(f"{kind.replace('_', ' ')}: {counts[kind]}" for kind in sorted(counts)) or "No records"


def _daily(day: str, records: list[dict]) -> str:
    lines = [f"# Activity · {day.replace('/', '-')}", "", "[Activity index](../../../INDEX.md) · [Structured records](records.jsonl)", "",
             f"{len(records)} observed records. {_counts(records)}.", "",
             "| Time (UTC) | Repository | Kind | Author / actor | Activity | State |", "| --- | --- | --- | --- | --- | --- |"]
    for record in sorted(records, key=_sort, reverse=True):
        name = _repo(record["repo"])
        details = record["details"]
        status = details.get("conclusion") or details.get("state") or details.get("status") or ""
        if details.get("merged_at"):
            status = "merged"
        lines.append(f"| {_md(record['occurred_at'][11:19])} | [{_md(name)}](../../../repos/{quote(name)}.md) | {_md(record['kind'].replace('_', ' '))} | {_md(record['actor'])} | [{_md(record['title'])}]({_url(record['url'])}) | {_md(status)} |")
    lines += ["", "Dates describe the source record. Revisions captured by later collections can appear in earlier date batches.", ""]
    return "\n".join(lines)


def save_records(wiki_root: Path, records: list[dict]) -> list[Path]:
    # Validate the whole incoming collection and stored archive before any write.
    records = [_validate(record) for record in records]
    root = wiki_root / "_activity"
    batches = _load(root)
    seen = {(record["repo"], record["id"]) for group in batches.values() for record in group}
    touched = set()
    for record in sorted(records, key=_sort):
        key = record["repo"], record["id"]
        if key in seen:
            continue
        seen.add(key)
        day = _day(record)
        batches.setdefault(day, []).append(record)
        touched.add(day)
    written = []
    for day in sorted(touched):
        group = sorted(batches[day], key=_sort)
        raw = "".join(json.dumps(record, ensure_ascii=False, sort_keys=True, allow_nan=False) + "\n" for record in group)
        for path, content in ((root / day / "records.jsonl", raw), (root / day / "README.md", _daily(day, group))):
            if _atomic(path, content):
                written.append(path)
    return written


def write_activity_indexes(wiki_root: Path, state: dict) -> list[Path]:
    root = wiki_root / "_activity"
    batches = _load(root)
    by_repo = defaultdict(lambda: defaultdict(list))
    for day, records in batches.items():
        for record in records:
            by_repo[record["repo"]][day].append(record)
    repo_names = sorted(set(by_repo) | set(state.get("repos", {})), key=str.lower)
    for name in repo_names:
        _repo(name)
    written = []
    for day, records in batches.items():
        path = root / day / "README.md"
        if _atomic(path, _daily(day, records)):
            written.append(path)
    lines = ["# Repository activity", "", "[Repository data index](../INDEX.md) · [Collection state](state.json)", "",
             "Commits, pull requests, issues, releases and workflows, batched by UTC day.", "",
             f"**Stored records:** {sum(len(group) for group in batches.values()):,} · **Repositories:** {len(repo_names)} · **Last collection:** {_md(state.get('updated_at', 'not run'))}", "",
             "## Daily batches", "", "| Date (UTC) | Records | Coverage |", "| --- | ---: | --- |"]
    for day in sorted(batches, reverse=True):
        lines.append(f"| [{day.replace('/', '-')}]({day}/README.md) | {len(batches[day]):,} | {_counts(batches[day])} |")
    if not batches:
        lines.append("| No records collected yet | 0 | Check repository status below |")
    lines += ["", "## Repositories", "", "| Repository | Records | Requested from (UTC) | Last success (UTC) | Status |", "| --- | ---: | --- | --- | --- |"]
    for full_name in repo_names:
        name = _repo(full_name)
        checkpoint = state.get("repos", {}).get(full_name, {})
        groups = by_repo[full_name]
        count = sum(len(group) for group in groups.values())
        status = "FAILED: " + str(checkpoint["error"]) if checkpoint.get("error") else ("Collected" if checkpoint.get("last_success") else "Not collected")
        lines.append(f"| [{_md(full_name)}](repos/{quote(name)}.md) | {count:,} | {_md(checkpoint.get('since', 'unknown'))} | {_md(checkpoint.get('last_success') or 'none')} | {_md(status)} |")
        detail = [f"# {_md(full_name)} activity", "", "[All activity](../INDEX.md)", "",
                  f"**Status:** {_md(status)}", "", f"**Requested from:** {_md(checkpoint.get('since', 'unknown'))} · **Last success:** {_md(checkpoint.get('last_success') or 'none')}", "",
                  f"**Stored records:** {count:,}", "", "| Date (UTC) | Records | Kinds |", "| --- | ---: | --- |"]
        for day in sorted(groups, reverse=True):
            detail.append(f"| [{day.replace('/', '-')}](../{day}/README.md) | {len(groups[day]):,} | {_counts(groups[day])} |")
        if not groups:
            detail.append("| No records collected in the requested window | 0 | |")
        detail += ["", COVERAGE, ""]
        path = root / "repos" / f"{name}.md"
        if _atomic(path, "\n".join(detail)):
            written.append(path)
    lines += ["", "## Coverage", "", COVERAGE, "", "Reruns deduplicate stored IDs. Failed repositories retain their cursor and retry window. Historical public records remain archived if a repository later becomes private or disappears.", ""]
    path = root / "INDEX.md"
    if _atomic(path, "\n".join(lines)):
        written.append(path)
    return written
