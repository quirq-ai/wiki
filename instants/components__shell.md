<!-- quirq-wiki-generated repo=instants dir=components/shell -->

# instants / components/shell

Source: [components/shell](https://github.com/quirq-ai/instants/tree/main/components/shell) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### app-shell.tsx

import { BarChart3, Clapperboard, FolderOpen, Home, LayoutGrid, Moon, Plus, Search, Shapes,
Sun, } from "lucide-react"; const NAV = [ { href: "/", label: "Feed", icon: Home }, { href:
"/library", label: "Library", icon: LayoutGrid }, { href: "/topics", label: "Topics", icon:
Shapes }, { href: "/videos", label: "Videos", icon: Clapperboard }, { href: "/insigh Notable
exports: `Logo`, `AppShell`. Wired into a Next.js app (App Router or Next APIs).

[`components/shell/app-shell.tsx`](https://github.com/quirq-ai/instants/blob/main/components/shell/app-shell.tsx) · code · 8382 bytes

### page-header.tsx

Consistent page title block used by every top-level screen. Notable exports: `PageHeader`,
`Page`.

[`components/shell/page-header.tsx`](https://github.com/quirq-ai/instants/blob/main/components/shell/page-header.tsx) · code · 1236 bytes

### relative-time.tsx

Renders an absolute date on the server and swaps in a relative label after mount, so SSR and
hydration always agree regardless of time zone or clock. Notable exports: `RelativeTime`.
Marked `'use client'` so it runs in the browser.

[`components/shell/relative-time.tsx`](https://github.com/quirq-ai/instants/blob/main/components/shell/relative-time.tsx) · code · 810 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
