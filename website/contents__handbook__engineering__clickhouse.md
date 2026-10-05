<!-- quirq-wiki-generated repo=website dir=contents/handbook/engineering/clickhouse -->

# website / contents/handbook/engineering/clickhouse

Source: [contents/handbook/engineering/clickhouse](https://github.com/quirq-ai/website/tree/main/contents/handbook/engineering/clickhouse) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### clusters.mdx

Markdown page “How PostHog runs ClickHouse at scale”. ClickHouse powers nearly every
analytical feature in PostHog: trends, funnels, retention, paths, session replay, error
tracking, logs, data warehouse queries, and more. This page describes how we operate it, and
the patterns that let us run analytics over very large datasets while keeping interactive
queries fast and ingestion reliable.

[`contents/handbook/engineering/clickhouse/clusters.mdx`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/clickhouse/clusters.mdx) · code · 6463 bytes

### data-ingestion.mdx

Markdown page “Data ingestion”. This document covers: - Different options for ingesting data
into MergeTree tables and trade-offs involved - How the Kafka table engine works - What are
materialized views? - Examples of a full schema setup MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/handbook/engineering/clickhouse/data-ingestion.mdx`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/clickhouse/data-ingestion.mdx) · code · 8518 bytes

### data-storage.mdx

Markdown page “Data storage or what is a MergeTree”.

[`contents/handbook/engineering/clickhouse/data-storage.mdx`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/clickhouse/data-storage.mdx) · code · 24302 bytes

### dictionaries.mdx

Markdown page “ClickHouse Dictionaries”. We don't use ClickHouse dictionaries very often,
and there are a few aspects to them that have caused headaches in production. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/handbook/engineering/clickhouse/dictionaries.mdx`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/clickhouse/dictionaries.mdx) · code · 1353 bytes

### index.mdx

Markdown page “ClickHouse Manual”. Welcome to PostHog's ClickHouse manual. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/handbook/engineering/clickhouse/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/clickhouse/index.mdx) · code · 4812 bytes

### operations.mdx

Markdown page “Operations”. This document gives an overview of the kitchen side of
ClickHouse: how various operations work, what tricky migrations we have experience with as
well as various settings and tips. MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/handbook/engineering/clickhouse/operations.mdx`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/clickhouse/operations.mdx) · code · 21066 bytes

### performance.mdx

Markdown page “Query performance”. This document goes over: - What tools are available to
understand and measure query performance - Importance of page cache - General tips and
tricks for performant queries MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/handbook/engineering/clickhouse/performance.mdx`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/clickhouse/performance.mdx) · code · 9821 bytes

### query-attribution.mdx

Markdown page “Query attribution”. A guideline for making the ClickHouse queries attribute
correctly. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/handbook/engineering/clickhouse/query-attribution.mdx`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/clickhouse/query-attribution.mdx) · code · 7031 bytes

### working-with-json.mdx

Markdown page “Working with JSON”. At PostHog, we store arbitrary payloads users send us for
further analysis as JSON. As such, it's critical we do a good job at storing and analyzing
this data. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/handbook/engineering/clickhouse/working-with-json.mdx`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/clickhouse/working-with-json.mdx) · code · 3491 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
