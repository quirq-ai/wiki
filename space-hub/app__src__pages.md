<!-- quirq-wiki-generated repo=space-hub dir=app/src/pages -->

# space-hub / app/src/pages

Source: [app/src/pages](https://github.com/quirq-ai/space-hub/tree/main/app/src/pages) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### chat.tsx

type Message = { id: string; role: string; author: string; content: string; links?: { label:
string; path: string }[]; time?: string; saving?: boolean }; type Conversation = { title?:
unknown; subtitle?: unknown; messages: Record[] } Notable exports: `ChatView`.

[`app/src/pages/chat.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/chat.tsx) · code · 6578 bytes

### code.tsx

const IMAGES = /\.(png|jpe?g|gif|webp)$/i; const href = (place: Place, tab: string, params:
Record) => placeUrl(place, hashOf(tab, params)) Notable exports: `CodeTab`, `CommitsTab`,
`CommitTab`, `BranchesTab`.

[`app/src/pages/code.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/code.tsx) · code · 14040 bytes

### common.tsx

export function PageHeader({ crumbs, title, subtitle, leading, actions, children }: {
crumbs?: { label: string; href: string }[]; title: ReactNode; subtitle?: ReactNode;
leading?: ReactNode; actions?: ReactNode; children?: ReactNode; }) { return {crumbs &&
crumbs.length > 0 && {crumbs.map((crumb, i) => {i > 0 && /}{crumb.label})}} Notable exports:
`PageHeader`, `Tabs`, `ActivityList`, `HereNow`, `People`, `Tab`.

[`app/src/pages/common.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/common.tsx) · code · 3820 bytes

### files.tsx

export const SECTION_ICONS = new Map([ ["chat", MessageCircle], ["activity", PanelsTopLeft],
["insights", Lightbulb], ["vision", SquareCheck], ["library", BookOpen], ["ideas",
Lightbulb], ["goals", SquareCheck], ["files", FolderOpen], ["apps", Shapes], ]); export
const SECTION_ORDER = ["chat", "activity", "insights", "vision", "library", "ideas",
"goals", "f Notable exports: `entryIcon`, `FilesTab`, `SECTION_ICONS`, `SECTION_ORDER`.

[`app/src/pages/files.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/files.tsx) · code · 4578 bytes

### home.tsx

export function HomePage({ view, me }: { view: View | undefined; me: string | null }) { if
(!view) return ; const spaces = [...view.snapshot.directory.entries].sort((a, b) =>
b.modifiedAt.localeCompare(a.modifiedAt)); const recent = view.meta.allProjects.slice(0, 8);
return New project : }> Push your first project Install the CLI with scripts/install-cli.sh
Notable exports: `HomePage`.

[`app/src/pages/home.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/home.tsx) · code · 3393 bytes

### project.tsx

type ProjectRoute = Extract Notable exports: `ProjectPage`.

[`app/src/pages/project.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/project.tsx) · code · 5616 bytes

### space.tsx

const KIND_ICON = { personal: , org: , agent: } as Record Notable exports: `SpacePage`.

[`app/src/pages/space.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/space.tsx) · code · 5348 bytes

_Generated 2026-10-29 11:52 UTC from `main`._
