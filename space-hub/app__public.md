<!-- quirq-wiki-generated repo=space-hub dir=app/public -->

# space-hub / app/public

Source: [app/public](https://github.com/quirq-ai/space-hub/tree/main/app/public) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### copy.js

Copy buttons for command blocks on the hub's server-rendered pages (<div
class="command"><code>...</code></div>, e.g. the guide), drawn like the app's CopyButton. A
separate file because those pages allow same-origin scripts only. Without it, a click on the
command still selects all of it.

[`app/public/copy.js`](https://github.com/quirq-ai/space-hub/blob/main/app/public/copy.js) · code · 2230 bytes

### dock-builders-black.svg

SVG graphic `dock-builders-black.svg` (1.3 KB). Vector artwork used by the UI, docs, or
brand; not executable source.

[`app/public/dock-builders-black.svg`](https://github.com/quirq-ai/space-hub/blob/main/app/public/dock-builders-black.svg) · code · 1341 bytes

### dock-builders-white.svg

SVG graphic `dock-builders-white.svg` (1.3 KB). Vector artwork used by the UI, docs, or
brand; not executable source.

[`app/public/dock-builders-white.svg`](https://github.com/quirq-ai/space-hub/blob/main/app/public/dock-builders-white.svg) · code · 1374 bytes

### dock-home-black.svg

SVG graphic `dock-home-black.svg` (1.5 KB). Vector artwork used by the UI, docs, or brand;
not executable source.

[`app/public/dock-home-black.svg`](https://github.com/quirq-ai/space-hub/blob/main/app/public/dock-home-black.svg) · code · 1578 bytes

### dock-home-white.svg

SVG graphic `dock-home-white.svg` (1.6 KB). Vector artwork used by the UI, docs, or brand;
not executable source.

[`app/public/dock-home-white.svg`](https://github.com/quirq-ai/space-hub/blob/main/app/public/dock-home-white.svg) · code · 1611 bytes

### dock-orgs-black.svg

SVG graphic `dock-orgs-black.svg` (1.3 KB). Vector artwork used by the UI, docs, or brand;
not executable source.

[`app/public/dock-orgs-black.svg`](https://github.com/quirq-ai/space-hub/blob/main/app/public/dock-orgs-black.svg) · code · 1337 bytes

### dock-orgs-white.svg

SVG graphic `dock-orgs-white.svg` (1.3 KB). Vector artwork used by the UI, docs, or brand;
not executable source.

[`app/public/dock-orgs-white.svg`](https://github.com/quirq-ai/space-hub/blob/main/app/public/dock-orgs-white.svg) · code · 1370 bytes

### frame.js

The frame's behaviour on the server-rendered pages (the guide, sign-in, new project), as the
app's shell does it: fold to icons with the app's own saved choice, the drawer on phones,
⌘B, menus that close on a click outside, and the appearance choice in the dock's account
menu. Loaded as the first thing in <body>, so the folded state is there before the first
paint.

[`app/public/frame.js`](https://github.com/quirq-ai/space-hub/blob/main/app/public/frame.js) · code · 3122 bytes

### mascot.svg

SVG graphic `mascot.svg` (747 bytes). Vector artwork used by the UI, docs, or brand; not
executable source.

[`app/public/mascot.svg`](https://github.com/quirq-ai/space-hub/blob/main/app/public/mascot.svg) · code · 747 bytes

### quirq-icon.svg

SVG graphic `quirq-icon.svg` (328 bytes). Vector artwork used by the UI, docs, or brand; not
executable source.

[`app/public/quirq-icon.svg`](https://github.com/quirq-ai/space-hub/blob/main/app/public/quirq-icon.svg) · code · 328 bytes

### theme.js

Runs in the page head before paint: the saved theme (or the system's), shared with open-
chat's key.

[`app/public/theme.js`](https://github.com/quirq-ai/space-hub/blob/main/app/public/theme.js) · code · 541 bytes

_Generated 2026-11-07 11:58 UTC from `main`._
