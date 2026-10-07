<!-- quirq-wiki-generated repo=website dir=src/components/Pricing/PricingSlider -->

# website / src/components/Pricing/PricingSlider

Source: [src/components/Pricing/PricingSlider](https://github.com/quirq-ai/website/tree/main/src/components/Pricing/PricingSlider) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Slider.tsx

Thanks to https://codesandbox.io/s/rc-slider-log-demo-forked-xffr0 Notable exports:
`prettyInt`, `sliderCurve`, `inverseCurve`, `identityCurve`, `nonLinearCurve`,
`reverseNonLinearCurve`, `LogSlider`, `LinearSlider`, and 1 more.

[`src/components/Pricing/PricingSlider/Slider.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingSlider/Slider.tsx) · code · 3688 bytes

### index.tsx

import React from 'react' import { useActions, useValues } from 'kea' import {
pricingSliderLogic } from './pricingSliderLogic' import { LogSlider } from './Slider'
Notable exports: `PricingSlider`.

[`src/components/Pricing/PricingSlider/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingSlider/index.tsx) · code · 858 bytes

### pricingSliderLogic.ts

import { kea } from 'kea' import { calculatePrice } from
'../PricingCalculator/calculatorLogic' import { inverseCurve, sliderCurve } from './Slider'
import { MAX_FEATURE_FLAGS, MAX_PRODUCT_ANALYTICS, MAX_SESSION_REPLAY, MAX_SURVEYS, MILLION,
pricingLogic, } from '../pricingLogic' Notable exports: `formatUSD`, `PricingOptionType`,
`pricingSliderLogic`, `calculatePrice`, `MAX_FEATURE_FLAGS`, `MAX_PRODUCT_ANALYTICS`

[`src/components/Pricing/PricingSlider/pricingSliderLogic.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingSlider/pricingSliderLogic.ts) · code · 10670 bytes

### slider.css

Stylesheet `slider.css` for layout and visual treatment in this folder. Leading class
selectors include `slider`, `rc-slider`, `rc-slider-mark`.

[`src/components/Pricing/PricingSlider/slider.css`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingSlider/slider.css) · code · 776 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
