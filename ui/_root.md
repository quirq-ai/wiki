<!-- quirq-wiki-generated repo=ui dir=. -->

# ui / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/ui/tree/main) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 23 pattern(s)
including `/node_modules`, `/.pnp`, `.pnp.*`, `.yarn/*`, `!.yarn/patches`, `!.yarn/plugins`,
`!.yarn/releases`, `!.yarn/versions`, and 15 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/ui/blob/main/.gitignore) · other · 568 bytes

### .mcp.json

JSON document `.mcp.json` whose top-level keys are `mcpServers`. Structured data consumed by
the surrounding app or tooling.

[`.mcp.json`](https://github.com/quirq-ai/ui/blob/main/.mcp.json) · code · 128 bytes

### AGENTS.md

The agent/workspace instructions (“This is NOT the Next.js you know”). This version has
breaking changes — APIs, conventions, and file structure may all differ from your training
data. Read the relevant guide in node_modules/next/dist/docs/ (resolved from this file's
directory; in monorepos the next package may not be visible from the repo root) before
writing any code. Heed deprecation notices.

[`AGENTS.md`](https://github.com/quirq-ai/ui/blob/main/AGENTS.md) · code · 4292 bytes

### README.md

The project README (“Quirq UI registry”). A shadcn registry (plus docs site) for every
Astryx component, block template and page template, built with Next.js.

[`README.md`](https://github.com/quirq-ai/ui/blob/main/README.md) · code · 3489 bytes

### biome.json

JSON document `biome.json` whose top-level keys are `$schema`, `vcs`, `files`, `formatter`,
`css`, `linter`, `assist`. Structured data consumed by the surrounding app or tooling.

[`biome.json`](https://github.com/quirq-ai/ui/blob/main/biome.json) · code · 863 bytes

### bun.lock

Package-manager lockfile (bun.lock, 112.0 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`bun.lock`](https://github.com/quirq-ai/ui/blob/main/bun.lock) · lockfile · 114641 bytes

### next.config.ts

Registry items are installed from (and depend on) this origin, so docs commands use it too.
Provides a default export as the module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/ui/blob/main/next.config.ts) · code · 2285 bytes

### package.json

npm package manifest for `registryv2` v0.1.0. Scripts: `dev`, `predev`, `build`, `prebuild`,
`start`, `lint`, `format`, `typecheck`, `registry:generate`, `registry:build`.

[`package.json`](https://github.com/quirq-ai/ui/blob/main/package.json) · code · 1461 bytes

### registry.json

Large text file (474.2 KB), over the generator's 256 KB parse cap. Only a prefix was
inspected. Opening lines: { "$schema": "https://ui.shadcn.com/schema/registry.json", "name":
"quirq-ui-registry", "homepage": "https://ui.quirq.dev", "items": [ { "name": "astryx-base",
"type": "registry:item", "title": "Quirq UI base", "description": "Installs Quirq UI core +
the neutral theme packages.

[`registry.json`](https://github.com/quirq-ai/ui/blob/main/registry.json) · huge · 485545 bytes

### theme.template.ts

Astryx theme template — every `defineTheme` field, with a note on what it does and when to
reach for it. Notable exports: `myTheme`.

[`theme.template.ts`](https://github.com/quirq-ai/ui/blob/main/theme.template.ts) · code · 18904 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/ui/blob/main/tsconfig.json) · code · 670 bytes

_Generated 2026-10-26 11:39 UTC from `main`._
