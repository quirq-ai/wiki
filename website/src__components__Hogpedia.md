<!-- quirq-wiki-generated repo=website dir=src/components/Hogpedia -->

# website / src/components/Hogpedia

Source: [src/components/Hogpedia](https://github.com/quirq-ai/website/tree/main/src/components/Hogpedia) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ArticleFooter.tsx

import React from 'react' import Link from 'components/Link' import { categoryPath } from
'./categories' Notable exports: `SeeAlsoEntry`, `SeeAlso`, `CategoryLinks`, `ArticleFooter`.

[`src/components/Hogpedia/ArticleFooter.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/ArticleFooter.tsx) · code · 2475 bytes

### ArticleTabs.tsx

import React from 'react' import Link from 'components/Link' import { articleSourceUrls }
from './context' Notable exports: `ArticleTabs`, `TabName`.

[`src/components/Hogpedia/ArticleTabs.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/ArticleTabs.tsx) · code · 2222 bytes

### CitationNeeded.tsx

import React from 'react' Notable exports: `CitationNeeded`.

[`src/components/Hogpedia/CitationNeeded.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/CitationNeeded.tsx) · code · 464 bytes

### HogpediaLogo.tsx

import React from 'react' import Link from 'components/Link' import { HOGS } from './hogs'
Notable exports: `HogpediaLogo`.

[`src/components/Hogpedia/HogpediaLogo.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/HogpediaLogo.tsx) · code · 1103 bytes

### HogpediaSearch.tsx

import React, { useMemo, useState } from 'react' import Fuse from 'fuse.js' import {
navigate } from 'gatsby' import Link from 'components/Link' import { useHogpediaArticles,
onlyArticles, findEasterEgg, HogpediaArticleSummary } from './data' Notable exports:
`SearchBox`, `SearchResults`.

[`src/components/Hogpedia/HogpediaSearch.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/HogpediaSearch.tsx) · code · 6341 bytes

### HogpediaShell.tsx

import React from 'react' import ScrollArea from 'components/RadixUI/ScrollArea' import
HogpediaSidebar from './HogpediaSidebar' import ArticleTabs, { TabName } from
'./ArticleTabs' import { ArticleFooter } from './ArticleFooter' import { HogpediaProvider }
from './context' import './hogpedia.css' Notable exports: `HogpediaShell`.

[`src/components/Hogpedia/HogpediaShell.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/HogpediaShell.tsx) · code · 2909 bytes

### HogpediaSidebar.tsx

import React from 'react' import Link from 'components/Link' import { navigate } from
'gatsby' import HogpediaLogo from './HogpediaLogo' import { SearchBox } from
'./HogpediaSearch' import { useHogpediaArticles, pickRandomArticle } from './data' Notable
exports: `HogpediaSidebar`.

[`src/components/Hogpedia/HogpediaSidebar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/HogpediaSidebar.tsx) · code · 4044 bytes

### Infobox.tsx

import React from 'react' import { HOGS } from './hogs' import MdxLinks from './MdxLinks'
Notable exports: `Infobox`, `InfoboxRow`, `InfoboxData`.

[`src/components/Hogpedia/Infobox.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/Infobox.tsx) · code · 1759 bytes

### MainPageModules.tsx

import React, { useEffect, useState } from 'react' import Link from 'components/Link' import
{ HOGS } from './hogs' Notable exports: `Module`, `dayIndex`, `FeaturedHog`.

[`src/components/Hogpedia/MainPageModules.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/MainPageModules.tsx) · code · 3583 bytes

### MaintenanceBanner.tsx

import React from 'react' import Link from 'components/Link' Notable exports:
`MaintenanceBanner`, `NoticeName`.

[`src/components/Hogpedia/MaintenanceBanner.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/MaintenanceBanner.tsx) · code · 3561 bytes

### MdxLinks.tsx

import React from 'react' import Link from 'components/Link' Notable exports: `MdxLinks`.

[`src/components/Hogpedia/MdxLinks.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/MdxLinks.tsx) · code · 1158 bytes

### README.md

The project README (“Hogpedia”). Hogpedia is an encyclopedia about PostHog at /hogpedia,
presented in the MonoBook style that English Wikipedia used in 2007.

[`src/components/Hogpedia/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/README.md) · code · 9938 bytes

### References.tsx

import React from 'react' import Link from 'components/Link' import { useHogpediaArticle }
from './context' Notable exports: `References`, `Reference`, `Ref`.

[`src/components/Hogpedia/References.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/References.tsx) · code · 1826 bytes

### SectionHeading.tsx

import React from 'react' import Slugger from 'github-slugger' import Link from
'components/Link' import { useHogpediaArticle, articleSourceUrls } from './context' Notable
exports: `makeSectionHeading`.

[`src/components/Hogpedia/SectionHeading.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/SectionHeading.tsx) · code · 2973 bytes

### TableOfContents.tsx

import React, { useState } from 'react' Notable exports: `TableOfContents`, `TocItem`.

[`src/components/Hogpedia/TableOfContents.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/TableOfContents.tsx) · code · 1889 bytes

### blogPosts.ts

import { useStaticQuery, graphql } from 'gatsby' Notable exports: `BlogPost`,
`useRecentBlogPosts`.

[`src/components/Hogpedia/blogPosts.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/blogPosts.ts) · code · 1421 bytes

### categories.ts

import slugify from 'slugify' Notable exports: `HOGPEDIA_CATEGORIES`, `HogpediaCategory`,
`categorySlug`, `categoryPath`, `HOGPEDIA_RESERVED`.

[`src/components/Hogpedia/categories.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/categories.ts) · code · 1117 bytes

### context.tsx

import React, { createContext, useContext } from 'react' import Slugger from 'github-
slugger' Notable exports: `HogpediaArticle`, `HogpediaProvider`, `useHogpediaArticle`,
`articleSourceUrls`, `buildSectionSources`, `primarySource`.

[`src/components/Hogpedia/context.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/context.tsx) · code · 4166 bytes

### data.ts

import { useStaticQuery, graphql } from 'gatsby' Notable exports: `HogpediaArticleSummary`,
`useHogpediaArticles`, `onlyArticles`, `pickRandomArticle`, `EasterEgg`,
`SEARCH_EASTER_EGGS`, `findEasterEgg`.

[`src/components/Hogpedia/data.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/data.ts) · code · 3978 bytes

### hogpedia.css

Hogpedia – a recreation of the MonoBook skin that English Wikipedia used in 2007. Leading
class selectors include `hogpedia`, `hogpedia-scroll`, `hogpedia-frame`, `hogpedia-nav-
head`, `hogpedia-nav-tail`, `hp-logo`, `hp-logo-mark`, `hp-logo-word`, and 50 more. Defines
or consumes CSS custom properties (design tokens).

[`src/components/Hogpedia/hogpedia.css`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/hogpedia.css) · code · 19694 bytes

### hogs.ts

import { HedgehogBeaker, HedgehogBusinessEvolution, HedgehogChartHog, HedgehogCodeBubble,
HedgehogCodingGroup, HedgehogExperiment, HedgehogFinalEvolution, HedgehogMagnifyingGlass,
HedgehogMoney, HedgehogOrganized, HedgehogPanic, HedgehogPartyHog, HedgehogQuickCall,
HedgehogReading, HedgehogReadingIsMagic, HedgehogRemoteWork, HedgehogRoboHog, } from
'@posthog Notable exports: `HOGS`.

[`src/components/Hogpedia/hogs.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/hogs.ts) · code · 1613 bytes

### loreFacts.ts

import { useStaticQuery, graphql } from 'gatsby' import { HogpediaArticleSummary,
onlyArticles } from './data' Notable exports: `LORE_PAGE`, `LoreFact`, `useLoreFacts`.

[`src/components/Hogpedia/loreFacts.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Hogpedia/loreFacts.ts) · code · 3285 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
