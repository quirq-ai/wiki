<!-- quirq-wiki-generated repo=fabric-chat dir=. -->

# fabric-chat / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/fabric-chat/tree/main) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .dockerignore

`.dockerignore` tells git or Docker which paths to omit. It currently lists 13 pattern(s)
including `.git`, `.generated`, `.data`, `node_modules`, `dist`, `build`, `docs`,
`chaincode`, and 5 more. Generated and secret files matching these patterns are not in the
clone the wiki summarizes.

[`.dockerignore`](https://github.com/quirq-ai/fabric-chat/blob/main/.dockerignore) · other · 191 bytes

### .gitattributes

Extensionless file `.gitattributes`. The scripts and chaincode run inside Linux containers,
so they keep Unix line endings on every machine.

[`.gitattributes`](https://github.com/quirq-ai/fabric-chat/blob/main/.gitattributes) · other · 159 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 8 pattern(s)
including `.generated/`, `node_modules/`, `dist/`, `*.log`, `build/`, `.data/`,
`docs/*.html`, `companies/`. Generated and secret files matching these patterns are not in
the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/fabric-chat/blob/main/.gitignore) · other · 546 bytes

### Dockerfile

Container build file `Dockerfile`. Base image `node:24-bookworm-slim`. Exposes ports `8080`.
Starts with `["node", "build/server.mjs"]`. Instructions used: `FROM`, `WORKDIR`, `COPY`,
`RUN`, `ENV`, `EXPOSE`, `CMD`.

[`Dockerfile`](https://github.com/quirq-ai/fabric-chat/blob/main/Dockerfile) · other · 1755 bytes

### LICENSE

License text (MIT License). Governs use, modification, and distribution of this repository.
Read the full file in the source tree before depending on the project in a product or
redistribution.

[`LICENSE`](https://github.com/quirq-ai/fabric-chat/blob/main/LICENSE) · other · 1062 bytes

### README.md

The project README (“Fabric Chat”). A Slack-style team chat where the database is a
Hyperledger Fabric 2.5 ledger. It runs in two ways.

[`README.md`](https://github.com/quirq-ai/fabric-chat/blob/main/README.md) · code · 26818 bytes

### network.json

JSON document `network.json` whose top-level keys are `name`, `domain`, `about`, `fabric`,
`consensus`, `orgs`, `workspaces`, `chaincode`, `ports`. Structured data consumed by the
surrounding app or tooling.

[`network.json`](https://github.com/quirq-ai/fabric-chat/blob/main/network.json) · code · 1833 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 96.0 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`package-lock.json`](https://github.com/quirq-ai/fabric-chat/blob/main/package-lock.json) · lockfile · 98275 bytes

### package.json

npm package manifest for `fabric-chat` v0.3.0. A Slack-style messaging app on Hyperledger
Fabric 2.5: a three-company sandbox that explains how Fabric works, and a template each
company runs for itself. Scripts: `net:up`, `net:down`, `net:status`, `net:stop`,
`net:start`, `net:chaincode`, `seed`, `dev`, `build`, `bundle`, and 11 more.

[`package.json`](https://github.com/quirq-ai/fabric-chat/blob/main/package.json) · code · 2061 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/fabric-chat/blob/main/tsconfig.json) · code · 551 bytes

### vite.config.ts

const root = path.dirname(fileURLToPath(import.meta.url)) Provides a default export as the
module's public entry.

[`vite.config.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/vite.config.ts) · code · 512 bytes

_Generated 2026-11-13 13:30 UTC from `main`._
