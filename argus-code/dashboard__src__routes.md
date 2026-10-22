<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/routes -->

# argus-code / dashboard/src/routes

Source: [dashboard/src/routes](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/routes) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __root.tsx

export const Route = createRootRoute({ component: () => ( Notable exports: `Route`.

[`dashboard/src/routes/__root.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/__root.tsx) · code · 221 bytes

### alerts.tsx

export const Route = createFileRoute('/alerts')({ component: lazyRouteComponent(() =>
import('@/features/alerts/AlertsPage')) }) Notable exports: `Route`.

[`dashboard/src/routes/alerts.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/alerts.tsx) · code · 209 bytes

### index.tsx

export const Route = createFileRoute('/')({ component: lazyRouteComponent(() =>
import('@/features/overview/OverviewPage')) }) Notable exports: `Route`.

[`dashboard/src/routes/index.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/index.tsx) · code · 207 bytes

### models.tsx

export const Route = createFileRoute('/models')({ component: lazyRouteComponent(() =>
import('@/features/models/ModelsPage')) }) Notable exports: `Route`.

[`dashboard/src/routes/models.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/models.tsx) · code · 209 bytes

### prompts.tsx

/** Legacy /prompts URL from the Astro dashboard. */ export const Route =
createFileRoute('/prompts')({ beforeLoad: () => { throw redirect({ to: '/search' }); }, })
Notable exports: `Route`.

[`dashboard/src/routes/prompts.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/prompts.tsx) · code · 245 bytes

### search.tsx

export const Route = createFileRoute('/search')({ component: lazyRouteComponent(() =>
import('@/features/search/SearchPage')) }) Notable exports: `Route`.

[`dashboard/src/routes/search.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/search.tsx) · code · 209 bytes

### session.tsx

/** Legacy /session?id=… URLs from the Astro dashboard. */ export const Route =
createFileRoute('/session')({ validateSearch: (s: Record) => ({ id: typeof s.id === 'string'
? s.id : '' }), beforeLoad: ({ search }) => { if (search.id) throw redirect({ to:
'/sessions/$id', params: { id: search.id }, search: { tab: 'overview' } }); throw redirect({
to: '/sessio Notable exports: `Route`.

[`dashboard/src/routes/session.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/session.tsx) · code · 479 bytes

### sessions.$id.tsx

const TABS: Tab[] = ['overview', 'timeline', 'subagents'] Notable exports: `Route`.

[`dashboard/src/routes/sessions.$id.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/sessions.$id.tsx) · code · 459 bytes

### sessions.index.tsx

export const Route = createFileRoute('/sessions/')({ component: lazyRouteComponent(() =>
import('@/features/sessions/SessionsPage')) }) Notable exports: `Route`.

[`dashboard/src/routes/sessions.index.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/sessions.index.tsx) · code · 216 bytes

### settings.tsx

export const Route = createFileRoute('/settings')({ component: lazyRouteComponent(() =>
import('@/features/settings/SettingsPage')) }) Notable exports: `Route`.

[`dashboard/src/routes/settings.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/settings.tsx) · code · 215 bytes

### tools.tsx

export const Route = createFileRoute('/tools')({ component: lazyRouteComponent(() =>
import('@/features/tools/ToolsPage')) }) Notable exports: `Route`.

[`dashboard/src/routes/tools.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/tools.tsx) · code · 206 bytes

### trends.tsx

export const Route = createFileRoute('/trends')({ component: lazyRouteComponent(() =>
import('@/features/trends/TrendsPage')) }) Notable exports: `Route`.

[`dashboard/src/routes/trends.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/routes/trends.tsx) · code · 209 bytes

_Generated 2026-10-22 10:44 UTC from `main`._
