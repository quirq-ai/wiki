<!-- quirq-wiki-generated repo=website dir=contents/docs/surveys/_snippets -->

# website / contents/docs/surveys/_snippets

Source: [contents/docs/surveys/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/surveys/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### flutter-surveys-installation.mdx

Markdown page “Step one: Add PostHog to your app”. Using it requires PostHog's Flutter SDK
version >= 5.8.0, but it's recommended to always use [the latest version](/docs/health-
checks/sdk-health). MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/surveys/_snippets/flutter-surveys-installation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/surveys/_snippets/flutter-surveys-installation.mdx) · code · 3674 bytes

### ios-surveys-installation.mdx

Markdown page “Step one: Add PostHog to your app”. Using it requires PostHog's iOS SDK
version >= 3.31.0, but it's recommended to always use [the latest version](/docs/health-
checks/sdk-health). MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/surveys/_snippets/ios-surveys-installation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/surveys/_snippets/ios-surveys-installation.mdx) · code · 2716 bytes

### onsurveysloaded-callout.md

Markdown document `onsurveysloaded-callout.md`. Important: Surveys are not immediately
available on page load. If you call renderSurvey before surveys have been initialized, the
call may fail. To avoid this, use the posthog.onSurveysLoaded(callback) method. This ensures
surveys are fully initialized before attempting to render them.

[`contents/docs/surveys/_snippets/onsurveysloaded-callout.md`](https://github.com/quirq-ai/website/blob/main/contents/docs/surveys/_snippets/onsurveysloaded-callout.md) · code · 296 bytes

### react-native-surveys-installation.mdx

Markdown page “Step one: Add PostHog to your app”. Using surveys requires PostHog's React
Native SDK version >= [4.5.0](https://github.com/PostHog/posthog-js/releases). It's
recommended to always use the latest version. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/surveys/_snippets/react-native-surveys-installation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/surveys/_snippets/react-native-surveys-installation.mdx) · code · 3820 bytes

### web-surveys-installation.mdx

Markdown document `web-surveys-installation.mdx`. Important: When installing PostHog via a
package manager, surveys require posthog-js v1.81.1+. It's recommended to install the latest
version. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/surveys/_snippets/web-surveys-installation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/surveys/_snippets/web-surveys-installation.mdx) · code · 410 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
