<!-- quirq-wiki-generated repo=space-hub dir=app/src/pages -->

# space-hub / app/src/pages

Source: [app/src/pages](https://github.com/quirq-ai/space-hub/tree/main/app/src/pages) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### channels.tsx

const filesHref = (place: Place, path: string, as?: string) => placeUrl(place,
hashOf("files", { path, as })) Notable exports: `ChannelList`, `ChannelPage`.

[`app/src/pages/channels.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/channels.tsx) · code · 14374 bytes

### chat.tsx

type Message = { id: string; role: string; author: string; content: string; links?: { label:
string; path: string }[]; time?: string; saving?: boolean }; type Conversation = { title?:
unknown; subtitle?: unknown; messages: Record[] } Notable exports: `ChatView`.

[`app/src/pages/chat.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/chat.tsx) · code · 10845 bytes

### code.tsx

const IMAGES = /\.(png|jpe?g|gif|webp)$/i; const href = (place: Place, tab: string, params:
Record) => placeUrl(place, hashOf(tab, params)) Notable exports: `CodeTab`, `CommitsTab`,
`CommitTab`, `BranchesTab`.

[`app/src/pages/code.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/code.tsx) · code · 14127 bytes

### common.tsx

export function PageHeader({ crumbs, title, subtitle, leading, actions, children }: {
crumbs?: { label: string; href: string }[]; title: ReactNode; subtitle?: ReactNode;
leading?: ReactNode; actions?: ReactNode; children?: ReactNode; }) { return {crumbs &&
crumbs.length > 0 && {crumbs.map((crumb, i) => {i > 0 && /}{crumb.label})}} Notable exports:
`PageHeader`, `Tabs`, `ActivityList`, `HereNow`, `People`, `Tab`.

[`app/src/pages/common.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/common.tsx) · code · 7531 bytes

### deps.tsx

const placeOf = (fullName: string): Place => { const [space, project] = fullName.split("/");
return { space, project }; }; const shortUrl = (url: string) =>
url.replace(/^[a-z+]+:\/\//i, "").replace(/^git@([^:]+):/, "$1/").replace(/\.git\/?$/, "")
Notable exports: `DepsTab`.

[`app/src/pages/deps.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/deps.tsx) · code · 4519 bytes

### files.tsx

export const SECTION_ICONS = new Map([ ["chat", MessageCircle], ["activity", PanelsTopLeft],
["insights", Lightbulb], ["vision", SquareCheck], ["library", BookOpen], ["ideas",
Lightbulb], ["goals", SquareCheck], ["files", FolderOpen], ["apps", Shapes], ]); export
const SECTION_ORDER = ["chat", "activity", "insights", "vision", "library", "ideas",
"goals", "f Notable exports: `entryIcon`, `isChannel`, `FilesTab`, `SECTION_ICONS`

[`app/src/pages/files.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/files.tsx) · code · 9849 bytes

### home.tsx

export function HomePage({ view, me, activityOpen, onActivity }: { view: View | undefined;
me: string | null; activityOpen: boolean; onActivity: () => void }) { const activity =
Activity; if (!view) return ; const spaces = [...view.snapshot.directory.entries].sort((a,
b) => b.modifiedAt.localeCompare(a.modifiedAt)); const recent = view.meta.allProjects.slice
Notable exports: `HomePage`, `ActivityFeed`.

[`app/src/pages/home.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/home.tsx) · code · 4293 bytes

### project.tsx

type ProjectRoute = Extract Notable exports: `ProjectPage`.

[`app/src/pages/project.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/project.tsx) · code · 6582 bytes

### space.tsx

const KIND_ICON = { personal: , org: , agent: } as Record Notable exports: `SpacePage`.

[`app/src/pages/space.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/space.tsx) · code · 8604 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
