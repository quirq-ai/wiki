<!-- quirq-wiki-generated repo=space-hub dir=app/src/components -->

# space-hub / app/src/components

Source: [app/src/components](https://github.com/quirq-ai/space-hub/tree/main/app/src/components) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### content-view.tsx

type ObjectValue = Record; type Navigate = (path: string) => void; const object = (value:
unknown): value is ObjectValue => value !== null && typeof value === "object" &&
!Array.isArray(value); const string = (value: unknown) => typeof value === "string" ? value
: "" Notable exports: `Markdown`, `FileContent`, `isConversation`.

[`app/src/components/content-view.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/content-view.tsx) · code · 13696 bytes

### file-preview.tsx

/** * A file opened from a conversation, shown over it as open-chat does, so the * thread,
the draft and the scroll stay where they were. Links inside it * stack up (Back returns),
Escape or the backdrop closes it, and the expand * button opens the file as a page. A folder
opens as a page. */ export function FilePreview({ place, paths, branch, onOpen, onBack
Notable exports: `FilePreview`.

[`app/src/components/file-preview.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/file-preview.tsx) · code · 2513 bytes

### theme-picker.tsx

function currentPreference(): ThemePreference { return
themePreference(document.documentElement.dataset.themePreference); } Notable exports:
`ThemePicker`.

[`app/src/components/theme-picker.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/theme-picker.tsx) · code · 3640 bytes

### worker-card.tsx

const tone = (status: string) => (isRunning(status) ? "run" : status === "done" ? "done" :
status === "failed" ? "fail" : "stop") Notable exports: `WorkerCard`.

[`app/src/components/worker-card.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/worker-card.tsx) · code · 7078 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
