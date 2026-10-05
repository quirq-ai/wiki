<!-- quirq-wiki-generated repo=website dir=contents/blog/_snippets -->

# website / contents/blog/_snippets

Source: [contents/blog/_snippets](https://github.com/quirq-ai/website/tree/main/contents/blog/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### breached-tickets.mdx

Markdown document `breached-tickets.mdx`. with first_escalated as( select ticket_id,
min(created_at) as timestamp from zendesk_ticket_events where child_events like
'%escalated%' group by ticket_id ) MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/blog/_snippets/breached-tickets.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/breached-tickets.mdx) · code · 1864 bytes

### capture-exceptions.mdx

Markdown document `capture-exceptions.mdx`.

[`contents/blog/_snippets/capture-exceptions.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/capture-exceptions.mdx) · code · 1256 bytes

### error-tracking-churn.mdx

Markdown document `error-tracking-churn.mdx`.

[`contents/blog/_snippets/error-tracking-churn.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/error-tracking-churn.mdx) · code · 2377 bytes

### error-tracking-top-customers.mdx

Markdown document `error-tracking-top-customers.mdx`.

[`contents/blog/_snippets/error-tracking-top-customers.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/error-tracking-top-customers.mdx) · code · 386 bytes

### escalated-sla.mdx

Markdown document `escalated-sla.mdx`. with first_escalated as( select ticket_id,
min(created_at) as timestamp from zendesk_ticket_events where child_events like
'%"added_tags":["escalated"%' group by ticket_id ) MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/blog/_snippets/escalated-sla.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/escalated-sla.mdx) · code · 2184 bytes

### managed-accounts.mdx

Markdown document `managed-accounts.mdx`.

[`contents/blog/_snippets/managed-accounts.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/managed-accounts.mdx) · code · 1362 bytes

### opportunities-per-quarter.mdx

Markdown document `opportunities-per-quarter.mdx`.

[`contents/blog/_snippets/opportunities-per-quarter.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/opportunities-per-quarter.mdx) · code · 720 bytes

### pipeline-per-quarter.mdx

Markdown document `pipeline-per-quarter.mdx`.

[`contents/blog/_snippets/pipeline-per-quarter.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/pipeline-per-quarter.mdx) · code · 563 bytes

### revenue-lifecycle.mdx

Markdown document `revenue-lifecycle.mdx`.

[`contents/blog/_snippets/revenue-lifecycle.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/revenue-lifecycle.mdx) · code · 4369 bytes

### revenue-per-product.mdx

Markdown document `revenue-per-product.mdx`.

[`contents/blog/_snippets/revenue-per-product.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/revenue-per-product.mdx) · code · 537 bytes

### startup-cohorts.mdx

Markdown document `startup-cohorts.mdx`.

[`contents/blog/_snippets/startup-cohorts.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/startup-cohorts.mdx) · code · 485 bytes

### startup-plan.mdx

Markdown document `startup-plan.mdx`. SELECT COUNT(*) FROM stripe_customer WHERE
metadata.is_current_startup_plan_customer = 'true' AND metadata.startup_plan_label != 'YC'
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/blog/_snippets/startup-plan.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/startup-plan.mdx) · code · 166 bytes

### startup-revenue-per-customer.mdx

Markdown document `startup-revenue-per-customer.mdx`.

[`contents/blog/_snippets/startup-revenue-per-customer.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/startup-revenue-per-customer.mdx) · code · 891 bytes

### time-tickets-created.mdx

Markdown document `time-tickets-created.mdx`. with all_tickets as( select count() as
total_tickets from zendesk_tickets where created_at >= toStartOfDay(now()) - interval 6
month ) MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/blog/_snippets/time-tickets-created.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/time-tickets-created.mdx) · code · 445 bytes

### us-eu-revenue.mdx

Markdown document `us-eu-revenue.mdx`. WITH eu_customers as (select id from
postgres_billing_customer where license_id = 1), us_customers as (select id from
postgres_billing_customer where license_id = 2) MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/blog/_snippets/us-eu-revenue.mdx`](https://github.com/quirq-ai/website/blob/main/contents/blog/_snippets/us-eu-revenue.mdx) · code · 847 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
