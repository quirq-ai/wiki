<!-- quirq-wiki-generated repo=instants dir=. -->

# instants / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/instants/tree/main) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitattributes

Extensionless file `.gitattributes`. text=auto eol=lf *.png binary *.webm binary.

[`.gitattributes`](https://github.com/quirq-ai/instants/blob/main/.gitattributes) · other · 46 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 35 pattern(s)
including `/node_modules`, `/.pnp`, `.pnp.*`, `.yarn/*`, `!.yarn/patches`, `!.yarn/plugins`,
`!.yarn/releases`, `!.yarn/versions`, and 27 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/instants/blob/main/.gitignore) · other · 853 bytes

### .npmrc

Extensionless file `.npmrc`. audit=false fund=false update-notifier=false.

[`.npmrc`](https://github.com/quirq-ai/instants/blob/main/.npmrc) · other · 45 bytes

### AGENTS.md

The agent/workspace instructions (“This is NOT the Next.js you know”). This version has
breaking changes — APIs, conventions, and file structure may all differ from your training
data. Read the relevant guide in node_modules/next/dist/docs/ (resolved from this file's
directory; in monorepos the next package may not be visible from the repo root) before
writing any code. Heed deprecation notices.

[`AGENTS.md`](https://github.com/quirq-ai/instants/blob/main/AGENTS.md) · code · 678 bytes

### CLAUDE.md

The Claude Code instructions. @AGENTS.md.

[`CLAUDE.md`](https://github.com/quirq-ai/instants/blob/main/CLAUDE.md) · code · 11 bytes

### CONTRIBUTING.md

The contributor guide (“Contributing to Instants”). Instants visualizes agent activity with
two JSONL logs and private per-person progress. Contributions should keep the app easy to
run, imported history readable, interactions accessible, and source capabilities honest.

[`CONTRIBUTING.md`](https://github.com/quirq-ai/instants/blob/main/CONTRIBUTING.md) · code · 5120 bytes

### LICENSE

License text (MIT License). Governs use, modification, and distribution of this repository.
Read the full file in the source tree before depending on the project in a product or
redistribution.

[`LICENSE`](https://github.com/quirq-ai/instants/blob/main/LICENSE) · other · 1079 bytes

### README.md

The project README (“Instants”). Your agent activity, in one place.

[`README.md`](https://github.com/quirq-ai/instants/blob/main/README.md) · code · 13378 bytes

### SECURITY.md

The security policy. Security fixes target the current default branch. There are no
separately supported release lines or guaranteed response times.

[`SECURITY.md`](https://github.com/quirq-ai/instants/blob/main/SECURITY.md) · code · 3473 bytes

### THIRD_PARTY_NOTICES.md

Markdown page “Third-party notices and asset scope”. The root [MIT license](LICENSE) covers
original project code and documentation. It does not replace the licenses of dependencies,
vendored materials, or external assets.

[`THIRD_PARTY_NOTICES.md`](https://github.com/quirq-ai/instants/blob/main/THIRD_PARTY_NOTICES.md) · code · 3103 bytes

### cloudflare-env.d.ts

declare namespace Cloudflare { interface Env { DB?: D1Database; BUCKET?: R2Bucket; } }.

[`cloudflare-env.d.ts`](https://github.com/quirq-ai/instants/blob/main/cloudflare-env.d.ts) · code · 99 bytes

### components.json

JSON document `components.json` whose top-level keys are `$schema`, `style`, `rsc`, `tsx`,
`tailwind`, `aliases`, `registries`. Structured data consumed by the surrounding app or
tooling.

[`components.json`](https://github.com/quirq-ai/instants/blob/main/components.json) · code · 420 bytes

### drizzle.config.ts

export default defineConfig({ out: "./drizzle", schema: "./db/schema.ts", dialect: "sqlite",
}) Provides a default export as the module's public entry.

[`drizzle.config.ts`](https://github.com/quirq-ai/instants/blob/main/drizzle.config.ts) · code · 148 bytes

### eslint.config.mjs

const eslintConfig = defineConfig([ ...nextVitals, ...nextTs, Generated state and vendored
build tooling are outside application lint. globalIgnores([ ".next/**", ".vinext/**",
".wrangler/**", ".sites-runtime/**", "dist/**", "out/**", "build/**", "vendor/**", "test-
results/**", "playwright-report/**", "next-env.d.ts", ]), { rules: { React Compiler is not
ena Provides a default export as the module's public entry.

[`eslint.config.mjs`](https://github.com/quirq-ai/instants/blob/main/eslint.config.mjs) · code · 1631 bytes

### next.config.ts

const projectRoot = fileURLToPath(new URL(".", import.meta.url)) Provides a default export
as the module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/instants/blob/main/next.config.ts) · code · 604 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 493.8 KB). It pins the exact dependency tree
for reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`package-lock.json`](https://github.com/quirq-ai/instants/blob/main/package-lock.json) · lockfile · 505605 bytes

### package.json

npm package manifest for `instants` v0.1.0. Scripts: `install:ci`, `dev`, `build`, `start`,
`dev:sites`, `build:sites`, `start:sites`, `lint`, `typecheck`, `test`, and 2 more.

[`package.json`](https://github.com/quirq-ai/instants/blob/main/package.json) · code · 2391 bytes

### playwright.config.ts

const existingServer = process.env.PLAYWRIGHT_BASE_URL; const baseURL = existingServer ||
"http://127.0.0.1:5180" Provides a default export as the module's public entry.

[`playwright.config.ts`](https://github.com/quirq-ai/instants/blob/main/playwright.config.ts) · code · 1136 bytes

### postcss.config.mjs

const config = { plugins: { "@tailwindcss/postcss": {}, }, } Provides a default export as
the module's public entry.

[`postcss.config.mjs`](https://github.com/quirq-ai/instants/blob/main/postcss.config.mjs) · code · 94 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/instants/blob/main/tsconfig.json) · code · 800 bytes

### vercel.json

JSON document `vercel.json` whose top-level keys are `$schema`, `framework`,
`installCommand`, `buildCommand`, `outputDirectory`. Structured data consumed by the
surrounding app or tooling.

[`vercel.json`](https://github.com/quirq-ai/instants/blob/main/vercel.json) · code · 177 bytes

### vite.config.ts

const SITE_CREATOR_PLACEHOLDER_DATABASE_ID = "00000000-0000-4000-8000-000000000000" Provides
a default export as the module's public entry.

[`vite.config.ts`](https://github.com/quirq-ai/instants/blob/main/vite.config.ts) · code · 3135 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
