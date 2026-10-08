<!-- quirq-wiki-generated repo=website dir=src/components/Products/ReaderViewProduct/templates -->

# website / src/components/Products/ReaderViewProduct/templates

Source: [src/components/Products/ReaderViewProduct/templates](https://github.com/quirq-ai/website/tree/main/src/components/Products/ReaderViewProduct/templates) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AI.tsx

import React from 'react' import Link from 'components/Link' import CloudinaryImage from
'components/CloudinaryImage' import { SectionComponentProps } from '../types' Provides a
default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/AI.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/AI.tsx) · code · 3459 bytes

### Applications.tsx

import React from 'react' import TabbedCarousel from 'components/TabbedCarousel' import
CarouselSlide from '../CarouselSlide' import { SECTION_H2 } from '../helpers' import type {
CarouselSlide as CarouselSlideType, SectionComponentProps } from '../types' Provides a
default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/Applications.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/Applications.tsx) · code · 1256 bytes

### AskAnything.tsx

import React, { useMemo, useState } from 'react' import CloudinaryImage from
'components/CloudinaryImage' import Link from 'components/Link' import Input from
'components/OSForm/input' import { ToggleGroup } from 'components/RadixUI/ToggleGroup'
import mcpToolsData from '../../../../data/mcp-tools.json' import { LabeledList, SECTION_H2
} from '../helpers' im Provides a default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/AskAnything.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/AskAnything.tsx) · code · 12340 bytes

### BilledWithPricing.tsx

import React from 'react' import { IconCheck } from '@posthog/icons' import Link from
'components/Link' import type { SectionComponentProps } from '../types' Provides a default
export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/BilledWithPricing.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/BilledWithPricing.tsx) · code · 4793 bytes

### CommunityQuestions.tsx

import React from 'react' import { graphql, useStaticQuery } from 'gatsby' import {
IconArrowRight, IconArrowUpRight } from '@posthog/icons' import CommunityQuestionsList from
'./CommunityQuestionsList' import OSButton2 from 'components/OSButton/OSButton2' import {
useQuestions } from 'hooks/useQuestions' import { SectionComponentProps } from '../types'
impo Provides a default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/CommunityQuestions.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/CommunityQuestions.tsx) · code · 8400 bytes

### CommunityQuestionsList.tsx

import React from 'react' import { IconCheckCircle } from '@posthog/icons' import dayjs from
'dayjs' import relativeTime from 'dayjs/plugin/relativeTime' import Link from
'components/Link' import getAvatarURL from 'components/Squeak/util/getAvatar' import {
QuestionData, StrapiResult } from 'lib/strapi' Provides a default export as the module's
public entry.

[`src/components/Products/ReaderViewProduct/templates/CommunityQuestionsList.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/CommunityQuestionsList.tsx) · code · 7456 bytes

### ComparisonSummary.tsx

import React from 'react' import { IconCheck } from '@posthog/icons' import { Logo } from
'@posthog/brand/logo' import { SectionComponentProps } from '../types' import
CloudinaryImage from 'components/CloudinaryImage' Provides a default export as the module's
public entry.

[`src/components/Products/ReaderViewProduct/templates/ComparisonSummary.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/ComparisonSummary.tsx) · code · 3785 bytes

### Eli5.tsx

import React from 'react' import { SectionComponentProps } from '../types' import {
SectionHeading } from '../helpers' Provides a default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/Eli5.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/Eli5.tsx) · code · 936 bytes

### FeatureComparison.tsx

import React, { useEffect, useRef, useState } from 'react' import ProductComparisonTable
from 'components/ProductComparisonTable' import OSButton from 'components/OSButton' import {
SectionComponentProps } from '../types' Provides a default export as the module's public
entry.

[`src/components/Products/ReaderViewProduct/templates/FeatureComparison.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/FeatureComparison.tsx) · code · 3196 bytes

### Features.tsx

import React from 'react' import { SectionComponentProps } from '../types' Provides a
default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/Features.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/Features.tsx) · code · 2916 bytes

### GettingStarted.tsx

import React from 'react' import { SignupCTA } from 'components/SignupCTA' import
ScriptInstallCallout from 'components/ScriptInstallCallout' import WizardFrameworksTeaser
from 'components/WizardFrameworksTeaser' import type { SectionComponentProps } from
'../types' Provides a default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/GettingStarted.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/GettingStarted.tsx) · code · 3792 bytes

### Installation.tsx

import React from 'react' import InstallFrameworkGrid from
'components/Products/InstallFrameworkGrid' import { SECTION_H2 } from '../helpers' import
type { SectionComponentProps } from '../types' Provides a default export as the module's
public entry.

[`src/components/Products/ReaderViewProduct/templates/Installation.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/Installation.tsx) · code · 1483 bytes

