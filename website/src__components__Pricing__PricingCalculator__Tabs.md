<!-- quirq-wiki-generated repo=website dir=src/components/Pricing/PricingCalculator/Tabs -->

# website / src/components/Pricing/PricingCalculator/Tabs

Source: [src/components/Pricing/PricingCalculator/Tabs](https://github.com/quirq-ai/website/tree/main/src/components/Pricing/PricingCalculator/Tabs) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### PostHogDesktop.tsx

import React, { useEffect, useMemo, useState } from 'react' import useSWR from 'swr' import
{ IconInfo } from '@posthog/icons' import Link from 'components/Link' import Tooltip from
'components/Tooltip' import { formatUSD } from
'components/Pricing/PricingSlider/pricingSliderLogic' import { calculatePrice } from
'components/Pricing/PricingCalculator/calculat Notable exports: `PostHogDesktopTab`

[`src/components/Pricing/PricingCalculator/Tabs/PostHogDesktop.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/Tabs/PostHogDesktop.tsx) · code · 6128 bytes

### ProductAnalytics.tsx

import { IconInfo } from '@posthog/icons' import { PricingTiers } from
'components/Pricing/Plans' import { calculatePrice } from
'components/Pricing/PricingCalculator/calculatorLogic' import React, { useEffect, useMemo,
useState } from 'react' import Tooltip from 'components/Tooltip' import { Addons } from
'../Tabbed' import UsageSliderRow, { UsageSliderHead Notable exports: `ProductAnalyticsTab`

[`src/components/Pricing/PricingCalculator/Tabs/ProductAnalytics.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/Tabs/ProductAnalytics.tsx) · code · 12783 bytes

### ReplayVision.tsx

import React, { useEffect, useMemo, useState } from 'react' import PricingEstimator, {
MODELS, MAX_OBSERVATIONS, estimateReplayVisionPricing, } from
'components/ReplayVision/PricingEstimator' Notable exports: `ReplayVisionTab`.

[`src/components/Pricing/PricingCalculator/Tabs/ReplayVision.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/Tabs/ReplayVision.tsx) · code · 2840 bytes

### StandaloneAddonsTab.tsx

import React, { useEffect, useMemo, useState } from 'react' import { IconInfo, IconX } from
'@posthog/icons' import { calculatePrice } from '../../PricingSlider/pricingSliderLogic'
import { PricingTiers } from '../../Plans' import { afterFirstFree, pluralizeUnit,
unitWhenNotInLabel } from '../../utils' import UsageSliderRow, { UsageSliderHeader } from
'../Us Notable exports: `StandaloneAddonsTab`.

[`src/components/Pricing/PricingCalculator/Tabs/StandaloneAddonsTab.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/Tabs/StandaloneAddonsTab.tsx) · code · 15603 bytes

### event-anonymous.png

Binary PNG asset (27.1 KB). Left unsummarized; open the file in the source repository if you
need the actual bytes. Wiki pages do not copy images, fonts, archives, or other generated
blobs.

[`src/components/Pricing/PricingCalculator/Tabs/event-anonymous.png`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/Tabs/event-anonymous.png) · binary · 27787 bytes

### event-identified.png

Binary PNG asset (40.8 KB). Left unsummarized; open the file in the source repository if you
need the actual bytes. Wiki pages do not copy images, fonts, archives, or other generated
blobs.

[`src/components/Pricing/PricingCalculator/Tabs/event-identified.png`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/Tabs/event-identified.png) · binary · 41743 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
