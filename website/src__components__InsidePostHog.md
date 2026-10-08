<!-- quirq-wiki-generated repo=website dir=src/components/InsidePostHog -->

# website / src/components/InsidePostHog

Source: [src/components/InsidePostHog](https://github.com/quirq-ai/website/tree/main/src/components/InsidePostHog) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Anniversaries.tsx

import React, { useEffect, useState } from 'react' import PersonCard from './PersonCard'
import qs from 'qs' import dayjs from 'dayjs' Notable exports: `Anniversaries`.

[`src/components/InsidePostHog/Anniversaries.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/InsidePostHog/Anniversaries.tsx) · code · 2907 bytes

### Changelog.tsx

import { CallToAction } from 'components/CallToAction' import Link from 'components/Link'
import { topicIcons } from 'components/Questions/TopicsTable' import { useRoadmaps } from
'hooks/useRoadmaps' import React from 'react' Notable exports: `Changelog`.

[`src/components/InsidePostHog/Changelog.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/InsidePostHog/Changelog.tsx) · code · 4200 bytes

### FeatureRequests.tsx

import { CallToAction } from 'components/CallToAction' import { VoteBox } from
'components/Roadmap' import { graphql, useStaticQuery } from 'gatsby' import { useRoadmaps }
from 'hooks/useRoadmaps' import React from 'react' Notable exports: `FeatureRequests`.

[`src/components/InsidePostHog/FeatureRequests.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/InsidePostHog/FeatureRequests.tsx) · code · 3253 bytes

### Merch.tsx

import CloudinaryImage from 'components/CloudinaryImage' import { graphql, useStaticQuery }
from 'gatsby' import { GatsbyImage, getImage } from 'gatsby-plugin-image' import React from
'react' import Link from 'components/Link' import { StaticImage } from 'gatsby-plugin-image'
Notable exports: `Merch`.

[`src/components/InsidePostHog/Merch.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/InsidePostHog/Merch.tsx) · code · 1776 bytes

### Newbies.tsx

import React, { useEffect, useState } from 'react' import PersonCard from './PersonCard'
import qs from 'qs' import dayjs from 'dayjs' Notable exports: `Newbies`.

[`src/components/InsidePostHog/Newbies.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/InsidePostHog/Newbies.tsx) · code · 2293 bytes

### PersonCard.tsx

import Link from 'components/Link' import React from 'react' Notable exports: `PersonCard`.

[`src/components/InsidePostHog/PersonCard.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/InsidePostHog/PersonCard.tsx) · code · 656 bytes

### Posts.tsx

import { CallToAction } from 'components/CallToAction' import { usePosts } from
'components/Edition/hooks/usePosts' import { tagsHideFromIndex } from
'components/Edition/Posts' import Link from 'components/Link' import React from 'react'
Notable exports: `Posts`.

[`src/components/InsidePostHog/Posts.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/InsidePostHog/Posts.tsx) · code · 5317 bytes

### Questions.tsx

import React from 'react' import { IconArrowRight, IconInfo } from '@posthog/icons' import
Link from 'components/Link' import Tooltip from 'components/Tooltip' import { useQuestions }
from 'hooks/useQuestions' import { useUser } from 'hooks/useUser' import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime' import isToday from 'dayjs/plug Notable
exports: `Questions`.

[`src/components/InsidePostHog/Questions.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/InsidePostHog/Questions.tsx) · code · 6571 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
