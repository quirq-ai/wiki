<!-- quirq-wiki-generated repo=instants dir=components/search -->

# instants / components/search

Source: [components/search](https://github.com/quirq-ai/instants/tree/main/components/search) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### command-palette.tsx

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
} from "@/components/ui/command"; export type PaletteItem = { slug: string; title: string;
hook: string; topic: string; kind: string; tags: string[]; accent: string; } Notable
exports: `CommandPalette`, `PaletteItem`. Wired into a Next.js app (App Router or Next
APIs). Marked `'use client'` so it runs in the browser.

[`components/search/command-palette.tsx`](https://github.com/quirq-ai/instants/blob/main/components/search/command-palette.tsx) · code · 3616 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
