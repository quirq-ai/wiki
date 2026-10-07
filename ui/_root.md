<!-- quirq-wiki-generated repo=ui dir=. -->

# ui / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/ui/tree/main) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 8 pattern(s)
including `node_modules/`, `.next/`, `out/`, `build/`, `*.tsbuildinfo`, `next-env.d.ts`,
`.env*`, `.DS_Store`. Generated and secret files matching these patterns are not in the
clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/ui/blob/main/.gitignore) · other · 77 bytes

### README.md

The project README (“quirq ui”). Every UI component shape used across quirq products, demoed
live in one Next.js app.

[`README.md`](https://github.com/quirq-ai/ui/blob/main/README.md) · code · 9829 bytes

### eslint.config.mjs

const eslintConfig = [ ...nextCoreWebVitals, ...nextTypescript, { ignores: ["node_modules/",
".next/", "out/", "build/", "next-env.d.ts"], }, ] Provides a default export as the module's
public entry. Wired into a Next.js app (App Router or Next APIs).

[`eslint.config.mjs`](https://github.com/quirq-ai/ui/blob/main/eslint.config.mjs) · code · 324 bytes

### next.config.ts

const nextConfig: NextConfig = { turbopack: { root: __dirname }, devIndicators: false, }
Provides a default export as the module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/ui/blob/main/next.config.ts) · code · 163 bytes

### package.json

npm package manifest for `quirq-ui` v0.1.0. Every quirq UI component shape, demoed live in
Next.js, plus a sample app built from them. Scripts: `dev`, `build`, `start`, `lint`,
`typecheck`, `check`.

[`package.json`](https://github.com/quirq-ai/ui/blob/main/package.json) · code · 936 bytes

### pnpm-lock.yaml

Package-manager lockfile (pnpm-lock.yaml, 135.3 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`pnpm-lock.yaml`](https://github.com/quirq-ai/ui/blob/main/pnpm-lock.yaml) · lockfile · 138502 bytes

### postcss.config.mjs

const config = { plugins: { "@tailwindcss/postcss": {}, }, } Provides a default export as
the module's public entry.

[`postcss.config.mjs`](https://github.com/quirq-ai/ui/blob/main/postcss.config.mjs) · code · 94 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/ui/blob/main/tsconfig.json) · code · 590 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
