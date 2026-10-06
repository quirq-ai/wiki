<!-- quirq-wiki-generated repo=website dir=src/components/Edition -->

# website / src/components/Edition

Source: [src/components/Edition](https://github.com/quirq-ai/website/tree/main/src/components/Edition) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Breadcrumbs.tsx

import Link from 'components/Link' import { capitalize } from
'instantsearch.js/es/lib/utils' import React from 'react' import slugify from 'slugify'
Notable exports: `Breadcrumbs`.

[`src/components/Edition/Breadcrumbs.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Breadcrumbs.tsx) · code · 1266 bytes

### Categories.tsx

import { Menu } from '@headlessui/react' import { IconCheck, IconChevronDown } from
'@posthog/icons' import React, { useEffect, useRef, useState } from 'react' import {
fetchCategories } from './lib' import qs from 'qs' Notable exports: `Categories`.

[`src/components/Edition/Categories.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Categories.tsx) · code · 7659 bytes

### ClientPost.tsx

import { CallToAction } from 'components/CallToAction' import ClientPostMarkdown from
'components/Squeak/components/ClientPostMarkdown' import { ZoomImage } from
'components/ZoomImage' import SEO from 'components/seo' import dayjs from 'dayjs' import {
useUser } from 'hooks/useUser' import React, { useContext, useState } from 'react' import {
navigate } from Notable exports: `ClientPost`, `Post`.

[`src/components/Edition/ClientPost.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/ClientPost.tsx) · code · 7679 bytes

### FeaturedPost.tsx

import { CallToAction } from 'components/CallToAction' import dayjs from 'dayjs' import
React, { useContext } from 'react' import { PostsContext } from './Posts' import Link from
'components/Link' Notable exports: `FeaturedPost`.

[`src/components/Edition/FeaturedPost.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/FeaturedPost.tsx) · code · 4638 bytes

### Intro.tsx

import Link from 'components/Link' import React, { useContext } from 'react' import {
PostsContext } from './Posts' Notable exports: `Intro`.

[`src/components/Edition/Intro.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Intro.tsx) · code · 1309 bytes

### LandingPageNotice.tsx

import Link from 'components/Link' import React from 'react' Notable exports:
`LandingPageNotice`.

[`src/components/Edition/LandingPageNotice.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/LandingPageNotice.tsx) · code · 504 bytes

### LikeButton.tsx

import { useUser } from 'hooks/useUser' import React, { useEffect, useState } from 'react'
import Tooltip from 'components/Tooltip' import { IconTriangleUpFilled } from
'@posthog/icons' import { useApp } from '../../context/App' Notable exports: `LikeButton`.

[`src/components/Edition/LikeButton.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/LikeButton.tsx) · code · 1538 bytes

### NewPost.tsx

import React, { useEffect, useState } from 'react' import { Listbox } from
'@headlessui/react' import { fetchCategories } from 'components/Edition/lib' import {
useFormik } from 'formik' import { IconChevronDown } from '@posthog/icons' import { Post }
from 'components/Edition/ClientPost' import RichText from
'components/Squeak/components/RichText' import qs Notable exports: `NewPost`.

[`src/components/Edition/NewPost.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/NewPost.tsx) · code · 9663 bytes

### Post.tsx

import Link from 'components/Link' import React, { useEffect, useRef } from 'react' import {
useLocation } from '@reach/router' import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import dayjs from 'dayjs' import relativeTime from 'dayjs/plugin/relativeTime' import
isToday from 'dayjs/plugin/isToday' import { useLayoutData } from 'components/Layout/hoo
Notable exports: `Post`.

[`src/components/Edition/Post.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Post.tsx) · code · 5797 bytes

### PostCard.tsx

import Link from 'components/Link' import dayjs from 'dayjs' import React, { useEffect }
from 'react' import { useInView } from 'react-intersection-observer' Notable exports:
`PostCard`, `Skeleton`.

[`src/components/Edition/PostCard.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/PostCard.tsx) · code · 2137 bytes

### Posts.tsx

import React, { createContext, useContext, useEffect, useRef, useState } from 'react' import
dayjs from 'dayjs' import relativeTime from 'dayjs/plugin/relativeTime' import Link from
'components/Link' import { usePosts } from './hooks/usePosts' import { useUser } from
'hooks/useUser' import { Login } from 'components/Community/Sidebar' import Layout from 'com
Notable exports: `Posts`, `Sidebar`, `PostsContext`, `tagsHideFromIndex`, `getParams`

[`src/components/Edition/Posts.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Posts.tsx) · code · 19372 bytes

### PostsGrid.tsx

import React, { useContext } from 'react' import PostCard, { Skeleton } from './PostCard'
import { PostsContext } from './Posts' Notable exports: `PostsGrid`.

[`src/components/Edition/PostsGrid.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/PostsGrid.tsx) · code · 845 bytes

### PostsTable.tsx

import React, { useEffect, useRef } from 'react' import { Skeleton } from './Views/Default'
import Spinner from 'components/Spinner' import { child, container } from
'components/CallToAction' Notable exports: `PostsTable`.

[`src/components/Edition/PostsTable.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/PostsTable.tsx) · code · 4204 bytes

### Tags.tsx

import { navigate } from 'gatsby' import React, { useContext } from 'react' import {
PostsContext } from './Posts' import * as Icons from '@posthog/icons' import Slider from
'components/Slider' Notable exports: `Tags`.

[`src/components/Edition/Tags.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Tags.tsx) · code · 2918 bytes

### Title.tsx

import React, { useContext } from 'react' Notable exports: `Title`.

[`src/components/Edition/Title.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Title.tsx) · code · 247 bytes

### Upvote.tsx

import React, { useContext, useEffect, useState } from 'react' import { PostsContext } from
'./Posts' import { useUser } from 'hooks/useUser' import { IconTriangleUpFilled } from
'@posthog/icons' Notable exports: `Upvote`.

[`src/components/Edition/Upvote.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/Upvote.tsx) · code · 2163 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
