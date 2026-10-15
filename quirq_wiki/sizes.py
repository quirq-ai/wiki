"""Daily size and file-count snapshots of every public repository in the org.

Each run reads the org's public repositories and, for each one, the recursive
Git tree of its default branch at HEAD: the number of files (blobs) and the sum
of their sizes. It also keeps GitHub's own repository size, which counts the
whole history. One snapshot per UTC day is kept in `_sizes/history.jsonl`
(a rerun on the same day updates that day's line, keeping a repository's earlier
measurement when the rerun could not read it), with the newest copy in
`_sizes/latest.json` and a Markdown table in `_sizes/README.md`.

Files are Git blobs: a symlink counts as a file sized by its target path, a Git
LFS file counts at its pointer size, and submodules are left out.
"""

from __future__ import annotations

import json
import os
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable
from urllib.error import HTTPError
from urllib.parse import quote, urlencode

from quirq_wiki.activity import utc_timestamp, validate_name
from quirq_wiki.activity_store import _md
from quirq_wiki.github_api import github_request

FOLDER = "_sizes"
SCHEMA_VERSION = 1

Request = Callable[..., Any]


def _status(exc: BaseException) -> int | None:
    cause = exc.__cause__
    return cause.code if isinstance(cause, HTTPError) else None


def _is_rate_limit(exc: BaseException) -> bool:
    code = _status(exc)
    return code == 429 or (code == 403 and "rate limit" in str(exc).lower())


def public_repos(org: str, *, token: str | None, request: Request = github_request) -> list[dict[str, Any]]:
    """Every public repository with its default branch and GitHub's size in KB."""
    validate_name(org)
    repos = []
    for page in range(1, 101):
        query = urlencode(dict(type="all", per_page=100, page=page, sort="full_name"))
        payload = request(f"https://api.github.com/orgs/{quote(org)}/repos?{query}", token=token)
        if not isinstance(payload, list):
            raise ValueError("Invalid organization repository response")
        for item in payload:
            if not isinstance(item, dict) or not isinstance(item.get("private"), bool):
                raise ValueError("Repository response is missing explicit visibility")
            # The wiki is public: private and internal repositories never enter a snapshot.
            if item["private"] is not False or item.get("visibility", "public") != "public":
                continue
            branch = item.get("default_branch")
            size = item.get("size")
            repos.append({
                "repo": validate_name(item["name"]),
                "default_branch": branch if isinstance(branch, str) and branch else None,
                "github_kb": size if isinstance(size, int) and size >= 0 else None,
                "archived": bool(item.get("archived")),
                "fork": bool(item.get("fork")),
            })
        if len(payload) < 100:
            return sorted(repos, key=lambda repo: repo["repo"].lower())
    raise RuntimeError("Organization listing exceeded 100 pages; refusing an incomplete snapshot")


def confirm_public(org: str, repo: str, *, token: str | None, request: Request = github_request) -> bool:
    """Re-read the repository after measuring it, as activity does, so one made private mid-run is left out."""
    payload = request(f"https://api.github.com/repos/{quote(org)}/{quote(repo)}", token=token)
    return (isinstance(payload, dict) and payload.get("private") is False
            and payload.get("visibility", "public") == "public"
            and str(payload.get("full_name", "")).lower() == f"{org}/{repo}".lower())


def _totals(rows: list[dict[str, Any]], unconfirmed: int = 0) -> dict[str, Any]:
    measured = [row for row in rows if row["error"] is None]
    return {
        "repos": len(rows),
        "files": sum(row["files"] for row in measured),
        "bytes": sum(row["bytes"] for row in measured),
        "github_kb": sum(row["github_kb"] or 0 for row in rows),
        # GitHub's total is a floor when it gave no size for a repository.
        "github_complete": all(row["github_kb"] is not None for row in rows),
        # Repositories listed as public but not confirmed public after measuring.
        "left_out": unconfirmed,
        # Totals are a floor when a repository failed, its tree was cut, or one was left out.
        "complete": len(measured) == len(rows) and not any(row["truncated"] for row in rows) and not unconfirmed,
    }


