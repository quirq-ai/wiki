<!-- quirq-wiki-generated repo=website dir=contents/docs/how-posthog-works -->

# website / contents/docs/how-posthog-works

Source: [contents/docs/how-posthog-works](https://github.com/quirq-ai/website/tree/main/contents/docs/how-posthog-works) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### clickhouse.md

Markdown page “ClickHouse”. ClickHouse is our main analytics backend.

[`contents/docs/how-posthog-works/clickhouse.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/how-posthog-works/clickhouse.md) · code · 4462 bytes

### data-model.mdx

Markdown page “Data model: fields”. Here's a look at the fields on each data type. To learn
more about how to think about data in PostHog, see [understanding PostHog](/docs/new-to-
posthog/understand-posthog). MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/how-posthog-works/data-model.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/how-posthog-works/data-model.mdx) · code · 5843 bytes

### index.mdx

Markdown page “PostHog's architecture”. This section covers PostHog's [data
model](/docs/how-posthog-works/data-model), [ingestion pipeline](/docs/how-posthog-
works/ingestion-pipeline), [ClickHouse setup](/docs/how-posthog-works/clickhouse) and [data
querying](/docs/how-posthog-works/queries). This page provides an overview of how PostHog is
structured. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/how-posthog-works/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/how-posthog-works/index.mdx) · code · 3339 bytes

### ingestion-pipeline.mdx

Markdown page “Ingestion pipeline”. In simple terms, the ingestion pipeline is a collection
of services which listen for events as they are sent in, processed, and stored for later
analysis. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/how-posthog-works/ingestion-pipeline.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/how-posthog-works/ingestion-pipeline.mdx) · code · 12255 bytes

### queries.mdx

Markdown page “Querying data”. This page provides a high-level overview of how internal
queries run when creating insights in PostHog. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/how-posthog-works/queries.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/how-posthog-works/queries.mdx) · code · 6129 bytes

### recordings-ingestion.mdx

Markdown page “Session replay ingestion”. We use rrweb to collect "snapshot data" from the
browser. This data is gathered by the replay capture service (a dedicated Rust HTTP server)
and sent to ingestion. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/how-posthog-works/recordings-ingestion.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/how-posthog-works/recordings-ingestion.mdx) · code · 2176 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
