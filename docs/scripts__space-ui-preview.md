<!-- quirq-wiki-generated repo=docs dir=scripts/space-ui-preview -->

# docs / scripts/space-ui-preview

Source: [scripts/space-ui-preview](https://github.com/quirq-ai/docs/tree/main/scripts/space-ui-preview) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 1 pattern(s)
including `__pycache__/`. Generated and secret files matching these patterns are not in the
clone the wiki summarizes.

[`scripts/space-ui-preview/.gitignore`](https://github.com/quirq-ai/docs/blob/main/scripts/space-ui-preview/.gitignore) · other · 13 bytes

### README.md

The project README (“Space documentation screenshots”). These images capture the actual,
unmodified space_ui browser application from [xo-space](https://github.com/quirq-ai/xo-
space), with a fictional workspace supplied by a local Python fixture server. They are
browser captures, not visual mockups.

[`scripts/space-ui-preview/README.md`](https://github.com/quirq-ai/docs/blob/main/scripts/space-ui-preview/README.md) · code · 5743 bytes

### capture-report.json

JSON document `capture-report.json` whose top-level keys are `source`, `viewport`,
`screenshots`, `checks`, `errors`, `wikiNavigation`. Structured data consumed by the
surrounding app or tooling.

[`scripts/space-ui-preview/capture-report.json`](https://github.com/quirq-ai/docs/blob/main/scripts/space-ui-preview/capture-report.json) · code · 17538 bytes

### capture.mjs

Unmodified browser captures of a sibling xo-space checkout. All API data.

[`scripts/space-ui-preview/capture.mjs`](https://github.com/quirq-ai/docs/blob/main/scripts/space-ui-preview/capture.mjs) · code · 20460 bytes

### fixtures.py

Synthetic, deterministic API payloads for reviewing the real Space UI. Functions: `stamp`,
`catalog`, `paths_for`, `graph`, `dashboard`, `activity`, `timeline`, `todos`, and 17 more.

[`scripts/space-ui-preview/fixtures.py`](https://github.com/quirq-ai/docs/blob/main/scripts/space-ui-preview/fixtures.py) · code · 30006 bytes

### server.py

Serve actual Space assets with fictional APIs, bound only to localhost. Runnable as a script
via `if __name__ == '__main__'`. Classes: `Handler`. Functions: `read_quirq_contracts`.

[`scripts/space-ui-preview/server.py`](https://github.com/quirq-ai/docs/blob/main/scripts/space-ui-preview/server.py) · code · 9332 bytes

_Generated 2026-10-09 12:09 UTC from `main`._
