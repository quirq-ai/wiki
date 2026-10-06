<!-- quirq-wiki-generated repo=website dir=src/components/Edition/Views -->

# website / src/components/Edition/Views

Source: [src/components/Edition/Views](https://github.com/quirq-ai/website/tree/main/src/components/Edition/Views) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Blog.tsx

import React, { useContext } from 'react' import { PostsContext } from '../Posts' import
FeaturedPost from '../FeaturedPost' import PostsGrid from '../PostsGrid' import
LandingPageNotice from '../LandingPageNotice' import SEO from 'components/seo' import {
NewsletterForm } from 'components/NewsletterForm' Notable exports: `Blog`.

[`src/components/Edition/Views/Blog.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Views/Blog.tsx) · code · 784 bytes

### Customers.tsx

import React, { useContext } from 'react' import { PostsContext } from '../Posts' import
FeaturedPost from '../FeaturedPost' import LandingPageNotice from '../LandingPageNotice'
import PostsGrid from '../PostsGrid' Notable exports: `Customers`.

[`src/components/Edition/Views/Customers.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Views/Customers.tsx) · code · 587 bytes

### Default.tsx

import Link from 'components/Link' import { useUser } from 'hooks/useUser' import React, {
useContext, useEffect, useState } from 'react' import { PostsContext, sortOptions } from
'../Posts' import TableOfContents from 'components/PostLayout/TableOfContents' import {
useLocation } from '@reach/router' import { useBreakpoint } from 'gatsby-plugin-breakpoints'
Notable exports: `Default`, `Skeleton`, `SortDropdown`, `PostFilters`.

[`src/components/Edition/Views/Default.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Views/Default.tsx) · code · 18871 bytes

### Newsletter.tsx

import React, { useContext } from 'react' import { PostsContext } from '../Posts' import
FeaturedPost from '../FeaturedPost' import PostsGrid from '../PostsGrid' import
LandingPageNotice from '../LandingPageNotice' import SEO from 'components/seo' import {
NewsletterForm } from 'components/NewsletterForm' Notable exports: `Newsletter`.

[`src/components/Edition/Views/Newsletter.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Views/Newsletter.tsx) · code · 794 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
