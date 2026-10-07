<!-- quirq-wiki-generated repo=website dir=scripts/lib -->

# website / scripts/lib

Source: [scripts/lib](https://github.com/quirq-ai/website/tree/main/scripts/lib) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### quirq-catalog.mjs

Shared by the Gatsby UI and the Node sync command. Keep this module free of Node APIs.
Notable exports: `validateQuirqConfig`, `normalizeAppPath`, `safeWebUrl`,
`normalizeRepository`, `buildQuirqApps`, `QUIRQ_COLORS`, `QUIRQ_ICONS`.

[`scripts/lib/quirq-catalog.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/lib/quirq-catalog.mjs) · code · 11322 bytes

### quirq-phases.mjs

The project phase ladder: where each quirq repo stands, read from the repo's shape. Shared
by the projects sync script, its tests and the browser (src/lib/quirqProjects.ts). Notable
exports: `projectRuleText`, `ungroupedRepositories`, `countPeople`, `isNoteFile`,
`readSignals`, `computePhase`, `validateProjectsConfig`, `buildQuirqProjects`, and 3 more.

[`scripts/lib/quirq-phases.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/lib/quirq-phases.mjs) · code · 10284 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
