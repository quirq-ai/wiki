<!-- quirq-wiki-generated repo=website dir=src/templates -->

# website / src/templates

Source: [src/templates](https://github.com/quirq-ai/website/tree/main/src/templates) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### QuirqInfraV0.tsx

import React from 'react' import SEO from 'components/seo' import QuirqInfraV0 from
'components/QuirqInfraV0' import type { QuirqApp } from 'lib/quirqApps' Notable exports:
`QuirqInfraV0Page`.

[`src/templates/QuirqInfraV0.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/QuirqInfraV0.tsx) · code · 559 bytes

### quirq-app.tsx

import React from 'react' import SEO from 'components/seo' import RepositoryApp from
'components/QuirqApp' import type { QuirqApp } from 'lib/quirqApps' import { useQuirqApps }
from 'lib/quirqLiveApps' Notable exports: `QuirqAppPage`.

[`src/templates/quirq-app.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/quirq-app.tsx) · code · 979 bytes

### quirq-launch.tsx

import React, { useEffect, useMemo, useState } from 'react' import SEO from 'components/seo'
import Explorer from 'components/Explorer' import HeaderBar from
'components/OSChrome/HeaderBar' import OSButton from 'components/OSButton' import {
QuirqAppTile } from 'components/QuirqAppIcon' import { MissingApp, touchTarget, useRoutedApp
} from 'components/QuirqA Notable exports: `QuirqLaunchPage`.

[`src/templates/quirq-launch.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/quirq-launch.tsx) · code · 18959 bytes

### quirq-live-app.tsx

import React from 'react' import SEO from 'components/seo' import RepositoryApp from
'components/QuirqApp' import { MissingApp, useRoutedApp } from
'components/QuirqApp/RoutedApp' Notable exports: `QuirqLiveAppPage`.

[`src/templates/quirq-live-app.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/quirq-live-app.tsx) · code · 890 bytes

_Generated 2026-10-21 10:42 UTC from `main`._
