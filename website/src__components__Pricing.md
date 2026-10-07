<!-- quirq-wiki-generated repo=website dir=src/components/Pricing -->

# website / src/components/Pricing

Source: [src/components/Pricing](https://github.com/quirq-ai/website/tree/main/src/components/Pricing) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AgentEstimateLink.tsx

import React, { useEffect, useRef, useState } from 'react' import { IconCheck, IconCopy }
from '@posthog/icons' import OSButton from 'components/OSButton' import { IconClaudeCode,
IconOpenAI } from 'components/OSIcons' import { Popover } from 'components/RadixUI/Popover'
import usePostHog from 'hooks/usePostHog' Notable exports: `AgentEstimateLink`.

[`src/components/Pricing/AgentEstimateLink.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/AgentEstimateLink.tsx) · code · 5461 bytes

### Philosophy.tsx

import CloudinaryImage from 'components/CloudinaryImage' import React from 'react' import {
SectionHeader } from 'components/Pricing/Test/Sections' import Link from 'components/Link'
import { CTA as PlanCTA } from 'components/Pricing/Plans' Provides a default export as the
module's public entry.

[`src/components/Pricing/Philosophy.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Philosophy.tsx) · code · 3827 bytes

### Pricing.tsx

import CloudinaryImage from 'components/CloudinaryImage' import React, { useState } from
'react' import { FAQs } from 'components/Pricing/FAQs' import { Quote } from
'components/Pricing/Quote' import { SEO } from '../seo' import cntl from 'cntl' import {
animateScroll as scroll } from 'react-scroll' import SelfHostOverlay from
'components/Pricing/Overlays/Se Notable exports: `section`, `gridCell`, `gridCellTop`

[`src/components/Pricing/Pricing.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Pricing.tsx) · code · 13745 bytes

### Products.tsx

import React from 'react' import { useActions, useValues } from 'kea' import {
pricingSliderLogic } from 'components/Pricing/PricingSlider/pricingSliderLogic' Notable
exports: `useProducts`.

[`src/components/Pricing/Products.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Products.tsx) · code · 6322 bytes

### pricingLogic.ts

import { kea } from 'kea' import { BillingProductV2Type, BillingV2PlanType } from 'types'
Notable exports: `TEN_THOUSAND`, `ONE_FIFTY_THOUSAND`, `HUNDRED_THOUSAND`, `MILLION`,
`THREE_MILLION`, `FIVE_MILLION`, `TEN_MILLION`, `TWENTY_MILLION`, and 10 more.

[`src/components/Pricing/pricingLogic.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/pricingLogic.ts) · code · 2146 bytes

### utils.ts

import pluralizeWord from 'pluralize' Notable exports: `formatCompact`, `parseCompact`,
`pluralizeUnit`, `unitWhenNotInLabel`, `afterFirstFree`.

[`src/components/Pricing/utils.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/utils.ts) · code · 1348 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
