<!-- quirq-wiki-generated repo=website dir=scripts -->

# website / scripts

Source: [scripts](https://github.com/quirq-ai/website/tree/main/scripts) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 2 pattern(s)
including `.tmp/`, `.env`. Generated and secret files matching these patterns are not in the
clone the wiki summarizes.

[`scripts/.gitignore`](https://github.com/quirq-ai/website/blob/main/scripts/.gitignore) · other · 10 bytes

### backfill.py

Python module `backfill.py`.

[`scripts/backfill.py`](https://github.com/quirq-ai/website/blob/main/scripts/backfill.py) · code · 1218 bytes

### check-links-post-build.js

eslint-disable @typescript-eslint/no-var-requires.

[`scripts/check-links-post-build.js`](https://github.com/quirq-ai/website/blob/main/scripts/check-links-post-build.js) · code · 25269 bytes

### check-product-changelogs.js

eslint-disable @typescript-eslint/no-var-requires.

[`scripts/check-product-changelogs.js`](https://github.com/quirq-ai/website/blob/main/scripts/check-product-changelogs.js) · code · 4259 bytes

### check-src-links.js

eslint-disable @typescript-eslint/no-var-requires.

[`scripts/check-src-links.js`](https://github.com/quirq-ai/website/blob/main/scripts/check-src-links.js) · code · 11243 bytes

### contributors.py

Python module `contributors.py`.

[`scripts/contributors.py`](https://github.com/quirq-ai/website/blob/main/scripts/contributors.py) · code · 1094 bytes

### fix-mdx.js

const fs = require('fs') // eslint-disable-line @typescript-eslint/no-var-requires const
glob = require('glob') // eslint-disable-line @typescript-eslint/no-var-requires.

[`scripts/fix-mdx.js`](https://github.com/quirq-ai/website/blob/main/scripts/fix-mdx.js) · code · 4620 bytes

### generate-brand-assets.mjs

Materialize stable /brand URLs from the canonical package before Gatsby copies static/ to
public/. package.json lifecycle hooks run this automatically for the standard build
commands.

[`scripts/generate-brand-assets.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/generate-brand-assets.mjs) · code · 5058 bytes

### generate-mcp-rest-mapping-candidates.js

eslint-disable @typescript-eslint/no-var-requires.

[`scripts/generate-mcp-rest-mapping-candidates.js`](https://github.com/quirq-ai/website/blob/main/scripts/generate-mcp-rest-mapping-candidates.js) · code · 3831 bytes

### generate-md-redirects.js

eslint-disable @typescript-eslint/no-var-requires.

[`scripts/generate-md-redirects.js`](https://github.com/quirq-ai/website/blob/main/scripts/generate-md-redirects.js) · code · 3635 bytes

### import-changelog-docs-ctas.ts

One-time import of docs links into the Strapi CTA field for changelog entries.

[`scripts/import-changelog-docs-ctas.ts`](https://github.com/quirq-ai/website/blob/main/scripts/import-changelog-docs-ctas.ts) · code · 4248 bytes

### quirq-catalog.test.mjs

import test from 'node:test' import assert from 'node:assert/strict' import { mkdtemp,
readFile, writeFile, rm } from 'node:fs/promises' import { tmpdir } from 'node:os' import {
join } from 'node:path' import { Buffer } from 'node:buffer' import { buildQuirqApps,
normalizeAppPath, safeWebUrl } from './lib/quirq-catalog.mjs' import {
fetchOrganizationReposit Automated test file.

[`scripts/quirq-catalog.test.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/quirq-catalog.test.mjs) · code · 12706 bytes

### run-post-build-tasks.ts

import path from 'path' import fs from 'fs' import dotenv from 'dotenv' import {
createCareersOG, createOGImages, createOrUpdateStrapiPosts } from
'../gatsby/postBuildTasks'.

[`scripts/run-post-build-tasks.ts`](https://github.com/quirq-ai/website/blob/main/scripts/run-post-build-tasks.ts) · code · 1465 bytes

### sync-quirq-apps.mjs

import { readFile, writeFile, rename, rm } from 'node:fs/promises' import { resolve, dirname
} from 'node:path' import { fileURLToPath } from 'node:url' import { Buffer } from
'node:buffer' import { buildQuirqApps, normalizeRepository, validateQuirqConfig } from
'./lib/quirq-catalog.mjs' Notable exports: `fetchOrganizationRepositories`,
`fetchRepositoryReadme`, `syncQuirqApps`.

[`scripts/sync-quirq-apps.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/sync-quirq-apps.mjs) · code · 6526 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
