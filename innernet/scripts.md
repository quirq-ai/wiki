<!-- quirq-wiki-generated repo=innernet dir=scripts -->

# innernet / scripts

Source: [scripts](https://github.com/quirq-ai/innernet/tree/main/scripts) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build-demo-index.ts

Build a GitHub index: public repositories as one Innerpedia, one root per account.

[`scripts/build-demo-index.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/build-demo-index.ts) · code · 40833 bytes

### build-index.ts

Crawl the configured roots and write data/index.json.

[`scripts/build-index.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/build-index.ts) · code · 61283 bytes

### db.ts

Innernet's database from the terminal (lib/db).

[`scripts/db.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/db.ts) · code · 15941 bytes

### shot.mjs

Headless screenshot of a running page, taken once it has settled: fonts loaded and every
finite animation (the staggered `rise`) finished. Drives chrome-headless-shell over the
DevTools protocol, because its --screenshot flag fires mid-animation.

[`scripts/shot.mjs`](https://github.com/quirq-ai/innernet/blob/main/scripts/shot.mjs) · code · 7307 bytes

### shot.sh

Headless screenshot of a running page, for visual checks without a browser window.
scripts/shot.sh [width] [height] [light|dark] scripts/shot.sh "/search?q=linear"
/tmp/results.png 1440 1000 dark Use a tall height (e.g. 2400) to see a whole page. The
capture waits for fonts and for the rise animations to finish; see scripts/shot.mjs. Shebang
`#!/usr/bin/env bash`. Fails fast (`set -e`).

[`scripts/shot.sh`](https://github.com/quirq-ai/innernet/blob/main/scripts/shot.sh) · code · 496 bytes

### try-activity-append.ts

Hand-edited JSONL remains readable when the recorder appends the next event: pnpm tsx
--conditions=react-server scripts/try-activity-append.ts All writes use an isolated
temporary history folder, never the user's history.

[`scripts/try-activity-append.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/try-activity-append.ts) · code · 3693 bytes

### try-remote-config.ts

Remote input as a collection of GitHub repositories, and snapshot isolation: pnpm tsx
--conditions=react-server scripts/try-remote-config.ts All files, history and database paths
are confined to a temporary project.

[`scripts/try-remote-config.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/try-remote-config.ts) · code · 13510 bytes

### try-remote-sources.ts

No network, clones or index writes. Run: node --import tsx scripts/try-remote-sources.ts.

[`scripts/try-remote-sources.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/try-remote-sources.ts) · code · 12527 bytes

### try-remote-sync.ts

Two machines and one remote database, all PGlite in a temporary folder, no network: pnpm tsx
--conditions=react-server scripts/try-remote-sync.ts Checks the sync both ways
(lib/db/remote-sync.ts): the index and history going up, a new machine taking both down,
lines crossing between machines, an index followed, a deletion honoured everywhere it can
be, and the demo's database refused.

[`scripts/try-remote-sync.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/try-remote-sync.ts) · code · 8111 bytes

### try-search.ts

Quick check of the search core from the terminal: pnpm tsx --conditions=react-server
scripts/try-search.ts "linear clone".

[`scripts/try-search.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/try-search.ts) · code · 896 bytes

### try-source-storage.ts

Sources inspection (input, generated data, storage) and opener boundaries: node --import tsx
--conditions=react-server scripts/try-source-storage.ts Every file is in an isolated fixture
and every app-opening command is mocked.

[`scripts/try-source-storage.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/try-source-storage.ts) · code · 10379 bytes

### try-sources.ts

Source selection, cross-source links and live search invalidation: pnpm tsx
--conditions=react-server scripts/try-sources.ts All file writes happen under an isolated
temporary project; no running app is changed.

[`scripts/try-sources.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/try-sources.ts) · code · 9123 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
