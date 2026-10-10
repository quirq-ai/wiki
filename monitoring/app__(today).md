<!-- quirq-wiki-generated repo=monitoring dir=app/(today) -->

# monitoring / app/(today)

Source: [app/(today)](https://github.com/quirq-ai/monitoring/tree/main/app/(today)) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### loading.tsx

export default function Loading() { return ; } Notable exports: `Loading`.

[`app/(today)/loading.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/(today)/loading.tsx) · code · 125 bytes

### page.tsx

export default async function TodayPage({ searchParams }: PageProps) { const params = await
searchParams; const window = parseWindow(typeof params.since === "string" ? params.since :
undefined); const snapshot = await buildSnapshot({ window }); const now = new
Date(snapshot.generatedAt); const words = window === "24h" ? "24 hours" : "7 days"; What
needs a lo Notable exports: `TodayPage`. Wired into a Next.js app (App Router or Next APIs).

[`app/(today)/page.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/(today)/page.tsx) · code · 5896 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
