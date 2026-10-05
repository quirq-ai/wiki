<!-- quirq-wiki-generated repo=website dir=src/pages -->

# website / src/pages

Source: [src/pages](https://github.com/quirq-ai/website/tree/main/src/pages) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### 101.tsx

import React from 'react' import SEO from 'components/seo' import WhyPostHogViewer from
'components/WhyPostHog' Notable exports: `WhatIsPostHog`.

[`src/pages/101.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/101.tsx) · code · 5142 bytes

### 404.js

import React from 'react' import SEO from 'components/seo' import Explorer from
'components/Explorer' import OSButton from 'components/OSButton' Notable exports:
`NotFound`.

[`src/pages/404.js`](https://github.com/quirq-ai/website/blob/main/src/pages/404.js) · code · 834 bytes

### about.tsx

import { graphql } from 'gatsby' import React from 'react' import Editor from
'components/Editor' import { YC } from 'components/About/v2/YC' import { TLDR } from
'components/About/v2/TLDR' import { LottieAnimation } from
'components/About/v2/LottieAnimations' import { Letterhead } from
'components/About/v2/Letterhead' import CloudinaryImage from 'components Notable exports

[`src/pages/about.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/about.tsx) · code · 3076 bytes

### apps.js

import AppsPage from 'components/Apps' Provides a default export as the module's public
entry.

[`src/pages/apps.js`](https://github.com/quirq-ai/website/blob/main/src/pages/apps.js) · code · 64 bytes

### art-library.tsx

import React from 'react' import Explorer from 'components/Explorer' import OSButton from
'components/OSButton' import ScrollArea from 'components/RadixUI/ScrollArea' import {
useUser } from 'hooks/useUser' import { useApp } from '../context/App' import SEO from
'components/seo' Notable exports: `ArtLibrary`.

[`src/pages/art-library.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/art-library.tsx) · code · 2347 bytes

### baa.tsx

import React from 'react' import Layout from 'components/Layout' import { heading } from
'components/Home/classes' import { SEO } from 'components/seo' import { sexyLegalMenu } from
'../navs' import Link from 'components/Link' import CloudinaryImage from
'components/CloudinaryImage' import Tooltip from 'components/Tooltip' Provides a default
export as the module's public entry.

[`src/pages/baa.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/baa.tsx) · code · 29294 bytes

### blog.tsx

import React, { useState } from 'react' import { graphql } from 'gatsby' import { Logo }
from '@posthog/brand/logo' import { IconCheck, IconCopy } from '@posthog/icons' import
OSButton from 'components/OSButton' import FeaturedPost from
'components/PostsIndex/FeaturedPost' import PostsGallery from
'components/PostsIndex/PostsGallery' import { PostSummary } f Notable exports: `BlogPage`

[`src/pages/blog.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/blog.tsx) · code · 6060 bytes

### bookmarks.tsx

import Explorer from 'components/Explorer' import HeaderBar from
'components/OSChrome/HeaderBar' import { useUser } from 'hooks/useUser' import React, {
useEffect, useState, useMemo } from 'react' import Link from 'components/Link' import Fuse
from 'fuse.js' import { IconBookmark, IconEllipsis } from '@posthog/icons' import { Popover
} from 'components/Radix Notable exports: `Bookmarks`.

[`src/pages/bookmarks.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/bookmarks.tsx) · code · 5537 bytes

### careers.tsx

import { graphql, useStaticQuery } from 'gatsby' import React, { useRef, useState } from
'react' import { CareersHero } from '../components/Careers/CareersHero' import {
Transparency } from '../components/Careers/Transparency' import { SEO } from
'../components/seo' import MegaQuote from 'components/Careers/MegaQuote' import
CompanyHandbook from 'components/ Provides a default export as the module's public entry.

[`src/pages/careers.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/careers.tsx) · code · 8547 bytes

### chapters.tsx

import CloudinaryImage from 'components/CloudinaryImage' import React from 'react' import
Layout from 'components/Layout' import { SEO } from 'components/seo' import { StaticImage }
from 'gatsby-plugin-image' import Link from 'components/Link' import PostLayout from
'components/PostLayout' import chapters from '../navs/handbook.json' import ReaderView from
' Notable exports: `HandbookToc`.

[`src/pages/chapters.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/chapters.tsx) · code · 4957 bytes

### community-incubator.tsx

Canonical, prerendered /community-incubator page. Real static page (like /startups) so
search engines get a crawlable H1 instead of a client-only route. Notable exports:
`CommunityIncubator`.

[`src/pages/community-incubator.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/community-incubator.tsx) · code · 385 bytes

### community.tsx

import Layout from 'components/Layout' import React, { useEffect, useState } from 'react'
import SEO from 'components/seo' import { communityMenu } from '../navs' import {
useLayoutData } from 'components/Layout/hooks' import { CallToAction } from
'components/CallToAction' import Link from 'components/Link' import { IconCake, IconCoffee,
IconConfetti, IconGl Notable exports: `InsidePostHog`.

[`src/pages/community.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/community.tsx) · code · 28552 bytes

### compare.tsx

import React, { useState } from 'react' import { graphql } from 'gatsby' import { Logo }
from '@posthog/brand/logo' import { IconCheck, IconCopy } from '@posthog/icons' import
OSButton from 'components/OSButton' import FeaturedPost from
'components/PostsIndex/FeaturedPost' import PostsGallery from
'components/PostsIndex/PostsGallery' import { PostSummary } f Notable exports

[`src/pages/compare.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/compare.tsx) · code · 5861 bytes

### cool-tech-jobs.tsx

import React, { useCallback, useEffect, useState, useMemo } from 'react' import useJobs, {
Job } from '../hooks/useJobs' import groupBy from 'lodash.groupby' import useCompanies, {
Company, Filters as FiltersType } from 'hooks/useCompanies' import Layout from
'components/Layout' import { layoutLogic } from 'logic/layoutLogic' import { useValues }
from 'kea'.

[`src/pages/cool-tech-jobs.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/cool-tech-jobs.tsx) · code · 78511 bytes

### demo.js

import CloudinaryImage from 'components/CloudinaryImage' import { CallToAction } from
'components/CallToAction/index.tsx' import { SEO } from 'components/seo' import React from
'react' import Layout from 'components/Layout' import { SignupCTA } from
'components/SignupCTA' import { StaticImage } from 'gatsby-plugin-image' import { Link }
from 'gatsby' Notable exports: `BookADemo`.

[`src/pages/demo.js`](https://github.com/quirq-ai/website/blob/main/src/pages/demo.js) · code · 3296 bytes

### deskhog.tsx

import React from 'react' import Layout from 'components/Layout' import ProductDeskHog from
'components/Product/DeskHog' export default function DeskHogPage(): JSX.Element { return (
Notable exports: `DeskHogPage`.

[`src/pages/deskhog.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/deskhog.tsx) · code · 261 bytes

### desktop.tsx

import React, { useEffect, useRef, useState } from 'react' import SEO, {
buildProductStructuredData } from 'components/seo' import Editor from 'components/Editor'
import { IconAI, IconArrowUpRight, IconBatteryCharge, IconBrain, IconBrowser, IconCheck,
IconColumns, IconCrown, IconDashboard, IconDocument, IconFlask, IconGraph, IconHandMoney,
IconList, IconList.

[`src/pages/desktop.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/desktop.tsx) · code · 119814 bytes

### display-options.tsx

import React, { useState, useEffect } from 'react' import { createPortal } from 'react-dom'
import WindowTabs from 'components/WindowTabs' import { Fieldset } from
'components/OSFieldset' import { ToggleGroup, ToggleOption } from
'components/RadixUI/ToggleGroup' import { Popover } from 'components/RadixUI/Popover' import
ScrollArea from 'components/RadixUI/S Notable exports: `DisplayOptions`.

[`src/pages/display-options.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/display-options.tsx) · code · 15218 bytes

### dpa.tsx

import CloudinaryImage from 'components/CloudinaryImage' import React, { useState } from
'react' import { SEO } from 'components/seo' import { heading } from
'components/Home/classes' import Link from 'components/Link' import Tooltip from
'components/Tooltip'.

[`src/pages/dpa.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/dpa.tsx) · code · 100875 bytes

### enterprise.tsx

Placeholder FAQ. Confirm every answer before shipping. Same accordion as the research and
context-warehouse pages. Notable exports: `Enterprise`.

[`src/pages/enterprise.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/enterprise.tsx) · code · 9795 bytes

### eu.js

import EU from 'components/EU' import React from 'react' Provides a default export as the
module's public entry.

[`src/pages/eu.js`](https://github.com/quirq-ai/website/blob/main/src/pages/eu.js) · code · 76 bytes

### event-comparison.tsx

import CloudinaryImage from 'components/CloudinaryImage' import React, { useEffect, useState
} from 'react' import { pricingMenu } from '../navs' import Layout from 'components/Layout'
import { SectionHeader } from 'components/Pricing/Test/Sections' import Link from
'components/Link' import Tooltip from 'components/Tooltip' import { CTA as PlanCTA } from
'co Provides a default export as the module's public entry.

[`src/pages/event-comparison.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/event-comparison.tsx) · code · 9855 bytes

### events-feedback-form.tsx

import React from 'react' import { SEO } from 'components/seo' import Wizard from
'components/Wizard' import { Authentication } from 'components/Squeak' import { useUser }
from 'hooks/useUser' import EmbeddedSurvey from 'components/Docs/EmbeddedSurvey' import
ScrollArea from 'components/RadixUI/ScrollArea' Notable exports: `EventsFeedbackForm`.

[`src/pages/events-feedback-form.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/events-feedback-form.tsx) · code · 2601 bytes

### events.tsx

import React, { useEffect, useState, useCallback } from 'react' import SEO from
'components/seo' import Explorer from 'components/Explorer' import ScrollArea from
'components/RadixUI/ScrollArea' import { ToggleGroup } from 'components/RadixUI/ToggleGroup'
import OSButton from 'components/OSButton' import TeamMember from 'components/TeamMember'
import { ZoomI Notable exports: `Event`, `transformStrapiEvent`, `useEvents`

[`src/pages/events.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/events.tsx) · code · 36059 bytes

### flurry-migration.tsx

import React, { useState } from 'react' import Layout from '../components/Layout' import
Link from 'components/Link' import SalesHogs from '../images/sales-hogs.png' import {
StaticImage } from 'gatsby-plugin-image' import { Check2 } from 'components/Icons' import {
useValues } from 'kea' import Contact from 'components/ContactSales/Contact' import {
layoutL Notable exports: `FlurryMigration`.

[`src/pages/flurry-migration.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/flurry-migration.tsx) · code · 4107 bytes

### founder-stack.tsx

import CloudinaryImage from 'components/CloudinaryImage' import React from 'react' import
Link from 'components/Link' import { IconRewindPlay, IconGraph, IconPieChart, IconMessage }
from '@posthog/icons' import { CallToAction } from 'components/CallToAction' import Editor
from 'components/Editor' Provides a default export as the module's public entry.

[`src/pages/founder-stack.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/founder-stack.tsx) · code · 9068 bytes

### founders.tsx

Kill switch, not an A/B test: disabling it in PostHog reverts everyone to the old hub.
Notable exports: `Founders`, `Sidebar`.

[`src/pages/founders.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/founders.tsx) · code · 2581 bytes

### handbook.tsx

import CloudinaryImage from 'components/CloudinaryImage' import React from 'react' import {
SEO } from 'components/seo' import ReaderView from 'components/ReaderView' import { TreeMenu
} from 'components/TreeMenu' import { handbookSidebar } from '../navs' import chapters from
'../navs/handbook.json' import Link from 'components/Link' Notable exports: `Handbook`.

[`src/pages/handbook.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/handbook.tsx) · code · 3756 bytes

### hogbook.tsx

import React, { useEffect, useState } from 'react' import { HedgehogBackToTheFuture } from
'@posthog/brand/hoggies' import { IconDocument, IconNotebook, IconPeopleFilled } from
'@posthog/icons' import { graphql } from 'gatsby' import { pizzaPhotos } from
'components/Careers/Pizza/photos' import Link from 'components/Link' import ReaderView from
'components/R Notable exports: `Hogbook`, `query`.

[`src/pages/hogbook.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/hogbook.tsx) · code · 27636 bytes

### hogreads.tsx

import React, { useEffect, useState } from 'react' import { HedgehogReading,
HedgehogReadingIsMagic } from '@posthog/brand/hoggies' import { graphql, useStaticQuery }
from 'gatsby' import { Helmet } from 'react-helmet' import Link from 'components/Link'
import ReaderView from 'components/ReaderView' import SEO from 'components/seo' import {
AVATAR_FALLBACK_U Notable exports: `Hogreads`.

[`src/pages/hogreads.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/hogreads.tsx) · code · 25571 bytes

### hogspace.tsx

import React, { useEffect, useMemo, useState } from 'react' import { HedgehogDj } from
'@posthog/brand/hoggies' import { IconGithub, IconGroups, IconHeartPlus, IconSend } from
'@posthog/icons' import { graphql, useStaticQuery } from 'gatsby' import Link from
'components/Link' import ReaderView from 'components/ReaderView' import SEO from
'components/seo' imp Notable exports: `Hogspace`.

[`src/pages/hogspace.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/hogspace.tsx) · code · 27898 bytes

### index.tsx

import React from 'react' import SEO from 'components/seo' import HomeBase from
'components/HomeBase' Notable exports: `Home`.

[`src/pages/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/index.tsx) · code · 311 bytes

### media.tsx

Note: MDX components are handled globally via mdxGlobalComponents Notable exports: `Media`,
`query`.

[`src/pages/media.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/media.tsx) · code · 1645 bytes

### merch.tsx

import { graphql } from 'gatsby' import React, { useEffect, useMemo } from 'react' import
Collection from '../templates/merch/Collection' import { useLocation } from '@reach/router'
import { useCartStore } from '../templates/merch/store' Notable exports: `Merch`,
`CollectionFragment`, `query`.

[`src/pages/merch.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/merch.tsx) · code · 3686 bytes

### moat.tsx

import React from 'react' import SEO from 'components/seo' import WhyPostHogViewer from
'components/WhyPostHog' Notable exports: `Moat`.

[`src/pages/moat.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/moat.tsx) · code · 2210 bytes

### newsletter-fbc.tsx

import Layout from 'components/Layout' import React, { useState, useEffect, FormEvent } from
'react' import SEO from 'components/seo' import { useUser } from 'hooks/useUser' import
usePostHog from 'hooks/usePostHog' import CloudinaryImage from 'components/CloudinaryImage'
import Tooltip from 'components/Tooltip' import { container, child } from 'components/C
Provides a default export as the module's public entry.

[`src/pages/newsletter-fbc.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/newsletter-fbc.tsx) · code · 10857 bytes

### newsletter.tsx

import React from 'react' import { graphql } from 'gatsby' import SEO from 'components/seo'
import ReaderView from 'components/ReaderView' import FeaturedPost from
'components/PostsIndex/FeaturedPost' import Hero, { HeroHeader } from
'components/BuildMode/Hero' import PostsGallery from 'components/PostsIndex/PostsGallery'
import { PostSummary } from 'compone Notable exports: `NewsletterPage`, `query`.

[`src/pages/newsletter.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/newsletter.tsx) · code · 3308 bytes

### old-home.tsx

import Home from '../components/Home/Index' Provides a default export as the module's public
entry.

[`src/pages/old-home.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/old-home.tsx) · code · 65 bytes

### people.js

import React from 'react' import PeoplePage from 'components/People/PeoplePage' Provides a
default export as the module's public entry.

[`src/pages/people.js`](https://github.com/quirq-ai/website/blob/main/src/pages/people.js) · code · 159 bytes

### photobooth.tsx

import { CallToAction } from 'components/CallToAction' import CloudinaryImage from
'components/CloudinaryImage' import Layout from 'components/Layout' import {
AnimatePresence, motion } from 'framer-motion' import React, { useEffect, useRef, useState }
from 'react' import Webcam from 'react-webcam' import { useInView } from 'react-
intersection-observer' impo Notable exports: `Photobooth`.

[`src/pages/photobooth.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/photobooth.tsx) · code · 42269 bytes

### posthug.tsx

import React, { useCallback, useState } from 'react' import HugHog from 'components/HugHog'
import Layout from 'components/Layout' import { SEO } from 'components/seo' import { motion
} from 'framer-motion' import Particles from 'react-tsparticles' import { loadStarsPreset }
from 'tsparticles-preset-stars' import { Logo } from '@posthog/brand/logo' Provides a
default export as the module's public entry.

[`src/pages/posthug.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/posthug.tsx) · code · 2703 bytes

### privacy.tsx

import cntl from 'cntl' import Layout from 'components/Layout' import React, { useEffect,
useState } from 'react' import SEO from 'components/seo' import Link from 'components/Link'
import Tooltip from 'components/Tooltip' import { Twitter } from 'components/Icons' import {
StaticImage } from 'gatsby-plugin-image' import { IconArrowRightDown } from '@posthog.

[`src/pages/privacy.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/privacy.tsx) · code · 102937 bytes

### product-engineers.tsx

import Hub from 'components/Hub' import SEO from 'components/seo' import React from 'react'
Notable exports: `ProductEngineers`.

[`src/pages/product-engineers.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/product-engineers.tsx) · code · 321 bytes

### product-os.tsx

import React from 'react' import ProductProductOS from 'components/Product/ProductOS' import
Layout from 'components/Layout' export default function ProductOS(): JSX.Element { return (
Notable exports: `ProductOS`.

[`src/pages/product-os.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/product-os.tsx) · code · 265 bytes

### research.tsx

import React, { useEffect, useState } from 'react' import { graphql } from 'gatsby' import {
GatsbyImage, getImage } from 'gatsby-plugin-image' import dayjs from 'dayjs' import SEO from
'components/seo' import Editor from 'components/Editor' import OSButton from
'components/OSButton' import Link from 'components/Link' import CloudinaryImage from
'components/ Notable exports: `ResearchPage`, `query`.

[`src/pages/research.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/research.tsx) · code · 53014 bytes

### reset-password.tsx

import Layout from 'components/Layout' import SEO from 'components/seo' import ResetPassword
from 'components/Squeak/components/Classic/ResetPassword' import React from 'react' Notable
exports: `ForgotPassword`.

[`src/pages/reset-password.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/reset-password.tsx) · code · 346 bytes

### sales.tsx

import CloudinaryImage from 'components/CloudinaryImage' import React, { useEffect, useRef,
useState } from 'react' import SEO from 'components/seo' import Link from 'components/Link'
import Tooltip from 'components/RadixUI/Tooltip' import { IconArrowRight, IconMinus,
IconPlus, IconRedo } from '@posthog/icons' import { CSSTransition } from 'react-transition-
Notable exports: `Sales`.

[`src/pages/sales.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/sales.tsx) · code · 35743 bytes

### services.tsx

import React from 'react' import Layout from 'components/Layout' import ProfessionalServices
from 'components/ProfessionalServices' export default function ProfessionalServicesPage():
JSX.Element { return ( Notable exports: `ProfessionalServicesPage`.

[`src/pages/services.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/services.tsx) · code · 291 bytes

### side-project-insurance.tsx

import React from 'react' import Link from 'components/Link' import { CallToAction } from
'components/CallToAction' import CloudinaryImage from 'components/CloudinaryImage' import
Editor from 'components/Editor' import SEO from 'components/seo' Provides a default export
as the module's public entry.

[`src/pages/side-project-insurance.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/side-project-insurance.tsx) · code · 5108 bytes

### side-projects.tsx

import { HedgehogCodingGroup } from '@posthog/brand/hoggies' import { IconArrowUpRight,
IconChevronDown, IconPencil, IconSearch, IconSpinner, IconTrash } from '@posthog/icons'
import { RoughAnnotation } from 'components/Code/RoughAnnotation' import Editor from
'components/Editor' import Link from 'components/Link' import OSButton from
'components/OSButton' i Provides a default export as the module's public entry.

[`src/pages/side-projects.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/side-projects.tsx) · code · 31923 bytes

### slack-invite.tsx

import React, { useEffect, useState } from 'react' import Spinner from 'components/Spinner'
import { SEO } from 'components/seo' Provides a default export as the module's public entry.

[`src/pages/slack-invite.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/slack-invite.tsx) · code · 1743 bytes

### small-teams.tsx

import React, { useState, useMemo } from 'react' import Editor from 'components/Editor'
import SEO from 'components/seo' import Link from 'components/Link' import { graphql,
useStaticQuery } from 'gatsby' import OSButton from 'components/OSButton' import OSTable
from 'components/OSTable' const SmallTeamsPage = () => { const [searchTerm, setSearchTerm] =
useS Provides a default export as the module's public entry.

[`src/pages/small-teams.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/small-teams.tsx) · code · 10618 bytes

### start.tsx

import React from 'react' import SEO from 'components/seo' import WhyPostHogViewer from
'components/WhyPostHog' Notable exports: `Start`.

[`src/pages/start.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/start.tsx) · code · 1989 bytes

### subprocessors.tsx

import React, { useMemo, useState } from 'react' import { SEO } from 'components/seo' import
Link from 'components/Link' import OSButton from 'components/OSButton' import OSTable from
'components/OSTable' import subprocessors from '../data/subprocessors.json' Provides a
default export as the module's public entry.

[`src/pages/subprocessors.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/subprocessors.tsx) · code · 8413 bytes

### talk-to-a-human.tsx

import ContactSales from 'components/ContactSales' import { IconSend } from '@posthog/icons'
import React from 'react' import ScrollArea from 'components/RadixUI/ScrollArea' import SEO
from 'components/seo' Notable exports: `TalkToAHuman`.

[`src/pages/talk-to-a-human.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/talk-to-a-human.tsx) · code · 3733 bytes

### team-directory.tsx

import React, { useCallback, useMemo, useRef, useState } from 'react' import SEO from
'components/seo' import Editor from 'components/Editor' import OSTable from
'components/OSTable' import OSButton from 'components/OSButton' import { useTeamMembers,
TeamMember } from 'hooks/useTeamMembers' import { IconSpinner, IconPencil, IconDownload }
from '@posthog/icon Notable exports: `Team`.

[`src/pages/team-directory.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/team-directory.tsx) · code · 22056 bytes

### team-updates.tsx

import Layout from 'components/Layout' import React, { useEffect, useState } from 'react'
import qs from 'qs' import dayjs from 'dayjs' import groupBy from 'lodash.groupby' import
Markdown from 'components/Squeak/components/Markdown' import SEO from 'components/seo'
import { companyMenu } from '../navs' import { useUser } from 'hooks/useUser' import {
Skelet Notable exports: `TeamUpdates`.

[`src/pages/team-updates.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/team-updates.tsx) · code · 5865 bytes

### teams.tsx

import React, { useState, useMemo, useRef, useEffect } from 'react' import Layout from
'components/Layout' import { SEO } from 'components/seo' import Link from 'components/Link'
import PostLayout from 'components/PostLayout' import Tooltip from 'components/Tooltip'
import { graphql, navigate, useStaticQuery } from 'gatsby' import slugify from 'slugify'
impo Provides a default export as the module's public entry.

[`src/pages/teams.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/teams.tsx) · code · 20347 bytes

### templates.tsx

import TemplatesPage from 'components/Templates' Provides a default export as the module's
public entry.

[`src/pages/templates.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/templates.tsx) · code · 79 bytes

### terms.tsx

import cntl from 'cntl' import Layout from 'components/Layout' import React, { useEffect,
useState } from 'react' import SEO from 'components/seo' import Link from 'components/Link'
import Tooltip from 'components/Tooltip' import { LinkedIn, Twitter, YouTube } from
'components/Icons' import { StaticImage } from 'gatsby-plugin-image' import {
IconArrowRightDo.

[`src/pages/terms.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/terms.tsx) · code · 100246 bytes

### why.tsx

import React from 'react' import SEO from 'components/seo' import WhyPostHogViewer from
'components/WhyPostHog' import CloudinaryImage from 'components/CloudinaryImage' Notable
exports: `Why`.

[`src/pages/why.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/why.tsx) · code · 7962 bytes

### wip.tsx

import React, { useEffect, useMemo, useRef, useState } from 'react' import { graphql,
useStaticQuery } from 'gatsby' import Editor from 'components/Editor' import OSTable from
'components/OSTable' import SEO from 'components/seo' import { MDXProvider } from '@mdx-
js/react' import { MDXRenderer } from 'gatsby-plugin-mdx' import TeamMemberComponent, {
FutureTe Notable exports: `WhatWereWorkingOn`.

[`src/pages/wip.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/wip.tsx) · code · 14021 bytes

### workflow.tsx

import React from 'react' import SEO from 'components/seo' import WhyPostHogViewer from
'components/WhyPostHog' Notable exports: `Workflow`.

[`src/pages/workflow.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/workflow.tsx) · code · 4565 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
