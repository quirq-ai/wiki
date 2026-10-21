<!-- quirq-wiki-generated repo=monitoring dir=app/blockers -->

# monitoring / app/blockers

Source: [app/blockers](https://github.com/quirq-ai/monitoring/tree/main/app/blockers) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### loading.tsx

export default function Loading() { return ; } Notable exports: `Loading`.

[`app/blockers/loading.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/blockers/loading.tsx) · code · 125 bytes

### page.tsx

const kindWords: Record = { review: "review requested", assigned: "assigned to you", "stale-
approval": "approval on an older head", held: "canary held", failure: "open failure", }
Notable exports: `BlockersPage`. Wired into a Next.js app (App Router or Next APIs).

[`app/blockers/page.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/blockers/page.tsx) · code · 6869 bytes

_Generated 2026-10-21 10:42 UTC from `main`._
