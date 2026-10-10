<!-- quirq-wiki-generated repo=website dir=src/components/Desktop -->

# website / src/components/Desktop

Source: [src/components/Desktop](https://github.com/quirq-ai/website/tree/main/src/components/Desktop) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Background.tsx

import React from 'react' Notable exports: `Background`, `DESKTOP_ICON_GLOW`.

[`src/components/Desktop/Background.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Desktop/Background.tsx) · code · 680 bytes

### DesktopIcon.tsx

import React from 'react' import { AppLink, AppItem } from 'components/OSIcons/AppIcon'
import ZoomHover from 'components/ZoomHover' Notable exports: `DesktopIcon`.

[`src/components/Desktop/DesktopIcon.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Desktop/DesktopIcon.tsx) · code · 472 bytes

### index.tsx

A desktop icon opens the app's website like Open app does, in its own window on this site
(`/launch/<repository>`): framed, or "Oops" with Open in new tab when it can't be
(AGENTS.md). An app whose website is known never to open in a window (`external`, a shared
host, GitHub) opens its repository window instead, where Open app is one click away.
Provides a default export as the module's public entry.

[`src/components/Desktop/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Desktop/index.tsx) · code · 17230 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
