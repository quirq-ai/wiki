<!-- quirq-wiki-generated repo=argus-code dir=dashboard/.astro -->

# argus-code / dashboard/.astro

Source: [dashboard/.astro](https://github.com/quirq-ai/argus-code/tree/main/dashboard/.astro) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### content-assets.mjs

export default new Map() Provides a default export as the module's public entry.

[`dashboard/.astro/content-assets.mjs`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/.astro/content-assets.mjs) · code · 25 bytes

### content-modules.mjs

export default new Map() Provides a default export as the module's public entry.

[`dashboard/.astro/content-modules.mjs`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/.astro/content-modules.mjs) · code · 25 bytes

### content.d.ts

declare module 'astro:content' { export interface RenderResult { Content:
import('astro/runtime/server/index.js').AstroComponentFactory; headings:
import('astro').MarkdownHeading[]; remarkPluginFrontmatter: Record; } interface Render {
'.md': Promise; } Notable exports: `getCollection`, `getLiveCollection`, `getEntry`,
`getLiveEntry`, `getEntries`, `render`, `reference`, `RenderResult`, and 7 more.

[`dashboard/.astro/content.d.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/.astro/content.d.ts) · code · 5311 bytes

### types.d.ts

/ <reference types="astro/client" /> / <reference path="content.d.ts" />.

[`dashboard/.astro/types.d.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/.astro/types.d.ts) · code · 76 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
