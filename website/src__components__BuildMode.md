<!-- quirq-wiki-generated repo=website dir=src/components/BuildMode -->

# website / src/components/BuildMode

Source: [src/components/BuildMode](https://github.com/quirq-ai/website/tree/main/src/components/BuildMode) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Hero.tsx

import React, { useState } from 'react' import { IconInfo } from '@posthog/icons' import
usePostHog from 'hooks/usePostHog' import OSButton from 'components/OSButton' import Tooltip
from 'components/Tooltip' import Wordmark from './Wordmark' Notable exports: `HeroHeader`,
`Hero`.

[`src/components/BuildMode/Hero.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/Hero.tsx) · code · 4122 bytes

### Masthead.tsx

import React from 'react' Notable exports: `Masthead`, `LOGO_SRC`.

[`src/components/BuildMode/Masthead.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/Masthead.tsx) · code · 656 bytes

### PinnedPostCard.tsx

import React from 'react' import Link from 'components/Link' import PostImage from
'components/PostsIndex/PostImage' import { PostSummary } from 'components/PostsIndex/types'
import { getByline, getSubtitle, rand } from 'components/PostsIndex/utils' Notable exports:
`PinnedPostCard`.

[`src/components/BuildMode/PinnedPostCard.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/PinnedPostCard.tsx) · code · 3557 bytes

### README.md

The project README (“BuildMode”). The newsletter-specific building blocks for /newsletter
(src/pages/newsletter.tsx) — the newsletter's rebranded home. The page itself is only the
ReaderView shell, the layout, and the GraphQL query; what it renders lives here and in
src/components/PostsIndex/, which holds the generic posts-index pieces (featured post,
gallery, tag filter, search/sort) shared with /blog.

[`src/components/BuildMode/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/README.md) · code · 13972 bytes

### RecentPosts.tsx

import React, { useRef } from 'react' import { IconChevronLeft, IconChevronRight } from
'@posthog/icons' import PinnedPostCard from './PinnedPostCard' import { PostSummary } from
'components/PostsIndex/types' import { usePinnedCardSwing } from './usePinnedCardSwing'
import { useScrollEdges } from './useScrollEdges' Notable exports: `RecentPosts`.

[`src/components/BuildMode/RecentPosts.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/RecentPosts.tsx) · code · 3647 bytes

### Wordmark.tsx

import React, { useRef } from 'react' import usePostHog from 'hooks/usePostHog' import {
usePrefersReducedMotion } from 'components/Code/usePrefersReducedMotion' import {
useCopyConfettiZIndex } from 'components/PlatformInstall/confetti' import { LOGO_SRC } from
'./Masthead' import { fireHammerSwarm } from './hammerBurst' import { igniteWordmark } from
'./wo Notable exports: `Wordmark`.

[`src/components/BuildMode/Wordmark.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/Wordmark.tsx) · code · 3911 bytes

### hammerBurst.ts

import { fireKnocks } from './hammerSound' import { resolveTokenColors } from
'./tokenColors' Notable exports: `fireHammerSwarm`.

[`src/components/BuildMode/hammerBurst.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/hammerBurst.ts) · code · 15028 bytes

### hammerSound.ts

The knock that goes with the wordmark's hammer burst, synthesized with Web Audio rather than
shipped as an audio file: `static/sounds/` only holds the tape player's samples, and a knock
is simple enough to build from a noise burst plus a low thump. Notable exports:
`fireKnocks`.

[`src/components/BuildMode/hammerSound.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/hammerSound.ts) · code · 3593 bytes

### tokenColors.ts

Colors are read off a probe element carrying the token classes and handed back as hex,
rather than duplicated here as literals. Notable exports: `resolveTokenColors`.

[`src/components/BuildMode/tokenColors.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/tokenColors.ts) · code · 999 bytes

### usePinnedCardSwing.ts

import { RefObject, useEffect } from 'react' import { usePrefersReducedMotion } from
'components/Code/usePrefersReducedMotion' import { rand } from 'components/PostsIndex/utils'
Notable exports: `usePinnedCardSwing`.

[`src/components/BuildMode/usePinnedCardSwing.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/usePinnedCardSwing.ts) · code · 6463 bytes

### useScrollEdges.ts

import { RefObject, useEffect, useState } from 'react' Notable exports: `useScrollEdges`.

[`src/components/BuildMode/useScrollEdges.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/useScrollEdges.ts) · code · 1516 bytes

### wordmarkFire.ts

import { resolveTokenColors } from './tokenColors' Notable exports: `igniteWordmark`.

[`src/components/BuildMode/wordmarkFire.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BuildMode/wordmarkFire.ts) · code · 9332 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
