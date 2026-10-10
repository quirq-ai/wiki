<!-- quirq-wiki-generated repo=setup dir=components/ui -->

# setup / components/ui

Source: [components/ui](https://github.com/quirq-ai/setup/tree/main/components/ui) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### LICENSE

License text (The files in this folder are copied from shadcn/ui). Governs use,
modification, and distribution of this repository. Read the full file in the source tree
before depending on the project in a product or redistribution.

[`components/ui/LICENSE`](https://github.com/quirq-ai/setup/blob/main/components/ui/LICENSE) · other · 1549 bytes

### alert.tsx

import * as React from "react" import { cva, type VariantProps } from "class-variance-
authority" import { cn } from "@/lib/utils" Notable exports: `Alert`, `AlertTitle`,
`AlertDescription`.

[`components/ui/alert.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/alert.tsx) · code · 1613 bytes

### badge.tsx

const badgeVariants = cva( "inline-flex w-fit shrink-0 items-center justify-center gap-1
overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium
whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-
visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-
invalid:ring-destruct Notable exports: `Badge`, `badgeVariants`.

[`components/ui/badge.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/badge.tsx) · code · 1778 bytes

### button.tsx

const buttonVariants = cva( "inline-flex shrink-0 items-center justify-center gap-2 rounded-
md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-
ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none
disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:ar
Notable exports: `Button`, `buttonVariants`.

[`components/ui/button.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/button.tsx) · code · 2395 bytes

### card.tsx

import * as React from "react" import { cn } from "@/lib/utils" Notable exports: `Card`,
`CardHeader`, `CardFooter`, `CardTitle`, `CardAction`, `CardDescription`, `CardContent`.

[`components/ui/card.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/card.tsx) · code · 1986 bytes

### checkbox.tsx

"use client" Notable exports: `Checkbox`. Marked `'use client'` so it runs in the browser.

[`components/ui/checkbox.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/checkbox.tsx) · code · 1213 bytes

### input.tsx

import * as React from "react" import { cn } from "@/lib/utils" Notable exports: `Input`.

[`components/ui/input.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/input.tsx) · code · 961 bytes

### label.tsx

"use client" Notable exports: `Label`. Marked `'use client'` so it runs in the browser.

[`components/ui/label.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/label.tsx) · code · 605 bytes

### native-select.tsx

import * as React from "react" import { cn } from "@/lib/utils" import { ChevronDownIcon }
from "lucide-react" Notable exports: `NativeSelect`, `NativeSelectOptGroup`,
`NativeSelectOption`.

[`components/ui/native-select.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/native-select.tsx) · code · 1994 bytes

### radio-group.tsx

"use client" Notable exports: `RadioGroup`, `RadioGroupItem`. Marked `'use client'` so it
runs in the browser.

[`components/ui/radio-group.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/radio-group.tsx) · code · 1459 bytes

### separator.tsx

"use client" Notable exports: `Separator`. Marked `'use client'` so it runs in the browser.

[`components/ui/separator.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/separator.tsx) · code · 693 bytes

### spinner.tsx

import { cn } from "@/lib/utils" import { Loader2Icon } from "lucide-react" Notable exports:
`Spinner`.

[`components/ui/spinner.tsx`](https://github.com/quirq-ai/setup/blob/main/components/ui/spinner.tsx) · code · 330 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
