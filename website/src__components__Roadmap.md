<!-- quirq-wiki-generated repo=website dir=src/components/Roadmap -->

# website / src/components/Roadmap

Source: [src/components/Roadmap](https://github.com/quirq-ai/website/tree/main/src/components/Roadmap) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### EarlyAccessFeaturesSection.tsx

@ts-expect-error @gatsbyjs/reach-router does not ship TypeScript declarations. Notable
exports: `EarlyAccessFeaturesSection`.

[`src/components/Roadmap/EarlyAccessFeaturesSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Roadmap/EarlyAccessFeaturesSection.tsx) · code · 42130 bytes

### InProgress.tsx

import { Check, ClosedIssue, OpenIssue, Plus } from 'components/Icons/Icons' import Link
from 'components/Link' import React, { useEffect, useState } from 'react' import { IRoadmap
} from '.' import { Question } from 'components/Squeak' import { useUser } from
'hooks/useUser' import { useApp } from '../../context/App' import Spinner from
'components/Spinner' Notable exports: `InProgress`.

[`src/components/Roadmap/InProgress.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Roadmap/InProgress.tsx) · code · 20105 bytes

### README.md

The project README (“Roadmap board”). EarlyAccessFeaturesSection powers /roadmap. It
presents the same early-access data and enrollment flows as the PostHog app in a compact,
changelog-style board.

[`src/components/Roadmap/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Roadmap/README.md) · code · 8538 bytes

### RoadmapWindow.tsx

import RoadmapForm, { socialDefaults, Status } from 'components/RoadmapForm' import {
useUser } from 'hooks/useUser' import React, { useEffect, useState } from 'react' import
dayjs from 'dayjs' import qs from 'qs' import ScrollArea from
'components/RadixUI/ScrollArea' import ProgressBar from 'components/ProgressBar' import {
useWindow } from '../../context/W Notable exports: `RoadmapWindow`.

[`src/components/Roadmap/RoadmapWindow.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Roadmap/RoadmapWindow.tsx) · code · 5150 bytes

### UnderConsideration.tsx

import { GitHub } from 'components/Icons/Icons' import Link from 'components/Link' import
React from 'react' import { IRoadmap } from '.' Notable exports: `UnderConsideration`,
`Reactions`.

[`src/components/Roadmap/UnderConsideration.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Roadmap/UnderConsideration.tsx) · code · 2922 bytes

### UpdateWrapper.tsx

import { IconEllipsis } from '@posthog/icons' import Link from 'components/Link' import
RoadmapForm, { socialDefaults, Status } from 'components/RoadmapForm' import Tooltip from
'components/Tooltip' import { useUser } from 'hooks/useUser' import React, { useEffect,
useState } from 'react' import dayjs from 'dayjs' import qs from 'qs' Notable exports:
`UpdateWrapper`, `RoadmapSuccess`.

[`src/components/Roadmap/UpdateWrapper.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Roadmap/UpdateWrapper.tsx) · code · 9642 bytes

### index.tsx

import React, { useEffect, useMemo, useState } from 'react' import Markdown from 'markdown-
to-jsx' import { useUser } from 'hooks/useUser' import { CallToAction } from
'components/CallToAction' import { useRoadmaps } from 'hooks/useRoadmaps' import {
IconShieldLock, IconThumbsUp, IconThumbsUpFilled, IconUndo, IconClock, IconCalendar,
IconHome, IconUser, Icon Notable exports: `Roadmap`, `IRoadmap`, `ExportSubscribersButton`

[`src/components/Roadmap/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Roadmap/index.tsx) · code · 32435 bytes

### roadmapStageStyles.ts

export const ROADMAP_STAGE_STYLES = { beta: { text: 'text-green dark:text-green-2', surface:
'bg-green/10 dark:bg-green/15', border: 'border-green/30 dark:border-green-2/30', }, alpha:
{ text: 'text-blue dark:text-blue-2', surface: 'bg-blue/10 dark:bg-blue/15', border:
'border-blue/30 dark:border-blue-2/30', }, concept: { text: 'text-purple dark:text-purple'
Notable exports: `ROADMAP_STAGE_STYLES`.

[`src/components/Roadmap/roadmapStageStyles.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Roadmap/roadmapStageStyles.ts) · code · 565 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
