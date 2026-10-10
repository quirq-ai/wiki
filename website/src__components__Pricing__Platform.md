<!-- quirq-wiki-generated repo=website dir=src/components/Pricing/Platform -->

# website / src/components/Pricing/Platform

Source: [src/components/Pricing/Platform](https://github.com/quirq-ai/website/tree/main/src/components/Pricing/Platform) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### PlatformPackageComparison.tsx

import React from 'react' import { Link } from 'gatsby' import { IconCheck } from
'@posthog/icons' import OSTable from 'components/OSTable' import useCloud from
'hooks/useCloud' import usePostHogInstance from 'hooks/usePostHogInstance' import {
usePlatform } from './usePlatform' Notable exports: `PlatformPackageList`,
`PlatformFeatureTable`, `PlatformPackageCards`.

[`src/components/Pricing/Platform/PlatformPackageComparison.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Platform/PlatformPackageComparison.tsx) · code · 15234 bytes

### README.md

The project README (“Pricing/Platform”). Platform packages — the paid add-ons that cover
team management (SSO, audit logs, custom roles, project permissions) rather than product
usage.

[`src/components/Pricing/Platform/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Platform/README.md) · code · 2668 bytes

### usePlatform.ts

import { useStaticQuery } from 'gatsby' import { allProductsData } from '../Pricing' Notable
exports: `usePlatform`.

[`src/components/Pricing/Platform/usePlatform.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/Platform/usePlatform.ts) · code · 489 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
