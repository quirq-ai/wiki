<!-- quirq-wiki-generated repo=website dir=src/components/PostLayout -->

# website / src/components/PostLayout

Source: [src/components/PostLayout](https://github.com/quirq-ai/website/tree/main/src/components/PostLayout) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Breadcrumb.tsx

import { RightArrow } from 'components/Icons' import Link from 'components/Link' import {
usePost } from './hooks' import React from 'react' import { ICrumb } from './types' Notable
exports: `Breadcrumb`, `Crumbs`.

[`src/components/PostLayout/Breadcrumb.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/Breadcrumb.tsx) · code · 1325 bytes

### Contributors.tsx

import Link from 'components/Link' import Tooltip from 'components/Tooltip' import {
GatsbyImage, getImage } from 'gatsby-plugin-image' import React from 'react' import {
IContributor } from './types' import { Image, Transformation } from 'cloudinary-react'
import CloudinaryImage from 'components/CloudinaryImage' Notable exports: `Contributors`,
`ContributorImageSmall`, `ContributorImage`, `ContributorSmall`, `Contributor`.

[`src/components/PostLayout/Contributors.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/Contributors.tsx) · code · 9426 bytes

### Menu.tsx

import { IMenu } from './types' import { useLocation } from '@reach/router' import {
replacePath } from '../../../gatsby/utils' import React, { useEffect, useState } from
'react' import Link from 'components/Link' import { Link as ScrollLink } from 'react-scroll'
import { AnimatePresence, motion } from 'framer-motion' import * as NotProductIcons from
'../Not Notable exports: `Menu`, `Icon`, `badgeClasses`, `MenuItem`, `menuVariants`.

[`src/components/PostLayout/Menu.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/Menu.tsx) · code · 10731 bytes

### MobileNav.tsx

import { Chevron, RightArrow } from 'components/Icons' import { AnimatePresence,
useDragControls, useMotionValue, useTransform, motion } from 'framer-motion' import React, {
forwardRef, useEffect, useRef, useState } from 'react' import { IMenu } from './types'
import { useLocation } from '@reach/router' import { navigate } from 'gatsby' import slugify
from ' Notable exports: `MobileNav`, `MenuContainer`.

[`src/components/PostLayout/MobileNav.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/MobileNav.tsx) · code · 11755 bytes

### NextPost.tsx

import { CallToAction } from 'components/CallToAction' import React from 'react' import {
usePost } from './hooks' Notable exports: `NextPost`.

[`src/components/PostLayout/NextPost.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/NextPost.tsx) · code · 1031 bytes

### Post.tsx

import { useLocation } from '@reach/router' import React, { useEffect, useState } from
'react' import { usePost } from './hooks' import { animateScroll as scroll, Link as
ScrollLink } from 'react-scroll' import { defaultMenuWidth } from './context' import
TableOfContents from './TableOfContents' import ShareLinks from './ShareLinks' import Survey
from './Sur Notable exports: `Post`.

[`src/components/PostLayout/Post.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/Post.tsx) · code · 6155 bytes

### ShareLinks.tsx

import React, { useState } from 'react' import { useLocation } from '@reach/router' import {
LinkedIn, LinkIcon, Mail, Twitter } from 'components/Icons' import { usePost } from
'./hooks' import Tooltip from 'components/Tooltip' Notable exports: `ShareLinks`.

[`src/components/PostLayout/ShareLinks.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/ShareLinks.tsx) · code · 2773 bytes

### SidebarAction.tsx

import { ISidebarAction } from './types' import React from 'react' import Tooltip from
'components/Tooltip' import Link from 'components/Link' import slugify from 'slugify'
Notable exports: `SidebarAction`, `sidebarButtonClasses`.

[`src/components/PostLayout/SidebarAction.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/SidebarAction.tsx) · code · 1667 bytes

### SidebarSection.tsx

import React from 'react' Notable exports: `SidebarSection`.

[`src/components/PostLayout/SidebarSection.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/SidebarSection.tsx) · code · 742 bytes

### Survey.tsx

import { DocsPageSurvey } from 'components/DocsPageSurvey' import React from 'react' import
{ usePost } from './hooks' Notable exports: `Survey`.

[`src/components/PostLayout/Survey.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/Survey.tsx) · code · 372 bytes

### TableOfContents.tsx

import React from 'react' import Scrollspy from 'react-scrollspy' import { flattenMenu }
from '../../../gatsby/utils' import { usePost } from './hooks' import Menu from './Menu'
import { IMenu } from './types' Notable exports: `TableOfContents`.

[`src/components/PostLayout/TableOfContents.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/TableOfContents.tsx) · code · 1390 bytes

### Text.tsx

import React from 'react' Notable exports: `Text`.

[`src/components/PostLayout/Text.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/Text.tsx) · code · 215 bytes

### Topics.tsx

import { ITopic } from './types' import React from 'react' import Link from
'components/Link' Notable exports: `Topics`.

[`src/components/PostLayout/Topics.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/Topics.tsx) · code · 966 bytes

### context.tsx

import React, { createContext, useEffect, useMemo, useState } from 'react' import { IProps }
from './types' import { useLayoutData } from 'components/Layout/hooks' import
useDataPipelinesNav from '../../navs/useDataPipelinesNav' import useSourcesNav from
'../../navs/useSourcesNav' Notable exports: `Context`, `defaultMenuWidth`, `PostProvider`.

[`src/components/PostLayout/context.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/context.tsx) · code · 3537 bytes

### hooks.tsx

import { useContext } from 'react' import { Context } from './context' Notable exports:
`usePost`.

[`src/components/PostLayout/hooks.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/hooks.tsx) · code · 259 bytes

### index.tsx

import Post from './Post' import { PostProvider } from './context' import { IProps } from
'./types' import React from 'react' Notable exports: `PostLayout`.

[`src/components/PostLayout/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/index.tsx) · code · 346 bytes

### types.ts

import { IGatsbyImageData } from 'gatsby-plugin-image' import React from 'react' Notable
exports: `ITopic`, `IContributor`, `IMenu`, `ICrumb`, `ISidebarAction`, `INextPost`,
`TableOfContents`, `IProps`.

[`src/components/PostLayout/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/PostLayout/types.ts) · code · 2326 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
