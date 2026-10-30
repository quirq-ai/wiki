<!-- quirq-wiki-generated repo=monitoring dir=app/settings -->

# monitoring / app/settings

Source: [app/settings](https://github.com/quirq-ai/monitoring/tree/main/app/settings) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### actions.ts

The settings editor's server functions. Everything the browser sends is checked here: the
request against its schema, every id against the server's own catalog (in buildPlan), and a
write against the local-editor rules in refuseWrite. Notable exports: `reviewEdits`,
`whoAmI`, `applyReviewed`. Wired into a Next.js app (App Router or Next APIs). Contains
server actions (`'use server'`).

[`app/settings/actions.ts`](https://github.com/quirq-ai/monitoring/blob/main/app/settings/actions.ts) · code · 2552 bytes

### loading.tsx

export default function Loading() { return ; } Notable exports: `Loading`.

[`app/settings/loading.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/settings/loading.tsx) · code · 125 bytes

### page.tsx

export const metadata: Metadata = { title: "Settings · quirq monitoring" } Notable exports:
`SettingsPage`, `metadata`, `dynamic`.

[`app/settings/page.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/settings/page.tsx) · code · 2740 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
