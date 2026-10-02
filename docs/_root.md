<!-- quirq-wiki-generated repo=docs dir=. -->

# docs / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/docs/tree/main) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .example.env

Environment template `.example.env` (values omitted from the wiki). Keys:
`ANTHROPIC_API_KEY`, `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST`,
`NEXT_PUBLIC_GA_MEASUREMENT_ID`. Copy to `.env` locally; never commit real credentials.

[`.example.env`](https://github.com/quirq-ai/docs/blob/main/.example.env) · code · 165 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 19 pattern(s)
including `/node_modules`, `.source`, `/coverage`, `/.next/`, `/out/`, `/build`,
`*.tsbuildinfo`, `.DS_Store`, and 11 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/docs/blob/main/.gitignore) · other · 270 bytes

### README.md

The project README (“XO Docs”). This is a Next.js application generated with [Create
Fumadocs](https://github.com/fuma-nama/fumadocs).

[`README.md`](https://github.com/quirq-ai/docs/blob/main/README.md) · code · 1587 bytes

### biome.json

JSON document `biome.json` whose top-level keys are `$schema`, `vcs`, `files`, `formatter`,
`css`, `linter`, `assist`. Structured data consumed by the surrounding app or tooling.

[`biome.json`](https://github.com/quirq-ai/docs/blob/main/biome.json) · code · 951 bytes

### cli.json

JSON document `cli.json` whose top-level keys are `$schema`, `aliases`, `baseDir`,
`uiLibrary`, `framework`, `commands`. Structured data consumed by the surrounding app or
tooling.

[`cli.json`](https://github.com/quirq-ai/docs/blob/main/cli.json) · code · 318 bytes

### next.config.mjs

const withMDX = createMDX() Provides a default export as the module's public entry.

[`next.config.mjs`](https://github.com/quirq-ai/docs/blob/main/next.config.mjs) · code · 2432 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 245.8 KB). It pins the exact dependency tree
for reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`package-lock.json`](https://github.com/quirq-ai/docs/blob/main/package-lock.json) · lockfile · 251709 bytes

### package.json

npm package manifest for `xo-docs` v0.0.0. Scripts: `build`, `dev`, `start`, `types:check`,
`prepare`, `postinstall`, `lint`, `format`.

[`package.json`](https://github.com/quirq-ai/docs/blob/main/package.json) · code · 1772 bytes

### pnpm-lock.yaml

Package-manager lockfile (pnpm-lock.yaml, 244.9 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`pnpm-lock.yaml`](https://github.com/quirq-ai/docs/blob/main/pnpm-lock.yaml) · lockfile · 250778 bytes

### pnpm-workspace.yaml

YAML file `pnpm-workspace.yaml`. Top-level keys: `allowBuilds`.

[`pnpm-workspace.yaml`](https://github.com/quirq-ai/docs/blob/main/pnpm-workspace.yaml) · code · 80 bytes

### postcss.config.mjs

const config = { plugins: { "@tailwindcss/postcss": {}, }, } Provides a default export as
the module's public entry.

[`postcss.config.mjs`](https://github.com/quirq-ai/docs/blob/main/postcss.config.mjs) · code · 94 bytes

### proxy.ts

const { rewrite: rewriteDocs } = rewritePath( ${docsRoute}{/*path},
${docsContentRoute}{/*path}/content.md, ); const { rewrite: rewriteSuffix } = rewritePath(
${docsRoute}{/*path}.mdx, ${docsContentRoute}{/*path}/content.md, ) Notable exports:
`proxy`. Wired into a Next.js app (App Router or Next APIs).

[`proxy.ts`](https://github.com/quirq-ai/docs/blob/main/proxy.ts) · code · 873 bytes

### source.config.ts

You can customize Zod schemas for frontmatter and `meta.json` here see
https://fumadocs.dev/docs/mdx/collections Notable exports: `docs`, `apiDocs`,
`templatesDocs`, `researchDocs`.

[`source.config.ts`](https://github.com/quirq-ai/docs/blob/main/source.config.ts) · code · 1506 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/docs/blob/main/tsconfig.json) · code · 740 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
