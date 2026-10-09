<!-- quirq-wiki-generated repo=website dir=src/components/Layout -->

# website / src/components/Layout

Source: [src/components/Layout](https://github.com/quirq-ai/website/tree/main/src/components/Layout) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Fonts.css

Stylesheet `Fonts.css` for layout and visual treatment in this folder.

[`src/components/Layout/Fonts.css`](https://github.com/quirq-ai/website/blob/main/src/components/Layout/Fonts.css) · code · 4146 bytes

### SkeletonLoading.css

Stylesheet `SkeletonLoading.css` for layout and visual treatment in this folder. Leading
class selectors include `skeleton-loading`, `skeleton-loading--250`, `skeleton-loading--
500`, `skeleton-loading--750`, `skeleton-loadong--1000`. Defines or consumes CSS custom
properties (design tokens).

[`src/components/Layout/SkeletonLoading.css`](https://github.com/quirq-ai/website/blob/main/src/components/Layout/SkeletonLoading.css) · code · 283 bytes

### context.tsx

import React, { createContext, useEffect, useState } from 'react' import menu, { docsMenu }
from '../../navs' import { IMenu } from 'components/PostLayout/types' import { useLocation }
from '@reach/router' import { navigate } from 'gatsby' import { isSafeInternalPath } from
'lib/utils' import { useActions } from 'kea' import { layoutLogic } from 'logic/layou
Notable exports: `Context`, `IProps`, `LayoutProvider`.

[`src/components/Layout/context.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Layout/context.tsx) · code · 6882 bytes

### hooks.tsx

import { useContext } from 'react' import { Context } from './context' Notable exports:
`useLayoutData`.

[`src/components/Layout/hooks.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Layout/hooks.tsx) · code · 182 bytes

### index.tsx

import React, { useEffect } from 'react' import usePostHog from '../../hooks/usePostHog'
import './Fonts.css' import './SkeletonLoading.css' import { IProps } from './context'
import ScrollArea from 'components/RadixUI/ScrollArea' Notable exports: `Layout`.

[`src/components/Layout/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Layout/index.tsx) · code · 919 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
