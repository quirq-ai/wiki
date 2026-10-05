<!-- quirq-wiki-generated repo=website dir=contents/docs/mcp-analytics -->

# website / contents/docs/mcp-analytics

Source: [contents/docs/mcp-analytics](https://github.com/quirq-ai/website/tree/main/contents/docs/mcp-analytics) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conversation-id.mdx

Markdown page “Conversation IDs”. import CalloutBox from 'components/Docs/CalloutBox' MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/mcp-analytics/conversation-id.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/conversation-id.mdx) · code · 4903 bytes

### custom-events.mdx

Markdown page “Custom events and metadata”. Use an event properties callback
(eventProperties in TypeScript, event_properties in Python and Ruby, WithProperties in Go)
to add metadata to captured events. Use analytics.capture() for events that are not MCP
requests. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/mcp-analytics/custom-events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/custom-events.mdx) · code · 4942 bytes

### events.mdx

Markdown page “Event and property reference”. import CalloutBox from
"components/Docs/CalloutBox" MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/mcp-analytics/events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/events.mdx) · code · 20851 bytes

### identifying-users.mdx

Markdown page “Identifying users”. By default, the SDK attributes MCP events to a generated
session ID (ses_…). On 2025-11-25, this normally follows the protocol session. On
2026-07-28, [conversation IDs](/docs/mcp-analytics/conversation-id) are on by default. Calls
share a session only when the agent echoes the handle. The SDK does not know the person
behind the session.

[`contents/docs/mcp-analytics/identifying-users.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/identifying-users.mdx) · code · 6848 bytes

### index.mdx

Markdown page “MCP Analytics”. import { IconPlug, IconBolt, IconNotebook, IconPullRequest,
IconCheckCircle } from '@posthog/icons' import OSButton from 'components/OSButton' import
CustomSelfDrivingLoop from 'components/CustomSelfDrivingLoop' import { SurfaceCards,
SurfaceCard } from 'components/Docs/SurfaceCards' MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/mcp-analytics/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/index.mdx) · code · 5080 bytes

### intent.mdx

Markdown page “Capturing agent intent”. import CalloutBox from 'components/Docs/CalloutBox'
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/mcp-analytics/intent.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/intent.mdx) · code · 7126 bytes

### missing-capability.mdx

Markdown page “Tracking missing capabilities”. import CalloutBox from
'components/Docs/CalloutBox' MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/mcp-analytics/missing-capability.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/missing-capability.mdx) · code · 3596 bytes

### privacy.mdx

Markdown page “Privacy and redaction”. import CalloutBox from 'components/Docs/CalloutBox'
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/mcp-analytics/privacy.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/privacy.mdx) · code · 9790 bytes

### queries.mdx

Markdown page “Sample queries”. Use these HogQL queries after you install the SDK and
capture $mcp_tool_call events. See the [event reference](/docs/mcp-analytics/events) for
property definitions. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/mcp-analytics/queries.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/queries.mdx) · code · 4072 bytes

### sdk-v2.mdx

Markdown page “MCP SDK v2”. import CalloutBox from 'components/Docs/CalloutBox' MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/mcp-analytics/sdk-v2.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/sdk-v2.mdx) · code · 4316 bytes

### start-here.mdx

Markdown page “Getting started with MCP Analytics”. import { QuestLog, QuestLogItem } from
'components/Docs/QuestLog' import { IconGraph, IconWarning, IconAIText, IconWrench, IconPlug
} from '@posthog/icons' import OSButton from 'components/OSButton' import CalloutBox from
'components/Docs/CalloutBox' import WizardCommand from 'components/WizardCommand' MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/mcp-analytics/start-here.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/mcp-analytics/start-here.mdx) · code · 12521 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
