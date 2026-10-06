<!-- quirq-wiki-generated repo=website dir=src/pages/teams -->

# website / src/pages/teams

Source: [src/pages/teams](https://github.com/quirq-ai/website/tree/main/src/pages/teams) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### [slug].tsx

import React, { useState, useRef, useMemo, useEffect } from 'react' import { graphql,
useStaticQuery, navigate } from 'gatsby' import { useUser } from 'hooks/useUser' import {
IconPencil, IconInfo, IconX, IconCrown, IconShieldLock, IconArchive } from '@posthog/icons'
import dayjs from 'dayjs' import OSButton from 'components/OSButton' import ReaderView from
Notable exports: `TeamPage`.

[`src/pages/teams/[slug].tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/teams/[slug].tsx) · code · 43389 bytes

### index.tsx

import { IconPlus } from '@posthog/icons' import Link from 'components/Link' import OSButton
from 'components/OSButton' import Tooltip from 'components/RadixUI/Tooltip' import
ReaderView from 'components/ReaderView' import { SEO } from 'components/seo' import
TeamPatch from 'components/TeamPatch' import { TreeMenu } from 'components/TreeMenu' import
{ graphq Provides a default export as the module's public entry.

[`src/pages/teams/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/teams/index.tsx) · code · 20388 bytes

### team-ben.tsx

import React, { useMemo } from 'react' import { graphql, useStaticQuery } from 'gatsby'
import { IconInfo } from '@posthog/icons' import ReaderView from 'components/ReaderView'
import { TreeMenu } from 'components/TreeMenu' import SEO from 'components/seo' import
usePostHog from 'hooks/usePostHog' import Tooltip from 'components/RadixUI/Tooltip' import {
Fie Notable exports: `TeamBenPage`.

[`src/pages/teams/team-ben.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/teams/team-ben.tsx) · code · 15596 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
