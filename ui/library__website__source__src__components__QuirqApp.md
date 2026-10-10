<!-- quirq-wiki-generated repo=ui dir=library/website/source/src/components/QuirqApp -->

# ui / library/website/source/src/components/QuirqApp

Source: [library/website/source/src/components/QuirqApp](https://github.com/quirq-ai/ui/tree/main/library/website/source/src/components/QuirqApp) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### DocsBrowser.tsx

Up to this many docs are tabs under the window's header; a repository with more gets the
@pierre/trees sidebar instead. Notable exports: `useRepositoryDocs`, `DocsBrowser`,
`MAX_DOC_TABS`, `RepositoryDocs`.

[`library/website/source/src/components/QuirqApp/DocsBrowser.tsx`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/components/QuirqApp/DocsBrowser.tsx) · code · 9793 bytes

### DocsTree.tsx

The vendored @pierre/trees React entry (src/vendor/pierre-trees). It renders into a shadow
root and touches the DOM as it loads, so it is imported in the browser only, after mount, in
its own chunk. Notable exports: `DocsTree`.

[`library/website/source/src/components/QuirqApp/DocsTree.tsx`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/components/QuirqApp/DocsTree.tsx) · code · 4382 bytes

### MarkdownDoc.tsx

import React, { useEffect, useRef, useState } from 'react' import ReactMarkdown, {
uriTransformer } from 'react-markdown' import type { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm' import rehypeRaw from 'rehype-raw' import rehypeSanitize,
{ defaultSchema } from 'rehype-sanitize' import GithubSlugger from 'github-slugger' import
Highl Notable exports: `MarkdownDoc`.

[`library/website/source/src/components/QuirqApp/MarkdownDoc.tsx`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/components/QuirqApp/MarkdownDoc.tsx) · code · 13427 bytes

### README.md

The project README (“Repository app windows”). The default app template reuses Explorer and
the original window controls. Its content comes from GitHub repository metadata and the
repository's Markdown docs.

[`library/website/source/src/components/QuirqApp/README.md`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/components/QuirqApp/README.md) · code · 3155 bytes

### RoutedApp.tsx

import React, { useEffect, useState } from 'react' import SEO from 'components/seo' import
Explorer from 'components/Explorer' import OSButton from 'components/OSButton' import {
quirqConfig, type QuirqApp } from 'lib/quirqApps' import { useQuirqCatalog, type
QuirqCatalog } from 'lib/quirqLiveApps' import { useApp } from '../../context/App' import {
useWindo Notable exports: `repositoryFromPath`, `useRoutedApp`, `MissingApp`, `touchTarget`.

[`library/website/source/src/components/QuirqApp/RoutedApp.tsx`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/components/QuirqApp/RoutedApp.tsx) · code · 6374 bytes

### index.tsx

import React, { useEffect, useState } from 'react' import { Tabs as RadixTabs } from 'radix-
ui' import Explorer from 'components/Explorer' import OSButton from 'components/OSButton'
import QuirqAppIcon from 'components/QuirqAppIcon' import { getLaunchTarget, type QuirqApp }
from 'lib/quirqApps' import { docLabel, readmeSummary } from 'lib/quirqDocs' import {
Notable exports: `RepositoryApp`.

[`library/website/source/src/components/QuirqApp/index.tsx`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/components/QuirqApp/index.tsx) · code · 10023 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
