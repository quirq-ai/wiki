<!-- quirq-wiki-generated repo=website dir=src/components/Blog/constants -->

# website / src/components/Blog/constants

Source: [src/components/Blog/constants](https://github.com/quirq-ai/website/tree/main/src/components/Blog/constants) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### categories.tsx

import { GitHub, LinkedIn, Twitter } from 'components/Icons/Icons' import { InlineCode }
from 'components/InlineCode' import { graphql, useStaticQuery } from 'gatsby' import React
from 'react' export interface CategoryInterface { title: string slug: string link: string
hideFromNavigation?: boolean } Notable exports: `CategoryInterface`, `homeCategories`,
`BlogCategories`, `socialLinks`, `CategoryData`.

[`src/components/Blog/constants/categories.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Blog/constants/categories.tsx) · code · 2690 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
