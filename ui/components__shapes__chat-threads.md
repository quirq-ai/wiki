<!-- quirq-wiki-generated repo=ui dir=components/shapes/chat-threads -->

# ui / components/shapes/chat-threads

Source: [components/shapes/chat-threads](https://github.com/quirq-ai/ui/tree/main/components/shapes/chat-threads) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### bubble.tsx

Chat bubbles: Bubble (seven fills from the swarm bubble set, mapped to quirq tokens),
BubbleGroup (consecutive bubbles from one side) and BubbleReactions (the small chip that
hangs off a bubble edge). Server-safe. The person's side is ink filled with black text, the
agent's side is muted s2; the fill is what tells the two sides apart.

[`components/shapes/chat-threads/bubble.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/bubble.tsx) · code · 3895 bytes

### chat-scroller.tsx

ChatScroller: the transcript viewport. Opens pinned to the newest message, stays pinned
while new parts arrive if the reader was already at the end, and shows a "Jump to latest"
pill once they scroll up. role="log" so assistive tech treats it as an append-only
conversation; the region is focusable so the keyboard can scroll it. Notable exports:
`ChatScroller`, `ChatScrollerProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/chat-threads/chat-scroller.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/chat-scroller.tsx) · code · 3514 bytes

### chat-skeleton.tsx

Chat placeholders: ChatBubbleSkeleton (the landing bento's empty bubbles, person right and
translucent, agent left and solid) and TranscriptSkeleton (shimmer turns while a stored
conversation loads). Fixed widths only, so server and client render the same. Server-safe.
Notable exports: `ChatBubbleSkeleton`, `TranscriptSkeleton`, `ChatBubbleSkeletonProps`,
`TranscriptSkeletonProps`.

[`components/shapes/chat-threads/chat-skeleton.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/chat-skeleton.tsx) · code · 2704 bytes

### composer.tsx

Chat composer: an auto-growing prompt box with the project the chat runs in and a Send or
Stop control. Two layouts from the product: "card" (the swarm org chat: textarea over an
addon row with the project picker and a round send button) and "bar" (the space dashboard:
project select, textarea and text buttons in one row on s2). Enter sends, Shift+Enter adds a
line.

[`components/shapes/chat-threads/composer.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/composer.tsx) · code · 14331 bytes

### context-bubble.tsx

Context-tagged messages from the legacy swarm chat: every agent reply carries the context
that answered it (XO, ClickUp, GitHub Copilot, Claude Code, ChatGPT, Perplexity, Devin,
DevOps, Vibe, HR, Assistant) as a toned icon and label, optional issue and ID badges, and a
deep link. Tones map the legacy Tailwind hues onto the quirq spectrum. Server-safe.

[`components/shapes/chat-threads/context-bubble.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/context-bubble.tsx) · code · 6409 bytes

### demo-composer.tsx

Chat composer demo: new and existing chats in every state (ready, responding with Stop,
space down, stream error, projects loading, unknown project) plus the space dashboard bar.
Enter sends, Shift+Enter adds a line; a sent prompt runs a short mock turn. Notable exports:
`ComposerDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/chat-threads/demo-composer.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/demo-composer.tsx) · code · 5461 bytes

### demo-data.ts

Fixture adapters for the chat demos: map the shared mock records into the view models the
components take (TranscriptItem, HistoryRow, ComposerProject, PromptTurn). Pure data, no
hooks; every value derives from lib/fixtures so server and client agree. Notable exports:
`itemsFor`, `SESSION`, `SESSION_PROJECT`, `AGENT`, `TurnState`, `DEMO_REPLY`,
`SPACE_PROJECTS`, `HISTORY_ROWS`, and 2 more.

[`components/shapes/chat-threads/demo-data.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/demo-data.ts) · code · 6781 bytes

### demo-history.tsx

Chat history demo: the sidebar wired to a preview (open a row, refresh, start a new chat,
search, arrow keys between rows), the list layout, and the loading, Space API down, empty
and refreshing states. Every list is scoped to one space, research-lab, as in the product.
Notable exports: `HistoryDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/chat-threads/demo-history.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/demo-history.tsx) · code · 7938 bytes

### demo-kit.tsx

Demo scaffolding for this category: mono captions, labelled cells and section headings.
Server-safe. Notable exports: `Caption`, `DemoCell`, `DemoGroup`.

[`components/shapes/chat-threads/demo-kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/demo-kit.tsx) · code · 1814 bytes

### demo-markers.tsx

Tool call and turn markers demo: every tool state (expand any row with input or output), a
replayable call, reasoning and Working… lines, the three marker layouts, a whole agent turn,
and prompts by turn with its loading, unsupported and missing notes. Notable exports:
`MarkersDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/chat-threads/demo-markers.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/demo-markers.tsx) · code · 8863 bytes

### demo-thread.tsx

Chat thread demo: the df1a1a5b transcript as a live thread (streaming, complete or stopped;
send a prompt and watch the reply stream; scroll up for Jump to latest), every bubble fill,
the skeletons and empty notes, and the legacy context-tagged chat. Notable exports:
`ChatThreadDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/chat-threads/demo-thread.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/demo-thread.tsx) · code · 14611 bytes

### history.tsx

ChatHistory: past conversations grouped by recency (Today, Yesterday, Previous 7 days,
Older), each row naming its title, project and last activity. Two layouts: "sidebar" (the
swarm org nav and the space dashboard chat side: New chat, Refresh history, search, compact
rows) and "list" (a wider panel with the last message preview and runtime).

[`components/shapes/chat-threads/history.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/history.tsx) · code · 13520 bytes

