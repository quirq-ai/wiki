<!-- quirq-wiki-generated repo=monitoring dir=app/health -->

# monitoring / app/health

Source: [app/health](https://github.com/quirq-ai/monitoring/tree/main/app/health) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### loading.tsx

export default function Loading() { return ; } Notable exports: `Loading`.

[`app/health/loading.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/health/loading.tsx) · code · 125 bytes

### page.tsx

export default async function HealthPage() { const snapshot = await buildSnapshot(); const
now = new Date(snapshot.generatedAt); const { health } = snapshot; const down =
snapshot.sources.filter((s) => !s.ok).length Notable exports: `HealthPage`.

[`app/health/page.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/health/page.tsx) · code · 6247 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
