<!-- quirq-wiki-generated repo=argus-code dir=dashboard -->

# argus-code / dashboard

Source: [dashboard](https://github.com/quirq-ai/argus-code/tree/main/dashboard) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AGENTS.md

The agent/workspace instructions (“AGENTS.md — dashboard (React SPA + ship chain)”). Parent:
repo-root AGENTS.md. The statically-built UI served by server/.

[`dashboard/AGENTS.md`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/AGENTS.md) · code · 5026 bytes

### index.html

HTML document `index.html` titled “Argus”. Argus.

[`dashboard/index.html`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/index.html) · code · 303 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 150.2 KB). It pins the exact dependency tree
for reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`dashboard/package-lock.json`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/package-lock.json) · lockfile · 153837 bytes

### package.json

npm package manifest for `argus-dashboard` v0.0.0. Scripts: `dev`, `build`, `preview`,
`test`, `test:watch`, `e2e`, `size`.

[`dashboard/package.json`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/package.json) · code · 1215 bytes

### playwright.config.ts

Smoke test against the *shipped* form: `uv run argus start` serves dashboard-dist/ from the
repo root, so run `npm run build` and refresh dashboard-dist first. Provides a default
export as the module's public entry.

[`dashboard/playwright.config.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/playwright.config.ts) · code · 592 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`dashboard/tsconfig.json`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/tsconfig.json) · code · 464 bytes

### vite.config.ts

const here = path.dirname(fileURLToPath(import.meta.url)) Provides a default export as the
module's public entry.

[`dashboard/vite.config.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/vite.config.ts) · code · 697 bytes

### vitest.config.ts

export default mergeConfig( viteConfig, defineConfig({ test: { environment: 'jsdom',
globals: true, setupFiles: ['./vitest.setup.ts'], include: ['src/**/*.test.{ts,tsx}'], css:
false, }, }), ) Provides a default export as the module's public entry.

[`dashboard/vitest.config.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/vitest.config.ts) · code · 338 bytes

### vitest.setup.ts

uPlot needs a canvas; jsdom has none. Stub getContext so mounts don't throw.

[`dashboard/vitest.setup.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/vitest.setup.ts) · code · 1263 bytes

_Generated 2026-10-29 11:51 UTC from `main`._
