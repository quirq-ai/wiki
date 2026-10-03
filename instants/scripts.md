<!-- quirq-wiki-generated repo=instants dir=scripts -->

# instants / scripts

Source: [scripts](https://github.com/quirq-ai/instants/tree/main/scripts) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build-verified.sh

Shell script `build-verified.sh`. Shebang `#!/usr/bin/env bash`. Fails fast (`set -e`).

[`scripts/build-verified.sh`](https://github.com/quirq-ai/instants/blob/main/scripts/build-verified.sh) · code · 661 bytes

### ensure-hosting.mjs

const defaultProjectRoot = fileURLToPath(new URL("../", import.meta.url)) Notable exports:
`readHostingConfig`, `ensureHostingConfig`.

[`scripts/ensure-hosting.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/ensure-hosting.mjs) · code · 1270 bytes

### execution-profile.mjs

export function readExecutionProfile() { let settings; try { settings =
JSON.parse(readFileSync(new URL("../.sites-runtime/execution-profile.json",
import.meta.url), "utf8")); } catch (error) { Clean clones and remote builds have no
checkout-local selection. if (error.code === "ENOENT") return "portable"; throw error; } if
(!["managed-linux", "portable"].inc Notable exports: `readExecutionProfile`.

[`scripts/execution-profile.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/execution-profile.mjs) · code · 624 bytes

### install-ci.mjs

if (!process.env.npm_execpath) { throw new Error("Run this installer with npm run
install:ci."); }.

[`scripts/install-ci.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/install-ci.mjs) · code · 1685 bytes

### install-ci.sh

Shell script `install-ci.sh`. Shebang `#!/usr/bin/env bash`. Fails fast (`set -e`).

[`scripts/install-ci.sh`](https://github.com/quirq-ai/instants/blob/main/scripts/install-ci.sh) · code · 6783 bytes

### install-pnpm.sh

Shell script `install-pnpm.sh`. Shebang `#!/usr/bin/env bash`. Functions: `report_store`,
`can_write_directory`, `release_shared_lock`, `acquire_shared_lock`. Fails fast (`set -e`).

[`scripts/install-pnpm.sh`](https://github.com/quirq-ai/instants/blob/main/scripts/install-pnpm.sh) · code · 9015 bytes

### npm-install.mjs

import { closeSync, constants, fstatSync, ftruncateSync, openSync, readFileSync,
writeFileSync, } from "node:fs"; const MAX_PACKAGES = 100_000 Notable exports:
`runNpmInstall`, `NpmCacheProgress`.

[`scripts/npm-install.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/npm-install.mjs) · code · 7025 bytes

### pnpm-install.mjs

import { accessSync, closeSync, constants, fstatSync, ftruncateSync, openSync, readFileSync,
writeFileSync, writeSync, } from "node:fs"; const MAX_PACKAGES = 100_000; const CACHE_SEEDS
= new Set(["seed_used", "seed_unavailable", "seed_lockfile_mismatch",
"decision_unavailable", "not_applicable"]); const STORE_STATES = new Set(["created",
"seeded", "reused" Notable exports: `InstallProgress`.

[`scripts/pnpm-install.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/pnpm-install.mjs) · code · 10633 bytes

### run-framework.mjs

const [command, ...args] = process.argv.slice(2); if (!["dev", "build"].includes(command))
throw new Error("Expected dev or build."); ensureHostingConfig(); const managedLinux =
readExecutionProfile() === "managed-linux".

[`scripts/run-framework.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/run-framework.mjs) · code · 1108 bytes

### sites-env.mjs

export const projectRoot = fileURLToPath(new URL("../", import.meta.url)); const runtimeRoot
= process.env.SITES_RUNTIME_ROOT || path.join(projectRoot, ".sites-runtime") Notable
exports: `projectRoot`.

[`scripts/sites-env.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/sites-env.mjs) · code · 906 bytes

### sites-env.sh

Shell script `sites-env.sh`. Shebang `#!/usr/bin/env bash`. Fails fast (`set -e`).

[`scripts/sites-env.sh`](https://github.com/quirq-ai/instants/blob/main/scripts/sites-env.sh) · code · 1530 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
