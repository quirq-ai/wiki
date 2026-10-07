<!-- quirq-wiki-generated repo=website dir=src/components/QuirqSearch -->

# website / src/components/QuirqSearch

Source: [src/components/QuirqSearch](https://github.com/quirq-ai/website/tree/main/src/components/QuirqSearch) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“quirq search”). SearchOverlay replaces global PostHog search in the
desktop wrapper. It consumes the same getQuirqApps() catalog as Home base, the desktop
icons, and the taskbar. The index contains visible organization repositories plus Home base
and Display options. Hidden, archived, and excluded repositories never enter it.

[`src/components/QuirqSearch/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqSearch/README.md) · code · 1367 bytes

### index.tsx

import React, { useEffect, useState } from 'react' import { Combobox } from
'@headlessui/react' import { Dialog as RadixDialog } from 'radix-ui' import { navigate }
from 'gatsby' import { IconSearch, IconX } from '@posthog/icons' import { useAppActions,
useAppUIState } from '../../context/App' import { getQuirqApps, quirqConfig } from
'lib/quirqApps' import Notable exports: `SearchOverlay`.

[`src/components/QuirqSearch/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqSearch/index.tsx) · code · 7049 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
