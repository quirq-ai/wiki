<!-- quirq-wiki-generated repo=website dir=src/components -->

# website / src/components

Source: [src/components](https://github.com/quirq-ai/website/tree/main/src/components) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .mdxignore

Extensionless file `.mdxignore`.

[`src/components/.mdxignore`](https://github.com/quirq-ai/website/blob/main/src/components/.mdxignore) · other · 1756 bytes

### CommunityIncubatorForm.tsx

eslint-disable-next-line @typescript-eslint/no-var-requires Notable exports:
`CommunityIncubatorForm`.

[`src/components/CommunityIncubatorForm.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/CommunityIncubatorForm.tsx) · code · 7452 bytes

### DanceMode.tsx

import React, { useEffect, useMemo, useState } from 'react' import { useApp } from
'../context/App' import { useWindow } from '../context/Window' Notable exports: `DanceMode`.

[`src/components/DanceMode.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/DanceMode.tsx) · code · 3738 bytes

### IntegrationPrompt.tsx

import React from 'react' import Link from './Link' import WizardCommand from
'./WizardCommand' import { IconCheck, IconChevronRight, IconArrowUpRight, IconTerminal }
from '@posthog/icons' import NextIcon from
'../../contents/images/docs/integrate/frameworks/nextjs.svg' import ReactIcon from
'../../contents/images/docs/integrate/react.svg' import SvelteIcon Notable exports

[`src/components/IntegrationPrompt.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/IntegrationPrompt.tsx) · code · 1085 bytes

### Markdown.tsx

import React from 'react' import ReactMarkdown, { Components } from 'react-markdown' import
Link from 'components/Link' Notable exports: `Markdown`.

[`src/components/Markdown.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Markdown.tsx) · code · 610 bytes

### seo.tsx

import React, { useEffect } from 'react' import { Helmet } from 'react-helmet' import {
useLocation } from '@reach/router' import { useStaticQuery, graphql } from 'gatsby' import {
useApp } from '../context/App' import { useWindow } from '../context/Window' import {
quirqConfig } from 'lib/quirqApps' Notable exports: `LanguageAlternate`, `SEO`,
`buildProductStructuredData`.

[`src/components/seo.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/seo.tsx) · code · 6487 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
