<!-- quirq-wiki-generated repo=website dir=src/components/Editor -->

# website / src/components/Editor

Source: [src/components/Editor](https://github.com/quirq-ai/website/tree/main/src/components/Editor) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### SearchBar.tsx

import React, { useEffect, useRef, useState } from 'react' import { IconSearch, IconX } from
'@posthog/icons' import OSButton from 'components/OSButton' import { useSearch } from
'./SearchProvider' import Mark from 'mark.js' import debounce from 'lodash/debounce' Notable
exports: `SearchBar`.

[`src/components/Editor/SearchBar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Editor/SearchBar.tsx) · code · 4884 bytes

### SearchProvider.tsx

Define the context type Notable exports: `useSearch`, `SearchProvider`.

[`src/components/Editor/SearchProvider.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Editor/SearchProvider.tsx) · code · 1328 bytes

### SearchUtils.tsx

HTML escape function to prevent XSS Notable exports: `preparePreviewText`,
`processMarkdownForHighlighting`, `generateHighlightedText`, `createHighlightedPreview`,
`HighlightedText`, `HighlightedMarkdown`, `FuseResult`, `createFuseInstance`, and 1 more.

[`src/components/Editor/SearchUtils.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Editor/SearchUtils.tsx) · code · 11499 bytes

### index.tsx

import React, { useState, useRef, useEffect } from 'react' import { IconSearch, IconMessage,
IconFilter, IconGear, IconTextWidthFixed, IconTextWidth, IconRefresh, IconPlus, } from
'@posthog/icons' import OSButton from 'components/OSButton' import ScrollArea from
'components/RadixUI/ScrollArea' import { Toolbar, ToolbarElement } from '../RadixUI/Toolbar'
impo Notable exports: `Editor`.

[`src/components/Editor/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Editor/index.tsx) · code · 25201 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
