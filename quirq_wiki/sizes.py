"""Daily size and file-count snapshots of every public repository in the org.

Each run reads the org's public repositories and, for each one, the recursive
Git tree of its default branch at HEAD: the number of files (blobs) and the sum
of their sizes. It also keeps GitHub's own repository size, which counts the
whole history. One snapshot per UTC day is kept in `_sizes/history.jsonl`
(a rerun on the same day replaces that day's line), with the newest copy in
`_sizes/latest.json` and a Markdown table in `_sizes/README.md`.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable
from urllib.error import HTTPError
from urllib.parse import quote, urlencode

from quirq_wiki.activity import utc_timestamp, validate_name
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
            # The wiki is public: private repositories never enter a snapshot.
            if item["private"]:
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
    for repo in public_repos(org, token=token, request=request):
        row = dict(repo, files=0, bytes=0, sha=None, truncated=False, error=None)
        if repo["default_branch"] is None or repo["github_kb"] == 0:
            # An empty repository has no tree to read.
            rows.append(row)
            continue
        try:
            row.update(measure_tree(org, repo["repo"], repo["default_branch"], token=token, request=request))
        except (RuntimeError, ValueError, OSError) as exc:
            if _status(exc) == 409:
                rows.append(row)  # GitHub's answer for an empty repository.
                continue
            row.update(files=None, bytes=None, error=str(exc)[:300])
            if progress:
                progress(f"  {repo['repo']}: FAILED: {row['error']}")
            if _is_rate_limit(exc):
                raise RuntimeError(f"GitHub rate limit while measuring {repo['repo']}; no snapshot written") from exc
        rows.append(row)
    measured = [row for row in rows if row["error"] is None]
    return {
        "schema_version": SCHEMA_VERSION,
        "org": org,
        "taken_at": utc_timestamp(taken),
        "repos": rows,
        "totals": {
            "repos": len(rows),
            "files": sum(row["files"] for row in measured),
            "bytes": sum(row["bytes"] for row in measured),
            "github_kb": sum(row["github_kb"] or 0 for row in rows),
            # Totals are a floor when a repository failed or its tree was cut.
            "complete": len(measured) == len(rows) and not any(row["truncated"] for row in rows),
        },
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
        + ("" if totals["complete"] else " · **Incomplete:** some repositories could not be measured in full"),
        "", "## By repository", "",
        "| Repository | Files | Size | On GitHub | Default branch |",
        "| --- | ---: | ---: | ---: | --- |",
    ]
    for row in sorted(latest["repos"], key=lambda row: -(row["bytes"] or 0)):
        note = " (error)" if row["error"] else (" (partial)" if row["truncated"] else "")
        files = "unknown" if row["files"] is None else f"{row['files']:,}"
        github = "unknown" if row["github_kb"] is None else _human(row["github_kb"] * 1024)
        lines.append(f"| [{row['repo']}](https://github.com/{latest['org']}/{row['repo']}) | {files} | "
                     f"{_human(row['bytes'])}{note} | {github} | {row['default_branch'] or 'none'} |")
    lines += ["", "## History", "", "| Date (UTC) | Repositories | Files | Size | On GitHub |",
              "| --- | ---: | ---: | ---: | ---: |"]
    for snapshot in reversed(snapshots):
        t = snapshot["totals"]
        lines.append(f"| {snapshot['taken_at'][:10]} | {t['repos']:,} | {t['files']:,} | {_human(t['bytes'])} | "
                     f"{_human(t['github_kb'] * 1024)} |")
    lines += ["", "Raw snapshots, one per day: [history.jsonl](history.jsonl). Newest: [latest.json](latest.json).", ""]
    return "\n".join(lines)


def save_snapshot(wiki_root: Path, snapshot: dict[str, Any]) -> list[Path]:
    """Append the snapshot (replacing one already taken that UTC day) and rewrite the summaries."""
    folder = wiki_root / FOLDER
    folder.mkdir(parents=True, exist_ok=True)
    history = folder / "history.jsonl"
    snapshots = []
    if history.exists():
        for number, line in enumerate(history.read_text(encoding="utf-8").splitlines(), 1):
            if not line.strip():
                continue
            try:
                snapshots.append(json.loads(line))
            except json.JSONDecodeError as exc:
                raise ValueError(f"{history}:{number} is not valid JSON") from exc
    day = snapshot["taken_at"][:10]
    snapshots = [item for item in snapshots if str(item.get("taken_at", ""))[:10] != day]
    snapshots.append(snapshot)
    snapshots.sort(key=lambda item: item["taken_at"])
    written = []
    for path, content in (
        (history, "".join(json.dumps(item, sort_keys=True, separators=(",", ":")) + "\n" for item in snapshots)),
        (folder / "latest.json", json.dumps(snapshots[-1], indent=2, sort_keys=True) + "\n"),
        (folder / "README.md", _readme(snapshots)),
    ):
        temporary = path.with_suffix(path.suffix + ".tmp")
        temporary.write_text(content, encoding="utf-8", newline="\n")
        temporary.replace(path)
        written.append(path)
    return written
