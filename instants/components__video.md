<!-- quirq-wiki-generated repo=instants dir=components/video -->

# instants / components/video

Source: [components/video](https://github.com/quirq-ai/instants/tree/main/components/video) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### feed-reel.tsx

One mute switch for the whole feed, like Instagram: unmute once and every reel you scroll to
plays with sound. Notable exports: `FeedReel`. Marked `'use client'` so it runs in the
browser.

[`components/video/feed-reel.tsx`](https://github.com/quirq-ai/instants/blob/main/components/video/feed-reel.tsx) · code · 3579 bytes

### use-video.ts

export type VideoAspect = NonNullable; export type VideoSound = NonNullable; export const
SOUNDS: VideoSound[] = ["full", "music", "off"]; export const SOUND_LABEL: Record = { full:
"Voice + music", music: "Music", off: "Off" }; export const ASPECTS: VideoAspect[] =
["9:16", "1:1", "16:9"]; export const LENGTHS = [30, 45, 60] Notable exports: `ratio`,
`elapsedLabel`, `startVideo`, `useVideo`, `VideoAspect`, `VideoSound`, `SOUNDS`

[`components/video/use-video.ts`](https://github.com/quirq-ai/instants/blob/main/components/video/use-video.ts) · code · 5369 bytes

### video-grid.tsx

export type VideoItem = { slug: string; title: string; topic: string; accent: string;
status: VideoStatus; } Notable exports: `VideoGrid`, `VideoItem`. Wired into a Next.js app
(App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/video/video-grid.tsx`](https://github.com/quirq-ai/instants/blob/main/components/video/video-grid.tsx) · code · 5511 bytes

### video-panel.tsx

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
AlertDialogTrigger, } from "@/components/ui/alert-dialog"; type Video = ReturnType Notable
exports: `VideoPanel`. Wired into a Next.js app (App Router or Next APIs). Marked `'use
client'` so it runs in the browser.

[`components/video/video-panel.tsx`](https://github.com/quirq-ai/instants/blob/main/components/video/video-panel.tsx) · code · 10071 bytes

### video-player.tsx

/** Aspect-correct player that never grows taller than maxVh of the viewport. */ export
function VideoPlayer({ status, title, maxVh = 78, autoPlay = false, className = "", }: {
status: VideoStatus; title: string; maxVh?: number; autoPlay?: boolean; className?: string;
}) { const r = ratio(status.aspect); if (!status.url) return null; return ( Notable exports:
`VideoPlayer`. Marked `'use client'` so it runs in the browser.

[`components/video/video-player.tsx`](https://github.com/quirq-ai/instants/blob/main/components/video/video-player.tsx) · code · 1007 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
