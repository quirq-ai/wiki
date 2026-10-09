<!-- quirq-wiki-generated repo=website dir=src/components/SelfDrivingInbox -->

# website / src/components/SelfDrivingInbox

Source: [src/components/SelfDrivingInbox](https://github.com/quirq-ai/website/tree/main/src/components/SelfDrivingInbox) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### EnableScout.tsx

import React from 'react' import usePostHog from '../../hooks/usePostHog' Notable exports:
`EnableScoutBar`, `EnableScout`.

[`src/components/SelfDrivingInbox/EnableScout.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SelfDrivingInbox/EnableScout.tsx) · code · 6603 bytes

### FromOurInbox.tsx

import React, { useMemo, useState } from 'react' import { graphql, useStaticQuery } from
'gatsby' import dayjs from 'dayjs' import { IconCheck, IconChevronDown, IconPullRequest }
from '@posthog/icons' Notable exports: `useInboxExamples`, `FromOurInbox`.

[`src/components/SelfDrivingInbox/FromOurInbox.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SelfDrivingInbox/FromOurInbox.tsx) · code · 9199 bytes

### README.md

The project README (“SelfDrivingInbox”). The data layer and shared pieces behind the self-
driving pocket guides: the useSelfDrivingTemplates() hook that turns each guide's
frontmatter + SKILL.md into an InboxTemplate, plus the report card, scout file, and "Add
this scout" components the guides compose into figures and CTAs.

[`src/components/SelfDrivingInbox/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/SelfDrivingInbox/README.md) · code · 13218 bytes

### ReportCard.tsx

import React from 'react' Notable exports: `ReportCard`.

[`src/components/SelfDrivingInbox/ReportCard.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SelfDrivingInbox/ReportCard.tsx) · code · 2561 bytes

### ScoutFile.tsx

import React, { useState } from 'react' import usePostHog from '../../hooks/usePostHog'
Notable exports: `ScoutFile`.

[`src/components/SelfDrivingInbox/ScoutFile.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SelfDrivingInbox/ScoutFile.tsx) · code · 2725 bytes

### index.tsx

import { useMemo } from 'react' import { graphql, useStaticQuery } from 'gatsby' Notable
exports: `useSelfDrivingTemplates`.

[`src/components/SelfDrivingInbox/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SelfDrivingInbox/index.tsx) · code · 5908 bytes

### scoutDeepLink.ts

import { buildWizardCommand } from 'components/PlatformInstall/buildCommand' Notable
exports: `scoutInstructions`, `buildScoutDeepLink`, `buildSelfDrivingCommand`.

[`src/components/SelfDrivingInbox/scoutDeepLink.ts`](https://github.com/quirq-ai/website/blob/main/src/components/SelfDrivingInbox/scoutDeepLink.ts) · code · 2901 bytes

### sources.ts

import React from 'react' Notable exports: `productSource`, `ProductSource`.

[`src/components/SelfDrivingInbox/sources.ts`](https://github.com/quirq-ai/website/blob/main/src/components/SelfDrivingInbox/sources.ts) · code · 3116 bytes

### types.ts

The pocket guide contract: structured frontmatter, so list and page render from one source.
Notable exports: `SelfDrivingReport`, `WatchedSource`, `RequirementLevel`, `Requirement`,
`ScoutSpec`, `UNCATEGORIZED`, `InboxTemplate`, `InboxExample`.

[`src/components/SelfDrivingInbox/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/SelfDrivingInbox/types.ts) · code · 3865 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
