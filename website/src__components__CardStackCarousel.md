<!-- quirq-wiki-generated repo=website dir=src/components/CardStackCarousel -->

# website / src/components/CardStackCarousel

Source: [src/components/CardStackCarousel](https://github.com/quirq-ai/website/tree/main/src/components/CardStackCarousel) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### HearAboutUsCarousel.tsx

import React from 'react' import { CardStackCarousel } from './' import { SignupQuoteCard }
from './SignupQuoteCard' import quotes from './quotes.json' Notable exports:
`HearAboutUsCarousel`.

[`src/components/CardStackCarousel/HearAboutUsCarousel.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/CardStackCarousel/HearAboutUsCarousel.tsx) · code · 490 bytes

### README.md

The project README (“CardStackCarousel”). A draggable, swipeable card-stack carousel with a
generic primitive, a swappable card visual layer, and a concrete HearAboutUsCarousel
composition currently used in [contents/blog/aeo-advice.mdx](../../../contents/blog/aeo-
advice.mdx).

[`src/components/CardStackCarousel/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/CardStackCarousel/README.md) · code · 5657 bytes

### SignupQuoteCard.tsx

import React, { useEffect, useState } from 'react' import { RoughAnnotation } from
'../Code/RoughAnnotation' import OSButton from '../OSButton' Notable exports:
`SignupQuoteCard`, `SignupQuoteCardProps`.

[`src/components/CardStackCarousel/SignupQuoteCard.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/CardStackCarousel/SignupQuoteCard.tsx) · code · 4212 bytes

### index.tsx

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from
'react' import { IconChevronLeft, IconChevronRight } from '@posthog/icons' import {
usePrefersReducedMotion } from '../Code/usePrefersReducedMotion' Notable exports:
`CardStackCarousel`, `CardStackRenderMeta`, `CardStackCarouselProps`.

[`src/components/CardStackCarousel/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/CardStackCarousel/index.tsx) · code · 14200 bytes

### quotes.json

JSON array `quotes.json` with 9 items; first item keys: `content`.

[`src/components/CardStackCarousel/quotes.json`](https://github.com/quirq-ai/website/blob/main/src/components/CardStackCarousel/quotes.json) · code · 1450 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
