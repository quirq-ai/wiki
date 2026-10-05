<!-- quirq-wiki-generated repo=website dir=contents/docs/error-tracking/surfaces -->

# website / contents/docs/error-tracking/surfaces

Source: [contents/docs/error-tracking/surfaces](https://github.com/quirq-ai/website/tree/main/contents/docs/error-tracking/surfaces) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### cli.mdx

Markdown page “Use Error Tracking from PostHog CLI”. The [PostHog CLI](/docs/cli) is how
error tracking gets what it needs from your build. Stack traces arrive minified or stripped,
so the CLI uploads the debug symbols that turn them back into real file names, functions,
and line numbers – and tags each upload with the release that produced it. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/error-tracking/surfaces/cli.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/surfaces/cli.mdx) · code · 2441 bytes

### desktop.mdx

Markdown page “Use Error Tracking in PostHog Desktop”. PostHog Desktop is in beta. This page
is a work in progress. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/error-tracking/surfaces/desktop.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/surfaces/desktop.mdx) · code · 1853 bytes

### mcp.mdx

Markdown page “Use Error Tracking over PostHog MCP”. The [PostHog MCP server](/docs/model-
context-protocol) exposes function calling tools to any MCP client, enabling AI agents to
interact with PostHog's API via the MCP protocol. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/error-tracking/surfaces/mcp.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/surfaces/mcp.mdx) · code · 3447 bytes

### web-app.mdx

Markdown page “Error tracking in PostHog Web”. The [PostHog web
app](https://app.posthog.com) is home base for error tracking. It's where you triage,
resolve, and route issues, with each one already grouped and symbolicated and carrying the
affected user's [session replay](/docs/session-replay), events, and the release it shipped
in. So you can see why something broke instead of trying to reproduce it.

[`contents/docs/error-tracking/surfaces/web-app.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/surfaces/web-app.mdx) · code · 3286 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
