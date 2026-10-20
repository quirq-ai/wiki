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

[`scripts/videos/README.md`](https://github.com/quirq-ai/docs/blob/main/scripts/videos/README.md) · code · 3866 bytes

### map-depot-to-qq.patch

Patch file `map-depot-to-qq.patch`. diff -ru a/src/Alpha.tsx b/src/Alpha.tsx ---
a/src/Alpha.tsx +++ b/src/Alpha.tsx @@ -146,9 +146,9 @@ { id: "u3", title: "Install qq",
sub: "One paste, safe to run again", body: <> You need git and Python 3.11.4 or newer. Paste
this into a terminal (macOS or Linux, bash or zsh). It runs in a subshell, so it never
changes your current folder or shell.

[`scripts/videos/map-depot-to-qq.patch`](https://github.com/quirq-ai/docs/blob/main/scripts/videos/map-depot-to-qq.patch) · code · 18210 bytes

### map.cjs

const { chromium } = require(process.env.PLAYWRIGHT_CORE || "playwright-core"); const fs =
require("node:fs"); node map.cjs OUT_DIR [NAME WIDTH HEIGHT]: map.webm at 1100x980, or a
phone cut such as map-phone 400 760. Below 768 px the map is wider than the screen, so the
phone cut keeps the map and the step text in view and slides the map sideways to the lane.

[`scripts/videos/map.cjs`](https://github.com/quirq-ai/docs/blob/main/scripts/videos/map.cjs) · code · 2676 bytes

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

_Generated 2026-10-20 10:30 UTC from `main`._
