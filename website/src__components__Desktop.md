<!-- quirq-wiki-generated repo=website dir=src/components/Desktop -->

# website / src/components/Desktop

Source: [src/components/Desktop](https://github.com/quirq-ai/website/tree/main/src/components/Desktop) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### DesktopIcon.tsx

import React from 'react' import { AppLink, AppItem } from 'components/OSIcons/AppIcon'
import ZoomHover from 'components/ZoomHover' Notable exports: `DesktopIcon`.

[`src/components/Desktop/DesktopIcon.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Desktop/DesktopIcon.tsx) · code · 472 bytes

### Wallpapers.tsx

import React from 'react' import CloudinaryImage from 'components/CloudinaryImage' Notable
exports: `Wallpapers`, `WallpaperGlow`, `WALLPAPER_GLOW`, `DEFAULT_WALLPAPER_GLOW`,
`getWallpaperGlow`.

[`src/components/Desktop/Wallpapers.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Desktop/Wallpapers.tsx) · code · 7594 bytes

### index.tsx

import React, { useEffect, useRef } from 'react' import Link from 'components/Link' import {
useAppActions, useAppSettings, useAppUIState } from '../../context/App' import QuirqAppIcon
from 'components/QuirqAppIcon' import { getQuirqApps } from 'lib/quirqApps' import { AppItem
} from 'components/OSIcons/AppIcon' import ContextMenu from 'components/RadixUI/Co Notable
exports: `useProductLinks`, `apps`.

[`src/components/Desktop/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Desktop/index.tsx) · code · 12504 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
