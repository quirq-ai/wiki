<!-- quirq-wiki-generated repo=monitoring dir=app/waiting -->

# monitoring / app/waiting

Source: [app/waiting](https://github.com/quirq-ai/monitoring/tree/main/app/waiting) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### loading.tsx

export default function Loading() { return ; } Notable exports: `Loading`.

[`app/waiting/loading.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/waiting/loading.tsx) · code · 125 bytes

### page.tsx

const kindWords: Record = { review: "review requested", assigned: "assigned to you", "stale-
approval": "approval on an older head", held: "canary held", failure: "open failure", }
Notable exports: `WaitingPage`. Wired into a Next.js app (App Router or Next APIs).

[`app/waiting/page.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/waiting/page.tsx) · code · 3322 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
