<!-- quirq-wiki-generated repo=docs dir=src/app/templates -->

# docs / src/app/templates

Source: [src/app/templates](https://github.com/quirq-ai/docs/tree/main/src/app/templates) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### layout.tsx

import { AISearch, AISearchPanel, AISearchTrigger, } from "@/components/ai/search"; export
default function Layout({ children }: { children: React.ReactNode }) { const sidebarLinks:
LinkItemType[] = socialLinks.map((l) => ({ ...l, on: "menu" as const, })) Notable exports:
`Layout`.

[`src/app/templates/layout.tsx`](https://github.com/quirq-ai/docs/blob/main/src/app/templates/layout.tsx) · code · 1433 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
