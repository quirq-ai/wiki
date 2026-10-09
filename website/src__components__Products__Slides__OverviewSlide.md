<!-- quirq-wiki-generated repo=website dir=src/components/Products/Slides/OverviewSlide -->

# website / src/components/Products/Slides/OverviewSlide

Source: [src/components/Products/Slides/OverviewSlide](https://github.com/quirq-ai/website/tree/main/src/components/Products/Slides/OverviewSlide) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### OverviewSlideAI.tsx

import React from 'react' import { OverviewSlideProps } from './types' import { IconSparkles
} from '@posthog/icons' import { AppIcon } from 'components/OSIcons/AppIcon' import
CloudinaryImage from 'components/CloudinaryImage' import useProduct from 'hooks/useProduct'
Notable exports: `OverviewSlideAI`.

[`src/components/Products/Slides/OverviewSlide/OverviewSlideAI.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/Slides/OverviewSlide/OverviewSlideAI.tsx) · code · 5857 bytes

### OverviewSlideColumns.tsx

import React from 'react' import CloudinaryImage from 'components/CloudinaryImage' import {
OverviewSlideProps } from './types' Notable exports: `OverviewSlideColumns`.

[`src/components/Products/Slides/OverviewSlide/OverviewSlideColumns.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/Slides/OverviewSlide/OverviewSlideColumns.tsx) · code · 2224 bytes

### OverviewSlideMax.tsx

import React from 'react' import CloudinaryImage from 'components/CloudinaryImage' Notable
exports: `OverviewSlideMax`, `skills`, `skillTitle`.

[`src/components/Products/Slides/OverviewSlide/OverviewSlideMax.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/Slides/OverviewSlide/OverviewSlideMax.tsx) · code · 2376 bytes

### OverviewSlideOverlay.tsx

import React from 'react' import CloudinaryImage from 'components/CloudinaryImage' import {
OverviewSlideProps } from './types' Notable exports: `OverviewSlideOverlay`.

[`src/components/Products/Slides/OverviewSlide/OverviewSlideOverlay.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/Slides/OverviewSlide/OverviewSlideOverlay.tsx) · code · 2289 bytes

### OverviewSlideStacked.tsx

import React from 'react' import CloudinaryImage from 'components/CloudinaryImage' import {
OverviewSlideProps } from './types' Notable exports: `OverviewSlideStacked`.

[`src/components/Products/Slides/OverviewSlide/OverviewSlideStacked.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/Slides/OverviewSlide/OverviewSlideStacked.tsx) · code · 3833 bytes

### index.ts

export { default as OverviewSlideColumns } from './OverviewSlideColumns' export { default as
OverviewSlideStacked } from './OverviewSlideStacked' export { default as
OverviewSlideOverlay } from './OverviewSlideOverlay' Notable exports:
`OverviewSlideColumns`, `OverviewSlideStacked`, `OverviewSlideOverlay`.

[`src/components/Products/Slides/OverviewSlide/index.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Products/Slides/OverviewSlide/index.ts) · code · 338 bytes

### types.ts

export interface OverviewSlideProps { productName: string overview?: { title?: string
description?: string textColor?: string } screenshots?: { [key: string]: { src: string
srcMobile?: string alt?: string classes?: string imgClasses?: string classesMobile?: string
imgClassesMobile?: string } } color: string Icon?: React.ComponentType hog?: { src: string
alt? Notable exports: `OverviewSlideProps`.

[`src/components/Products/Slides/OverviewSlide/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Products/Slides/OverviewSlide/types.ts) · code · 622 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
