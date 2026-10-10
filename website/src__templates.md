<!-- quirq-wiki-generated repo=website dir=src/templates -->

# website / src/templates

Source: [src/templates](https://github.com/quirq-ai/website/tree/main/src/templates) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ApiEndpoint.tsx

import ElementScrollLink, { ScrollSpyProvider } from 'components/ElementScrollLink' import
'@fontsource/source-code-pro' import { CodeBlock, SingleCodeBlock } from
'components/CodeBlock' import { SEO } from 'components/seo' import 'core-
js/features/array/at' import { graphql } from 'gatsby' import { getCookie, setCookie } from
'lib/utils' import * as OpenAPI Notable exports: `ApiEndpoint`, `query`.

[`src/templates/ApiEndpoint.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/ApiEndpoint.tsx) · code · 34731 bytes

### App.js

import { MDXProvider } from '@mdx-js/react' import FooterCTA from 'components/FooterCTA'
import { RightArrow } from 'components/Icons/Icons' import Layout from 'components/Layout'
import Link from 'components/Link' import { Section } from 'components/Section' import { SEO
} from 'components/seo' import TutorialsSlider from 'components/TutorialsSlider' import
Notable exports: `App`, `query`.

[`src/templates/App.js`](https://github.com/quirq-ai/website/blob/main/src/templates/App.js) · code · 5754 bytes

### Blog.tsx

import PostLayout from 'components/PostLayout' import { graphql } from 'gatsby' import React
from 'react' import { SEO } from 'components/seo' import Layout from 'components/Layout'
import { Posts } from 'components/Blog' import Pagination from 'components/Pagination'
import { NewsletterForm } from 'components/NewsletterForm' import CommunityCTA from 'compon
Notable exports: `pageQuery`.

[`src/templates/Blog.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/Blog.tsx) · code · 2351 bytes

### BlogCategory.tsx

import PostLayout from 'components/PostLayout' import { graphql } from 'gatsby' import
React, { useEffect, useState } from 'react' import { SEO } from 'components/seo' import
Layout from 'components/Layout' import { Posts, PostToggle } from 'components/Blog' import
Pagination from 'components/Pagination' import { NewsletterForm } from
'components/NewsletterF Notable exports: `pageQuery`.

[`src/templates/BlogCategory.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/BlogCategory.tsx) · code · 3174 bytes

### BlogPost.tsx

import { MDXProvider } from '@mdx-js/react' import { Blockquote } from
'components/BlockQuote' import { InlineCode } from 'components/InlineCode' import Link from
'components/Link' import { Contributor } from 'components/PostLayout/Contributors' import {
SEO } from 'components/seo' import { ZoomImage } from 'components/ZoomImage' import {
graphql, useStaticQ Notable exports: `BlogPost`, `Intro`, `Contributors`

[`src/templates/BlogPost.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/BlogPost.tsx) · code · 20061 bytes

### BlogTag.tsx

import PostLayout from 'components/PostLayout' import { graphql } from 'gatsby' import
React, { useEffect, useState } from 'react' import { SEO } from 'components/seo' import
Layout from 'components/Layout' import { Posts, PostToggle } from 'components/Blog' import
Pagination from 'components/Pagination' import { NewsletterForm } from
'components/NewsletterF Notable exports: `pageQuery`.

[`src/templates/BlogTag.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/BlogTag.tsx) · code · 2972 bytes

### Changelog.tsx

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react' import
dayjs from 'dayjs' import utc from 'dayjs/plugin/utc' import { navigate } from 'gatsby'
import { useUser } from 'hooks/useUser' import { IconArchive, IconDownload, IconPencil,
IconPlus, IconShieldLock, IconX } from '@posthog/icons' import { ChangelogEmojiReactions } f
Notable exports: `Changelog`, `Change`.

[`src/templates/Changelog.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/Changelog.tsx) · code · 52548 bytes

### DataPipeline.tsx

import PostLayout from 'components/PostLayout' import { dataPipelines, docsMenu } from
'../navs' import React from 'react' import Layout from 'components/Layout' import { graphql
} from 'gatsby' import APIExamples from 'components/Product/Pipelines/APIExamples' import
Configuration from 'components/Product/Pipelines/Configuration' import SEO from 'components
Notable exports: `DataPipeline`, `query`.

[`src/templates/DataPipeline.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/DataPipeline.tsx) · code · 6224 bytes

### DataWarehouseSource.tsx

import React from 'react' import { graphql } from 'gatsby' import SEO from 'components/seo'
import ReactMarkdown from 'react-markdown' import ReaderView from 'components/ReaderView'
import SourceConfiguration from 'components/Product/Sources/Configuration' import
SourceTables from 'components/Product/Sources/Tables' import WarehouseWizardHint from
'component Notable exports: `DataWarehouseSource`, `query`.

[`src/templates/DataWarehouseSource.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/DataWarehouseSource.tsx) · code · 4306 bytes

### Event.tsx

import React from 'react' import { graphql, PageProps } from 'gatsby' import SEO from
'components/seo' import { EventsContent, transformStrapiEvent, Event as EventType } from
'../pages/events' Notable exports: `query`.

[`src/templates/Event.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/Event.tsx) · code · 2864 bytes

### Handbook.tsx

import React from 'react' import ReaderView from 'components/ReaderView' import { graphql }
from 'gatsby' import { useLocation } from '@reach/router' import { Blockquote } from
'components/BlockQuote' import { MdxCodeBlock } from 'components/CodeBlock' import { Heading
} from 'components/Heading' import { InlineCode } from 'components/InlineCode' import Team
Notable exports: `Handbook`, `HandbookSidebar`, `AppParametersFactory`

[`src/templates/Handbook.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/Handbook.tsx) · code · 25824 bytes

### Hogpedia.tsx

import React from 'react' import { graphql } from 'gatsby' import { MDXProvider } from
'@mdx-js/react' import { MDXRenderer } from 'gatsby-plugin-mdx' import Explorer from
'components/Explorer' import Link from 'components/Link' import { SEO } from
'components/seo' import { MdxCodeBlock } from '../components/CodeBlock' import HogpediaShell
from 'components/H Notable exports: `HogpediaArticle`, `query`.

[`src/templates/Hogpedia.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/Hogpedia.tsx) · code · 8698 bytes

### HogpediaCategory.tsx

import React from 'react' import { graphql } from 'gatsby' import Explorer from
'components/Explorer' import Link from 'components/Link' import { SEO } from
'components/seo' import HogpediaShell from 'components/Hogpedia/HogpediaShell' import {
categoryPath } from 'components/Hogpedia/categories' Notable exports: `HogpediaCategory`,
`query`.

[`src/templates/HogpediaCategory.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/HogpediaCategory.tsx) · code · 3019 bytes

### Home.tsx

Empty file `Home.tsx` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`src/templates/Home.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/Home.tsx) · empty · 0 bytes

### Job.tsx

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react' import {
graphql, navigate } from 'gatsby' import ReaderView from 'components/ReaderView' import SEO
from 'components/seo' import Link from 'components/Link' import { CompensationCalculator }
from 'components/CompensationCalculator' import InterviewProcess from 'components/Job/I
Notable exports: `Job`, `query`.

[`src/templates/Job.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/Job.tsx) · code · 46272 bytes

