<!-- quirq-wiki-generated repo=instants dir=app -->

# instants / app

Source: [app](https://github.com/quirq-ai/instants/tree/main/app) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### error.tsx

export default function Error({ error, retry }: { error: Error & { digest?: string }; retry:
() => void }) { useEffect(() => console.error(error), [error]); return ( Notable exports:
`Error`. Marked `'use client'` so it runs in the browser.

[`app/error.tsx`](https://github.com/quirq-ai/instants/blob/main/app/error.tsx) · code · 985 bytes

### globals.css

Stylesheet `globals.css` for layout and visual treatment in this folder. Leading class
selectors include `prose-research`, `scrollbar-none`. Defines or consumes CSS custom
properties (design tokens).

[`app/globals.css`](https://github.com/quirq-ai/instants/blob/main/app/globals.css) · code · 5702 bytes

### layout.tsx

Self-hosted at build time, so the browser never fetches from Google. Notable exports:
`RootLayout`, `metadata`. Wired into a Next.js app (App Router or Next APIs).

[`app/layout.tsx`](https://github.com/quirq-ai/instants/blob/main/app/layout.tsx) · code · 2431 bytes

### loading.tsx

export default function Loading() { return ( Notable exports: `Loading`.

[`app/loading.tsx`](https://github.com/quirq-ai/instants/blob/main/app/loading.tsx) · code · 721 bytes

### not-found.tsx

export default function NotFound() { return ( Notable exports: `NotFound`. Wired into a
Next.js app (App Router or Next APIs).

[`app/not-found.tsx`](https://github.com/quirq-ai/instants/blob/main/app/not-found.tsx) · code · 998 bytes

### page.tsx

type Media = "all" | "video" Notable exports: `FeedPage`. Wired into a Next.js app (App
Router or Next APIs).

[`app/page.tsx`](https://github.com/quirq-ai/instants/blob/main/app/page.tsx) · code · 7846 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
