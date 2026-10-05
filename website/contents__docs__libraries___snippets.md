<!-- quirq-wiki-generated repo=website dir=contents/docs/libraries/_snippets -->

# website / contents/docs/libraries/_snippets

Source: [contents/docs/libraries/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/libraries/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### feature-flags-libs-intro.mdx

Markdown document `feature-flags-libs-intro.mdx`. PostHog's [feature flags](/docs/feature-
flags) enable you to safely deploy and roll back new features as well as target specific
users and groups with them. MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/libraries/_snippets/feature-flags-libs-intro.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/_snippets/feature-flags-libs-intro.mdx) · code · 156 bytes

### filter-screen-events-beforesend.mdx

Markdown document `filter-screen-events-beforesend.mdx`. You can stop specific screens from
being autocaptured by filtering them in your before-send hook. Return null for any $screen
event whose $screen_name matches a screen you don't want to track, and it's dropped before
being sent – keeping unwanted screen views out of your event log. MDX page (Markdown with
JSX components), typically rendered by the docs site.

[`contents/docs/libraries/_snippets/filter-screen-events-beforesend.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/_snippets/filter-screen-events-beforesend.mdx) · code · 573 bytes

### flush-intro.mdx

Markdown document `flush-intro.mdx`. You can configure how many events queue before flushing
with flushAt. Setting this to 1 will send events immediately and will use more battery. The
default is 20. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/libraries/_snippets/flush-intro.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/_snippets/flush-intro.mdx) · code · 169 bytes

### flush-manual.mdx

Markdown document `flush-manual.mdx`. You can also manually flush the queue to start sending
events immediately instead of waiting for the next batch MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/libraries/_snippets/flush-manual.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/_snippets/flush-manual.mdx) · code · 113 bytes

### flush-notes.mdx

Markdown document `flush-notes.mdx`. Flushing is best-effort and asynchronous – it starts
sending queued events in the background but doesn't wait for the request to finish, so it
isn't a delivery guarantee. MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/libraries/_snippets/flush-notes.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/_snippets/flush-notes.mdx) · code · 173 bytes

### mobile-bootstrap-behavior.mdx

Markdown document `mobile-bootstrap-behavior.mdx`. - Bootstrapped identity applies during
setup. On a fresh install, setting it before setup() means events captured synchronously
during initialization (like Application Installed) carry your distinct ID instead of the
SDK-generated UUID. - An anonymous bootstrap (isIdentifiedId: false, the default) seeds the
anonymous ID only when none is persisted yet.

[`contents/docs/libraries/_snippets/mobile-bootstrap-behavior.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/_snippets/mobile-bootstrap-behavior.mdx) · code · 1853 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
