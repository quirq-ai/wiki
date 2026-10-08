<!-- quirq-wiki-generated repo=monitoring dir=app -->

# monitoring / app

Source: [app](https://github.com/quirq-ai/monitoring/tree/main/app) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### error.tsx

/** * Shown when a page throws. In production Next replaces a server error's message with a
minified * React message and a digest, so the message is never shown: one fixed sentence,
the digest for * the server log, and a retry. */ export default function ErrorPage({ error,
reset }: { error: Error & { digest?: string }; reset: () => void }) { return ( Notable
exports: `ErrorPage`. Wired into a Next.js app (App Router or Next APIs).

[`app/error.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/error.tsx) · code · 1428 bytes

### favicon.ico

Binary ICO asset (25.3 KB). Left unsummarized; open the file in the source repository if you
need the actual bytes. Wiki pages do not copy images, fonts, archives, or other generated
blobs.

[`app/favicon.ico`](https://github.com/quirq-ai/monitoring/blob/main/app/favicon.ico) · binary · 25931 bytes

### globals.css

Stylesheet `globals.css` for layout and visual treatment in this folder. Leading class
selectors include `brand-wordmark`, `markdown`. Defines or consumes CSS custom properties
(design tokens).

[`app/globals.css`](https://github.com/quirq-ai/monitoring/blob/main/app/globals.css) · code · 6728 bytes

### layout.tsx

export const metadata: Metadata = { title: "quirq monitoring", description: "What changed
across quirq-ai, and what state everything is in.", icons: { icon: "/brand/quirq/app-
icon.svg" }, } Notable exports: `RootLayout`, `metadata`. Wired into a Next.js app (App
Router or Next APIs).

[`app/layout.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/layout.tsx) · code · 1306 bytes

### not-found.tsx

export default function NotFound() { return ( Notable exports: `NotFound`. Wired into a
Next.js app (App Router or Next APIs).

[`app/not-found.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/not-found.tsx) · code · 517 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
