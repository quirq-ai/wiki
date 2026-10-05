<!-- quirq-wiki-generated repo=website dir=src/components/Search -->

# website / src/components/Search

Source: [src/components/Search](https://github.com/quirq-ai/website/tree/main/src/components/Search) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### InlineSearch.tsx

import React, { useState, useEffect, useCallback, useRef } from 'react' import { IconSearch,
IconX } from '@posthog/icons' import OSButton from 'components/OSButton' import Link from
'components/Link' import { useSearch } from 'components/Editor/SearchProvider' import Mark
from 'mark.js' import debounce from 'lodash/debounce' import { algoliaIndexName, algol
Notable exports: `InlineSearch`, `AlgoliaSearchResults`.

[`src/components/Search/InlineSearch.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Search/InlineSearch.tsx) · code · 6580 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
