<!-- quirq-wiki-generated repo=instants dir=engine -->

# instants / engine

Source: [engine](https://github.com/quirq-ai/instants/tree/main/engine) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### http.d.mts

export function hasSameOrigin( requestUrl: string, origin: string | null, host: string |
null, ): boolean Notable exports: `hasSameOrigin`.

[`engine/http.d.mts`](https://github.com/quirq-ai/instants/blob/main/engine/http.d.mts) · code · 113 bytes

### http.mjs

Next dev can reconstruct request.url with its bind host. The browser's Host header is the
authority it actually addressed; never use forwarded-host. Notable exports: `hasSameOrigin`.

[`engine/http.mjs`](https://github.com/quirq-ai/instants/blob/main/engine/http.mjs) · code · 609 bytes

### projection.ts

export type SessionView = { liked: string[]; saved: string[]; following: string[]; allPosts:
Post[]; comments: Record; responses: Record; deadlines: Record; threads: Thread[];
attention: QueueItem[]; } Notable exports: `projectSession`, `SessionView`.

[`engine/projection.ts`](https://github.com/quirq-ai/instants/blob/main/engine/projection.ts) · code · 4984 bytes

### schema.d.mts

export const MAX_EVENTS: 2000; export const MAX_BATCH_EVENTS: 50; export const
MAX_REQUEST_BYTES: number; export const MAX_DOCUMENT_BYTES: number; export const
MAX_TEXT_LENGTH: 4000 Notable exports: `isSessionId`, `parseActivityBatch`,
`parseSessionDocument`, `createSessionDocument`, `appendActivity`, `SessionError`,
`MAX_EVENTS`, `MAX_BATCH_EVENTS`, and 3 more.

[`engine/schema.d.mts`](https://github.com/quirq-ai/instants/blob/main/engine/schema.d.mts) · code · 790 bytes

### schema.mjs

export const MAX_EVENTS = 2_000; export const MAX_BATCH_EVENTS = 50; export const
MAX_REQUEST_BYTES = 3 * 1024 * 1024; export const MAX_DOCUMENT_BYTES = 8 * 1024 * 1024;
export const MAX_TEXT_LENGTH = 4_000 Notable exports: `isSessionId`, `parseActivityBatch`,
`parseSessionDocument`, `createSessionDocument`, `appendActivity`, `SessionError`,
`MAX_EVENTS`, `MAX_BATCH_EVENTS`, and 5 more.

[`engine/schema.mjs`](https://github.com/quirq-ai/instants/blob/main/engine/schema.mjs) · code · 6666 bytes

### session-store.d.mts

export function createSessionStore(options?: { directory?: string }): { createSession():
Promise; loadSession(id: string): Promise; appendSession(id: string, events: Activity[]):
Promise; } Notable exports: `createSessionStore`.

[`engine/session-store.d.mts`](https://github.com/quirq-ai/instants/blob/main/engine/session-store.d.mts) · code · 314 bytes

### session-store.mjs

Node-only adapter: never import this file from a client component. Notable exports:
`createSessionStore`.

[`engine/session-store.mjs`](https://github.com/quirq-ai/instants/blob/main/engine/session-store.mjs) · code · 3492 bytes

### types.ts

Portable activity contract. This module does not import server storage. Notable exports:
`QueueKind`, `SessionPost`, `ActivityData`, `ActivityType`, `ActivityInput`, `Activity`,
`SessionDocument`, `SessionResult`.

[`engine/types.ts`](https://github.com/quirq-ai/instants/blob/main/engine/types.ts) · code · 1730 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
