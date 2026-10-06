<!-- quirq-wiki-generated repo=website dir=src/components/Docs -->

# website / src/components/Docs

Source: [src/components/Docs](https://github.com/quirq-ai/website/tree/main/src/components/Docs) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AnalyticsPlannerTip.js

import React from 'react' import { CalloutBox } from './CalloutBox' Notable exports:
`AnalyticsPlannerTip`.

[`src/components/Docs/AnalyticsPlannerTip.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/AnalyticsPlannerTip.js) · code · 528 bytes

### Breadcrumbs.js

import React from 'react' import { Link } from 'gatsby' Notable exports: `Breadcrumbs`.

[`src/components/Docs/Breadcrumbs.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/Breadcrumbs.js) · code · 880 bytes

### CalloutBox.js

import React from 'react' import * as Icons from '@posthog/icons' Notable exports:
`CalloutBox`.

[`src/components/Docs/CalloutBox.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/CalloutBox.js) · code · 1098 bytes

### ConfigBuilder.README.md

Markdown page “ConfigBuilder”. A reusable, two-panel interactive configuration builder for
SDK docs pages. Users toggle options on the left and see generated code update live on the
right.

[`src/components/Docs/ConfigBuilder.README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/ConfigBuilder.README.md) · code · 2975 bytes

### ConfigBuilder.tsx

import React, { useState, useMemo, useRef, useEffect } from 'react' import { SingleCodeBlock
} from 'components/CodeBlock' import OSButton from 'components/OSButton' import { OSInput,
OSSelect } from 'components/OSForm' import type { SelectOption as OSSelectOption } from
'components/OSForm/select' import { Checkbox } from 'components/RadixUI/Checkbox' import
Notable exports: `SelectOption`, `CheckboxOption`, `InputField`, `ToggleOption`

[`src/components/Docs/ConfigBuilder.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/ConfigBuilder.tsx) · code · 14475 bytes

### Contributors.js

import React from 'react' import { GatsbyImage, getImage } from 'gatsby-plugin-image'
Notable exports: `Contributors`.

[`src/components/Docs/Contributors.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/Contributors.js) · code · 959 bytes

### DecisionTree.tsx

import React, { useState, useEffect } from 'react' import { IconCheck, IconArrowLeft,
IconArrowRight, IconRevert } from '@posthog/icons' import OSButton from
'components/OSButton' Notable exports: `DecisionTreeOption`, `DecisionTreeQuestion`,
`DecisionTreeRecommendation`, `DecisionTreeProps`, `DecisionTree`.

[`src/components/Docs/DecisionTree.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/DecisionTree.tsx) · code · 6103 bytes

### EmbeddedSurvey.tsx

import React, { useEffect, useRef } from 'react' import { useInView } from 'react-
intersection-observer' Notable exports: `EmbeddedSurvey`.

[`src/components/Docs/EmbeddedSurvey.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/EmbeddedSurvey.tsx) · code · 1816 bytes

### EndpointsPlayground.tsx

import React, { useState, useEffect } from 'react' import Highlight, { defaultProps } from
'prism-react-renderer' import { darkTheme, lightTheme } from 'components/CodeBlock/theme'
import { useApp } from '../../context/App' import { IconChevronDown, IconTerminal } from
'@posthog/icons' import { AnimatePresence, motion } from 'framer-motion' import OSButton f
Notable exports: `EndpointsPlayground`, `QueryScenario`, `scenarios`.

[`src/components/Docs/EndpointsPlayground.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/EndpointsPlayground.tsx) · code · 24160 bytes

### GettingStarted.tsx

import React from 'react' import { Analytics } from 'components/ProductIcons' import {
CallToAction } from 'components/CallToAction' Notable exports: `GettingStarted`.

[`src/components/Docs/GettingStarted.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/GettingStarted.tsx) · code · 1315 bytes

### Integrate.tsx

import React from 'react' import { graphql, useStaticQuery } from 'gatsby' import List from
'components/List' import { getLogo } from '../../constants/logos' Notable exports: `SDKs`,
`Frameworks`.

[`src/components/Docs/Integrate.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/Integrate.tsx) · code · 5815 bytes

### InternalSidebarLink.tsx

import { useActions } from 'kea' import { scrollspyCaptureLogic } from
'logic/scrollspyCaptureLogic' import React from 'react' import { Link } from 'react-scroll'
import { useBreakpoint } from 'gatsby-plugin-breakpoints' import { useLayoutData } from
'components/Layout/hooks' Notable exports: `InternalSidebarLink`.

[`src/components/Docs/InternalSidebarLink.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/InternalSidebarLink.tsx) · code · 1425 bytes

### Intro.js

import React from 'react' import { CallToAction } from '../CallToAction' import
CloudinaryImage from '../CloudinaryImage' Notable exports: `Intro`.

[`src/components/Docs/Intro.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/Intro.js) · code · 2038 bytes

### Layout.tsx

import React from 'react' import { MDXProvider } from '@mdx-js/react' import { MDXRenderer }
from 'gatsby-plugin-mdx' Notable exports: `DocsLayout`.

[`src/components/Docs/Layout.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/Layout.tsx) · code · 7872 bytes

### MCPCallout.tsx

import React from 'react' import mcpRestMapping from '../../data/mcp-rest-mapping.json'
import mcpToolsData from '../../data/mcp-tools.json' Provides a default export as the
module's public entry.

[`src/components/Docs/MCPCallout.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/MCPCallout.tsx) · code · 1630 bytes

### MCPExecCommands.tsx

import React from 'react' import Markdown from 'components/Markdown' import mcpToolsData
from '../../data/mcp-tools.json' Provides a default export as the module's public entry.

[`src/components/Docs/MCPExecCommands.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/MCPExecCommands.tsx) · code · 377 bytes

### MCPTools.tsx

import React from 'react' import mcpToolsData from '../../data/mcp-tools.json' Provides a
default export as the module's public entry.

[`src/components/Docs/MCPTools.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/MCPTools.tsx) · code · 3120 bytes

### MainSidebar.js

import React, { useEffect, useRef, useState } from 'react' import Menu from './Menu' Notable
exports: `MainSidebar`.

[`src/components/Docs/MainSidebar.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/MainSidebar.js) · code · 1057 bytes

### Menu.js

import React, { useState } from 'react' import AnimateHeight from 'react-animate-height'
import { Link } from 'gatsby' Notable exports: `Menu`.

[`src/components/Docs/Menu.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/Menu.js) · code · 2929 bytes

### MobileSidebar.js

import React from 'react' import InternalSidebarLink from './InternalSidebarLink' Notable
exports: `InternalSidebar`.

[`src/components/Docs/MobileSidebar.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/MobileSidebar.js) · code · 1471 bytes

### Navigation.js

import cntl from 'cntl' import { Edit, Issue, MobileMenu } from 'components/Icons/Icons'
import Link from 'components/Link' import React from 'react' import SearchBar from
'./SearchBar' Notable exports: `Navigation`.

[`src/components/Docs/Navigation.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/Navigation.js) · code · 3450 bytes

### OnboardingContentWrapper.tsx

import React, { createContext, useContext, useState } from 'react' import { Steps, Step }
from 'components/Docs/Steps' import { MdxCodeBlock, CodeBlock, SingleCodeBlock } from
'components/CodeBlock' import { CalloutBox } from 'components/Docs/CalloutBox' import {
ProductScreenshot } from 'components/ProductScreenshot' import OSButton from
'components/OSButto Notable exports: `useMDXComponents`, `OnboardingContentWrapper`

[`src/components/Docs/OnboardingContentWrapper.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/OnboardingContentWrapper.tsx) · code · 6841 bytes

### PostHogIPs.tsx

Inline form: bold EU/US labels followed by comma-separated inline code chips. Uses the
InlineCode component so the chips render identically to the markdown backticks that were
previously hardcoded in posthog-ips.mdx. Renders two paragraphs to match the original
markdown output. Notable exports: `PostHogIPsInline`, `PostHogIPsTable`.

[`src/components/Docs/PostHogIPs.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/PostHogIPs.tsx) · code · 1812 bytes

### ProductChangelog.tsx

import React from 'react' import { useRoadmaps } from 'hooks/useRoadmaps' import Link from
'components/Link' import dayjs from 'dayjs' import Markdown from
'components/Squeak/components/Markdown' import { ChangelogEmojiReactions } from
'components/EmojiReactions' import { ChangelogPRMetadata } from
'components/ChangelogPRMetadata' import { useUser } from 'ho Notable exports

[`src/components/Docs/ProductChangelog.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/ProductChangelog.tsx) · code · 8867 bytes

### QuestLog.tsx

eslint-disable-next-line @typescript-eslint/ban-ts-comment @ts-ignore Notable exports:
`QuestLogItemProps`, `QuestLog`, `QuestLogItem`, `MobileQuestLogItem`.

[`src/components/Docs/QuestLog.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/QuestLog.tsx) · code · 33715 bytes

### ResourceItem.js

import React from 'react' import Link from 'components/Link' import { GatsbyImage, getImage
} from 'gatsby-plugin-image' import OSButton from 'components/OSButton' Notable exports:
`ResourceItem`.

[`src/components/Docs/ResourceItem.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/ResourceItem.js) · code · 1205 bytes

### SolvedQuestions.tsx

import React from 'react' import Link from 'components/Link' import { useQuestions } from
'hooks/useQuestions' import { IconCheckCircle, IconMessage } from '@posthog/icons' import
dayjs from 'dayjs' import relativeTime from 'dayjs/plugin/relativeTime' Notable exports:
`SolvedQuestions`.

[`src/components/Docs/SolvedQuestions.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/SolvedQuestions.tsx) · code · 5893 bytes

### Steps.tsx

eslint-disable-next-line @typescript-eslint/ban-ts-comment @ts-ignore eslint-disable-next-
line @typescript-eslint/ban-ts-comment @ts-ignore Notable exports: `StepProps`, `Steps`,
`Step`.

[`src/components/Docs/Steps.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/Steps.tsx) · code · 4863 bytes

### StickySidebar.js

import React, { useEffect, useRef, useState } from 'react' import Scrollspy from 'react-
scrollspy' import InternalSidebarLink from './InternalSidebarLink' Notable exports:
`StickySidebar`.

[`src/components/Docs/StickySidebar.js`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/StickySidebar.js) · code · 3401 bytes

### SurfaceCards.README.md

Markdown page “SurfaceCards”. A card grid for docs overview pages. Used for the two grids
the tool docs IA calls for – "Where you can use it" (the surfaces a tool runs on) and "Where
its data comes from" (its context/data sources).

[`src/components/Docs/SurfaceCards.README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/SurfaceCards.README.md) · code · 2611 bytes

### SurfaceCards.tsx

import React from 'react' import * as Icons from '@posthog/icons' Notable exports:
`SurfaceCard`, `SurfaceCards`.

[`src/components/Docs/SurfaceCards.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/SurfaceCards.tsx) · code · 1717 bytes

### Tutorials.tsx

import React from 'react' import List from 'components/List' import { CallToAction } from
'components/CallToAction' Notable exports: `Tutorials`.

[`src/components/Docs/Tutorials.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Docs/Tutorials.tsx) · code · 1168 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
