<!-- quirq-wiki-generated repo=website dir=src/components/Home -->

# website / src/components/Home

Source: [src/components/Home](https://github.com/quirq-ai/website/tree/main/src/components/Home) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Accordion.tsx

import React, { useEffect, useRef, useState } from 'react' import { Disclosure } from
'@headlessui/react' import { slideButtons } from './Slider/slideButtons' import {
AnimatePresence, motion } from 'framer-motion' import { FeatureFlags, ProductAnalytics,
SessionReplay, ABTesting, Surveys, DataPipeline, DataWarehouse, WebAnalytics,
aiObservability, } from '. Notable exports: `Accordion`.

[`src/components/Home/Accordion.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Accordion.tsx) · code · 4851 bytes

### Apps.js

import { graphql, useStaticQuery } from 'gatsby' import React from 'react' import
PipelinesList from '../PipelinesList' import { CallToAction } from '../CallToAction' import
{ heading, section } from './classes' Notable exports: `Pipelines`.

[`src/components/Home/Apps.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Apps.js) · code · 2233 bytes

### CTA.js

import CloudinaryImage from 'components/CloudinaryImage' import { CallToAction } from
'components/CallToAction' import React, { useEffect, useState } from 'react' import {
heading, section } from './classes' import Link from 'components/Link' import { Bang, Eco,
TrendUp } from 'components/Icons' import { StaticImage } from 'gatsby-plugin-image' import
usePos Notable exports: `CTA`.

[`src/components/Home/CTA.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/CTA.js) · code · 10945 bytes

### CodeBlock.js

import React from 'react' import Highlight, { defaultProps } from 'prism-react-renderer'
import { CodeBlock as CB } from 'components/CodeBlock' Notable exports: `CodeBlock`.

[`src/components/Home/CodeBlock.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/CodeBlock.js) · code · 592 bytes

### Community.tsx

import React, { useCallback, useEffect, useRef } from 'react' import Link from
'components/Link' import Particles from 'react-tsparticles' import { loadStarsPreset } from
'tsparticles-preset-stars' import { useValues } from 'kea' import { layoutLogic } from
'logic/layoutLogic' import { useInView } from 'react-intersection-observer' import { motion
} from 'fr Notable exports: `Community`.

[`src/components/Home/Community.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Community.tsx) · code · 5000 bytes

### ContactForm.tsx

import { FormikErrors } from 'formik' import React, { Dispatch, InputHTMLAttributes,
SetStateAction, useRef, useState } from 'react' import { useFormik } from 'formik' import {
button } from 'components/CallToAction' import * as Yup from 'yup' import { useLocation }
from '@reach/router' import Link from 'components/Link' import { animateScroll as scroll }
fr Notable exports: `ContactForm`.

[`src/components/Home/ContactForm.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/ContactForm.tsx) · code · 14576 bytes

### CustomerData.js

import CloudinaryImage from 'components/CloudinaryImage' import { StaticImage } from
'gatsby-plugin-image' import React from 'react' import ReactCountryFlag from 'react-country-
flag' import { Privacy } from 'components/NotProductIcons' import { IconShield, IconServer,
IconDatabase, IconCode } from '@posthog/icons' Notable exports: `CustomerData`.

[`src/components/Home/CustomerData.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/CustomerData.js) · code · 4954 bytes

### Customers.tsx

import React, { useState } from 'react' import OSTable from 'components/OSTable' import
OSButton from 'components/OSButton' import Tooltip from 'components/RadixUI/Tooltip' import
{ IconRefresh } from '@posthog/icons' import { useCustomers } from 'hooks/useCustomers'
Notable exports: `COL1`, `COL2`, `companyBreakdowns`, `companyAttributes`, `Customers`.

[`src/components/Home/Customers.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Customers.tsx) · code · 13073 bytes

### Decorations.tsx

import React from 'react' import CloudinaryImage from 'components/CloudinaryImage' import
Tooltip from 'components/RadixUI/Tooltip' import { IconInfo } from '@posthog/icons' import {
HedgehogSailorHog } from '@posthog/brand/hoggies' Notable exports: `Image`, `HomeHappyHog`,
`ImageDW`, `ImageMoney`, `ImageReading1`, `ImageReading2`, `TooltipDW`.

[`src/components/Home/Decorations.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Decorations.tsx) · code · 2081 bytes

### FAQ.tsx

import React, { useState } from 'react' import OSButton from 'components/OSButton' import {
AccordionItem, AccordionTrigger, AccordionContent } from 'components/RadixUI/Accordion'
import { Accordion as RadixAccordionPrimitives } from 'radix-ui' Notable exports: `FAQ`,
`FAQItem`.

[`src/components/Home/FAQ.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/FAQ.tsx) · code · 1652 bytes

### Features.js

import CloudinaryImage from 'components/CloudinaryImage' import { CallToAction } from
'components/CallToAction' import SliderNav from 'components/SliderNav' import { StaticImage
} from 'gatsby-plugin-image' import React, { useRef, useState } from 'react' import Slider
from 'react-slick' import { heading, section } from './classes' Notable exports: `Features`.

