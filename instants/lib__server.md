<!-- quirq-wiki-generated repo=instants dir=lib/server -->

# instants / lib/server

Source: [lib/server](https://github.com/quirq-ai/instants/tree/main/lib/server) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### job.ts

One generation job at a time. The lock lives on globalThis so it survives hot reloads and is
shared by every bundle of the route module. Each holder gets an AbortController, and a lock
older than STALE_MS is treated as dead (a crash or reload mid-run can never wedge generation
until restart). Notable exports: `job`.

[`lib/server/job.ts`](https://github.com/quirq-ai/instants/blob/main/lib/server/job.ts) · code · 1414 bytes

### local-only.ts

One guard for every local-only route handler: loopback Host, loopback Origin, and on writes
an Origin or same-origin/none Sec-Fetch-Site (blocks cross-site form posts and headerless
scripted requests). Notable exports: `rejectNonLocal`, `localOnly`.

[`lib/server/local-only.ts`](https://github.com/quirq-ai/instants/blob/main/lib/server/local-only.ts) · code · 1490 bytes

### video-job.ts

One video job at a time, separate from the post generation lock. Lives on globalThis so it
survives hot reloads; a lock older than STALE_MS is dead. Notable exports: `videoJob`.

[`lib/server/video-job.ts`](https://github.com/quirq-ai/instants/blob/main/lib/server/video-job.ts) · code · 2288 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
