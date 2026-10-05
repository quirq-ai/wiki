<!-- quirq-wiki-generated repo=website dir=src/templates/tutorials -->

# website / src/templates/tutorials

Source: [src/templates/tutorials](https://github.com/quirq-ai/website/tree/main/src/templates/tutorials) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Tutorial.tsx

import { MDXProvider } from '@mdx-js/react' import { useLocation } from '@reach/router'
import { Blockquote } from 'components/BlockQuote' import CommunityQuestions from
'components/CommunityQuestions' import { Heading } from 'components/Heading' import {
InlineCode } from 'components/InlineCode' import Layout from 'components/Layout' import Link
from 'compo Notable exports: `Tutorial`, `ViewButton`, `query`.

[`src/templates/tutorials/Tutorial.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/tutorials/Tutorial.tsx) · code · 6276 bytes

### TutorialsCategory.tsx

import PostLayout from 'components/PostLayout' import { graphql } from 'gatsby' import
React, { useEffect, useState } from 'react' import { SEO } from 'components/seo' import
Layout from 'components/Layout' import { Posts, PostToggle } from 'components/Blog' import
Pagination from 'components/Pagination' import { NewsletterForm } from
'components/NewsletterF Notable exports: `pageQuery`.

[`src/templates/tutorials/TutorialsCategory.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/tutorials/TutorialsCategory.tsx) · code · 2937 bytes

### index.tsx

import PostLayout from 'components/PostLayout' import { graphql } from 'gatsby' import React
from 'react' import { SEO } from 'components/seo' import Layout from 'components/Layout'
import { Posts } from 'components/Blog' import Pagination from 'components/Pagination'
import { NewsletterForm } from 'components/NewsletterForm' import { communityMenu } from '.
Notable exports: `pageQuery`.

[`src/templates/tutorials/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/tutorials/index.tsx) · code · 1990 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
