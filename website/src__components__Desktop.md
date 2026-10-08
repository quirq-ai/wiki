<!-- quirq-wiki-generated repo=website dir=src/components/Desktop -->

# website / src/components/Desktop

Source: [src/components/Desktop](https://github.com/quirq-ai/website/tree/main/src/components/Desktop) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### DesktopIcon.tsx

import React from 'react' import { AppLink, AppItem } from 'components/OSIcons/AppIcon'
import ZoomHover from 'components/ZoomHover' Notable exports: `DesktopIcon`.

[`src/components/Desktop/DesktopIcon.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Desktop/DesktopIcon.tsx) · code · 472 bytes

### Wallpapers.tsx

import React from 'react' /** * Wallpapers * Renders every desktop scene; visibility is
driven by body[data-wallpaper], * set from localStorage in theme-init.js before React
hydrates (and kept in sync * by App.tsx). That way the saved wallpaper paints on first frame
— no flash of * the default scene.

[`src/components/Desktop/Wallpapers.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Desktop/Wallpapers.tsx) · code · 2631 bytes

### index.tsx

import React, { useEffect, useRef } from 'react' import Link from 'components/Link' import {
useAppActions, useAppSettings, useAppUIState } from '../../context/App' import QuirqAppIcon
from 'components/QuirqAppIcon' import { getQuirqApps } from 'lib/quirqApps' import { AppItem
} from 'components/OSIcons/AppIcon' import ContextMenu from 'components/RadixUI/Co Notable
exports: `useProductLinks`, `apps`.

[`src/components/Desktop/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Desktop/index.tsx) · code · 12439 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
