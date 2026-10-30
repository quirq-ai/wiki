<!-- quirq-wiki-generated repo=argus-code dir=scripts/screenshots -->

# argus-code / scripts/screenshots

Source: [scripts/screenshots](https://github.com/quirq-ai/argus-code/tree/main/scripts/screenshots) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capture.mjs

Capture raw dashboard screenshots for the README and the docs site. Requires a running `uv
run argus start --port 4243` (any port; pass --url). Playwright comes from
dashboard/node_modules (run `npx playwright install chromium` there once).

[`scripts/screenshots/capture.mjs`](https://github.com/quirq-ai/argus-code/blob/main/scripts/screenshots/capture.mjs) · code · 10271 bytes

### frame.mjs

Frame raw captures (from capture.mjs) into the branded browser-window look used by the
README hero and every tour screenshot, then write them into assets/. node
scripts/screenshots/frame.mjs --in <dir> Output: assets/screenshots/<name>.png (2880x1760,
i.e. 1440x880 @2x) for every raw PNG in <dir>, plus assets/hero.png = the framed overview.

[`scripts/screenshots/frame.mjs`](https://github.com/quirq-ai/argus-code/blob/main/scripts/screenshots/frame.mjs) · code · 3310 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
