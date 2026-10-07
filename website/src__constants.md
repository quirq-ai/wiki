<!-- quirq-wiki-generated repo=website dir=src/constants -->

# website / src/constants

Source: [src/constants](https://github.com/quirq-ai/website/tree/main/src/constants) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### addons.ts

export const EXCLUDED_ADDON_TYPES = [ 'mobile_replay', 'data_pipelines',
'data_warehouse_historical', 'logs_retention_30d', ] Notable exports:
`EXCLUDED_ADDON_TYPES`.

[`src/constants/addons.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/addons.ts) · code · 142 bytes

### eventGraphicPalette.ts

The approved palette for the generated event graphic (v2), taken from the brand team's Figma
file. These hues are deliberately scoped to the event graphic and are NOT the Tailwind
palette — none of them match `tailwind.config.js` (v2 blue is #0457FF, Tailwind's is
#2F80FA). Until the brand team confirms whether they supersede the site palette, keeping
them here avoids changing anything else.

[`src/constants/eventGraphicPalette.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/eventGraphicPalette.ts) · code · 4824 bytes

### explorerLayoutOptions.tsx

import React from 'react' import { IconGrid, IconListSquare } from
'components/OSIcons/Icons' Notable exports: `explorerLayoutOptions`.

[`src/constants/explorerLayoutOptions.tsx`](https://github.com/quirq-ai/website/blob/main/src/constants/explorerLayoutOptions.tsx) · code · 279 bytes

### frostedSurfaces.ts

OS window chrome — full literal strings so Tailwind JIT picks up every class. Default:
frosted glass. Solid opaque when body[data-reduce-transparency="true"] or prefers-reduced-
transparency (via the `reduce-transparency:` variant). Notable exports: `WINDOW_BG`,
`PANEL_BG`, `TASKBAR_BG`, `MOTION_LAYER`.

[`src/constants/frostedSurfaces.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/frostedSurfaces.ts) · code · 981 bytes

### index.ts

Paths that have raw markdown available for copying/downloading. `/pocket-guides` is here so
a scout's SKILL.md is fetchable as agent context – see
components/SelfDrivingInbox/README.md. `/pricing` covers `/pricing/agent-estimates`;
`/pricing.md` itself is built from billing data by `generatePricingMd`, not scraped, because
no MDX node has the slug `/pricing`.

[`src/constants/index.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/index.ts) · code · 3445 bytes

### installation-taxonomy.ts

import { getLogo } from './logos' Notable exports: `resolveWizardLogoKey`,
`resolveWizardDocsUrl`, `getWizardFrameworkRows`, `WIZARD_GITHUB_REPO_URL`, `InstallItem`,
`InstallCategory`, `TAXONOMY`, `WizardFrameworkRow`.

[`src/constants/installation-taxonomy.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/installation-taxonomy.ts) · code · 11014 bytes

### logos.ts

Centralized logo URLs for platform icons used across docs. Notable exports: `getLogo`,
`getDarkClassForLogo`, `LOGOS`, `LogoKey`.

[`src/constants/logos.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/logos.ts) · code · 15198 bytes

### pocketGuides.ts

The volumes on the shelf. Data only, so `gatsby/` can import it in Node at build time.
Notable exports: `volumeForProduct`, `volumeById`, `pocketGuideUrl`, `PocketGuideToken`,
`PocketGuideVolume`, `FIRST_GUIDE_BOOK_ORDER`, `POCKET_GUIDE_VOLUMES`.

[`src/constants/pocketGuides.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/pocketGuides.ts) · code · 3830 bytes

### posthogIPs.ts

Single source of truth for PostHog's IP addresses: the fixed, public set PostHog connects
from when reaching a customer-controlled endpoint (webhook destinations, data warehouse
sources, batch exports, and WAF-protected sites for features like heatmaps). These are
PostHog's outbound/egress IPs; from the customer's side they arrive as inbound connections
to allowlist. If they ever change, update them here only.

[`src/constants/posthogIPs.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/posthogIPs.ts) · code · 670 bytes

### productNavigation.ts

import React from 'react' import * as Icons from '@posthog/icons' Notable exports:
`buildProductMenuItems`, `buildAllProductsMenuItems`, `BROWSE_TOOLS_HANDLES`,
`nonProductPages`.

[`src/constants/productNavigation.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/productNavigation.ts) · code · 5555 bytes

### profileColors.ts

The community profile favorite color options — all safelisted as bg-{color} in safelist.txt.
Shared by the profile edit forms and the event graphic so the list can't drift out of sync.
Notable exports: `PROFILE_COLORS`.

[`src/constants/profileColors.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/profileColors.ts) · code · 394 bytes

### sources.ts

export const SELF_HOSTED_SOURCES = [ { name: 'File upload', slug: 'file-upload' }, { name:
'S3', slug: 's3', logo: 's3' }, { name: 'Google Cloud Storage', slug: 'gcs', logo:
'googleCloud' }, { name: 'Cloudflare R2', slug: 'r2', logo: 'cloudflareR2' }, { name: 'Azure
Blob', slug: 'azure-blob', logo: 'azureBlob' }, ] Notable exports: `SELF_HOSTED_SOURCES`.

[`src/constants/sources.ts`](https://github.com/quirq-ai/website/blob/main/src/constants/sources.ts) · code · 337 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
