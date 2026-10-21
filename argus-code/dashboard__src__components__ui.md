<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/components/ui -->

# argus-code / dashboard/src/components/ui

Source: [dashboard/src/components/ui](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/components/ui) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Button.tsx

const V = { default: 'bg-bg-2 border-line-2 text-ink-0 hover:border-accent', primary: 'bg-
accent border-accent text-[#1a0f06]', ghost: 'bg-transparent border-line-2 text-ink-0
hover:border-accent', danger: 'bg-transparent border-crit text-crit-ink', } as const Notable
exports: `Button`.

[`dashboard/src/components/ui/Button.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Button.tsx) · code · 783 bytes

### Chip.tsx

export function Chip({ active = false, onClick, children, caret = false }: { active?:
boolean; onClick?: () => void; children: ReactNode; caret?: boolean }) { return ( Notable
exports: `Chip`.

[`dashboard/src/components/ui/Chip.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Chip.tsx) · code · 642 bytes

### CopyId.tsx

/** Short id chip that copies the session's native id (usable with the agent's resume
command). */ export function CopyId({ value, chars = 8 }: { value: string; chars?: number })
{ const [done, setDone] = useState(false); const bare = value.includes(':') ?
value.slice(value.indexOf(':') + 1) : value; const copy = async () => { try { await
navigator.clipboard Notable exports: `CopyId`.

[`dashboard/src/components/ui/CopyId.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/CopyId.tsx) · code · 1275 bytes

### DataTable.tsx

export type ColMeta = { right?: boolean } Notable exports: `DataTable`, `ColMeta`.

[`dashboard/src/components/ui/DataTable.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/DataTable.tsx) · code · 4463 bytes

### EmptyState.tsx

export const EmptyState = ({ title, hint }: { title: string; hint?: string }) => ( Notable
exports: `EmptyState`.

[`dashboard/src/components/ui/EmptyState.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/EmptyState.tsx) · code · 253 bytes

### ErrorPanel.tsx

export const ErrorPanel = ({ error }: { error: unknown }) => ( Notable exports:
`ErrorPanel`.

[`dashboard/src/components/ui/ErrorPanel.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/ErrorPanel.tsx) · code · 302 bytes

### Icon.tsx

const P = { grid: 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z', bell: 'M18 8a6 6 0 0
0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0', list: 'M4 6h16M4 12h16M4 18h10',
wrench: 'M14.7 6.3a4 4 0 0 0 5 5l-8.4 8.4a2 2 0 0 1-2.8-2.8l8.4-8.4M9 4l2 2M4 9l2 2',
layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5', trend: 'M3 17l6-6 4 4 8-8M15 7h6v6', search
Notable exports: `Icon`, `IconName`.

[`dashboard/src/components/ui/Icon.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Icon.tsx) · code · 1641 bytes

### Kbd.tsx

export const Kbd = ({ children }: { children: string }) => ( {children} ) Notable exports:
`Kbd`.

[`dashboard/src/components/ui/Kbd.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Kbd.tsx) · code · 170 bytes

### Panel.tsx

export function Panel({ title, sub, right, children, className = '', padded = true }: {
title?: string; sub?: string; right?: ReactNode; children: ReactNode; className?: string;
padded?: boolean; }) { return ( Notable exports: `Panel`.

[`dashboard/src/components/ui/Panel.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Panel.tsx) · code · 903 bytes

### Pill.test.tsx

it('status pills always carry an icon and a text label', () => { for (const kind of ['warn',
'crit', 'info', 'good'] as const) { const { unmount } = render(LABEL); const el =
screen.getByText('LABEL').closest('span')!; expect(el.querySelector('svg')).not.toBeNull();
unmount(); } }) Automated test file.

[`dashboard/src/components/ui/Pill.test.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Pill.test.tsx) · code · 418 bytes

### Pill.tsx

const STYLE = { warn: 'text-warn bg-warn/10 border-warn/25', crit: 'text-crit-ink bg-crit/12
border-crit/30', info: 'text-s1 bg-s1/12 border-s1/30', good: 'text-good bg-good/12 border-
good/30', mute: 'text-ink-1 bg-bg-3 border-line-2', } as const; const ICON: Partial> = {
warn: 'warn', crit: 'x', info: 'info', good: 'check' } Notable exports: `Pill`, `PillKind`.

[`dashboard/src/components/ui/Pill.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Pill.tsx) · code · 1040 bytes

### Seg.test.tsx

it('Seg marks the selected tab and reports changes', () => { const onChange = vi.fn();
render(); expect(screen.getByRole('tab', { name: '7d' })).toHaveAttribute('aria-selected',
'true'); fireEvent.click(screen.getByRole('tab', { name: '30d' }));
expect(onChange).toHaveBeenCalledWith('30d'); }) Automated test file.

[`dashboard/src/components/ui/Seg.test.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Seg.test.tsx) · code · 515 bytes

### Seg.tsx

export function Seg({ options, value, onChange }: { options: { value: T; label: string }[];
value: T; onChange: (v: T) => void }) { return ( Notable exports: `Seg`.

[`dashboard/src/components/ui/Seg.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Seg.tsx) · code · 691 bytes

### Skeleton.tsx

export const Skeleton = ({ w = '4em', h = '1em' }: { w?: string; h?: string }) => ( Notable
exports: `Skeleton`.

[`dashboard/src/components/ui/Skeleton.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Skeleton.tsx) · code · 205 bytes

### Tile.test.tsx

it('renders value and a signed percentage delta with an arrow', () => { render();
expect(screen.getByText('$573')).toBeInTheDocument(); const d = screen.getByTestId('delta');
expect(d).toHaveTextContent('+12%'); expect(d.querySelector('svg')).not.toBeNull();
expect(d.className).toMatch(/crit/); }) Automated test file.

[`dashboard/src/components/ui/Tile.test.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Tile.test.tsx) · code · 1397 bytes

### Tile.tsx

export function Tile({ label, value, delta, upIsBad = false, sub, note, tone = 'default',
fmt }: { label: string; value: string; delta?: Delta | null; upIsBad?: boolean; sub?:
string; note?: string; tone?: 'default' | 'crit'; fmt?: (d: Delta) => string; }) { const t =
delta ? deltaTone(delta, upIsBad) : 'neutral'; const cls = t === 'bad' ? 'text-crit-ink'
Notable exports: `Tile`.

[`dashboard/src/components/ui/Tile.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/ui/Tile.tsx) · code · 1851 bytes

_Generated 2026-10-21 10:42 UTC from `main`._
