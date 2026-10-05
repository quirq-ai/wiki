<!-- quirq-wiki-generated repo=website dir=contents/handbook/company/post-mortems -->

# website / contents/handbook/company/post-mortems

Source: [contents/handbook/company/post-mortems](https://github.com/quirq-ai/website/tree/main/contents/handbook/company/post-mortems) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### 2025-09-29-flags-is-down.md

Markdown page “Feature flags service outage”. Internal post-mortem.

[`contents/handbook/company/post-mortems/2025-09-29-flags-is-down.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/company/post-mortems/2025-09-29-flags-is-down.md) · code · 5823 bytes

### 2025-10-03-surveys-sdk-bug.md

Markdown page “Surveys SDK bug”. On October 3, 2025, a backwards compatibility issue in the
PostHog Surveys SDK (version 1.270.0) caused widespread JavaScript exceptions for customers
using SDK versions older than 1.257.1. The issue lasted 5 hours and 26 minutes, affecting
305 teams and disrupting both survey functionality and error tracking metrics.

[`contents/handbook/company/post-mortems/2025-10-03-surveys-sdk-bug.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/company/post-mortems/2025-10-03-surveys-sdk-bug.md) · code · 9313 bytes

### 2025-10-21-feature-flags-recurring-outages.md

Markdown page “Feature flags recurring outages”. Between October 21 and October 30, 2025,
the PostHog Feature Flags service experienced four separate incidents, exposing systemic
architectural weaknesses that required comprehensive remediation. This post-mortem documents
all four incidents and our path to stability.

[`contents/handbook/company/post-mortems/2025-10-21-feature-flags-recurring-outages.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/company/post-mortems/2025-10-21-feature-flags-recurring-outages.md) · code · 24099 bytes

### 2025-11-15-persons-db-migration.md

Markdown page “Persons database migration”. Between November 11 and November 15, 2025 we hit
a Postgres limit that required us to migrate our Persons database for US Cloud. This led to
ingestion delays which had a knock-on effect for products relying on person data, including
feature flags and experiments.

[`contents/handbook/company/post-mortems/2025-11-15-persons-db-migration.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/company/post-mortems/2025-11-15-persons-db-migration.md) · code · 14480 bytes

### 2025-11-26-shai-hulud-attack.md

Markdown page “Shai-Hulud supply chain attack”. At 4:11 AM UTC on November 24th, a number of
our SDKs and other packages were compromised, with a malicious self-replicating worm –
[Shai-Hulud 2.0](https://www.wiz.io/blog/shai-hulud-2-0-ongoing-supply-chain-attack). New
versions were published to npm, which contained a preinstall script that.

[`contents/handbook/company/post-mortems/2025-11-26-shai-hulud-attack.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/company/post-mortems/2025-11-26-shai-hulud-attack.md) · code · 12008 bytes

### 2026-01-17-replay-sdk-fetch-wrapper-incident.md

Markdown page “Replay SDK fetch wrapper incident”. Date: January 14-19, 2026.

[`contents/handbook/company/post-mortems/2026-01-17-replay-sdk-fetch-wrapper-incident.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/company/post-mortems/2026-01-17-replay-sdk-fetch-wrapper-incident.md) · code · 8850 bytes

### 2026-02-06-feature-flags-cache-degradation.md

Markdown page “Feature flags cache degradation”. Between February 2-6, 2026, PostHog's
feature flags cache workers experienced escalating memory pressure, resulting in degraded
cache update reliability. The issue was stabilized on February 6 at 22:34 UTC.

[`contents/handbook/company/post-mortems/2026-02-06-feature-flags-cache-degradation.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/company/post-mortems/2026-02-06-feature-flags-cache-degradation.md) · code · 6266 bytes

### 2026-02-20-posthog-us-logs-data-loss.md

Markdown page “Logs data loss”. On February 19th, PostHog's Logs product experienced a major
incident, which caused the loss of data collected more than 3 days ago in our US region.
This data loss only impacted the Logs product, all other PostHog data is intact.

[`contents/handbook/company/post-mortems/2026-02-20-posthog-us-logs-data-loss.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/company/post-mortems/2026-02-20-posthog-us-logs-data-loss.md) · code · 6264 bytes

### 2026-04-27-workflow-wait-until-condition.md

Markdown page “Workflow "Wait until condition" steps silently failing”. Between March 30 and
April 22, 2026, a bug in our workflow engine caused workflows using "Wait until condition"
steps to silently stop resuming. Affected workflows appeared to complete normally in the UI
but never executed their downstream actions — such as delivering emails or sending Slack
notifications.

[`contents/handbook/company/post-mortems/2026-04-27-workflow-wait-until-condition.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/company/post-mortems/2026-04-27-workflow-wait-until-condition.md) · code · 5909 bytes

### index.md

Markdown page “Public post-mortems”. For PostHog employees, see [the post-mortem
guidance](/handbook/engineering/operations/post-mortems) for how and when to write a post-
mortem.

[`contents/handbook/company/post-mortems/index.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/company/post-mortems/index.md) · code · 2677 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
