<!-- quirq-wiki-generated repo=monitoring dir=app/release -->

# monitoring / app/release

Source: [app/release](https://github.com/quirq-ai/monitoring/tree/main/app/release) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### loading.tsx

export default function Loading() { return ; } Notable exports: `Loading`.

[`app/release/loading.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/release/loading.tsx) · code · 125 bytes

### page.tsx

export default async function ReleasePage() { const snapshot = await buildSnapshot(); const
now = new Date(snapshot.generatedAt); const { release } = snapshot Notable exports:
`ReleasePage`. Wired into a Next.js app (App Router or Next APIs).

[`app/release/page.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/release/page.tsx) · code · 4760 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
