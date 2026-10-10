<!-- quirq-wiki-generated repo=website dir=src/components/SpotlightSearch -->

# website / src/components/SpotlightSearch

Source: [src/components/SpotlightSearch](https://github.com/quirq-ai/website/tree/main/src/components/SpotlightSearch) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### FilterMenu.tsx

import React from 'react' import { IconCheck, IconSearch } from '@posthog/icons' import {
configForType } from './categories' import SpotlightRow, { spotlightOptionId } from
'./SpotlightRow' Notable exports: `FilterMenu`.

[`src/components/SpotlightSearch/FilterMenu.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/FilterMenu.tsx) · code · 1940 bytes

### README.md

The project README (“SpotlightSearch”). The site-wide search overlay, opened with Cmd/Ctrl+K
or / through openSearch() in src/context/App.tsx. It presents the existing Algolia search as
a Spotlight-style panel and replaces the old global search overlay without changing embedded
search surfaces.

[`src/components/SpotlightSearch/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/README.md) · code · 5313 bytes

### ResultList.tsx

import React from 'react' import { configForType } from './categories' import type {
ResultGroup, SpotlightSearchResult } from './types' import SpotlightRow, { spotlightOptionId
} from './SpotlightRow' Notable exports: `ResultList`.

[`src/components/SpotlightSearch/ResultList.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/ResultList.tsx) · code · 4696 bytes

### SearchFooter.tsx

import React from 'react' import KeyboardShortcut from 'components/KeyboardShortcut' Notable
exports: `SearchFooter`.

[`src/components/SpotlightSearch/SearchFooter.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/SearchFooter.tsx) · code · 2189 bytes

### SearchInput.tsx

import React from 'react' import { IconFilter, IconSearch, IconX } from '@posthog/icons'
import KeyboardShortcut from 'components/KeyboardShortcut' import Spinner from
'components/Spinner' import { configForType } from './categories' Notable exports:
`SearchInput`.

[`src/components/SpotlightSearch/SearchInput.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/SearchInput.tsx) · code · 3586 bytes

### SpotlightRow.tsx

import React, { forwardRef } from 'react' Notable exports: `spotlightOptionId`.

[`src/components/SpotlightSearch/SpotlightRow.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/SpotlightRow.tsx) · code · 1462 bytes

### SuggestionList.tsx

import React from 'react' import { IconArrowRight, IconFilter, IconSparkles } from
'@posthog/icons' import KeyboardShortcut from 'components/KeyboardShortcut' import type {
SpotlightAction } from './actions' import { configForType } from './categories' import type
{ SuggestionItem } from './types' import SpotlightRow, { spotlightOptionId } from
'./SpotlightR Notable exports: `SuggestionList`.

[`src/components/SpotlightSearch/SuggestionList.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/SuggestionList.tsx) · code · 4692 bytes

### actions.tsx

import React from 'react' import { IconBolt, IconClockRewind, IconConfetti, IconCursor,
IconCursorClick, IconDay, IconLaptop, IconMagicWand, IconMouseScrollDown, IconNight,
IconRocket, IconShare, IconStar, IconX, } from '@posthog/icons' import { navigate } from
'gatsby' import { useApp, SiteSettings } from '../../context/App' import { useToast } from
'../../ Notable exports: `SpotlightAction`, `useSpotlightActions`.

[`src/components/SpotlightSearch/actions.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/actions.tsx) · code · 8729 bytes

### categories.tsx

import React from 'react' import { IconApps, IconBook, IconBuilding, IconCompass, IconCopy,
IconGraduationCap, IconHeart, IconNewspaper, IconPeople, IconPlug, IconPuzzle, IconShield, }
from '@posthog/icons' import { capitalizeFirstLetter } from '../../utils' Notable exports:
`configForType`, `matchCategory`, `filterOptions`.

[`src/components/SpotlightSearch/categories.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/categories.tsx) · code · 2880 bytes

### index.tsx

Actions only make sense for short trigger-word queries ("dark mode", "wallpaper") — long or
question-shaped queries never surface them Notable exports: `SpotlightSearch`.

[`src/components/SpotlightSearch/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/index.tsx) · code · 23977 bytes

### types.ts

import type { SpotlightAction } from './actions' Notable exports: `AlgoliaRecord`,
`SpotlightSearchResult`, `ResultGroup`, `SuggestionItem`, `NavItem`.

[`src/components/SpotlightSearch/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/SpotlightSearch/types.ts) · code · 655 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