[`src/components/Home/Features.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Features.js) · code · 6391 bytes

### Hero.js

import React, { useEffect, useState } from 'react' import { CallToAction, TrackedCTA } from
'../CallToAction' import { heading, section } from './classes' import Icon from './Icon'
import Slider from './Slider' import Accordion from './Accordion' import './hero.css' import
{ useLayoutData } from 'components/Layout/hooks' import usePostHog from 'hooks/usePost
Notable exports: `Hero`, `FeatureStrip`.

[`src/components/Home/Hero.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Hero.js) · code · 17304 bytes

### HitCounter.tsx

import React, { useEffect, useState } from 'react' import { Digit0, Digit1, Digit2, Digit3,
Digit4, Digit5, Digit6, Digit7, Digit8, Digit9 } from 'components/OSIcons' Notable exports:
`HitCounter`.

[`src/components/Home/HitCounter.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/HitCounter.tsx) · code · 1220 bytes

### Icon.js

import React from 'react' Notable exports: `Icon`.

[`src/components/Home/Icon.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Icon.js) · code · 221 bytes

### Index.tsx

import React, { useEffect, useState } from 'react' import SEO from 'components/seo' import
Link from 'components/Link' import Editor from 'components/Editor' import OSTable from
'components/OSTable' import ScrollArea from 'components/RadixUI/ScrollArea' Notable exports:
`Home`.

[`src/components/Home/Index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Index.tsx) · code · 740 bytes

### Libraries.js

import CloudinaryImage from 'components/CloudinaryImage' import React from 'react' import {
StaticImage } from 'gatsby-plugin-image' import Link from 'components/Link' import {
IconEllipsis } from '@posthog/icons' import { CallToAction } from 'components/CallToAction'
Notable exports: `Libraries`.

[`src/components/Home/Libraries.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Libraries.js) · code · 9860 bytes

### Pipelines.js

import { CallToAction } from 'components/CallToAction' import Link from 'components/Link'
import { useBreakpoint } from 'gatsby-plugin-breakpoints' import React from 'react' import {
heading, section } from './classes' import Icon from './Icon' Notable exports: `Pipelines`.

[`src/components/Home/Pipelines.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Pipelines.js) · code · 6595 bytes

### Roadmap.js

import CloudinaryImage from 'components/CloudinaryImage' import { CallToAction } from
'components/CallToAction' import { graphql, useStaticQuery } from 'gatsby' import React from
'react' Provides a default export as the module's public entry.

[`src/components/Home/Roadmap.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Roadmap.js) · code · 5204 bytes

### ShamelessCTA.tsx

import React from 'react' import CTA from 'components/Home/CTA' import CloudinaryImage from
'components/CloudinaryImage' import { motion } from 'framer-motion' import { useInView }
from 'react-intersection-observer' Notable exports: `ShamelessCTA`.

[`src/components/Home/ShamelessCTA.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/ShamelessCTA.tsx) · code · 1396 bytes

### Startups.js

import CloudinaryImage from 'components/CloudinaryImage' import React from 'react' import {
StaticImage } from 'gatsby-plugin-image' import { Quote } from 'components/Pricing/Quote'
import { section } from './classes' import { Check3, YC } from 'components/Icons' import {
CallToAction } from 'components/CallToAction' Notable exports: `Startups`.

[`src/components/Home/Startups.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Startups.js) · code · 3006 bytes

### SupportSmallTeamLink.tsx

import React from 'react' import SmallTeam from 'components/SmallTeam' Notable exports:
`SupportSmallTeamLink`.

[`src/components/Home/SupportSmallTeamLink.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/SupportSmallTeamLink.tsx) · code · 237 bytes

### Timeline.js

import { graphql, useStaticQuery } from 'gatsby' import { heading } from './classes' import
groupBy from 'lodash.groupby' import React, { useEffect, useRef, useState } from 'react'
import { IconChevronDown } from '@posthog/icons' import { useBreakpoint } from 'gatsby-
plugin-breakpoints' import Tooltip from 'components/Tooltip' import Markdown from 'component
Notable exports: `Timeline`, `Items`.

[`src/components/Home/Timeline.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Timeline.js) · code · 12912 bytes

### Tutorials.js

import { CallToAction } from 'components/CallToAction' import Link from 'components/Link'
import { graphql, useStaticQuery } from 'gatsby' import { GatsbyImage, getImage } from
'gatsby-plugin-image' import React from 'react' import { heading, section } from './classes'
Notable exports: `Tutorials`.

[`src/components/Home/Tutorials.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Tutorials.js) · code · 2433 bytes

### classes.js

import React from 'react' import cntl from 'cntl' Notable exports: `heading`, `section`,
`gradientWrapper`.

[`src/components/Home/classes.js`](https://github.com/quirq-ai/website/blob/main/src/components/Home/classes.js) · code · 930 bytes

### hero.css

Stylesheet `hero.css` for layout and visual treatment in this folder. Leading class
selectors include `home-hero-title`, `home-hero-subtitle`, `home-hero-cta`, `enterprise-
mode-home-hero-cta`.

[`src/components/Home/hero.css`](https://github.com/quirq-ai/website/blob/main/src/components/Home/hero.css) · code · 3991 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
