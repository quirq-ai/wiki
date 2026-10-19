<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/features/alerts -->

# argus-code / dashboard/src/features/alerts

Source: [dashboard/src/features/alerts](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/features/alerts) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AlertsPage.tsx

const KIND = { info: 'info', warning: 'warn', critical: 'crit' } as const; const RAIL = {
info: 'shadow-[inset_3px_0_0_var(--color-s1)]', warning: 'shadow-[inset_3px_0_0_var(--color-
warn)]', critical: 'shadow-[inset_3px_0_0_var(--color-crit)]' } as const; type Filter =
'unseen' | 'all' | 'warning' | 'critical'; const Code = ({ children }: { children: string
Notable exports: `AlertsPage`.

[`dashboard/src/features/alerts/AlertsPage.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/alerts/AlertsPage.tsx) · code · 5906 bytes

_Generated 2026-10-19 11:22 UTC from `main`._
