<!-- quirq-wiki-generated repo=website dir=src/components/Enterprise -->

# website / src/components/Enterprise

Source: [src/components/Enterprise](https://github.com/quirq-ai/website/tree/main/src/components/Enterprise) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### BuildingArt.tsx

import React, { useEffect, useRef } from 'react' import { BuildingSection, MODULES,
STACK_FLOORS, OFFSETS, BASE_OFFSETS, BASE_MODULES, FLOOR_QUERIES, } from './buildingStack'
import './buildingStack.css' Notable exports: `EnterpriseScene`, `BuildingShadow`,
`BuildingArt`.

[`src/components/Enterprise/BuildingArt.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Enterprise/BuildingArt.tsx) · code · 11366 bytes

### BusinessProof.tsx

import React, { useState } from 'react' import { Tabs } from 'radix-ui' import { IconSend }
from '@posthog/icons' import OSButton from 'components/OSButton' import Link from
'components/Link' Notable exports: `BusinessProof`, `WorkWithUs`, `BuyerResources`.

[`src/components/Enterprise/BusinessProof.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Enterprise/BusinessProof.tsx) · code · 21507 bytes

### buildingStack.css

Stylesheet `buildingStack.css` for layout and visual treatment in this folder. Leading class
selectors include `enterprise-building-scene`, `building-stack`, `building-layout`,
`building-floor`, `building-hog`, `building-shadow-column`, `building-shadow`. Defines or
consumes CSS custom properties (design tokens).

[`src/components/Enterprise/buildingStack.css`](https://github.com/quirq-ai/website/blob/main/src/components/Enterprise/buildingStack.css) · code · 1878 bytes

### buildingStack.ts

export type BuildingSection = 'top' | 'middle' | 'bottom' Notable exports:
`BuildingSection`, `MODULES`, `STACK_FLOORS`, `OFFSETS`, `BASE_OFFSETS`, `BASE_MODULES`,
`FLOOR_QUERIES`.

[`src/components/Enterprise/buildingStack.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Enterprise/buildingStack.ts) · code · 3763 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
