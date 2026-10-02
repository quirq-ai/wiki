"""Orchestrate discovery, clone, scan, and markdown generation."""

from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path

from quirq_wiki.catalog import (
    README_TEMPLATE,
    remove_stale_repo_folders,
    upsert_readme,
    write_index,
    write_manifest,
)
from quirq_wiki.constants import README_REPOS_BEGIN
from quirq_wiki.fetch import clone_or_update, head_sha
from quirq_wiki.github_api import RepoInfo, list_org_repos, repos_from_payloads
from quirq_wiki.layout import dirs_for_changed_paths
from quirq_wiki.render import write_repo_pages
from quirq_wiki.scan import scan_tree


@dataclass
class GenerateResult:
    repos: list[RepoInfo]
    written: list[Path]
    skipped_self: bool = True
    removed: list[str] | None = None


def load_repos(
    *,
    org: str,
    include_archived: bool,
    repos_json: Path | None,
) -> list[RepoInfo]:
    if repos_json is not None:
        payload = json.loads(repos_json.read_text(encoding="utf-8"))
        if isinstance(payload, dict) and "repos" in payload:
            payload = payload["repos"]
        if not isinstance(payload, list):
            raise ValueError(f"{repos_json} must be a list of repo objects")
        return repos_from_payloads(payload, include_archived=include_archived)
    return list_org_repos(org, include_archived=include_archived)


def parse_source_map(values: list[str] | None) -> dict[str, Path]:
    mapping: dict[str, Path] = {}
    for item in values or []:
        if "=" not in item:
            raise ValueError(f"--source-map must be name=/path, got {item!r}")
        name, path = item.split("=", 1)
        mapping[name.strip()] = Path(path.strip()).expanduser().resolve()
    return mapping


def ensure_readme_scaffold(wiki_root: Path) -> None:
    readme = wiki_root / "README.md"
    if not readme.exists() or README_REPOS_BEGIN not in readme.read_text(encoding="utf-8"):
        readme.write_text(README_TEMPLATE, encoding="utf-8")


def generate(
    *,
    wiki_root: Path,
    org: str = "quirq-ai",
    repo_name: str | None = None,
    changed_paths: list[str] | None = None,
    cache_dir: Path | None = None,
    include_archived: bool = False,
    dry_run: bool = False,
    source_map: dict[str, Path] | None = None,
    repos_json: Path | None = None,
) -> GenerateResult:
    wiki_root = wiki_root.resolve()
    cache_dir = (cache_dir or (wiki_root / ".cache" / "repos")).resolve()
    source_map = source_map or {}

    repos = load_repos(org=org, include_archived=include_archived, repos_json=repos_json)
    if repo_name:
        match = [r for r in repos if r.name == repo_name]
        if not match:
            raise SystemExit(
                f"Repository {repo_name!r} is not a public documentable repo in {org} "
                f"(private, archived, excluded, or missing)."
            )
        target_repos = match
        incremental = True
    else:
        target_repos = repos
        incremental = False

    only_folders = dirs_for_changed_paths(changed_paths or [])
    written: list[Path] = []
    shas: dict[str, str | None] = {}
    removed: list[str] = []

    if not dry_run:
        ensure_readme_scaffold(wiki_root)

    for repo in target_repos:
        checkout = source_map.get(repo.name)
        if checkout is None:
            if dry_run:
                continue
            checkout = clone_or_update(repo, cache_dir)
        if not checkout.exists():
            raise FileNotFoundError(f"checkout missing for {repo.name}: {checkout}")
        sha = head_sha(checkout) if (checkout / ".git").exists() else None
        shas[repo.name] = sha
        folders = scan_tree(checkout)
        if dry_run:
            continue
        paths = write_repo_pages(
            wiki_root=wiki_root,
            repo=repo,
            folders=folders,
            checkout=checkout,
            sha=sha,
            only_folders=only_folders if incremental else None,
        )
        written.extend(paths)

    if dry_run:
        return GenerateResult(repos=repos, written=[], removed=[])

    if not incremental:
        removed = remove_stale_repo_folders(wiki_root, {r.name for r in repos})
        # Collect SHAs for repos we did not just clone (incremental skip) — full
        # runs always clone every documentable repo, so shas is complete.
        write_manifest(wiki_root, repos, shas=shas, include_archived=include_archived)
    else:
        # Refresh the catalog from the live public list; do not delete other folders.
        from quirq_wiki.catalog import load_manifest_repo_names
        from quirq_wiki.constants import MANIFEST_NAME

        previous_shas: dict[str, str | None] = {}
        manifest_path = wiki_root / MANIFEST_NAME
        if manifest_path.exists():
            try:
                prev = json.loads(manifest_path.read_text(encoding="utf-8"))
                for item in prev.get("repos", []):
                    if item.get("name"):
                        previous_shas[item["name"]] = item.get("sha")
            except json.JSONDecodeError:
                previous_shas = {name: None for name in load_manifest_repo_names(wiki_root)}
        previous_shas.update(shas)
        write_manifest(
            wiki_root,
            repos,
            shas=previous_shas,
            include_archived=include_archived,
        )

    upsert_readme(wiki_root, repos)
    write_index(wiki_root, repos)
    written.extend([wiki_root / "README.md", wiki_root / "INDEX.md", wiki_root / ".quirq-wiki-manifest.json"])
    return GenerateResult(repos=repos, written=written, removed=removed)
