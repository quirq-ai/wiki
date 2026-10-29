<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/app/shell -->

# argus-code / dashboard/src/app/shell

Source: [dashboard/src/app/shell](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/app/shell) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### CommandPalette.test.tsx

const nav = vi.fn(); vi.mock('@tanstack/react-router', () => ({ useNavigate: () => nav }));
vi.mock('@/lib/api/hooks', () => ({ useSessions: () => ({ data: [{ id: 'claude_code:abc',
project_path: 'c:/proj/argus', primary_model: 'claude-opus-4-8', started_at:
'2026-08-20T01:00:00' }] }), })) Automated test file.

[`dashboard/src/app/shell/CommandPalette.test.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/app/shell/CommandPalette.test.tsx) · code · 735 bytes

### CommandPalette.tsx

const PAGES = [ ['Overview', '/'], ['Alerts', '/alerts'], ['Sessions', '/sessions'],
['Tools', '/tools'], ['Models', '/models'], ['Trends', '/trends'], ['Transcripts',
'/search'], ['Settings', '/settings'], ] as const; const HEADING = '[&_[cmdk-group-
heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.12em] [&_[cmdk-group-
heading]]:text-ink-2 [&_[cmdk Notable exports: `CommandPalette`.

[`dashboard/src/app/shell/CommandPalette.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/app/shell/CommandPalette.tsx) · code · 3079 bytes

### Shell.tsx

export function Shell({ children }: { children: ReactNode }) { return ( Notable exports:
`Shell`.

[`dashboard/src/app/shell/Shell.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/app/shell/Shell.tsx) · code · 402 bytes

### Sidebar.test.tsx

vi.mock('@tanstack/react-router', () => ({ Link: (p: { to: string; children:
React.ReactNode; 'data-active'?: boolean }) => ( {p.children} ), useRouterState: () =>
'/sessions', })); vi.mock('@/lib/api/hooks', () => ({ useUnseenAlerts: () => ({ data: [{ id:
1 }] }), useIngestStatus: () => ({ data: { foregroundComplete: true, pending: 0, processed:
1, total: 1 Automated test file.

[`dashboard/src/app/shell/Sidebar.test.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/app/shell/Sidebar.test.tsx) · code · 968 bytes

### Sidebar.tsx

const GROUPS: { h: string; items: { to: string; label: string; icon: IconName }[] }[] = [ {
h: 'MONITOR', items: [{ to: '/', label: 'Overview', icon: 'grid' }, { to: '/alerts', label:
'Alerts', icon: 'bell' }] }, { h: 'ANALYZE', items: [ { to: '/sessions', label: 'Sessions',
icon: 'list' }, { to: '/tools', label: 'Tools', icon: 'wrench' }, { to: '/models', l Notable
exports: `Sidebar`.

[`dashboard/src/app/shell/Sidebar.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/app/shell/Sidebar.tsx) · code · 3472 bytes

### TopBar.tsx

export type Crumb = string | { label: string; to: string } Notable exports: `TopBar`,
`Crumb`, `Page`.

[`dashboard/src/app/shell/TopBar.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/app/shell/TopBar.tsx) · code · 1236 bytes

_Generated 2026-10-29 11:51 UTC from `main`._
