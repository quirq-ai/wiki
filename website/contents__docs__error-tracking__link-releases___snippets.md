<!-- quirq-wiki-generated repo=website dir=contents/docs/error-tracking/link-releases/_snippets -->

# website / contents/docs/error-tracking/link-releases/_snippets

Source: [contents/docs/error-tracking/link-releases/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/error-tracking/link-releases/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### link-releases-platforms.tsx

import React from 'react' import List from 'components/List' import usePlatformList from
'hooks/docs/usePlatformList' Provides a default export as the module's public entry.

[`contents/docs/error-tracking/link-releases/_snippets/link-releases-platforms.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/link-releases/_snippets/link-releases-platforms.tsx) · code · 371 bytes

### release-id-app.mdx

Markdown document `release-id-app.mdx`. Your deployed app must have POSTHOG_RELEASE_ID in
its environment when it starts. The SDK reads it once, when you create the PostHog client.
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/error-tracking/link-releases/_snippets/release-id-app.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/link-releases/_snippets/release-id-app.mdx) · code · 253 bytes

### release-id-github-actions.mdx

Markdown document `release-id-github-actions.mdx`. Resolve the release in the workflow that
deploys your app to production. Resolving creates the release if it doesn't exist yet, so
skip it for pull requests, preview builds, and local development. When POSTHOG_RELEASE_ID
isn't set, the SDK sends no release ID. MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/error-tracking/link-releases/_snippets/release-id-github-actions.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/link-releases/_snippets/release-id-github-actions.mdx) · code · 2354 bytes

### release-id-manual.mdx

Markdown page “Set these from your CI secrets”. If you deploy with another CI system or a
script, resolve the release with the [PostHog CLI](/docs/error-tracking/upload-source-
maps/cli) 0.12.0 or later. Run these commands in your production deploy, from a checkout of
your repository MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/error-tracking/link-releases/_snippets/release-id-manual.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/link-releases/_snippets/release-id-manual.mdx) · code · 795 bytes

### release-id-verify.mdx

Markdown document `release-id-verify.mdx`. Deploy the app and capture a test exception. Then
open the issue in [error tracking](https://app.posthog.com/error_tracking). MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/error-tracking/link-releases/_snippets/release-id-verify.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/link-releases/_snippets/release-id-verify.mdx) · code · 293 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
