"""Shallow-clone public repositories into a local cache."""

from __future__ import annotations

import os
import subprocess
from pathlib import Path

from quirq_wiki.github_api import RepoInfo


class FetchError(RuntimeError):
    pass


def _run(cmd: list[str], *, cwd: Path | None = None) -> subprocess.CompletedProcess[str]:
    env = os.environ.copy()
    env.setdefault("GIT_TERMINAL_PROMPT", "0")
    env.setdefault("GIT_LFS_SKIP_SMUDGE", "1")
    return subprocess.run(
        cmd,
        cwd=cwd,
        check=False,
        text=True,
        capture_output=True,
        env=env,
    )


def clone_or_update(repo: RepoInfo, cache_dir: Path, *, depth: int = 1) -> Path:
    """Shallow-clone ``repo`` into ``cache_dir / repo.name`` (or fetch/reset)."""
    cache_dir.mkdir(parents=True, exist_ok=True)
    dest = cache_dir / repo.name
    branch = repo.default_branch
    if dest.joinpath(".git").exists():
        fetch = _run(
            ["git", "fetch", "--depth", str(depth), "origin", branch],
            cwd=dest,
        )
        if fetch.returncode != 0:
            raise FetchError(f"git fetch {repo.name}: {fetch.stderr.strip() or fetch.stdout.strip()}")
        reset = _run(["git", "reset", "--hard", f"origin/{branch}"], cwd=dest)
        if reset.returncode != 0:
            raise FetchError(f"git reset {repo.name}: {reset.stderr.strip() or reset.stdout.strip()}")
        _run(["git", "clean", "-fdx", "-e", ".git"], cwd=dest)
        return dest

    if dest.exists():
        # Incomplete leftover from a failed clone.
        raise FetchError(f"cache path exists but is not a git checkout: {dest}")

    clone = _run(
        [
            "git",
            "clone",
            "--depth",
            str(depth),
            "--single-branch",
            "--branch",
            branch,
            repo.clone_url,
            str(dest),
        ]
    )
    if clone.returncode != 0:
        # Some default branches are not named `main`; retry without --branch.
        retry = _run(
            [
                "git",
                "clone",
                "--depth",
                str(depth),
                "--single-branch",
                repo.clone_url,
                str(dest),
            ]
        )
        if retry.returncode != 0:
            raise FetchError(
                f"git clone {repo.name}: {retry.stderr.strip() or clone.stderr.strip()}"
            )
    return dest


def head_sha(checkout: Path) -> str | None:
    result = _run(["git", "rev-parse", "HEAD"], cwd=checkout)
    if result.returncode != 0:
        return None
    return result.stdout.strip() or None
