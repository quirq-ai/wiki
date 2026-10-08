<!-- quirq-wiki-generated repo=website dir=src/components/BlogLanding -->

# website / src/components/BlogLanding

Source: [src/components/BlogLanding](https://github.com/quirq-ai/website/tree/main/src/components/BlogLanding) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### CategoryGrid.tsx

import React from 'react' import Link from 'components/Link' import ZoomHover from
'components/ZoomHover' import slugify from 'slugify' import { DEFAULT_TAG_ICON, getTagIcon }
from './tagOptions' import { useCategoryTags } from './useCategoryTags' Notable exports:
`CategoryGrid`.

[`src/components/BlogLanding/CategoryGrid.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/BlogLanding/CategoryGrid.tsx) · code · 2130 bytes

### CategorySidebar.tsx

import React from 'react' import { TreeMenu } from 'components/TreeMenu' import {
useCategoryMenu } from './useCategoryMenu' import { LandingVariantProps } from './types'
Provides a default export as the module's public entry.

[`src/components/BlogLanding/CategorySidebar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/BlogLanding/CategorySidebar.tsx) · code · 1584 bytes

### PostSection.tsx

import React from 'react' import PostCard, { Skeleton } from 'components/Edition/PostCard'
Notable exports: `PostSection`.

[`src/components/BlogLanding/PostSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/BlogLanding/PostSection.tsx) · code · 1751 bytes

### README.md

The project README (“BlogLanding”). Reusable building blocks for a blog "landing" page that
keeps a category grid and surfaces the most popular + most recent posts for a given folder.
Built first for /founders, designed to be reused for /blog and /newsletter by passing a
different folder.

[`src/components/BlogLanding/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/BlogLanding/README.md) · code · 4185 bytes

### tagOptions.ts

import type { ElementType } from 'react' import * as Icons from '@posthog/icons' Notable
exports: `tagOptions`, `DEFAULT_TAG_ICON`, `getTagIcon`.

[`src/components/BlogLanding/tagOptions.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BlogLanding/tagOptions.ts) · code · 2310 bytes

### types.ts

import React from 'react' Notable exports: `LandingVariantProps`.

[`src/components/BlogLanding/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BlogLanding/types.ts) · code · 305 bytes

### useCategoryMenu.ts

import { useEffect, useMemo, useState } from 'react' import qs from 'qs' import slugify from
'slugify' import { getParams } from 'components/Edition/Posts' import { useCategoryTags }
from './useCategoryTags' Notable exports: `useCategoryMenu`, `CategoryMenuItem`.

[`src/components/BlogLanding/useCategoryMenu.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BlogLanding/useCategoryMenu.ts) · code · 3528 bytes

### useCategoryTags.ts

import { useEffect, useState } from 'react' import qs from 'qs' Notable exports:
`useCategoryTags`, `CategoryTag`.

[`src/components/BlogLanding/useCategoryTags.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BlogLanding/useCategoryTags.ts) · code · 1366 bytes

### useLandingPosts.ts

`sortOptions` is ordered [Popularity, Newest] — see components/Edition/Posts. Notable
exports: `useLandingPosts`.

[`src/components/BlogLanding/useLandingPosts.ts`](https://github.com/quirq-ai/website/blob/main/src/components/BlogLanding/useLandingPosts.ts) · code · 1849 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
