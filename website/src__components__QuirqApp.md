<!-- quirq-wiki-generated repo=website dir=src/components/QuirqApp -->

# website / src/components/QuirqApp

Source: [src/components/QuirqApp](https://github.com/quirq-ai/website/tree/main/src/components/QuirqApp) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Repository app windows”). The default app template reuses Explorer and
the original window controls. Its content comes from GitHub repository metadata and a synced
README. It supports three presentations: overview (app profile), reader (document with
repository sidebar), and gallery (a colorful showcase). The presentation belongs to each
entry in quirq.apps.json.

[`src/components/QuirqApp/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqApp/README.md) · code · 1133 bytes

### index.tsx

import React, { useState } from 'react' import ReactMarkdown from 'react-markdown' import
remarkGfm from 'remark-gfm' import Explorer from 'components/Explorer' import OSButton from
'components/OSButton' import QuirqAppIcon from 'components/QuirqAppIcon' import Link from
'components/Link' import type { QuirqApp } from 'lib/quirqApps' Notable exports:
`RepositoryApp`.

[`src/components/QuirqApp/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqApp/index.tsx) · code · 9705 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
