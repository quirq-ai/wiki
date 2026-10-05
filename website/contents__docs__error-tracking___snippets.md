<!-- quirq-wiki-generated repo=website dir=contents/docs/error-tracking/_snippets -->

# website / contents/docs/error-tracking/_snippets

Source: [contents/docs/error-tracking/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/error-tracking/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### StepVerifySymbolSetsUpload.tsx

import React from 'react' import { Step } from '../../../../src/components/Docs/Steps'
import { CallToAction } from '../../../../src/components/CallToAction' Notable exports:
`StepVerifySymbolSetsUpload`.

[`contents/docs/error-tracking/_snippets/StepVerifySymbolSetsUpload.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/_snippets/StepVerifySymbolSetsUpload.tsx) · code · 980 bytes

### before-send-hook.mdx

Markdown document `before-send-hook.mdx`. You can use the before_send callback in the
[web](/docs/libraries/js), [Node.js](/docs/libraries/node), and [React
Native](/docs/libraries/react-native) SDKs to exclude any exception events you do not wish
to capture. Do this by providing a before_send function when initializing PostHog and have
it return a falsey value for any events you want to drop.

[`contents/docs/error-tracking/_snippets/before-send-hook.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/_snippets/before-send-hook.mdx) · code · 1371 bytes

### burst-protection.mdx

Markdown document `burst-protection.mdx`. The JavaScript web and Node SDKs use burst
protection to limit the number of autocaptured exceptions that can be captured in a period.
This prevents an excessive amount of exceptions being captured from any one client,
typically because they're being thrown in an infinite loop. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/error-tracking/_snippets/burst-protection.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/_snippets/burst-protection.mdx) · code · 1190 bytes

### exception-properties-table.mdx

Markdown document `exception-properties-table.mdx`. | Name | Key | Example value |
|-----------|------|-------------| | $exception_list | List | A list of exceptions that
occurred. In languages that support chained exceptions, the list will contain multiple
items.

[`contents/docs/error-tracking/_snippets/exception-properties-table.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/_snippets/exception-properties-table.mdx) · code · 1465 bytes

### merging-issues.mdx

Markdown document `merging-issues.mdx`. You can merge issues representing the same problem
from the issue list by MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/error-tracking/_snippets/merging-issues.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/_snippets/merging-issues.mdx) · code · 665 bytes

### nextjs-upload-source-maps.mdx

Markdown page “1. Install package”. We provide a helper package that will hook into the
Next.js build process and upload source maps for your client and server code. This process
is enabled by default for production builds but you can disable it by setting enabled to
false in the sourcemaps object. MDX page (Markdown with JSX components), typically rendered
by the docs site.

[`contents/docs/error-tracking/_snippets/nextjs-upload-source-maps.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/_snippets/nextjs-upload-source-maps.mdx) · code · 1970 bytes

### suppression-rules.mdx

Markdown document `suppression-rules.mdx`. [Suppression
rules](https://app.posthog.com/error_tracking/configuration#selectedSetting=error-tracking-
suppression-rules) drop matching future exceptions before they are ingested as $exception
events, so they can reduce your bill.

[`contents/docs/error-tracking/_snippets/suppression-rules.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/_snippets/suppression-rules.mdx) · code · 874 bytes

### upload-symbol-sets-platforms.tsx

import React from 'react' import List from 'components/List' Provides a default export as
the module's public entry.

[`contents/docs/error-tracking/_snippets/upload-symbol-sets-platforms.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/error-tracking/_snippets/upload-symbol-sets-platforms.tsx) · code · 4424 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
