<!-- quirq-wiki-generated repo=website dir=contents/docs/feature-flags/snippets -->

# website / contents/docs/feature-flags/snippets

Source: [contents/docs/feature-flags/snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/feature-flags/snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### bootstrapping-intro.mdx

Markdown document `bootstrapping-intro.mdx`. Since there is a delay between initializing
PostHog and fetching feature flags, feature flags are not always available immediately. This
makes them unusable if you want to do something like redirecting a user to a different page
based on a feature flag. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/feature-flags/snippets/bootstrapping-intro.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/bootstrapping-intro.mdx) · code · 536 bytes

### faq-false-or-none-events.mdx

Markdown page “My feature flag called events don't show my variant names”. Feature Flag
Called events showing None, (empty string), or false instead of your variant names has three
potential causes MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/feature-flags/snippets/faq-false-or-none-events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/faq-false-or-none-events.mdx) · code · 1673 bytes

### flag-charge-estimate.mdx

Markdown page “Frontend SDKs”. We make a request to fetch feature flags (using the [/flags
endpoint](/docs/api/flags)) when one of the below occurs MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/feature-flags/snippets/flag-charge-estimate.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/flag-charge-estimate.mdx) · code · 2497 bytes

### groups-flags-posthog-js.mdx

Markdown document `groups-flags-posthog-js.mdx`. If you have updated tracking, you can use
group-based feature flags as normal in [posthog-js](/docs/libraries/js). MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/snippets/groups-flags-posthog-js.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/groups-flags-posthog-js.mdx) · code · 308 bytes

### groups-ingestion-go.mdx

Markdown document `groups-ingestion-go.mdx`. Using groups with go requires the latest
version of [posthog-go](/docs/integrate/server/go). Update dependencies via MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/snippets/groups-ingestion-go.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/groups-ingestion-go.mdx) · code · 612 bytes

### groups-ingestion-node.mdx

Markdown document `groups-ingestion-node.mdx`. Update [posthog-
node](/docs/integrate/server/node) to version 1.2.0 or above to make use of the new
functionality. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/snippets/groups-ingestion-node.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/groups-ingestion-node.mdx) · code · 484 bytes

### groups-ingestion-other.mdx

Markdown page “Capturing events with groups”. Not all libraries support group analytics yet,
but you can work around this issue by sending events in specific formats. MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/snippets/groups-ingestion-other.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/groups-ingestion-other.mdx) · code · 1065 bytes

### groups-ingestion-php.mdx

Markdown page “Capturing an event with groups”. Update [posthog-
php](/docs/integrate/server/php) to version 2.1.0 or above to make use of the new
functionality. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/snippets/groups-ingestion-php.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/groups-ingestion-php.mdx) · code · 479 bytes

### groups-ingestion-posthog-js.mdx

Markdown page “Handling logging out”. Update [posthog-js](/docs/libraries/js)2 to version
1.16.0 or above to make use of the new functionality. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/feature-flags/snippets/groups-ingestion-posthog-js.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/groups-ingestion-posthog-js.mdx) · code · 1158 bytes

### groups-ingestion-python.mdx

Markdown page “Capturing an event with groups”. Update [posthog-
python](/docs/integrate/server/python) to version 1.4.3 or above to make use of the new
functionality. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/snippets/groups-ingestion-python.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/groups-ingestion-python.mdx) · code · 388 bytes

### groups-ingestion-segment.mdx

Markdown page “Segment browser or mobile libraries”. Capturing an event with groups
analytics.track('event_name', { "$groups": { "company": "id:5" } }) MDX page (Markdown with
JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/snippets/groups-ingestion-segment.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/groups-ingestion-segment.mdx) · code · 878 bytes

### local-evaluation-intro.mdx

Markdown document `local-evaluation-intro.mdx`. Evaluating feature flags requires making a
request to PostHog for each flag. However, you can improve performance by evaluating flags
locally. Instead of making a request for each flag, PostHog will periodically request and
store feature flag definitions locally, enabling you to evaluate flags without making
additional requests.

[`contents/docs/feature-flags/snippets/local-evaluation-intro.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/snippets/local-evaluation-intro.mdx) · code · 469 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
