<!-- quirq-wiki-generated repo=research dir=infra/output/app/infra-map -->

# research / infra/output/app/infra-map

Source: [infra/output/app/infra-map](https://github.com/quirq-ai/research/tree/main/infra/output/app/infra-map) in [research](https://github.com/quirq-ai/research).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 2 pattern(s)
including `node_modules`, `dist`. Generated and secret files matching these patterns are not
in the clone the wiki summarizes.

[`infra/output/app/infra-map/.gitignore`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/.gitignore) · other · 18 bytes

### README.md

The project README (“infra-map”). An interactive map of the 13 quirq infra (qq) repos, with
a page for each repo, and the checklist for the qq alpha.

[`infra/output/app/infra-map/README.md`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/README.md) · code · 3499 bytes

### index.html

HTML document `index.html` titled “quirq infra map”. quirq infra map.

[`infra/output/app/infra-map/index.html`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/index.html) · code · 320 bytes

### package.json

npm package manifest for `infra-map` v1.0.0. Scripts: `dev`, `build`, `build:single`.

[`infra/output/app/infra-map/package.json`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/package.json) · code · 791 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`infra/output/app/infra-map/tsconfig.json`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/tsconfig.json) · code · 328 bytes

### vite.config.ts

`vite build` writes a normal static site to dist/; `--mode single` inlines everything into
one HTML file. Provides a default export as the module's public entry.

[`infra/output/app/infra-map/vite.config.ts`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/vite.config.ts) · code · 539 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
