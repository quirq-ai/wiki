<!-- quirq-wiki-generated repo=website dir=scripts/lib -->

# website / scripts/lib

Source: [scripts/lib](https://github.com/quirq-ai/website/tree/main/scripts/lib) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### quirq-catalog.mjs

Shared by the Gatsby UI and the Node sync command. Keep this module free of Node APIs. The
project color tokens QuirqAppIcon tints with. Notable exports: `validateQuirqConfig`,
`isFramableUrl`, `normalizeAppPath`, `safeWebUrl`, `normalizeRepository`,
`mergeLiveRepositories`, `buildQuirqApps`, `QUIRQ_COLORS`, and 1 more.

[`scripts/lib/quirq-catalog.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/lib/quirq-catalog.mjs) · code · 16063 bytes

### quirq-phases.mjs

The project phase ladder: where each quirq repo stands, read from the repo's shape. Shared
by the projects sync script, its tests and the browser (src/lib/quirqProjects.ts). Notable
exports: `projectRuleText`, `ungroupedRepositories`, `countPeople`, `isNoteFile`,
`readSignals`, `computePhase`, `validateProjectsConfig`, `buildQuirqProjects`, and 3 more.

[`scripts/lib/quirq-phases.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/lib/quirq-phases.mjs) · code · 10284 bytes

### strip-readmes-loader.cjs

Webpack loader for src/data/quirq-repositories.json in the browser bundle: drops README
text, which every page would otherwise download. App pages get their README through
pageContext (server rendering and hydration match) and then read the current one from
GitHub. Server rendering keeps the full file.

[`scripts/lib/strip-readmes-loader.cjs`](https://github.com/quirq-ai/website/blob/main/scripts/lib/strip-readmes-loader.cjs) · code · 556 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
