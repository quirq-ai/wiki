<!-- quirq-wiki-generated repo=website dir=scripts/bundle -->

# website / scripts/bundle

Source: [scripts/bundle](https://github.com/quirq-ai/website/tree/main/scripts/bundle) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build-bundle-comment.mjs

import fs from 'node:fs' import path from 'node:path' import { fileURLToPath } from
'node:url'.

[`scripts/bundle/build-bundle-comment.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/bundle/build-bundle-comment.mjs) · code · 4856 bytes

### bundle-size-report.mjs

import fs from 'node:fs' import path from 'node:path' import { fileURLToPath } from
'node:url' import zlib from 'node:zlib'.

[`scripts/bundle/bundle-size-report.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/bundle/bundle-size-report.mjs) · code · 1809 bytes

### check-eager-graph.mjs

import { execSync } from 'node:child_process' import fs from 'node:fs' import path from
'node:path' import { fileURLToPath } from 'node:url' Notable exports: `measure`.

[`scripts/bundle/check-eager-graph.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/bundle/check-eager-graph.mjs) · code · 9576 bytes

### check-eager-graph.test.mjs

import assert from 'node:assert/strict' import fs from 'node:fs' import path from
'node:path' import { test } from 'node:test' import { fileURLToPath } from 'node:url'
Automated test file.

[`scripts/bundle/check-eager-graph.test.mjs`](https://github.com/quirq-ai/website/blob/main/scripts/bundle/check-eager-graph.test.mjs) · code · 2811 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
