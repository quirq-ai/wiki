<!-- quirq-wiki-generated repo=website dir=contents/handbook/growth/revops -->

# website / contents/handbook/growth/revops

Source: [contents/handbook/growth/revops](https://github.com/quirq-ai/website/tree/main/contents/handbook/growth/revops) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### billing-consolidation.md

Markdown page “Consolidating billing across organizations”. Sometimes a parent company owns
several PostHog accounts — often separate companies it acquired, sometimes across cloud
regions — and asks us to bill them as one. This page describes how we handle that. It covers
the choices to present to the customer and the steps to migrate existing paying accounts
without a billing surprise.

[`contents/handbook/growth/revops/billing-consolidation.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/billing-consolidation.md) · code · 9118 bytes

### credits.md

Markdown page “Giving credits to customers”. Sometimes we might want to offer a customer one
time credits to cover an upcoming invoice, for example when accommodating a trial for a new
product or offering compensation for a recent incident. Here’s how to do that.

[`contents/handbook/growth/revops/credits.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/credits.md) · code · 1472 bytes

### enrichment-pipeline.md

Markdown page “Signup enrichment pipeline”. When someone signs up to PostHog, we enrich them
(figure out the company, its size, the person's role, and so on), score them against [our
ICP](/handbook/growth/revops/icp-fit-score), and push that data into our sales systems. This
page explains how that pipeline works and, more importantly, what to do when it stops.

[`contents/handbook/growth/revops/enrichment-pipeline.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/enrichment-pipeline.md) · code · 3261 bytes

### icp-fit-score.md

Markdown page “ICP fit score”. We score every work-email signup on how well it matches [who
we build for](/handbook/who-we-build-for): AI-pilled software teams at any scale, backed by
leading investors or real revenue. This is the ICP fit score. "Fit" because it answers
exactly one question: does this company match our definition?

[`contents/handbook/growth/revops/icp-fit-score.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/icp-fit-score.md) · code · 6614 bytes

### lead-assignment-tracker.md

Markdown page “Lead assignment tracker”. [The Lead Assignment Tracker](https://posthog.light
ning.force.com/lightning/o/Lead_Assignment_Tracker__c/list?filterName=All) in Salesforce is
the source of truth for who's in the round robin, how leads are weighted, and how to manage
assignments. This page explains how to use it self serve.

[`contents/handbook/growth/revops/lead-assignment-tracker.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/lead-assignment-tracker.md) · code · 4730 bytes

### lifecycle-analysis.md

Markdown page “Lifecycle analysis”. Understanding how our revenue moves through different
lifecycle stages helps us identify the specific drivers behind our growth, not just the net
change in revenue. We use lifecycle analysis to see how much growth comes from new
customers, expansions, contractions, and churn. We analyze this at both total revenue and
per product levels to understand each component of our business.

[`contents/handbook/growth/revops/lifecycle-analysis.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/lifecycle-analysis.md) · code · 3890 bytes

### metric-conventions.md

Markdown page “Metric conventions”. We're moving our canonical numbers into PostHog's
[semantic layer](/docs/semantic-layer) so that any person or agent asking "what's our MRR?"
gets the same answer without having to know how it's calculated.

[`contents/handbook/growth/revops/metric-conventions.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/metric-conventions.md) · code · 5525 bytes

### org-definitions.md

Markdown page “Org definitions: intent, setup & engagement”. Intent, setup, and engagement
are customer level concepts that Sales, Marketing & Website, Customer Success, and Growth
all rely on.

[`contents/handbook/growth/revops/org-definitions.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/org-definitions.md) · code · 21084 bytes

### overview.md

Markdown page “Overview”. RevOps at PostHog is the Product Manager for Sales, Marketing, and
Executive teams. Just as PMs help engineering teams build better products by connecting user
needs with technical solutions, RevOps helps go to market teams make better decisions by
connecting different parts of the business together.

[`contents/handbook/growth/revops/overview.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/overview.md) · code · 7360 bytes

### retention-metrics.md

Markdown page “Retention metrics”. We use Net Dollar Retention (NDR) and Gross Dollar
Retention (GDR) to track how well we're retaining and growing customer revenue over time. We
use adjusted revenue to calculate these retention metrics for a more accurate picture of our
business. This way, we get clearer signals about retention by removing the noise from
spikes, trials, and organizational shifts.

[`contents/handbook/growth/revops/retention-metrics.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/retention-metrics.md) · code · 2684 bytes

### revenue-adjustments.md

Markdown page “Revenue adjustments”. Raw revenue numbers can sometimes be misleading due to
various factors that don't reflect the true health of our business. Our adjusted revenue
methodology helps us account for these factors to get a clearer picture of our growth.

[`contents/handbook/growth/revops/revenue-adjustments.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/revenue-adjustments.md) · code · 3983 bytes

### revenue-views.md

Markdown page “Revenue views”. Our revenue reporting runs on a small chain of warehouse
views in the PostHog project. The chain starts from billing's invoice rows and ends in one
row per customer per month with revenue by product, usage by product, discounts, credits and
refunds. Most revenue dashboards, the comp and quota views, and the sales and customer
success account views read from it.

[`contents/handbook/growth/revops/revenue-views.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/growth/revops/revenue-views.md) · code · 10845 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
