<!-- quirq-wiki-generated repo=website dir=src/components/Pricing/Redesign -->

# website / src/components/Pricing/Redesign

Source: [src/components/Pricing/Redesign](https://github.com/quirq-ai/website/tree/main/src/components/Pricing/Redesign) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### CalculatorReveal.tsx

import React, { useEffect, useState } from 'react' import { useLocation } from
'@reach/router' import { motion, useReducedMotion } from 'framer-motion' import { Calculator
} from 'components/Pricing/Test/Calculator' import { scrollToElement } from
'components/ScrollToElement' import usePostHog from 'hooks/usePostHog' import
AgentEstimateLink from 'components Notable exports: `CalculatorReveal`.

[`src/components/Pricing/Redesign/CalculatorReveal.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Redesign/CalculatorReveal.tsx) · code · 4985 bytes

### CalculatorSection.tsx

import React, { useEffect } from 'react' import { useLocation } from '@reach/router' import
{ Calculator } from 'components/Pricing/Test/Calculator' import { scrollToElement } from
'components/ScrollToElement' Notable exports: `CalculatorSection`.

[`src/components/Pricing/Redesign/CalculatorSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Redesign/CalculatorSection.tsx) · code · 1320 bytes

### CustomerLogos.tsx

import React from 'react' import { Customer, useCustomers } from 'hooks/useCustomers' import
Link from 'components/Link' Notable exports: `CustomerLogos`.

[`src/components/Pricing/Redesign/CustomerLogos.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Redesign/CustomerLogos.tsx) · code · 7092 bytes

### FreeTierModal.tsx

import React, { useEffect } from 'react' import { useApp } from '../../../context/App'
import { useWindow } from '../../../context/Window' import ScrollArea from
'components/RadixUI/ScrollArea' import { freeTierProducts } from
'components/Pricing/Test/freeTierData' Notable exports: `FreeTierModal`,
`FREE_TIER_MODAL_KEY`.

[`src/components/Pricing/Redesign/FreeTierModal.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Redesign/FreeTierModal.tsx) · code · 4202 bytes

### FreeTierTicker.tsx

import React, { useEffect, useRef, useState } from 'react' import FreeTier from
'components/Pricing/Test/FreeTier' Notable exports: `FreeTierTicker`.

[`src/components/Pricing/Redesign/FreeTierTicker.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Redesign/FreeTierTicker.tsx) · code · 3548 bytes

### Hero.tsx

import React from 'react' import { CTA as PlanCTA } from 'components/Pricing/Plans' import
GrassAngled from '../../../images/grass-tuft-angled.png' import GrassFolded from
'../../../images/grass-tuft-folded.png' import GrassFan from '../../../images/grass-tuft-
fan.png' Notable exports: `Hero`.

[`src/components/Pricing/Redesign/Hero.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Redesign/Hero.tsx) · code · 7010 bytes

### MoreOptions.tsx

import React, { useState } from 'react' import { IconHandMoney, IconHeadset, IconShield }
from '@posthog/icons' import { motion, useReducedMotion } from 'framer-motion' import Link
from 'components/Link' import { PlatformPackageList, PlatformFeatureTable } from
'components/Pricing/Platform/PlatformPackageComparison' Notable exports: `MoreOptions`.

[`src/components/Pricing/Redesign/MoreOptions.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Redesign/MoreOptions.tsx) · code · 7274 bytes

### PricingJourney.tsx

import React from 'react' import { IconArrowRight, IconCheck, IconCreditCard } from
'@posthog/icons' import { TrackedCTA } from 'components/CallToAction' import useCloud from
'hooks/useCloud' import usePostHogInstance from 'hooks/usePostHogInstance' import { useApp }
from '../../../context/App' import FreeTierModal, { FREE_TIER_MODAL_KEY } from './FreeTierMo
Notable exports: `PricingJourney`.

[`src/components/Pricing/Redesign/PricingJourney.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Redesign/PricingJourney.tsx) · code · 9527 bytes

### README.md

The project README (“Pricing page redesign”). Components for the pricing page, served on
/pricing. The page that assembles them is pages/pricing/index.tsx.

[`src/components/Pricing/Redesign/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Redesign/README.md) · code · 25540 bytes

### Surfaces.tsx

import React from 'react' import { IconAtSign, IconBolt, IconLaptop, IconPlug } from
'@posthog/icons' Notable exports: `Surfaces`.

[`src/components/Pricing/Redesign/Surfaces.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Redesign/Surfaces.tsx) · code · 1660 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
