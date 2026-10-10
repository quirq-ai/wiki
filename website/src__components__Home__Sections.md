<!-- quirq-wiki-generated repo=website dir=src/components/Home/Sections -->

# website / src/components/Home/Sections

Source: [src/components/Home/Sections](https://github.com/quirq-ai/website/tree/main/src/components/Home/Sections) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### BedtimeReadingSection.tsx

import React from 'react' import Markdown from 'components/Markdown' import { ImageReading1,
ImageReading2 } from 'components/Home/Decorations' import CloudinaryImage from
'components/CloudinaryImage' Notable exports: `BedtimeReadingSection`.

[`src/components/Home/Sections/BedtimeReadingSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Sections/BedtimeReadingSection.tsx) · code · 835 bytes

### DataStackSection.tsx

import React from 'react' import Link from 'components/Link' import Markdown from
'components/Markdown' import { ImageDW, TooltipDW } from 'components/Home/Decorations'
Notable exports: `DataStackSection`.

[`src/components/Home/Sections/DataStackSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Sections/DataStackSection.tsx) · code · 2072 bytes

### Hero.tsx

import React, { useState } from 'react' import CloudinaryImage from
'components/CloudinaryImage' import TabbedCarousel, { type TabbedCarouselTab } from
'components/TabbedCarousel' import { OnePlaceSlide, UnderstandUsageSlide, DebugFixSlide,
TestRolloutSlide, } from 'components/Home/HeroCarousel/slides' import { Logo } from
'@posthog/brand/logo' import { useA Notable exports: `Hero`.

[`src/components/Home/Sections/Hero.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Sections/Hero.tsx) · code · 5276 bytes

### PricingSection.tsx

import React from 'react' import Link from 'components/Link' import Markdown from
'components/Markdown' import Pricing from 'components/Home/New/Pricing' import { ImageMoney
} from 'components/Home/Decorations' Notable exports: `PricingSection`.

[`src/components/Home/Sections/PricingSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Sections/PricingSection.tsx) · code · 935 bytes

### RollingWords.README.md

Markdown page “RollingWords”. A kinetic inline word-cycler for headlines. Renders a single
word slot that vertically rolls through a list of words — each word rises from below as it
fades in, while the outgoing word continues upward and fades out. The slot takes each word's
natural width, so the line grows and shrinks with the word. The list accelerates (driven by
each step's hold) and then settles permanently on the last word with a slower, grac.

[`src/components/Home/Sections/RollingWords.README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Sections/RollingWords.README.md) · code · 3214 bytes

### RollingWords.tsx

import React, { useEffect, useState } from 'react' import { AnimatePresence, motion } from
'framer-motion' import { IconRewind } from '@posthog/icons' import { usePrefersReducedMotion
} from '../../Code/usePrefersReducedMotion' Notable exports: `rollingWordsDuration`,
`RollingWords`, `RollingWordStep`, `ROLLING_WORDS_SETTLE_MS`.

[`src/components/Home/Sections/RollingWords.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Sections/RollingWords.tsx) · code · 4989 bytes

### ShamelessCTASection.tsx

import React from 'react' import ShamelessCTA from 'components/Home/ShamelessCTA' Notable
exports: `ShamelessCTASection`.

[`src/components/Home/Sections/ShamelessCTASection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Sections/ShamelessCTASection.tsx) · code · 290 bytes

### WhyPostHogSection.tsx

import React from 'react' import Link from 'components/Link' import Markdown from
'components/Markdown' import SupportSmallTeamLink from
'components/Home/SupportSmallTeamLink' import CloudinaryImage from
'components/CloudinaryImage' Notable exports: `WhyPostHogSection`.

[`src/components/Home/Sections/WhyPostHogSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Sections/WhyPostHogSection.tsx) · code · 1270 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
