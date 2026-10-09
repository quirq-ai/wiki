<!-- quirq-wiki-generated repo=website dir=src/components/QuirqApp -->

# website / src/components/QuirqApp

Source: [src/components/QuirqApp](https://github.com/quirq-ai/website/tree/main/src/components/QuirqApp) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### DocsBrowser.tsx

import React, { useCallback, useEffect, useRef, useState } from 'react' import type {
QuirqApp } from 'lib/quirqApps' import { githubFileUrl, isDocPath, loadDoc, loadDocsIndex,
readmeIn, type DocsIndex } from 'lib/quirqDocs' import { useAppSettings } from
'../../context/App' import MarkdownDoc from './MarkdownDoc' import DocsTree from
'./DocsTree' Notable exports: `DocsBrowser`.

[`src/components/QuirqApp/DocsBrowser.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqApp/DocsBrowser.tsx) · code · 8238 bytes

### DocsTree.tsx

The vendored @pierre/trees React entry (src/vendor/pierre-trees). It renders into a shadow
root and touches the DOM as it loads, so it is imported in the browser only, after mount, in
its own chunk. Notable exports: `DocsTree`.

[`src/components/QuirqApp/DocsTree.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqApp/DocsTree.tsx) · code · 4382 bytes

### MarkdownDoc.tsx

import React, { useEffect, useRef, useState } from 'react' import ReactMarkdown, {
uriTransformer } from 'react-markdown' import type { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm' import rehypeRaw from 'rehype-raw' import rehypeSanitize,
{ defaultSchema } from 'rehype-sanitize' import GithubSlugger from 'github-slugger' import
Highl Notable exports: `MarkdownDoc`.

[`src/components/QuirqApp/MarkdownDoc.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqApp/MarkdownDoc.tsx) · code · 12519 bytes

### README.md

The project README (“Repository app windows”). The default app template reuses Explorer and
the original window controls. Its content comes from GitHub repository metadata and a synced
README. It supports three presentations: overview (app profile), reader (document with
repository sidebar), and gallery (a colorful showcase). The presentation belongs to each
entry in quirq.apps.json.

[`src/components/QuirqApp/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqApp/README.md) · code · 3021 bytes

### RoutedApp.tsx

import React, { useEffect, useState } from 'react' import SEO from 'components/seo' import
Explorer from 'components/Explorer' import OSButton from 'components/OSButton' import {
quirqConfig, type QuirqApp } from 'lib/quirqApps' import { useQuirqCatalog, type
QuirqCatalog } from 'lib/quirqLiveApps' import { useApp } from '../../context/App' import {
useWindo Notable exports: `repositoryFromPath`, `useRoutedApp`, `MissingApp`, `touchTarget`.

[`src/components/QuirqApp/RoutedApp.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqApp/RoutedApp.tsx) · code · 8435 bytes

### index.tsx

import React, { useState } from 'react' import Explorer from 'components/Explorer' import
OSButton from 'components/OSButton' import QuirqAppIcon from 'components/QuirqAppIcon'
import Link from 'components/Link' import { getLaunchTarget, type QuirqApp } from
'lib/quirqApps' import DocsBrowser from './DocsBrowser' import { touchTarget } from
'./RoutedApp' Notable exports: `RepositoryApp`.

[`src/components/QuirqApp/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqApp/index.tsx) · code · 8128 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
