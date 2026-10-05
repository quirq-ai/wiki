<!-- quirq-wiki-generated repo=website dir=contents/docs/experiments/installation/_snippets -->

# website / contents/docs/experiments/installation/_snippets

Source: [contents/docs/experiments/installation/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/experiments/installation/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### experiments-installation-wrapper.tsx

Web SDK installations Notable exports: `ExperimentsJSWebInstallationWrapper`,
`ExperimentsNextJSInstallationWrapper`, `ExperimentsReactInstallationWrapper`,
`ExperimentsReactRouterInstallationWrapper`, `ExperimentsVueInstallationWrapper`,
`ExperimentsAngularInstallationWrapper`, `ExperimentsAstroInstallationWrapper`,
`ExperimentsSvelteInstallationWrapper`, and 17 more.

[`contents/docs/experiments/installation/_snippets/experiments-installation-wrapper.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/experiments/installation/_snippets/experiments-installation-wrapper.tsx) · code · 6574 bytes

### experiments-next-steps.mdx

Markdown document `experiments-next-steps.mdx`. Now that you're running experiments,
continue with the resources below to learn what else Experiments enables within the PostHog
platform. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/experiments/installation/_snippets/experiments-next-steps.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/experiments/installation/_snippets/experiments-next-steps.mdx) · code · 733 bytes

### experiments-react-router-installation-wrapper.tsx

import React from 'react' import { ReactRouterInstallation, ExperimentImplementationSnippet
} from 'onboarding/experiments' import { OnboardingContentWrapper } from
'components/Docs/OnboardingContentWrapper' import { addNextStepsStep } from './shared-
helpers' Notable exports: `ExperimentsReactRouterInstallationWrapper`.

[`contents/docs/experiments/installation/_snippets/experiments-react-router-installation-wrapper.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/experiments/installation/_snippets/experiments-react-router-installation-wrapper.tsx) · code · 586 bytes

### installation-platforms.tsx

import React from 'react' import List from 'components/List' import usePlatformList from
'hooks/docs/usePlatformList' Provides a default export as the module's public entry.

[`contents/docs/experiments/installation/_snippets/installation-platforms.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/experiments/installation/_snippets/installation-platforms.tsx) · code · 635 bytes

### shared-helpers.tsx

import React from 'react' import { StepDefinition } from 'onboarding/steps' import
ExperimentsNextSteps from './experiments-next-steps.mdx' Notable exports:
`addNextStepsStep`.

[`contents/docs/experiments/installation/_snippets/shared-helpers.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/experiments/installation/_snippets/shared-helpers.tsx) · code · 464 bytes

### step-add-primary-metric.mdx

Markdown document `step-add-primary-metric.mdx`. Scroll down to the Primary metrics section
and click + Add primary metric. MDX page (Markdown with JSX components), typically rendered
by the docs site.

[`contents/docs/experiments/installation/_snippets/step-add-primary-metric.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/experiments/installation/_snippets/step-add-primary-metric.mdx) · code · 801 bytes

### step-create-experiment.mdx

Markdown document `step-create-experiment.mdx`. Go to the [Experiments
tab](https://app.posthog.com/experiments) in the PostHog app and click on the New experiment
button in the top right. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/experiments/installation/_snippets/step-create-experiment.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/experiments/installation/_snippets/step-create-experiment.mdx) · code · 765 bytes

### step-evaluate-experiment-results.mdx

Markdown document `step-evaluate-experiment-results.mdx`. As you capture more cta clicked
events, more exposures will populate the primary metrics in your experiment. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/experiments/installation/_snippets/step-evaluate-experiment-results.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/experiments/installation/_snippets/step-evaluate-experiment-results.mdx) · code · 599 bytes

### step-validate-experiment-events.mdx

Markdown document `step-validate-experiment-events.mdx`. Before proceeding, let's make sure
events are being captured and sent to PostHog. You should see cta clicked events appear in
the Activity feed. MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/experiments/installation/_snippets/step-validate-experiment-events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/experiments/installation/_snippets/step-validate-experiment-events.mdx) · code · 313 bytes

### step-validate-feature-flags.mdx

Markdown document `step-validate-feature-flags.mdx`. Make sure exposures and feature flag
calls are being sent to PostHog. You should see $feature_flag_called events appear in the
Activity feed. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/experiments/installation/_snippets/step-validate-feature-flags.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/experiments/installation/_snippets/step-validate-feature-flags.mdx) · code · 310 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
