<!-- quirq-wiki-generated repo=website dir=src/pages/community -->

# website / src/pages/community

Source: [src/pages/community](https://github.com/quirq-ai/website/tree/main/src/pages/community) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### achievements.tsx

import { IconCheck } from '@posthog/icons' import CloudinaryImage from
'components/CloudinaryImage' import Link from 'components/Link' import ScrollArea from
'components/RadixUI/ScrollArea' import SEO from 'components/seo' import { graphql,
useStaticQuery } from 'gatsby' import { useUser } from 'hooks/useUser' import React from
'react' Notable exports: `Achievements`.

[`src/pages/community/achievements.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/community/achievements.tsx) · code · 8749 bytes

### alerts.tsx

import React, { useEffect, useState } from 'react' import { navigate } from 'gatsby' import
{ IconX } from '@posthog/icons' import { SectionTitle } from 'components/Community/Layout'
import Link from 'components/Link' import OSTable from 'components/OSTable' import Select
from 'components/Select' import Spinner from 'components/Spinner' import Tooltip from '
Notable exports: `CommunityAlerts`.

[`src/pages/community/alerts.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/community/alerts.tsx) · code · 9288 bytes

### dashboard.tsx

import React, { useEffect } from 'react' import { navigate } from 'gatsby' import { useUser
} from 'hooks/useUser' import CommunityLayout, { SectionTitle } from
'components/Community/Layout' import QuestionsTable from
'components/Questions/QuestionsTable' import { useQuestions } from 'hooks/useQuestions'
import Link from 'components/Link' import useTopicsNav Notable exports: `CommunityPage`.

[`src/pages/community/dashboard.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/community/dashboard.tsx) · code · 3553 bytes

### directory.tsx

import React, { useCallback, useEffect, useMemo, useState } from 'react' import debounce
from 'lodash/debounce' import SEO from 'components/seo' import Editor from
'components/Editor' import OSTable from 'components/OSTable' import Link from
'components/Link' import { IconChevronDown, IconDownload, IconSpinner } from
'@posthog/icons' import { useUser } from Notable exports: `CommunityDirectory`.

[`src/pages/community/directory.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/community/directory.tsx) · code · 18026 bytes

### latest.tsx

import React from 'react' import { CallToAction } from 'components/CallToAction' import
QuestionsTable from 'components/Questions/QuestionsTable' import { useQuestions } from
'hooks/useQuestions' import CommunityLayout, { SectionTitle } from
'components/Community/Layout' Notable exports: `CommunityPage`.

[`src/pages/community/latest.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/community/latest.tsx) · code · 1271 bytes

### notifications.tsx

import Layout from 'components/Layout' import { communityMenu } from '../../navs' import
React, { useEffect } from 'react' import { useUser } from 'hooks/useUser' import Link from
'components/Link' import dayjs from 'dayjs' import relativeTime from
'dayjs/plugin/relativeTime' import isSameOrAfter from 'dayjs/plugin/isSameOrAfter' import {
IconX } from '@post Notable exports: `Notifications`.

[`src/pages/community/notifications.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/community/notifications.tsx) · code · 5382 bytes

### reputation.tsx

import React from 'react' import Link from 'components/Link' import ScrollArea from
'components/RadixUI/ScrollArea' import SEO from 'components/seo' import LevelBadge from
'components/Squeak/components/LevelBadge' import { LEVELS } from
'components/Squeak/util/getLevel' Notable exports: `Reputation`.

[`src/pages/community/reputation.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/community/reputation.tsx) · code · 2189 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
