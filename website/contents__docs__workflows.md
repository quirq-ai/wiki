<!-- quirq-wiki-generated repo=website dir=contents/docs/workflows -->

# website / contents/docs/workflows

Source: [contents/docs/workflows](https://github.com/quirq-ai/website/tree/main/contents/docs/workflows) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ai-tasks.mdx

Markdown page “Run AI tasks from a workflow”. The Create AI task step starts an AI agent
from a [workflow](/docs/workflows). The agent runs in the background with the tools you give
it: a GitHub repository, connectors, skills, and your PostHog project. The workflow waits
for the agent to finish, then continues with its result. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/workflows/ai-tasks.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/ai-tasks.mdx) · code · 7867 bytes

### best-practices.mdx

Markdown page “Workflows best practices”. Use a single well-defined trigger per workflow
(e.g. “user sign-up”, “purchase completed”, or a webhook), so the logic is clear. PostHog
defines that every workflow starts with a trigger and end with an exit. MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/workflows/best-practices.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/best-practices.mdx) · code · 7228 bytes

### broadcasts.mdx

Markdown page “Send a broadcast”. A broadcast sends one email to a group of people, once or
on a schedule. Use it for one-off sends like announcements, or recurring sends like a weekly
newsletter, when you don't need a multi-step [workflow](/docs/workflows/workflow-builder).
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/workflows/broadcasts.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/broadcasts.mdx) · code · 3939 bytes

### changelog.mdx

Markdown page “Workflows changelog”. import { ProductChangelog } from
'components/Docs/ProductChangelog' MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/workflows/changelog.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/changelog.mdx) · code · 168 bytes

### configure-channels.mdx

Markdown page “Configure a workflows channel”. import Tab from "components/Tab" MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/workflows/configure-channels.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/configure-channels.mdx) · code · 9593 bytes

### create-emails-ai.mdx

Markdown page “Create emails with PostHog AI”. [PostHog AI](/docs/posthog-ai) creates email
templates for your [Workflows](/docs/workflows) using natural language. Describe the email
you want to send – including the audience, tone, and goal – and PostHog AI generates the
content and layout. MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/workflows/create-emails-ai.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/create-emails-ai.mdx) · code · 4856 bytes

### editing-live-workflows.mdx

Markdown page “Editing a live workflow”. You can edit a workflow while it's enabled and
people are moving through it. PostHog uses a follow-live model: every step of every run
reads the current published configuration, so your edits reach people who are already mid-
workflow, not just people who enter afterwards. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/workflows/editing-live-workflows.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/editing-live-workflows.mdx) · code · 9456 bytes

### email-drip-campaign.mdx

Markdown page “Set up an email drip campaign”. In this guide we'll walk through creating a
simple drip campaign. After following this guide, you will: - Send a welcome email when a
user signs up - Follow up 1 day later if they haven't completed onboarding MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/workflows/email-drip-campaign.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/email-drip-campaign.mdx) · code · 8468 bytes

### engagement-events.mdx

Markdown page “Workflow events”. PostHog Workflows captures two types of events as standard
PostHog events: email engagement events and conversion events. These are in addition to the
per-step workflow metrics that are always recorded. You can use these events to build
insights, funnels, retention reports, and dashboards from workflow data the same way you
would for any other product event.

[`contents/docs/workflows/engagement-events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/engagement-events.mdx) · code · 13785 bytes

### import-customerio-optouts.mdx

Markdown page “Import opt-out lists from Customer.io”. In this guide we'll walk through
importing your opt-out lists from Customer.io into PostHog and keeping them in sync. MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/workflows/import-customerio-optouts.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/import-customerio-optouts.mdx) · code · 6173 bytes

### index.mdx

Markdown page “Workflows”. import { IconLaptop, IconMagic, IconBrackets, IconMegaphone,
IconPalette, IconShieldLock } from '@posthog/icons' import OSButton from
'components/OSButton' MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/workflows/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/index.mdx) · code · 4858 bytes

### installation.mdx

Markdown page “Install PostHog SDKs for Workflows”. import { WorkflowsInstallationPlatforms,
WorkflowsInstallationFrameworks } from './_snippets/workflows-installation-platforms' import
WizardCommand from 'components/WizardCommand' MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/workflows/installation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/installation.mdx) · code · 1823 bytes

### launch-workflow.mdx

Markdown page “Launch your first workflow”. import Tab from "components/Tab" MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/workflows/launch-workflow.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/launch-workflow.mdx) · code · 11213 bytes

### library.mdx

Markdown page “Content library and message templates”. import CalloutBox from
"components/Docs/CalloutBox" MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/workflows/library.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/library.mdx) · code · 8935 bytes

### opt-outs.mdx

Markdown page “Opt-outs and suppression”. Before a workflow sends anything, PostHog checks
two lists: the recipient's opt-out preferences and the project's suppression list. Both live
under Workflows in [PostHog](https://app.posthog.com), and neither is something a workflow
can override. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/workflows/opt-outs.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/opt-outs.mdx) · code · 3915 bytes

### sending-reputation.mdx

Markdown page “Sending reputation and allowance”. Every project holds a sending tier from 0
to 7. The tier caps how many emails your workflows send per hour and per day, and how large
one batch audience can be. A new project starts at tier 0 and moves up one tier at a time as
it sends with low bounce and spam complaint rates. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/workflows/sending-reputation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/sending-reputation.mdx) · code · 9618 bytes

### start-here.mdx

Markdown page “Getting started with workflows”. import { QuestLog, QuestLogItem } from
"components/Docs/QuestLog"; import { IconGraph, IconRewindPlay, IconToggle } from
"@posthog/icons"; import ChannelPlatforms from "./_snippets/channel-platforms"; import
OSButton from "components/OSButton" MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/workflows/start-here.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/start-here.mdx) · code · 5016 bytes

### troubleshooting.mdx

Markdown page “Workflows troubleshooting”. This page covers troubleshooting for Workflows.
For setup, see the [installation guide](/docs/workflows/configure-channels). MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/workflows/troubleshooting.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/troubleshooting.mdx) · code · 5114 bytes

### workflow-builder.mdx

Markdown page “Workflow builder”. Workflows are a collection of steps that automate a
process or deliver messages to your users based on your configured logic. In PostHog, you
can create a workflow using our no-code workflow builder. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/workflows/workflow-builder.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/workflows/workflow-builder.mdx) · code · 24199 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
