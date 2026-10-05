<!-- quirq-wiki-generated repo=quitter dir=src/ui/components -->

# quitter / src/ui/components

Source: [src/ui/components](https://github.com/quirq-ai/quitter/tree/main/src/ui/components) in [quitter](https://github.com/quirq-ai/quitter).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ActivityCard.tsx

export const compactNumber = (n: number) => Intl.NumberFormat('en', { notation: 'compact',
maximumFractionDigits: 1 }).format(n); export function relativeTime(value: string) { const
minutes = Math.max(0, Math.floor((Date.now() - Date.parse(value)) / 60_000)); return minutes
void; notify: (message: string) => void; act: (promise: Promise, success?: string) =>
Notable exports: `relativeTime`, `ActivityCard`, `compactNumber`, `ActivityActions`.

[`src/ui/components/ActivityCard.tsx`](https://github.com/quirq-ai/quitter/blob/main/src/ui/components/ActivityCard.tsx) · code · 6127 bytes

### ActivityDiscovery.tsx

export function ActivityDiscovery({ actions }: { actions: ActivityActions }) { const {
engine, snapshot } = useQuitterEngine(); const [search, setSearch] = useState(''); const
suggestions = engine.getSuggestedActors().slice(0, 3); return { event.preventDefault(); if
(search.trim()) actions.navigate(/search/${encodeURIComponent(search.trim())}); }}>
setSearch Notable exports: `ActivityDiscovery`.

[`src/ui/components/ActivityDiscovery.tsx`](https://github.com/quirq-ai/quitter/blob/main/src/ui/components/ActivityDiscovery.tsx) · code · 2640 bytes

### ActivityPresentation.tsx

export function ActivityPresentation({ design = DEFAULT_POST_DESIGN, children }: { design?:
PostDesign; children: ReactNode }) { return {children}; } Notable exports:
`ActivityPresentation`, `ActivityBody`.

[`src/ui/components/ActivityPresentation.tsx`](https://github.com/quirq-ai/quitter/blob/main/src/ui/components/ActivityPresentation.tsx) · code · 2954 bytes

### Avatar.tsx

export function Avatar({ user, size = 44 }: { user: Actor; size?: number }) { return
{user.initials}; } Notable exports: `Avatar`.

[`src/ui/components/Avatar.tsx`](https://github.com/quirq-ai/quitter/blob/main/src/ui/components/Avatar.tsx) · code · 291 bytes

### Icon.tsx

const paths = { home: 'm3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z', search:
'm21 21-5-5M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z', hashtag: 'm5 9 15 0M4 15h15M11
3 7 21M17 3l-4 18', bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4', mail:
'M3 5h18v14H3ZM3 6l9 7 9-7', bookmark: 'M6 3h12v18l-6-4-6 4Z', list: 'M8 6h13M8 12h13M
Notable exports: `Icon`, `IconName`.

[`src/ui/components/Icon.tsx`](https://github.com/quirq-ai/quitter/blob/main/src/ui/components/Icon.tsx) · code · 2694 bytes

### PostComposer.tsx

export function PostComposer({ actions, replyTo, onPosted, expanded = false }: { actions:
ActivityActions; replyTo?: string; onPosted?: () => void; expanded?: boolean }) { const {
engine, snapshot } = useQuitterEngine(); const [text, setText] = useState(''); const [image,
setImage] = useState(); const [emojiOpen, setEmojiOpen] = useState(false); const [poll
Notable exports: `PostComposer`.

[`src/ui/components/PostComposer.tsx`](https://github.com/quirq-ai/quitter/blob/main/src/ui/components/PostComposer.tsx) · code · 6002 bytes

### PostDesignEditor.tsx

const layouts = [ { value: 'plain', label: 'Plain', description: 'The familiar feed layout.'
}, { value: 'card', label: 'Card', description: 'A frame around the update.' }, { value:
'compact', label: 'Compact', description: 'Less space, all the context.' }, ] as const;
const accents = ['blue', 'mint', 'violet'] as const Notable exports: `PostDesignEditor`.

[`src/ui/components/PostDesignEditor.tsx`](https://github.com/quirq-ai/quitter/blob/main/src/ui/components/PostDesignEditor.tsx) · code · 4728 bytes

### QuitterNavigation.tsx

export const navigation: { path: string; label: string; icon: IconName }[] = [ { path:
'/home', label: 'Activity', icon: 'home' }, { path: '/explore', label: 'Explore', icon:
'hashtag' }, { path: '/notifications', label: 'Attention', icon: 'bell' }, { path:
'/messages', label: 'Threads', icon: 'mail' }, { path: '/bookmarks', label: 'Saved', icon:
'bookmark' Notable exports: `QuitterNavigation`, `navigation`.

[`src/ui/components/QuitterNavigation.tsx`](https://github.com/quirq-ai/quitter/blob/main/src/ui/components/QuitterNavigation.tsx) · code · 4521 bytes

### Screens.tsx

export function EmptyState({ icon, title, text, action }: { icon: IconName; title: string;
text: string; action?: { label: string; onClick: () => void } }) { return
{title}{text}{action && {action.label}}; } export function ActivityFeed({ query, actions,
emptyTitle = 'A fresh start', emptyText = 'There are no posts here yet.' }: { query:
FeedQuery; actions Notable exports: `EmptyState`, `ActivityFeed`, `ActivityFeedScreen`

[`src/ui/components/Screens.tsx`](https://github.com/quirq-ai/quitter/blob/main/src/ui/components/Screens.tsx) · code · 17195 bytes

### Tabs.tsx

export function Tabs({ options, value, onChange, label, panelId }: { options: readonly {
value: T; label: string }[]; value: T; onChange: (value: T) => void; label: string; panelId:
string; }) { const group = useRef(null); return { if (!['ArrowLeft', 'ArrowRight', 'Home',
'End'].includes(event.key)) return; event.preventDefault(); const current = options.fin
Notable exports: `Tabs`.

[`src/ui/components/Tabs.tsx`](https://github.com/quirq-ai/quitter/blob/main/src/ui/components/Tabs.tsx) · code · 1210 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