### Pagination.tsx

import PostLayout from 'components/PostLayout' import { graphql } from 'gatsby' import React
from 'react' import { SEO } from 'components/seo' import Layout from 'components/Layout'
import { Posts } from 'components/Blog' import PaginationContainer from
'components/Pagination' import { NewsletterForm } from 'components/NewsletterForm' import
CommunityCTA fro Notable exports: `pageQuery`.

[`src/templates/Pagination.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/Pagination.tsx) · code · 2320 bytes

### Pipeline.js

import { MDXProvider } from '@mdx-js/react' import FooterCTA from 'components/FooterCTA'
import { RightArrow } from 'components/Icons/Icons' import Layout from 'components/Layout'
import Link from 'components/Link' import { Section } from 'components/Section' import { SEO
} from 'components/seo' import TutorialsSlider from 'components/TutorialsSlider' import
Notable exports: `Pipeline`, `query`.

[`src/templates/Pipeline.js`](https://github.com/quirq-ai/website/blob/main/src/templates/Pipeline.js) · code · 6371 bytes

### Plain.js

import { MDXProvider } from '@mdx-js/react' import { FeatureSnapshot } from
'components/FeatureSnapshot' import { ProductScreenshot } from
'components/ProductScreenshot' import { ProductVideo } from 'components/ProductVideo' import
Link from 'components/Link' import { PrivateLink } from 'components/PrivateLink' import
ImageSlider from 'components/ImageSlider Notable exports: `Plain`, `query`.

[`src/templates/Plain.js`](https://github.com/quirq-ai/website/blob/main/src/templates/Plain.js) · code · 3050 bytes

### PostListing.tsx

import { getParams, PostsContext } from 'components/Edition/Posts' import Editor from
'components/Editor' import OSTable from 'components/OSTable' import SEO from
'components/seo' import React, { useEffect, useMemo, useRef, useState } from 'react' import
dayjs from 'dayjs' import relativeTime from 'dayjs/plugin/relativeTime' import Link from
'components/Link Notable exports: `Posts`, `FeaturedImage`.

[`src/templates/PostListing.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/PostListing.tsx) · code · 20209 bytes

