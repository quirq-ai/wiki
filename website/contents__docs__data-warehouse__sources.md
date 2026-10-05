<!-- quirq-wiki-generated repo=website dir=contents/docs/data-warehouse/sources -->

# website / contents/docs/data-warehouse/sources

Source: [contents/docs/data-warehouse/sources](https://github.com/quirq-ai/website/tree/main/contents/docs/data-warehouse/sources) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### file-upload.md

Markdown page “Uploading files to the data warehouse”. You can upload CSV, JSON, or Parquet
files directly to the data warehouse without setting up your own S3 or GCS bucket. PostHog
stores the file and reads it in place on every query — there's no sync pipeline or recurring
import.

[`contents/docs/data-warehouse/sources/file-upload.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/data-warehouse/sources/file-upload.md) · code · 3717 bytes

### index.mdx

Markdown page “Data warehouse sources”. import { ManagedSources, SelfHostedSources } from
"../../_snippets/data-sources" MDX page (Markdown with JSX components), typically rendered
by the docs site.

[`contents/docs/data-warehouse/sources/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data-warehouse/sources/index.mdx) · code · 935 bytes

### posthog.mdx

Markdown page “Linking PostHog as a data warehouse source”. Much of your PostHog data is
available in the data warehouse by default. This includes data like
[events](/docs/data/events), [persons](/docs/data/persons), [sessions](/docs/data/sessions),
[groups](/docs/product-analytics/group-analytics), and the [query log](/docs/data/query-
log). MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/data-warehouse/sources/posthog.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data-warehouse/sources/posthog.mdx) · code · 55412 bytes

### snapchat-ads.mdx

Markdown page “Linking Snapchat Ads as a source”. import SnapchatAds from
'../../cdp/sources/_snippets/source-snapchat-ads.mdx' MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/data-warehouse/sources/snapchat-ads.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/data-warehouse/sources/snapchat-ads.mdx) · code · 303 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
