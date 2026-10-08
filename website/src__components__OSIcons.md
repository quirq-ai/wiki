<!-- quirq-wiki-generated repo=website dir=src/components/OSIcons -->

# website / src/components/OSIcons

Source: [src/components/OSIcons](https://github.com/quirq-ai/website/tree/main/src/components/OSIcons) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AppIcon.tsx

App icon mapping for different skins Notable exports: `isAppIconName`, `AppIconProps`,
`IconImageProps`, `IconImage`, `AppIcon`, `AppItem`, `AppLink`.

[`src/components/OSIcons/AppIcon.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSIcons/AppIcon.tsx) · code · 20822 bytes

### DemoIcon.tsx

demo.mov ships as a pre-rendered isometric scene (a light/dark pair), not a glass glyph.
Exported at 124×86 @2x, so it renders at 62×43. Notable exports: `DemoIcon`.

[`src/components/OSIcons/DemoIcon.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSIcons/DemoIcon.tsx) · code · 1607 bytes

### GlassIcon.tsx

import React, { useId } from 'react' Notable exports: `GlassIcon`, `GlyphPart`,
`GlassIconProps`.

[`src/components/OSIcons/GlassIcon.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSIcons/GlassIcon.tsx) · code · 13825 bytes

### Icons.tsx

this is temporary until we're done adding new icons, then these can all move to
@posthog/icons Notable exports: `IconProps`, `BaseIcon`, `IconAndroid`, `IconAnthropic`,
`IconClaudeCode`, `IconApple`, `IconBold`, `IconBrain`, and 46 more.

[`src/components/OSIcons/Icons.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSIcons/Icons.tsx) · code · 99973 bytes

### PricingIcon.tsx

import React, { useEffect, useState } from 'react' import usePostHog from 'hooks/usePostHog'
import GlassIcon, { type GlyphPart } from './GlassIcon' import { PRICING_DOLLAR_CUTOUT,
PRICING_EURO_CUTOUT, PRICING_FRONT_DETAIL_SILHOUETTE, PRICING_FRONT_SILHOUETTE,
PRICING_POUND_CUTOUT, PRICING_REAR_DETAIL_SILHOUETTE, PRICING_REAR_SILHOUETTE, } from
'./glyphs' Notable exports: `PricingIcon`.

[`src/components/OSIcons/PricingIcon.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSIcons/PricingIcon.tsx) · code · 2213 bytes

### README.md

The project README (“OSIcons”). Desktop OS-style icons used across the site.

[`src/components/OSIcons/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/OSIcons/README.md) · code · 6898 bytes

### glyphs.ts

import type { GlyphPart } from './GlassIcon' Notable exports: `HOME_SILHOUETTE`,
`SELF_DRIVING_SILHOUETTE`, `SKILLS_SILHOUETTE`, `DOWNLOAD_SILHOUETTE`,
`TALK_TO_A_HUMAN_SILHOUETTE`, `WHY_POSTHOG_SILHOUETTE`, `CHANGELOG_SILHOUETTE`,
`TRASH_SILHOUETTE`, and 16 more.

[`src/components/OSIcons/glyphs.ts`](https://github.com/quirq-ai/website/blob/main/src/components/OSIcons/glyphs.ts) · code · 23711 bytes

### index.ts

export * from './Icons' export * from './AppIcon' export { default as GlassIcon } from
'./GlassIcon' export type { GlassIconProps } from './GlassIcon' export { default as
PricingIcon } from './PricingIcon' export { default as DemoIcon } from './DemoIcon' Notable
exports: `GlassIcon`, `PricingIcon`, `DemoIcon`.

[`src/components/OSIcons/index.ts`](https://github.com/quirq-ai/website/blob/main/src/components/OSIcons/index.ts) · code · 255 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
