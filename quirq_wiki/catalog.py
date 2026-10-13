"""Top-level README / INDEX / manifest updates."""

from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path

from quirq_wiki.constants import (
    GENERATED_MARKER,
    INDEX_NAME,
    MANIFEST_NAME,
    README_REPOS_BEGIN,
    README_REPOS_END,
    REPO_INDEX_NAME,
)
from quirq_wiki.github_api import RepoInfo

# Fallback if README.md is missing or loses its repo-map markers.
# Keep in sync with the committed README.md (diagrams + Keep it updated).
README_TEMPLATE = """# quirq-ai org wiki

A map of **what lives where** across every public repository in [`quirq-ai`](https://github.com/quirq-ai).

Each public repo gets a folder here. Each source directory gets one markdown page. File-level pages are generated — edit the generator or this README, not those pages. This `wiki` repo is not documented as content (no `wiki/` folder).

[Index](INDEX.md) · [Activity](_activity/INDEX.md) · [generator](quirq_wiki/) · [sync workflow](.github/workflows/wiki-sync.yml)

## Repos

Public only. Forks included. Archived skipped. Private never listed. Discovery is `GET /orgs/quirq-ai/repos?type=all`, not the search API.

""" + README_REPOS_BEGIN + """
_The generator fills this map._
""" + README_REPOS_END + """

Make a repo **public** under `quirq-ai` and the next sync adds a folder. No allow-list.

## Layout

One top-level folder per public GitHub repo. One markdown file per source directory. `/` becomes `__`. Root files go in `_root.md`. Nested folders are not described on the parent page.

```mermaid
flowchart LR
  subgraph source["source: galileo/"]
    rootFiles["root files"]
    src["src/"]
    utils["src/utils/"]
  end
  subgraph wiki["wiki: galileo/"]
    index["_index.md"]
    rootMd["_root.md"]
    srcMd["src.md"]
    utilsMd["src__utils.md"]
  end
  rootFiles --> rootMd
  src --> srcMd
  utils --> utilsMd
```

Example: [`galileo/src.md`](galileo/src.md) ← source folder `src`. [`galileo/src__utils.md`](galileo/src__utils.md) ← `src/utils`.

**Name collisions:** Actions for *this* wiki live in [`.github/workflows/`](.github/workflows/). The org [`.github`](https://github.com/quirq-ai/.github) repo is documented as markdown beside them; `workflows/` is never deleted. The [`docs`](https://github.com/quirq-ai/docs) source repo owns top-level `docs/`.

**Skipped dirs:** `.git`, `node_modules`, `venv`, `.venv`, `__pycache__`, caches, `dist`/`build`/`.next`. **Light notes only:** binaries, lockfiles, files &gt; 256 KB, `.env*` (key names, never values).

## How a page is made

A page is not a dump of the tree. For each source folder the generator lists files **in that folder only**, reads each file, and writes a 3–5 line paragraph.

```mermaid
flowchart TD
  folder["Source folder src/"] --> split{"What is in it?"}
  split -->|"files here"| read["Read prefix: docstring, JSDoc, exports, front matter, routes"]
  split -->|"subfolders"| other["Their own .md pages — not described here"]
  read --> para["### filename.ext plus a 3–5 line paragraph"]
  para --> out["galileo/src.md"]
```

Summaries are deterministic (no paid API in CI). Optional rewrite if `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, or `QUIRQ_WIKI_LLM_KEY` is set. Do not commit keys.

## Keep it updated

```mermaid
flowchart LR
  push["Push on a public source repo"] --> dispatch["repository_dispatch quirq-wiki-sync"]
  daily["Daily 06:00 UTC"] --> gen
  manual["workflow_dispatch"] --> gen
  dispatch --> gen["python -m quirq_wiki generate"]
  gen --> commit["wiki-bot commit to wiki main"]
```

Receiver: [`.github/workflows/wiki-sync.yml`](.github/workflows/wiki-sync.yml) (`contents: write`, `packages: read`). Concurrency group `wiki-sync`. `[wiki-bot]` commits to `main`, or a PR if `commit_mode=pr`. Incremental: pass `repo` (and optional `changed_paths`). Public clones need no extra token.

```sh
python3 -m pip install -e ".[dev]"
python3 -m pytest
python3 -m quirq_wiki list-repos
python3 -m quirq_wiki generate --out .                  # full org
python3 -m quirq_wiki generate --out . --repo galileo   # one folder
```

`--changed-paths`, `--include-archived`, `--cache-dir`, `--dry-run`, `--source-map`, `--repos-json` exist for incremental, tests, and airgap clones.

## Daily activity archive

[Browse the activity index](_activity/INDEX.md). Run `python -m quirq_wiki activity --out .`
to batch commits, PRs, issues, releases and workflow updates from every public repository,
including this wiki. The first run starts seven days ago; `--since YYYY-MM-DD` backfills
an earlier window, and `--repo NAME` restricts collection to one public repository.
Use `GITHUB_TOKEN` / `GH_TOKEN`, or opt into an existing local Git credential with
`--git-credential`. No credentials or issue/comment bodies are stored.

Daily UTC JSONL batches and Markdown indexes live under `_activity/`. Repeat runs
deduplicate records and retain failed cursors for retry. The activity-sync workflow
runs daily at 06:15 UTC once published on the default branch. This archive records
observed snapshots, not every intermediate event; deleted history and changes between
polls cannot be reconstructed, and commit timestamps are not push timestamps.

### Near-commit updates (org-admin)

`GITHUB_TOKEN` from another repo **cannot** dispatch into wiki. Pick at least one:

**A. Reusable workflow** — org secret `WIKI_DISPATCH_TOKEN` (GitHub App or PAT, **Actions: write** on `quirq-ai/wiki`). In each source repo:

```yaml
name: Notify org wiki
on:
  push:
    branches: [main]
jobs:
  notify:
    uses: quirq-ai/wiki/.github/workflows/reusable-notify-wiki.yml@main
    secrets:
      token: ${{ secrets.WIKI_DISPATCH_TOKEN }}
```

**B. Org webhook / GitHub App** — subscribe to public `push`, then POST [`repos/quirq-ai/wiki/dispatches`](https://docs.github.com/en/rest/repos/repos#create-a-repository-dispatch-event) with `event_type: quirq-wiki-sync` and `client_payload: { "repo": "<name>", "ref": "<sha>", "changed_paths": [...] }`. Prefer a GitHub App over a personal PAT. This covers every public repo without a workflow in each one.

Also allow Actions to push to `main` (or use `commit_mode=pr`). Until A or B is wired, daily schedule + manual dispatch keep the snapshot from going stale.
"""


