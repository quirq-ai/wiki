"""Walk a source checkout into per-folder file lists, applying skip rules."""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path

from quirq_wiki.constants import (
    BINARY_EXTENSIONS,
    HUGE_FILE_BYTES,
    LOCKFILE_NAMES,
    SKIP_DIR_NAMES,
    SKIP_DIR_SUFFIXES,
)
from quirq_wiki.layout import normalize_relpath


@dataclass
class FileInfo:
    name: str
    relpath: str
    size: int
    kind: str  # code | doc | config | lockfile | binary | huge | empty | other


@dataclass
class FolderInfo:
    relpath: str
    files: list[FileInfo] = field(default_factory=list)


def should_skip_dir(name: str) -> bool:
    if name in SKIP_DIR_NAMES:
        return True
    return any(name.endswith(suffix) for suffix in SKIP_DIR_SUFFIXES)


def classify_file(name: str, size: int) -> str:
    if size <= 0:
        return "empty"
    if name in LOCKFILE_NAMES:
        return "lockfile"
    ext = Path(name).suffix.lower().lstrip(".")
    if ext in BINARY_EXTENSIONS:
        return "binary"
    if size > HUGE_FILE_BYTES:
        return "huge"
    return "code" if ext else "other"


def scan_tree(root: Path) -> dict[str, FolderInfo]:
    """Return every directory under ``root`` (including root) keyed by relpath.

    Skipped vendored/build directories are omitted entirely: they do not get a
    wiki page, matching the documented skip rules.
    """
    root = root.resolve()
    folders: dict[str, FolderInfo] = {"": FolderInfo(relpath="")}

    for dirpath, dirnames, filenames in os_walk_sorted(root):
        rel_dir = normalize_relpath(str(dirpath.relative_to(root)))
        folder = folders.setdefault(rel_dir, FolderInfo(relpath=rel_dir))
        # Prune skipped directories in-place so os.walk does not descend.
        dirnames[:] = sorted(name for name in dirnames if not should_skip_dir(name))
        for name in dirnames:
            child = f"{rel_dir}/{name}" if rel_dir else name
            folders.setdefault(child, FolderInfo(relpath=child))
        for filename in sorted(filenames):
            path = dirpath / filename
            try:
                size = path.stat().st_size
            except OSError:
                continue
            relpath = f"{rel_dir}/{filename}" if rel_dir else filename
            folder.files.append(
                FileInfo(
                    name=filename,
                    relpath=relpath,
                    size=size,
                    kind=classify_file(filename, size),
                )
            )
    return folders


def os_walk_sorted(root: Path):
    """os.walk wrapper that yields pathlib Paths and stable order."""
    import os

    for dirpath, dirnames, filenames in os.walk(root, topdown=True, followlinks=False):
        dirnames.sort()
        filenames.sort()
        yield Path(dirpath), dirnames, filenames
