<!-- quirq-wiki-generated repo=ui dir=src/docs -->

# ui / src/docs

Source: [src/docs](https://github.com/quirq-ai/ui/tree/main/src/docs) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### catalog-index-page.tsx

/** The catalog fields the index table needs. */ export type CatalogRow = Pick Notable
exports: `CatalogIndexPage`, `CatalogRow`. Marked `'use client'` so it runs in the browser.

[`src/docs/catalog-index-page.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/catalog-index-page.tsx) · code · 4411 bytes

### catalog-page.tsx

const BASE_DEPS = [ "@astryxdesign/core", "@astryxdesign/theme-neutral", "@stylexjs/stylex",
] Notable exports: `Page`, `CatalogPage`. Marked `'use client'` so it runs in the browser.

[`src/docs/catalog-page.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/catalog-page.tsx) · code · 6434 bytes

### catalog-routes.ts

/** Route segment per catalog kind: /docs/components, /docs/blocks, /docs/templates. */
export const KIND_ROUTES: Record = { component: "components", block: "blocks", template:
"templates", } Notable exports: `entryHref`, `previewHref`, `KIND_ROUTES`, `KIND_LABELS`.

[`src/docs/catalog-routes.ts`](https://github.com/quirq-ai/ui/blob/main/src/docs/catalog-routes.ts) · code · 629 bytes

### component-page.tsx

function InstallTabs({ item, source, }: Readonly) { const [tab, setTab] = useState("cli");
return ( Notable exports: `ComponentPage`. Marked `'use client'` so it runs in the browser.

[`src/docs/component-page.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/component-page.tsx) · code · 4867 bytes

### doc-loading.tsx

/** Fallback while a docs route resolves its params. */ export function DocLoading() {
return ( Notable exports: `DocLoading`.

[`src/docs/doc-loading.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/doc-loading.tsx) · code · 302 bytes

### doc-page.tsx

const outlinePanel: CSSProperties = { position: "sticky", top: "var(--spacing-6)",
alignSelf: "start", paddingBlockStart: "var(--spacing-8)", } Notable exports: `DocPage`,
`DocSection`, `ComponentPreview`, `DocDivider`. Marked `'use client'` so it runs in the
browser.

[`src/docs/doc-page.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/doc-page.tsx) · code · 3160 bytes

### docs-shell.tsx

import { SideNav, SideNavItem, SideNavSection, } from "@astryxdesign/core/SideNav"; const
KINDS = Object.keys(KIND_ROUTES) as CatalogKind[] Notable exports: `DocsShell`. Wired into a
Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`src/docs/docs-shell.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/docs-shell.tsx) · code · 3007 bytes

### featured.ts

Hand-written registry items with full docs pages (examples + prop tables). Plain data, so
server routes can list them; the live examples live in registry-items.tsx. Add an entry here
and in registry-items.tsx whenever you add a hand-written registry item. Notable exports:
`PropRow`, `FeaturedItem`, `FEATURED`.

[`src/docs/featured.ts`](https://github.com/quirq-ai/ui/blob/main/src/docs/featured.ts) · code · 1163 bytes

### installation-page.tsx

import { REGISTRY_NAMESPACE, REGISTRY_URL, registryItemUrl, } from "./registry-config"
Notable exports: `InstallationPage`, `RootLayout`, `Page`. Marked `'use client'` so it runs
in the browser.

[`src/docs/installation-page.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/installation-page.tsx) · code · 9291 bytes

### introduction-page.tsx

const OUTLINE: OutlineItem[] = [ { id: "quick-start", label: "Quick start", level: 2 }, {
id: "how-it-works", label: "How it works", level: 2 }, { id: "catalog", label: "What's
included", level: 2 }, { id: "components", label: "Featured", level: 2 }, ] Notable exports:
`IntroductionPage`. Marked `'use client'` so it runs in the browser.

[`src/docs/introduction-page.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/introduction-page.tsx) · code · 4504 bytes

### package-manager.tsx

const PACKAGE_MANAGERS = ["npm", "pnpm", "yarn", "bun"] as const; type PackageManager =
(typeof PACKAGE_MANAGERS)[number] Notable exports: `PackageManagerProvider`, `CommandBlock`.
Marked `'use client'` so it runs in the browser.

[`src/docs/package-manager.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/package-manager.tsx) · code · 2002 bytes

### preview-renderer.tsx

import { type ComponentType, type LazyExoticComponent, lazy, Suspense, useSyncExternalStore,
} from "react"; const lazyPreviews = new Map>() Notable exports: `PreviewLoading`,
`PreviewRenderer`. Marked `'use client'` so it runs in the browser.

[`src/docs/preview-renderer.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/preview-renderer.tsx) · code · 1443 bytes

### props-table.tsx

type Row = PropRow & Record Notable exports: `PropsTable`. Marked `'use client'` so it runs
in the browser.

[`src/docs/props-table.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/props-table.tsx) · code · 1283 bytes

### registry-config.ts

Optional namespace consumers can register in components.json for short `add` commands.
Notable exports: `registryItemUrl`, `REGISTRY_NAMESPACE`, `REGISTRY_URL`.

[`src/docs/registry-config.ts`](https://github.com/quirq-ai/ui/blob/main/src/docs/registry-config.ts) · code · 540 bytes

### registry-items.tsx

Live examples + API docs for the hand-written registry items listed in featured.ts. Notable
exports: `ButtonDemo`, `MetricStripDemo`, `Example`, `RegistryItemDoc`, `REGISTRY_ITEMS`.
Marked `'use client'` so it runs in the browser.

[`src/docs/registry-items.tsx`](https://github.com/quirq-ai/ui/blob/main/src/docs/registry-items.tsx) · code · 11924 bytes

_Generated 2026-10-23 10:36 UTC from `main`._
