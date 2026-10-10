<!-- quirq-wiki-generated repo=monitoring dir=. -->

# monitoring / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/monitoring/tree/main) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .env.example

Environment template `.env.example` (values omitted from the wiki). Classic GitHub token
with no scopes (public read only). Empty: API tiles read "no token". Keys: `GITHUB_TOKEN`,
`MONITORING_ORG`, `MONITORING_OWNER`, `MONITORING_RAW_BASE`, `MONITORING_API_BASE`,
`PW_CHROMIUM_PATH`. Copy to `.env` locally; never commit real credentials.

[`.env.example`](https://github.com/quirq-ai/monitoring/blob/main/.env.example) · code · 621 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 26 pattern(s)
including `/node_modules`, `/.pnp`, `.pnp.*`, `.yarn/*`, `!.yarn/patches`, `!.yarn/plugins`,
`!.yarn/releases`, `!.yarn/versions`, and 18 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/monitoring/blob/main/.gitignore) · other · 543 bytes

### AGENTS.md

The agent/workspace instructions (“This is NOT the Next.js you know”). This version has
breaking changes — APIs, conventions, and file structure may all differ from your training
data. Read the relevant guide in node_modules/next/dist/docs/ (resolved from this file's
directory; in monorepos the next package may not be visible from the repo root) before
writing any code. Heed deprecation notices.

[`AGENTS.md`](https://github.com/quirq-ai/monitoring/blob/main/AGENTS.md) · code · 38060 bytes

### CLAUDE.md

The Claude Code instructions. @AGENTS.md.

[`CLAUDE.md`](https://github.com/quirq-ai/monitoring/blob/main/CLAUDE.md) · code · 11 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/monitoring/blob/main/LICENSE) · other · 11358 bytes

### README.md

The project README (“monitoring”). The quirq-ai monitoring dashboard: one page that says
**what changed across the org and what state everything is in**, on a phone or a desktop.
suraj's Vercel project serves it at [monitoring.quirq.dev](https://monitoring.quirq.dev/).

[`README.md`](https://github.com/quirq-ai/monitoring/blob/main/README.md) · code · 10923 bytes

### eslint.config.mjs

const eslintConfig = defineConfig([ ...nextVitals, ...nextTs, Override default ignores of
eslint-config-next. globalIgnores([ Default ignores of eslint-config-next: ".next/**",
"out/**", "build/**", "next-env.d.ts", ]), ]) Provides a default export as the module's
public entry. Wired into a Next.js app (App Router or Next APIs).

[`eslint.config.mjs`](https://github.com/quirq-ai/monitoring/blob/main/eslint.config.mjs) · code · 465 bytes

### next.config.ts

const nextConfig: NextConfig = { /* config options here */ } Provides a default export as
the module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/monitoring/blob/main/next.config.ts) · code · 133 bytes

### package.json

npm package manifest for `monitoring` v0.1.0. Scripts: `dev`, `build`, `start`, `lint`,
`typecheck`, `test`, `e2e`, `live`.

[`package.json`](https://github.com/quirq-ai/monitoring/blob/main/package.json) · code · 1116 bytes

### playwright.config.ts

const chromiumPath = process.env.PW_CHROMIUM_PATH; const fixtures = "http://127.0.0.1:3011"
Provides a default export as the module's public entry.

[`playwright.config.ts`](https://github.com/quirq-ai/monitoring/blob/main/playwright.config.ts) · code · 1099 bytes

### pnpm-lock.yaml

Package-manager lockfile (pnpm-lock.yaml, 285.3 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`pnpm-lock.yaml`](https://github.com/quirq-ai/monitoring/blob/main/pnpm-lock.yaml) · lockfile · 292100 bytes

### pnpm-workspace.yaml

YAML file `pnpm-workspace.yaml`. Top-level keys: `allowBuilds`.

[`pnpm-workspace.yaml`](https://github.com/quirq-ai/monitoring/blob/main/pnpm-workspace.yaml) · code · 51 bytes

### postcss.config.mjs

const config = { plugins: { "@tailwindcss/postcss": {}, }, } Provides a default export as
the module's public entry.

[`postcss.config.mjs`](https://github.com/quirq-ai/monitoring/blob/main/postcss.config.mjs) · code · 94 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/monitoring/blob/main/tsconfig.json) · code · 666 bytes

### vitest.config.ts

export default defineConfig({ resolve: { alias: { "@": fileURLToPath(new URL(".",
import.meta.url)), server-only throws outside a React Server Components build; tests import
lib code directly. "server-only": fileURLToPath(new URL("./tests/helpers/server-only.ts",
import.meta.url)), }, }, test: { include: process.env.LIVE ? ["tests/live-check.ts"] :
["tests/* Provides a default export as the module's public entry.

[`vitest.config.ts`](https://github.com/quirq-ai/monitoring/blob/main/vitest.config.ts) · code · 567 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
