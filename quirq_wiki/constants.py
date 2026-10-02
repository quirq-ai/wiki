"""Shared layout, skip, and discovery constants for the wiki generator."""

from __future__ import annotations

ORG = "quirq-ai"
WIKI_REPO_NAME = "wiki"
GENERATED_MARKER = "quirq-wiki-generated"
MANIFEST_NAME = ".quirq-wiki-manifest.json"
INDEX_NAME = "INDEX.md"
ROOT_DOC_NAME = "_root.md"
REPO_INDEX_NAME = "_index.md"

# This wiki repo is never documented as content (avoids a self-reference loop).
DEFAULT_EXCLUDED_REPOS = frozenset({WIKI_REPO_NAME})

# Top-level paths that belong to this wiki's tooling, not to a source repo.
# `.github` is special: it is both this repo's Actions tree and the documented
# public org `.github` repository. Generated markdown may live beside workflows.
RESERVED_TOP_LEVEL = frozenset(
    {
        ".git",
        ".github",
        ".cache",
        ".venv",
        "venv",
        "__pycache__",
        ".pytest_cache",
        "quirq_wiki",
        "tests",
        "examples",
        "scripts",
    }
)

# Directories that are never walked as source folders.
SKIP_DIR_NAMES = frozenset(
    {
        ".git",
        "node_modules",
        "venv",
        ".venv",
        "__pycache__",
        ".tox",
        ".mypy_cache",
        ".pytest_cache",
        ".ruff_cache",
        ".next",
        "dist",
        "build",
        "coverage",
        ".turbo",
        ".cache",
        ".pnpm-store",
        "eggs",
        ".eggs",
        "htmlcov",
        ".hypothesis",
        ".sass-cache",
        "bower_components",
        ".gradle",
        "target",
    }
)

SKIP_DIR_SUFFIXES = (".egg-info", ".dist-info")

BINARY_EXTENSIONS = frozenset(
    {
        "png",
        "jpg",
        "jpeg",
        "gif",
        "webp",
        "ico",
        "bmp",
        "tif",
        "tiff",
        "woff",
        "woff2",
        "ttf",
        "otf",
        "eot",
        "pdf",
        "zip",
        "tar",
        "gz",
        "tgz",
        "bz2",
        "xz",
        "7z",
        "rar",
        "mp3",
        "mp4",
        "wav",
        "webm",
        "mov",
        "avi",
        "ogg",
        "flac",
        "pyc",
        "pyo",
        "so",
        "dylib",
        "dll",
        "exe",
        "bin",
        "class",
        "jar",
        "wasm",
        "parquet",
        "sqlite",
        "db",
        "pkl",
        "pickle",
        "npy",
        "npz",
        "pt",
        "pth",
        "onnx",
        "gguf",
    }
)

LOCKFILE_NAMES = frozenset(
    {
        "package-lock.json",
        "pnpm-lock.json",
        "pnpm-lock.yaml",
        "yarn.lock",
        "npm-shrinkwrap.json",
        "poetry.lock",
        "Pipfile.lock",
        "uv.lock",
        "Cargo.lock",
        "composer.lock",
        "Gemfile.lock",
        "go.sum",
        "bun.lock",
        "bun.lockb",
        "flake.lock",
    }
)

# Read this much of a text file when summarizing.
MAX_READ_BYTES = 64 * 1024
# Files larger than this are noted as huge rather than fully parsed.
HUGE_FILE_BYTES = 256 * 1024

# Wiki-owned files inside `.github/` that source-repo generation must not touch.
GITHUB_WIKI_KEEP_PREFIXES = ("workflows/",)

README_REPOS_BEGIN = "<!-- quirq-wiki:repos:start -->"
README_REPOS_END = "<!-- quirq-wiki:repos:end -->"
