<!-- quirq-wiki-generated repo=recipes dir=examples/node-app -->

# recipes / examples/node-app

Source: [examples/node-app](https://github.com/quirq-ai/recipes/tree/main/examples/node-app) in [recipes](https://github.com/quirq-ai/recipes).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 4 pattern(s)
including `node_modules/`, `.next/`, `next-env.d.ts`, `.qq/`. Generated and secret files
matching these patterns are not in the clone the wiki summarizes.

[`examples/node-app/.gitignore`](https://github.com/quirq-ai/recipes/blob/main/examples/node-app/.gitignore) · other · 40 bytes

### next.config.ts

const config: NextConfig = {} Provides a default export as the module's public entry.

[`examples/node-app/next.config.ts`](https://github.com/quirq-ai/recipes/blob/main/examples/node-app/next.config.ts) · code · 96 bytes

### package.json

npm package manifest for `qq-example-node-app` v0.1.0. A minimal Next.js app that quirq
infra's node-app adapter builds, tests and deploys in CI. Scripts: `build`, `start`,
`typecheck`.

[`examples/node-app/package.json`](https://github.com/quirq-ai/recipes/blob/main/examples/node-app/package.json) · code · 554 bytes

### pnpm-lock.yaml

Package-manager lockfile (pnpm-lock.yaml, 38.1 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`examples/node-app/pnpm-lock.yaml`](https://github.com/quirq-ai/recipes/blob/main/examples/node-app/pnpm-lock.yaml) · lockfile · 39043 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`examples/node-app/tsconfig.json`](https://github.com/quirq-ai/recipes/blob/main/examples/node-app/tsconfig.json) · code · 652 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
