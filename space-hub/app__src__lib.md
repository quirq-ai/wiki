<!-- quirq-wiki-generated repo=space-hub dir=app/src/lib -->

# space-hub / app/src/lib

Source: [app/src/lib](https://github.com/quirq-ai/space-hub/tree/main/app/src/lib) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### chat-log.ts

/** A chat turn saved on the hub: one JSON object per line of .log.jsonl. */ export type
ChatTurn = DemoMessage & { author?: string; time?: string } Notable exports: `chatLogPath`,
`parseTurn`, `parseChatLog`, `chatLogLine`, `ChatTurn`, `MAX_TURNS_PER_REQUEST`.

[`app/src/lib/chat-log.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/chat-log.ts) · code · 2999 bytes

### conversation.ts

type ObjectValue = Record; const object = (value: unknown): value is ObjectValue => value
!== null && typeof value === "object" && !Array.isArray(value) Notable exports:
`isConversation`.

[`app/src/lib/conversation.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/conversation.ts) · code · 548 bytes

### demo-chat.ts

export type DemoMessage = { id: string; role: "user" | "assistant"; content: string; links?:
{ label: string; path: string }[]; }; export type DemoReply = { content: string; links?: {
label: string; path: string }[] }; export type DemoReplies = { type: "demo-replies";
suggestions: { label: string; prompt: string }[]; rules: (DemoReply & { keywords: string[]
Notable exports: `parseDemoReplies`, `sampleReply`, `restoreDemoSession`, `DemoMessage`

[`app/src/lib/demo-chat.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/demo-chat.ts) · code · 2722 bytes

### jsonl.ts

export type JsonlRecord = { line: number; value: unknown; error?: never } | { line: number;
error: string; raw: string; value?: never } Notable exports: `parseJsonl`, `jsonlPost`,
`JsonlRecord`.

[`app/src/lib/jsonl.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/jsonl.ts) · code · 1932 bytes

### theme.ts

export type ThemePreference = "light" | "dark" | "system"; export const THEME_STORAGE_KEY =
"open-chat:theme:v1"; export const THEME_CHANGE_EVENT = "open-chat:theme-change" Notable
exports: `themePreference`, `ThemePreference`, `THEME_STORAGE_KEY`, `THEME_CHANGE_EVENT`,
`THEME_BOOTSTRAP`.

[`app/src/lib/theme.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/theme.ts) · code · 868 bytes

### types.ts

export interface Entry { name: string; /** A slash-separated path relative to the configured
workspace. */ path: string; kind: "directory" | "file"; /** A lowercase file extension
without its leading dot; empty for folders. */ extension: string; size: number; modifiedAt:
string; /** A short line shown instead of "Folder" for spaces and projects. */ detail?
Notable exports: `Entry`, `FileView`, `WorkspaceSnapshot`, `PreviewResult`.

[`app/src/lib/types.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/types.ts) · code · 908 bytes

### url-file.ts

Read a plain web URL or a Windows Internet Shortcut without executing its contents. Notable
exports: `parseUrlFile`.

[`app/src/lib/url-file.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/url-file.ts) · code · 979 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
