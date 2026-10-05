<!-- quirq-wiki-generated repo=website dir=contents/docs/libraries/react-router/_snippets -->

# website / contents/docs/libraries/react-router/_snippets

Source: [contents/docs/libraries/react-router/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/libraries/react-router/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### react-router-decision-tree.tsx

import React from 'react' import { DecisionTree } from 'components/Docs/DecisionTree' import
type { DecisionTreeQuestion, DecisionTreeRecommendation } from
'components/Docs/DecisionTree' Provides a default export as the module's public entry.

[`contents/docs/libraries/react-router/_snippets/react-router-decision-tree.tsx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/react-router/_snippets/react-router-decision-tree.tsx) · code · 2822 bytes

### step-access-posthog-methods.mdx

Markdown document `step-access-posthog-methods.mdx`. On the client-side, you can access the
PostHog client using the usePostHog hook. This hook returns the initialized PostHog client,
which you can use to call PostHog methods. For example MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/libraries/react-router/_snippets/step-access-posthog-methods.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/react-router/_snippets/step-access-posthog-methods.mdx) · code · 500 bytes

### step-env-variables.mdx

Markdown document `step-env-variables.mdx`. Add your environment variables to your
.env.local file and to your hosting provider (e.g. Vercel, Netlify, AWS). You can find your
project token and host in [your project settings](https://us.posthog.com/settings/project).
If you're using Vite, prefixing variable names with VITE_ ensures they are accessible in the
frontend. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/libraries/react-router/_snippets/step-env-variables.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/react-router/_snippets/step-env-variables.mdx) · code · 446 bytes

### step-identify-user.mdx

Markdown document `step-identify-user.mdx`. Now that you can capture basic client-side
events, you'll want to identify your user so you can associate users with captured events.
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/libraries/react-router/_snippets/step-identify-user.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/react-router/_snippets/step-identify-user.mdx) · code · 1238 bytes

### step-install-client-sdks.mdx

Markdown document `step-install-client-sdks.mdx`. First, you'll need to install [posthog-
js](https://github.com/posthog/posthog-js) and @posthog/react using your package manager.
These packages allow you to capture client-side events. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/libraries/react-router/_snippets/step-install-client-sdks.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/react-router/_snippets/step-install-client-sdks.mdx) · code · 194 bytes

### step-next-steps.mdx

Markdown document `step-next-steps.mdx`. Now that you've set up PostHog for React Router,
you can start capturing events and exceptions in your app. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/libraries/react-router/_snippets/step-next-steps.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/react-router/_snippets/step-next-steps.mdx) · code · 978 bytes

### step-verify-client-events.mdx

Markdown document `step-verify-client-events.mdx`. At this point, you should be able to
capture client-side events and see them in your PostHog project. This includes basic events
like page views and button clicks that are [autocaptured](/docs/product-
analytics/autocapture). MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/libraries/react-router/_snippets/step-verify-client-events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/react-router/_snippets/step-verify-client-events.mdx) · code · 669 bytes

### tracking-element-visibility.mdx

Markdown document `tracking-element-visibility.mdx`. The PostHogCaptureOnViewed component
enables you to automatically capture events when elements scroll into view in the browser.
This is useful for tracking impressions of important content, monitoring user engagement
with specific sections, or understanding which parts of your page users are actually seeing.
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/libraries/react-router/_snippets/tracking-element-visibility.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/react-router/_snippets/tracking-element-visibility.mdx) · code · 2136 bytes

### typeerror-section.mdx

Markdown document `typeerror-section.mdx`. If you see the error TypeError: Cannot read
properties of undefined (reading '...') this is likely because you tried to call a posthog
function when posthog was not initialized (such as during the initial render). On purpose,
we still render the children even if PostHog is not initialized so that your app still loads
even if PostHog can't load.

[`contents/docs/libraries/react-router/_snippets/typeerror-section.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/react-router/_snippets/typeerror-section.mdx) · code · 662 bytes

### usage-warning.mdx

Markdown document `usage-warning.mdx`. When using React Router, you should not directly
import posthog from posthog-js other than during initialization. Instead, use the usePostHog
hook to access the PostHog client to ensure PostHog is initialized before use. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/libraries/react-router/_snippets/usage-warning.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/react-router/_snippets/usage-warning.mdx) · code · 329 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
