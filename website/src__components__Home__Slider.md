<!-- quirq-wiki-generated repo=website dir=src/components/Home/Slider -->

# website / src/components/Home/Slider

Source: [src/components/Home/Slider](https://github.com/quirq-ai/website/tree/main/src/components/Home/Slider) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Icons.js

import React from 'react' Notable exports: `Analytics`, `SessionRecording`, `FeatureFlags`,
`ABTesting`, `EventPipelines`, `DataWarehouse`, `OpenSource`.

[`src/components/Home/Slider/Icons.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Slider/Icons.js) · code · 10221 bytes

### Slides.js

import CloudinaryImage from 'components/CloudinaryImage' import { IconArrowRight, IconBadge,
IconBrackets, IconBrowser, IconCheckbox, IconClock, IconColumns, IconDecisionTree,
IconDownload, IconFilter, IconFunnels, IconGear, IconGlobe, IconGridMasonry, IconHandMoney,
IconHogQL, IconLifecycle, IconLineGraph, IconMagicWand, IconMegaphone, IconPalette, IconPeop
Notable exports: `ProductAnalytics`, `WebAnalytics`, `SessionReplay`, `FeatureFlags`

[`src/components/Home/Slider/Slides.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Slider/Slides.js) · code · 51313 bytes

### index.js

import { IconChevronDown } from '@posthog/icons' import React, { useEffect, useRef, useState
} from 'react' import { slideButtons } from './slideButtons' import { ProductAnalytics,
SessionReplay, FeatureFlags, ABTesting, Surveys, DataPipeline, DataWarehouse, WebAnalytics,
aiObservability, } from './Slides' import { useInView } from 'react-intersection-observ
Notable exports: `Slider`.

[`src/components/Home/Slider/index.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Slider/index.js) · code · 7995 bytes

### slideButtons.js

export const slideButtons = [ { title: 'Product analytics', lottieSrc: '/lotties/product-
icons/product-analytics.lottie', color: 'blue', placeholderIcon: 'IconGraph', }, { title:
'Web analytics', lottieSrc: '/lotties/product-icons/web-analytics.lottie', color:
'[#36C46F]', placeholderIcon: 'IconPieChart', }, { title: 'Session replay', lottieSrc:
'/lotties/pr Notable exports: `slideButtons`.

[`src/components/Home/Slider/slideButtons.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Slider/slideButtons.js) · code · 1593 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
