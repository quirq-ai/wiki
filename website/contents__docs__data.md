<!-- quirq-wiki-generated repo=website dir=contents/docs/data -->

# website / contents/docs/data

Source: [contents/docs/data](https://github.com/quirq-ai/website/tree/main/contents/docs/data) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### actions.mdx

Markdown page “Actions”. Actions are a way of combining several related events into one,
which you can then analyze in [insights](/docs/product-analytics/insights) and
[dashboards](/docs/product-analytics/dashboards) as if it were a single event. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/data/actions.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/actions.mdx) · code · 7432 bytes

### annotations.mdx

Markdown page “Annotations”.

[`contents/docs/data/annotations.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/annotations.mdx) · code · 5133 bytes

### anonymous-vs-identified-events.mdx

Markdown page “Anonymous vs identified events”. import Tab from "components/Tab" MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/data/anonymous-vs-identified-events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/anonymous-vs-identified-events.mdx) · code · 12431 bytes

### channel-type.mdx

Markdown page “Channel type”. import { ProductScreenshot } from
"components/ProductScreenshot" MDX page (Markdown with JSX components), typically rendered
by the docs site.

[`contents/docs/data/channel-type.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/channel-type.mdx) · code · 14807 bytes

### cohorts.mdx

Markdown page “Cohorts”.

[`contents/docs/data/cohorts.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/cohorts.mdx) · code · 18218 bytes

### comments.mdx

Markdown page “Replay comments”. import { ProductScreenshot } from
"components/ProductScreenshot" MDX page (Markdown with JSX components), typically rendered
by the docs site.

[`contents/docs/data/comments.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/comments.mdx) · code · 3729 bytes

### embedded-analytics-projects.mdx

Markdown page “Project setup for embedded analytics”. import { CalloutBox } from
'components/Docs/CalloutBox' MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/data/embedded-analytics-projects.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/embedded-analytics-projects.mdx) · code · 7838 bytes

### event-filtering.mdx

Markdown page “Event ingestion filtering”. Event ingestion filtering lets you drop events at
ingestion time based on event metadata. Filters are evaluated early in the [ingestion
pipeline](/docs/how-posthog-works/ingestion-pipeline), before transformations run, making it
the most efficient way to exclude unwanted events from your data. MDX page (Markdown with
JSX components), typically rendered by the docs site.

[`contents/docs/data/event-filtering.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/event-filtering.mdx) · code · 4770 bytes

### events-retention.mdx

Markdown page “Events data retention”. PostHog keeps your events for a period that your plan
sets. This page tells you what that period is and what it does not do. MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/data/events-retention.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/events-retention.mdx) · code · 1825 bytes

### events.mdx

Markdown page “Events”. An event is the core unit of data in PostHog. It represents an
interaction a user has with your app or website. Examples include button clicks, pageviews,
query completions, and signups. MDX page (Markdown with JSX components), typically rendered
by the docs site.

[`contents/docs/data/events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/events.mdx) · code · 11907 bytes

### index.mdx

Markdown page “Data management”. export const dataManagementLight = "https://res.cloudinary.

[`contents/docs/data/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/index.mdx) · code · 4482 bytes

### ingestion-warnings.mdx

Markdown page “Ingestion warnings”. export const warningsLight = "https://res.cloudinary.com
/dmukukwp6/image/upload/posthog.com/contents/images/features/data-management/warnings-light-
mode.png"; export const warningsDark = "https://res.cloudinary.com/dmukukwp6/image/upload/po
sthog.com/contents/images/features/data-management/warnings-dark-mode.png" MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/data/ingestion-warnings.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/ingestion-warnings.mdx) · code · 15793 bytes

### persons.mdx

Markdown page “People”. import DistinctIdReuseWarning from "../privacy/_snippets/distinct-
id-reuse-warning.mdx" MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/data/persons.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/persons.mdx) · code · 8739 bytes

### property-filters.mdx

Markdown page “Property filter operators”. Property filters let you narrow down events,
persons, groups, and feature flag targeting using operators on property values. These
operators are shared across PostHog features including [Feature Flags](/docs/feature-flags),
[Surveys](/docs/surveys), [Cohorts](/docs/data/cohorts), and [Insights](/docs/product-
analytics). MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/data/property-filters.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/property-filters.mdx) · code · 8363 bytes

### query-log.mdx

Markdown page “Query log”. The query_log table in PostHog's [data warehouse](/docs/data-
warehouse/sources/posthog) provides access to query execution metadata and performance
metrics. This table is built on top of the ClickHouse system.query_log table and offers a
simplified, team-filtered interface for analyzing query performance. It filters for
completed HogQL queries for your team.

[`contents/docs/data/query-log.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/query-log.mdx) · code · 10398 bytes

### realtime-cohorts.mdx

Markdown page “Realtime cohorts”. Realtime cohorts are rolling out gradually and aren't
switched on in most projects yet. To get access, [join the
waitlist](https://app.posthog.com/settings/user-feature-previews#realtime-cohorts) in your
feature previews. Behavior and limits on this page can change before general availability.
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/data/realtime-cohorts.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/realtime-cohorts.mdx) · code · 8225 bytes

### sessions.mdx

Markdown page “Sessions”.

[`contents/docs/data/sessions.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/sessions.mdx) · code · 14828 bytes

### timestamps.md

Markdown page “Timestamps”. PostHog automatically computes timestamps for captured events,
but you can also set them manually. For example.

[`contents/docs/data/timestamps.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/timestamps.md) · code · 2573 bytes

### utm-segmentation.mdx

Markdown page “UTM segmentation”.

[`contents/docs/data/utm-segmentation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data/utm-segmentation.mdx) · code · 7160 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
