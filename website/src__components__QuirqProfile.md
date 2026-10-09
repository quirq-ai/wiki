<!-- quirq-wiki-generated repo=website dir=src/components/QuirqProfile -->

# website / src/components/QuirqProfile

Source: [src/components/QuirqProfile](https://github.com/quirq-ai/website/tree/main/src/components/QuirqProfile) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“quirq profile”). The organization's GitHub profile README (quirq-
ai/.github, profile/README.md), written on the desktop's plain background. The desktop
icons, the dock and app windows sit on top of it. components/Desktop mounts it in the
desktop's scrolling layer; on phones the icon grid scrolls above it.

[`src/components/QuirqProfile/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqProfile/README.md) · code · 2789 bytes

### index.tsx

import React, { useState } from 'react' import ReactMarkdown, { uriTransformer } from
'react-markdown' import type { Components } from 'react-markdown' import remarkGfm from
'remark-gfm' import rehypeRaw from 'rehype-raw' import rehypeSanitize from 'rehype-sanitize'
import { quirqConfig } from 'lib/quirqApps' import { useQuirqApps } from 'lib/quirqLiveApps'
Provides a default export as the module's public entry.

[`src/components/QuirqProfile/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqProfile/index.tsx) · code · 12768 bytes

### useProfileReadme.ts

The organization's GitHub profile README, read live in the visitor's browser from the public
.github repository on raw.githubusercontent.com, like the /v0 live state. No credentials or
backend. HEAD is the default branch; raw.githubusercontent.com allows cross-origin reads and
caches each file for up to 5 minutes. Notable exports: `useProfileReadme`,
`PROFILE_README_URL`, `PROFILE_RAW_BASE`, `PROFILE_BLOB_BASE`, `ProfileReadme`.

[`src/components/QuirqProfile/useProfileReadme.ts`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqProfile/useProfileReadme.ts) · code · 2829 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
