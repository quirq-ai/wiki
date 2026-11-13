<!-- quirq-wiki-generated repo=space-hub dir=app/src/components -->

# space-hub / app/src/components

Source: [app/src/components](https://github.com/quirq-ai/space-hub/tree/main/app/src/components) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### claude-onboard.tsx

/** Claude's spark: rounded rays of uneven length around a center, in Claude's clay color.
*/ export function ClaudeSpark({ size = 18 }: { size?: number }) { const rays = [10, 7.4,
9.2, 6.8, 10, 7.8, 9, 6.6, 9.8, 7.2, 9.4, 7]; return {rays.map((length, i) => )} ; } Notable
exports: `ClaudeSpark`, `ClaudeOnboard`.

[`app/src/components/claude-onboard.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/claude-onboard.tsx) · code · 2167 bytes

### content-view.tsx

type ObjectValue = Record; type Navigate = (path: string) => void; const object = (value:
unknown): value is ObjectValue => value !== null && typeof value === "object" &&
!Array.isArray(value); const string = (value: unknown) => typeof value === "string" ? value
: "" Notable exports: `MarkdownMedia`, `Markdown`, `FileContent`, `RawFiles`, `isHtml`,
`isConversation`.

[`app/src/components/content-view.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/content-view.tsx) · code · 16723 bytes

### file-preview.tsx

/** * A file opened from a conversation, shown over it as open-chat does, so the * thread,
the draft and the scroll stay where they were. Links inside it * stack up (Back returns),
Escape or the backdrop closes it, and the expand * button opens the file as a page. A folder
opens as a page. */ export function FilePreview({ place, paths, branch, onOpen, onBack
Notable exports: `FilePreview`.

[`app/src/components/file-preview.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/file-preview.tsx) · code · 2513 bytes

### mermaid-view.tsx

type MermaidApi = typeof import("mermaid").default Notable exports: `MermaidDiagram`.

[`app/src/components/mermaid-view.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/mermaid-view.tsx) · code · 3579 bytes

### slides.tsx

/** * A post's slides as Instants draws them: 4:5 cards on a dark ground tinted * by the
post's accent, sized by the card's width (cqw) so the same slide * reads the same in a feed
card and on the post page. */ type Raw = (path: string) => string Notable exports:
`SlideCard`, `Carousel`.

[`app/src/components/slides.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/slides.tsx) · code · 12631 bytes

### theme-picker.tsx

function currentPreference(): ThemePreference { return
themePreference(document.documentElement.dataset.themePreference); } Notable exports:
`selectTheme`, `ThemeChoices`.

[`app/src/components/theme-picker.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/theme-picker.tsx) · code · 2667 bytes

### worker-card.tsx

const tone = (status: string, state: WorkerState) => (state === "gone" || state ===
"disconnected" ? "quiet" : isRunning(status) ? "run" : status === "done" ? "done" : status
=== "failed" ? "fail" : "stop"); const STATE_ICON = { gone: CircleSlash, disconnected:
Unplug, unreachable: WifiOff } as const; A result taller than this is folded, with Show
more. cons Notable exports: `WorkerCard`.

[`app/src/components/worker-card.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/worker-card.tsx) · code · 10684 bytes

_Generated 2026-11-13 13:30 UTC from `main`._
