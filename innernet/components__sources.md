<!-- quirq-wiki-generated repo=innernet dir=components/sources -->

# innernet / components/sources

Source: [components/sources](https://github.com/quirq-ai/innernet/tree/main/components/sources) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### input-panel.tsx

Sources, part I: what Innernet reads. Two rows set like the rest of the page, each with a
switch: the folders on this machine, and the GitHub repositories it collects. Every change
saves at once (/api/sources); Sync now rebuilds what is switched on. Times and counts arrive
from the server already worded, so nothing here disagrees with it. Notable exports:
`InputPanel`, `InputPanelProps`. Wired into a Next.js app (App Router or Next APIs).

[`components/sources/input-panel.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/sources/input-panel.tsx) · code · 9876 bytes

### path-tools.tsx

The two or three small tools at the end of a generated-data row: copy the path, open its
folder, and for the tab's own history file, open it in a text editor. Quiet until the row is
hovered or focused; always there on a touch screen. Notable exports: `PathTools`. Marked
`'use client'` so it runs in the browser.

[`components/sources/path-tools.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/sources/path-tools.tsx) · code · 3260 bytes

### remote-controls.tsx

Sources, part III: the remote database's own controls. Connect asks once, in place (a popup
is never the place for it), naming what leaves the machine; connected, Sync now and
Disconnect. The server words the status line, so this only asks and refreshes. Notable
exports: `RemoteControls`. Wired into a Next.js app (App Router or Next APIs). Marked `'use
client'` so it runs in the browser.

[`components/sources/remote-controls.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/sources/remote-controls.tsx) · code · 3935 bytes

### request.ts

The one way Sources talks to its routes: a same-origin JSON POST carrying this tab's
session, so what it changes lands in the tab's history. Throws the route's own sentence.
Notable exports: `post`, `errorOf`, `button`, `fine`. Marked `'use client'` so it runs in
the browser.

[`components/sources/request.ts`](https://github.com/quirq-ai/innernet/blob/main/components/sources/request.ts) · code · 1366 bytes

### this-tab.tsx

The tab's own history file, a row under History in the generated data. Only the browser
knows which tab this is, so the row is drawn here, after the page loads. Notable exports:
`ThisTabRow`. Marked `'use client'` so it runs in the browser.

[`components/sources/this-tab.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/sources/this-tab.tsx) · code · 1240 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
