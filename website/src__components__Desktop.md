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

import React, { useEffect, useMemo, useRef, useState } from 'react' import Link from
'components/Link' import { useAppActions, useAppSettings, useAppUIState, useAppWindows }
from '../../context/App' import QuirqAppIcon from 'components/QuirqAppIcon' import type {
QuirqApp } from 'lib/quirqApps' import { useQuirqApps } from 'lib/quirqLiveApps' import {
AppIte Provides a default export as the module's public entry.

[`src/components/Desktop/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Desktop/index.tsx) · code · 16169 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
