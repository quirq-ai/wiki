<!-- quirq-wiki-generated repo=quirq_ai dir=app/editor -->

# quirq_ai / app/editor

Source: [app/editor](https://github.com/quirq-ai/quirq_ai/tree/main/app/editor) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### editor.tsx

import { KEYFRAMES, getResolvedLeaves, overrideLeaves, type Keyframe, type ResolvedLeaf, }
from "@/components/stage/choreography"; /** * The page editor: compose story beats, drag the
pose and optics of the live * glass, and copy the result out as data. * The stage is the
real one. The editor pushes its beats' keyframes through * overrideLeaves(), so getTrac
Notable exports: `Editor`. Marked `'use client'` so it runs in the browser.

[`app/editor/editor.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/editor/editor.tsx) · code · 34339 bytes

### page.tsx

export const metadata: Metadata = { title: "Page editor", description: "Compose story beats,
drag the live glass's pose and optics, and copy the result out as data for a new page.",
robots: { index: false }, } Notable exports: `Page`, `metadata`.

[`app/editor/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/editor/page.tsx) · code · 666 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
