<!-- quirq-wiki-generated repo=website dir=src/components/QuirqInfraV0 -->

# website / src/components/QuirqInfraV0

Source: [src/components/QuirqInfraV0](https://github.com/quirq-ai/website/tree/main/src/components/QuirqInfraV0) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“QuirqInfraV0”). The "quirq infra" app at /v0: a guide to quirq infra
(qq) v0 and a live view of it running. The catalog maps the infra-config repository to this
component through src/templates/QuirqInfraV0.tsx (see quirq.apps.json).

[`src/components/QuirqInfraV0/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqInfraV0/README.md) · code · 1704 bytes

### data.ts

What quirq infra (qq) v0 is, as of 2026-10-07. The repo roles, the walk-through of one
change and the Chromium counterparts are adapted from the infra-map app in quirq-ai/research
(MIT, infra/output/app/infra-map/src/repos.ts). Status lines come from the v0 status report
in the same repo (infra/output/report/2026-10-05-qq-v0-status.md), rechecked against "Where
qq stands" in the qq guide (https://docs.quirq.dev/docs/qq) on 2026-10-07.

[`src/components/QuirqInfraV0/data.ts`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqInfraV0/data.ts) · code · 14468 bytes

### index.tsx

import React, { useState } from 'react' import { Link } from 'gatsby' import Explorer from
'components/Explorer' import { ButtonLink } from 'components/ui/button' import QuirqAppIcon
from 'components/QuirqAppIcon' import { Badge, type BadgeVariant } from
'components/ui/badge' import { Card, CardContent, CardDescription, CardHeader, CardTitle }
from 'componen Notable exports: `QuirqInfraV0`.

[`src/components/QuirqInfraV0/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqInfraV0/index.tsx) · code · 24965 bytes

### live.ts

Live qq state, read in the visitor's browser from public state branches on
raw.githubusercontent.com: gardener's tree-status branch and release's release-state branch.
No credentials, no backend. raw.githubusercontent.com allows cross-origin reads and caches
each file for up to 5 minutes. Notable exports: `getJson`, `recentDays`, `useLiveState`,
`TREE_STATUS_URL`, `RELEASE_STATE_URL`, `DAYS`, `FIRST_CANARY`, `TreeStatus`, and 5 more.

[`src/components/QuirqInfraV0/live.ts`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqInfraV0/live.ts) · code · 3872 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
