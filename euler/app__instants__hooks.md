<!-- quirq-wiki-generated repo=euler dir=app/instants/hooks -->

# euler / app/instants/hooks

Source: [app/instants/hooks](https://github.com/quirq-ai/euler/tree/main/app/instants/hooks) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### use-client-ready.ts

const subscribe = () => () => {}; const clientSnapshot = () => true; const serverSnapshot =
() => false Notable exports: `useClientReady`. Marked `'use client'` so it runs in the
browser.

[`app/instants/hooks/use-client-ready.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/hooks/use-client-ready.ts) · code · 357 bytes

### use-mobile.ts

import * as React from "react" Notable exports: `useIsMobile`.

[`app/instants/hooks/use-mobile.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/hooks/use-mobile.ts) · code · 565 bytes

### use-session.ts

import { appendActivity, createSessionDocument, MAX_BATCH_EVENTS, MAX_EVENTS,
parseActivityBatch, parseSessionDocument, } from "@/engine/schema.mjs"; import type {
Activity, ActivityInput, SessionDocument, SessionResult, } from "@/engine/types"; const
DEVICE_KEY = "instants-session-v1"; const outboxKey = (id: string) => "instants-outbox:" +
id; type Mode = " Notable exports: `useSession`.

[`app/instants/hooks/use-session.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/hooks/use-session.ts) · code · 14727 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
