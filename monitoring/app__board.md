<!-- quirq-wiki-generated repo=monitoring dir=app/board -->

# monitoring / app/board

Source: [app/board](https://github.com/quirq-ai/monitoring/tree/main/app/board) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### loading.tsx

export default function Loading() { return ; } Notable exports: `Loading`.

[`app/board/loading.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/board/loading.tsx) · code · 125 bytes

### page.tsx

const productColumns: { key: "tree" | "lkgr" | "canary" | "deploy"; label: string }[] = [ {
key: "tree", label: "Tree" }, { key: "lkgr", label: "lkgr" }, { key: "canary", label:
"Canary" }, { key: "deploy", label: "Deploy" }, ] Notable exports: `BoardPage`. Wired into a
Next.js app (App Router or Next APIs).

[`app/board/page.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/board/page.tsx) · code · 7365 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
