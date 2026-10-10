<!-- quirq-wiki-generated repo=website dir=src/components/Viewer -->

# website / src/components/Viewer

Source: [src/components/Viewer](https://github.com/quirq-ai/website/tree/main/src/components/Viewer) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### SearchBar.tsx

import React, { useEffect, useRef, useState } from 'react' import { IconSearch, IconX } from
'@posthog/icons' import OSButton from 'components/OSButton' import { useSearch } from
'./SearchProvider' import Mark from 'mark.js' import debounce from 'lodash/debounce' Notable
exports: `ViewerSearchBar`.

[`src/components/Viewer/SearchBar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Viewer/SearchBar.tsx) · code · 5003 bytes

### SearchProvider.tsx

Define the context type Notable exports: `useSearch`, `SearchProvider`.

[`src/components/Viewer/SearchProvider.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Viewer/SearchProvider.tsx) · code · 1328 bytes

### ViewerControls.tsx

import React, { useState } from 'react' import { IconSearch } from '@posthog/icons' import
OSButton from 'components/OSButton' import { Popover } from 'components/RadixUI/Popover'
import { ViewerSearchBar } from './SearchBar' Notable exports: `ViewerControls`.

[`src/components/Viewer/ViewerControls.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Viewer/ViewerControls.tsx) · code · 5799 bytes

### ViewerFilters.tsx

import React, { useState, useEffect } from 'react' import { Select } from
'../RadixUI/Select' import { useLocation } from '@reach/router' export interface
FilterConfig { label: string value?: any options: { label: string value: any }[] onChange?:
(value: string) => void operator: string filter?: (obj: any, value: any) => boolean
initialValue?: any } Notable exports: `ViewerFilters`, `FilterConfig`.

[`src/components/Viewer/ViewerFilters.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Viewer/ViewerFilters.tsx) · code · 7317 bytes

### ViewerSearchResults.tsx

import React, { useEffect, useState } from 'react' import { useLocation } from
'@reach/router' import { useSearch } from 'components/Editor/SearchProvider' import {
AlgoliaSearchResults } from 'components/Search/InlineSearch' Notable exports:
`ViewerSearchResults`.

[`src/components/Viewer/ViewerSearchResults.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Viewer/ViewerSearchResults.tsx) · code · 6640 bytes

### ViewerSidebar.tsx

import React, { useEffect, useRef, useState } from 'react' import { motion, AnimatePresence
} from 'framer-motion' import { IconSidebarOpen, IconSidebarClose, IconSearch } from
'@posthog/icons' import OSButton from 'components/OSButton' import { InlineSearch } from
'components/Search/InlineSearch' import { useSearch } from
'components/Editor/SearchProvider' Notable exports: `ViewerSidebar`.

[`src/components/Viewer/ViewerSidebar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Viewer/ViewerSidebar.tsx) · code · 6763 bytes

### index.tsx

import React, { useState, useRef, useEffect } from 'react' import { IconGear,
IconTextWidthFixed, IconTextWidth, IconRefresh } from '@posthog/icons' import OSButton from
'components/OSButton' import ScrollArea from 'components/RadixUI/ScrollArea' import {
Toolbar, ToolbarElement } from '../RadixUI/Toolbar' import { SearchProvider } from
'./SearchProvider' im Notable exports: `Viewer`.

[`src/components/Viewer/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Viewer/index.tsx) · code · 14039 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
