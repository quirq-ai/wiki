<!-- quirq-wiki-generated repo=github-activity dir=. -->

# github-activity / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/github-activity/tree/main) in [github-activity](https://github.com/quirq-ai/github-activity).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .env.example

Environment template `.env.example` (values omitted from the wiki). Fine-grained PAT with
"Public repositories (read-only)" access. Server-side only. Keys: `GITHUB_TOKEN`,
`GITHUB_OWNERS`. Copy to `.env` locally; never commit real credentials.

[`.env.example`](https://github.com/quirq-ai/github-activity/blob/main/.env.example) · code · 192 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 23 pattern(s)
including `/node_modules`, `/.pnp`, `.pnp.*`, `.yarn/*`, `!.yarn/patches`, `!.yarn/plugins`,
`!.yarn/releases`, `!.yarn/versions`, and 15 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/github-activity/blob/main/.gitignore) · other · 494 bytes

### AGENTS.md

The agent/workspace instructions (“This is NOT the Next.js you know”). This version has
breaking changes — APIs, conventions, and file structure may all differ from your training
data. Read the relevant guide in node_modules/next/dist/docs/ (resolved from this file's
directory; in monorepos the next package may not be visible from the repo root) before
writing any code. Heed deprecation notices.

[`AGENTS.md`](https://github.com/quirq-ai/github-activity/blob/main/AGENTS.md) · code · 679 bytes

### README.md

The project README (“GitHub activity”). A small public dashboard of activity across our
public GitHub repositories: commits per week, a live event feed, and a card per repo
(language, CI status, open PRs/issues, latest release, 12-week commit sparkline).

[`README.md`](https://github.com/quirq-ai/github-activity/blob/main/README.md) · code · 1055 bytes

### eslint.config.mjs

const eslintConfig = defineConfig([ ...nextVitals, ...nextTs, Override default ignores of
eslint-config-next. globalIgnores([ Default ignores of eslint-config-next: ".next/**",
"out/**", "build/**", "next-env.d.ts", ]), ]) Provides a default export as the module's
public entry. Wired into a Next.js app (App Router or Next APIs).

[`eslint.config.mjs`](https://github.com/quirq-ai/github-activity/blob/main/eslint.config.mjs) · code · 465 bytes

### next.config.ts

const nextConfig: NextConfig = { /* config options here */ cacheComponents: true,
partialPrefetching: true, turbopack: { rules: { "*.css": { loaders:
["@tailwindcss/turbopack"], as: "*.css", }, }, }, } Provides a default export as the
module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/github-activity/blob/main/next.config.ts) · code · 318 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 230.6 KB). It pins the exact dependency tree
for reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`package-lock.json`](https://github.com/quirq-ai/github-activity/blob/main/package-lock.json) · lockfile · 236183 bytes

### package.json

npm package manifest for `github-activity` v0.1.0. Scripts: `dev`, `build`, `start`, `lint`.

[`package.json`](https://github.com/quirq-ai/github-activity/blob/main/package.json) · code · 568 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/github-activity/blob/main/tsconfig.json) · code · 670 bytes

_Generated 2026-10-27 11:08 UTC from `main`._
