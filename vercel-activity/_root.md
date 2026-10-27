<!-- quirq-wiki-generated repo=vercel-activity dir=. -->

# vercel-activity / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/vercel-activity/tree/main) in [vercel-activity](https://github.com/quirq-ai/vercel-activity).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 22 pattern(s)
including `/node_modules`, `/.pnp`, `.pnp.*`, `.yarn/*`, `!.yarn/patches`, `!.yarn/plugins`,
`!.yarn/releases`, `!.yarn/versions`, and 14 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/vercel-activity/blob/main/.gitignore) · other · 480 bytes

### AGENTS.md

The agent/workspace instructions (“This is NOT the Next.js you know”). This version has
breaking changes — APIs, conventions, and file structure may all differ from your training
data. Read the relevant guide in node_modules/next/dist/docs/ (resolved from this file's
directory; in monorepos the next package may not be visible from the repo root) before
writing any code. Heed deprecation notices.

[`AGENTS.md`](https://github.com/quirq-ai/vercel-activity/blob/main/AGENTS.md) · code · 679 bytes

### README.md

The project README (“vercel-activity”). A small public site showing deployment activity for
the Vercel projects deployed from our workspace, plus an /account page with the connected
Vercel account and its domains.

[`README.md`](https://github.com/quirq-ai/vercel-activity/blob/main/README.md) · code · 1646 bytes

### eslint.config.mjs

const eslintConfig = defineConfig([ ...nextVitals, ...nextTs, Override default ignores of
eslint-config-next. globalIgnores([ Default ignores of eslint-config-next: ".next/**",
"out/**", "build/**", "next-env.d.ts", ]), ]) Provides a default export as the module's
public entry. Wired into a Next.js app (App Router or Next APIs).

[`eslint.config.mjs`](https://github.com/quirq-ai/vercel-activity/blob/main/eslint.config.mjs) · code · 465 bytes

### next.config.ts

const nextConfig: NextConfig = { /* config options here */ cacheComponents: true,
partialPrefetching: true, turbopack: { rules: { "*.css": { loaders:
["@tailwindcss/turbopack"], as: "*.css", }, }, }, } Provides a default export as the
module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/vercel-activity/blob/main/next.config.ts) · code · 318 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 230.6 KB). It pins the exact dependency tree
for reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`package-lock.json`](https://github.com/quirq-ai/vercel-activity/blob/main/package-lock.json) · lockfile · 236183 bytes

### package.json

npm package manifest for `vercel-activity` v0.1.0. Scripts: `dev`, `build`, `start`, `lint`.

[`package.json`](https://github.com/quirq-ai/vercel-activity/blob/main/package.json) · code · 568 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/vercel-activity/blob/main/tsconfig.json) · code · 670 bytes

### workspace.json

JSON document `workspace.json` whose top-level keys are `$comment`, `repos`. Structured data
consumed by the surrounding app or tooling.

[`workspace.json`](https://github.com/quirq-ai/vercel-activity/blob/main/workspace.json) · code · 408 bytes

_Generated 2026-10-27 11:09 UTC from `main`._
