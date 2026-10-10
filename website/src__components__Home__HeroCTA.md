<!-- quirq-wiki-generated repo=website dir=src/components/Home/HeroCTA -->

# website / src/components/Home/HeroCTA

Source: [src/components/Home/HeroCTA](https://github.com/quirq-ai/website/tree/main/src/components/Home/HeroCTA) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### index.tsx

import React from 'react' import { HERO_CTA_VARIANTS } from './variants' Notable exports:
`HeroCTA`, `HERO_CTA_VARIANTS`, `DEFAULT_HERO_CTA_VARIANT`, `resolveHeroCtaVariant`.

[`src/components/Home/HeroCTA/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/HeroCTA/index.tsx) · code · 601 bytes

### variants.tsx

import React, { useRef, useState } from 'react' import { IconCheck } from '@posthog/icons'
import { Logo } from '@posthog/brand/logo' import { CallToAction, TrackedCTA } from
'components/CallToAction' import PlatformInstall, { CopyableCommand, wizardInstallSchema }
from 'components/PlatformInstall' import { buildWizardCommand } from
'components/PlatformInsta Notable exports: `resolveHeroCtaVariant`, `HeroCtaVariant`

[`src/components/Home/HeroCTA/variants.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/HeroCTA/variants.tsx) · code · 13579 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
