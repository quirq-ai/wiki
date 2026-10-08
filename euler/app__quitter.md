<!-- quirq-wiki-generated repo=euler dir=app/quitter -->

# euler / app/quitter

Source: [app/quitter](https://github.com/quirq-ai/euler/tree/main/app/quitter) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 8 pattern(s)
including `node_modules/`, `dist/`, `dist-euler/`, `.vercel/`, `*.tsbuildinfo`, `.env*`,
`!.env.example`, `.DS_Store`. Generated and secret files matching these patterns are not in
the clone the wiki summarizes.

[`app/quitter/.gitignore`](https://github.com/quirq-ai/euler/blob/main/app/quitter/.gitignore) · other · 85 bytes

### .nvmrc

Extensionless file `.nvmrc`. 22.

[`app/quitter/.nvmrc`](https://github.com/quirq-ai/euler/blob/main/app/quitter/.nvmrc) · other · 3 bytes

### AGENTS.md

The agent/workspace instructions (“Project instructions”). Always spell the user's brand
quirq entirely in lowercase, including UI copy, accessible labels, metadata, documentation,
PR titles and descriptions, and wordmarks. Use the approved quirq logo for branding and
preserve its artwork and proportions. Do not substitute an invented logo or a text-only
wordmark. If the approved asset is unavailable, ask for its file path or URL.

[`app/quitter/AGENTS.md`](https://github.com/quirq-ai/euler/blob/main/app/quitter/AGENTS.md) · code · 1449 bytes

### README.md

The project README (“quitter”). All your agent and thread activity in one place. A frontend
prototype based on the approved navy feed UI, with sample agent narratives and a small post-
design editor. The UI and engine can be developed independently.

[`app/quitter/README.md`](https://github.com/quirq-ai/euler/blob/main/app/quitter/README.md) · code · 3642 bytes

### index.html

HTML document `index.html` titled “quitter · Activity”. quitter · Activity.

[`app/quitter/index.html`](https://github.com/quirq-ai/euler/blob/main/app/quitter/index.html) · code · 531 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 43.8 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`app/quitter/package-lock.json`](https://github.com/quirq-ai/euler/blob/main/app/quitter/package-lock.json) · lockfile · 44812 bytes

### package.json

npm package manifest for `quitter` v0.1.0. Scripts: `dev`, `build`, `preview`, `test`.

[`app/quitter/package.json`](https://github.com/quirq-ai/euler/blob/main/app/quitter/package.json) · code · 685 bytes

### project.json

JSON document `project.json` whose top-level keys are `name`, `projectType`, `targets`.
Structured data consumed by the surrounding app or tooling.

[`app/quitter/project.json`](https://github.com/quirq-ai/euler/blob/main/app/quitter/project.json) · code · 580 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`app/quitter/tsconfig.json`](https://github.com/quirq-ai/euler/blob/main/app/quitter/tsconfig.json) · code · 368 bytes

### vercel.json

JSON document `vercel.json` whose top-level keys are `$schema`, `framework`,
`installCommand`, `buildCommand`, `outputDirectory`. Structured data consumed by the
surrounding app or tooling.

[`app/quitter/vercel.json`](https://github.com/quirq-ai/euler/blob/main/app/quitter/vercel.json) · code · 174 bytes

### vite.config.ts

export default defineConfig({ base: ${(process.env.QUIRQ_BASE_PATH || '').replace(/\/+$/,
'')}/, build: { outDir: process.env.QUIRQ_DIST_DIR || 'dist' }, plugins: [react()], server:
{ watch: { usePolling: true } }, }) Provides a default export as the module's public entry.

[`app/quitter/vite.config.ts`](https://github.com/quirq-ai/euler/blob/main/app/quitter/vite.config.ts) · code · 309 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
