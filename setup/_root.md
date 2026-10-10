<!-- quirq-wiki-generated repo=setup dir=. -->

# setup / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/setup/tree/main) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 25 pattern(s)
including `/node_modules`, `/.pnp`, `.pnp.*`, `.yarn/*`, `!.yarn/patches`, `!.yarn/plugins`,
`!.yarn/releases`, `!.yarn/versions`, and 17 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/setup/blob/main/.gitignore) · other · 617 bytes

### AGENTS.md

The agent/workspace instructions (“Agent guide”). Read README.md first. Rules for changing
this repo.

[`AGENTS.md`](https://github.com/quirq-ai/setup/blob/main/AGENTS.md) · code · 1001 bytes

### CLAUDE.md

The Claude Code instructions. @AGENTS.md.

[`CLAUDE.md`](https://github.com/quirq-ai/setup/blob/main/CLAUDE.md) · code · 11 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/setup/blob/main/LICENSE) · other · 11358 bytes

### README.md

The project README (“qq-setup”). One command to set up quirq infra (qq) for your GitHub org,
or to put qq on your machine and work on a repo that already uses it: the terminal checks
your tools, a short form in your browser asks which, and the terminal shows what it will do
or prints the commands.

[`README.md`](https://github.com/quirq-ai/setup/blob/main/README.md) · code · 7673 bytes

### eslint.config.mjs

const eslintConfig = defineConfig([ ...nextVitals, ...nextTs, Override default ignores of
eslint-config-next. globalIgnores([ Default ignores of eslint-config-next: ".next/**",
"out/**", "build/**", "next-env.d.ts", ]), ]) Provides a default export as the module's
public entry. Wired into a Next.js app (App Router or Next APIs).

[`eslint.config.mjs`](https://github.com/quirq-ai/setup/blob/main/eslint.config.mjs) · code · 465 bytes

### next.config.ts

The form is a static page that the qq-setup command serves on 127.0.0.1 (cli/server.mjs). It
has no server of its own: every answer goes to the command through /api/*. Provides a
default export as the module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/setup/blob/main/next.config.ts) · code · 526 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 301.1 KB). It pins the exact dependency tree
for reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`package-lock.json`](https://github.com/quirq-ai/setup/blob/main/package-lock.json) · lockfile · 308285 bytes

### package.json

npm package manifest for `qq-setup` v0.1.0. Set up quirq infra (qq) for a GitHub org with
one command and a short form. CLI bins: `qq-setup`. Scripts: `build`, `dev`, `lint`,
`typecheck`, `test`, `e2e`, `check-form`.

[`package.json`](https://github.com/quirq-ai/setup/blob/main/package.json) · code · 1293 bytes

### playwright.config.ts

const chromiumPath = process.env.PW_CHROMIUM_PATH Provides a default export as the module's
public entry.

[`playwright.config.ts`](https://github.com/quirq-ai/setup/blob/main/playwright.config.ts) · code · 480 bytes

### postcss.config.mjs

const config = { plugins: { "@tailwindcss/postcss": {}, }, } Provides a default export as
the module's public entry.

[`postcss.config.mjs`](https://github.com/quirq-ai/setup/blob/main/postcss.config.mjs) · code · 94 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/setup/blob/main/tsconfig.json) · code · 779 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
