<!-- quirq-wiki-generated repo=ui dir=app/(catalog)/shapes/[category] -->

# ui / app/(catalog)/shapes/[category]

Source: [app/(catalog)/shapes/[category]](https://github.com/quirq-ai/ui/tree/main/app/(catalog)/shapes/[category]) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### page.tsx

export function generateStaticParams() { return CATEGORIES.map((c) => ({ category: c.id }));
} Notable exports: `generateStaticParams`, `generateMetadata`, `CategoryPage`. Wired into a
Next.js app (App Router or Next APIs).

[`app/(catalog)/shapes/[category]/page.tsx`](https://github.com/quirq-ai/ui/blob/main/app/(catalog)/shapes/[category]/page.tsx) · code · 4342 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
