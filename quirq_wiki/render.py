"""Render wiki markdown for one source folder or one repository."""

from __future__ import annotations

from datetime import datetime, timezone
from pathlib import Path

from quirq_wiki.constants import GENERATED_MARKER, REPO_INDEX_NAME
from quirq_wiki.github_api import RepoInfo
from quirq_wiki.layout import (
    display_folder,
    encode_folder,
    github_blob_url,
    github_tree_url,
    normalize_relpath,
)
from quirq_wiki.llm import llm_enabled, rewrite_summary
from quirq_wiki.scan import FileInfo, FolderInfo
from quirq_wiki.summarize import _first_prose, _read_text, summarize_file


def marker_line(repo: str, folder: str) -> str:
    folder = normalize_relpath(folder)
    return f"<!-- {GENERATED_MARKER} repo={repo} dir={folder or '.'} -->"


def is_generated(path: Path) -> bool:
    try:
        head = path.read_text(encoding="utf-8", errors="replace")[:400]
    except OSError:
        return False
    return GENERATED_MARKER in head


def render_folder_page(
    *,
    repo: RepoInfo,
    folder: FolderInfo,
    checkout: Path,
    generated_at: str,
    use_llm: bool = False,
) -> str:
    rel = normalize_relpath(folder.relpath)
    title = f"{repo.name} / {display_folder(rel)}"
    tree_url = github_tree_url(repo.html_url, repo.default_branch, rel)
    lines = [
        marker_line(repo.name, rel),
        "",
        f"# {title}",
        "",
        f"Source: [{display_folder(rel)}]({tree_url}) in [{repo.name}]({repo.html_url}).",
        "",
    ]
    if not folder.files:
        lines += [
            "This directory exists in the source repository but has no files of its own.",
            "Nested folders are documented in their own wiki pages, not here.",
            "",
        ]
        return "\n".join(lines)

    lines += [
        "Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.",
        "",
    ]
    for info in folder.files:
        lines.append(f"### {info.name}")
        lines.append("")
        paragraph = summarize_file(checkout, info)
        if use_llm and info.kind in {"code", "doc", "config", "other"}:
            excerpt = _read_text(checkout / info.relpath) or ""
            paragraph = rewrite_summary(paragraph, filename=info.name, excerpt=excerpt)
        blob = github_blob_url(repo.html_url, repo.default_branch, info.relpath)
        lines.append(paragraph)
        lines.append("")
        lines.append(f"[`{info.relpath}`]({blob}) · {info.kind} · {info.size} bytes")
        lines.append("")
    lines.append(f"_Generated {generated_at} from `{repo.default_branch}`._")
    lines.append("")
    return "\n".join(lines)


def _repo_blurb(repo: RepoInfo, checkout: Path | None = None) -> str:
    description = (repo.description or "").strip()
    if description:
        return description
    if checkout is not None:
        for name in ("README.md", "README.rst", "README"):
            text = _read_text(checkout / name)
            if text:
                prose = _first_prose(text, max_chars=320)
                if prose:
                    return prose
    return "_No GitHub description; README did not yield an intro paragraph._"


def render_repo_index(
    *,
    repo: RepoInfo,
    folders: dict[str, FolderInfo],
    sha: str | None,
    generated_at: str,
    checkout: Path | None = None,
) -> str:
    flags = []
    if repo.fork:
        flags.append("public fork")
    if repo.archived:
        flags.append("archived")
    flag_note = f" ({', '.join(flags)})" if flags else ""
    description = _repo_blurb(repo, checkout)
    lines = [
        marker_line(repo.name, "__index__"),
        "",
        f"# {repo.name}{flag_note}",
        "",
        f"{description}",
        "",
        f"- GitHub: [{repo.html_url}]({repo.html_url})",
        f"- Default branch: `{repo.default_branch}`",
    ]
    if repo.language:
        lines.append(f"- Primary language (GitHub): {repo.language}")
    if repo.pushed_at:
        lines.append(f"- Last push: `{repo.pushed_at}`")
    if sha:
        lines.append(f"- Snapshot SHA: `{sha[:12]}`")
    lines += [
        "",
        "Pages below follow the org wiki convention: one markdown file per source directory, with `/` encoded as `__`.",
        "",
        "| Source folder | Files | Wiki page |",
        "| --- | ---: | --- |",
    ]
    for rel in sorted(folders, key=lambda p: (p != "", p.lower())):
        page = encode_folder(rel)
        count = len(folders[rel].files)
        label = display_folder(rel)
        if rel:
            label = f"`{rel}`"
        lines.append(f"| {label} | {count} | [{page}]({page}) |")
    lines += ["", f"_Generated {generated_at}._", ""]
    return "\n".join(lines)


def write_repo_pages(
    *,
    wiki_root: Path,
    repo: RepoInfo,
    folders: dict[str, FolderInfo],
    checkout: Path,
    sha: str | None,
    only_folders: set[str] | None = None,
) -> list[Path]:
    """Write `_index.md` and folder pages under ``wiki_root / repo.name``.

    For the org `.github` repository, pages are written into this wiki's
    `.github/` directory *beside* Actions workflows, never replacing them.
    """
    dest = wiki_root / repo.name
    dest.mkdir(parents=True, exist_ok=True)
    generated_at = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    use_llm = llm_enabled()
    written: list[Path] = []

    index_path = dest / REPO_INDEX_NAME
    index_path.write_text(
        render_repo_index(
            repo=repo, folders=folders, sha=sha, generated_at=generated_at, checkout=checkout
        ),
        encoding="utf-8",
    )
    written.append(index_path)

    keep_names = {REPO_INDEX_NAME}
    for rel, folder in folders.items():
        if only_folders is not None and rel not in only_folders:
            continue
        filename = encode_folder(rel)
        keep_names.add(filename)
        path = dest / filename
        path.write_text(
            render_folder_page(
                repo=repo,
                folder=folder,
                checkout=checkout,
                generated_at=generated_at,
                use_llm=use_llm,
            ),
            encoding="utf-8",
        )
        written.append(path)

    _remove_stale_generated(dest, keep_names)
    return written


def _remove_stale_generated(dest: Path, keep_names: set[str]) -> None:
    """Delete generated markdown that no longer maps to a source folder."""
    if not dest.is_dir():
        return
    for path in dest.iterdir():
        if not path.is_file() or path.suffix != ".md":
            continue
        if path.name in keep_names:
            continue
        if is_generated(path):
            path.unlink()
