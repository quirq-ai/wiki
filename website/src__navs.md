<!-- quirq-wiki-generated repo=website dir=src/navs -->

# website / src/navs

Source: [src/navs](https://github.com/quirq-ai/website/tree/main/src/navs) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### activeMenu.test.ts

Sidebar section matching, against a small fixture and against the real docs nav. Automated
test file.

[`src/navs/activeMenu.test.ts`](https://github.com/quirq-ai/website/blob/main/src/navs/activeMenu.test.ts) · code · 4480 bytes

### activeMenu.ts

Picks the sidebar section a URL belongs to. Notable exports: `getActiveMenuSection`,
`MenuNode`, `containsURL`.

[`src/navs/activeMenu.ts`](https://github.com/quirq-ai/website/blob/main/src/navs/activeMenu.ts) · code · 1348 bytes

### handbook.json

JSON array `handbook.json` with 1 items; first item keys: `name`, `links`.

[`src/navs/handbook.json`](https://github.com/quirq-ai/website/blob/main/src/navs/handbook.json) · code · 1612 bytes

### index.js

Large text file (331.8 KB), over the generator's 256 KB parse cap. Only a prefix was
inspected.

[`src/navs/index.js`](https://github.com/quirq-ai/website/blob/main/src/navs/index.js) · huge · 339730 bytes

### internalTools.ts

Shared navigation for internal tools pages Notable exports: `internalToolsNav`.

[`src/navs/internalTools.ts`](https://github.com/quirq-ai/website/blob/main/src/navs/internalTools.ts) · code · 532 bytes

### posts.ts

import { IMenu } from 'components/PostLayout/types' Notable exports: `postsMenu`.

[`src/navs/posts.ts`](https://github.com/quirq-ai/website/blob/main/src/navs/posts.ts) · code · 7154 bytes

### product-engineer.json

JSON array `product-engineer.json` with 1 items; first item keys: `name`, `links`.

[`src/navs/product-engineer.json`](https://github.com/quirq-ai/website/blob/main/src/navs/product-engineer.json) · code · 1399 bytes

### useDataPipelinesNav.ts

import { useStaticQuery, graphql } from 'gatsby' Notable exports: `useDataPipelinesNav`.

[`src/navs/useDataPipelinesNav.ts`](https://github.com/quirq-ai/website/blob/main/src/navs/useDataPipelinesNav.ts) · code · 1053 bytes

### useSourcesNav.ts

import { useStaticQuery, graphql } from 'gatsby' import { SELF_HOSTED_SOURCES } from
'../constants/sources' Notable exports: `useSourcesNav`.

[`src/navs/useSourcesNav.ts`](https://github.com/quirq-ai/website/blob/main/src/navs/useSourcesNav.ts) · code · 1092 bytes

### useTopicsNav.js

import { topicIcons } from 'components/Questions/TopicsTable' import { graphql,
useStaticQuery } from 'gatsby' import React from 'react' import { useUser } from
'hooks/useUser' import { IconSparkles, IconClock } from '@posthog/icons' Notable exports:
`useTopicsNav`.

[`src/navs/useTopicsNav.js`](https://github.com/quirq-ai/website/blob/main/src/navs/useTopicsNav.js) · code · 1499 bytes

### whyPostHog.ts

Shared sidebar nav for the "Why PostHog?" page collection. Notable exports:
`WhyPostHogNavItem`, `whyPostHogNav`.

[`src/navs/whyPostHog.ts`](https://github.com/quirq-ai/website/blob/main/src/navs/whyPostHog.ts) · code · 1200 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
