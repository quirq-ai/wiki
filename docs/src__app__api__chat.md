<!-- quirq-wiki-generated repo=docs dir=src/app/api/chat -->

# docs / src/app/api/chat

Source: [src/app/api/chat](https://github.com/quirq-ai/docs/tree/main/src/app/api/chat) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

import { convertToModelMessages, stepCountIs, streamText, tool, type UIMessage, } from "ai";
interface CustomDocument extends DocumentData { url: string; title: string; description:
string; content: string; } Notable exports: `POST`, `ChatUIMessage`, `SearchTool`.

[`src/app/api/chat/route.ts`](https://github.com/quirq-ai/docs/blob/main/src/app/api/chat/route.ts) · code · 3267 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
