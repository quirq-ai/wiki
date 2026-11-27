<!-- quirq-wiki-generated repo=quirq-orbit dir=tools/import-quirq -->

# quirq-orbit / tools/import-quirq

Source: [tools/import-quirq](https://github.com/quirq-ai/quirq-orbit/tree/main/tools/import-quirq) in [quirq-orbit](https://github.com/quirq-ai/quirq-orbit).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 2 pattern(s)
including `pages/`, `__pycache__/`. Generated and secret files matching these patterns are
not in the clone the wiki summarizes.

[`tools/import-quirq/.gitignore`](https://github.com/quirq-ai/quirq-orbit/blob/main/tools/import-quirq/.gitignore) · other · 20 bytes

### capture.mjs

Capture a poster screenshot and a short scrolling clip of each live app, for the Work
showcase. No dependencies: drives a local headless Chrome over the DevTools protocol,
encodes with ffmpeg. node capture.mjs ../../assets/work heartwood=https://...
instants=https://... node capture.mjs ../../assets/work --from ../../js/repos.js (every repo
with a live app).

[`tools/import-quirq/capture.mjs`](https://github.com/quirq-ai/quirq-orbit/blob/main/tools/import-quirq/capture.mjs) · code · 6768 bytes

### convert.py

Convert downloaded quirq.ai research + writing pages into data for quirq-orbit. Runnable as
a script via `if __name__ == '__main__'`. Classes: `Node`, `TreeBuilder`, `Stop`. Functions:
`parse`, `link`, `chart`, `emit_open`, `emit_close`, `conv`, `render`, `article`, and 1
more.

[`tools/import-quirq/convert.py`](https://github.com/quirq-ai/quirq-orbit/blob/main/tools/import-quirq/convert.py) · code · 10439 bytes

### fetch.sh

Download the quirq.ai research + writing pages into ./pages (git-ignored), then run: python3
gen.py ../../js Shebang `#!/usr/bin/env bash`. Functions: `get`. Fails fast (`set -e`).

[`tools/import-quirq/fetch.sh`](https://github.com/quirq-ai/quirq-orbit/blob/main/tools/import-quirq/fetch.sh) · code · 1167 bytes

### gen.py

Build quirq-orbit/js/research.js and js/writing.js from the downloaded pages. Functions:
`tidy`, `cover`, `study_link`, `wp_section`.

[`tools/import-quirq/gen.py`](https://github.com/quirq-ai/quirq-orbit/blob/main/tools/import-quirq/gen.py) · code · 7003 bytes

### news.json

JSON array `news.json` with 17 items; first item keys: `slug`, `title`, `summary`, `url`.

[`tools/import-quirq/news.json`](https://github.com/quirq-ai/quirq-orbit/blob/main/tools/import-quirq/news.json) · code · 4348 bytes

### repos.py

Build quirq-orbit/js/repos.js from the public repositories in github.com/quirq-ai. Runnable
as a script via `if __name__ == '__main__'`. Functions: `gh`, `projects_file`, `onboarded`,
`readme_html`, `first_para`, `info`, `embeddable`, `media`, and 3 more.

[`tools/import-quirq/repos.py`](https://github.com/quirq-ai/quirq-orbit/blob/main/tools/import-quirq/repos.py) · code · 13618 bytes

_Generated 2026-11-27 15:41 UTC from `main`._
