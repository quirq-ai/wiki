<!-- quirq-wiki-generated repo=ui dir=app/(catalog) -->

# ui / app/(catalog)

Source: [app/(catalog)](https://github.com/quirq-ai/ui/tree/main/app/(catalog)) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### layout.tsx

export default function CatalogLayout({ children }: { children: React.ReactNode }) { return
( Notable exports: `CatalogLayout`.

[`app/(catalog)/layout.tsx`](https://github.com/quirq-ai/ui/blob/main/app/(catalog)/layout.tsx) · code · 576 bytes

### page.tsx

export default function Home() { const perSurface = new Map(); for (const s of ALL_SHAPES)
for (const g of groupSeenIn(s.seenIn)) perSurface.set(g.key, (perSurface.get(g.key) ?? 0) +
1) Notable exports: `Home`. Wired into a Next.js app (App Router or Next APIs).

[`app/(catalog)/page.tsx`](https://github.com/quirq-ai/ui/blob/main/app/(catalog)/page.tsx) · code · 7783 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
