<!-- quirq-wiki-generated repo=website dir=src/components/HomeBase -->

# website / src/components/HomeBase

Source: [src/components/HomeBase](https://github.com/quirq-ai/website/tree/main/src/components/HomeBase) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Home base”). The Home window at /, laid out after
[Euler](https://github.com/quirq-ai/euler)'s Home, inside the existing Explorer and desktop
window system. A visit to / lands on the desktop with this window closed (startsOnDesktop in
src/lib/landing.ts), and going Back to that visit shows the desktop as it is; the dock's
Home icon opens it or brings it forward.

[`src/components/HomeBase/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/HomeBase/README.md) · code · 2480 bytes

### SEO.tsx

import React from 'react' import SEO from 'components/seo' Notable exports: `HomeBaseSEO`.

[`src/components/HomeBase/SEO.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HomeBase/SEO.tsx) · code · 316 bytes

### index.tsx

import React, { useEffect, useMemo, useState } from 'react' import Explorer from
'components/Explorer' import Link from 'components/Link' import OSButton from
'components/OSButton' import { QuirqAppTile } from 'components/QuirqAppIcon' import {
QuirqMark, QuirqWordmark } from 'components/QuirqBrand' import { getLaunchTarget,
quirqConfig, type QuirqApp } from Notable exports: `HomeBase`.

[`src/components/HomeBase/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HomeBase/index.tsx) · code · 23194 bytes

_Generated 2026-10-17 09:48 UTC from `main`._
