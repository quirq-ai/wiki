<!-- quirq-wiki-generated repo=docs dir=src/app -->

# docs / src/app

Source: [src/app](https://github.com/quirq-ai/docs/tree/main/src/app) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### favicon.ico

Binary ICO asset (14.7 KB). Left unsummarized; open the file in the source repository if you
need the actual bytes. Wiki pages do not copy images, fonts, archives, or other generated
blobs.

[`src/app/favicon.ico`](https://github.com/quirq-ai/docs/blob/main/src/app/favicon.ico) · binary · 15086 bytes

### favicon.svg

SVG graphic `favicon.svg` (1.5 KB). Vector artwork used by the UI, docs, or brand; not
executable source.

[`src/app/favicon.svg`](https://github.com/quirq-ai/docs/blob/main/src/app/favicon.svg) · code · 1505 bytes

### global.css

Stylesheet `global.css` for layout and visual treatment in this folder. Leading class
selectors include `dark`. Defines or consumes CSS custom properties (design tokens).

[`src/app/global.css`](https://github.com/quirq-ai/docs/blob/main/src/app/global.css) · code · 2677 bytes

### layout.tsx

const raleway = Raleway({ subsets: ["latin"], }) Notable exports: `Layout`, `metadata`.
Wired into a Next.js app (App Router or Next APIs).

[`src/app/layout.tsx`](https://github.com/quirq-ai/docs/blob/main/src/app/layout.tsx) · code · 1244 bytes

### page.tsx

export const metadata: Metadata = { title: "XO Space Docs", description: "Documentation for
XO Space: the local control plane for AI coding agents. Run a Space locally or through XO
Cloud.", alternates: { canonical: "https://docs.quirq.dev/", }, openGraph: { title: "XO
Space Docs", description: "Documentation for XO Space: the local control plane for AI codi
Notable exports: `RootPage`, `metadata`.

[`src/app/page.tsx`](https://github.com/quirq-ai/docs/blob/main/src/app/page.tsx) · code · 667 bytes

### robots.ts

export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*",
allow: "/", }, sitemap: ${siteUrl}/sitemap.xml, }; } Notable exports: `robots`.

[`src/app/robots.ts`](https://github.com/quirq-ai/docs/blob/main/src/app/robots.ts) · code · 258 bytes

### sitemap.ts

import { apiSource, researchSource, source, templatesSource, } from "@/lib/source" Notable
exports: `sitemap`, `revalidate`.

[`src/app/sitemap.ts`](https://github.com/quirq-ai/docs/blob/main/src/app/sitemap.ts) · code · 737 bytes

_Generated 2026-10-09 12:09 UTC from `main`._
