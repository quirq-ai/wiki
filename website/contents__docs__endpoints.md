<!-- quirq-wiki-generated repo=website dir=contents/docs/endpoints -->

# website / contents/docs/endpoints

Source: [contents/docs/endpoints](https://github.com/quirq-ai/website/tree/main/contents/docs/endpoints) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### best-practices.mdx

Markdown page “Use cases and tips”. import { CalloutBox } from 'components/Docs/CalloutBox'
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/endpoints/best-practices.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/best-practices.mdx) · code · 1682 bytes

### caching.mdx

Markdown page “Caching”. Caching stores query results temporarily so repeated calls don't
re-run the query. This is different from [materialization](/docs/endpoints/materialization),
which pre-computes and stores results on a schedule. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/endpoints/caching.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/caching.mdx) · code · 2361 bytes

### changelog.mdx

Markdown page “Endpoints changelog”. import { ProductChangelog } from
'components/Docs/ProductChangelog' MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/endpoints/changelog.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/changelog.mdx) · code · 168 bytes

### customer-facing-analytics.mdx

Markdown page “Build customer-facing analytics”. import { CalloutBox } from
'components/Docs/CalloutBox' MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/endpoints/customer-facing-analytics.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/customer-facing-analytics.mdx) · code · 3646 bytes

### endpoint-types.mdx

Markdown page “Endpoint types”. Endpoints can be created from two types of sources: insights
or SQL queries. Each has different strengths and use cases. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/endpoints/endpoint-types.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/endpoint-types.mdx) · code · 2466 bytes

### endpoints-vs-query-api.mdx

Markdown page “Endpoints vs Query API”. PostHog offers two ways to run queries
programmatically: the [Query API](/docs/api/queries) and Endpoints. Here's how they differ
and when to use each. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/endpoints/endpoints-vs-query-api.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/endpoints-vs-query-api.mdx) · code · 1781 bytes

### execution.mdx

Markdown page “Execution”. When you execute an endpoint, PostHog runs your query and returns
the results. This page explains what happens under the hood and how to control execution
behavior. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/endpoints/execution.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/execution.mdx) · code · 4315 bytes

### guide-breakdown.mdx

Markdown page “Create an insight-based endpoint with variables”. import { CalloutBox } from
"components/Docs/CalloutBox" MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/endpoints/guide-breakdown.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/guide-breakdown.mdx) · code · 5397 bytes

### guide-variables.mdx

Markdown page “Create an endpoint with variables”. This guide walks through creating an
endpoint that accepts variables, allowing you to filter results at execution time. We'll
create a customer-specific analytics endpoint that filters data by a customer_id property.
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/endpoints/guide-variables.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/guide-variables.mdx) · code · 3925 bytes

### index.mdx

Markdown page “Endpoints”. import { IconLaptop, IconBrackets, IconMagic, IconCode,
IconGraph, IconHogQL, IconDatabase, IconServer, IconBolt, IconNotebook, IconCheckCircle }
from '@posthog/icons' import OSButton from 'components/OSButton' import
CustomSelfDrivingLoop from 'components/CustomSelfDrivingLoop' MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/endpoints/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/index.mdx) · code · 7431 bytes

### internal-tools.mdx

Markdown page “Enrich internal tools with data from endpoints”. import { CalloutBox } from
'components/Docs/CalloutBox' MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/endpoints/internal-tools.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/internal-tools.mdx) · code · 3960 bytes

### materialization.mdx

Markdown page “Materialization”. Materialization pre-computes your query results and stores
them in S3. When someone calls your endpoint, PostHog returns the materialized results
instead of running the query again - making responses much faster. MDX page (Markdown with
JSX components), typically rendered by the docs site.

[`contents/docs/endpoints/materialization.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/materialization.mdx) · code · 6852 bytes

### openapi-sdk-generation.mdx

Markdown page “Generate SDKs with OpenAPI”. Each endpoint exposes an OpenAPI 3.0 spec that
you can use to generate typed SDK clients for your preferred language. MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/endpoints/openapi-sdk-generation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/openapi-sdk-generation.mdx) · code · 1466 bytes

### pricing.mdx

Markdown page “Pricing”. import { CalloutBox } from 'components/Docs/CalloutBox' MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/endpoints/pricing.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/pricing.mdx) · code · 3049 bytes

### rate-limits.mdx

Markdown page “Rate limits”. Endpoints can provide better rate limits than other APIs
depending on how they're configured. MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/endpoints/rate-limits.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/rate-limits.mdx) · code · 739 bytes

### troubleshooting.mdx

Markdown page “Endpoints troubleshooting”. import { CalloutBox } from
"components/Docs/CalloutBox" MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/endpoints/troubleshooting.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/troubleshooting.mdx) · code · 4704 bytes

### usage-analytics.mdx

Markdown page “Usage and logs”. The Usage tab on the [Endpoints
page](https://app.posthog.com/endpoints) shows analytics across all your endpoints, while
the Logs tab on an individual endpoint's page shows a log of its executions. Together they
help you monitor performance and debug execution issues. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/endpoints/usage-analytics.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/usage-analytics.mdx) · code · 2546 bytes

### variables.mdx

Markdown page “Variables in endpoints”. import { CalloutBox } from
"components/Docs/CalloutBox" MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/endpoints/variables.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/variables.mdx) · code · 5598 bytes

### versioning.mdx

Markdown page “Versioning”. Every time you update an endpoint's query, PostHog creates a new
version. This gives you a history of changes and lets you run older versions if needed. MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/endpoints/versioning.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/endpoints/versioning.mdx) · code · 4057 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
