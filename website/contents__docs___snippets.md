<!-- quirq-wiki-generated repo=website dir=contents/docs/_snippets -->

# website / contents/docs/_snippets

Source: [contents/docs/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capture-group-event-code.mdx

Markdown page “Call posthog.group_identify() to create a group before capturing events.”.
Call posthog.group() to create a group before capturing events. It sends a $groupidentify
event to create or update the group. It will also create the group type if it doesn't exist.
In the web SDK, it also associates all subsequent events in the session with the group.

[`contents/docs/_snippets/capture-group-event-code.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/capture-group-event-code.mdx) · code · 6014 bytes

### csp-allowances-callout.mdx

Markdown document `csp-allowances-callout.mdx`. If your site sets a Content-Security-Policy,
it needs to allow PostHog. This applies to the snippet and to package installs alike: the
SDK lazy-loads extra bundles (session replay, surveys) from PostHog's CDN, and sends events
to the ingestion host.

[`contents/docs/_snippets/csp-allowances-callout.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/csp-allowances-callout.mdx) · code · 1081 bytes

### data-sources.tsx

import React from 'react' import List from 'components/List' import useSourcePlatforms from
'hooks/useSourcePlatforms' import { getLogo } from 'constants/logos' import {
SELF_HOSTED_SOURCES } from 'constants/sources' Notable exports: `ManagedSources`,
`SelfHostedSources`, `AllSources`.

[`contents/docs/_snippets/data-sources.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/data-sources.tsx) · code · 996 bytes

### exposed-api-keys.mdx

Markdown document `exposed-api-keys.mdx`. It is ok for your project token (starts with phc_)
to be public. It is used to initialize PostHog, capture events, evaluate feature flags, and
more, but doesn't have access to your private data. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/_snippets/exposed-api-keys.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/exposed-api-keys.mdx) · code · 347 bytes

### groups-intro.mdx

Markdown document `groups-intro.mdx`. Groups aggregate events based on entities, such as
organizations or companies. They are especially useful for B2B customers and enable you to
deploy feature flags, analyze insights, and run experiments at a group-level, as opposed to
a user-level. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/groups-intro.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/groups-intro.mdx) · code · 1035 bytes

### groups-use-cases.mdx

Markdown document `groups-use-cases.mdx`. Building on the examples above, here are a few
things you can do with groups MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/_snippets/groups-use-cases.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/groups-use-cases.mdx) · code · 1939 bytes

### groups-vs-cohorts.mdx

Markdown document `groups-vs-cohorts.mdx`. Groups are often confused with
[cohorts](/docs/data/cohorts), but they each serve different purposes MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/groups-vs-cohorts.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/groups-vs-cohorts.mdx) · code · 622 bytes

### how-to-create-groups.mdx

Markdown document `how-to-create-groups.mdx`. Create groups before you associate events with
them. Call the group identify method in your chosen SDK to create a group. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/how-to-create-groups.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/how-to-create-groups.mdx) · code · 1129 bytes

### how-to-link-events-to-groups.mdx

Markdown page “❌ Not possible”. How you capture events with groups depends whether you're
using the JavaScript Web SDK or not. MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/_snippets/how-to-link-events-to-groups.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/how-to-link-events-to-groups.mdx) · code · 3176 bytes

### identify-backend-callout-python.mdx

Markdown document `identify-backend-callout-python.mdx`. Identifying users is required.
Backend events need a distinct_id to associate events with the correct user. In Python, you
can do this through a context. All event captures in the same context will be tagged
automatically with the correct distinct_id. Typically, you would set a fresh context and
identify at the top of each route.

[`contents/docs/_snippets/identify-backend-callout-python.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-backend-callout-python.mdx) · code · 1000 bytes

### identify-backend-callout.mdx

Markdown document `identify-backend-callout.mdx`. Identifying users is required. Backend
events need a distinct_id that matches the ID your frontend uses when calling
posthog.identify(). Without this, backend events are orphaned — they can't be linked to
frontend event captures, [session replays](/docs/session-replay), [LLM traces](/docs/ai-
engineering), or [error tracking](/docs/error-tracking).

[`contents/docs/_snippets/identify-backend-callout.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-backend-callout.mdx) · code · 465 bytes

### identify-cross-platform.mdx

Markdown document `identify-cross-platform.mdx`. We recommend you call identify [as soon as
you're able](#1-call-identify-as-soon-as-youre-able), typically when a user signs up or logs
in. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/identify-cross-platform.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-cross-platform.mdx) · code · 3985 bytes

### identify-frontend-callout.mdx

Markdown document `identify-frontend-callout.mdx`. Identifying users is required. Call
posthog.identify('your-user-id') after login to link events to a known user. This is what
connects frontend event captures, [session replays](/docs/session-replay), [LLM
traces](/docs/ai-engineering), and [error tracking](/docs/error-tracking) to the same person
— and lets backend events link back too.

[`contents/docs/_snippets/identify-frontend-callout.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-frontend-callout.mdx) · code · 1019 bytes

### identify-frontend-code.mdx

Markdown document `identify-frontend-code.mdx`. posthog.identify( 'distinct_id', // Replace
'distinct_id' with your user's unique identifier { email: 'max@hedgehogmail.com', name: 'Max
Hedgehog' } // optional: set additional person properties ) MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/_snippets/identify-frontend-code.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-frontend-code.mdx) · code · 1314 bytes

### identify-how-it-works.mdx

Markdown document `identify-how-it-works.mdx`. When a user starts browsing your website or
app, PostHog automatically assigns them an anonymous ID, which is stored locally. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/identify-how-it-works.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-how-it-works.mdx) · code · 1057 bytes

### identify-intro.mdx

Markdown document `identify-intro.mdx`. Linking events to specific users enables you to
build a full picture of how they're using your product across different sessions, devices,
and platforms. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/identify-intro.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-intro.mdx) · code · 1212 bytes