def mermaid_node_id(name: str) -> str:
    cleaned = re.sub(r"[^A-Za-z0-9]", "_", name).strip("_")
    if not cleaned:
        return "repo"
    if cleaned[0].isdigit():
        return f"r_{cleaned}"
    return cleaned


def render_readme_repo_map(repos: list[RepoInfo]) -> str:
    """Compact mermaid map + one line of links for the README."""
    if not repos:
        return "_none discovered_\n"
    lines = ["```mermaid", "flowchart LR", '  subgraph public["quirq-ai · public"]', "    direction LR"]
    for repo in repos:
        nid = mermaid_node_id(repo.name)
        label = repo.name.replace('"', "#quot;")
        if repo.fork:
            label += " *"
        lines.append(f'    {nid}["{label}"]')
    lines.append("  end")
    for repo in repos:
        nid = mermaid_node_id(repo.name)
        lines.append(f'  click {nid} "./{repo.name}/{REPO_INDEX_NAME}"')
    lines.append("```")
    lines.append("")
    chips = []
    forks = False
    for repo in repos:
        star = "*" if repo.fork else ""
        if repo.fork:
            forks = True
        chips.append(f"[`{repo.name}`]({repo.name}/{REPO_INDEX_NAME}){star}")
    lines.append(" · ".join(chips))
    if forks:
        lines.append("")
        lines.append("\\* public fork")
    lines.append("")
    return "\n".join(lines)


def render_repo_list_markdown(repos: list[RepoInfo]) -> str:
    lines = [
        "| Repository | Kind | Wiki | GitHub |",
        "| --- | --- | --- | --- |",
    ]
    for repo in repos:
        kind = "public fork" if repo.fork else "public"
        if repo.archived:
            kind += ", archived"
        wiki = f"[`{repo.name}/`]({repo.name}/{REPO_INDEX_NAME})"
        gh = f"[{repo.name}]({repo.html_url})"
        desc = (repo.description or "").strip()
        extra = f"<br>{_escape_md(desc)}" if desc else ""
        lines.append(f"| **{repo.name}**{extra} | {kind} | {wiki} | {gh} |")
    if not repos:
        lines.append("| _none discovered_ | | | |")
    lines.append("")
    return "\n".join(lines)