### index.tsx

Chat and agent transcript: conversation, tool markers, composer and history. Notable
exports: `shapes`, `Bubble`, `BubbleGroup`, `BubbleReactions`, `BUBBLE_VARIANTS`, `type
BubbleVariant`, `type BubbleAlign`, `ChatMessageRow`, and 42 more.

[`components/shapes/chat-threads/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/index.tsx) · code · 3335 bytes

### markers.tsx

Agent work markers: the one-line rows a turn uses for everything that is not prose. Marker
(default, separator, border), ToolCallMarker (icon, tool, summary, status; the row is the
disclosure for its input and output), ReasoningMarker ("Thought about this"), WorkingMarker
(the live "Working…" line), StepsMarker (a session's steps with their state) and InlineDiff
(a numbered unified diff for an Edit's detail).

[`components/shapes/chat-threads/markers.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/markers.tsx) · code · 17632 bytes

### message.tsx

Message rows: ChatMessageRow (avatar plus the turn's parts; the person's side reverses to
the right), TurnHeader (who answered, with model and time) and ChatNote (the muted line a
thread shows when there is nothing to render yet). Server-safe. Notable exports:
`ChatMessageRow`, `TurnHeader`, `ChatNote`, `ChatMessageRowProps`, `TurnHeaderProps`,
`ChatNoteProps`.

[`components/shapes/chat-threads/message.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/message.tsx) · code · 3447 bytes

### prompt-turns.tsx

PromptTurnList: what the person typed, one exchange per turn, with a Turn badge, the time
and how many replies and tool calls followed before the next prompt. Includes the notes the
session view shows instead of a list: loading, unsupported runtime and no transcript.
Server-safe. Notable exports: `PromptTurnList`, `PromptTurn`, `PromptTurnState`,
`PromptTurnListProps`.

[`components/shapes/chat-threads/prompt-turns.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/prompt-turns.tsx) · code · 4289 bytes

### prose.tsx

Agent and person prose for chat: a tiny, deterministic inline renderer for `code` and
**bold** (enough for transcript text, no markdown dependency) plus ChatProse, the agent's
paragraph block with an optional streaming caret. Server-safe. Notable exports:
`renderInline`, `ChatProse`, `ChatProseProps`.

[`components/shapes/chat-threads/prose.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/prose.tsx) · code · 2269 bytes

### transcript.tsx

ChatTranscript: renders a list of transcript items as turns. The person's prompt is an ink
bubble on the right with their avatar; everything the agent does until the next prompt is
one turn on the left under the runtime's avatar, interleaved in the order it happened
(prose, tool calls, steps, files, diffs, approvals, errors) because the order is the story.
Data in, markup out: callers map their own records into TranscriptItem.

[`components/shapes/chat-threads/transcript.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/transcript.tsx) · code · 8334 bytes

### use-timers.ts

Demo timers that die with the component: schedule(fn, ms) from event handlers, never from
render. Also a reduced-motion check for handlers that would otherwise animate. Notable
exports: `useTimers`, `reducedMotion`.

[`components/shapes/chat-threads/use-timers.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/chat-threads/use-timers.ts) · code · 905 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
