"""Collect public repository activity into durable daily wiki batches."""

from __future__ import annotations

import json
import os
import re
import subprocess
import tempfile
from contextlib import contextmanager
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.parse import urlencode, quote

from quirq_wiki.activity_collect import collect_activity
from quirq_wiki.activity_store import save_records, write_activity_indexes
from quirq_wiki.github_api import github_request

STATE_NAME = "state.json"


def utc_timestamp(value: datetime) -> str:
    return value.astimezone(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")


def parse_timestamp(value: str) -> datetime:
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone(timezone.utc)


def validate_name(value: str) -> str:
    if not re.fullmatch(r"[A-Za-z0-9_.-]+", value) or value in {".", ".."}:
        raise ValueError(f"Invalid GitHub owner or repository name: {value!r}")
    return value


def discover_activity_repos(org: str, *, token: str | None = None) -> list[str]:
    """All public repos, including forks, archived repos and the wiki itself."""
    validate_name(org)
    names = set()
    for page in range(1, 1001):
        query = urlencode(dict(type="all", per_page=100, page=page, sort="full_name"))
        payload = github_request(f"https://api.github.com/orgs/{quote(org)}/repos?{query}", token=token)
        if not isinstance(payload, list):
            raise ValueError("Invalid organization repository response")
        for item in payload:
            if not isinstance(item, dict) or not isinstance(item.get("private"), bool):
                raise ValueError("Repository response is missing explicit visibility")
            if item["private"]:
                continue
            names.add(validate_name(item["name"]))
        if len(payload) < 100:
            return sorted(names, key=str.lower)
    raise RuntimeError("Organization discovery exceeded 1000 pages; refusing an incomplete catalog")


def git_credential_token() -> str:
    """Opt-in local credential helper; never print or persist its response."""
    environment = dict(os.environ, GIT_TERMINAL_PROMPT="0", GCM_INTERACTIVE="never")
    result = subprocess.run(
        ["git", "credential", "fill"],
        input="protocol=https\nhost=github.com\n\n",
        capture_output=True, text=True, env=environment, timeout=30, check=False,
    )
    fields = dict(line.split("=", 1) for line in result.stdout.splitlines() if "=" in line)
    token = fields.get("password")
    if result.returncode or not token:
        raise RuntimeError("No GitHub credential available; set GITHUB_TOKEN or authenticate Git first")
    return token


def _assert_public_repo(org: str, name: str, token: str | None) -> None:
    payload = github_request(f"https://api.github.com/repos/{quote(org)}/{quote(name)}", token=token)
    if (not isinstance(payload, dict) or payload.get("private") is not False
            or str(payload.get("full_name", "")).lower() != f"{org}/{name}".lower()):
        raise RuntimeError(f"{org}/{name} is no longer confirmed public under that name")


def _write_json(path: Path, value: dict) -> None:
    content = json.dumps(value, ensure_ascii=False, indent=2, sort_keys=True) + "\n"
    if path.exists() and path.read_text(encoding="utf-8") == content:
        return
    descriptor, temporary = tempfile.mkstemp(dir=path.parent, prefix=".state-", suffix=".tmp")
    try:
        with os.fdopen(descriptor, "w", encoding="utf-8", newline="\n") as handle:
            handle.write(content)
        os.replace(temporary, path)
    finally:
        Path(temporary).unlink(missing_ok=True)


@contextmanager
def _collection_lock(wiki_root: Path):
    """An OS lock releases automatically if a process crashes."""
    lock_path = wiki_root / ".cache" / "activity.lock"
    lock_path.parent.mkdir(parents=True, exist_ok=True)
    with lock_path.open("a+b") as handle:
        handle.seek(0, 2)
        if handle.tell() == 0:
            handle.write(b"0")
            handle.flush()
        handle.seek(0)
        try:
            if os.name == "nt":
                import msvcrt
                msvcrt.locking(handle.fileno(), msvcrt.LK_NBLCK, 1)
            else:
                import fcntl
                fcntl.flock(handle, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except OSError as exc:
            raise RuntimeError("Another activity collection is already running") from exc
        try:
            yield
        finally:
            handle.seek(0)
            if os.name == "nt":
                msvcrt.locking(handle.fileno(), msvcrt.LK_UNLCK, 1)
            else:
                fcntl.flock(handle, fcntl.LOCK_UN)


@dataclass
class ActivityResult:
    succeeded: list[str]
    failed: dict[str, str]
    written: list[Path]
    records_seen: int


def _link_existing_indexes(wiki_root: Path, state: dict) -> list[Path]:
    """Expose the archive without regenerating every source-code page."""
    changed = []
    index = wiki_root / "INDEX.md"
    if index.is_file():
        content = index.read_text(encoding="utf-8")
        if "(_activity/INDEX.md)" not in content:
            heading = "# Index\n"
            if heading in content:
                content = content.replace(heading, heading + "\n[Daily activity index](_activity/INDEX.md)\n", 1)
                index.write_text(content, encoding="utf-8", newline="\n")
                changed.append(index)
    for full_name in state["repos"]:
        owner, name = full_name.split("/", 1)
        validate_name(owner)
        validate_name(name)
        path = wiki_root / name / "_index.md"
        link = f"- [Activity history](../_activity/repos/{name}.md)"
        if path.is_file() and (wiki_root / "_activity" / "repos" / f"{name}.md").is_file():
            content = path.read_text(encoding="utf-8")
            if link not in content and "<!-- quirq-wiki-generated " in content:
                content = content.replace("- Default branch:", link + "\n- Default branch:", 1)
                path.write_text(content, encoding="utf-8", newline="\n")
                changed.append(path)
    return changed


def generate_activity(
    *, wiki_root: Path, org: str = "quirq-ai", repo_name: str | None = None,
    since: datetime | None = None, until: datetime | None = None,
    token: str | None = None, progress=None,
) -> ActivityResult:
    """Checkpoint a repo only after all five sources and batch writes succeed.

    Subsequent runs overlap the prior success by one day. Failed repositories
    retain their cursor; successful repositories remain usable in partial runs.
    """
    wiki_root = wiki_root.resolve()
    until = (until or datetime.now(timezone.utc)).astimezone(timezone.utc)
    if since is not None:
        since = since.astimezone(timezone.utc)
        if since > until:
            raise ValueError("--since must not be after the collection time")
    with _collection_lock(wiki_root):
        names = discover_activity_repos(org, token=token)
        if repo_name:
            validate_name(repo_name)
            if repo_name not in names:
                raise ValueError(f"{org}/{repo_name} is not a currently public repository")
            names = [repo_name]
        folder = wiki_root / "_activity"
        folder.mkdir(exist_ok=True)
        state_path = folder / STATE_NAME
        state = json.loads(state_path.read_text(encoding="utf-8")) if state_path.exists() else {
            "schema_version": 1, "org": org, "repos": {},
        }
        if (not isinstance(state, dict) or state.get("schema_version") != 1
                or state.get("org") != org or not isinstance(state.get("repos"), dict)):
            raise ValueError("Activity state has an incompatible schema or organization")
        if any(not isinstance(value, dict) for value in state["repos"].values()):
            raise ValueError("Activity state has an invalid repository checkpoint")
        result = ActivityResult([], {}, [], 0)
        for index, name in enumerate(names, 1):
            full_name = f"{org}/{name}"
            checkpoint = state["repos"].get(full_name, {})
            initial = parse_timestamp(checkpoint["since"]) if checkpoint.get("since") else (since or until - timedelta(days=7))
            lower = since or (
                max(initial, parse_timestamp(checkpoint["last_success"]) - timedelta(days=1))
                if checkpoint.get("last_success") else initial
            )
            if checkpoint.get("retry_since"):
                lower = min(lower, parse_timestamp(checkpoint["retry_since"]))
            initial = min(initial, lower)
            if progress:
                progress(f"[{index}/{len(names)}] {full_name} since {utc_timestamp(lower)}")
            try:
                _assert_public_repo(org, name, token)
                collected = collect_activity(
                    org=org, repo=name, since=lower, until=until,
                    pending_runs=checkpoint.get("pending_runs", []), token=token,
                )
                _assert_public_repo(org, name, token)
                for record in collected["records"]:
                    record["observed_at"] = utc_timestamp(until)
                paths = save_records(wiki_root, collected["records"])
                result.written.extend(paths)
                result.records_seen += len(collected["records"])
                checkpoint = dict(checkpoint, since=utc_timestamp(initial),
                                  last_success=utc_timestamp(until), error=None,
                                  pending_runs=collected["pending_runs"])
                checkpoint.pop("retry_since", None)
                result.succeeded.append(full_name)
            except (RuntimeError, ValueError, OSError) as exc:
                error = str(exc)[:500]
                checkpoint = dict(checkpoint, since=utc_timestamp(initial), error=error,
                                  retry_since=utc_timestamp(lower))
                result.failed[full_name] = error
                if progress:
                    progress(f"  FAILED: {error}")
            state["repos"][full_name] = checkpoint
            state["updated_at"] = utc_timestamp(until)
            _write_json(state_path, state)
        result.written.extend(write_activity_indexes(wiki_root, state))
        result.written.extend(_link_existing_indexes(wiki_root, state))
        result.written.append(state_path)
        return result
