<!-- quirq-wiki-generated repo=website dir=src/hooks -->

# website / src/hooks

Source: [src/hooks](https://github.com/quirq-ai/website/tree/main/src/hooks) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### skills.tsx

import { useMemo } from 'react' import { graphql, useStaticQuery } from 'gatsby' import
useProduct from './useProduct' import { skillsData, IncomingSkill } from './skillsData'
import { SkillResourceRef, ResolvedResource, toolStringToResource, mcpToolToProductHandle,
resolveSkillResource, resolveSkillResources, fallbackResolvedResource, } from
'./skillsResour Notable exports: `stageRank`, `slugifySkillName`, `useSkills`

[`src/hooks/skills.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/skills.tsx) · code · 10991 bytes

### skillsData.ts

Comprehensive skills dataset for the /skills library. Notable exports: `IncomingSkill`,
`skillsData`.

[`src/hooks/skillsData.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/skillsData.ts) · code · 179430 bytes

### skillsResourceRegistry.ts

import React from 'react' import { IconGraph } from '@posthog/icons' Notable exports:
`mcpToolToProductHandle`, `toolStringToResource`, `resolveSkillResource`,
`resolveSkillResources`, `fallbackResolvedResource`, `SkillResourceRef`, `ResolvedResource`,
`SKILL_RESOURCE_ALIASES`.

[`src/hooks/skillsResourceRegistry.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/skillsResourceRegistry.ts) · code · 8423 bytes

### toast.tsx

import { useContext } from 'react' import { Context } from '../context/Toast' Notable
exports: `IToast`, `useToast`.

[`src/hooks/toast.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/toast.tsx) · code · 374 bytes

### useActiveFeatureFlags.ts

import { useEffect, useState } from 'react' import usePostHog from './usePostHog' Notable
exports: `useActiveFeatureFlags`, `filterMenuByFlags`.

[`src/hooks/useActiveFeatureFlags.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useActiveFeatureFlags.ts) · code · 1754 bytes

### useAppStatus.ts

Status types from incident.io Notable exports: `NormalizedStatus`, `getStatusColor`,
`getStatusDescription`, `useAppStatus`.

[`src/hooks/useAppStatus.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useAppStatus.ts) · code · 3843 bytes

### useChat.tsx

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from
'react' import { navigate } from 'gatsby' import useInkeepSettings, { defaultQuickQuestions
} from './useInkeepSettings' import { ChatFrame } from 'components/Chat' import { useApp }
from '../context/App' Notable exports: `ChatProvider`, `ChatOverlay`, `useChat`.

[`src/hooks/useChat.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useChat.tsx) · code · 9664 bytes

### useCloud.tsx

import { useActiveFeatureFlags } from './useActiveFeatureFlags' Notable exports: `useCloud`.

[`src/hooks/useCloud.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useCloud.tsx) · code · 382 bytes

### useCommunityAlerts.ts

import { useEffect, useState } from 'react' import qs from 'qs' import { useUser } from
'./useUser' Notable exports: `useCommunityAlerts`, `AlertTeam`, `AlertTopic`.

[`src/hooks/useCommunityAlerts.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useCommunityAlerts.ts) · code · 6205 bytes

### useCommunityProfiles.ts

import React, { useEffect } from 'react' import useSWR from 'swr' import qs from 'qs' import
{ useUser } from './useUser' Notable exports: `fetchAllCommunityProfiles`,
`useCommunityProfiles`, `CommunityProfile`, `CommunityProfilesFilters`.

[`src/hooks/useCommunityProfiles.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useCommunityProfiles.ts) · code · 6354 bytes

### useCompanies.ts

import { useCallback, useEffect, useMemo, useState } from 'react' import useSWRInfinite from
'swr/infinite' import qs from 'qs' import { Job } from './useJobs' import Fuse from
'fuse.js' import debounce from 'lodash/debounce' import { useUser } from './useUser' Notable
exports: `useCompanies`, `Filters`, `Company`.

[`src/hooks/useCompanies.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useCompanies.ts) · code · 5466 bytes

### useContentData.ts

import { useStaticQuery, graphql } from 'gatsby' Notable exports: `useContentData`,
`ContentNode`, `ContentData`.

[`src/hooks/useContentData.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useContentData.ts) · code · 1016 bytes

### useCustomerDataInfrastructureNavigation.tsx

import { navigate } from 'gatsby' Notable exports:
`useCustomerDataInfrastructureNavigation`, `customerDataInfrastructureNav`.

[`src/hooks/useCustomerDataInfrastructureNavigation.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useCustomerDataInfrastructureNavigation.tsx) · code · 1987 bytes

### useCustomers.tsx

Import PNG logos (not converted to React components) Notable exports: `CustomerLogo`,
`Customer`.

[`src/hooks/useCustomers.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useCustomers.tsx) · code · 74041 bytes

### useDataVizNavigation.tsx

Define the navigation structure with handles Section headers are strings without handles,
product items are handles Notable exports: `useDataVizNavigation`, `DataVizNav`.

[`src/hooks/useDataVizNavigation.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useDataVizNavigation.tsx) · code · 2515 bytes

### useDesktopBadges.tsx

import React, { useEffect, useMemo, useState } from 'react' import NotificationBadge from
'components/NotificationBadge' import { useCartStore } from '../templates/merch/store'
Notable exports: `useDesktopBadges`, `DesktopBadges`.

[`src/hooks/useDesktopBadges.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useDesktopBadges.tsx) · code · 1023 bytes

### useEarlyAccessFeatures.ts

import { useCallback, useEffect, useRef, useState } from 'react' import { graphql,
useStaticQuery } from 'gatsby' import usePostHog from './usePostHog' Notable exports:
`useEarlyAccessFeatures`, `EarlyAccessFeatureStage`, `EarlyAccessFeatureAssignee`,
`EarlyAccessFeature`, `GroupedEarlyAccessFeatures`.

[`src/hooks/useEarlyAccessFeatures.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useEarlyAccessFeatures.ts) · code · 9850 bytes

### useExplorerLayout.tsx

import { useState, useEffect } from 'react' Notable exports: `useExplorerLayout`.

[`src/hooks/useExplorerLayout.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useExplorerLayout.tsx) · code · 1248 bytes

### useFeatureOwnership.tsx

import React, { useMemo } from 'react' import { PrivateLink } from
'../components/PrivateLink' import TeamMember from '../components/TeamMember' Notable
exports: `Feature`, `useFeatureOwnership`.

[`src/hooks/useFeatureOwnership.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useFeatureOwnership.tsx) · code · 18447 bytes

### useHorizontalScrollFade.tsx

import React, { useCallback, useEffect, useRef, useState } from 'react' Notable exports:
`useHorizontalScrollFade`, `HorizontalScrollFades`.

[`src/hooks/useHorizontalScrollFade.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useHorizontalScrollFade.tsx) · code · 3742 bytes

### useInactivityDetection.ts

import { useEffect, useState, useRef, useCallback } from 'react' import {
INACTIVITY_TIMEOUTS } from '../constants' import { useAppActions } from '../context/App'
Notable exports: `useInactivityDetection`.

[`src/hooks/useInactivityDetection.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useInactivityDetection.ts) · code · 3750 bytes

### useInkeepSettings.ts

import type { InkeepAIChatSettings, InkeepBaseSettings } from '@inkeep/cxkit-react' import {
useValues } from 'kea' import { layoutLogic } from 'logic/layoutLogic' import { useEffect,
useState } from 'react' type InkeepSharedSettings = { baseSettings: InkeepBaseSettings
aiChatSettings: InkeepAIChatSettings setBaseSettings: (baseSettings: InkeepBaseSettings)
Notable exports: `defaultQuickQuestions`.

[`src/hooks/useInkeepSettings.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useInkeepSettings.ts) · code · 10059 bytes

### useIntersectionObserver.ts

import { useRef, useState, useEffect } from 'react' Notable exports:
`useIntersectionObserver`.

[`src/hooks/useIntersectionObserver.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useIntersectionObserver.ts) · code · 2080 bytes

### useJobs.ts

import { useMemo } from 'react' import useSWRInfinite from 'swr/infinite' import qs from
'qs' import { Company } from './useCompanies' Notable exports: `useJobs`, `Job`.

[`src/hooks/useJobs.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useJobs.ts) · code · 1461 bytes

### useMediaLibrary.tsx

import React from 'react' import useSWRInfinite from 'swr/infinite' import qs from 'qs'
import { useUser } from './useUser' Notable exports: `useMediaLibrary`.

[`src/hooks/useMediaLibrary.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useMediaLibrary.tsx) · code · 3446 bytes

### useMixtapes.ts

import useSWR from 'swr' import qs from 'qs' import { useUser } from './useUser' Notable
exports: `Mixtape`, `useMixtapes`.

[`src/hooks/useMixtapes.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useMixtapes.ts) · code · 2720 bytes

### usePocketGuideCounts.ts

import { graphql, useStaticQuery } from 'gatsby' import { volumeById } from
'../constants/pocketGuides' Notable exports: `usePocketGuideCounts`.

[`src/hooks/usePocketGuideCounts.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/usePocketGuideCounts.ts) · code · 1572 bytes

### usePostHog.ts

import type { PostHog } from '../types/posthog' Provides a default export as the module's
public entry.

[`src/hooks/usePostHog.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/usePostHog.ts) · code · 230 bytes

### usePostHogInstance.ts

import { useState, useEffect } from 'react' Notable exports: `usePostHogInstance`.

[`src/hooks/usePostHogInstance.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/usePostHogInstance.ts) · code · 772 bytes

### usePrimeEarlyAccessFeatures.ts

import { useEffect } from 'react' import usePostHog from './usePostHog' Notable exports:
`usePrimeEarlyAccessFeatures`.

[`src/hooks/usePrimeEarlyAccessFeatures.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/usePrimeEarlyAccessFeatures.ts) · code · 1997 bytes

### useProduct.ts

import { useMemo } from 'react' import { IconThoughtBubble, IconCoffee, IconDashboard,
IconDownload, IconNotebook, IconMagicWand, IconToolbar, IconWebhooks, IconClockRewind,
IconRocket, IconLifecycle, IconClock, IconPeople, IconTerminal, IconFunnels, IconUserPaths,
IconCorrelationAnalysis, IconRetention, IconStickiness, IconAsterisk, IconAI, IconTestTube,
Ic Notable exports: `useProduct`.

[`src/hooks/useProduct.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useProduct.ts) · code · 120230 bytes

### useProductInterest.ts

import { useEffect } from 'react' import { showedInterest, getProductSlugFromPath } from
'../lib/productInterest' Notable exports: `useProductInterest`,
`useProductInterestFromPathname`.

[`src/hooks/useProductInterest.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useProductInterest.ts) · code · 820 bytes

### useProductOSNavigation.tsx

Define the navigation structure with handles Notable exports: `useProductOSNavigation`,
`ProductOSNav`, `productOSNav`.

[`src/hooks/useProductOSNavigation.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useProductOSNavigation.tsx) · code · 3762 bytes

### useProducts.tsx

import { allProductsData } from 'components/Pricing/Pricing' Notable exports: `useProducts`.

[`src/hooks/useProducts.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useProducts.tsx) · code · 7933 bytes

### useQuestions.tsx

import React from 'react' Notable exports: `useQuestions`.

[`src/hooks/useQuestions.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useQuestions.tsx) · code · 6642 bytes

### useRoadmap.tsx

import { graphql, useStaticQuery } from 'gatsby' Notable exports: `Roadmap`, `useRoadmap`.

[`src/hooks/useRoadmap.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useRoadmap.tsx) · code · 1703 bytes

### useRoadmapEarlyAccessFeatures.ts

import { useCallback, useMemo } from 'react' import { graphql, useStaticQuery } from
'gatsby' import useEarlyAccessFeatures, { EarlyAccessFeature } from
'./useEarlyAccessFeatures' Notable exports: `useRoadmapEarlyAccessFeatures`,
`RoadmapEarlyAccessFeature`.

[`src/hooks/useRoadmapEarlyAccessFeatures.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useRoadmapEarlyAccessFeatures.ts) · code · 5857 bytes

### useRoadmaps.ts

import React from 'react' import useSWRInfinite from 'swr/infinite' import qs from 'qs'
import { useUser } from './useUser' Notable exports: `useRoadmaps`, `EmojiReaction`,
`fetchRoadmapReactions`, `addRoadmapEmojiReaction`.

[`src/hooks/useRoadmaps.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useRoadmaps.ts) · code · 4529 bytes

### useSourcePlatforms.ts

import { useStaticQuery, graphql } from 'gatsby' Notable exports: `useSourcePlatforms`.

[`src/hooks/useSourcePlatforms.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useSourcePlatforms.ts) · code · 624 bytes

### useSubscribedQuestions.tsx

import { useState, useEffect } from 'react' import qs from 'qs' import { QuestionData } from
'lib/strapi' import { useUser } from './useUser' Notable exports: `useSubscribedQuestions`.

[`src/hooks/useSubscribedQuestions.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useSubscribedQuestions.tsx) · code · 5952 bytes

### useTaskOwnership.tsx

import { useMemo } from 'react' Notable exports: `Task`, `TaskGroup`, `useTaskOwnership`.

[`src/hooks/useTaskOwnership.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useTaskOwnership.tsx) · code · 5634 bytes

### useTeam.tsx

import { useEffect, useState } from 'react' import { useUser } from './useUser' import qs
from 'qs' Notable exports: `useTeam`.

[`src/hooks/useTeam.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useTeam.tsx) · code · 4743 bytes

### useTeamCrestMap.ts

import { teamQuery } from 'components/People' Notable exports: `useTeamCrestMap`.

[`src/hooks/useTeamCrestMap.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useTeamCrestMap.ts) · code · 439 bytes

### useTeamMembers.ts

import { useEffect, useState } from 'react' import { useUser } from './useUser' import qs
from 'qs' Notable exports: `useTeamMembers`, `TeamMember`.

[`src/hooks/useTeamMembers.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useTeamMembers.ts) · code · 6542 bytes

### useTeamUpdates.tsx

import { useEffect, useState } from 'react' import qs from 'qs' Notable exports:
`useTeamUpdates`, `Update`.

[`src/hooks/useTeamUpdates.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useTeamUpdates.tsx) · code · 2196 bytes

### useTheme.tsx

import { useState, useEffect } from 'react' Notable exports: `useTheme`, `ThemeOption`,
`themeOptions`, `getWallpaperClasses`, `getThemeSpecificBackgroundColors`.

[`src/hooks/useTheme.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useTheme.tsx) · code · 3253 bytes

### useUser.tsx

Sentinel value used by posthog-js for cookieless tracking mode Notable exports: `User`,
`DisambiguationResult`, `UserContext`, `UserProvider`, `useUser`.

[`src/hooks/useUser.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useUser.tsx) · code · 31385 bytes

### useUserLocation.ts

import { useState, useEffect } from 'react' Notable exports: `useUserLocation`.

[`src/hooks/useUserLocation.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useUserLocation.ts) · code · 2555 bytes

### useVideos.ts

import { useState, useEffect } from 'react' import { videos as baseVideos, Video } from
'../data/videos' Notable exports: `useVideos`.

[`src/hooks/useVideos.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useVideos.ts) · code · 975 bytes

### useWindowLayoutAttributes.ts

import { useAppWindows } from '../context/App' Notable exports: `useWindowLayoutAttributes`.

[`src/hooks/useWindowLayoutAttributes.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useWindowLayoutAttributes.ts) · code · 551 bytes

### useWistiaThumbnail.ts

import { useState, useEffect } from 'react' Notable exports: `useWistiaThumbnail`.

[`src/hooks/useWistiaThumbnail.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useWistiaThumbnail.ts) · code · 1330 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
