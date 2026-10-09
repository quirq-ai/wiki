<!-- quirq-wiki-generated repo=euler dir=app/innernet/scripts -->

# euler / app/innernet/scripts

Source: [app/innernet/scripts](https://github.com/quirq-ai/euler/tree/main/app/innernet/scripts) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build-demo-index.ts

Build the demo index: the public repositories of github.com/quirq-ai as one Innerpedia.

[`app/innernet/scripts/build-demo-index.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/scripts/build-demo-index.ts) · code · 24226 bytes

### build-index.ts

Crawl the configured roots and write data/index.json.

[`app/innernet/scripts/build-index.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/scripts/build-index.ts) · code · 51596 bytes

### db.ts

Innernet's database from the terminal (lib/db).

[`app/innernet/scripts/db.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/scripts/db.ts) · code · 13495 bytes

### dev-demo.mjs

Set the demo environment in Node so the same command works in every shell. Wired into a
Next.js app (App Router or Next APIs).

[`app/innernet/scripts/dev-demo.mjs`](https://github.com/quirq-ai/euler/blob/main/app/innernet/scripts/dev-demo.mjs) · code · 388 bytes

### shot.mjs

Headless screenshot of a running page, taken once it has settled: fonts loaded and every
finite animation (the staggered `rise`) finished. Drives chrome-headless-shell over the
DevTools protocol, because its --screenshot flag fires mid-animation.

[`app/innernet/scripts/shot.mjs`](https://github.com/quirq-ai/euler/blob/main/app/innernet/scripts/shot.mjs) · code · 6946 bytes

### shot.sh

Headless screenshot of a running page, for visual checks without a browser window.
scripts/shot.sh [width] [height] [light|dark] scripts/shot.sh "/search?q=linear"
/tmp/results.png 1440 1000 dark Use a tall height (e.g. 2400) to see a whole page. The
capture waits for fonts and for the rise animations to finish; see scripts/shot.mjs. Shebang
`#!/usr/bin/env bash`. Fails fast (`set -e`).

[`app/innernet/scripts/shot.sh`](https://github.com/quirq-ai/euler/blob/main/app/innernet/scripts/shot.sh) · code · 496 bytes

### try-search.ts

Quick check of the search core from the terminal: pnpm tsx --conditions=react-server
scripts/try-search.ts "linear clone".

[`app/innernet/scripts/try-search.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/scripts/try-search.ts) · code · 896 bytes

### verify-mount.mjs

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."); const
basePath = process.env.INNERNET_BASE_PATH || "/app/innernet"; process.env.NODE_ENV =
"production"; process.env.INNERNET_BASE_PATH = basePath; process.env.INNERNET_DIST_DIR ||=
".next-euler"; process.env.INNERNET_PROJECT_ROOT = project; process.env.INNERNET_DB = "off".

[`app/innernet/scripts/verify-mount.mjs`](https://github.com/quirq-ai/euler/blob/main/app/innernet/scripts/verify-mount.mjs) · code · 3379 bytes

_Generated 2026-10-09 12:09 UTC from `main`._
