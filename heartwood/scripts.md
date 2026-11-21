<!-- quirq-wiki-generated repo=heartwood dir=scripts -->

# heartwood / scripts

Source: [scripts](https://github.com/quirq-ai/heartwood/tree/main/scripts) in [heartwood](https://github.com/quirq-ai/heartwood).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### fetch-scene.mjs

Optional: copies the scene's level-of-detail files (about 126 MB) into public/scene/, so a
deploy serves them itself instead of streaming them from PlayCanvas's CDN. node
scripts/fetch-scene.mjs [lod-meta.json url] Then set SCENE.url in src/config.js to
'scene/lod-meta.json' (or open the app with ?src=scene/lod-meta.json). Keep the CC BY 4.0
credit in place wherever it is published.

[`scripts/fetch-scene.mjs`](https://github.com/quirq-ai/heartwood/blob/main/scripts/fetch-scene.mjs) · code · 2384 bytes

_Generated 2026-11-21 13:47 UTC from `main`._
