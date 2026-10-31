<!-- quirq-wiki-generated repo=instants dir=lib/server -->

# instants / lib/server

Source: [lib/server](https://github.com/quirq-ai/instants/tree/main/lib/server) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### job.ts

One generation job at a time. The lock lives on globalThis so it survives hot reloads and is
shared by every bundle of the route module. Each holder gets an AbortController, and a lock
older than STALE_MS is treated as dead (a crash or reload mid-run can never wedge generation
until restart). Notable exports: `job`.

[`lib/server/job.ts`](https://github.com/quirq-ai/instants/blob/main/lib/server/job.ts) · code · 1432 bytes

### local-only.ts

One guard for every local-only route handler: loopback Host, loopback Origin, and on writes
an Origin or same-origin/none Sec-Fetch-Site (blocks cross-site form posts and headerless
scripted requests). Host is client-controlled, so a production server (next start, the
Docker image) never trusts it: there every action needs the unlock cookie matching
INSTANTS_ADMIN_TOKEN.

[`lib/server/local-only.ts`](https://github.com/quirq-ai/instants/blob/main/lib/server/local-only.ts) · code · 2825 bytes

### space.ts

Space supervisor: connects the content store to a Spacehub project, keeps `spacehub project
sync --auto` running in the clone, and watches the store's sources/ for incoming sources
(auto-generating posts when enabled). State lives on globalThis so hot reloads and every
route bundle share one supervisor. Notable exports: `validProject`, `connect`, `disconnect`,
`syncNow`, `setAutoGenerate`, `status`, `config`, `generatingSlug`, and 9 more.

[`lib/server/space.ts`](https://github.com/quirq-ai/instants/blob/main/lib/server/space.ts) · code · 24157 bytes

### video-job.ts

Video jobs, one per post, up to MAX_PARALLEL rendering at once; the rest wait in a FIFO for
a free slot. Separate from the post generation lock. Lives on globalThis so it survives hot
reloads; a job older than STALE_MS is dead. Notable exports: `videoJob`.

[`lib/server/video-job.ts`](https://github.com/quirq-ai/instants/blob/main/lib/server/video-job.ts) · code · 3906 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
