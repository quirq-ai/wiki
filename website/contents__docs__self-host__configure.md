<!-- quirq-wiki-generated repo=website dir=contents/docs/self-host/configure -->

# website / contents/docs/self-host/configure

Source: [contents/docs/self-host/configure](https://github.com/quirq-ai/website/tree/main/contents/docs/self-host/configure) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### egress.md

Markdown page “Data egress from self-hosted instances”. In order to understand usage and
build better products, PostHog instances routinely send usage reports to our servers. In
addition, this data helps us troubleshoot when we provide support. These reports do not
contain any raw person, event, or group data — ie no identifiable or unique information from
your users, only anonymized, aggregated data.

[`contents/docs/self-host/configure/egress.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/configure/egress.md) · code · 13132 bytes

### email.md

Markdown page “Configuring email”. PostHog's core relies on email messaging for certain
functionality. For example: - Sending a reset link to a user that has forgotten their
password. - Sending an invite link for new team members to join PostHog.

[`contents/docs/self-host/configure/email.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/configure/email.md) · code · 9885 bytes

### environment-variables.md

Markdown page “Environment variables”. import Sunset from "../\_snippets/sunset-
disclaimer.mdx".

[`contents/docs/self-host/configure/environment-variables.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/configure/environment-variables.md) · code · 34680 bytes

### instance-settings.md

Markdown page “Instance settings”. import Sunset from "../\_snippets/sunset-disclaimer.mdx".

[`contents/docs/self-host/configure/instance-settings.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/configure/instance-settings.md) · code · 2927 bytes

### running-behind-proxy.md

Markdown page “Running behind a proxy”. If you're running PostHog behind a proxy, there are
a few more things you need to do to make sure PostHog works. You usually need this if
running behind a web server like Apache or NGINX, a load balancer (like ELB), or a DDoS
protection service (like Cloudflare).

[`contents/docs/self-host/configure/running-behind-proxy.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/configure/running-behind-proxy.md) · code · 5590 bytes

### securing-posthog.mdx

Markdown page “Securing PostHog”. You can restrict access to PostHog by IP by passing
ALLOWED_IP_BLOCKS. This is a comma separated list, and can either be individual IP addresses
or subnets. For example MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/self-host/configure/securing-posthog.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/configure/securing-posthog.mdx) · code · 4857 bytes

### session-replay-storage.mdx

Markdown page “Session replay storage configuration”. Note: These instructions are for self-
hosted hobby PostHog instances only. For PostHog Cloud, see the main [replay recording
retention](/docs/session-replay/data-retention) docs. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/self-host/configure/session-replay-storage.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/configure/session-replay-storage.mdx) · code · 2522 bytes

### slack.md

Markdown page “Configuring Slack”. Note - these instructions are for self-hosted PostHog
instances only. If you are using PostHog Cloud or have already configured your instance per
these instructions, check out our [general Slack Integration Docs](/docs/libraries/slack).

[`contents/docs/self-host/configure/slack.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/configure/slack.md) · code · 1376 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
