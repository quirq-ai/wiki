<!-- quirq-wiki-generated repo=space-hub dir=app/src/lib -->

# space-hub / app/src/lib

Source: [app/src/lib](https://github.com/quirq-ai/space-hub/tree/main/app/src/lib) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### agenthub.ts

Workers launched from a chat, as the app shows them: tasks on the org's Agents Hub, read
through the web service (/-/api/agenthub, cli/src/agenthub.ts), and their events folded into
messages, steps, links and notes. A launch is a chat turn that ends with the task's marker.
The Agents Hub's event kinds: user · message · thinking · tool / tool_done · command /
command_done · link · env · status · turn · note · error.

[`app/src/lib/agenthub.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/agenthub.ts) · code · 11276 bytes

### channels.ts

/** * Chat as channels, the way quirq lays it out: Chat// holds a * README (its "## Input"
and "## Output format"), a conversation chat.json * with the hub's chat.log.jsonl beside it,
inputs/, output/, and * sub-channels one level down in the same shape. Agents and people get
* channels named after them.

[`app/src/lib/channels.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/channels.ts) · code · 5310 bytes

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

### markdown.ts

Raw HTML in Markdown, shown as the text it is instead of dropped. Without it, `skipHtml`
turns "Chat/<login>/tasks/" into "Chat//tasks/": the placeholder parses as a tag and
disappears. Nothing is rendered as HTML. Notable exports: `remarkHtmlAsText`.

[`app/src/lib/markdown.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/markdown.ts) · code · 903 bytes

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
string; /** A short line shown instead of "Folder": for spaces and projects, and for fol
Notable exports: `Entry`, `Doc`, `FileView`, `WorkspaceSnapshot`, `PreviewResult`.

[`app/src/lib/types.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/types.ts) · code · 1538 bytes

### url-file.ts

Read a plain web URL or a Windows Internet Shortcut without executing its contents. Notable
exports: `parseUrlFile`.

[`app/src/lib/url-file.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/lib/url-file.ts) · code · 979 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
