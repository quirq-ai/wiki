<!-- quirq-wiki-generated repo=website dir=src/components/Pricing/PricingCalculator -->

# website / src/components/Pricing/PricingCalculator

Source: [src/components/Pricing/PricingCalculator](https://github.com/quirq-ai/website/tree/main/src/components/Pricing/PricingCalculator) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Embedded.tsx

import React, { lazy, Suspense } from 'react' import Link from 'components/Link' import {
RenderInClient } from 'components/RenderInClient' import type { TabbedProps } from
'./Tabbed' Notable exports: `PricingCalculator`.

[`src/components/Pricing/PricingCalculator/Embedded.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/Embedded.tsx) · code · 1101 bytes

### EventTypesModal.tsx

import React, { useEffect } from 'react' import CloudinaryImage from
'components/CloudinaryImage' import { IconCheck } from '@posthog/icons' import Link from
'components/Link' import ScrollArea from 'components/RadixUI/ScrollArea' import { useApp }
from '../../../context/App' import { useWindow } from '../../../context/Window' Notable
exports: `EventTypesModal`, `EVENT_TYPES_MODAL_KEY`.

[`src/components/Pricing/PricingCalculator/EventTypesModal.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/EventTypesModal.tsx) · code · 11214 bytes

### SingleProduct.tsx

import React from 'react' import useProducts from 'hooks/useProducts' import {
NonLinearSlider, nonLinearCurve, reverseNonLinearCurve } from '../PricingSlider/Slider'
import { formatUSD } from '../PricingSlider/pricingSliderLogic' import { PricingTiers } from
'../Plans' import { NumericFormat } from 'react-number-format' import AutosizeInput from
'react-inpu Notable exports: `SingleProductPricing`.

[`src/components/Pricing/PricingCalculator/SingleProduct.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/SingleProduct.tsx) · code · 2858 bytes

### Tabbed.tsx

import React, { useEffect, useMemo, useRef, useState } from 'react' import Tooltip from
'components/Tooltip' import { IconInfo, IconPlus, IconSearch, IconStack, IconX } from
'@posthog/icons' import Toggle from 'components/Toggle' import { formatUSD } from
'../PricingSlider/pricingSliderLogic' import { buildProductAddons, calculatePrice,
getAddonsCostForProdu Notable exports: `Tabbed`, `Addon`, `Addons`, `TabContent`

[`src/components/Pricing/PricingCalculator/Tabbed.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/Tabbed.tsx) · code · 49290 bytes

### UsageSliderRow.tsx

import React, { useState } from 'react' import { LogSlider, NonLinearSlider, inverseCurve,
sliderCurve, nonLinearCurve, reverseNonLinearCurve, } from '../PricingSlider/Slider' import
{ formatCompact, parseCompact } from '../utils' Notable exports: `UsageSliderRow`,
`UsageSliderHeader`.

[`src/components/Pricing/PricingCalculator/UsageSliderRow.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/UsageSliderRow.tsx) · code · 4394 bytes

### calculatorLogic.test.ts

Calculator math against three representative billing fixtures: Automated test file.

[`src/components/Pricing/PricingCalculator/calculatorLogic.test.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/calculatorLogic.test.ts) · code · 7478 bytes

### calculatorLogic.ts

Pure pricing math for the pricing calculator. Notable exports: `BillingTier`, `BillingPlan`,
`BillingAddon`, `BillingProduct`, `CalculatorProduct`, `CalculatorAddon`, `AddonDefaults`,
`calculatePrice`, and 3 more.

[`src/components/Pricing/PricingCalculator/calculatorLogic.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/calculatorLogic.ts) · code · 4503 bytes

### calculatorURL.ts

import { calculatePrice } from './calculatorLogic' import { MODELS, MAX_OBSERVATIONS,
estimateReplayVisionPricing } from '../../ReplayVision/PricingEstimator' Notable exports:
`getProductInputs`, `readProductInputs`, `priceProductInputs`.

[`src/components/Pricing/PricingCalculator/calculatorURL.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/calculatorURL.ts) · code · 4454 bytes

### index.tsx

import cntl from 'cntl' import { pricingSliderLogic } from
'components/Pricing/PricingSlider/pricingSliderLogic' import { IconExternal, IconInfo } from
'@posthog/icons' import { useValues } from 'kea' import React, { useEffect, useState } from
'react' import Link from 'components/Link' import Tooltip from 'components/Tooltip' import
useProducts from './../Pr Notable exports: `section`, `PricingCalculator`.

[`src/components/Pricing/PricingCalculator/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/index.tsx) · code · 12272 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
