<!-- quirq-wiki-generated repo=website dir=contents/docs/cdp/surfaces -->

# website / contents/docs/cdp/surfaces

Source: [contents/docs/cdp/surfaces](https://github.com/quirq-ai/website/tree/main/contents/docs/cdp/surfaces) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### api.mdx

Markdown page “Data pipelines API”. Use the API when you want pipelines to live in your own
configuration rather than being clicked together in the UI – provisioning the same
destinations across projects, keeping function definitions in version control, or wiring
pipeline changes into your deploy process. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/cdp/surfaces/api.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/cdp/surfaces/api.mdx) · code · 1948 bytes

### desktop.mdx

Markdown page “Fix pipeline failures in PostHog Desktop”. PostHog Desktop is in beta. This
page is a work in progress. MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/cdp/surfaces/desktop.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/cdp/surfaces/desktop.mdx) · code · 4187 bytes

### mcp.mdx

Markdown page “Manage data pipelines over PostHog MCP”. The [PostHog MCP
server](/docs/model-context-protocol) gives AI agents and MCP clients direct access to your
pipelines. Because pipeline functions are just code plus configuration, this is one of the
places MCP pays off most – an agent can write a transformation, test it against a real
event, read the failure, and fix it, all without you opening the web app.

[`contents/docs/cdp/surfaces/mcp.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/cdp/surfaces/mcp.mdx) · code · 3046 bytes

### web-app.mdx

Markdown page “Data pipelines in PostHog Web”. The [PostHog web
app](https://app.posthog.com) is where you build pipelines and watch them run. Sources,
transformations, destinations, and batch exports each get their own section, and every
pipeline you create – whether from a template or written by hand – ends up as a [Hog
function](/docs/hog) you can open, edit, and test.

[`contents/docs/cdp/surfaces/web-app.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/cdp/surfaces/web-app.mdx) · code · 3144 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
