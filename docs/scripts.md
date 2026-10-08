<!-- quirq-wiki-generated repo=docs dir=scripts -->

# docs / scripts

Source: [scripts](https://github.com/quirq-ai/docs/tree/main/scripts) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Space documentation review”). The Space guides follow xo-space
development at 4b1a580 (September 15, 2026: Projects, Agents, guided Setup, command palette,
and the storage reorganization). The website's documentation branch is independent of the
product's release branch.

[`scripts/README.md`](https://github.com/quirq-ai/docs/blob/main/scripts/README.md) · code · 1999 bytes

### verify-space-docs.mjs

const root = resolve(dirname(fileURLToPath(import.meta.url)), ".."); const origin =
process.env.DOCS_PREVIEW_URL || "http://127.0.0.1:3101"; const output =
resolve(process.argv[2] || "/tmp/xo-space-docs-review"); const modulePath =
process.env.PLAYWRIGHT_MODULE; const { chromium } = await import( modulePath ?
pathToFileURL(modulePath).href : "playwright" ).

[`scripts/verify-space-docs.mjs`](https://github.com/quirq-ai/docs/blob/main/scripts/verify-space-docs.mjs) · code · 5455 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
