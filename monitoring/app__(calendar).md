<!-- quirq-wiki-generated repo=monitoring dir=app/(calendar) -->

# monitoring / app/(calendar)

Source: [app/(calendar)](https://github.com/quirq-ai/monitoring/tree/main/app/(calendar)) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### loading.tsx

export default function Loading() { return ; } Notable exports: `Loading`.

[`app/(calendar)/loading.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/(calendar)/loading.tsx) · code · 125 bytes

### page.tsx

export default async function CalendarPage({ searchParams }: PageProps) { const params =
await searchParams; const snapshot = await buildSnapshot({ window: "7d" }); const now = new
Date(snapshot.generatedAt); const dates = calendarDates(now); Both parameters are checked
against fixed choices and never reach a fetch (rule 7). const day = pickDay(params.day, d
Notable exports: `CalendarPage`. Wired into a Next.js app (App Router or Next APIs).

[`app/(calendar)/page.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/(calendar)/page.tsx) · code · 9278 bytes

_Generated 2026-10-22 10:44 UTC from `main`._