### Overview.tsx

import React from 'react' import CloudinaryImage from 'components/CloudinaryImage' import {
SectionComponentProps } from '../types' import Glow from 'components/Glow' import { CTAs }
from 'components/CTAs' import { DebugContainerQuery } from 'components/DebugContainerQuery'
Provides a default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/Overview.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/Overview.tsx) · code · 5033 bytes

### PairsWith.tsx

import React from 'react' import Link from 'components/Link' import Glow, { type GlowColor }
from 'components/Glow' import ToolsTicker, { DEFAULT_HANDLES } from
'components/Home/ToolsTicker' import { isAppIconName, AppIcon } from
'components/OSIcons/AppIcon' import { CARD_H3, SectionHeading } from '../helpers' import {
SectionComponentProps } from '../types' Provides a default export as the module's public

[`src/components/Products/ReaderViewProduct/templates/PairsWith.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/PairsWith.tsx) · code · 5114 bytes

### Plans.tsx

import React, { useState } from 'react' import { graphql, useStaticQuery } from 'gatsby'
import { AnimatePresence, motion } from 'framer-motion' import groupBy from 'lodash.groupby'
import { IconCheck, IconX } from '@posthog/icons' import useProduct from 'hooks/useProduct'
import OSButton from 'components/OSButton' import Toggle from 'components/Toggle' impo
Provides a default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/Plans.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/Plans.tsx) · code · 29870 bytes

### PostHogOnPostHog.tsx

import React from 'react' import { SectionComponentProps } from '../types' Provides a
default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/PostHogOnPostHog.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/PostHogOnPostHog.tsx) · code · 1274 bytes

### Pricing.tsx

import React from 'react' import useProduct from 'hooks/useProduct' import {
SectionComponentProps } from '../types' Provides a default export as the module's public
entry.

[`src/components/Products/ReaderViewProduct/templates/Pricing.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/Pricing.tsx) · code · 7695 bytes

### PricingCalculator.tsx

import React, { useEffect, useMemo, useRef, useState } from 'react' import confetti from
'canvas-confetti' import useProducts from 'hooks/useProducts' import useProduct from
'hooks/useProduct' import { LogSlider, sliderCurve, inverseCurve } from
'components/Pricing/PricingSlider/Slider' import { calculatePrice, formatUSD } from
'components/Pricing/PricingSli Provides a default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/PricingCalculator.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/PricingCalculator.tsx) · code · 18017 bytes

### PricingFooterCTA.tsx

import React from 'react' import OSButton from 'components/OSButton' import CloudinaryImage
from 'components/CloudinaryImage' import { SectionComponentProps } from '../types' Provides
a default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/PricingFooterCTA.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/PricingFooterCTA.tsx) · code · 2767 bytes

### TopFeatures.tsx

import React from 'react' import TabbedCarousel from 'components/TabbedCarousel' import
CarouselSlide from '../CarouselSlide' import { SECTION_H2 } from '../helpers' import type {
CarouselSlide as CarouselSlideType, SectionComponentProps } from '../types' Provides a
default export as the module's public entry.

[`src/components/Products/ReaderViewProduct/templates/TopFeatures.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/TopFeatures.tsx) · code · 1248 bytes

### UseCases.tsx

import React from 'react' import OSTable from 'components/OSTable' import CloudinaryImage
from 'components/CloudinaryImage' import { SectionHeading } from '../helpers' import {
SectionComponentProps } from '../types' Provides a default export as the module's public
entry.

[`src/components/Products/ReaderViewProduct/templates/UseCases.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/UseCases.tsx) · code · 2944 bytes

### index.ts

import React from 'react' import { SectionComponentProps } from '../types' import Overview
from './Overview' import Eli5 from './Eli5' import UseCases from './UseCases' import
Applications from './Applications' import TopFeatures from './TopFeatures' import Features
from './Features' import AI from './AI' import AskAnything from './AskAnything' import
Instal Notable exports: `templateRegistry`, `Overview`, `Eli5`, `UseCases`, `Applications`

[`src/components/Products/ReaderViewProduct/templates/index.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Products/ReaderViewProduct/templates/index.ts) · code · 2221 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
