<!-- quirq-wiki-generated repo=website dir=src/components/Dock -->

# website / src/components/Dock

Source: [src/components/Dock](https://github.com/quirq-ai/website/tree/main/src/components/Dock) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Dock”). Euler's floating glass dock, used as the site's navigation bar
in place of the old top bar. It sits below the desktop viewport, so windows end above it
rather than under it.

[`src/components/Dock/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Dock/README.md) · code · 982 bytes

### index.tsx

import React from 'react' import { IconApp, IconSearch } from '@posthog/icons' import Link
from 'components/Link' import ActiveWindowsPanel from 'components/ActiveWindowsPanel' import
{ QuirqAppTile } from 'components/QuirqAppIcon' import QuirqAvatar from
'components/QuirqAvatar' import { useAppActions, useAppWindows } from '../../context/App'
Notable exports: `Dock`.

[`src/components/Dock/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Dock/index.tsx) · code · 6331 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
