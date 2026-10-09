<!-- quirq-wiki-generated repo=website dir=src/components/ReaderView -->

# website / src/components/ReaderView

Source: [src/components/ReaderView](https://github.com/quirq-ai/website/tree/main/src/components/ReaderView) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### CustomerMetadata.tsx

import React from 'react' import Link from 'components/Link' import { useCustomers } from
'hooks/useCustomers' import useProduct from 'hooks/useProduct' import { IconArrowUpRight }
from '@posthog/icons' Notable exports: `CustomerMetadata`.

[`src/components/ReaderView/CustomerMetadata.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReaderView/CustomerMetadata.tsx) · code · 5744 bytes

### index.tsx

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react' import { motion,
AnimatePresence } from 'framer-motion' import OSButton from 'components/OSButton' import {
IconPencil, IconPullRequest, IconTextWidth, IconGear, IconClockRewind, IconTextWidthFixed,
IconSidebarClose, IconSidebarOpen, IconTableOfContents, } from '@posthog/icons' impor
Notable exports: `ReaderView`, `MenuTab`, `SidebarExpandedContext`, `useSidebarExpanded`.

[`src/components/ReaderView/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReaderView/index.tsx) · code · 91455 bytes

### tabNavigation.test.ts

import assert from 'node:assert/strict' import test from 'node:test' Automated test file.

[`src/components/ReaderView/tabNavigation.test.ts`](https://github.com/quirq-ai/website/blob/main/src/components/ReaderView/tabNavigation.test.ts) · code · 1539 bytes

### tabNavigation.ts

interface MenuTabNavigationArgs { href?: string tabValue: string activeTab: string
navigateOnActiveClick?: boolean currentPath?: string } Notable exports:
`shouldNavigateMenuTab`.

[`src/components/ReaderView/tabNavigation.ts`](https://github.com/quirq-ai/website/blob/main/src/components/ReaderView/tabNavigation.ts) · code · 660 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
