<!-- quirq-wiki-generated repo=website dir=contents/docs/feature-flags -->

# website / contents/docs/feature-flags

Source: [contents/docs/feature-flags](https://github.com/quirq-ai/website/tree/main/contents/docs/feature-flags) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### adding-feature-flag-code.mdx

Markdown page “Adding feature flag code”. Once you've created your feature flag in PostHog,
the next step is to add your code MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/feature-flags/adding-feature-flag-code.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/adding-feature-flag-code.mdx) · code · 3964 bytes

### best-practices.mdx

Markdown page “Best practices for production-ready flags”. import { CalloutBox } from
'components/Docs/CalloutBox' MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/feature-flags/best-practices.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/best-practices.mdx) · code · 20617 bytes

### bootstrapping.mdx

Markdown page “Bootstrap Feature Flags”. Bootstrapping Feature Flags makes precomputed flag
values available as soon as a client-side PostHog SDK initializes. This prevents flicker and
enables startup logic, such as redirects, to use flags before the SDK finishes its first
/flags request. MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/feature-flags/bootstrapping.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/bootstrapping.mdx) · code · 7022 bytes

### canary-release.md

Markdown page “How to do a canary release with feature flags”. Few things are worse than
shipping a new feature, having it unexpectedly break, and then scrambling to fix it. To
mitigate problems like this, teams often roll out changes to a subset of users before
releasing them to everyone. This is known as a canary release or deployment.

[`contents/docs/feature-flags/canary-release.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/canary-release.md) · code · 6754 bytes

### changelog.mdx

Markdown page “Feature Flags changelog”. import { ProductChangelog } from
'components/Docs/ProductChangelog' MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/feature-flags/changelog.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/changelog.mdx) · code · 176 bytes

### cleaning-up-stale-flags.mdx

Markdown page “Cleaning up stale feature flags”. Feature flags accumulate, and you're billed
based on /flags requests, not the number of flags in your project. However, a /flags request
is billable when it evaluates at least one active, billable feature flag, even if your code
no longer explicitly checks that flag. The web SDK evaluates active flags by default on
load, and server-side calls to getAllFlags() include them too.

[`contents/docs/feature-flags/cleaning-up-stale-flags.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/cleaning-up-stale-flags.mdx) · code · 11316 bytes

### creating-feature-flags.mdx

Markdown page “Creating Feature Flags”.

[`contents/docs/feature-flags/creating-feature-flags.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/creating-feature-flags.mdx) · code · 29397 bytes

### cutting-costs.mdx

Markdown page “Cutting feature flag costs”. import { CalloutBox } from
'components/Docs/CalloutBox' import Pricing from
'components/Pricing/PricingCalculator/SingleProduct' MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/feature-flags/cutting-costs.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/cutting-costs.mdx) · code · 13724 bytes

### dependencies.mdx

Markdown page “Feature flag dependencies”. Feature flag dependencies allow you to create a
feature flag (called the dependent flag) that's dependent on the state of another flag
(called the base flag). This enables sophisticated feature rollout strategies where one
flag's activation depends on another flag's value. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/feature-flags/dependencies.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/dependencies.mdx) · code · 4624 bytes

### device-bucketing.mdx

Markdown page “Device bucketing”. import { CalloutBox } from "components/Docs/CalloutBox"
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/device-bucketing.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/device-bucketing.mdx) · code · 7081 bytes

### early-access-feature-management.mdx

Markdown page “Early access feature management”.

[`contents/docs/feature-flags/early-access-feature-management.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/early-access-feature-management.mdx) · code · 13747 bytes

### evaluation-contexts.mdx

Markdown page “Evaluation contexts”. import { ProductScreenshot } from
'components/ProductScreenshot' MDX page (Markdown with JSX components), typically rendered
by the docs site.

