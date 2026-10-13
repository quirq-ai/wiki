"""Collect public repository metadata as observed revisions, not an audit log.

Windows are inclusive UTC intervals. Commit times are Git commit times, not
push times; only commits reachable from currently visible branches are read.
Issues/PRs and workflows expose current state, so intermediate changes between
polls cannot be reconstructed. Releases without ``updated_at`` can only be
dated by publication/creation, and edits to older releases may be unavailable.
No comment bodies, issue bodies, release bodies, or email addresses are stored.
"""

from __future__ import annotations

import hashlib
import json
import urllib.error
import urllib.parse
from datetime import datetime, timezone
from typing import Any, Callable, Iterator

from quirq_wiki.github_api import github_request


MAX_PAGES = 1000
Request = Callable[..., Any]


def _utc(value: datetime) -> datetime:
    if value.tzinfo is None or value.utcoffset() is None:
        raise ValueError("Activity timestamps must include a timezone")
    return value.astimezone(timezone.utc)


def _iso(value: datetime) -> str:
    return _utc(value).isoformat().replace("+00:00", "Z")


def _timestamp(value: Any, field: str) -> datetime:
    if not isinstance(value, str) or not value:
        raise ValueError(f"Missing or invalid activity timestamp: {field}")
    try:
        return _utc(datetime.fromisoformat(value.replace("Z", "+00:00")))
    except ValueError as exc:
        raise ValueError(f"Invalid activity timestamp: {field}") from exc


def _text(item: dict[str, Any], key: str) -> str:
    value = item.get(key)
    if not isinstance(value, str) or not value:
        raise ValueError(f"Missing or invalid activity field: {key}")
    return value


def _identifier(item: dict[str, Any], key: str = "id") -> str:
    value = item.get(key)
    if isinstance(value, bool) or not isinstance(value, (int, str)) or not str(value):
        raise ValueError(f"Missing or invalid activity identifier: {key}")
    return str(value)


def _object(value: Any, field: str) -> dict[str, Any]:
    if not isinstance(value, dict):
        raise ValueError(f"Invalid activity object: {field}")
    return value


def _actor(value: Any) -> str:
    if isinstance(value, dict) and isinstance(value.get("login"), str):
        return value["login"]
    return "unknown"


def _has_status(exc: Exception, status: int) -> bool:
    current: BaseException | None = exc
    while current is not None:
        if isinstance(current, urllib.error.HTTPError) and current.code == status:
            return True
        current = current.__cause__
    return False


def _pages(
    request: Request,
    base: str,
    endpoint: str,
    *,
    token: str | None,
    params: dict[str, Any] | None = None,
    result_key: str | None = None,
    empty_conflict: bool = False,
) -> Iterator[dict[str, Any]]:
    for page in range(1, MAX_PAGES + 1):
        query = urllib.parse.urlencode({**(params or {}), "per_page": 100, "page": page})
        try:
            payload = request(f"{base}/{endpoint}?{query}", token=token)
        except Exception as exc:
            if empty_conflict and page == 1 and _has_status(exc, 409):
                return
            raise
        if result_key is not None:
            payload = _object(payload, endpoint).get(result_key)
        if not isinstance(payload, list) or any(not isinstance(item, dict) for item in payload):
            raise ValueError(f"Invalid activity page from {endpoint}")
        if len(payload) > 100:
            raise ValueError(f"Oversized activity page from {endpoint}")
        yield from payload
        if len(payload) < 100:
            return
    raise RuntimeError(f"Activity pagination exceeded {MAX_PAGES} pages for {endpoint}; collection incomplete")


def _record(
    *,
    repository: str,
    kind: str,
    resource: str,
    occurred: datetime,
    actor: str,
    title: str,
    url: str,
    details: dict[str, Any],
) -> dict[str, Any]:
    record = {
        "repo": repository,
        "kind": kind,
        "occurred_at": _iso(occurred),
        "actor": actor,
        "title": title,
        "url": url,
        "details": details,
    }
    if kind == "commit":
        record["id"] = f"{repository}:commit:{resource}"
    else:
        revision = hashlib.sha256(json.dumps(record, sort_keys=True, ensure_ascii=False).encode("utf-8")).hexdigest()[:16]
        record["id"] = f"{repository}:{kind}:{resource}:{record['occurred_at']}:{revision}"
    return record


