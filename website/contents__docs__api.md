<!-- quirq-wiki-generated repo=website dir=contents/docs/api -->

# website / contents/docs/api

Source: [contents/docs/api](https://github.com/quirq-ai/website/tree/main/contents/docs/api) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capture.mdx

Markdown page “Capture and batch API endpoints”. The /i/v0/e and /batch endpoints are the
main way to send events to PostHog. Beyond user behavior, they are also used to identify
users, update person or group properties, migrate from other platforms, and more. [Our
SDKs](/docs/libraries) handle the different event types for you, but with the API, you need
to send the right type of event (listed below) to trigger the functionality you want.

[`contents/docs/api/capture.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/api/capture.mdx) · code · 16354 bytes

### flags.mdx

Markdown page “Flags – the feature flags evaluation API endpoint”. The flags endpoint is
used to evaluate feature flags for a given distinct_id. This means it is the main endpoint
not only for feature flags, but also experimentation, early access features, and survey
display conditions. MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/api/flags.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/api/flags.mdx) · code · 903 bytes

### index.mdx

Markdown page “API overview”. PostHog has a powerful API that enables you to capture,
evaluate, create, update, and delete nearly all of your information in PostHog. You can use
it to [pull information into your app](/tutorials/embedded-analytics), update metadata
programmatically, [capture events from any language that can send HTTP
requests](/tutorials/api-capture-events), and more.

[`contents/docs/api/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/api/index.mdx) · code · 9918 bytes

### oauth.mdx

Markdown page “OAuth integration”. PostHog supports [OAuth
2.0](https://datatracker.ietf.org/doc/html/rfc6749) for third-party applications to access
PostHog on behalf of users. This page explains how to integrate with PostHog's OAuth system.
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/api/oauth.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/api/oauth.mdx) · code · 10496 bytes

### personal-api-keys.mdx

Markdown page “Personal API keys”. Personal API keys authenticate requests to PostHog's
private GET, POST, PATCH, and DELETE endpoints. They're the right choice when you're using
PostHog from your own scripts, automations, or any integration tied to your own account. MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/api/personal-api-keys.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/api/personal-api-keys.mdx) · code · 2652 bytes

### queries.mdx

Markdown page “API queries”. import { CalloutBox } from 'components/Docs/CalloutBox' MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/api/queries.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/api/queries.mdx) · code · 18747 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
