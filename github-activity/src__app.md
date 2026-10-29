<!-- quirq-wiki-generated repo=github-activity dir=src/app -->

# github-activity / src/app

Source: [src/app](https://github.com/quirq-ai/github-activity/tree/main/src/app) in [github-activity](https://github.com/quirq-ai/github-activity).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### favicon.ico

Binary ICO asset (14.7 KB). Left unsummarized; open the file in the source repository if you
need the actual bytes. Wiki pages do not copy images, fonts, archives, or other generated
blobs.

[`src/app/favicon.ico`](https://github.com/quirq-ai/github-activity/blob/main/src/app/favicon.ico) · binary · 15086 bytes

### globals.css

Stylesheet `globals.css` for layout and visual treatment in this folder. Defines or consumes
CSS custom properties (design tokens).

[`src/app/globals.css`](https://github.com/quirq-ai/github-activity/blob/main/src/app/globals.css) · code · 1399 bytes

### layout.tsx

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], }) Notable
exports: `RootLayout`, `metadata`. Wired into a Next.js app (App Router or Next APIs).

[`src/app/layout.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/app/layout.tsx) · code · 723 bytes

### not-found.tsx

export default function NotFound() { return ( Notable exports: `NotFound`. Wired into a
Next.js app (App Router or Next APIs).

[`src/app/not-found.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/app/not-found.tsx) · code · 473 bytes

### page.tsx

export default async function Home() { const d = await getDashboard(); const weekly =
Array.from({ length: WEEKS }, (_, i) => d.repos.reduce((n, r) => n + r.weekly[i], 0))
Notable exports: `Home`.

[`src/app/page.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/app/page.tsx) · code · 2822 bytes

_Generated 2026-10-29 11:51 UTC from `main`._
