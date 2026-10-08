<!-- quirq-wiki-generated repo=docs dir=src/lib -->

# docs / src/lib

Source: [src/lib](https://github.com/quirq-ai/docs/tree/main/src/lib) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### cn.ts

export { twMerge as cn } from "tailwind-merge" Notable exports: `cn`.

[`src/lib/cn.ts`](https://github.com/quirq-ai/docs/blob/main/src/lib/cn.ts) · code · 48 bytes

### layout.shared.tsx

const logo = ( Notable exports: `baseOptions`, `socialLinks`. Wired into a Next.js app (App
Router or Next APIs).

[`src/lib/layout.shared.tsx`](https://github.com/quirq-ai/docs/blob/main/src/lib/layout.shared.tsx) · code · 2295 bytes

### shared.ts

export const appName = "XO Docs"; export const siteUrl = "https://docs.quirq.dev"; export
const docsRoute = "/docs"; export const docsImageRoute = "/og/docs"; export const
docsContentRoute = "/llms.mdx/docs"; export const researchContentRoute =
"/llms.mdx/research" Notable exports: `appName`, `siteUrl`, `docsRoute`, `docsImageRoute`,
`docsContentRoute`, `researchContentRoute`, `gitConfig`.

[`src/lib/shared.ts`](https://github.com/quirq-ai/docs/blob/main/src/lib/shared.ts) · code · 412 bytes

### source.ts

import { docsContentRoute, docsImageRoute, docsRoute, researchContentRoute, } from
"./shared" Notable exports: `getPageImage`, `getPageMarkdownUrl`,
`getResearchPageMarkdownUrl`, `getResearchPageImage`, `getLLMText`, `source`, `apiSource`,
`templatesSource`, and 1 more.

[`src/lib/source.ts`](https://github.com/quirq-ai/docs/blob/main/src/lib/source.ts) · code · 5788 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
