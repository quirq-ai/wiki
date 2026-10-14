<!-- quirq-wiki-generated repo=docs dir=scripts/videos -->

# docs / scripts/videos

Source: [scripts/videos](https://github.com/quirq-ai/docs/tree/main/scripts/videos) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Videos”). The videos in public/videos/ are made here. The four terminal
videos are replays of real runs: recorder.py runs each command for real and saves its output
with timings, and record.cjs plays that output back in a drawn terminal window (player.html)
and records the screen. Nothing in a video is typed by hand; re-record when qq's output
changes.

[`scripts/videos/README.md`](https://github.com/quirq-ai/docs/blob/main/scripts/videos/README.md) · code · 3001 bytes

### map.cjs

const { chromium } = require(process.env.PLAYWRIGHT_CORE || "playwright-core"); const fs =
require("node:fs"); const out = process.argv[2]; (async () => { const b = await
chromium.launch({ executablePath: process.env.CHROMIUM_PATH, }); const ctx = await
b.newContext({ viewport: { width: 1100, height: 980 }, colorScheme: "dark", recordVideo: {
dir: out, size.

[`scripts/videos/map.cjs`](https://github.com/quirq-ai/docs/blob/main/scripts/videos/map.cjs) · code · 1169 bytes

### player.html

HTML document `player.html`.

[`scripts/videos/player.html`](https://github.com/quirq-ai/docs/blob/main/scripts/videos/player.html) · code · 2439 bytes

### record.cjs

const { chromium } = require(process.env.PLAYWRIGHT_CORE || "playwright-core"); const fs =
require("node:fs"); const [, , jsonPath, outDir, name, w = "1100", h = "660", font = "17"] =
process.argv; const width = +w, height = +h; (async () => { const rec =
JSON.parse(fs.readFileSync(jsonPath, "utf8")); const b = await chromium.launch({
executablePath: process.

[`scripts/videos/record.cjs`](https://github.com/quirq-ai/docs/blob/main/scripts/videos/record.cjs) · code · 957 bytes

### recorder.py

Run a scripted terminal session for real and record its output with timings. Functions:
`pretty`.

[`scripts/videos/recorder.py`](https://github.com/quirq-ai/docs/blob/main/scripts/videos/recorder.py) · code · 2532 bytes

_Generated 2026-10-14 10:43 UTC from `main`._