### QuirqInfraV0.tsx

import React from 'react' import SEO from 'components/seo' import QuirqInfraV0 from
'components/QuirqInfraV0' import type { QuirqApp } from 'lib/quirqApps' Notable exports:
`QuirqInfraV0Page`.

[`src/templates/QuirqInfraV0.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/QuirqInfraV0.tsx) · code · 559 bytes

### Team.tsx

import Layout from 'components/Layout' import { graphql } from 'gatsby' import React from
'react' import SEO from 'components/seo' import { companyMenu } from '../navs' import Team
from 'components/Team' Notable exports: `TeamPage`, `query`.

[`src/templates/Team.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/Team.tsx) · code · 3024 bytes

### Template.tsx

import React from 'react' import { graphql } from 'gatsby' import ReaderView from
'components/ReaderView' import { SEO } from 'components/seo' import { Section } from
'components/Section' import { shortcodes } from '../mdxGlobalComponents' import { Blockquote
} from 'components/BlockQuote' import { MdxCodeBlock } from 'components/CodeBlock' import {
Heading Notable exports: `Template`, `query`.

[`src/templates/Template.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/Template.tsx) · code · 7632 bytes

### WorkflowTemplate.tsx

import React from 'react' import { graphql } from 'gatsby' import ReaderView from
'components/ReaderView' import { SEO } from 'components/seo' import { TreeMenu } from
'components/TreeMenu' import { CallToAction } from 'components/CallToAction' import
CloudinaryImage from 'components/CloudinaryImage' import TemplateCTAs from
'components/TemplateCTAs' Notable exports: `WorkflowTemplate`, `query`.

[`src/templates/WorkflowTemplate.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/WorkflowTemplate.tsx) · code · 5185 bytes

### quirq-app.tsx

import React from 'react' import SEO from 'components/seo' import RepositoryApp from
'components/QuirqApp' import type { QuirqApp } from 'lib/quirqApps' import { useQuirqApps }
from 'lib/quirqLiveApps' Notable exports: `QuirqAppPage`.

[`src/templates/quirq-app.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/quirq-app.tsx) · code · 979 bytes

### quirq-launch.tsx

import React, { useEffect, useMemo, useState } from 'react' import SEO from 'components/seo'
import Explorer from 'components/Explorer' import HeaderBar from
'components/OSChrome/HeaderBar' import OSButton from 'components/OSButton' import {
QuirqAppTile } from 'components/QuirqAppIcon' import { MissingApp, touchTarget, useRoutedApp
} from 'components/QuirqA Notable exports: `QuirqLaunchPage`.

[`src/templates/quirq-launch.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/quirq-launch.tsx) · code · 18959 bytes

### quirq-live-app.tsx

import React from 'react' import SEO from 'components/seo' import RepositoryApp from
'components/QuirqApp' import { MissingApp, useRoutedApp } from
'components/QuirqApp/RoutedApp' Notable exports: `QuirqLiveAppPage`.

[`src/templates/quirq-live-app.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/quirq-live-app.tsx) · code · 890 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
