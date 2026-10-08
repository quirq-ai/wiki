<!-- quirq-wiki-generated repo=website dir=src/components/Home/Test -->

# website / src/components/Home/Test

Source: [src/components/Home/Test](https://github.com/quirq-ai/website/tree/main/src/components/Home/Test) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Demos.tsx

import React, { useEffect, useRef, useState } from 'react' import { CallToAction } from
'components/CallToAction' import ScrollArea from 'components/RadixUI/ScrollArea' import {
Logo } from '@posthog/brand/logo' import OSButton from 'components/OSButton' import { useApp
} from '../../../context/App' import WistiaVideo, { WistiaVideoRef } from 'components/Wis
Notable exports: `Home2`, `CTAs`.

[`src/components/Home/Test/Demos.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Test/Demos.tsx) · code · 37542 bytes

### TV.tsx

import React, { useState } from 'react' Notable exports: `TVScreen`.

[`src/components/Home/Test/TV.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Test/TV.tsx) · code · 24516 bytes

### index.tsx

NOTE: `components/PlatformInstall` (index/IconButton/schema/CopyableCommand), the new
`Logomark*` icons added to `components/OSIcons/Icons.tsx`, and the `canvas-confetti`
dependency are all VENDORED VERBATIM from the `9000` branch — kept byte-identical to that
branch on purpose. When 9000 lands, the additions will be identical on both sides and 3-way
merge cleanly (no conflicts).

[`src/components/Home/Test/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/Test/index.tsx) · code · 7398 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
