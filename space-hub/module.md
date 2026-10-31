<!-- quirq-wiki-generated repo=space-hub dir=module -->

# space-hub / module

Source: [module](https://github.com/quirq-ai/space-hub/tree/main/module) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### package-lock.json

Package-manager lockfile (package-lock.json, 55.5 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`module/package-lock.json`](https://github.com/quirq-ai/space-hub/blob/main/module/package-lock.json) · lockfile · 56869 bytes

### package.json

npm package manifest for `spacehub-module` v0.1.0. SpacetimeDB module for spacehub: owners,
spaces, refs and git objects. Scripts: `build`, `typecheck`, `test`.

[`module/package.json`](https://github.com/quirq-ai/space-hub/blob/main/module/package.json) · code · 405 bytes

### tsconfig.json

JSON file `tsconfig.json` that did not parse from the prefix that was read. Open the source
file for the full document.

[`module/tsconfig.json`](https://github.com/quirq-ai/space-hub/blob/main/module/tsconfig.json) · code · 597 bytes

### vitest.config.ts

export default defineConfig({ plugins: [spacetimedbModuleTestPlugin()], test: { include:
['test/**/*.test.ts'] } }) Provides a default export as the module's public entry.

[`module/vitest.config.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/vitest.config.ts) · code · 248 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