### identify-reset.mdx

Markdown document `identify-reset.mdx`. If a user logs out on your frontend, you should call
reset() to unlink any future events made on that device with that user. MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/identify-reset.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-reset.mdx) · code · 960 bytes

### identify-setting-user-properties.mdx

Markdown document `identify-setting-user-properties.mdx`. You'll notice that one of the
parameters in the identify method is a properties object. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/_snippets/identify-setting-user-properties.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-setting-user-properties.mdx) · code · 987 bytes

### identify-use-unique-ids.mdx

Markdown document `identify-use-unique-ids.mdx`. If two users have the same distinct ID,
their data is merged and they are considered one user in PostHog. Two common ways this can
happen are MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/identify-use-unique-ids.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-use-unique-ids.mdx) · code · 514 bytes

### identify-when-to-call.mdx

Markdown document `identify-when-to-call.mdx`. In your frontend, you should call identify as
soon as you're able to. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/_snippets/identify-when-to-call.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/identify-when-to-call.mdx) · code · 535 bytes

### optimal-queries.mdx

Markdown page “1. Use shorter time ranges”. When writing custom queries, the burden of
performance falls onto you. PostHog handles performance for queries we own (for example, in
product analytics insights and experiments, etc.), but because performance depends on how
queries are structured and written, we can't optimize them for you. Large data sets
particularly require extra careful attention to performance.

[`contents/docs/_snippets/optimal-queries.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/optimal-queries.mdx) · code · 9984 bytes

### path-cleaning.mdx

Markdown page “Why use path cleaning?”. Path cleaning rules let you normalize dynamic URLs
into consistent patterns, reducing the cardinality of your path data. This makes your web
analytics paths, entry paths, exit paths, outbound clicks, and path breakdowns more readable
and actionable. MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/_snippets/path-cleaning.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/path-cleaning.mdx) · code · 9714 bytes

### posthog-billable-usage-template.mdx

Markdown document `posthog-billable-usage-template.mdx`. Want to know exactly what's driving
your bill? Create a dashboard with the [PostHog billable usage template](/templates/posthog-
billable-usage) to break down and analyze your usage across different events, SDK libraries,
and products. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/posthog-billable-usage-template.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/posthog-billable-usage-template.mdx) · code · 700 bytes

### python-sdk-version-note.mdx

Markdown document `python-sdk-version-note.mdx`. These docs cover version 7.x of the PostHog
Python SDK, which requires Python 3.10 or higher. Python 3.9 is no longer supported on 7.x.x
and higher — pin to the 6.x line with pip install 'posthog<7', where 6.9.3 is the final
release. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/python-sdk-version-note.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/python-sdk-version-note.mdx) · code · 1121 bytes

### setting-group-properties.mdx

Markdown document `setting-group-properties.mdx`. In the same way that every person can have
[properties](/docs/getting-started/person-properties) associated with them, every group can
have properties associated with it. MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/_snippets/setting-group-properties.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/setting-group-properties.mdx) · code · 4731 bytes

### tracing-headers.mdx

Markdown document `tracing-headers.mdx`. If your app calls your own backend, tracing_headers
adds X-POSTHOG-DISTINCT-ID and X-POSTHOG-SESSION-ID to matching fetch and XMLHttpRequest
requests. This lets server-side SDKs link backend events, errors, and LLM traces back to
frontend sessions and replays. Use hostnames only, without protocols or paths. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/_snippets/tracing-headers.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/_snippets/tracing-headers.mdx) · code · 1030 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
