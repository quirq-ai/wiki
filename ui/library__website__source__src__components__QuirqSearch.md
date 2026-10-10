<!-- quirq-wiki-generated repo=ui dir=library/website/source/src/components/QuirqSearch -->

# ui / library/website/source/src/components/QuirqSearch

Source: [library/website/source/src/components/QuirqSearch](https://github.com/quirq-ai/ui/tree/main/library/website/source/src/components/QuirqSearch) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“quirq search”). SearchOverlay replaces global PostHog search in the
desktop wrapper. It consumes the same live catalog (useQuirqApps() from
src/lib/quirqLiveApps.ts) as Home base and the desktop icons, so a repository added to the
organization is searchable without a rebuild. The index contains visible organization
repositories plus Home base, Projects, and Edit (Display options).

[`library/website/source/src/components/QuirqSearch/README.md`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/components/QuirqSearch/README.md) · code · 1518 bytes

### index.tsx

import React, { useEffect, useMemo, useState } from 'react' import { roleKeywords } from
'lib/quirqRoles' import { Combobox } from '@headlessui/react' import { Dialog as RadixDialog
} from 'radix-ui' import { navigate } from 'gatsby' import { IconSearch, IconX } from
'@posthog/icons' import { useAppActions, useAppUIState } from '../../context/App' import { q
Notable exports: `SearchOverlay`.

[`library/website/source/src/components/QuirqSearch/index.tsx`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/components/QuirqSearch/index.tsx) · code · 7316 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
