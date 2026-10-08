<!-- quirq-wiki-generated repo=website dir=src/components/Changelog -->

# website / src/components/Changelog

Source: [src/components/Changelog](https://github.com/quirq-ai/website/tree/main/src/components/Changelog) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### CategoryFilter.tsx

import { Select } from 'components/RadixUI/Select' import { graphql, useStaticQuery } from
'gatsby' import React from 'react' Notable exports: `CategoryFilter`.

[`src/components/Changelog/CategoryFilter.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Changelog/CategoryFilter.tsx) · code · 1092 bytes

### Filters.tsx

import React from 'react' import TeamFilter from './TeamFilter' import CategoryFilter from
'./CategoryFilter' import { Checkbox } from '../RadixUI/Checkbox' Notable exports:
`Filters`.

[`src/components/Changelog/Filters.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Changelog/Filters.tsx) · code · 701 bytes

### TeamFilter.tsx

import { Select } from 'components/RadixUI/Select' import { graphql, useStaticQuery } from
'gatsby' import React from 'react' Notable exports: `TeamFilter`.

[`src/components/Changelog/TeamFilter.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Changelog/TeamFilter.tsx) · code · 1056 bytes

### docsLinks.ts

Maps Squeak topic slugs to the docs page for that product area. Only topics with an
unambiguous docs home belong here — general topics (bugs, more, uncategorized, community)
are intentionally left out. Notable exports: `CHANGELOG_TOPIC_DOCS`, `stripPostHogOrigin`,
`getDescriptionDocsPath`, `getChangelogDocsPath`.

[`src/components/Changelog/docsLinks.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Changelog/docsLinks.ts) · code · 2953 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
