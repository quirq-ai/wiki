<!-- quirq-wiki-generated repo=docs dir=src/app -->

# docs / src/app

Source: [src/app](https://github.com/quirq-ai/docs/tree/main/src/app) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### favicon.ico

Binary ICO asset (14.7 KB). Left unsummarized; open the file in the source repository if you
need the actual bytes. Wiki pages do not copy images, fonts, archives, or other generated
blobs.

[`src/app/favicon.ico`](https://github.com/quirq-ai/docs/blob/main/src/app/favicon.ico) · binary · 15086 bytes

### global.css

Stylesheet `global.css` for layout and visual treatment in this folder. Leading class
selectors include `dark`. Defines or consumes CSS custom properties (design tokens).

[`src/app/global.css`](https://github.com/quirq-ai/docs/blob/main/src/app/global.css) · code · 2677 bytes

### icon.svg

SVG graphic `icon.svg` (349 bytes) titled “quirq”. Vector artwork used by the UI, docs, or
brand; not executable source.

[`src/app/icon.svg`](https://github.com/quirq-ai/docs/blob/main/src/app/icon.svg) · code · 349 bytes

### layout.tsx

const raleway = Raleway({ subsets: ["latin"], }) Notable exports: `Layout`, `metadata`.
Wired into a Next.js app (App Router or Next APIs).

[`src/app/layout.tsx`](https://github.com/quirq-ai/docs/blob/main/src/app/layout.tsx) · code · 1263 bytes

### page.tsx

export const metadata: Metadata = { title: "qq docs", description: "Documentation for qq,
quirq's build and release infrastructure: install it, build and test a repo, land a change
and put a repo on qq.", alternates: { canonical: "https://docs.quirq.dev/", }, openGraph: {
title: "qq docs", description: "Documentation for qq, quirq's build and release infrast
Notable exports: `RootPage`, `metadata`.

[`src/app/page.tsx`](https://github.com/quirq-ai/docs/blob/main/src/app/page.tsx) · code · 686 bytes

### robots.ts

export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*",
allow: "/", }, sitemap: ${siteUrl}/sitemap.xml, }; } Notable exports: `robots`.

[`src/app/robots.ts`](https://github.com/quirq-ai/docs/blob/main/src/app/robots.ts) · code · 258 bytes

### sitemap.ts

export const revalidate = false Notable exports: `sitemap`, `revalidate`.

[`src/app/sitemap.ts`](https://github.com/quirq-ai/docs/blob/main/src/app/sitemap.ts) · code · 547 bytes

_Generated 2026-10-14 10:43 UTC from `main`._
