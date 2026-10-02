<!-- quirq-wiki-generated repo=innernet dir=scripts -->

# innernet / scripts

Source: [scripts](https://github.com/quirq-ai/innernet/tree/main/scripts) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build-index.ts

Crawl the configured roots and write data/index.json. pnpm index # uses innernet.config.json
INNERNET_ROOTS=~/a,~/b INNERNET_MAX_DEPTH=3 pnpm index # other roots and depth, one run
INNERNET_OUT=/tmp/test.json pnpm index # writes there; data/index.json is left alone Privacy
rules this script keeps: - It only ever reads README*, CLAUDE.md, AGENTS.md and project
manifests.

[`scripts/build-index.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/build-index.ts) · code · 29179 bytes

### shot.mjs

Headless screenshot of a running page, taken once it has settled: fonts loaded and every
finite animation (the staggered `rise`) finished. Drives chrome-headless-shell over the
DevTools protocol, because its --screenshot flag fires mid-animation. CHROME_BIN overrides
the browser. node scripts/shot.mjs <url-path> <out.png> [width] [height] [light|dark] Prints
the document size, and flags horizontal overflow with the elements causing it.

[`scripts/shot.mjs`](https://github.com/quirq-ai/innernet/blob/main/scripts/shot.mjs) · code · 5836 bytes

### shot.sh

Headless screenshot of a running page, for visual checks without a browser window.
scripts/shot.sh [width] [height] [light|dark] scripts/shot.sh "/search?q=linear"
/tmp/results.png 1440 1000 dark Use a tall height (e.g. 2400) to see a whole page. The
capture waits for fonts and for the rise animations to finish; see scripts/shot.mjs. Shebang
`#!/usr/bin/env bash`. Fails fast (`set -e`).

[`scripts/shot.sh`](https://github.com/quirq-ai/innernet/blob/main/scripts/shot.sh) · code · 496 bytes

### try-search.ts

Quick check of the search core from the terminal: pnpm tsx --conditions=react-server
scripts/try-search.ts "linear clone".

[`scripts/try-search.ts`](https://github.com/quirq-ai/innernet/blob/main/scripts/try-search.ts) · code · 896 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
