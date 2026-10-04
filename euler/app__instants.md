<!-- quirq-wiki-generated repo=euler dir=app/instants -->

# euler / app/instants

Source: [app/instants](https://github.com/quirq-ai/euler/tree/main/app/instants) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitattributes

Extensionless file `.gitattributes`. text=auto eol=lf *.png binary *.webm binary.

[`app/instants/.gitattributes`](https://github.com/quirq-ai/euler/blob/main/app/instants/.gitattributes) · other · 46 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 35 pattern(s)
including `/node_modules`, `/.pnp`, `.pnp.*`, `.yarn/*`, `!.yarn/patches`, `!.yarn/plugins`,
`!.yarn/releases`, `!.yarn/versions`, and 27 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`app/instants/.gitignore`](https://github.com/quirq-ai/euler/blob/main/app/instants/.gitignore) · other · 855 bytes

### .npmrc

Extensionless file `.npmrc`. audit=false fund=false update-notifier=false.

[`app/instants/.npmrc`](https://github.com/quirq-ai/euler/blob/main/app/instants/.npmrc) · other · 45 bytes

### AGENTS.md

The agent/workspace instructions (“This is NOT the Next.js you know”). This version has
breaking changes — APIs, conventions, and file structure may all differ from your training
data. Read the relevant guide in node_modules/next/dist/docs/ (resolved from this file's
directory; in monorepos the next package may not be visible from the repo root) before
writing any code. Heed deprecation notices.

[`app/instants/AGENTS.md`](https://github.com/quirq-ai/euler/blob/main/app/instants/AGENTS.md) · code · 678 bytes

### CLAUDE.md

The Claude Code instructions. @AGENTS.md.

[`app/instants/CLAUDE.md`](https://github.com/quirq-ai/euler/blob/main/app/instants/CLAUDE.md) · code · 11 bytes

### CONTRIBUTING.md

The contributor guide (“Contributing to Instants”). Instants is a team collaboration
prototype with private per-person activity. Contributions should keep the demo easy to run,
the interactions accessible, and the boundary between demo state and real delivery clear.

[`app/instants/CONTRIBUTING.md`](https://github.com/quirq-ai/euler/blob/main/app/instants/CONTRIBUTING.md) · code · 4358 bytes

### LICENSE

License text (MIT License). Governs use, modification, and distribution of this repository.
Read the full file in the source tree before depending on the project in a product or
redistribution.

[`app/instants/LICENSE`](https://github.com/quirq-ai/euler/blob/main/app/instants/LICENSE) · other · 1079 bytes

### README.md

The project README (“Instants”). Work that needs a reply. People you can see.

[`app/instants/README.md`](https://github.com/quirq-ai/euler/blob/main/app/instants/README.md) · code · 13413 bytes

### SECURITY.md

The security policy. Security fixes target the current default branch. There are no
separately supported release lines or guaranteed response times.

[`app/instants/SECURITY.md`](https://github.com/quirq-ai/euler/blob/main/app/instants/SECURITY.md) · code · 2621 bytes

### THIRD_PARTY_NOTICES.md

Markdown page “Third-party notices and asset scope”. The root [MIT license](LICENSE) covers
original project code and documentation. It does not replace the licenses of dependencies,
vendored materials, or external assets.

[`app/instants/THIRD_PARTY_NOTICES.md`](https://github.com/quirq-ai/euler/blob/main/app/instants/THIRD_PARTY_NOTICES.md) · code · 3103 bytes

### cloudflare-env.d.ts

declare namespace Cloudflare { interface Env { DB?: D1Database; BUCKET?: R2Bucket; } }.

[`app/instants/cloudflare-env.d.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/cloudflare-env.d.ts) · code · 99 bytes

### components.json

JSON document `components.json` whose top-level keys are `$schema`, `style`, `rsc`, `tsx`,
`tailwind`, `aliases`, `registries`. Structured data consumed by the surrounding app or
tooling.

[`app/instants/components.json`](https://github.com/quirq-ai/euler/blob/main/app/instants/components.json) · code · 420 bytes

### drizzle.config.ts

export default defineConfig({ out: "./drizzle", schema: "./db/schema.ts", dialect: "sqlite",
}) Provides a default export as the module's public entry.

[`app/instants/drizzle.config.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/drizzle.config.ts) · code · 148 bytes

### eslint.config.mjs

const eslintConfig = defineConfig([ ...nextVitals, ...nextTs, Generated state and vendored
build tooling are outside application lint. globalIgnores([ ".next/**", ".next-euler/**",
".vinext/**", ".wrangler/**", ".sites-runtime/**", "dist/**", "out/**", "build/**",
"vendor/**", "test-results/**", "playwright-report/**", "next-env.d.ts", ]), { rules: {
React C Provides a default export as the module's public entry.

[`app/instants/eslint.config.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/eslint.config.mjs) · code · 1653 bytes

### next.config.ts

const projectRoot = fileURLToPath(new URL(".", import.meta.url)); const basePath =
(process.env.INSTANTS_BASE_PATH || process.env.QUIRQ_BASE_PATH || "").replace(/\/$/, "")
Provides a default export as the module's public entry.

[`app/instants/next.config.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/next.config.ts) · code · 746 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 493.8 KB). It pins the exact dependency tree
for reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`app/instants/package-lock.json`](https://github.com/quirq-ai/euler/blob/main/app/instants/package-lock.json) · lockfile · 505605 bytes

### package.json

npm package manifest for `instants` v0.1.0. Scripts: `install:ci`, `dev`, `build`, `start`,
`dev:sites`, `build:sites`, `start:sites`, `lint`, `typecheck`, `test`, and 2 more.

[`app/instants/package.json`](https://github.com/quirq-ai/euler/blob/main/app/instants/package.json) · code · 2349 bytes

### playwright.config.ts

const existingServer = process.env.PLAYWRIGHT_BASE_URL; const baseURL = existingServer ||
"http://127.0.0.1:5180" Provides a default export as the module's public entry.

[`app/instants/playwright.config.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/playwright.config.ts) · code · 1136 bytes

### postcss.config.mjs

const config = { plugins: { "@tailwindcss/postcss": {}, }, } Provides a default export as
the module's public entry.

[`app/instants/postcss.config.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/postcss.config.mjs) · code · 94 bytes

### project.json

JSON document `project.json` whose top-level keys are `name`, `projectType`, `targets`.
Structured data consumed by the surrounding app or tooling.

[`app/instants/project.json`](https://github.com/quirq-ai/euler/blob/main/app/instants/project.json) · code · 584 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`app/instants/tsconfig.json`](https://github.com/quirq-ai/euler/blob/main/app/instants/tsconfig.json) · code · 870 bytes

### vercel.json

JSON document `vercel.json` whose top-level keys are `$schema`, `framework`,
`installCommand`, `buildCommand`, `outputDirectory`. Structured data consumed by the
surrounding app or tooling.

[`app/instants/vercel.json`](https://github.com/quirq-ai/euler/blob/main/app/instants/vercel.json) · code · 177 bytes

### vite.config.ts

const SITE_CREATOR_PLACEHOLDER_DATABASE_ID = "00000000-0000-4000-8000-000000000000" Provides
a default export as the module's public entry.

[`app/instants/vite.config.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/vite.config.ts) · code · 3135 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
