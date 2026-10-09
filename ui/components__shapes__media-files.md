<!-- quirq-wiki-generated repo=ui dir=components/shapes/media-files -->

# ui / components/shapes/media-files

Source: [components/shapes/media-files](https://github.com/quirq-ai/ui/tree/main/components/shapes/media-files) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### _kit.tsx

Demo scaffolding for the media-files category: mono captions, labelled specimens and section
heads. Server-safe. Not exported from the category index. Notable exports: `Caption`,
`Specimen`, `DemoSection`, `DemoStack`, `FootNote`, `CAPTION`.

[`components/shapes/media-files/_kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/_kit.tsx) · code · 2278 bytes

### app-launcher-demo.tsx

Live demo for the app icon launcher: the XO Swarm space home screen (apps, sign-ins,
connectors and a skill across three pages, with the status widget on page 1), the xo-client
phone home screen with count badges and a dock, and every tile variant and state. Notable
exports: `AppLauncherDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/media-files/app-launcher-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/app-launcher-demo.tsx) · code · 16303 bytes

### app-launcher.tsx

App icon launcher: the home screen of a space, as in the XO Swarm space view and the xo-
client phone.

[`components/shapes/media-files/app-launcher.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/app-launcher.tsx) · code · 18181 bytes

### art.tsx

Inline SVG stand-ins for media files in the viewer demos: an orbit plate (an image file), a
product screen poster (a video file) and the source of an SVG file that readers show as
inert text. Server-safe and deterministic: every coordinate is fixed or derived from data.
Notable exports: `OrbitArt`, `ScreenPosterArt`, `BLUE_PLANET_SVG`.

[`components/shapes/media-files/art.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/art.tsx) · code · 6336 bytes

### demo-data.ts

Demo records for the media-files category, built from the shared fixtures. Viewer files, a
README history for the version picker, a sandboxed HTML report, PDF pages and an audio
waveform. Everything is mock and deterministic. Not exported from the category index.
Notable exports: `DEMO_FILES`, `README_VERSIONS`, `GALILEO_NOTES`, `GALILEO_BRIEF`,
`GALILEO_SHOTS`, `PLAN_MD`, `BRIEF_MD`, `DRAFTS_LISTING`, and 2 more.

[`components/shapes/media-files/demo-data.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/demo-data.ts) · code · 8768 bytes

### file-body.tsx

File bodies shared by every viewer variant: a small safe Markdown renderer, highlighted
source with line numbers, a CSV table, a sandboxed HTML frame, notes for states, and the
truncation banner. Server-safe: no hooks. Markdown is parsed into React elements, never
injected as HTML, and HTML files render only inside a sandboxed iframe with no scripts.

[`components/shapes/media-files/file-body.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/file-body.tsx) · code · 15932 bytes

### file-kinds.ts

File kinds, limits and meta lines shared by every file viewer variant. Server-safe, no
hooks. Kinds follow the readers in galileo (files.mjs), the Space dashboard previewer and
the space-drift local reader: text renders as text, media in its own stage, the rest is a
note. Notable exports: `extensionOf`, `hasSource`, `hasRendering`, `modifiedLabel`,
`modifiedStamp`, `metaLine`, `FileKind`, `ViewerFile`, and 4 more.

[`components/shapes/media-files/file-kinds.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/file-kinds.ts) · code · 3519 bytes

### file-viewer-demo.tsx

Live demo for the file viewer: every variant (floating window, pane, modal, gateway page,
media stage) and every state (loading, too large, unsupported, truncated), wired for the
version picker, Source toggle, drag, Esc and the modal. Notable exports: `FileViewerDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/media-files/file-viewer-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/file-viewer-demo.tsx) · code · 25378 bytes

### file-viewer.tsx

File viewers. All of them read one file read-only and never change it.

[`components/shapes/media-files/file-viewer.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/file-viewer.tsx) · code · 30007 bytes

### framed-media-demo.tsx

Live demo for framed screenshots: framed (radius 8.5 and 20, warm layers panel), browser
mock (bottom-anchored in a bento tile, and a closed frame) and the tab viewer that
crossfades between Graph, Timeline and Sessions. Screens are SVG renders of fixtures.
Notable exports: `FramedMediaDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/media-files/framed-media-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/framed-media-demo.tsx) · code · 8429 bytes

### framed-media.tsx

Framed screenshots for the landing: FramedMedia (product UI in a dark hair-strong frame,
radius 8.5 or 20, ink or warm ground) and BrowserFrame (a grey browser shell with a mono URL
pill, bottom-anchored inside a tile or standing alone), plus MediaTile, the bento tile that
holds one. Screens are real product renders, never fake glow. Server-safe, no hooks.

[`components/shapes/media-files/framed-media.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/framed-media.tsx) · code · 3868 bytes

### gateway-page.tsx

galileo gateway page: the small page galileo makes on a source's own address to show one
file (name, size, modified, Raw, then the body) in its own light and dark palette, plus the
notes for files too large to show and kinds it cannot show. Server-safe, no hooks. Palette
from galileo/src/server.mjs PAGE_CSS; dark uses XO lime as its accent.

[`components/shapes/media-files/gateway-page.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/gateway-page.tsx) · code · 9151 bytes

### index.tsx

export const shapes: Shape[] = [ { id: "file-viewer", name: "File viewer", purpose: "Read
any file read-only.", seenIn: [ "galileo:file-viewer", "galileo:galileo-page-shell", "space-
ui:file-previewer-window", "client:file-preview-pane", "viz:file-viewer-modal", "viz:media-
preview-stage", ], variants: ["floating window", "pane", "modal", "gateway page", "medi
Notable exports: `shapes`.

[`components/shapes/media-files/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/index.tsx) · code · 1437 bytes

### media-stage.tsx

MediaStage: the reading stage for media files, as in the space-drift local reader and the
galileo file page. Image (zoom out, fit, zoom in), SVG shown as inert source, audio
(waveform scrubber), video (poster and transport), PDF (selectable page with a page input)
plus loading and error notes. Nothing is fetched: callers pass inline art and text, and
playback is simulated with a timer that starts only on a click.

[`components/shapes/media-files/media-stage.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/media-stage.tsx) · code · 17968 bytes

### screens.tsx

Product screens drawn from the shared fixtures, for framed screenshots: the space graph, the
timeline, the sessions table, the Space dashboard usage view and a space's environment view
as inline SVG that scales like an image, plus the three-layer plate (a drawn plate with real
text beside it). Server-safe, no hooks: every value comes from props or seeded fixtures, so
server and client render the same.

[`components/shapes/media-files/screens.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/screens.tsx) · code · 24560 bytes

### screenshot-tabs.tsx

ScreenshotTabs: mono uppercase view chips over one framed screen; picking a view crossfades
to it (the others go transparent and aria-hidden). Optional caption panels follow, one per
view, with the shown one lit. Arrow keys, Home and End move between the chips. Notable
exports: `ScreenshotTabs`, `ScreenshotView`, `ScreenshotTabsProps`. Marked `'use client'` so
it runs in the browser.

[`components/shapes/media-files/screenshot-tabs.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/screenshot-tabs.tsx) · code · 4511 bytes

### use-timers.ts

Demo helper for the media-files category: timeouts started from clicks (simulated loads)
that are all cleared when the demo unmounts. Not exported from the category index. Notable
exports: `useTimers`. Marked `'use client'` so it runs in the browser.

[`components/shapes/media-files/use-timers.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/media-files/use-timers.ts) · code · 640 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
