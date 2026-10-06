<!-- quirq-wiki-generated repo=instants dir=hooks -->

# instants / hooks

Source: [hooks](https://github.com/quirq-ai/instants/tree/main/hooks) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### use-client-ready.ts

const subscribe = () => () => {}; const clientSnapshot = () => true; const serverSnapshot =
() => false Notable exports: `useClientReady`. Marked `'use client'` so it runs in the
browser.

[`hooks/use-client-ready.ts`](https://github.com/quirq-ai/instants/blob/main/hooks/use-client-ready.ts) · code · 357 bytes

### use-mobile.ts

import * as React from "react" Notable exports: `useIsMobile`.

[`hooks/use-mobile.ts`](https://github.com/quirq-ai/instants/blob/main/hooks/use-mobile.ts) · code · 565 bytes

### use-session.ts

import { appendActivity, createSessionDocument, MAX_BATCH_EVENTS, MAX_EVENTS,
parseActivityBatch, parseSessionDocument, } from "@/engine/schema.mjs"; import type {
Activity, ActivityInput, SessionDocument, SessionResult, } from "@/engine/types"; const
DEVICE_KEY = "instants-session-v1"; const outboxKey = (id: string) => "instants-outbox:" +
id; type Mode = " Notable exports: `useSession`.

[`hooks/use-session.ts`](https://github.com/quirq-ai/instants/blob/main/hooks/use-session.ts) · code · 14663 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
