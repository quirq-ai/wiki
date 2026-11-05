<!-- quirq-wiki-generated repo=space-hub dir=app/src/pages -->

# space-hub / app/src/pages

Source: [app/src/pages](https://github.com/quirq-ai/space-hub/tree/main/app/src/pages) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### channels.tsx

const filesHref = (place: Place, path: string, as?: string) => placeUrl(place,
hashOf("files", { path, as })) Notable exports: `ChannelList`, `ChannelPage`.

[`app/src/pages/channels.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/channels.tsx) · code · 13473 bytes

### chat-section.tsx

/** A place's one chat (lib/chat-place.ts): the conversation once it is there, else a button
that starts it. */ export function ChatSection({ place, kind = "", me, signIn, canStart }: {
place: Place; kind?: string; me: string | null; signIn: string; canStart: boolean }) { const
chat = chatPlace(place, kind)!; const live = useLive>(viewUrl(chat.place, chat.pa Notable
exports: `ChatSection`.

[`app/src/pages/chat-section.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/chat-section.tsx) · code · 3016 bytes

### chat.tsx

type Message = { id: string; role: string; author: string; content: string; links?: { label:
string; path: string }[]; time?: string; saving?: boolean }; type Conversation = { title?:
unknown; subtitle?: unknown; messages: Record[] } Notable exports: `ChatView`.

[`app/src/pages/chat.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/chat.tsx) · code · 11812 bytes

### code.tsx

const href = (place: Place, tab: string, params: Record) => placeUrl(place, hashOf(tab,
params)) Notable exports: `CodeTab`, `CommitsTab`, `CommitTab`, `BranchesTab`.

[`app/src/pages/code.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/code.tsx) · code · 14784 bytes

### common.tsx

export function PageHeader({ crumbs, title, subtitle, leading, actions, children }: {
crumbs?: { label: string; href: string }[]; title: ReactNode; subtitle?: ReactNode;
leading?: ReactNode; actions?: ReactNode; children?: ReactNode; }) { return {crumbs &&
crumbs.length > 0 && {crumbs.map((crumb, i) => {i > 0 && /}{crumb.label})}} Notable exports:
`PageHeader`, `Tabs`, `ActivityList`, `ActivityStream`, `ActivityPanel`, `LiveNow`

[`app/src/pages/common.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/common.tsx) · code · 13573 bytes

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

[`app/src/pages/files.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/files.tsx) · code · 10123 bytes

### goal.tsx

const SPACE_FILE = "SPACE.md"; const SHOWN = 6 Notable exports: `Meter`, `GoalPanel`,
`GoalChip`, `templateHref`.

[`app/src/pages/goal.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/goal.tsx) · code · 5691 bytes

### home.tsx

const kindOf = (detail = "") => detail.startsWith("org") ? "org" :
detail.startsWith("agent") ? "agent" : "personal" Notable exports: `HomePage`.

[`app/src/pages/home.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/home.tsx) · code · 9029 bytes

### instance-recovery.tsx

type Section = "overview" | "backups" | "restore"; const messageOf = (error: unknown) =>
error instanceof Error ? error.message : "The full-instance recovery request could not be
completed."; function commandOf(build: () => string) { try { return build(); } catch {
return ""; } } const iso = (at: number) => new Date(at).toISOString(); const took = (ms:
numbe Notable exports: `InstanceRecoveryPage`, `SubhubConnectionCard`

[`app/src/pages/instance-recovery.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/instance-recovery.tsx) · code · 21704 bytes

### project.tsx

type ProjectRoute = Extract Notable exports: `ProjectPage`.

[`app/src/pages/project.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/project.tsx) · code · 8017 bytes

### runners.tsx

type MyWorker = { taskId: string; runnerId: string; title: string; status: string; space:
string; project: string; updatedAt: string } Notable exports: `RunnersSection`.

[`app/src/pages/runners.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/runners.tsx) · code · 7702 bytes

### settings.tsx

export function SettingsPage({ onConnectionState, signedIn = false }: { onConnectionState?:
(state: "live" | "offline" | "loading") => void; signedIn?: boolean }) { return }
title="Settings" subtitle="Manage this Spacehub instance." /> {signedIn && } Notable
exports: `SettingsPage`.

[`app/src/pages/settings.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/settings.tsx) · code · 662 bytes

### space.tsx

const KIND_ICON = { personal: , org: , agent: } as Record Notable exports: `SpacePage`,
`AgentList`.

[`app/src/pages/space.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/space.tsx) · code · 17425 bytes

### subhub.tsx

/** What a connected sub-hub says about its storage right now (instanceruntime.ts answers
it). */ type Storage = { name: string; keep: number; intervalSeconds: number; snapshots:
InstanceSnapshot[]; bytes: number; freeBytes: number }; type SubhubView = { connection:
InstanceConnection; live: Storage | null; error?: string }; type BackupFiles = { snapshot:
In Notable exports: `SubhubPage`.

[`app/src/pages/subhub.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/pages/subhub.tsx) · code · 6253 bytes

_Generated 2026-11-05 13:35 UTC from `main`._
