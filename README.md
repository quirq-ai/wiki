# quirq-ai org wiki

A map of **what lives where** across every public repository in [`quirq-ai`](https://github.com/quirq-ai).

Each public repo gets a folder here. Each source directory gets one markdown page. File-level pages are generated — edit the generator or this README, not those pages. This `wiki` repo is not documented as content (no `wiki/` folder).

[Index](INDEX.md) · [generator](quirq_wiki/) · [sync workflow](.github/workflows/wiki-sync.yml)

## Repos

Public only. Forks included. Archived skipped. Private never listed. Discovery is `GET /orgs/quirq-ai/repos?type=all`, not the search API.

<!-- quirq-wiki:repos:start -->
```mermaid
flowchart LR
  subgraph public["quirq-ai · public"]
    direction LR
    github[".github"]
    depot["depot"]
    docs["docs *"]
    environment["environment"]
    euler["euler"]
    galileo["galileo"]
    gardener["gardener"]
    gate["gate"]
    infra_config["infra-config"]
    innernet["innernet"]
    installer["installer"]
    instants["instants"]
    marketing["marketing"]
    perf["perf"]
    quirq_ai["quirq_ai"]
    quirqy["quirqy"]
    quitter["quitter"]
    recipes["recipes"]
    release["release"]
    remote_build["remote-build"]
    research["research"]
    rollers["rollers"]
    sync["sync"]
    test_pipelines["test-pipelines"]
    toolchains["toolchains"]
    website["website"]
    xo_cowork_api["xo-cowork-api"]
    xo_space["xo-space *"]
  end
  click github "./.github/_index.md"
  click depot "./depot/_index.md"
  click docs "./docs/_index.md"
  click environment "./environment/_index.md"
  click euler "./euler/_index.md"
  click galileo "./galileo/_index.md"
  click gardener "./gardener/_index.md"
  click gate "./gate/_index.md"
  click infra_config "./infra-config/_index.md"
  click innernet "./innernet/_index.md"
  click installer "./installer/_index.md"
  click instants "./instants/_index.md"
  click marketing "./marketing/_index.md"
  click perf "./perf/_index.md"
  click quirq_ai "./quirq_ai/_index.md"
  click quirqy "./quirqy/_index.md"
  click quitter "./quitter/_index.md"
  click recipes "./recipes/_index.md"
  click release "./release/_index.md"
  click remote_build "./remote-build/_index.md"
  click research "./research/_index.md"
  click rollers "./rollers/_index.md"
  click sync "./sync/_index.md"
  click test_pipelines "./test-pipelines/_index.md"
  click toolchains "./toolchains/_index.md"
  click website "./website/_index.md"
  click xo_cowork_api "./xo-cowork-api/_index.md"
  click xo_space "./xo-space/_index.md"
```

[`.github`](.github/_index.md) · [`depot`](depot/_index.md) · [`docs`](docs/_index.md)* · [`environment`](environment/_index.md) · [`euler`](euler/_index.md) · [`galileo`](galileo/_index.md) · [`gardener`](gardener/_index.md) · [`gate`](gate/_index.md) · [`infra-config`](infra-config/_index.md) · [`innernet`](innernet/_index.md) · [`installer`](installer/_index.md) · [`instants`](instants/_index.md) · [`marketing`](marketing/_index.md) · [`perf`](perf/_index.md) · [`quirq_ai`](quirq_ai/_index.md) · [`quirqy`](quirqy/_index.md) · [`quitter`](quitter/_index.md) · [`recipes`](recipes/_index.md) · [`release`](release/_index.md) · [`remote-build`](remote-build/_index.md) · [`research`](research/_index.md) · [`rollers`](rollers/_index.md) · [`sync`](sync/_index.md) · [`test-pipelines`](test-pipelines/_index.md) · [`toolchains`](toolchains/_index.md) · [`website`](website/_index.md) · [`xo-cowork-api`](xo-cowork-api/_index.md) · [`xo-space`](xo-space/_index.md)*

\* public fork
<!-- quirq-wiki:repos:end -->

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
