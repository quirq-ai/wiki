<!-- quirq-wiki-generated repo=website dir=scripts -->

# website / scripts

Source: [scripts](https://github.com/quirq-ai/website/tree/main/scripts) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### check-quirq-source.mjs

import fs from 'node:fs' import path from 'node:path' import { builtinModules, createRequire
} from 'node:module' import { fileURLToPath } from 'node:url' import { createHash } from
'node:crypto' import ts from 'typescript' Notable exports: `frameworkRuntimeImports`,
`auditSource`, `frameworkAliases`.

[`scripts/check-quirq-source.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/check-quirq-source.mjs) · code · 12558 bytes

### quirq-catalog.test.mjs

import test from 'node:test' import assert from 'node:assert/strict' import { mkdtemp,
readFile, writeFile, rm } from 'node:fs/promises' import { tmpdir } from 'node:os' import {
join } from 'node:path' import { Buffer } from 'node:buffer' import { QUIRQ_ICONS,
QUIRQ_ROLES, buildQuirqApps, isDesktopApp, isFramableUrl, mergeLiveRepositories,
normalizeAppPath Automated test file.

[`scripts/quirq-catalog.test.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/quirq-catalog.test.mjs) · code · 30766 bytes

### quirq-phases.test.mjs

import test from 'node:test' import assert from 'node:assert/strict' import { mkdtemp,
readFile, rm, writeFile } from 'node:fs/promises' import { tmpdir } from 'node:os' import {
join } from 'node:path' import { buildQuirqProjects, computePhase, countPeople, isNoteFile,
projectRuleText, readSignals, ungroupedRepositories, validateProjectsConfig, } from './li
Automated test file.

[`scripts/quirq-phases.test.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/quirq-phases.test.mjs) · code · 11944 bytes

### quirq-source.test.mjs

import assert from 'node:assert/strict' import fs from 'node:fs' import os from 'node:os'
import path from 'node:path' import { createHash } from 'node:crypto' import { createRequire
} from 'node:module' import { fileURLToPath } from 'node:url' import test from 'node:test'
import { auditSource, frameworkAliases, frameworkRuntimeImports } from './check-quirq-
Provides a default export as the module's public entry. Automated test file.

[`scripts/quirq-source.test.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/quirq-source.test.mjs) · code · 5042 bytes

### sync-quirq-apps.mjs

import { readFile, writeFile, rename, rm } from 'node:fs/promises' import { resolve, dirname
} from 'node:path' import { fileURLToPath } from 'node:url' import { Buffer } from
'node:buffer' import { buildQuirqApps, normalizeRepository, validateQuirqConfig } from
'./lib/quirq-catalog.mjs' Notable exports: `fetchOrganizationRepositories`,
`fetchRepositoryReadme`, `pruneHiddenReadmes`, `syncQuirqApps`.

[`scripts/sync-quirq-apps.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/sync-quirq-apps.mjs) · code · 7814 bytes

### sync-quirq-projects.mjs

Refresh src/data/quirq-projects.json: the shape of every repo in quirq.projects.json. Uses
anonymous git (a shallow, blobless clone per repo for the files, and a commits-only clone
for who committed), release's public channels.json, and one anonymous GitHub API request for
star counts, falling back to the stars in the apps snapshot. It needs no token. Run with
`pnpm projects:sync`; `--check` validates offline.

[`scripts/sync-quirq-projects.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/sync-quirq-projects.mjs) · code · 8865 bytes

_Generated 2026-10-19 11:23 UTC from `main`._
