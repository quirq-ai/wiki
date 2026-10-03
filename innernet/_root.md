<!-- quirq-wiki-generated repo=innernet dir=. -->

# innernet / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/innernet/tree/main) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 11 pattern(s)
including `node_modules`, `.next`, `next-env.d.ts`, `*.tsbuildinfo`, `data/*.json`,
`data/*.tmp`, `public/guide/innernet-explainer.mp4`, `.demo-cache/`, and 3 more. Generated
and secret files matching these patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/innernet/blob/main/.gitignore) · other · 561 bytes

### .vercelignore

Extensionless file `.vercelignore`. What vercel deploy from this folder must never upload.
Vercel builds the demo, which reads only data/demo/index.json; this machine's own index
(local paths, README text), the demo's clones and the film's sources stay here. .gitignore
keeps them out of git; this keeps them out of a CLI upload too.

[`.vercelignore`](https://github.com/quirq-ai/innernet/blob/main/.vercelignore) · other · 416 bytes

### CONTRIBUTING.md

The contributor guide (“Contributing to innernet”). Innernet is small enough to hold in your
head: one crawler, one JSON file, one search engine and an encyclopedia drawn from it. This
page is how to work on it. For how it behaves (the crawl rules, ranking, operators, every
kind of Innerpedia page), read the field guide on the home page at
[/#guide](http://localhost:3470/#guide).

[`CONTRIBUTING.md`](https://github.com/quirq-ai/innernet/blob/main/CONTRIBUTING.md) · code · 11850 bytes

### DESIGN.md

The design spec (“Innernet design spec”). Innernet is a personal internet: a search engine
whose web is the folders on this machine, and Innerpedia, an encyclopedia with an article
for every project and a stub for every other folder. It should feel like the early web's
best ideas (a single search box, blue links, the encyclopedia) remade with the calm and
typographic care of a good printed book.

[`DESIGN.md`](https://github.com/quirq-ai/innernet/blob/main/DESIGN.md) · code · 19132 bytes

### README.md

The project README (“The public demo (Vercel)”). innernet.

[`README.md`](https://github.com/quirq-ai/innernet/blob/main/README.md) · code · 20976 bytes

### innernet.config.json

JSON configuration file `innernet.config.json` with top-level keys `roots`, `maxDepth`. Used
at runtime or during the build rather than as library source.

[`innernet.config.json`](https://github.com/quirq-ai/innernet/blob/main/innernet.config.json) · code · 50 bytes

### instrumentation.ts

Runs once as the server starts, before it answers anything (Next.js waits for it). On this
machine it opens the database early, and when data/index.json is missing it waits for the
stored index, so the first page shows it rather than an empty site (lib/db/sync.ts). The
demo needs nothing here: it asks Neon on first use.

[`instrumentation.ts`](https://github.com/quirq-ai/innernet/blob/main/instrumentation.ts) · code · 799 bytes

### next.config.ts

Innernet makes no requests beyond its own origin (DESIGN.md, principle 5); the Content-
Security-Policy holds the browser to that. Development also needs eval for React's debugging
and a websocket for hot reload. Provides a default export as the module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/innernet/blob/main/next.config.ts) · code · 5495 bytes

### package.json

npm package manifest for `innernet` v0.1.0. Innernet: a personal internet. Search your
folders like the web, read your projects like an encyclopedia. Scripts: `index`,
`index:demo`, `db:status`, `db:store`, `db:load`, `dev`, `dev:demo`, `build`, `start`,
`typecheck`.

[`package.json`](https://github.com/quirq-ai/innernet/blob/main/package.json) · code · 1295 bytes

### pnpm-lock.yaml

Package-manager lockfile (pnpm-lock.yaml, 71.8 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`pnpm-lock.yaml`](https://github.com/quirq-ai/innernet/blob/main/pnpm-lock.yaml) · lockfile · 73550 bytes

### postcss.config.mjs

export default { plugins: { "@tailwindcss/postcss": {} } } Provides a default export as the
module's public entry.

[`postcss.config.mjs`](https://github.com/quirq-ai/innernet/blob/main/postcss.config.mjs) · code · 60 bytes

### proxy.ts

Innernet serves this machine's folders, so it answers only to this machine. The dev server
binds to loopback (package.json), and this check covers the rest: a page that rebinds its
own DNS name to 127.0.0.1 still sends that name as its Host, and is refused here before
anything is read. The demo (lib/mode.ts) holds only public repositories and reads nothing
from the machine it runs on, so it answers every host. Notable exports: `proxy`.

[`proxy.ts`](https://github.com/quirq-ai/innernet/blob/main/proxy.ts) · code · 885 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/innernet/blob/main/tsconfig.json) · code · 711 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
