<!-- quirq-wiki-generated repo=website dir=contents/docs/session-replay/installation/_snippets -->

# website / contents/docs/session-replay/installation/_snippets

Source: [contents/docs/session-replay/installation/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/session-replay/installation/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### install.tsx

import React from 'react' import ProductInstall from 'components/Products/ProductInstall'
Provides a default export as the module's public entry.

[`contents/docs/session-replay/installation/_snippets/install.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/installation/_snippets/install.tsx) · code · 732 bytes

### installation-platforms.tsx

import React from 'react' import List from 'components/List' import usePlatformList from
'hooks/docs/usePlatformList' Provides a default export as the module's public entry.

[`contents/docs/session-replay/installation/_snippets/installation-platforms.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/installation/_snippets/installation-platforms.tsx) · code · 746 bytes

### sr-installation-wrapper.tsx

Web SDK installations Notable exports: `SRJSWebInstallationWrapper`,
`SRNextJSInstallationWrapper`, `SRHTMLSnippetInstallationWrapper`,
`SRReactInstallationWrapper`, `SRVueInstallationWrapper`, `SRAngularInstallationWrapper`,
`SRAstroInstallationWrapper`, `SRSvelteInstallationWrapper`, and 12 more.

[`contents/docs/session-replay/installation/_snippets/sr-installation-wrapper.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/installation/_snippets/sr-installation-wrapper.tsx) · code · 4952 bytes

### sr-next-steps.mdx

Markdown document `sr-next-steps.mdx`. Now that you're recording sessions, continue with the
resources below to learn what else Session Replay enables within the PostHog platform. MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/session-replay/installation/_snippets/sr-next-steps.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/installation/_snippets/sr-next-steps.mdx) · code · 730 bytes

### sr-shared-helpers.tsx

import React from 'react' import { StepDefinition } from 'onboarding/steps' import
SRNextSteps from './sr-next-steps.mdx' Notable exports: `composeModifiers`, `removeSteps`,
`addNextSteps`, `addNextStepsStep`.

[`contents/docs/session-replay/installation/_snippets/sr-shared-helpers.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/installation/_snippets/sr-shared-helpers.tsx) · code · 907 bytes

### unity-installation.tsx

import React from 'react' import { createInstallation } from
'components/Docs/OnboardingContentWrapper' Notable exports: `UnityInstallation`.

[`contents/docs/session-replay/installation/_snippets/unity-installation.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/installation/_snippets/unity-installation.tsx) · code · 6403 bytes

### unity-wrapper.tsx

import React from 'react' import { UnityInstallation } from './unity-installation' import {
OnboardingContentWrapper } from 'components/Docs/OnboardingContentWrapper' import {
addNextStepsStep } from './sr-shared-helpers' import { WebsiteJSHtmlSnippet,
WebsiteJSInitSnippet } from 'product-analytics/installation/_snippets/js-web-snippets'
import { SessionRepl Notable exports: `SRUnityInstallationWrapper`.

[`contents/docs/session-replay/installation/_snippets/unity-wrapper.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/installation/_snippets/unity-wrapper.tsx) · code · 738 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
