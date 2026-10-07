<!-- quirq-wiki-generated repo=euler dir=app/instants/engine -->

# euler / app/instants/engine

Source: [app/instants/engine](https://github.com/quirq-ai/euler/tree/main/app/instants/engine) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### http.d.mts

export function hasSameOrigin( requestUrl: string, origin: string | null, host: string |
null, ): boolean Notable exports: `hasSameOrigin`.

[`app/instants/engine/http.d.mts`](https://github.com/quirq-ai/euler/blob/main/app/instants/engine/http.d.mts) · code · 113 bytes

### http.mjs

Next dev can reconstruct request.url with its bind host. The browser's Host header is the
authority it actually addressed; never use forwarded-host. Notable exports: `hasSameOrigin`.

[`app/instants/engine/http.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/engine/http.mjs) · code · 609 bytes

### projection.ts

export type SessionView = { liked: string[]; saved: string[]; following: string[]; allPosts:
Post[]; comments: Record; responses: Record; deadlines: Record; threads: Thread[];
attention: QueueItem[]; } Notable exports: `projectSession`, `SessionView`.

[`app/instants/engine/projection.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/engine/projection.ts) · code · 4984 bytes

### schema.d.mts

export const MAX_EVENTS: 2000; export const MAX_BATCH_EVENTS: 50; export const
MAX_REQUEST_BYTES: number; export const MAX_DOCUMENT_BYTES: number; export const
MAX_TEXT_LENGTH: 4000 Notable exports: `isSessionId`, `parseActivityBatch`,
`parseSessionDocument`, `createSessionDocument`, `appendActivity`, `SessionError`,
`MAX_EVENTS`, `MAX_BATCH_EVENTS`, and 3 more.

[`app/instants/engine/schema.d.mts`](https://github.com/quirq-ai/euler/blob/main/app/instants/engine/schema.d.mts) · code · 790 bytes

### schema.mjs

export const MAX_EVENTS = 2_000; export const MAX_BATCH_EVENTS = 50; export const
MAX_REQUEST_BYTES = 3 * 1024 * 1024; export const MAX_DOCUMENT_BYTES = 8 * 1024 * 1024;
export const MAX_TEXT_LENGTH = 4_000 Notable exports: `isSessionId`, `parseActivityBatch`,
`parseSessionDocument`, `createSessionDocument`, `appendActivity`, `SessionError`,
`MAX_EVENTS`, `MAX_BATCH_EVENTS`, and 5 more.

[`app/instants/engine/schema.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/engine/schema.mjs) · code · 6666 bytes

### session-store.d.mts

export function createSessionStore(options?: { directory?: string }): { createSession():
Promise; loadSession(id: string): Promise; appendSession(id: string, events: Activity[]):
Promise; } Notable exports: `createSessionStore`.

[`app/instants/engine/session-store.d.mts`](https://github.com/quirq-ai/euler/blob/main/app/instants/engine/session-store.d.mts) · code · 314 bytes

### session-store.mjs

Node-only adapter: never import this file from a client component. Notable exports:
`createSessionStore`.

[`app/instants/engine/session-store.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/engine/session-store.mjs) · code · 3528 bytes

### types.ts

Portable activity contract. This module does not import server storage. Notable exports:
`QueueKind`, `SessionPost`, `ActivityData`, `ActivityType`, `ActivityInput`, `Activity`,
`SessionDocument`, `SessionResult`.

[`app/instants/engine/types.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/engine/types.ts) · code · 1730 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