def collect_activity(
    *,
    org: str,
    repo: str,
    since: datetime,
    until: datetime,
    pending_runs: list[int] | None = None,
    token: str | None = None,
    request: Request | None = None,
) -> dict[str, Any]:
    """Collect one repository, failing the collection if any source is incomplete.

    Callers must verify repository visibility before invoking this function.
    ``request`` is an optional injectable equivalent of ``github_request``.
    Workflow enumeration is deliberately unfiltered: creation-time filters miss
    updates to old runs, and GitHub caps filtered searches at 1,000 results.
    """
    since, until = _utc(since), _utc(until)
    if since > until:
        raise ValueError("Activity since must not be after until")
    if not org or not repo or "/" in org or "/" in repo:
        raise ValueError("Activity requires a repository owner and name")
    fetch = request or github_request
    repository = f"{org}/{repo}"
    base = f"https://api.github.com/repos/{urllib.parse.quote(org, safe='')}/{urllib.parse.quote(repo, safe='')}"
    records: list[dict[str, Any]] = []

    # All current branches, not just the default branch. Shared commits appear once.
    branches = sorted({_text(branch, "name") for branch in _pages(fetch, base, "branches", token=token, empty_conflict=True)})
    commits: dict[str, dict[str, Any]] = {}
    for branch in branches:
        for item in _pages(fetch, base, "commits", token=token, params={"sha": branch, "since": _iso(since), "until": _iso(until)}, empty_conflict=True):
            sha = _text(item, "sha")
            commit = _object(item.get("commit"), "commit")
            committer = commit.get("committer") or commit.get("author")
            occurred = _timestamp(_object(committer, "commit.committer").get("date"), "commit.date")
            if not since <= occurred <= until:
                continue
            if sha in commits:
                commits[sha]["details"]["branches"].append(branch)
                continue
            message = commit.get("message")
            if not isinstance(message, str):
                raise ValueError("Invalid activity field: commit.message")
            title = next((line.strip() for line in message.splitlines() if line.strip()), "(empty commit message)")
            commits[sha] = _record(repository=repository, kind="commit", resource=sha, occurred=occurred, actor=_actor(item.get("author")), title=title, url=_text(item, "html_url"), details={"sha": sha, "branches": [branch], "timestamp_basis": "commit"})
    records.extend(commits.values())

    for item in _pages(fetch, base, "issues", token=token, params={"state": "all", "sort": "updated", "direction": "asc", "since": _iso(since)}):
        occurred = _timestamp(item.get("updated_at"), "issue.updated_at")
        if not since <= occurred <= until:
            continue
        number = _identifier(item, "number")
        details = {key: item[key] for key in ("number", "state", "state_reason", "created_at", "updated_at", "closed_at") if key in item}
        kind = "issue"
        if "pull_request" in item:
            pull = _object(item["pull_request"], "issue.pull_request")
            kind = "pull_request"
            if "merged_at" in pull:
                details["merged_at"] = pull["merged_at"]
        records.append(_record(repository=repository, kind=kind, resource=number, occurred=occurred, actor=_actor(item.get("user")), title=_text(item, "title"), url=_text(item, "html_url"), details=details))

    for item in _pages(fetch, base, "releases", token=token):
        if item.get("draft"):
            continue
        resource = _identifier(item)
        basis = next((key for key in ("updated_at", "published_at", "created_at") if item.get(key)), None)
        occurred = _timestamp(item.get(basis) if basis else None, "release.timestamp")
        if not since <= occurred <= until:
            continue
        details = {key: item[key] for key in ("tag_name", "target_commitish", "prerelease", "created_at", "published_at", "updated_at") if key in item}
        details["timestamp_basis"] = basis
        title = item.get("name") or _text(item, "tag_name")
        if not isinstance(title, str):
            raise ValueError("Invalid activity field: release.name")
        records.append(_record(repository=repository, kind="release", resource=resource, occurred=occurred, actor=_actor(item.get("author")), title=title, url=_text(item, "html_url"), details=details))

    pending = set(pending_runs or [])
    if any(isinstance(run, bool) or not isinstance(run, int) or run < 1 for run in pending):
        raise ValueError("Pending workflow IDs must be positive integers")
    workflow_ids: set[int] = set()
    next_pending: set[int] = set()

    def add_workflow(item: dict[str, Any]) -> None:
        resource = _identifier(item)
        try:
            run_id = int(resource)
        except ValueError as exc:
            raise ValueError("Invalid workflow ID") from exc
        if run_id < 1:
            raise ValueError("Invalid workflow ID")
        workflow_ids.add(run_id)
        status = _text(item, "status")
        occurred = _timestamp(item.get("updated_at"), "workflow.updated_at")
        # Keep changes newer than this batch's boundary pending for the next run.
        if status != "completed" or occurred > until:
            next_pending.add(run_id)
        if occurred > until or (occurred < since and run_id not in pending):
            return
        details = {key: item[key] for key in ("id", "workflow_id", "run_number", "run_attempt", "event", "status", "conclusion", "head_branch", "head_sha", "created_at", "updated_at", "run_started_at") if key in item}
        title = item.get("display_title") or item.get("name") or f"Workflow run {resource}"
        if not isinstance(title, str):
            raise ValueError("Invalid activity field: workflow.title")
        records.append(_record(repository=repository, kind="workflow", resource=resource, occurred=occurred, actor=_actor(item.get("triggering_actor") or item.get("actor")), title=title, url=_text(item, "html_url"), details=details))

    for item in _pages(fetch, base, "actions/runs", token=token, result_key="workflow_runs"):
        add_workflow(item)
    for run_id in sorted(pending - workflow_ids):
        try:
            item = _object(fetch(f"{base}/actions/runs/{run_id}", token=token), "workflow run")
        except RuntimeError as exc:
            if _has_status(exc, 404):
                # A previously observed run may have been deleted since the last poll.
                continue
            raise
        if _identifier(item) != str(run_id):
            raise ValueError("Unexpected ID in pending workflow response")
        add_workflow(item)

    # Page boundaries can shift while a collection runs; exact repeats are safe.
    unique = {record["id"]: record for record in records}
    return {"records": sorted(unique.values(), key=lambda record: (record["occurred_at"], record["kind"], record["id"])), "pending_runs": sorted(next_pending)}
