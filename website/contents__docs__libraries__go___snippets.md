<!-- quirq-wiki-generated repo=website dir=contents/docs/libraries/go/_snippets -->

# website / contents/docs/libraries/go/_snippets

Source: [contents/docs/libraries/go/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/libraries/go/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capture.mdx

Markdown document `capture.mdx`. client.Enqueue(posthog.Capture{ DistinctId: "test-user",
Event: "test-snippet", Properties: posthog.NewProperties(). Set("plan", "Enterprise").
Set("friends", 42), }) MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/libraries/go/_snippets/capture.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/go/_snippets/capture.mdx) · code · 195 bytes

### identify.mdx

Markdown document `identify.mdx`. client.Enqueue(posthog.Identify{ DistinctId:
"distinct_id_of_your_user", Properties: posthog.NewProperties(). Set("email",
"john@doe.com"). Set("proUser", false), }) MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/libraries/go/_snippets/identify.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/go/_snippets/identify.mdx) · code · 187 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
