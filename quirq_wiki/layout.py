"""Path encoding between source folders and wiki markdown filenames."""

from __future__ import annotations

from pathlib import PurePosixPath

from quirq_wiki.constants import ROOT_DOC_NAME


def normalize_relpath(relpath: str) -> str:
    """Return a POSIX relative path with no leading `./` or trailing slash."""
    path = str(relpath or "").replace("\\", "/").strip("/")
    if path in {"", "."}:
        return ""
    return str(PurePosixPath(path))


def encode_folder(relpath: str) -> str:
    """Map a source folder path to a wiki markdown filename.

    Examples:
        ``""`` or ``"."`` → ``_root.md``
        ``"src"`` → ``src.md``
        ``"src/utils"`` → ``src__utils.md``
    """
    path = normalize_relpath(relpath)
    if not path:
        return ROOT_DOC_NAME
    return path.replace("/", "__") + ".md"


def display_folder(relpath: str) -> str:
    """Human-readable folder label for headings."""
    path = normalize_relpath(relpath)
    return "(repository root)" if not path else path


def github_tree_url(html_url: str, branch: str, relpath: str) -> str:
    path = normalize_relpath(relpath)
    base = html_url.rstrip("/")
    if not path:
        return f"{base}/tree/{branch}"
    return f"{base}/tree/{branch}/{path}"


def github_blob_url(html_url: str, branch: str, relpath: str) -> str:
    path = normalize_relpath(relpath)
    return f"{html_url.rstrip('/')}/blob/{branch}/{path}"


def dirs_for_changed_paths(changed_paths: list[str]) -> set[str] | None:
    """Return source folder relpaths that must be regenerated.

    The empty string (repo root) is always included so `_root.md` stays truthful
    when files move in or out of the root. ``None`` means "all folders".
    """
    if not changed_paths:
        return None
    folders: set[str] = {""}
    for raw in changed_paths:
        path = normalize_relpath(raw)
        if not path:
            folders.add("")
            continue
        parent = str(PurePosixPath(path).parent)
        if parent in {".", ""}:
            folders.add("")
        else:
            folders.add(parent)
            current = PurePosixPath(parent)
            while current.parts:
                folders.add(str(current))
                current = current.parent
                if str(current) in {".", ""}:
                    folders.add("")
                    break
    return folders
