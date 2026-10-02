"""Top-level README / INDEX / manifest updates."""

from __future__ import annotations

import json
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

README_TEMPLATE = """# quirq-ai org wiki

A readable map of **what lives where** across every public repository in the
[`quirq-ai`](https://github.com/quirq-ai) GitHub organization.

This repository is generated and refreshed by automation. Humans edit the
generator and this README's prose; file-level pages under each repo folder are
produced from source and should not be hand-edited (they will be overwritten).

## Convention

1. **One top-level directory per public source repo**, named exactly like the
   GitHub repository (`galileo/`, `xo-space/`, `.github/`, …).
2. **This `wiki` repo is not documented as content** (no `wiki/` folder). That
   avoids a self-reference loop. Tooling, workflows, and this README stay here.
3. **One markdown file per directory** that exists in the source repo
   (recursive). Encoding is flat: source path separators `/` become `__`.
   - source folder `src` → [`galileo/src.md`](galileo/src.md)
   - source folder `src/utils` → `src__utils.md`
   - files at the source repo root → `_root.md`
4. Each page describes **only the files that live directly in that folder**.
   Nested folders get their own pages; they are not summarized in the parent.
5. Every documented repo also has a short [`_index.md`](galileo/_index.md)
   listing its folder pages. The compact org map is [`INDEX.md`](INDEX.md).

### `.github` collision

GitHub Actions for *this* wiki live in [`.github/workflows/`](.github/workflows/).
The public org repository also named [`.github`](https://github.com/quirq-ai/.github)
is documented as markdown files **beside** those workflows (`_root.md`,
`_index.md`, `profile.md`, …). The generator never deletes `workflows/`.

The public repository named [`docs`](https://github.com/quirq-ai/docs) occupies
the top-level `docs/` folder (source-repo documentation, not this wiki's own
docs). How to operate the wiki is this README.

## Public repos

Archived repositories are **skipped by default** (none were archived when this
convention was introduced). Public forks **are included** — GitHub's search API
omits forks, so the generator lists repos via `GET /orgs/quirq-ai/repos` with
`type=all` and then keeps only `private: false`. Private repositories are never
invented or written into this wiki.

""" + README_REPOS_BEGIN + """
_The generator fills this list._
""" + README_REPOS_END + """

## Skip rules

The walker does not descend into, and does not create pages for:

- `.git`, `node_modules`, `venv`, `.venv`, `__pycache__`
- tool caches (`.mypy_cache`, `.pytest_cache`, `.ruff_cache`, `.tox`, `.turbo`)
- build outputs (`dist`, `build`, `.next`, `coverage`, `target`, `.gradle`)
- package metadata trees (`*.egg-info`, `*.dist-info`)

Files that **do** appear on a page but are only lightly noted:

- binaries (images, fonts, PDFs, archives, wasm, model weights, …)
- lockfile blobs (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, …)
- text files larger than 256 KB (prefix only)
- `.env` / `.env.example` — **key names only**, never values

## Generator

Python 3.11+, standard library only for the default path:

```sh
python3 -m pip install -e ".[dev]"   # tests extra; generator itself needs no deps
python3 -m quirq_wiki list-repos
python3 -m quirq_wiki generate --out .
```

Useful flags:

| Flag | Meaning |
| --- | --- |
| `--repo galileo` | Incremental: regenerate only that repo's folder |
| `--changed-paths src/server.mjs,README.md` | Further limit which folder pages are rewritten |
| `--include-archived` | Also document archived public repos |
| `--cache-dir .cache/repos` | Shallow clones live here (gitignored) |
| `--dry-run` | Discover and scan, write nothing |
| `--source-map galileo=/path/to/checkout` | Use a local tree instead of cloning (tests / airgap) |
| `--repos-json path.json` | Skip the live GitHub listing (tests) |

### Descriptions

Every file paragraph comes from a **deterministic content-based summarizer**:
docstrings, module headers, exports, README/front-matter, FastAPI routes,
`package.json` scripts, and similar signals. CI does **not** call a paid LLM.

If you want a higher-quality rewrite, set one of these in the environment
(local or a private Actions secret — never commit it):

- `ANTHROPIC_API_KEY`
- `OPENAI_API_KEY` or `QUIRQ_WIKI_LLM_KEY`
- optional `QUIRQ_WIKI_LLM_MODEL` to override the default model

When no key is present, generation stays fully offline after the git clones.

## Adding a new public repo

1. Make the repository **public** under `quirq-ai`.
2. Do nothing else for discovery: the next `wiki-sync` run (manual, daily
   schedule, or a `quirq-wiki-sync` dispatch) lists org repos dynamically and
   creates a new top-level folder.
3. Optional: add the notify workflow below so pushes rebuild that folder within
   minutes instead of waiting for the daily schedule.

There is no allow-list to edit. Private repos never appear.

## Keeping the wiki current

The workflow [`.github/workflows/wiki-sync.yml`](.github/workflows/wiki-sync.yml)
in **this** repository is the receiver:

| Trigger | What it rebuilds |
| --- | --- |
| `workflow_dispatch` | Full org, or one repo if you pass `repo` |
| `schedule` (daily 06:00 UTC) | Full org, safety net |
| `repository_dispatch` type `quirq-wiki-sync` | The repo named in `client_payload.repo` (else full) |

On success the bot commits to `main` with a `[wiki-bot]` message, under the
concurrency group `wiki-sync` so two runs cannot interleave. Set the
`commit_mode` input to `pr` if pushing to `main` is blocked.

`GITHUB_TOKEN` is enough: `contents: write` to commit here, `packages: read`
reserved for future use. Reading other **public** repos needs no extra token.

### A. Reusable workflow other repos can `uses:`

Source repositories can call
[`quirq-ai/wiki/.github/workflows/reusable-notify-wiki.yml`](.github/workflows/reusable-notify-wiki.yml)
on push to their default branch. That workflow sends `repository_dispatch`
`quirq-wiki-sync` with the repo name and changed paths.

`GITHUB_TOKEN` from another repository **cannot** dispatch into `wiki`. Store an
org-level fine-grained PAT or GitHub App token as `WIKI_DISPATCH_TOKEN`
(permission: Actions write on `quirq-ai/wiki`, contents read is not required)
and pass it as a secret:

```yaml
# in e.g. xo-space/.github/workflows/notify-wiki.yml
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

Copy-paste snippet (same effect, inlined) is in the reusable workflow file's
header comment.

### B. Org webhook / GitHub App (true every-commit)

An organization owner can forward **all** public `push` events without adding a
workflow to each repo:

1. GitHub org → Settings → Webhooks (or a GitHub App subscribed to `push`).
2. On `push` to a public non-`wiki` repo's default branch, POST
   [`repos/quirq-ai/wiki/dispatches`](https://docs.github.com/en/rest/repos/repos#create-a-repository-dispatch-event)
   with `event_type: quirq-wiki-sync` and
   `client_payload: { "repo": "<name>", "ref": "<sha>", "changed_paths": [...] }`.
3. Use a GitHub App installed on the org, not a personal PAT, if this should
   outlive one admin.

Until that webhook exists, daily schedule plus manual `workflow_dispatch` keep
the snapshot from going stale; per-repo `uses:` covers the repos that opt in.

## Local development of the generator

```sh
python3 -m pip install -e ".[dev]"
python3 -m pytest
python3 -m quirq_wiki generate --out /tmp/wiki-preview --cache-dir /tmp/wiki-cache
```

Regenerating in CI with the same generator (no LLM keys) is meant to be
deterministic for a given source SHA: same layout, same skip rules, same
heuristic paragraphs.

## License

Generated descriptions summarize public source and are not a substitute for
each repository's own license. This wiki's generator code is available under
the same terms as contributions to this repository.
"""


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
    list_md = render_repo_list_markdown(repos)
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
