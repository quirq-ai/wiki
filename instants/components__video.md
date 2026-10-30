<!-- quirq-wiki-generated repo=instants dir=components/video -->

# instants / components/video

Source: [components/video](https://github.com/quirq-ai/instants/tree/main/components/video) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### use-video.ts

export type VideoAspect = NonNullable; export const ASPECTS: VideoAspect[] = ["9:16", "1:1",
"16:9"]; export const LENGTHS = [30, 45, 60] Notable exports: `ratio`, `elapsedLabel`,
`startVideo`, `useVideo`, `VideoAspect`, `ASPECTS`, `LENGTHS`, `isActive`. Wired into a
Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/video/use-video.ts`](https://github.com/quirq-ai/instants/blob/main/components/video/use-video.ts) · code · 4795 bytes

### video-grid.tsx

export type VideoItem = { slug: string; title: string; topic: string; accent: string;
status: VideoStatus; } Notable exports: `VideoGrid`, `VideoItem`. Wired into a Next.js app
(App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/video/video-grid.tsx`](https://github.com/quirq-ai/instants/blob/main/components/video/video-grid.tsx) · code · 4959 bytes

### video-panel.tsx

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
AlertDialogTrigger, } from "@/components/ui/alert-dialog"; type Video = ReturnType Notable
exports: `VideoPanel`. Wired into a Next.js app (App Router or Next APIs). Marked `'use
client'` so it runs in the browser.

[`components/video/video-panel.tsx`](https://github.com/quirq-ai/instants/blob/main/components/video/video-panel.tsx) · code · 9396 bytes

### video-player.tsx

/** Aspect-correct player that never grows taller than maxVh of the viewport. */ export
function VideoPlayer({ status, title, maxVh = 78, autoPlay = false, className = "", }: {
status: VideoStatus; title: string; maxVh?: number; autoPlay?: boolean; className?: string;
}) { const r = ratio(status.aspect); if (!status.url) return null; return ( Notable exports:
`VideoPlayer`. Marked `'use client'` so it runs in the browser.

[`components/video/video-player.tsx`](https://github.com/quirq-ai/instants/blob/main/components/video/video-player.tsx) · code · 1007 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
