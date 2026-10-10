<!-- quirq-wiki-generated repo=website dir=src/components/Home/HeroCarousel -->

# website / src/components/Home/HeroCarousel

Source: [src/components/Home/HeroCarousel](https://github.com/quirq-ai/website/tree/main/src/components/Home/HeroCarousel) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### autoAdvanceGate.tsx

import React from 'react' Notable exports: `usePauseAutoAdvance`, `useSlidePaused`,
`useSlideActive`, `AutoAdvanceGate`, `AutoAdvanceGateContext`, `SlideActiveContext`,
`SlidePausedContext`.

[`src/components/Home/HeroCarousel/autoAdvanceGate.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/HeroCarousel/autoAdvanceGate.tsx) · code · 1903 bytes

### homeSlides.tsx

import React from 'react' import { IconPlug, IconRewindPlay, IconSupport, IconWarning } from
'@posthog/icons' import Link from 'components/Link' import { SignupCTA } from
'components/SignupCTA' import useSourcePlatforms from 'hooks/useSourcePlatforms' import
AskAnythingDemo from './AskAnythingDemo' import { useToolsProducts } from
'components/Home/ToolsTicke Notable exports: `GiveAgentsContext`, `ShipWithPostHogSlide`

[`src/components/Home/HeroCarousel/homeSlides.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/HeroCarousel/homeSlides.tsx) · code · 6039 bytes

### index.tsx

import React, { useCallback, useMemo, useState } from 'react' import { Tabs } from 'radix-
ui' import { IconPauseFilled, IconPlayFilled } from '@posthog/icons' import Tooltip from
'components/RadixUI/Tooltip' import { Tab, productUsageTabs } from './tabs' import {
AutoAdvanceGateContext, SlideActiveContext, SlidePausedContext } from './autoAdvanceGate'
Notable exports: `HeroCarousel`.

[`src/components/Home/HeroCarousel/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/HeroCarousel/index.tsx) · code · 8525 bytes

### slides.tsx

import React from 'react' import { useStaticQuery, graphql } from 'gatsby' import {
IconFlag, IconLightBulb, IconRocket, IconSearch, IconSparkles } from '@posthog/icons' import
Link from 'components/Link' import Tooltip from 'components/RadixUI/Tooltip' import { Logo }
from '@posthog/brand/logo' import { getLogo } from 'constants/logos' import useSourcePlatf
Notable exports: `OnePlaceSlide`, `UnderstandUsageSlide`, `DebugFixSlide`

[`src/components/Home/HeroCarousel/slides.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/HeroCarousel/slides.tsx) · code · 26728 bytes

### tabs.tsx

import React from 'react' import { OnePlaceSlide, UnderstandUsageSlide, DebugFixSlide,
TestRolloutSlide } from './slides' import { ShipWithPostHogSlide, AskAnythingSlide,
GiveAgentsContext } from './homeSlides' Notable exports: `Tab`, `productUsageTabs`,
`buildTabs`.

[`src/components/Home/HeroCarousel/tabs.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/HeroCarousel/tabs.tsx) · code · 2411 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
