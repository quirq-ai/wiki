<!-- quirq-wiki-generated repo=quirq_ai dir=app/demo -->

# quirq_ai / app/demo

Source: [app/demo](https://github.com/quirq-ai/quirq_ai/tree/main/app/demo) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### mint.tsx

import { ActionLink, Beat, Marker, Reveal, Rise, TextScrim, cn, } from
"@/components/ui/primitives"; import { INITIAL_FILES, applyTodo, evaluateChecks,
snapshotFiles, todoCheck, } from "@/lib/quirq/workspace.mjs"; /** * Mint a quirq the way you
tick off a todo. * Write the item, say what would make it done, run it. The snapshot is
taken * at the moment the w Notable exports: `MintHero`, `Mint`.

[`app/demo/mint.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/demo/mint.tsx) · code · 25665 bytes

### page.tsx

export const metadata: Metadata = { title: "Mint your first quirq", description: "Write a
todo, say what would make it done, run it. The snapshot is taken when the worker reports
done, and the meter decides what it was worth. Every number is computed in your browser.", }
Notable exports: `Page`, `metadata`.

[`app/demo/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/demo/page.tsx) · code · 1416 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
