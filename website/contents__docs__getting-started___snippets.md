<!-- quirq-wiki-generated repo=website dir=contents/docs/getting-started/_snippets -->

# website / contents/docs/getting-started/_snippets

Source: [contents/docs/getting-started/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/getting-started/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### identify-user-backend.mdx

Markdown document `identify-user-backend.mdx`. client.identify({ distinctId: 'distinct_id',
properties: { name: 'Max Hedgehog', email: 'max@hedgehogmail.com', }, }) MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/getting-started/_snippets/identify-user-backend.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/getting-started/_snippets/identify-user-backend.mdx) · code · 1041 bytes

### install.mdx

Markdown document `install.mdx`. import Tab from "components/Tab" MDX page (Markdown with
JSX components), typically rendered by the docs site.

[`contents/docs/getting-started/_snippets/install.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/getting-started/_snippets/install.mdx) · code · 1016 bytes

### send-event-backend.mdx

Markdown document `send-event-backend.mdx`. client.capture({ distinctId: 'distinct_id',
event: 'order_created', properties: { order_id: '#0054', subtotal: 3599, customer_name: 'Max
Hedgehog', }, }) MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/getting-started/_snippets/send-event-backend.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/getting-started/_snippets/send-event-backend.mdx) · code · 1346 bytes

### set-person-properties.mdx

Markdown document `set-person-properties.mdx`. client.identify({ distinctId: 'distinct_id',
properties: { $set: { name: 'Max Hedgehog' email: 'max@hedgehogmail.com', }, $set_once: {
firstLogin: new Date().toISOString() } }, }) MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/getting-started/_snippets/set-person-properties.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/getting-started/_snippets/set-person-properties.mdx) · code · 1396 bytes

### user-properties-how-to-set.mdx

Markdown document `user-properties-how-to-set.mdx`. The recommended way to set person
properties is to send a $set event with a $set property. For SDKs that provide helper
methods (such as posthog.setPersonProperties), we recommend using them, as they handle
important side effects like switching to identified mode. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/getting-started/_snippets/user-properties-how-to-set.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/getting-started/_snippets/user-properties-how-to-set.mdx) · code · 4411 bytes

### user-properties-set-vs-set-once.mdx

Markdown page “name: 'Mr. Fox'”. Using set replaces any property value that may have been
set on a person profile. In contrast, set_once only sets the property if it has never been
set before. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/getting-started/_snippets/user-properties-set-vs-set-once.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/getting-started/_snippets/user-properties-set-vs-set-once.mdx) · code · 4661 bytes

### wizard.mdx

Markdown page “Frameworks and languages”.

[`contents/docs/getting-started/_snippets/wizard.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/getting-started/_snippets/wizard.mdx) · code · 1057 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
