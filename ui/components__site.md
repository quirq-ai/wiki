<!-- quirq-wiki-generated repo=ui dir=components/site -->

# ui / components/site

Source: [components/site](https://github.com/quirq-ai/ui/tree/main/components/site) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### category-rail.tsx

/** Sticky catalog index: every category, with the current one opened to its shapes. */
export function CategoryRail({ categories, current }: { categories: Category[]; current?:
string }) { return ( Notable exports: `CategoryRail`. Wired into a Next.js app (App Router
or Next APIs).

[`components/site/category-rail.tsx`](https://github.com/quirq-ai/ui/blob/main/components/site/category-rail.tsx) · code · 1842 bytes

### shape-frame.tsx

/** One catalog entry: heading, purpose, where it ships, its spec, and the live demo. */
export function ShapeFrame({ shape, index }: { shape: Shape; index: string }) { const
surfaces = groupSeenIn(shape.seenIn); const Demo = shape.Demo; return ( Notable exports:
`ShapeFrame`.

[`components/site/shape-frame.tsx`](https://github.com/quirq-ai/ui/blob/main/components/site/shape-frame.tsx) · code · 3111 bytes

### shape-search.tsx

export type ShapeRow = { id: string; name: string; purpose: string; categoryId: string;
categoryTitle: string; surfaces: SurfaceKey[]; } Notable exports: `ShapeSearch`, `ShapeRow`.
Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the
browser.

[`components/site/shape-search.tsx`](https://github.com/quirq-ai/ui/blob/main/components/site/shape-search.tsx) · code · 4224 bytes

### site-footer.tsx

export function SiteFooter() { return ( Notable exports: `SiteFooter`. Wired into a Next.js
app (App Router or Next APIs).

[`components/site/site-footer.tsx`](https://github.com/quirq-ai/ui/blob/main/components/site/site-footer.tsx) · code · 1183 bytes

### site-nav.tsx

const LINKS = [{ href: "/shapes", label: "All shapes" }] Notable exports: `SiteNav`. Wired
into a Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the
browser.

[`components/site/site-nav.tsx`](https://github.com/quirq-ai/ui/blob/main/components/site/site-nav.tsx) · code · 3684 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
