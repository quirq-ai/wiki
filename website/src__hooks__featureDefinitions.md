<!-- quirq-wiki-generated repo=website dir=src/hooks/featureDefinitions -->

# website / src/hooks/featureDefinitions

Source: [src/hooks/featureDefinitions](https://github.com/quirq-ai/website/tree/main/src/hooks/featureDefinitions) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Feature Definitions”). This directory contains feature definitions for
all products and platform features. These definitions provide consistent names and
descriptions that are referenced by competitor festivalCompetitor data files and comparison
table components.

[`src/hooks/featureDefinitions/README.md`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/README.md) · code · 2008 bytes

### ai_observability.tsx

export const aiObservabilityFeatures = { summary: { name: 'AI Observability', description:
'Monitor and debug your LLM-powered features', url: '/ai-observability', docsUrl: '/docs/ai-
observability', }, features: { generation_tracking: { name: 'Generation tracking',
description: '', }, latency_tracking: { name: 'Latency tracking', description: 'Track
response Notable exports: `aiObservabilityFeatures`.

[`src/hooks/featureDefinitions/ai_observability.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/ai_observability.tsx) · code · 10138 bytes

### cdp.tsx

export const cdpFeatures = { summary: { name: 'CDP', description: 'Ingest, transform, and
send data between 145+ tools', url: '/cdp', docsUrl: '/docs/cdp', }, features: {
realtime_streaming: { name: 'Realtime event streaming', description: 'Send events to Slack,
webhooks, and other tools as they happen', }, custom_transformations: { name: 'Custom
transformat Notable exports: `cdpFeatures`.

[`src/hooks/featureDefinitions/cdp.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/cdp.tsx) · code · 3270 bytes

### dashboards.tsx

export const dashboardsFeatures = { summary: { name: 'Dashboards', description: 'Combine
insights into shareable dashboards', url: '/dashboards', docsUrl: '/docs/product-
analytics/dashboards', }, features: { annotations: { name: 'Annotations', description: 'Add
notes to timelines to mark important events', }, custom_dashboards: { name: 'Custom
dashboards', d Notable exports: `dashboardsFeatures`.

[`src/hooks/featureDefinitions/dashboards.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/dashboards.tsx) · code · 2062 bytes

### data_warehouse.tsx

export const dataWarehouseFeatures = { summary: { name: 'Data Stack', description: 'Import,
query, model & visualize product and third party data together', url: '/context-warehouse',
docsUrl: '/docs/data-warehouse', }, features: { warehouse_sources: { name: 'Import from data
warehouses', description: 'Import data from third-party sources like Postgres, S3 Notable
exports: `dataWarehouseFeatures`.

[`src/hooks/featureDefinitions/data_warehouse.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/data_warehouse.tsx) · code · 5109 bytes

### endpoints.tsx

export const endpointsFeatures = { summary: { name: 'Endpoints', description: 'Custom API
endpoints powered by your PostHog data', url: '/endpoints', docsUrl: '/docs/endpoints', },
features: { data_source: { name: 'Data source', description: 'Create endpoints from insights
or SQL queries', }, predefined_queries: { name: 'Create APIs from predefined queries'
Notable exports: `endpointsFeatures`.

[`src/hooks/featureDefinitions/endpoints.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/endpoints.tsx) · code · 1612 bytes

### error_tracking.tsx

export const errorTrackingFeatures = { summary: { name: 'Error tracking', description:
'Track and monitor errors and exceptions in your code', url: '/error-tracking', docsUrl:
'/docs/error-tracking', }, pricing: { free_tier: { name: 'Free errors', description: 'Free
errors you can capture per month', }, }, features: { description: 'Core error capture and
tri Notable exports: `errorTrackingFeatures`.

[`src/hooks/featureDefinitions/error_tracking.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/error_tracking.tsx) · code · 4220 bytes

### experiments.tsx

export const experimentsFeatures = { summary: { name: 'Experiments', description: 'Run
statistically rigorous A/B/n tests and validate ideas with confidence', url: '/experiments',
docsUrl: '/docs/experiments', }, pricing: { free_tier: { name: 'Monthly free tier', }, },
features: { funnel_metrics: { name: 'Funnel metrics', description: 'Track conversion rates
Notable exports: `experimentsFeatures`.

[`src/hooks/featureDefinitions/experiments.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/experiments.tsx) · code · 9204 bytes

### feature_flags.tsx

export const featureFlagsFeatures = { summary: { name: 'Feature Flags', description:
'Control feature access with precision and safely roll out changes', url: '/feature-flags',
docsUrl: '/docs/feature-flags', }, pricing: { free_tier: { name: 'Monthly free tier', }, },
features: { automation: { name: 'Automation', description: 'Trigger flag states based on sc
Notable exports: `featureFlagsFeatures`.

[`src/hooks/featureDefinitions/feature_flags.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/feature_flags.tsx) · code · 7626 bytes

### heatmaps.tsx

export const heatmapsFeatures = { summary: { name: 'Heatmaps', description: 'Visualize where
users click and scroll on your website', url: '/heatmaps', docsUrl: '/docs/session-
replay/heatmaps', }, features: { clickmaps: { name: 'Clickmaps', description: 'See what
elements people click on in pages', }, heatmaps: { name: 'Heatmaps', description: 'See
clicks an Notable exports: `heatmapsFeatures`.

[`src/hooks/featureDefinitions/heatmaps.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/heatmaps.tsx) · code · 1478 bytes

### logs.tsx

export const logsFeatures = { summary: { name: 'Logs', description: 'Search and analyze your
application logs with OpenTelemetry.', url: '/logs', docsUrl: '/docs/logs', }, pricing: {
name: 'Pricing', features: { ingest_only_pricing: { name: 'Ingest-only pricing',
description: 'Pay for what you send, not for indexing it a second time', },
no_query_compute_fee Notable exports: `logsFeatures`.

[`src/hooks/featureDefinitions/logs.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/logs.tsx) · code · 5806 bytes

### platform.tsx

export const platformFeatures = { deployment: { description: 'Options for how and where you
deploy PostHog', features: { eu_hosting: { name: 'EU hosting', description: 'Access and
store your data in the EU', }, open_source: { name: 'Open source', description: 'Audit code,
contribute to roadmap, and build integrations', }, open_core: { name: 'Open core', }, r
Notable exports: `platformFeatures`.

[`src/hooks/featureDefinitions/platform.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/platform.tsx) · code · 13299 bytes

### product_analytics.tsx

export const productAnalyticsFeatures = { summary: { name: 'Product Analytics', description:
'Track usage, retention, and feature adoption with comprehensive analytics', url: '/product-
analytics', docsUrl: '/docs/product-analytics', }, features: { advertising_analytics: {
name: 'Advertising analytics', description: 'Track ROI on Google Ads and other marketin
Notable exports: `productAnalyticsFeatures`.

[`src/hooks/featureDefinitions/product_analytics.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/product_analytics.tsx) · code · 12540 bytes

### product_tours.tsx

export const productToursFeatures = { summary: { name: 'Product Tours', description:
'Communicate with users through product tours, tooltips, and popups', url: '/cdp', docsUrl:
'/docs/cdp', }, features: {}, } Notable exports: `productToursFeatures`.

[`src/hooks/featureDefinitions/product_tours.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/product_tours.tsx) · code · 259 bytes

### products.tsx

Product descriptions for product-level comparisons Notable exports: `productDescriptions`.

[`src/hooks/featureDefinitions/products.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/products.tsx) · code · 2092 bytes

### revenue_analytics.tsx

export const revenueAnalyticsFeatures = { summary: { name: 'Revenue Analytics', description:
'Track revenue alongside product metrics with deferred recognition and multi-currency
support', url: '/docs/revenue-analytics', docsUrl: '/docs/revenue-analytics', },
data_sources: { description: 'Flexible ways to collect revenue data', features: {
revenue_tracking Notable exports: `revenueAnalyticsFeatures`.

[`src/hooks/featureDefinitions/revenue_analytics.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/revenue_analytics.tsx) · code · 3786 bytes

### session_replay.tsx

export const sessionReplayFeatures = { summary: { name: 'Session Replay', description:
'Watch real user sessions to understand behavior and fix issues', url: '/session-replay',
docsUrl: '/docs/session-replay', }, pricing: { free_tier: { name: 'Monthly free tier',
description: 'Recordings included every month at no cost', }, }, features: {
canvas_recording: { Notable exports: `sessionReplayFeatures`.

[`src/hooks/featureDefinitions/session_replay.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/session_replay.tsx) · code · 7972 bytes

### support.tsx

export const supportFeatures = { summary: { name: 'Support', description: 'One helpdesk for
every customer conversation, with product context attached', url: '/support', docsUrl:
'/docs/support', }, features: { unified_helpdesk: { name: 'Unified helpdesk', description:
'Read and reply to every conversation from one place', }, in_app_widget: { name: 'In-app c
Notable exports: `supportFeatures`.

[`src/hooks/featureDefinitions/support.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/support.tsx) · code · 3282 bytes

### surveys.tsx

export const surveysFeatures = { summary: { name: 'Surveys', description: 'Collect product
feedback with no-code surveys and customizable targeting', url: '/surveys', docsUrl:
'/docs/surveys', }, features: { ai_response_summaries: { name: 'AI response summaries',
description: 'AI-generated summaries of survey responses', }, aggregated_results: { name:
'Aggre Notable exports: `surveysFeatures`.

[`src/hooks/featureDefinitions/surveys.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/surveys.tsx) · code · 8467 bytes

### traces.tsx

export const tracesFeatures = { summary: { name: 'Tracing', description: 'Distributed
tracing that goes straight to the line that broke.', url: '/tracing', docsUrl:
'/docs/distributed-tracing', }, pricing: { name: 'Pricing', features: { pricing_model: {
name: 'Pricing model', description: 'What you are billed for – hosts, spans, or ingested
volume', }, free_ Notable exports: `tracesFeatures`.

[`src/hooks/featureDefinitions/traces.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/traces.tsx) · code · 3230 bytes

### web_analytics.tsx

export const webAnalyticsFeatures = { summary: { name: 'Web Analytics', description:
'Privacy-focused web analytics with real-time data and no sampling', url: '/web-analytics',
docsUrl: '/docs/web-analytics', }, features: { bounce_rate: { name: 'Bounce rate',
description: 'See the percentage of users that leave after one pageview', }, conversions: {
name: 'C Notable exports: `webAnalyticsFeatures`.

[`src/hooks/featureDefinitions/web_analytics.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/web_analytics.tsx) · code · 2568 bytes

### workflows.tsx

export const workflowsFeatures = { summary: { name: 'Workflows', description: 'Automate
workflows with your product data', url: '/workflows', docsUrl: '/docs/workflows', },
pricing: { free_tier: { name: 'Monthly free tier', }, }, features: { visual_builder: { name:
'Visual workflow builder', description: 'Drag-and-drop interface for building workflows', },
a Notable exports: `workflowsFeatures`.

[`src/hooks/featureDefinitions/workflows.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/featureDefinitions/workflows.tsx) · code · 4064 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
