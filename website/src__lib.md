<!-- quirq-wiki-generated repo=website dir=src/lib -->

# website / src/lib

Source: [src/lib](https://github.com/quirq-ai/website/tree/main/src/lib) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### algoliaSearch.ts

import algoliasearch from 'algoliasearch/lite' Notable exports: `algoliaSearchClient`,
`algoliaIndexName`.

[`src/lib/algoliaSearch.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/algoliaSearch.ts) · code · 286 bytes

### employee.ts

PostHog employees are identified by their @posthog.com email domain. They must authenticate
via OAuth (the backend enforces this); the UI uses this to hide the password path and label
account settings. Keep in sync with the backend's isPostHogEmail in squeak-strapi (oauth-
guard.ts). Notable exports: `isPostHogEmail`.

[`src/lib/employee.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/employee.ts) · code · 429 bytes

### exportToPdf.ts

interface ExportToPdfOptions { slideId?: string filename?: string } Notable exports:
`exportToPdf`.

[`src/lib/exportToPdf.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/exportToPdf.ts) · code · 4777 bytes

### posthogDesktopCompute.ts

export interface ComputeRateCard { cpu_core_second_usd: string memory_gib_second_usd: string
} Notable exports: `ComputeRateCard`, `PUBLISHED_COMPUTE_RATE_CARD`, `PUBLISHED_RATES_DATE`,
`BILLABLE_CPU_CORES`, `BILLABLE_MEMORY_GIB`, `hourlyComputeUsd`.

[`src/lib/posthogDesktopCompute.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/posthogDesktopCompute.ts) · code · 643 bytes

### posthogDesktopPricing.ts

const MODELS_URL = 'https://gateway.us.posthog.com/posthog_code/v1/models' const COMPUTE_URL
= 'https://us.posthog.com/api/code/sandbox-pricing/' const BLOCKED_DESKTOP_MODEL_IDS = new
Set([ 'gpt-5-mini', 'openai/gpt-5-mini', 'gpt-5.2', 'openai/gpt-5.2', 'gpt-5.3',
'openai/gpt-5.3', 'gpt-5.3-codex', 'openai/gpt-5.3-codex', 'claude-opus-4-5',
'anthropic/claude Notable exports: `PRICING_CACHE_CONTROL`, `getPostHogDesktopPricing`.

[`src/lib/posthogDesktopPricing.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/posthogDesktopPricing.ts) · code · 2871 bytes

### productInterest.ts

Product interest tracking for onboarding Notable exports: `getProductInterests`,
`showedInterest`, `getProductSlugFromPath`.

[`src/lib/productInterest.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/productInterest.ts) · code · 3363 bytes

### quirqApps.ts

import config from '../../quirq.apps.json' import snapshot from '../data/quirq-
repositories.json' import { buildQuirqApps } from '../../scripts/lib/quirq-catalog.mjs'
import type { QuirqIcon } from '../components/QuirqAppIcon/glyphs' Notable exports:
`getQuirqApps`, `getLaunchTarget`, `getQuirqApp`, `QuirqApp`, `quirqConfig`,
`quirqSnapshot`.

[`src/lib/quirqApps.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqApps.ts) · code · 1949 bytes

### quirqAvatar.ts

A small configuration and storage adapter over the vendored Blobatar renderer, modeled on
Euler's euler-avatar.js. Avatars render locally from a name (the seed); nothing calls a
service. Notable exports: `normalizeAvatarConfig`, `avatarSvg`, `avatarUri`,
`loadAvatarConfig`, `saveAvatarConfig`, `useQuirqAvatar`, `AVATAR_STORAGE_KEY`,
`QUIRQY_WINDOW`, and 8 more.

[`src/lib/quirqAvatar.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqAvatar.ts) · code · 6917 bytes

### quirqDocs.test.ts

import test from 'node:test' import assert from 'node:assert/strict' import { docImageUrl,
docSrcSet, isDocPath, readmeIn, repositoryPath, themedMedia } from './quirqDocs.ts'
Automated test file.

[`src/lib/quirqDocs.test.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqDocs.test.ts) · code · 3521 bytes

### quirqDocs.ts

A repository's documentation, read in the visitor's browser. The list of Markdown files
comes from GitHub's git trees API: one anonymous, rate-limited request per repository per
visit (an unchanged tree revalidates as a 304, which GitHub doesn't count). Each file comes
from raw.githubusercontent.com, which is outside the API's rate limit and caches files for
up to 5 minutes.

[`src/lib/quirqDocs.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqDocs.ts) · code · 5729 bytes

### quirqLiveApps.ts

The organization's repository list, read live in the visitor's browser from GitHub's public
REST API, so a repository created, renamed, described or deleted in the organization shows
on the desktop, in Home base and in search without a rebuild. No token or backend.

[`src/lib/quirqLiveApps.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqLiveApps.ts) · code · 8000 bytes

### quirqProjects.ts

import config from '../../quirq.projects.json' import snapshot from '../data/quirq-
projects.json' import { buildQuirqProjects, DEFAULT_PROJECT_RULE, PHASES, projectRuleText }
from '../../scripts/lib/quirq-phases.mjs' Notable exports: `getQuirqProjectGroups`,
`PhaseId`, `Phase`, `QuirqProject`, `QuirqProjectGroup`, `quirqPhases`, `projectsFetchedAt`,
`starsSource`.

[`src/lib/quirqProjects.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqProjects.ts) · code · 1667 bytes

### quirqReadmeLinks.test.ts

import test from 'node:test' import assert from 'node:assert/strict' import {
canFrameReadmeLink, readmeLinkAt, readmeLinkNamed, readmeLinkLabel, readmeLinkLook,
readmeLinks, readmeLinkTarget, } from './quirqReadmeLinks.ts' Automated test file.

[`src/lib/quirqReadmeLinks.test.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqReadmeLinks.test.ts) · code · 7207 bytes

### quirqReadmeLinks.ts

The links in the organization's profile README, as the desktop shows them: each is an app
icon (its look) that opens where the link points (its target). Pure functions, so they can
be tested. Notable exports: `readmeLinkApp`, `readmeLinkLook`, `canFrameReadmeLink`,
`readmeLinkAddress`, `readmeLinkTarget`, `readmeLinks`, `readmeLinkNamed`, `readmeLinkAt`,
and 8 more.

[`src/lib/quirqReadmeLinks.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqReadmeLinks.ts) · code · 9168 bytes

### shopify.ts

import type { CartCreateReponse, CartResponse, CreateCartVariables } from
'templates/merch/types' Notable exports: `shopifyStorefrontUrl`, `shopifyHeaders`,
`CREATE_CART`, `GET_CART`, `createCartQuery`, `getCartQuery`.

[`src/lib/shopify.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/shopify.ts) · code · 6993 bytes

### strapi.ts

Host for client-side Squeak/Strapi calls (auth + the authenticated session). Override via
GATSBY_SQUEAK_AUTH_HOST — e.g. a local Strapi instance — for testing; defaults to the normal
API host so prod and other devs are unaffected. Note: build-time sourcing (gatsby-source-
squeak) uses GATSBY_SQUEAK_API_HOST directly and is intentionally NOT affected by this, so
it stays on the full-data cloud backend.

[`src/lib/strapi.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/strapi.ts) · code · 4031 bytes

### utils.ts

import { IMenu } from 'components/PostLayout/types' import slugify from 'slugify' import {
LibraryPluginType } from 'types' Notable exports: `classNames`, `getPluginImageSrc`,
`getCookie`, `setCookie`, `generateRandomHtmlId`, `mergeClassList`, `scrollWithOffset`,
`HubSpotUser`, and 7 more.

[`src/lib/utils.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/utils.ts) · code · 4353 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
