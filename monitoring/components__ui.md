<!-- quirq-wiki-generated repo=monitoring dir=components/ui -->

# monitoring / components/ui

Source: [components/ui](https://github.com/quirq-ai/monitoring/tree/main/components/ui) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### LICENSE

License text (The files in this folder are copied from shadcn/ui). Governs use,
modification, and distribution of this repository. Read the full file in the source tree
before depending on the project in a product or redistribution.

[`components/ui/LICENSE`](https://github.com/quirq-ai/monitoring/blob/main/components/ui/LICENSE) · other · 1492 bytes

### alert.tsx

import * as React from "react" import { cva, type VariantProps } from "class-variance-
authority" import { cn } from "@/lib/utils" Notable exports: `Alert`, `AlertTitle`,
`AlertDescription`.

[`components/ui/alert.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/ui/alert.tsx) · code · 1613 bytes

### badge.tsx

const badgeVariants = cva( "inline-flex w-fit shrink-0 items-center justify-center gap-1
overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium
whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-
visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-
invalid:ring-destruct Notable exports: `Badge`, `badgeVariants`.

[`components/ui/badge.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/ui/badge.tsx) · code · 1778 bytes

### button.tsx

const buttonVariants = cva( "inline-flex shrink-0 items-center justify-center gap-2 rounded-
md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-
ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none
disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:ar
Notable exports: `Button`, `buttonVariants`.

[`components/ui/button.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/ui/button.tsx) · code · 2395 bytes

### card.tsx

import * as React from "react" import { cn } from "@/lib/utils" Notable exports: `Card`,
`CardHeader`, `CardFooter`, `CardTitle`, `CardAction`, `CardDescription`, `CardContent`.

[`components/ui/card.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/ui/card.tsx) · code · 1986 bytes

### collapsible.tsx

"use client" Notable exports: `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`.
Marked `'use client'` so it runs in the browser.

[`components/ui/collapsible.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/ui/collapsible.tsx) · code · 795 bytes

### separator.tsx

"use client" Notable exports: `Separator`. Marked `'use client'` so it runs in the browser.

[`components/ui/separator.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/ui/separator.tsx) · code · 693 bytes

### skeleton.tsx

import { cn } from "@/lib/utils" Notable exports: `Skeleton`.

[`components/ui/skeleton.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/ui/skeleton.tsx) · code · 276 bytes

### table.tsx

"use client" Notable exports: `Table`, `TableHeader`, `TableBody`, `TableFooter`,
`TableHead`, `TableRow`, `TableCell`, `TableCaption`. Marked `'use client'` so it runs in
the browser.

[`components/ui/table.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/ui/table.tsx) · code · 2477 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
