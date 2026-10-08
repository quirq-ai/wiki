<!-- quirq-wiki-generated repo=website dir=src/components/ReplayVision -->

# website / src/components/ReplayVision

Source: [src/components/ReplayVision](https://github.com/quirq-ai/website/tree/main/src/components/ReplayVision) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AIPromptsSection.tsx

import React, { useState } from 'react' import CloudinaryImage from
'components/CloudinaryImage' import Link from 'components/Link' import { ToggleGroup } from
'components/RadixUI/ToggleGroup' import { LabeledList, SECTION_H2 } from
'components/Products/ReaderViewProduct/helpers' import type { SectionComponentProps } from
'components/Products/ReaderViewProdu Provides a default export as the module's public entry.

[`src/components/ReplayVision/AIPromptsSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReplayVision/AIPromptsSection.tsx) · code · 8109 bytes

### HowToUseSection.tsx

"How do I use it?" – renders the applications carousel in the shared TabbedCarousel format
(same primitives as the Applications template), with Replay Vision's own heading. Provides a
default export as the module's public entry.

[`src/components/ReplayVision/HowToUseSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReplayVision/HowToUseSection.tsx) · code · 1492 bytes

### OldWaySection.tsx

The manual, pre-Replay-Vision workflow. Every step is on you — the tool just hands you the
footage. Provides a default export as the module's public entry.

[`src/components/ReplayVision/OldWaySection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReplayVision/OldWaySection.tsx) · code · 2717 bytes

### PostHogWaySection.tsx

The Replay Vision loop: the machine does the watching, diagnosing, and patching – you only
step in to review and merge. Provides a default export as the module's public entry.

[`src/components/ReplayVision/PostHogWaySection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReplayVision/PostHogWaySection.tsx) · code · 3023 bytes

### PricingEstimator.tsx

import React, { useMemo } from 'react' import { calculatePrice, formatUSD } from
'components/Pricing/PricingSlider/pricingSliderLogic' import type { BillingTier } from
'components/Pricing/PricingCalculator/calculatorLogic' import UsageSliderRow, {
UsageSliderHeader } from 'components/Pricing/PricingCalculator/UsageSliderRow' import {
afterFirstFree, formatCo Notable exports: `PricingEstimator`, `MODELS`, `MAX_OBSERVATIONS`

[`src/components/ReplayVision/PricingEstimator.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReplayVision/PricingEstimator.tsx) · code · 11583 bytes

### PricingFooterCTASection.tsx

Detective hedgehog watching a wall of monitors. Provides a default export as the module's
public entry.

[`src/components/ReplayVision/PricingFooterCTASection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReplayVision/PricingFooterCTASection.tsx) · code · 2732 bytes

### PricingSections.tsx

import React, { useState } from 'react' import { IconCheck } from '@posthog/icons' import
OSButton from 'components/OSButton' import Link from 'components/Link' import { formatUSD }
from 'components/Pricing/PricingSlider/pricingSliderLogic' import type {
SectionComponentProps } from 'components/Products/ReaderViewProduct/types' import
PricingEstimator, { est Notable exports: `PricingTLDR`, `PricingPlans`, `PricingCredits`.

[`src/components/ReplayVision/PricingSections.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReplayVision/PricingSections.tsx) · code · 11127 bytes

### README.md

The project README (“ReplayVision components”). Sections for the Replay Vision product pages
(/replay-vision and /replay-vision/pricing), wired up through productMenu/pricingMenu in
src/hooks/productData/replay_vision.tsx and rendered by the ReaderView product system
(components/Products/ReaderViewProduct).

[`src/components/ReplayVision/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/ReplayVision/README.md) · code · 3904 bytes

### WorksWithSection.tsx

import React from 'react' import { IconRewindPlay, IconGraph, IconDashboard } from
'@posthog/icons' import Link from 'components/Link' import { InlineCode } from
'components/Products/ReaderViewProduct/helpers' import type { SectionComponentProps } from
'components/Products/ReaderViewProduct/types' Provides a default export as the module's
public entry.

[`src/components/ReplayVision/WorksWithSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReplayVision/WorksWithSection.tsx) · code · 2657 bytes

### sectionHelpers.tsx

Shared presentational helpers for the Replay Vision narrative sections ("The old way", "The
PostHog way"). Mirrors the inline helpers used on the PostHog Code marketing page. Notable
exports: `SectionLabel`, `InlineIcon`, `KeyBadge`.

[`src/components/ReplayVision/sectionHelpers.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ReplayVision/sectionHelpers.tsx) · code · 1435 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
