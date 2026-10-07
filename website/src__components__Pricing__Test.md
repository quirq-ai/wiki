<!-- quirq-wiki-generated repo=website dir=src/components/Pricing/Test -->

# website / src/components/Pricing/Test

Source: [src/components/Pricing/Test](https://github.com/quirq-ai/website/tree/main/src/components/Pricing/Test) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Calculator.tsx

The sidebar sits inside a `not-prose` section, so prose's link styling doesn't reach it and
`Link` ships no styles of its own — inline links read as plain text without this. Matches
the link treatment used elsewhere on the pricing page. Notable exports: `Calculator`.

[`src/components/Pricing/Test/Calculator.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Test/Calculator.tsx) · code · 10759 bytes

### FreeTier.tsx

import React from 'react' import FreeTierItem from './FreeTierItem' import * as Icons from
'@posthog/icons' import Tooltip from 'components/Tooltip' import { freeTierProducts } from
'./freeTierData' Notable exports: `FreeTier`.

[`src/components/Pricing/Test/FreeTier.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Test/FreeTier.tsx) · code · 1794 bytes

### FreeTierItem.tsx

import React from 'react' Provides a default export as the module's public entry.

[`src/components/Pricing/Test/FreeTierItem.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Test/FreeTierItem.tsx) · code · 1540 bytes

### ImageSlider.tsx

import React, { useEffect, useState } from 'react' import { useInView } from 'react-
intersection-observer' import { ZoomImage } from 'components/ZoomImage' import ScrollArea
from 'components/RadixUI/ScrollArea' import { DebugContainerQuery } from
'components/DebugContainerQuery' Notable exports: `ImageSlider`.

[`src/components/Pricing/Test/ImageSlider.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Test/ImageSlider.tsx) · code · 5784 bytes

### PricingAccordion.tsx

import React, { useState, useRef, useEffect, useMemo } from 'react' import { IconGraph,
IconRewindPlay, IconToggle, IconFlask, IconMessage, IconMinus, IconPlus } from
'@posthog/icons' import { motion } from 'framer-motion' import useProducts from
'hooks/useProducts' import { PricingTiers } from '../Plans' Notable exports: `tiers`,
`Accordion`.

[`src/components/Pricing/Test/PricingAccordion.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Test/PricingAccordion.tsx) · code · 9851 bytes

### Sections.tsx

import React from 'react' import cntl from 'cntl' Notable exports: `section`,
`SectionLayout`, `SectionHeader`, `SectionColumns`, `SectionMainCol`, `SectionSidebar`.

[`src/components/Pricing/Test/Sections.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Test/Sections.tsx) · code · 904 bytes

### freeTierData.tsx

import React from 'react' import * as Icons from '@posthog/icons' Notable exports:
`FreeTierProduct`, `freeTierProducts`.

[`src/components/Pricing/Test/freeTierData.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Test/freeTierData.tsx) · code · 4436 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
