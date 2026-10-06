<!-- quirq-wiki-generated repo=website dir=src/components/PostsIndex -->

# website / src/components/PostsIndex

Source: [src/components/PostsIndex](https://github.com/quirq-ai/website/tree/main/src/components/PostsIndex) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### FeaturedPost.tsx

import React from 'react' import Link from 'components/Link' import { Accent, accents } from
'./accents' import PostImage from './PostImage' import Tape from './Tape' import {
PostSummary } from './types' import { getByline, getSubtitle } from './utils' Notable
exports: `FeaturedPost`.

[`src/components/PostsIndex/FeaturedPost.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/FeaturedPost.tsx) · code · 3436 bytes

### GalleryCard.tsx

import React from 'react' import Link from 'components/Link' import PostImage from
'./PostImage' import { PostSummary } from './types' import { getByline, getSubtitle } from
'./utils' Notable exports: `GalleryCard`.

[`src/components/PostsIndex/GalleryCard.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/GalleryCard.tsx) · code · 1538 bytes

### PostImage.tsx

import React from 'react' import { GatsbyImage, getImage } from 'gatsby-plugin-image' import
{ IconNewspaper } from '@posthog/icons' import CloudinaryImage from
'components/CloudinaryImage' import { PostSummary } from './types' Notable exports:
`PostImage`.

[`src/components/PostsIndex/PostImage.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/PostImage.tsx) · code · 1827 bytes

### PostsGallery.tsx

import React, { useEffect, useRef, useState } from 'react' import { IconSearch, IconSort }
from '@posthog/icons' import OSButton from 'components/OSButton' import { OSInput } from
'components/OSForm' import MenuBar from 'components/RadixUI/MenuBar' import { Select } from
'components/RadixUI/Select' import { Accent, accents } from './accents' import GalleryCa
Notable exports: `PostsGallery`.

[`src/components/PostsIndex/PostsGallery.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/PostsGallery.tsx) · code · 9571 bytes

### README.md

The project README (“PostsIndex”). The shared building blocks of a posts index page — a
featured newest post plus a searchable, sortable, tag-filterable gallery. Used by
/newsletter (src/pages/newsletter.tsx), /blog (src/pages/blog.tsx), and /compare
(src/pages/compare.tsx). Everything here is data-driven: components take a PostSummary[] and
carry no page-specific branding beyond defaults the pages can override.

[`src/components/PostsIndex/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/README.md) · code · 3465 bytes

### TagFilter.tsx

import React, { useLayoutEffect, useRef, useState } from 'react' import { IconChevronDown }
from '@posthog/icons' import { Popover } from 'components/RadixUI/Popover' import { Accent,
accents } from './accents' Notable exports: `TagFilter`.

[`src/components/PostsIndex/TagFilter.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/TagFilter.tsx) · code · 5857 bytes

### Tape.tsx

Torn-off strip outline, reused for both the fill and the edge stroke Notable exports:
`Tape`.

[`src/components/PostsIndex/Tape.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/Tape.tsx) · code · 786 bytes

### accents.ts

Per-page accent palettes. Full literal class strings (not composed) so Tailwind's scanner
sees every class; only project color tokens. Notable exports: `Accent`, `accents`.

[`src/components/PostsIndex/accents.ts`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/accents.ts) · code · 1307 bytes

### types.ts

import { ImageDataLike } from 'gatsby-plugin-image' Notable exports: `PostSummary`.

[`src/components/PostsIndex/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/types.ts) · code · 858 bytes

### usePostFilters.ts

import { useMemo, useState } from 'react' import { PostSummary } from './types' Notable
exports: `usePostFilters`, `PostSort`.

[`src/components/PostsIndex/usePostFilters.ts`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/usePostFilters.ts) · code · 2449 bytes

### utils.ts

import { PostSummary } from './types' Notable exports: `rand`, `getSubtitle`,
`getAuthorName`, `getByline`, `getReadingTime`.

[`src/components/PostsIndex/utils.ts`](https://github.com/quirq-ai/website/blob/main/src/components/PostsIndex/utils.ts) · code · 1702 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
