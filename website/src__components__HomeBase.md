<!-- quirq-wiki-generated repo=website dir=src/components/HomeBase -->

# website / src/components/HomeBase

Source: [src/components/HomeBase](https://github.com/quirq-ai/website/tree/main/src/components/HomeBase) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Home base”). The organization app launcher, inside the existing
Explorer and desktop window system. All entries come from getQuirqApps() in
src/lib/quirqApps.ts. Change quirq.apps.json to map a repository to an icon, a category, a
URL, a presentation, or a custom component. Run pnpm apps:sync to refresh the committed
GitHub snapshot.

[`src/components/HomeBase/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/HomeBase/README.md) · code · 716 bytes

### index.tsx

import React, { useMemo, useState } from 'react' import Explorer from 'components/Explorer'
import Link from 'components/Link' import OSButton from 'components/OSButton' import
QuirqAppIcon from 'components/QuirqAppIcon' import { getQuirqApps, quirqConfig } from
'lib/quirqApps' Notable exports: `HomeBase`.

[`src/components/HomeBase/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HomeBase/index.tsx) · code · 11991 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
