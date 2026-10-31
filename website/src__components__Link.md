<!-- quirq-wiki-generated repo=website dir=src/components/Link -->

# website / src/components/Link

Source: [src/components/Link](https://github.com/quirq-ai/website/tree/main/src/components/Link) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Link”). Shared navigation for the desktop and app views. Local paths
use Gatsby routing; state.newWindow opens them in a managed window. The context menu offers
side-by-side navigation, a real browser tab and copying the address.

[`src/components/Link/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Link/README.md) · code · 755 bytes

### index.tsx

import { Link as GatsbyLink } from 'gatsby' import React from 'react' import {
IconArrowUpRight } from '@posthog/icons' import ContextMenu, { ContextMenuItemProps } from
'components/RadixUI/ContextMenu' import { isAbsoluteWebUrl, NEW_TAB } from
'../../lib/externalLinks' Notable exports: `Link`, `Props`.

[`src/components/Link/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Link/index.tsx) · code · 4200 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
