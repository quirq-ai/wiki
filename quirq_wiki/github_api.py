"""GitHub REST helpers. Public repos only; search APIs are not used (they omit forks)."""

from __future__ import annotations

import json
import os
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass
from typing import Any, Iterable

from quirq_wiki.constants import DEFAULT_EXCLUDED_REPOS, ORG


USER_AGENT = "quirq-wiki-generator (+https://github.com/quirq-ai/wiki)"
API_VERSION = "2022-11-28"


@dataclass(frozen=True)
class RepoInfo:
    name: str
    description: str | None
    default_branch: str
    html_url: str
    clone_url: str
    fork: bool
    archived: bool
    private: bool
    pushed_at: str | None
    language: str | None = None

    @property
    def is_documentable(self) -> bool:
        return (not self.private) and self.name not in DEFAULT_EXCLUDED_REPOS


def _token_from_env() -> str | None:
    for key in ("GITHUB_TOKEN", "GH_TOKEN"):
        value = os.environ.get(key, "").strip()
        if value:
            return value
    return None


def github_request(url: str, token: str | None = None, timeout: int = 60) -> Any:
    """GET a GitHub JSON endpoint. Token is optional for public data."""
    headers = {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": API_VERSION,
        "User-Agent": USER_AGENT,
    }
    auth = token if token is not None else _token_from_env()
    if auth:
        headers["Authorization"] = f"Bearer {auth}"
    request = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"GitHub API {exc.code} for {url}: {body[:500]}") from exc


def _repo_from_payload(payload: dict[str, Any]) -> RepoInfo:
    return RepoInfo(
        name=payload["name"],
        description=payload.get("description") or None,
        default_branch=payload.get("default_branch") or "main",
        html_url=payload["html_url"],
        clone_url=payload.get("clone_url") or payload["html_url"] + ".git",
        fork=bool(payload.get("fork")),
        archived=bool(payload.get("archived")),
        private=bool(payload.get("private")),
        pushed_at=payload.get("pushed_at"),
        language=payload.get("language"),
    )


def list_org_repos(
    org: str = ORG,
    *,
    include_archived: bool = False,
    include_private: bool = False,
    token: str | None = None,
) -> list[RepoInfo]:
    """List organization repositories via REST ``/orgs/{org}/repos``.

    Uses ``type=all`` (not the search API, and not ``type=public``) so public
    forks are included. Private repositories are dropped unless explicitly
    requested, and they are never written into wiki content by the generator.
    """
    repos: list[RepoInfo] = []
    page = 1
    while True:
        query = urllib.parse.urlencode(
            {
                "type": "all",
                "per_page": 100,
                "page": page,
                "sort": "full_name",
                "direction": "asc",
            }
        )
        payload = github_request(
            f"https://api.github.com/orgs/{urllib.parse.quote(org)}/repos?{query}",
            token=token,
        )
        if not isinstance(payload, list) or not payload:
            break
        for item in payload:
            repo = _repo_from_payload(item)
            if repo.private and not include_private:
                continue
            if repo.archived and not include_archived:
                continue
            if repo.name in DEFAULT_EXCLUDED_REPOS:
                continue
            if not repo.private:
                repos.append(repo)
        if len(payload) < 100:
            break
        page += 1
    repos.sort(key=lambda r: (r.name.lower(), r.name))
    return repos


def repos_from_payloads(payloads: Iterable[dict[str, Any]], *, include_archived: bool = False) -> list[RepoInfo]:
    """Build a repo list from already-fetched JSON (tests / fixtures)."""
    repos: list[RepoInfo] = []
    for item in payloads:
        repo = _repo_from_payload(item)
        if repo.private:
            continue
        if repo.archived and not include_archived:
            continue
        if repo.name in DEFAULT_EXCLUDED_REPOS:
            continue
        repos.append(repo)
    repos.sort(key=lambda r: (r.name.lower(), r.name))
    return repos