def measure_tree(org: str, repo: str, branch: str, *, token: str | None,
                 request: Request = github_request) -> dict[str, Any]:
    """Files and bytes in the default branch's tree at HEAD."""
    url = (f"https://api.github.com/repos/{quote(org)}/{quote(repo)}/git/trees/"
           f"{quote(branch, safe='')}?recursive=1")
    payload = request(url, token=token)
    if not isinstance(payload, dict) or not isinstance(payload.get("tree"), list):
        raise ValueError(f"Invalid tree response for {org}/{repo}")
    files = 0
    total = 0
    for entry in payload["tree"]:
        # Blobs are files; trees are folders and commits are submodules.
        if isinstance(entry, dict) and entry.get("type") == "blob":
            size = entry.get("size")
            if not isinstance(size, int) or size < 0:
                raise ValueError(f"Invalid blob size in {org}/{repo}")
            files += 1
            total += size
    sha = payload.get("sha")
    return {
        "files": files,
        "bytes": total,
        # For a branch name GitHub answers with the commit it resolved to.
        "sha": sha if isinstance(sha, str) else None,
        # GitHub cuts a recursive tree past 100,000 entries or 7 MB.
        "truncated": bool(payload.get("truncated")),
    }


def take_snapshot(org: str = "quirq-ai", *, token: str | None = None, now: datetime | None = None,
                  request: Request = github_request, progress=None) -> dict[str, Any]:
    taken = (now or datetime.now(timezone.utc)).astimezone(timezone.utc)
    rows = []
    unconfirmed = 0
    for repo in public_repos(org, token=token, request=request):
        row = dict(repo, files=0, bytes=0, sha=None, truncated=False, error=None)
        # GitHub's size starts at 0 for a new repository, so it is not a sign of an
        # empty one; an empty repository answers 409 below.
        if repo["default_branch"] is None:
            rows.append(row)
            continue
        try:
            row.update(measure_tree(org, repo["repo"], repo["default_branch"], token=token, request=request))
        except (RuntimeError, ValueError, OSError) as exc:
            if _status(exc) == 409:
                rows.append(row)  # GitHub's answer for an empty repository.
                continue
            row.update(files=None, bytes=None, error=str(exc)[:300])
            if _is_rate_limit(exc):
                raise RuntimeError("GitHub rate limit while measuring; no snapshot written") from exc
        try:
            public = confirm_public(org, repo["repo"], token=token, request=request)
        except (RuntimeError, ValueError, OSError) as exc:
            if _is_rate_limit(exc):
                raise RuntimeError("GitHub rate limit while confirming visibility; no snapshot written") from exc
            public = False
        if not public:
            # Possibly private now: leave it out and do not log its name.
            unconfirmed += 1
            if progress:
                progress("  One repository could not be confirmed public after measuring; left out.")
            continue
        if row["error"] and progress:
            # Named only once it is confirmed public, since the run's log is public.
            progress(f"  {repo['repo']}: FAILED: {row['error']}")
        rows.append(row)
    return {
        "schema_version": SCHEMA_VERSION,
        "org": org,
        "taken_at": utc_timestamp(taken),
        "repos": rows,
        "totals": _totals(rows, unconfirmed),
    }


def _human(size: int | None) -> str:
    """Decimal units, as the website shows them."""
    if size is None:
        return "unknown"
    if size < 1000:
        return f"{size} B"
    for unit, scale in (("kB", 1e3), ("MB", 1e6), ("GB", 1e9)):
        if size < scale * 1000 or unit == "GB":
            return f"{size / scale:,.1f} {unit}"
    return f"{size:,} B"


def _readme(snapshots: list[dict[str, Any]]) -> str:
    latest = snapshots[-1]
    totals = latest["totals"]
    lines = [
        "# Repository sizes", "",
        "Files and bytes in each public repository's default branch at HEAD, measured daily from its Git tree. "
        "GitHub's size counts the whole history as stored on GitHub.", "",
        f"**Snapshot:** {latest['taken_at']} · **Repositories:** {totals['repos']:,} · "
        f"**Files:** {totals['files']:,} · **Size:** {_human(totals['bytes'])} · "
        f"**On GitHub:** {_human(totals['github_kb'] * 1024)}"
        + ("" if totals.get("github_complete", True) else " (some unknown)")
        + ("" if totals["complete"] else " · **Incomplete:** some repositories could not be measured in full"),
        "",
        "Files are Git blobs: a symlink counts as a file sized by its target path, a Git LFS file at its pointer "
        "size, and submodules are left out. The total includes forks, archived repositories and this wiki. "
        "Private repositories are never measured; one that later turns private keeps its earlier public rows "
        "in history.jsonl and in Git history until removed with `python -m quirq_wiki sizes --forget <repo>`.",
        "", "## By repository", "",
        "| Repository | Files | Size | On GitHub | Default branch |",
        "| --- | ---: | ---: | ---: | --- |",
    ]
    for row in sorted(latest["repos"], key=lambda row: -(row["bytes"] or 0)):
        note = " (error)" if row["error"] else (" (partial)" if row["truncated"] else "")
        files = "unknown" if row["files"] is None else f"{row['files']:,}"
        github = "unknown" if row["github_kb"] is None else _human(row["github_kb"] * 1024)
        lines.append(f"| [{row['repo']}](https://github.com/{latest['org']}/{row['repo']}) | {files} | "
                     f"{_human(row['bytes'])}{note} | {github} | {_md(row['default_branch'] or 'none')} |")
    lines += ["", "## History", "", "| Date (UTC) | Repositories | Files | Size | On GitHub |",
              "| --- | ---: | ---: | ---: | ---: |"]
    for snapshot in reversed(snapshots):
        t = snapshot["totals"]
        day = snapshot["taken_at"][:10] + ("" if t["complete"] else " (incomplete)")
        lines.append(f"| {day} | {t['repos']:,} | {t['files']:,} | {_human(t['bytes'])} | "
                     f"{_human(t['github_kb'] * 1024)} |")
    lines += ["", "Raw snapshots, one per day: [history.jsonl](history.jsonl). Newest: [latest.json](latest.json).", ""]
    return "\n".join(lines)


