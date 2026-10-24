<!-- quirq-wiki-generated repo=cli-console dir=. -->

# cli-console / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/cli-console/tree/main) in [cli-console](https://github.com/quirq-ai/cli-console).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .env.example

Environment template `.env.example` (values omitted from the wiki). Optional. The console
works without an AI key. Keys: `AI_GATEWAY_API_KEY`, `AI_MODEL`. Copy to `.env` locally;
never commit real credentials.

[`.env.example`](https://github.com/quirq-ai/cli-console/blob/main/.env.example) · code · 183 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 9 pattern(s)
including `node_modules/`, `.next/`, `.cache/`, `.env*`, `!.env.example`, `*.tsbuildinfo`,
`docs/*.png`, `docs/*.jpg`, and 1 more. Generated and secret files matching these patterns
are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/cli-console/blob/main/.gitignore) · other · 108 bytes

### AGENTS.md

The agent/workspace instructions (“cli console”). Independent Next.js application. Product
work belongs in this repository, not the parent coordination repository. Read README.md
before editing. Preserve existing work. Use lowercase quirq if mentioning that brand; do not
introduce branding without the approved logo.

[`AGENTS.md`](https://github.com/quirq-ai/cli-console/blob/main/AGENTS.md) · code · 662 bytes

### LICENSE

License text (MIT License). Governs use, modification, and distribution of this repository.
Read the full file in the source tree before depending on the project in a product or
redistribution.

[`LICENSE`](https://github.com/quirq-ai/cli-console/blob/main/LICENSE) · other · 1062 bytes

### README.md

The project README (“cli console”). Your command-line tools, in one local workspace.

[`README.md`](https://github.com/quirq-ai/cli-console/blob/main/README.md) · code · 8121 bytes

### next-env.d.ts

/ <reference types="next" /> / <reference types="next/image-types/global" /> Wired into a
Next.js app (App Router or Next APIs).

[`next-env.d.ts`](https://github.com/quirq-ai/cli-console/blob/main/next-env.d.ts) · code · 288 bytes

### next.config.ts

const config: NextConfig = { devIndicators: false, turbopack: { root: process.cwd() } };
export default config Provides a default export as the module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/cli-console/blob/main/next.config.ts) · code · 152 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 60.1 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`package-lock.json`](https://github.com/quirq-ai/cli-console/blob/main/package-lock.json) · lockfile · 61540 bytes

### package.json

npm package manifest for `cli-console` v0.1.0. Scripts: `dev`, `build`, `start`, `test`,
`typecheck`.

[`package.json`](https://github.com/quirq-ai/cli-console/blob/main/package.json) · code · 694 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/cli-console/blob/main/tsconfig.json) · code · 554 bytes

_Generated 2026-10-24 09:53 UTC from `main`._
