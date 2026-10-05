<!-- quirq-wiki-generated repo=website dir=contents/handbook/engineering -->

# website / contents/handbook/engineering

Source: [contents/handbook/engineering](https://github.com/quirq-ai/website/tree/main/contents/handbook/engineering) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### bug-prioritization.md

Markdown page “Bug prioritization”. When bugs are reported it's critical to properly gauge
the extent and impact to be able to prioritize and respond accordingly. These are the
priorities we use across the entire engineering org, along with the relevant labels to
quickly identify them in GitHub.

[`contents/handbook/engineering/bug-prioritization.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/bug-prioritization.md) · code · 3322 bytes

### cloud-providers.md

Markdown page “Working with cloud providers”. Create a PR to the posthog-cloud-infra
repository to add your details in the [identity center Terraform
configuration](https://github.com/PostHog/posthog-cloud-
infra/blob/main/terraform/environments/aws-accnt-root/identity-center.tf#L46-L50) with
groups = local.default_groups.

[`contents/handbook/engineering/cloud-providers.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/cloud-providers.md) · code · 3972 bytes

### customer-comms.md

Markdown page “Customer comms as an engineer”. Got a service change you need to email
customers about — an API deprecation, a new quota limit, a breaking SDK change, a migration
deadline? Loop in Joe. He owns customer comms and will handle the copy and the send via
Customer.io.

[`contents/handbook/engineering/customer-comms.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/customer-comms.md) · code · 1593 bytes

### deployments-support.mdx

Markdown page “Deployments support”. If you're the week's support hero or you are providing
support for a customer and they have questions about their self-hosted deployment, follow
this guide to provide initial support before looping in someone from the Infrastructure
team. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/handbook/engineering/deployments-support.mdx`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/deployments-support.mdx) · code · 5397 bytes

### developer-experience.md

Markdown page “Developer Experience”. The DevEx team owns the shared developer tooling and
workflows that cut across all product teams: local dev, CI, builds, framework upgrades,
codebase structure, type systems, migration safety, and more. If it affects how fast and
safely engineers can work on code and ship it, it's probably this team's thing.

[`contents/handbook/engineering/developer-experience.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/developer-experience.md) · code · 2437 bytes

### development-process.md

Markdown page “Shipping & releasing”. Any process is a balance between speed and control. If
we have a long process that requires extensive QA and 10 approvals, we will never make
mistakes because we will never release anything.

[`contents/handbook/engineering/development-process.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/development-process.md) · code · 27484 bytes

### feature-ownership.md

Markdown page “Feature ownership”. Each feature at PostHog has an Engineering owner. This
owner is responsible for maintaining the feature (keep the lights on), championing any
efforts to improve it (e.g. by bringing up improvements in sprint planning), [planning
launches](/handbook/marketing/product-announcements) for new parts of it, and making sure it
is well documented.

[`contents/handbook/engineering/feature-ownership.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/feature-ownership.md) · code · 3211 bytes

### feature-pricing.md

Markdown page “Pricing principles”. 1. Use PostHog with generous free allowances if they are
hobbyists or pre-PMF. 2. Experience the product before paying for it. 3. Start paying when
they are ready, on their own, with few hurdles. 4. Transparently pay for the value they
receive. - e.g. Usage-based pricing on events, recordings. - e.g. Paying per product, so
they only pay for what they use. 5.

[`contents/handbook/engineering/feature-pricing.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/feature-pricing.md) · code · 10554 bytes

### how-to-access-posthog-cloud-infra.md

Markdown page “How-to access PostHog Cloud infra”. We've all been there. Something was just
merged and now there is a bug that you are having a real hard time pinning down. You hate to
do it... but you need to get on a pod or instance to troubleshoot the issue further.
_SHAME_.

[`contents/handbook/engineering/how-to-access-posthog-cloud-infra.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/how-to-access-posthog-cloud-infra.md) · code · 1277 bytes

### how-we-review.md

Markdown page “How we review PRs”. Almost all PRs made to PostHog repositories need a review
before merging. We do this because, almost every time we review a PR, we find a bug, a
performance issue, unnecessary code, or UX that could have been confusing. Here's how we do
it.

[`contents/handbook/engineering/how-we-review.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/how-we-review.md) · code · 14543 bytes

### product-design-process.md

Markdown page “Product design process”. We encourage engineers to act like feature owners,
carrying a project from ideation to completion. We maintain a design system in
[Storybook](https://storybook.dev.posthog.dev/), so engineers can build high-quality
features independently, as much as possible.

[`contents/handbook/engineering/product-design-process.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/product-design-process.md) · code · 1406 bytes

### product-design.md

Markdown page “Product Design, for Engineers”. We believe that everyone is a designer.
Because we hire generalists, there is no expectation that every project should start by
running through design _first_. It is up to you when to involve our product designers in
your work.

[`contents/handbook/engineering/product-design.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/product-design.md) · code · 4995 bytes

### product-engineering.md

Markdown page “How to do product, as an engineer”.

[`contents/handbook/engineering/product-engineering.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/product-engineering.md) · code · 11029 bytes

### revenue-and-forecasting.md

Markdown page “Revenue and forecasting”. The maintains the revenue dashboards and queries
that are used to understand.

[`contents/handbook/engineering/revenue-and-forecasting.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/revenue-and-forecasting.md) · code · 3900 bytes

### security.md

The security policy (“Security Best Practices”). Connecting to GitHub requires an SSH key
(unless using HTTPS). Traditional SSH keys live as text files on your filesystem, making
them vulnerable to theft or misuse by malware. We explicitly prohibit the use of SSH keys
stored on your filesystem. If you made an SSH key before, see [replacing a key stored on
disk](#replacing-a-key-stored-on-disk).

[`contents/handbook/engineering/security.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/security.md) · code · 15595 bytes

### tech-talks.md

Markdown page “Tech talks”. We encourage engineers to give tech talks on topics they're
interested in/knowledgeable about.

[`contents/handbook/engineering/tech-talks.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/tech-talks.md) · code · 715 bytes

### usage_reports.md

Markdown page “How we track and manage usage”. Tracking and managing usage is one of the
core responsibilities of the . If we do it wrong, we don't get paid.

[`contents/handbook/engineering/usage_reports.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/usage_reports.md) · code · 2646 bytes

### visiting-customers.md

Markdown page “Visiting customers as an engineer”. As a product engineer, you’re encouraged
to visit customers at their offices to gather feedback and ship features or improvements on
the spot.

[`contents/handbook/engineering/visiting-customers.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/visiting-customers.md) · code · 6824 bytes

### working-with-max-ai.md

Markdown page “Working with PostHog AI”. PostHog AI lets users interact with PostHog's
products through a chat interface and other shortcuts throughout the platform. The is
responsible for building and maintaining the AI platform.

[`contents/handbook/engineering/working-with-max-ai.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/working-with-max-ai.md) · code · 3876 bytes

### writing-blogs.md

Markdown page “Writing blogs as an engineer”. We write and publish a lot of content at
PostHog. focuses on this, but we also publish writing on our blog from anyone, including
engineers. These usually look like.

[`contents/handbook/engineering/writing-blogs.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/writing-blogs.md) · code · 4907 bytes

### writing-docs.md

Markdown page “Writing docs as an engineer”. Product engineers are responsible for writing
and maintaining documentation for their products. This page is a guide to help you do this.

[`contents/handbook/engineering/writing-docs.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/writing-docs.md) · code · 6035 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
