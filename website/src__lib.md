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
Notable exports: `getQuirqApps`, `getQuirqApp`, `QuirqApp`, `quirqConfig`, `quirqSnapshot`.

[`src/lib/quirqApps.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqApps.ts) · code · 1376 bytes

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

_Generated 2026-10-06 12:18 UTC from `main`._
