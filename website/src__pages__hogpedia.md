<!-- quirq-wiki-generated repo=website dir=src/pages/hogpedia -->

# website / src/pages/hogpedia

Source: [src/pages/hogpedia](https://github.com/quirq-ai/website/tree/main/src/pages/hogpedia) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### about.tsx

import React from 'react' import Explorer from 'components/Explorer' import Link from
'components/Link' import { SEO } from 'components/seo' import HogpediaShell from
'components/Hogpedia/HogpediaShell' import { useHogpediaArticles, onlyArticles } from
'components/Hogpedia/data' Notable exports: `HogpediaAbout`.

[`src/pages/hogpedia/about.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/hogpedia/about.tsx) · code · 5412 bytes

### all-pages.tsx

import React from 'react' import Explorer from 'components/Explorer' import Link from
'components/Link' import { SEO } from 'components/seo' import HogpediaShell from
'components/Hogpedia/HogpediaShell' import { useHogpediaArticles, onlyArticles } from
'components/Hogpedia/data' Notable exports: `HogpediaAllPages`.

[`src/pages/hogpedia/all-pages.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/hogpedia/all-pages.tsx) · code · 2022 bytes

### donate.tsx

import React from 'react' import Explorer from 'components/Explorer' import Link from
'components/Link' import { SEO } from 'components/seo' import HogpediaShell from
'components/Hogpedia/HogpediaShell' import { HOGS } from 'components/Hogpedia/hogs' Notable
exports: `HogpediaDonate`.

[`src/pages/hogpedia/donate.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/hogpedia/donate.tsx) · code · 5024 bytes

### index.tsx

import React from 'react' import Explorer from 'components/Explorer' import Link from
'components/Link' import { SEO } from 'components/seo' import HogpediaShell from
'components/Hogpedia/HogpediaShell' import { Module, FeaturedHog, dayIndex } from
'components/Hogpedia/MainPageModules' import { useHogpediaArticles, onlyArticles } from
'components/Hogpedia/da Notable exports: `HogpediaMainPage`.

[`src/pages/hogpedia/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/hogpedia/index.tsx) · code · 8135 bytes

### random.tsx

import React, { useEffect, useState } from 'react' import { navigate } from 'gatsby' import
Explorer from 'components/Explorer' import Link from 'components/Link' import { SEO } from
'components/seo' import HogpediaShell from 'components/Hogpedia/HogpediaShell' import {
useHogpediaArticles, onlyArticles, pickRandomArticle } from 'components/Hogpedia/data'
Notable exports: `HogpediaRandom`.

[`src/pages/hogpedia/random.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/hogpedia/random.tsx) · code · 2358 bytes

### recent-changes.tsx

import React from 'react' import { useStaticQuery, graphql } from 'gatsby' import Explorer
from 'components/Explorer' import Link from 'components/Link' import { SEO } from
'components/seo' import HogpediaShell from 'components/Hogpedia/HogpediaShell' import
MdxLinks from 'components/Hogpedia/MdxLinks' Notable exports: `HogpediaRecentChanges`.

[`src/pages/hogpedia/recent-changes.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/hogpedia/recent-changes.tsx) · code · 6323 bytes

### search.tsx

import React from 'react' import { useLocation } from '@reach/router' import Explorer from
'components/Explorer' import { SEO } from 'components/seo' import HogpediaShell from
'components/Hogpedia/HogpediaShell' import { SearchResults } from
'components/Hogpedia/HogpediaSearch' Notable exports: `HogpediaSearchPage`.

[`src/pages/hogpedia/search.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/hogpedia/search.tsx) · code · 1180 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
