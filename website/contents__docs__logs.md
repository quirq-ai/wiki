<!-- quirq-wiki-generated repo=website dir=contents/docs/logs -->

# website / contents/docs/logs

Source: [contents/docs/logs](https://github.com/quirq-ai/website/tree/main/contents/docs/logs) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### alerts.mdx

Markdown page “Set up log alerts”. Log alerts notify you when the volume of logs matching
specific filters crosses a threshold. Use them to catch spikes in errors, drops in expected
traffic, or unusual patterns across your services. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/logs/alerts.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/alerts.mdx) · code · 9104 bytes

### basics.mdx

Markdown page “Why you need logs”. Logs are records of what happens inside your application
at runtime. It includes the requests it handled, the errors it hit, and the decisions it
made. Most engineers first encounter them as console.log statements scattered around code to
debug a problem, then deleted before pushing. But production logging (structured,
centralized, queryable logging) is a different thing entirely.

[`contents/docs/logs/basics.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/basics.mdx) · code · 6940 bytes

### best-practices.mdx

Markdown page “Logging best practices”. import { CalloutBox } from
'components/Docs/CalloutBox' import Tab from 'components/Tab' MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/logs/best-practices.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/best-practices.mdx) · code · 25221 bytes

### changelog.mdx

Markdown page “Logs changelog”. import { ProductChangelog } from
'components/Docs/ProductChangelog' MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/logs/changelog.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/changelog.mdx) · code · 158 bytes

### explain-logs-ai.mdx

Markdown page “Explain a log with PostHog AI”. When a log line doesn't tell you enough on
its own, open it and switch to the Explore with AI tab. [PostHog AI](/docs/posthog-ai) reads
that one record and writes up what it means, what probably caused it, and what to do about
it – useful at 2am, or when the log came from a service you don't own. MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/logs/explain-logs-ai.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/explain-logs-ai.mdx) · code · 2839 bytes

### index.mdx

Markdown page “Logs”. import { IconLaptop, IconMagic, IconCode, IconBrackets, IconServer,
IconFilter, IconRewindPlay, IconBolt, IconNotebook, IconPerson, IconCheckCircle, IconWarning
} from '@posthog/icons' import OSButton from 'components/OSButton' import
CustomSelfDrivingLoop from 'components/CustomSelfDrivingLoop' MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/logs/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/index.mdx) · code · 7798 bytes

### link-person.mdx

Markdown page “Link logs to a person”. PostHog can surface every log emitted on behalf of a
specific user on that user's profile in the Logs tab. The link is attribute-based: each log
carries a person identifier as an OpenTelemetry log attribute, and PostHog matches it to a
person's distinct_id. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/logs/link-person.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/link-person.mdx) · code · 6030 bytes

### link-session-replay.mdx

Markdown page “Link session replay”. Connecting your backend logs to frontend session
replays provides complete visibility into the user journey, helping you understand the full
context around issues in your application. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/logs/link-session-replay.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/link-session-replay.mdx) · code · 5875 bytes

### metrics.mdx

Markdown page “Log-based metrics”. Note: Log-based metrics write into [application
metrics](/docs/metrics), which is in alpha. Details may change before general availability.
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/logs/metrics.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/metrics.mdx) · code · 7394 bytes

### patterns.mdx

Markdown page “Log patterns”. Log patterns group similar log lines into templates, so you
read the shape of your log traffic instead of scrolling through thousands of individual
lines. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/logs/patterns.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/patterns.mdx) · code · 12456 bytes

### pii-scrubbing.mdx

Markdown page “PII scrubbing”. PostHog can scrub common sensitive patterns out of your Logs
at ingestion, before they're written to storage. This is an opt-in, best-effort safety net –
the most reliable way to keep PII out of your Logs is to not send it from the client in the
first place. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/logs/pii-scrubbing.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/pii-scrubbing.mdx) · code · 3907 bytes

### pricing.mdx

Markdown page “Logs pricing”. Logs comes with a generous free tier and transparent, usage-
based pricing. Our large free tier means more than 90% of companies *use PostHog for free*.
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/logs/pricing.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/pricing.mdx) · code · 3306 bytes

### search.mdx

Markdown page “Search logs”. There are two ways to filter logs on the [logs
page](https://app.posthog.com/logs): the facet rail on the left sidebar and the filter bar
at the top. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/logs/search.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/search.mdx) · code · 7682 bytes

### start-here.mdx

Markdown page “Getting started with Logs”. import { QuestLog, QuestLogItem } from
"components/Docs/QuestLog"; import { IconCode, IconSearch, IconSettings, IconRewindPlay,
IconWarning, IconGraph, } from "@posthog/icons"; import LogsInstallationPlatforms from
"./installation/_snippets/installation-platforms" MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/logs/start-here.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/start-here.mdx) · code · 8708 bytes

### troubleshooting.mdx

Markdown page “Logs troubleshooting”. This page covers troubleshooting for Logs. For setup,
see the [installation guide](/docs/logs/installation). MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/logs/troubleshooting.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/logs/troubleshooting.mdx) · code · 5476 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
