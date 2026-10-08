<!-- quirq-wiki-generated repo=website dir=src/components/Product -->

# website / src/components/Product

Source: [src/components/Product](https://github.com/quirq-ai/website/tree/main/src/components/Product) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Comparison.tsx

import { IconCheck, IconX } from '@posthog/icons' import { CallToAction } from
'components/CallToAction' import Link from 'components/Link' import { Logo } from
'@posthog/brand/logo' import React, { useState } from 'react' const companies = { Amplitude:
{ comparisonURL: '/blog/posthog-vs-amplitude', }, AmplitudeExperiment: { comparisonURL: '',
}, Mixpanel: { Notable exports: `Comparison`.

[`src/components/Product/Comparison.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Product/Comparison.tsx) · code · 7293 bytes

### Install.tsx

import { MDXProvider } from '@mdx-js/react' import { Blockquote } from
'components/BlockQuote' import { MdxCodeBlock } from 'components/CodeBlock' import { Heading
} from 'components/Heading' import { InlineCode } from 'components/InlineCode' import Link
from 'components/Link' import { ZoomImage } from 'components/ZoomImage' import { graphql,
useStaticQuery Provides a default export as the module's public entry.

[`src/components/Product/Install.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Product/Install.tsx) · code · 1626 bytes

### Questions.tsx

import QuestionsTable from 'components/Questions/QuestionsTable' import { useQuestions }
from 'hooks/useQuestions' import React from 'react' Notable exports: `Questions`.

[`src/components/Product/Questions.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Product/Questions.tsx) · code · 1488 bytes

### RecentChange.tsx

import React from 'react' import { graphql, useStaticQuery } from 'gatsby' import Link from
'components/Link' import { CallToAction } from 'components/CallToAction' import Markdown
from 'components/Squeak/components/Markdown' Notable exports: `RecentChange`.

[`src/components/Product/RecentChange.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Product/RecentChange.tsx) · code · 2077 bytes

### TeamMembers.tsx

import { TeamMember, teamQuery } from 'components/People' import { useStaticQuery } from
'gatsby' import React from 'react' Notable exports: `TeamMembers`.

[`src/components/Product/TeamMembers.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Product/TeamMembers.tsx) · code · 1148 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
