<!-- quirq-wiki-generated repo=website dir=src/hooks/productData -->

# website / src/hooks/productData

Source: [src/hooks/productData](https://github.com/quirq-ai/website/tree/main/src/hooks/productData) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ai_evals.tsx

Evaluations share AI Observability's product page and are billed as AI Observability events
(same free tier, same rate). Listed here so the pricing table and calculator show them as
"Billed with AI Observability", the same way Experiments points at Feature Flags. Name and
icon match the app's product tree (`llm_evaluations`). Notable exports: `aiEvals`.

[`src/hooks/productData/ai_evals.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/ai_evals.tsx) · code · 1002 bytes

### ai_observability.tsx

import React from 'react' import { IconChat, IconCheckCircle, IconConfetti, IconCursorClick,
IconEye, IconInfo, IconList, IconLlmAnalytics, IconMagic, IconMessage, IconPieChart,
IconRocket, IconSparkles, } from '@posthog/icons' import { getTool } from '../../data/tools'
import { features } from './ai_observability/features' import { applications, topFeatures
Notable exports: `aiObservability`.

[`src/hooks/productData/ai_observability.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/ai_observability.tsx) · code · 17969 bytes

### cdp.tsx

this data powers the CDP page, but the product icons that appear on /products and in the
menu bar are defined in productNavigation.ts under the 'integrations' handle. Notable
exports: `cdp`.

[`src/hooks/productData/cdp.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/cdp.tsx) · code · 11140 bytes

### data_warehouse.tsx

this data powers the data warehouse page, but the product icons that appear on /products and
in the menu bar are defined in productNavigation.ts. Notable exports: `dataWarehouse`.

[`src/hooks/productData/data_warehouse.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/data_warehouse.tsx) · code · 24687 bytes

### endpoints.tsx

import React from 'react' import { IconChat, IconConfetti, IconCursorClick, IconEndpoints,
IconEye, IconInfo, IconList, IconMagic, IconMessage, IconRocket, IconSparkles, } from
'@posthog/icons' import { features } from './endpoints/features' import { applications,
topFeatures } from './endpoints/slides' import { getTool } from '../../data/tools' Notable
exports: `endpoints`.

[`src/hooks/productData/endpoints.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/endpoints.tsx) · code · 22556 bytes

### error_tracking.tsx

import React from 'react' import { IconChat, IconCheckCircle, IconCode, IconConfetti,
IconCursorClick, IconEye, IconInfo, IconList, IconMagic, IconMessage, IconPieChart,
IconRocket, IconSparkles, IconWarning, } from '@posthog/icons' import { features } from
'./error_tracking/features' import { applications, topFeatures } from
'./error_tracking/slides' import Notable exports: `errorTracking`.

[`src/hooks/productData/error_tracking.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/error_tracking.tsx) · code · 22066 bytes

### experiments.tsx

import React from 'react' import { getTool } from '../../data/tools' import { IconChat,
IconCheckCircle, IconCode, IconConfetti, IconCursorClick, IconEye, IconFlask, IconInfo,
IconList, IconMagic, IconMessage, IconPieChart, IconRocket, IconSparkles, IconToggle, } from
'@posthog/icons' import { features } from './experiments/features' import { applications, t
Notable exports: `experiments`.

[`src/hooks/productData/experiments.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/experiments.tsx) · code · 26040 bytes

### feature_flags.tsx

import React from 'react' import { IconChat, IconCheckCircle, IconCode, IconConfetti,
IconCursorClick, IconEye, IconInfo, IconList, IconMagic, IconMessage, IconPieChart,
IconRocket, IconSparkles, IconToggle, } from '@posthog/icons' import { features } from
'./feature_flags/features' import { applications, topFeatures } from
'./feature_flags/slides' import { Notable exports: `featureFlags`.

[`src/hooks/productData/feature_flags.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/feature_flags.tsx) · code · 22938 bytes

### group_analytics.tsx

import React from 'react' import { IconCode, IconConfetti, IconCursorClick, IconEye,
IconInfo, IconMagic, IconPeople, IconPiggyBank, IconRocket, } from '@posthog/icons' import {
GroupAnalyticsHowToUse, GroupAnalyticsInstallation, GroupAnalyticsPricing,
GroupAnalyticsPricingCTA, } from 'components/GroupAnalytics/Sections' import { getTool }
from '../../data/t Notable exports: `groupAnalytics`.

[`src/hooks/productData/group_analytics.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/group_analytics.tsx) · code · 5325 bytes

### inbox.tsx

import { IconNotification } from '@posthog/icons' import { getTool } from '../../data/tools'
Notable exports: `inbox`.

[`src/hooks/productData/inbox.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/inbox.tsx) · code · 438 bytes

### logs.tsx

import React from 'react' import { IconActivity, IconChat, IconCheckCircle, IconCode,
IconConfetti, IconCursorClick, IconEye, IconInfo, IconList, IconMagic, IconPieChart,
IconRocket, IconSparkles, } from '@posthog/icons' import { HedgehogMagnifyingGlass } from
'@posthog/brand/hoggies' import { features } from './logs/features' import { applications,
topFeatu Notable exports: `logs`.

[`src/hooks/productData/logs.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/logs.tsx) · code · 15964 bytes

### mcp_analytics.tsx

import React from 'react' import { IconPlug, IconTarget, IconThoughtBubble,
IconListTreeConnected, IconRewindPlay, IconSparkles, IconGraph, } from '@posthog/icons'
import OSButton from 'components/OSButton' import { getTool } from '../../data/tools'
Notable exports: `mcpAnalytics`.

[`src/hooks/productData/mcp_analytics.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/mcp_analytics.tsx) · code · 10035 bytes

### posthog_ai.tsx

import React from 'react' import { IconBolt, IconGraph, IconPieChart, IconToggle,
IconRewindPlay, IconMessage, IconFlask, IconLlmAnalytics, IconWarning, IconAsterisk,
IconSparkles, IconPlug, } from '@posthog/icons' import { StickerPath } from
'components/Stickers/Stickers' import { getTool } from '../../data/tools' Notable exports:
`posthog_ai`.

[`src/hooks/productData/posthog_ai.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/posthog_ai.tsx) · code · 47557 bytes

### posthog_desktop.tsx

import { IconLaptop } from '@posthog/icons' import { getTool } from '../../data/tools'
Notable exports: `posthogDesktop`.

[`src/hooks/productData/posthog_desktop.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/posthog_desktop.tsx) · code · 411 bytes

### product_analytics.tsx

import React from 'react' import { IconChat, IconCheckCircle, IconCode, IconConfetti,
IconCursorClick, IconEye, IconGraph, IconInfo, IconList, IconMagic, IconMessage,
IconPieChart, IconRocket, IconSparkles, } from '@posthog/icons' import {
MAX_PRODUCT_ANALYTICS, MILLION, TEN_MILLION } from 'components/Pricing/pricingLogic' import
{ features } from './product Notable exports: `productAnalytics`.

[`src/hooks/productData/product_analytics.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/product_analytics.tsx) · code · 23806 bytes

### realtime_destinations.tsx

import { IconDecisionTree } from '@posthog/icons' Notable exports: `realtimeDestinations`.

[`src/hooks/productData/realtime_destinations.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/realtime_destinations.tsx) · code · 906 bytes

### replay_vision.tsx

import React from 'react' import { getWizardFrameworkRows } from 'constants/installation-
taxonomy' import { IconEye, IconPeople, IconCursorClick, IconList, IconChat, IconConfetti,
IconNewspaper, IconMessage, IconCode, IconRocket, IconInfo, IconCheckCircle, IconPieChart,
IconGraph, } from '@posthog/icons' import type { CTALinkKey } from 'components/CTAs' impo
Notable exports: `replayVision`.

[`src/hooks/productData/replay_vision.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/replay_vision.tsx) · code · 14797 bytes

### session_replay.tsx

import React from 'react' import { IconChat, IconCheckCircle, IconCode, IconConfetti,
IconCursorClick, IconEye, IconInfo, IconList, IconMagic, IconMessage, IconPieChart,
IconRewindPlay, IconRocket, IconSparkles, } from '@posthog/icons' import { features } from
'./session_replay/features' import { applications, topFeatures } from
'./session_replay/slides' imp Notable exports: `sessionReplay`.

[`src/hooks/productData/session_replay.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/session_replay.tsx) · code · 35787 bytes

### support.tsx

import React from 'react' import { IconChat, IconConfetti, IconCursorClick, IconEye,
IconGraph, IconInfo, IconList, IconMagic, IconRocket, IconSparkles, IconSupport, } from
'@posthog/icons' import { applications, topFeatures } from './support/slides' Notable
exports: `support`.

[`src/hooks/productData/support.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/support.tsx) · code · 8405 bytes

### surveys.tsx

import React from 'react' import { getTool } from '../../data/tools' import { IconChat,
IconCheckCircle, IconCode, IconConfetti, IconCursorClick, IconEye, IconInfo, IconList,
IconMagic, IconMessage, IconPieChart, IconRocket, IconSparkles, } from '@posthog/icons'
import { features } from './surveys/features' import { applications, topFeatures } from
'./survey Notable exports: `surveys`.

[`src/hooks/productData/surveys.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/surveys.tsx) · code · 19990 bytes

### traces.tsx

import React from 'react' import { IconChat, IconCheckCircle, IconCode, IconConfetti,
IconCursorClick, IconEye, IconGanttChart, IconInfo, IconList, IconMagic, IconPieChart,
IconRocket, IconSparkles, } from '@posthog/icons' import { getTool } from '../../data/tools'
import { applications, topFeatures } from './traces/slides' Notable exports: `traces`.

[`src/hooks/productData/traces.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/traces.tsx) · code · 11625 bytes

### web_analytics.tsx

import React from 'react' import { IconChat, IconCheckCircle, IconCode, IconConfetti,
IconCursorClick, IconEye, IconInfo, IconList, IconMagic, IconMessage, IconPieChart,
IconRocket, IconSparkles, } from '@posthog/icons' import { MAX_PRODUCT_ANALYTICS, MILLION,
TEN_MILLION } from 'components/Pricing/pricingLogic' import Link from 'components/Link'
import MCPI Notable exports: `webAnalytics`.

[`src/hooks/productData/web_analytics.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/web_analytics.tsx) · code · 22479 bytes

### workflows.tsx

import React from 'react' import { IconChat, IconCheckCircle, IconCode, IconConfetti,
IconCursorClick, IconDecisionTree, IconEye, IconInfo, IconList, IconMagic, IconMessage,
IconPieChart, IconRocket, IconSparkles, } from '@posthog/icons' import { features } from
'./workflows/features' import { applications, topFeatures } from './workflows/slides' import
{ ge Notable exports: `workflows`.

[`src/hooks/productData/workflows.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/productData/workflows.tsx) · code · 17973 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