[`contents/docs/feature-flags/evaluation-contexts.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/evaluation-contexts.mdx) · code · 13811 bytes

### index.mdx

Markdown page “Feature flags”. import { IconLaptop, IconLlmPromptEvaluation, IconBrackets,
IconBolt, IconPeople, IconGear, IconCode, IconToggle, IconNotebook, IconPullRequest,
IconCheckCircle } from '@posthog/icons' import OSButton from 'components/OSButton' import
CustomSelfDrivingLoop from 'components/CustomSelfDrivingLoop' MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/feature-flags/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/index.mdx) · code · 7743 bytes

### manage-flags-ai.mdx

Markdown page “Manage Feature Flags with PostHog AI”. [PostHog AI](/docs/posthog-ai) creates
and manages [Feature Flags](/docs/feature-flags) using natural language. Describe the flag
you want – including rollout percentage, targeting rules, and variants – and PostHog AI sets
it up for you. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/manage-flags-ai.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/manage-flags-ai.mdx) · code · 2905 bytes

### multi-project-feature-flags.mdx

Markdown page “Multi-project feature flags”.

[`contents/docs/feature-flags/multi-project-feature-flags.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/multi-project-feature-flags.mdx) · code · 2449 bytes

### phased-rollout.md

Markdown page “How to do a phased rollout”. Phased rollouts, also known as phased releases,
are a way to roll out new features safely by [testing a feature works in
production](/product-engineers/testing-in-production) with a small group before
incrementally moving to progressively bigger (and more important) groups.

[`contents/docs/feature-flags/phased-rollout.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/phased-rollout.md) · code · 4632 bytes

### project-wide-settings.mdx

Markdown page “Project-wide settings”. You can configure project-wide feature flag settings
to establish defaults and maintain safety measures for your team. These settings apply to
all feature flags in your project and help maintain consistency across your flag management
practices. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/project-wide-settings.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/project-wide-settings.mdx) · code · 4830 bytes

### property-overrides.mdx

Markdown page “Property overrides for flag evaluation”. Property overrides let you provide
person or group properties directly to PostHog for feature flag evaluation, instead of
relying on properties stored on the server.

[`contents/docs/feature-flags/property-overrides.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/property-overrides.mdx) · code · 23699 bytes

### remote-config.mdx

Markdown page “Remote config”. Boolean and multivariate flags are helpful for dynamic values
that differ from user to user, but sometimes you need a simple way to pass configuration
related to your application without having to make code changes or redeploy your app. MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/remote-config.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/remote-config.mdx) · code · 3874 bytes

### scheduled-flag-changes.mdx

Markdown page “Scheduled flag changes”.

[`contents/docs/feature-flags/scheduled-flag-changes.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/scheduled-flag-changes.mdx) · code · 8351 bytes

### stable-identity-for-flags.mdx

Markdown page “Keeping flag evaluations stable”. import { CalloutBox } from
'components/Docs/CalloutBox' MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/feature-flags/stable-identity-for-flags.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/stable-identity-for-flags.mdx) · code · 9867 bytes

### start-here.mdx

Markdown page “Getting started with feature flags”. import FeatureFlagsInstallationPlatforms
from './installation/_snippets/installation-platforms' import { QuestLog, QuestLogItem }
from 'components/Docs/QuestLog' import { IconFlask } from '@posthog/icons' import OSButton
from 'components/OSButton' MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/feature-flags/start-here.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/start-here.mdx) · code · 5222 bytes

### targeting-groups.md

Markdown page “Targeting feature flags on groups, pages, machines, and more”. To decide what
value to return, PostHog’s feature flag service uses a flag key and an entity. Which entity
to use it up to you, and these don't necessarily need to be _users_ – you can also target
organizations, pages, machines, and more.

[`contents/docs/feature-flags/targeting-groups.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/targeting-groups.md) · code · 7147 bytes

### testing.mdx

Markdown page “Testing your feature flag”. import {ProductVideo} from
'components/ProductVideo' export const OverrideFeatureFlagLight = "https://res.cloudinary.co
m/dmukukwp6/video/upload/posthog.com/contents/images/features/feature-flags/override-
feature-flag-light-mode.mp4" export const OverrideFeatureFlagDark = "https://res.cloudinary.

[`contents/docs/feature-flags/testing.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/testing.mdx) · code · 5097 bytes

### troubleshooting.mdx

Markdown page “Feature Flags troubleshooting”.

[`contents/docs/feature-flags/troubleshooting.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/troubleshooting.mdx) · code · 14823 bytes

### tutorials.mdx

Markdown page “Tutorials and guides”. Got a question which isn't answered below? Head to
[the community forum](/questions) to let us know! MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/feature-flags/tutorials.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/tutorials.mdx) · code · 5376 bytes

### user-and-group-targeting.mdx

Markdown page “User and group targeting”. import { CalloutBox } from
'components/Docs/CalloutBox' MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/feature-flags/user-and-group-targeting.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/user-and-group-targeting.mdx) · code · 10936 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
