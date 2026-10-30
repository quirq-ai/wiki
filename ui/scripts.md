<!-- quirq-wiki-generated repo=ui dir=scripts -->

# ui / scripts

Source: [scripts](https://github.com/quirq-ai/ui/tree/main/scripts) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build-registry.mjs

Builds public/r/*.json from registry.json. bun run registry:build (or: bun scripts/build-
registry.mjs — runs before dev and build) `homepage` in registry.json is the one place the
registry URL lives. Items that depend on other items in this registry need full URLs (so
`shadcn add <url>` works with no setup), so this rewrites every such registryDependency to
`${homepage}/r/<name>.json` before building.

[`scripts/build-registry.mjs`](https://github.com/quirq-ai/ui/blob/main/scripts/build-registry.mjs) · code · 1921 bytes

### generate-registry.mjs

Generates registry items for every Astryx component, block template and page template.

[`scripts/generate-registry.mjs`](https://github.com/quirq-ai/ui/blob/main/scripts/generate-registry.mjs) · code · 12842 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
