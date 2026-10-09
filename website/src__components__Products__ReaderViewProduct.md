<!-- quirq-wiki-generated repo=website dir=src/components/Products/ReaderViewProduct -->

# website / src/components/Products/ReaderViewProduct

Source: [src/components/Products/ReaderViewProduct](https://github.com/quirq-ai/website/tree/main/src/components/Products/ReaderViewProduct) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### CarouselSlide.README.md

Markdown page “CarouselSlide”. Renders the body of a TabbedCarousel tab from a structured
CarouselSlide config.

[`src/components/Products/ReaderViewProduct/CarouselSlide.README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/CarouselSlide.README.md) · code · 22143 bytes

### CarouselSlide.tsx

import React from 'react' import CloudinaryImage from 'components/CloudinaryImage' import
Glow from 'components/Glow' import { useApp } from '../../../context/App' import type {
CarouselSlide as CarouselSlideType, ImageConfig } from './types' Notable exports:
`CarouselSlide`.

[`src/components/Products/ReaderViewProduct/CarouselSlide.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/CarouselSlide.tsx) · code · 9679 bytes

### ProductNav.tsx

import React from 'react' import Link from 'components/Link' import ElementScrollLink, {
ScrollSpyProvider } from 'components/ElementScrollLink' import { ProductNavItem } from
'./types' Provides a default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/ProductNav.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/ProductNav.tsx) · code · 1746 bytes

### ProductSwitcher.tsx

import React, { useMemo } from 'react' import { navigate } from 'gatsby' import OSSelect
from 'components/OSForm/select' import { useSidebarExpanded } from 'components/ReaderView'
import useProduct from 'hooks/useProduct' import { BROWSE_TOOLS_HANDLES } from
'constants/productNavigation' Provides a default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/ProductSwitcher.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/ProductSwitcher.tsx) · code · 3667 bytes

### README.md

The project README (“ReaderViewProduct”). Stacked, prose-first product pages rendered inside
ReaderView. This is the replacement for the older Slides/SlidesTemplate flow – each product
section is a normal bit of markup instead of a 1280x720 slide.

[`src/components/Products/ReaderViewProduct/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/README.md) · code · 16391 bytes

### buildProductMenuTabs.tsx

import React, { useMemo } from 'react' import { IconBook, IconGraduationCap, IconPiggyBank,
IconPresent } from '@posthog/icons' import { TreeMenu } from 'components/TreeMenu' import
Link from 'components/Link' import { learnChapterPath, useBookPages } from
'components/PocketGuides/bookModel' import usePlatformList from 'hooks/docs/usePlatformList'
import typ Notable exports: `buildProductMenuTabs`, `ProductSurface`, `surfaceBasePath`.

[`src/components/Products/ReaderViewProduct/buildProductMenuTabs.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/buildProductMenuTabs.tsx) · code · 11364 bytes

### getProductSurfaceUrl.ts

Subpaths under `/<slug>/` that are shared across products and should be preserved when the
user switches products. Add new entries as new shared product surfaces (e.g. `'tutorials'`)
come online. Notable exports: `getProductSurfaceUrl`.

[`src/components/Products/ReaderViewProduct/getProductSurfaceUrl.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/getProductSurfaceUrl.ts) · code · 1269 bytes

### helpers.tsx

import React from 'react' Notable exports: `CARD_H3`, `SECTION_H2`, `SectionHeading`,
`LabeledList`, `FilterTag`, `InlineCode`.

[`src/components/Products/ReaderViewProduct/helpers.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/helpers.tsx) · code · 3037 bytes

### index.tsx

import React, { useRef } from 'react' import SEO from 'components/seo' import ReaderView
from 'components/ReaderView' import useProduct from 'hooks/useProduct' import {
useProductInterest } from 'hooks/useProductInterest' import ProgressBar from
'components/ProgressBar' Notable exports: `ProductReaderView`, `buildProductMenuTabs`,
`surfaceBasePath`, `ProductNav`, `ProductSwitcher`, `getProductSurfaceUrl`

[`src/components/Products/ReaderViewProduct/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/index.tsx) · code · 5643 bytes

### types.ts

import React from 'react' import type { GlowColor } from 'components/Glow' Notable exports:
`ProductNavItem`, `resolveTemplate`, `SectionComponentProps`, `CarouselSlideStyle`,
`ImageConfig`, `SlideBullet`, `CarouselSlide`.

[`src/components/Products/ReaderViewProduct/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/types.ts) · code · 7725 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