def _escape_md(text: str) -> str:
    return text.replace("|", "\\|").replace("\n", " ")


def upsert_readme(wiki_root: Path, repos: list[RepoInfo]) -> None:
    path = wiki_root / "README.md"
    if path.exists():
        current = path.read_text(encoding="utf-8")
    else:
        current = README_TEMPLATE
    if README_REPOS_BEGIN not in current or README_REPOS_END not in current:
        current = README_TEMPLATE
    list_md = render_readme_repo_map(repos)
    before, rest = current.split(README_REPOS_BEGIN, 1)
    _, after = rest.split(README_REPOS_END, 1)
    path.write_text(
        before + README_REPOS_BEGIN + "\n" + list_md + README_REPOS_END + after,
        encoding="utf-8",
    )


def write_index(wiki_root: Path, repos: list[RepoInfo]) -> None:
    generated_at = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines = [
        f"<!-- {GENERATED_MARKER} org-index -->",
        "",
        "# Index",
        "",
        "Public `quirq-ai` repositories documented in this wiki. The `wiki` repo itself is excluded.",
        "",
        "[Daily activity index](_activity/INDEX.md) — commits, pull requests, issues, releases and workflow runs.",
        "",
        render_repo_list_markdown(repos).rstrip(),
        "",
        "## Folder convention",
        "",
        "- `_index.md` — catalog of that repo's directory pages",
        "- `_root.md` — files at the source repository root",
        "- `src.md` / `src__utils.md` — one page per nested source directory",
        "",
        f"_Generated {generated_at}._",
        "",
    ]
    (wiki_root / INDEX_NAME).write_text("\n".join(lines), encoding="utf-8")


def write_manifest(
    wiki_root: Path,
    repos: list[RepoInfo],
    *,
    shas: dict[str, str | None],
    include_archived: bool,
) -> None:
    payload = {
        "org": "quirq-ai",
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "skip_archived": not include_archived,
        "excluded_repos": ["wiki"],
        "discovery": "GET /orgs/quirq-ai/repos?type=all, keep private=false",
        "repos": [
            {
                "name": repo.name,
                "fork": repo.fork,
                "archived": repo.archived,
                "default_branch": repo.default_branch,
                "html_url": repo.html_url,
                "pushed_at": repo.pushed_at,
                "sha": shas.get(repo.name),
            }
            for repo in repos
        ],
    }
    (wiki_root / MANIFEST_NAME).write_text(
        json.dumps(payload, indent=2, sort_keys=False) + "\n",
        encoding="utf-8",
    )


def load_manifest_repo_names(wiki_root: Path) -> list[str]:
    path = wiki_root / MANIFEST_NAME
    if not path.exists():
        return []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return []
    return [item["name"] for item in data.get("repos", []) if "name" in item]


def remove_stale_repo_folders(wiki_root: Path, current_names: set[str]) -> list[str]:
    """Remove previously generated repo folders that are no longer public.

    Never deletes reserved tooling paths. The `.github` source repo is current
    iff `.github` is in ``current_names``; its workflows/ tree is still kept.
    """
    from quirq_wiki.constants import RESERVED_TOP_LEVEL
    from quirq_wiki.render import is_generated

    previous = set(load_manifest_repo_names(wiki_root))
    removed: list[str] = []
    stale = previous - current_names
    for name in sorted(stale):
        dest = wiki_root / name
        if not dest.exists():
            continue
        if name == ".github":
            for path in dest.iterdir():
                if path.is_file() and path.suffix == ".md" and is_generated(path):
                    path.unlink()
            removed.append(name)
            continue
        if name in RESERVED_TOP_LEVEL:
            continue
        if dest.is_dir():
            _rmtree_generated_dir(dest)
            removed.append(name)
    return removed


def _rmtree_generated_dir(dest: Path) -> None:
    import shutil

    shutil.rmtree(dest)
