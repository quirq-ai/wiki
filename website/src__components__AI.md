<!-- quirq-wiki-generated repo=website dir=src/components/AI -->

# website / src/components/AI

Source: [src/components/AI](https://github.com/quirq-ai/website/tree/main/src/components/AI) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AIEverywhereSlide.tsx

import React from 'react' import { IconArrowUpRight, IconPlug } from '@posthog/icons' import
Link from 'components/Link' import CloudinaryImage from 'components/CloudinaryImage' import
ScrollArea from 'components/RadixUI/ScrollArea' import { LOGOS } from 'constants/logos'
Notable exports: `AIEverywhereSlide`.

[`src/components/AI/AIEverywhereSlide.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/AIEverywhereSlide.tsx) · code · 6539 bytes

### CustomCapabilitiesSlide.tsx

import React from 'react' import Tabs from 'components/RadixUI/Tabs' import ScrollArea from
'components/RadixUI/ScrollArea' import CloudinaryImage from 'components/CloudinaryImage'
import { IconMap, IconRewindPlay, IconSearch, IconSparkles } from '@posthog/icons' Notable
exports: `CustomCapabilitiesSlide`.

[`src/components/AI/CustomCapabilitiesSlide.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/CustomCapabilitiesSlide.tsx) · code · 10341 bytes

### CustomPersonasSlide.tsx

import React from 'react' import Markdown from 'components/Squeak/components/Markdown'
import { IconCheck } from '@posthog/icons' import Link from 'components/Link' import {
graphql, useStaticQuery } from 'gatsby' import OSTabs from "components/OSTabs" import
CloudinaryImage from 'components/CloudinaryImage' Notable exports: `CustomPersonasSlide`.

[`src/components/AI/CustomPersonasSlide.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/CustomPersonasSlide.tsx) · code · 6372 bytes

### CustomRoadmapSlide.tsx

import React from 'react' import Link from 'components/Link' import
useRoadmapEarlyAccessFeatures, { RoadmapEarlyAccessFeature } from
'hooks/useRoadmapEarlyAccessFeatures' import { ROADMAP_STAGE_STYLES } from
'components/Roadmap/roadmapStageStyles' Notable exports: `CustomRoadmapSlide`.

[`src/components/AI/CustomRoadmapSlide.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/CustomRoadmapSlide.tsx) · code · 5335 bytes

### TerminalCapabilities.tsx

import React from 'react' import TerminalTabs from './TerminalTabs' import { ASCIIBox } from
'./TerminalSection' Notable exports: `TerminalCapabilities`.

[`src/components/AI/TerminalCapabilities.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/TerminalCapabilities.tsx) · code · 5875 bytes

### TerminalDemo.tsx

import React from 'react' import Link from 'components/Link' Notable exports:
`TerminalDemo`.

[`src/components/AI/TerminalDemo.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/TerminalDemo.tsx) · code · 4371 bytes

### TerminalFeatures.tsx

import React from 'react' import TerminalTabs from './TerminalTabs' Notable exports:
`TerminalFeatures`.

[`src/components/AI/TerminalFeatures.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/TerminalFeatures.tsx) · code · 3471 bytes

### TerminalLayout.tsx

import React, { ReactNode } from 'react' import ScrollArea from
'components/RadixUI/ScrollArea' Notable exports: `TerminalLayout`.

[`src/components/AI/TerminalLayout.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/TerminalLayout.tsx) · code · 941 bytes

### TerminalPersonas.tsx

import React from 'react' import TerminalTabs from './TerminalTabs' import { wrapText } from
'./TerminalSection' Notable exports: `TerminalPersonas`.

[`src/components/AI/TerminalPersonas.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/TerminalPersonas.tsx) · code · 6807 bytes

### TerminalRoadmap.tsx

import React from 'react' import Link from 'components/Link' import
useRoadmapEarlyAccessFeatures, { RoadmapEarlyAccessFeature } from
'hooks/useRoadmapEarlyAccessFeatures' Notable exports: `TerminalRoadmap`.

[`src/components/AI/TerminalRoadmap.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/TerminalRoadmap.tsx) · code · 4521 bytes

### TerminalSection.tsx

import React, { ReactNode, useRef, useState, useLayoutEffect } from 'react' Notable exports:
`TerminalSection`, `ASCIIBox`, `wrapText`, `SectionDivider`.

[`src/components/AI/TerminalSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/TerminalSection.tsx) · code · 3903 bytes

### TerminalTabs.tsx

import React, { useState } from 'react' Notable exports: `TerminalTabs`.

[`src/components/AI/TerminalTabs.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/TerminalTabs.tsx) · code · 2884 bytes

### TerminalVideos.tsx

import React, { useState } from 'react' import { ASCIIBox } from './TerminalSection' import
Link from 'components/Link' import { DebugContainerQuery } from
"components/DebugContainerQuery" Notable exports: `TerminalVideos`.

[`src/components/AI/TerminalVideos.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/TerminalVideos.tsx) · code · 4483 bytes

### TerminalView.tsx

import React from 'react' import SEO from 'components/seo' import TerminalLayout from
'components/AI/TerminalLayout' import TerminalSection, { ASCIIBox, wrapText, SectionDivider
} from 'components/AI/TerminalSection' import TerminalFeatures from
'components/AI/TerminalFeatures' import TerminalDemo from 'components/AI/TerminalDemo'
import TerminalVideos from Notable exports: `TerminalView`.

[`src/components/AI/TerminalView.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/AI/TerminalView.tsx) · code · 14448 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
