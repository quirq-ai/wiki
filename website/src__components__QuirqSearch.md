<!-- quirq-wiki-generated repo=website dir=src/components/QuirqSearch -->

# website / src/components/QuirqSearch

Source: [src/components/QuirqSearch](https://github.com/quirq-ai/website/tree/main/src/components/QuirqSearch) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“quirq search”). SearchOverlay replaces global PostHog search in the
desktop wrapper. It consumes the same live catalog (useQuirqApps() from
src/lib/quirqLiveApps.ts) as Home base and the desktop icons, so a repository added to the
organization is searchable without a rebuild. The index contains visible organization
repositories plus Home base, Projects, and Edit (Display options).

[`src/components/QuirqSearch/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqSearch/README.md) · code · 1463 bytes

### index.tsx

import React, { useEffect, useMemo, useState } from 'react' import { Combobox } from
'@headlessui/react' import { Dialog as RadixDialog } from 'radix-ui' import { navigate }
from 'gatsby' import { IconSearch, IconX } from '@posthog/icons' import { useAppActions,
useAppUIState } from '../../context/App' import { quirqConfig, type QuirqApp } from
'lib/quirqApp Notable exports: `SearchOverlay`.

[`src/components/QuirqSearch/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqSearch/index.tsx) · code · 7246 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
