<!-- quirq-wiki-generated repo=vercel-activity dir=src/lib -->

# vercel-activity / src/lib

Source: [src/lib](https://github.com/quirq-ai/vercel-activity/tree/main/src/lib) in [vercel-activity](https://github.com/quirq-ai/vercel-activity).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### activity.ts

Everything in this file runs on the server. The Vercel token is read here and never leaves
it: pages only receive the allowlisted shapes below. Notable exports: `getActivity`,
`getAccount`, `DeployState`, `PublicDeployment`, `PublicProject`, `DayBucket`, `Activity`,
`PublicDomain`, and 1 more. Wired into a Next.js app (App Router or Next APIs).

[`src/lib/activity.ts`](https://github.com/quirq-ai/vercel-activity/blob/main/src/lib/activity.ts) · code · 11219 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