def _read_history(history: Path) -> list[dict[str, Any]]:
    snapshots = []
    if history.exists():
        for number, line in enumerate(history.read_text(encoding="utf-8").splitlines(), 1):
            if not line.strip():
                continue
            try:
                snapshots.append(json.loads(line))
            except json.JSONDecodeError as exc:
                raise ValueError(f"{history}:{number} is not valid JSON") from exc
    return snapshots


def _merge_same_day(stored: dict[str, Any], new: dict[str, Any]) -> dict[str, Any]:
    """A rerun keeps the day's earlier measurement of any repository it could not read in full."""
    earlier = {row["repo"]: row for row in stored.get("repos", [])}
    rows = []
    for row in new["repos"]:
        old = earlier.get(row["repo"])
        worse = row["error"] is not None or (row["truncated"] and old is not None and not old.get("truncated"))
        if old is not None and worse and old.get("error") is None:
            row = old
        rows.append(row)
    # Only the rerun's repositories are kept: one it left out may be private now.
    return dict(new, repos=rows, totals=_totals(rows, new["totals"].get("left_out", 0)))


def _write_text(path: Path, content: str) -> None:
    descriptor, temporary = tempfile.mkstemp(dir=path.parent, prefix=".sizes-", suffix=".tmp")
    try:
        with os.fdopen(descriptor, "w", encoding="utf-8", newline="\n") as handle:
            handle.write(content)
        os.replace(temporary, path)
    finally:
        Path(temporary).unlink(missing_ok=True)


def _write_all(folder: Path, snapshots: list[dict[str, Any]]) -> list[Path]:
    history = folder / "history.jsonl"
    written = []
    for path, content in (
        (history, "".join(json.dumps(item, sort_keys=True, separators=(",", ":")) + "\n" for item in snapshots)),
        (folder / "latest.json", json.dumps(snapshots[-1], indent=2, sort_keys=True) + "\n"),
        (folder / "README.md", _readme(snapshots)),
    ):
        _write_text(path, content)
        written.append(path)
    return written


def save_snapshot(wiki_root: Path, snapshot: dict[str, Any]) -> list[Path]:
    """Append the snapshot, merging it into one already taken that UTC day, and rewrite the summaries."""
    folder = wiki_root / FOLDER
    folder.mkdir(parents=True, exist_ok=True)
    snapshots = _read_history(folder / "history.jsonl")
    day = snapshot["taken_at"][:10]
    same_day = [item for item in snapshots if str(item.get("taken_at", ""))[:10] == day]
    if same_day:
        snapshot = _merge_same_day(same_day[-1], snapshot)
    snapshots = [item for item in snapshots if str(item.get("taken_at", ""))[:10] != day]
    snapshots.append(snapshot)
    snapshots.sort(key=lambda item: item["taken_at"])
    return _write_all(folder, snapshots)


def forget_repo(wiki_root: Path, repo: str) -> int:
    """Drop a repository's rows from every stored snapshot and recompute each day's totals.

    For a repository that turned private. Git history still holds the old rows.
    """
    validate_name(repo)
    folder = wiki_root / FOLDER
    snapshots = _read_history(folder / "history.jsonl")
    removed = 0
    for snapshot in snapshots:
        rows = [row for row in snapshot.get("repos", []) if row.get("repo") != repo]
        if len(rows) != len(snapshot.get("repos", [])):
            removed += 1
            snapshot["repos"] = rows
            snapshot["totals"] = _totals(rows, snapshot["totals"].get("left_out", 0))
    if removed:
        _write_all(folder, snapshots)
    return removed
