<!-- quirq-wiki-generated repo=quirq_ai dir=. -->

# quirq_ai / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/quirq_ai/tree/main) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 22 pattern(s)
including `/node_modules`, `/.pnp`, `.pnp.*`, `.yarn/*`, `!.yarn/patches`, `!.yarn/plugins`,
`!.yarn/releases`, `!.yarn/versions`, and 14 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/quirq_ai/blob/main/.gitignore) · other · 480 bytes

### AGENTS.md

The agent/workspace instructions (“This is NOT the Next.js you know”). This version has
breaking changes — APIs, conventions, and file structure may all differ from your training
data. Read the relevant guide in node_modules/next/dist/docs/ before writing any code. Heed
deprecation notices.

[`AGENTS.md`](https://github.com/quirq-ai/quirq_ai/blob/main/AGENTS.md) · code · 43003 bytes

### CLAUDE.md

The Claude Code instructions. @AGENTS.md.

[`CLAUDE.md`](https://github.com/quirq-ai/quirq_ai/blob/main/CLAUDE.md) · code · 11 bytes

### README.md

The project README (“What this repository is”). quirq · work at light speed.

[`README.md`](https://github.com/quirq-ai/quirq_ai/blob/main/README.md) · code · 35834 bytes

### next.config.ts

const nextConfig: NextConfig = { This app lives inside a worktree under a larger workspace
that has its own lockfiles. Without pinning the root, Turbopack walks up and infers one of
those instead of this directory. turbopack: { root: import.meta.dirname } Provides a default
export as the module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/next.config.ts) · code · 1778 bytes

### package.json

npm package manifest for `web` v0.1.0. Scripts: `dev`, `build`, `start`, `test`,
`typecheck`, `sample-ledger`, `quirq`, `git-journey`.

[`package.json`](https://github.com/quirq-ai/quirq_ai/blob/main/package.json) · code · 869 bytes

### pnpm-lock.yaml

Package-manager lockfile (pnpm-lock.yaml, 51.6 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`pnpm-lock.yaml`](https://github.com/quirq-ai/quirq_ai/blob/main/pnpm-lock.yaml) · lockfile · 52854 bytes

### pnpm-workspace.yaml

YAML file `pnpm-workspace.yaml`. Top-level keys: `ignoredBuiltDependencies`.

[`pnpm-workspace.yaml`](https://github.com/quirq-ai/quirq_ai/blob/main/pnpm-workspace.yaml) · code · 54 bytes

### postcss.config.mjs

const config = { plugins: { "@tailwindcss/postcss": {}, }, } Provides a default export as
the module's public entry.

[`postcss.config.mjs`](https://github.com/quirq-ai/quirq_ai/blob/main/postcss.config.mjs) · code · 94 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/quirq_ai/blob/main/tsconfig.json) · code · 666 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
