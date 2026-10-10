<!-- quirq-wiki-generated repo=ui dir=library/website/source/scripts/lib -->

# ui / library/website/source/scripts/lib

Source: [library/website/source/scripts/lib](https://github.com/quirq-ai/ui/tree/main/library/website/source/scripts/lib) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### quirq-catalog.mjs

Shared by the Gatsby UI and the Node sync command. Keep this module free of Node APIs. The
project color tokens QuirqAppIcon tints with. Notable exports: `repositoryRole`,
`validateQuirqConfig`, `isFramableUrl`, `normalizeAppPath`, `safeWebUrl`,
`normalizeRepository`, `mergeLiveRepositories`, `buildQuirqApps`, and 4 more.

[`library/website/source/scripts/lib/quirq-catalog.mjs`](https://github.com/quirq-ai/ui/blob/main/library/website/source/scripts/lib/quirq-catalog.mjs) · code · 17823 bytes

### quirq-phases.mjs

The project phase ladder: where each quirq repo stands, read from the repo's shape. Shared
by the projects sync script, its tests and the browser (src/lib/quirqProjects.ts). Notable
exports: `projectRuleText`, `ungroupedRepositories`, `countPeople`, `isNoteFile`,
`readSignals`, `computePhase`, `validateProjectsConfig`, `buildQuirqProjects`, and 3 more.

[`library/website/source/scripts/lib/quirq-phases.mjs`](https://github.com/quirq-ai/ui/blob/main/library/website/source/scripts/lib/quirq-phases.mjs) · code · 10284 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
