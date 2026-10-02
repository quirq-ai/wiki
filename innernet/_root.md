<!-- quirq-wiki-generated repo=innernet dir=. -->

# innernet / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/innernet/tree/main) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 6 pattern(s)
including `node_modules`, `.next`, `next-env.d.ts`, `*.tsbuildinfo`, `data/*.json`,
`data/*.tmp`. Generated and secret files matching these patterns are not in the clone the
wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/innernet/blob/main/.gitignore) · other · 152 bytes

### CONTRIBUTING.md

The contributor guide (“Contributing to innernet”). Innernet is small enough to hold in your
head: one crawler, one JSON file, one search engine and an encyclopedia drawn from it. This
page is how to work on it. For how it behaves (the crawl rules, ranking, operators, every
kind of Innerpedia page), read the field guide in the app at
[/guide](http://localhost:3470/guide).

[`CONTRIBUTING.md`](https://github.com/quirq-ai/innernet/blob/main/CONTRIBUTING.md) · code · 9343 bytes

### DESIGN.md

The design spec (“Innernet design spec”). Innernet is a personal internet: a search engine
whose web is the folders on this machine, and Innerpedia, an encyclopedia with an article
for every project and a stub for every other folder. It should feel like the early web's
best ideas (a single search box, blue links, the encyclopedia) remade with the calm and
typographic care of a good printed book.

[`DESIGN.md`](https://github.com/quirq-ai/innernet/blob/main/DESIGN.md) · code · 13524 bytes

### README.md

The project README (“innernet”). A personal internet. Search the folders on this machine the
way you search the web, and read every project as an article in Innerpedia, the encyclopedia
of you.

[`README.md`](https://github.com/quirq-ai/innernet/blob/main/README.md) · code · 3837 bytes

### innernet.config.json

JSON configuration file `innernet.config.json` with top-level keys `roots`, `maxDepth`. Used
at runtime or during the build rather than as library source.

[`innernet.config.json`](https://github.com/quirq-ai/innernet/blob/main/innernet.config.json) · code · 50 bytes

### next.config.ts

Innernet makes no requests beyond its own origin (DESIGN.md, principle 5); the Content-
Security-Policy holds the browser to that. Development also needs eval for React's debugging
and a websocket for hot reload. Provides a default export as the module's public entry.

[`next.config.ts`](https://github.com/quirq-ai/innernet/blob/main/next.config.ts) · code · 1109 bytes

### package.json

npm package manifest for `innernet` v0.1.0. Innernet: a personal internet. Search your
folders like the web, read your projects like an encyclopedia. Scripts: `index`, `dev`,
`build`, `start`, `typecheck`.

[`package.json`](https://github.com/quirq-ai/innernet/blob/main/package.json) · code · 890 bytes

### pnpm-lock.yaml

Package-manager lockfile (pnpm-lock.yaml, 71.2 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`pnpm-lock.yaml`](https://github.com/quirq-ai/innernet/blob/main/pnpm-lock.yaml) · lockfile · 72960 bytes

### postcss.config.mjs

export default { plugins: { "@tailwindcss/postcss": {} } } Provides a default export as the
module's public entry.

[`postcss.config.mjs`](https://github.com/quirq-ai/innernet/blob/main/postcss.config.mjs) · code · 60 bytes

### proxy.ts

Innernet serves this machine's folders, so it answers only to this machine. The dev server
binds to loopback (package.json), and this check covers the rest: a page that rebinds its
own DNS name to 127.0.0.1 still sends that name as its Host, and is refused here before
anything is read. Notable exports: `proxy`. Wired into a Next.js app (App Router or Next
APIs).

[`proxy.ts`](https://github.com/quirq-ai/innernet/blob/main/proxy.ts) · code · 712 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`tsconfig.json`](https://github.com/quirq-ai/innernet/blob/main/tsconfig.json) · code · 699 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
