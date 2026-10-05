<!-- quirq-wiki-generated repo=website dir=contents/docs/health-checks -->

# website / contents/docs/health-checks

Source: [contents/docs/health-checks](https://github.com/quirq-ai/website/tree/main/contents/docs/health-checks) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### authorized-urls.mdx

Markdown page “No authorized URLs”. The authorized URLs check fires when your project has no
authorized URLs (also called app URLs) configured. Authorized URLs tell PostHog which
domains your product runs on. MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/health-checks/authorized-urls.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/authorized-urls.mdx) · code · 2311 bytes

### external-data-sync-failures.mdx

Markdown page “External data sync failures”. The external data sync failures check fires
when one of your [external data sources](/docs/cdp/sources) fails to sync, which means the
connected data in your warehouse is stale or incomplete. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/health-checks/external-data-sync-failures.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/external-data-sync-failures.mdx) · code · 2491 bytes

### index.mdx

Markdown page “Health checks”. import { CalloutBox } from 'components/Docs/CalloutBox' MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/health-checks/index.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/index.mdx) · code · 6646 bytes

### ingestion-warnings.mdx

Markdown page “Ingestion warnings”. The ingestion warnings check surfaces [ingestion
warnings](/docs/data/ingestion-warnings) – events that PostHog had to drop, mis-merge, or
degrade as they came in – as a health issue, so you can trace them back to the code that
produced them. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/health-checks/ingestion-warnings.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/ingestion-warnings.mdx) · code · 2830 bytes

### keeping-sdks-current.mdx

Markdown page “Keeping SDKs current”. The [SDK health check](/docs/health-checks/sdk-health)
identifies when your PostHog SDKs are outdated, but understanding why they fall behind, and
how to prevent it, helps avoid the problem in the first place. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/health-checks/keeping-sdks-current.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/keeping-sdks-current.mdx) · code · 12747 bytes

### materialized-view-failures.mdx

Markdown page “Materialized view failures”. The materialized view failures check fires when
a [materialized view](/docs/data-warehouse/views) in your Data Warehouse fails to refresh,
which leaves anything that reads from it serving stale data. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/health-checks/materialized-view-failures.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/materialized-view-failures.mdx) · code · 2373 bytes

### no-live-events.mdx

Markdown page “No live events”. The no live events check fires when your project hasn't
received any $pageview or $screen events for a sustained period. It's the most serious Web
Analytics check, because it usually means PostHog isn't receiving data at all. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/health-checks/no-live-events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/no-live-events.mdx) · code · 2420 bytes

### no-reverse-proxy.mdx

Markdown page “No reverse proxy”. The no reverse proxy check fires when none of your traffic
is being sent through a [reverse proxy](/docs/advanced/proxy). A reverse proxy serves
PostHog from your own domain, which keeps ad blockers from silently dropping your data. MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/health-checks/no-reverse-proxy.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/no-reverse-proxy.mdx) · code · 2573 bytes

### pageleave-events.mdx

Markdown page “Missing pageleave events”. The missing pageleave events check fires when your
project sends $pageview events but no $pageleave events. PostHog uses the pair to measure
how long people stay on a page. MDX page (Markdown with JSX components), typically rendered
by the docs site.

[`contents/docs/health-checks/pageleave-events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/pageleave-events.mdx) · code · 2222 bytes

### partial-reverse-proxy.mdx

Markdown page “Partial reverse-proxy coverage”. The partial reverse-proxy coverage check
fires when some of your hostnames send events through a [reverse
proxy](/docs/advanced/proxy) but others don't. It's a more subtle cousin of the [no reverse
proxy](/docs/health-checks/no-reverse-proxy) check. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/health-checks/partial-reverse-proxy.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/partial-reverse-proxy.mdx) · code · 2424 bytes

### scroll-depth.mdx

Markdown page “Scroll-depth tracking disabled”. The scroll-depth check fires when your
$pageleave events arrive without scroll-depth metadata, which leaves scroll-depth reports in
web analytics empty. MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/health-checks/scroll-depth.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/scroll-depth.mdx) · code · 2188 bytes

### sdk-health.mdx

Markdown page “SDK health”. The SDK health check watches the versions of the PostHog SDKs
sending events to your project and flags any that have fallen significantly behind the
latest release. It samples your recent events, compares each SDK against the latest
published release, and surfaces anything that's meaningfully out of date so you can keep
your integrations current.

[`contents/docs/health-checks/sdk-health.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/sdk-health.mdx) · code · 7335 bytes

### web-vitals.mdx

Markdown page “Missing web vitals”. The missing web vitals check fires when your project
sends $pageview events but no $web_vitals events, which means [Core Web Vitals](/docs/web-
analytics/web-vitals) won't show up in your analytics. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/health-checks/web-vitals.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/health-checks/web-vitals.mdx) · code · 2071 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
