<!-- quirq-wiki-generated repo=website dir=contents/tutorials -->

# website / contents/tutorials

Source: [contents/tutorials](https://github.com/quirq-ai/website/tree/main/contents/tutorials) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### aa-testing.md

Markdown page “How to do A/A testing”. An A/A test is the same as an [A/B
test](/docs/experiments) except both groups receive the same code or components. Since both
groups get identical functionality, the goal is to not see a statistical difference between
the variants by the end of the experiment.

[`contents/tutorials/aa-testing.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/aa-testing.md) · code · 5368 bytes

### abn-testing.md

Markdown page “How to set up A/B/n testing”. A/B/n testing is like an A/B test where you
compare multiple (n) variants instead of just two. It can be especially useful for small but
impactful changes where many options are available like copy, styles, or pages.

[`contents/tutorials/abn-testing.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/abn-testing.md) · code · 4809 bytes

### analyze-surveys-with-chatgpt.md

Markdown page “How to analyze surveys with ChatGPT”. Surveys are a great way of collecting
feedback from your users, especially if you ask your users like "How can we improve our
product?". However, they can be hard to analyze if you receive hundreds or more answers.
Fortunately, [OpenAI's ChatGPT](https://openai.com/chatgpt) is great at doing this.

[`contents/tutorials/analyze-surveys-with-chatgpt.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/analyze-surveys-with-chatgpt.md) · code · 15755 bytes

### android-ab-tests.md

Markdown page “How to run A/B tests in Android”. [A/B tests](/experiments) enables you to
compare the impact of your changes on key metrics.

[`contents/tutorials/android-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/android-ab-tests.md) · code · 10834 bytes

### android-analytics.md

Markdown page “How to set up analytics in Android”.

[`contents/tutorials/android-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/android-analytics.md) · code · 17484 bytes

### android-feature-flags.md

Markdown page “How to set up feature flags in Android”.

[`contents/tutorials/android-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/android-feature-flags.md) · code · 9764 bytes

### android-remote-config.md

Markdown page “How to set up Android remote config”. [Remote config](/docs/feature-
flags/remote-config) enables you to update your Android app's settings and behavior
instantly without deploying new code or waiting for app store approval. This helps you
control features access on the fly and disable them instantly if needed.

[`contents/tutorials/android-remote-config.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/android-remote-config.md) · code · 6631 bytes

### android-session-replay.md

Markdown page “How to set up Android session replay”. [Session replay](/session-replay) is a
useful support tool for understanding how users are interacting with your Android app. It
also helps you debug and recreate issues. To show how you to set it up with PostHog, this
tutorial shows you how to create a basic Kotlin app, add PostHog, and [enable session
recordings](/docs/session-replay/mobile#android).

[`contents/tutorials/android-session-replay.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/android-session-replay.md) · code · 10302 bytes

### angular-ab-tests.md

Markdown page “How to set up A/B tests in Angular”. import { ProductScreenshot } from
'components/ProductScreenshot' export const EventsInPostHogLight = "https://res.cloudinary.c
om/dmukukwp6/image/upload/posthog.com/contents/images/tutorials/angular-ab-tests/events-
light.png" export const EventsInPostHogDark = "https://res.cloudinary.com/dmukukwp6/image/up
load/posthog.com/contents/images/tutorials/angular-ab-tests/events-dark.png".

[`contents/tutorials/angular-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/angular-ab-tests.md) · code · 7235 bytes

### angular-analytics.md

Markdown page “How to set up Angular analytics, feature flags, and more”. Angular is one of
the original JavaScript web app frameworks and remains a popular choice for building them.
To make your Angular app as good as possible, you need tools like [analytics](/docs/product-
analytics), [session replay](/docs/session-replay), and [feature flags](/docs/feature-
flags). PostHog provides these tools and is easy to set up in Angular.

[`contents/tutorials/angular-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/angular-analytics.md) · code · 8540 bytes

### angular-surveys.md

Markdown page “How to set up surveys in Angular”.

[`contents/tutorials/angular-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/angular-surveys.md) · code · 18006 bytes

### anthropic-analytics.md

Markdown page “How to set up AI Observability for Anthropic's Claude”. Tracking your Claude
usage, costs, and latency is crucial to understanding how your users are interacting with
your AI and LLM-powered features.

[`contents/tutorials/anthropic-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/anthropic-analytics.md) · code · 7549 bytes

### api-capture-events.mdx

Markdown page “Using the PostHog API to capture events”. export const apiEventsLight = "http
s://res.cloudinary.com/dmukukwp6/image/upload/w_1600,c_limit,q_auto,f_auto/view_event_light_
30a37c70a8.png" export const apiEventsDark = "https://res.cloudinary.com/dmukukwp6/image/upl
oad/w_1600,c_limit,q_auto,f_auto/view_event_dark_97fe1d29d5.png" MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/tutorials/api-capture-events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/api-capture-events.mdx) · code · 21422 bytes

### api-feature-flags.md

Markdown page “How to evaluate and update feature flags with the PostHog API”. Like
[capturing events](/tutorials/api-capture-events), feature flags get a special POST-only
public endpoint in the PostHog API, /flags/. There are also endpoints to get data from,
update this data, and more.

[`contents/tutorials/api-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/api-feature-flags.md) · code · 11735 bytes

### api-get-insights-persons.mdx

Markdown page “How to use the PostHog API to get insights and persons”.

[`contents/tutorials/api-get-insights-persons.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/api-get-insights-persons.mdx) · code · 11121 bytes

### array-filter-breakdown.md

Markdown page “How to filter and breakdown arrays with SQL”. Arrays (AKA lists) are a useful
way to store multiple values related to each other under the same key. Although arrays can
be a bit tricky to utilize with standard PostHog filters, [SQL
expressions](/docs/sql/expressions) unlock the ability to make full use of them.

[`contents/tutorials/array-filter-breakdown.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/array-filter-breakdown.md) · code · 5419 bytes

### astro-ab-tests.md

Markdown page “How to set up A/B tests in Astro”. import { ProductScreenshot } from
'components/ProductScreenshot' export const EventsInPostHogLight = "https://res.cloudinary.c
om/dmukukwp6/image/upload/posthog.com/contents/images/tutorials/astro-ab-tests/events-
light.png" export const EventsInPostHogDark = "https://res.cloudinary.com/dmukukwp6/image/up
load/posthog.com/contents/images/tutorials/astro-ab-tests/events-dark.png".

[`contents/tutorials/astro-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/astro-ab-tests.md) · code · 15226 bytes

### astro-analytics.md

Markdown page “How to set up Astro analytics, feature flags, and more”.
[Astro](https://astro.build/) is a frontend JavaScript framework focused on performance and
simplifying the creation of content-based sites. It has seen a rapid increase in interest
and usage since its release in 2022.

[`contents/tutorials/astro-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/astro-analytics.md) · code · 17897 bytes

### astro-surveys.md

Markdown page “How to set up surveys in Astro”.

[`contents/tutorials/astro-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/astro-surveys.md) · code · 19899 bytes

### beta-feedback.md

Markdown page “How to collect feedback from beta users”. The goal of a beta is to get a
feature ready for release. This means improving what works well and fixing what doesn't.
Using surveys to collect feedback from your users is an easy and scalable way to do this.

[`contents/tutorials/beta-feedback.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/beta-feedback.md) · code · 5930 bytes

### bootstrap-feature-flags-react.md

Markdown page “How to bootstrap feature flags in React and Express”. Bootstrapping feature
flags makes them available as soon as React and PostHog load on the client side. This
enables use cases like routing to different pages on load, all feature flagged content being
available on first load, and visual consistency.

[`contents/tutorials/bootstrap-feature-flags-react.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/bootstrap-feature-flags-react.md) · code · 14902 bytes

### bounce-rate.md

Markdown page “How to calculate bounce rate”. Bounce rate is the percentage of users who
visit a page and then leave without taking any further actions. It is a popular marketing
metric showing the relevance and engagement of content for site visitors. This tutorial
shows you how to calculate bounce rate in PostHog.

[`contents/tutorials/bounce-rate.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/bounce-rate.md) · code · 6127 bytes

### broken-link-checker.md

Markdown page “How to create a broken link (404) checker”. Broken links and 404s are
frustrating for users. Without a way to check for them, you might not realize they exist and
can’t fix them.

[`contents/tutorials/broken-link-checker.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/broken-link-checker.md) · code · 4803 bytes

### browser-ios-identification.mdx

Markdown page “How to track user flows from web to iOS”. If you use PostHog on both web and
iOS apps, you can track user activity across them. When a user is authenticated on both web
and mobile, their events are automatically associated by identifying them through the same
account. We cover identifying users in-depth in the [identifying users
documentation](/docs/product-analytics/identify).

[`contents/tutorials/browser-ios-identification.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/browser-ios-identification.mdx) · code · 7239 bytes

### bubble-ab-tests.md

Markdown page “How to run A/B tests in Bubble”.

[`contents/tutorials/bubble-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/bubble-ab-tests.md) · code · 7785 bytes

### bubble-analytics.md

Markdown page “How to set up Bubble analytics, session replays, and more”.

[`contents/tutorials/bubble-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/bubble-analytics.md) · code · 7515 bytes

### bubble-surveys.md

Markdown page “How to create surveys in Bubble”.

[`contents/tutorials/bubble-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/bubble-surveys.md) · code · 4848 bytes

### build-site-app.md

Markdown page “How to build a site app”. Site apps make it quick and easy to add features
such as forms and banners to your site through our JavaScript library. This enables you to
do things like capture feedback, add notifications, provide support, and more. These apps
can then capture data for analysis in PostHog. You can learn.

[`contents/tutorials/build-site-app.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/build-site-app.md) · code · 10046 bytes

### build-your-own-posthog-app.md

Markdown page “How to build your own app in PostHog”. Estimated reading time: 10 minutes
☕☕☕.

[`contents/tutorials/build-your-own-posthog-app.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/build-your-own-posthog-app.md) · code · 11370 bytes

### calendly-webhooks.md

Markdown page “How to capture events from Calendly webhooks”. Webhooks enable you to send
data from one platform to another when an event happens. This enables you to run workflows
and code to handle those events.

[`contents/tutorials/calendly-webhooks.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/calendly-webhooks.md) · code · 4914 bytes

### carrd-analytics.md

Markdown page “How to set up Carrd analytics, session replay, and more”.
[Carrd](https://carrd.co/) is a popular simple site builder. It makes building one page
websites like profiles, portfolios, and landing pages a breeze.

[`contents/tutorials/carrd-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/carrd-analytics.md) · code · 3350 bytes

### churn-rate.mdx

Markdown page “How to calculate and lower churn rate with PostHog”. export const
retentionChartLight = "https://res.cloudinary.com/dmukukwp6/image/upload/v1710055416/posthog
.com/contents/images/tutorials/churn-rate/retention-chart-light-mode.png" export const
retentionChartDark = "https://res.cloudinary.com/dmukukwp6/image/upload/v1710055416/posthog.

[`contents/tutorials/churn-rate.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/churn-rate.mdx) · code · 8684 bytes

### cohere-analytics.md

Markdown page “How to set up AI Observability for Cohere”. Tracking your Cohere usage,
costs, and latency is crucial to understanding how your users are interacting with your AI
and LLM-powered features. In this tutorial, we show you how to monitor important metrics
such as.

[`contents/tutorials/cohere-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/cohere-analytics.md) · code · 7648 bytes

### complete-workflows-guide.md

Markdown page “A complete guide to Workflows: Emails, i18n, push notifications, webhooks,
and more”. [Workflows](/workflows) lets you trigger actions directly from your product data
– things like sending emails, calling webhooks, or updating user properties when something
happens in your app.

[`contents/tutorials/complete-workflows-guide.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/complete-workflows-guide.md) · code · 7658 bytes

### cookieless-tracking.md

Markdown page “How to do cookieless tracking with PostHog”. Normally, PostHog stores some
information about the user in their browser using a cookie. This approach is typical for
analytics tools and enables user tracking across sessions, caching feature flag data, and
more.

[`contents/tutorials/cookieless-tracking.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/cookieless-tracking.md) · code · 6735 bytes

### cross-domain-tracking.md

Markdown page “How to set up cross-domain tracking in PostHog”. Using multiple website
domains or subdomains is a common way to split up a product. For example, a company might
have a marketing website, a web app, and documentation, each with their own subdomain.

[`contents/tutorials/cross-domain-tracking.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/cross-domain-tracking.md) · code · 11566 bytes

### css-selectors-for-actions.mdx

Markdown page “Creating actions using CSS selectors”.

[`contents/tutorials/css-selectors-for-actions.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/css-selectors-for-actions.mdx) · code · 11746 bytes

### csv-query.md

Markdown page “How to query a CSV in PostHog”. PostHog can capture a lot of data about your
users. For data it can't capture, you can leverage the [data warehouse](/data-warehouse) to
manually upload any data you'd like as a CSV.

[`contents/tutorials/csv-query.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/csv-query.md) · code · 7379 bytes

### dau-mau-ratio.md

Markdown page “How to calculate DAU/MAU ratio”. The ratio of daily active users over monthly
active users, or DAU/MAU ratio, is a popular engagement metric measuring stickiness. It
shows what percentage of your users are active and use your product every day.

[`contents/tutorials/dau-mau-ratio.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/dau-mau-ratio.md) · code · 7589 bytes

### deskhog-claude-tutorial.md

Markdown page “How to vibe-code a game with DeskHog using Claude Code”. [DeskHog](/deskhog)
is an open-source developer toy for building your own apps and games from scratch. It’s not
just for experienced developers either — AI coding agents like Claude Code enable anyone to
start building apps using natural language.

[`contents/tutorials/deskhog-claude-tutorial.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/deskhog-claude-tutorial.md) · code · 9196 bytes

### deskhog-cursor-tutorial.md

Markdown page “How to vibe-code a game with DeskHog and Cursor”. Unfortunately, since
writing this the process for integrating Cursor and PlatformIO has changed and users can no
longer directly install PlatformIO within Cursor.

[`contents/tutorials/deskhog-cursor-tutorial.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/deskhog-cursor-tutorial.md) · code · 11159 bytes

### django-ab-tests.md

Markdown page “How to set up A/B tests in Django”.

[`contents/tutorials/django-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/django-ab-tests.md) · code · 8056 bytes

### django-analytics.md

Markdown page “Setting up Django analytics, feature flags, and more”. Django is a popular
Python web framework. It’s used by thousands of teams and developers around the world,
including PostHog, to build apps, websites, APIs, and more.

[`contents/tutorials/django-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/django-analytics.md) · code · 18227 bytes

### dotnet-analytics.md

Markdown page “How to set up .NET analytics”. .NET is one of the most powerful and diverse
programming platforms. It used to build web apps, microservices, mobile apps, and even
games.

[`contents/tutorials/dotnet-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/dotnet-analytics.md) · code · 5423 bytes

### electron-analytics.mdx

Markdown page “How to set up Electron analytics and session replay”. Electron enables you to
easily create cross-platform desktop apps. Knowing how users are using those apps is the job
of analytics, which PostHog makes easy. MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/tutorials/electron-analytics.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/electron-analytics.mdx) · code · 5040 bytes

### embedded-analytics.md

Markdown page “How to set up embedded analytics”. If you're building a B2B2C product, *your
users* might want analytics about *their users*. You can provide this with embedded
analytics (AKA customer-facing analytics), events you capture and then display for them.

[`contents/tutorials/embedded-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/embedded-analytics.md) · code · 16018 bytes

### evaluation-runtimes-and-contexts.md

Markdown page “How to use evaluation runtimes and contexts together for fine-grained flag
control”. Evaluation runtimes and evaluation contexts are two complementary features that
give you precise control over where and when your feature flags evaluate. This guide shows
practical examples of using them together effectively.

[`contents/tutorials/evaluation-runtimes-and-contexts.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/evaluation-runtimes-and-contexts.md) · code · 7399 bytes

### event-tracking-guide.md

Markdown page “Complete guide to event tracking”. Event tracking is the first step in
improving your product. It enables you to understand how users are interacting with your app
by capturing interaction and behavioral data. This helps you figure out how best to improve
it.

[`contents/tutorials/event-tracking-guide.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/event-tracking-guide.md) · code · 12334 bytes

### explore-insights-session-recordings.md

Markdown page “How to use session replays to get a deeper understanding of user behavior”.
One of the biggest benefits of PostHog is the connections from all your product data and
tools being in one place. You don’t need to link together multiple products, find ways to
connect the right data, and hop between them to create insights. PostHog builds in these
links.

[`contents/tutorials/explore-insights-session-recordings.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/explore-insights-session-recordings.md) · code · 6396 bytes

### fake-door-test.md

Markdown page “How to run a fake door test”. A fake door test is when you create a "fake" UI
or experience for a product or feature you are thinking of building. When users interact
with it, you tell them it isn't available (yet). This enables you determine if your users
would actually be interested in your new feature.

[`contents/tutorials/fake-door-test.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/fake-door-test.md) · code · 6066 bytes

### feature-flag-slack-notifications.md

Markdown page “How to get Slack notifications when Feature Flags change”. When you're
managing Feature Flags across a team, it's important to know when flags are created,
updated, or deleted. PostHog's [Activity Logs](/docs/settings/activity-logs) track these
changes, and you can use a custom [Data Pipelines](/docs/cdp/destinations) destination to
forward them to Slack in real time.

[`contents/tutorials/feature-flag-slack-notifications.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/feature-flag-slack-notifications.md) · code · 13734 bytes

### feature-retention.md

Markdown page “How to discover features that drive user retention”. Every company wants to
build a product that keeps users coming back. Returning and reoccurring users are often your
best ones. Many teams focus on improving user retention metrics, like weekly active users or
customer retention. Retention is also an excellent way to [measure your product-market
fit](/founders/measure-product-market-fit).

[`contents/tutorials/feature-retention.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/feature-retention.md) · code · 6924 bytes

### feedback-interviews-site-apps.mdx

Markdown page “Get feedback and book user interviews with surveys”.

[`contents/tutorials/feedback-interviews-site-apps.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/feedback-interviews-site-apps.mdx) · code · 5839 bytes

### fewer-unwanted-events.md

Markdown page “How to capture fewer unwanted events”. Estimated reading time: 5 minutes ☕.

[`contents/tutorials/fewer-unwanted-events.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/fewer-unwanted-events.md) · code · 7992 bytes

### filter-internal-users.mdx

Markdown page “How to filter out internal users”.

[`contents/tutorials/filter-internal-users.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/filter-internal-users.mdx) · code · 7493 bytes

### filter-session-recordings.mdx

Markdown page “How to use filters + session replays to understand user friction”.

[`contents/tutorials/filter-session-recordings.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/filter-session-recordings.mdx) · code · 9111 bytes

### first-last-touch-attribution.mdx

Markdown page “How to analyze first and last touch attribution”.

[`contents/tutorials/first-last-touch-attribution.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/first-last-touch-attribution.mdx) · code · 6739 bytes

### flags-adblock-prevention.md

Markdown page “How to prevent feature flags from being blocked”. Ad blockers can
occasionally interfere with feature flag functionality by blocking requests to PostHog. This
guide explains what steps you can take to ensure your feature flags are not affected.

[`contents/tutorials/flags-adblock-prevention.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/flags-adblock-prevention.md) · code · 3668 bytes

### flutter-ab-tests.md

Markdown page “How to set up A/B tests in Flutter”. import { ProductScreenshot } from
'components/ProductScreenshot' export const EventsInPostHogLight = "https://res.cloudinary.c
om/dmukukwp6/image/upload/posthog.com/contents/images/tutorials/flutter-ab-tests/events-
light.png" export const EventsInPostHogDark = "https://res.cloudinary.com/dmukukwp6/image/up
load/posthog.com/contents/images/tutorials/flutter-ab-tests/events-dark.png".

[`contents/tutorials/flutter-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/flutter-ab-tests.md) · code · 13085 bytes

### flutter-analytics.md

Markdown page “How to set up analytics in Flutter”.

[`contents/tutorials/flutter-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/flutter-analytics.md) · code · 18839 bytes

### flutter-feature-flags.md

Markdown page “How to set up feature flags in Flutter”.

[`contents/tutorials/flutter-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/flutter-feature-flags.md) · code · 11119 bytes

### flutter-remote-config.md

Markdown page “How to set up Flutter remote config”. [Remote config](/docs/feature-
flags/remote-config) enables you to update your Flutter app's settings and behavior
instantly without deploying new code or waiting for app store approval. This makes it
perfect for controlling features on the fly and disabling problematic features if needed.

[`contents/tutorials/flutter-remote-config.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/flutter-remote-config.md) · code · 11911 bytes

### framer-ab-tests.md

Markdown page “How to run A/B tests in Framer”. [Framer](https://www.framer.com/) is a great
tool for building marketing websites. However, sometimes you may be unsure if a change will
actually improve your conversion rate. This is where [A/B testing](/experiments) is helpful.
It enables you to test and compare your changes to systemically improve your site.

[`contents/tutorials/framer-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/framer-ab-tests.md) · code · 6517 bytes

### framer-analytics.md

Markdown page “How to set up Framer analytics, session replay, and more”.
[Framer](https://www.framer.com/) is a popular no-code site builder that makes it easy to
design a stylish website.

[`contents/tutorials/framer-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/framer-analytics.md) · code · 8810 bytes

### framer-surveys.md

Markdown page “How to create surveys in Framer”. Surveys are a great way to conduct market
research and collect qualitative data from your users. This tutorial shows you how to do
exactly that by using PostHog on your [Framer](https://framer.com/) website.

[`contents/tutorials/framer-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/framer-surveys.md) · code · 4234 bytes

### frontend-vs-backend-group-analytics.md

Markdown page “Understanding group analytics: frontend vs backend implementations”. Group
analytics is a powerful feature for understanding how groups such as organizations,
customers, and companies use your product as a unit. It provides a new level of analysis
between individual users and all your users.

[`contents/tutorials/frontend-vs-backend-group-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/frontend-vs-backend-group-analytics.md) · code · 6015 bytes

### ghost-analytics.mdx

Markdown page “How to setup Ghost analytics and session replay”. import Snippet from
"../docs/integrate/snippet.mdx" MDX page (Markdown with JSX components), typically rendered
by the docs site.

[`contents/tutorials/ghost-analytics.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/ghost-analytics.mdx) · code · 2772 bytes

### github-star-tracker.md

Markdown page “How to track GitHub stars in PostHog”. GitHub stars are a popular way to
track the success of open-sourced projects. Beyond seeing how many stars a repo has, GitHub
does little to help you track or analyze these stars.

[`contents/tutorials/github-star-tracker.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/github-star-tracker.md) · code · 3906 bytes

### go-ab-tests.md

Markdown page “How to set up A/B tests in Go”.

[`contents/tutorials/go-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/go-ab-tests.md) · code · 7812 bytes

### go-analytics.md

Markdown page “How to set up analytics in Go”.

[`contents/tutorials/go-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/go-analytics.md) · code · 12101 bytes

### go-feature-flags.md

Markdown page “How to set up feature flags in Go”. [Feature flags](/docs/feature-flags) are
a critical part of delivering code safely. This tutorial shows you how to use them in Go
(Golang). We'll create a basic HTTP server, add PostHog, create a feature flag, and
implement it in our app to change the response content.

[`contents/tutorials/go-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/go-feature-flags.md) · code · 6689 bytes

### google-ads-reports.md

Markdown page “How to set up Google Ads reports”. Understanding your ad spend and return on
that spend is core to creating successful marketing campaigns. Two important sources of data
for this are Google Ads and PostHog. With our [data warehouse](/docs/data-warehouse), you
can link and analyze them together.

[`contents/tutorials/google-ads-reports.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/google-ads-reports.md) · code · 10010 bytes

### hash-based-routing.md

Markdown page “How to capture paths from hash-based routing”. Hash-based routing is a common
way to manage navigation in single-page applications (SPAs) using the URL hash. This
tutorial shows you how to set up PostHog to work with hash-based routing, ensuring that
pageviews and events are tracked correctly.

[`contents/tutorials/hash-based-routing.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/hash-based-routing.md) · code · 2114 bytes

### hogql-autocapture.md

Markdown page “How to analyze autocapture events with SQL”.
[Autocapture](/docs/data/autocapture) is a powerful way to capture usage data without having
to implement any tracking yourself. [SQL](/docs/data-warehouse/sql) unlocks more of that
data for analysis. In this tutorial, we go over examples of how you can use SQL to analyze
autocapture events.

[`contents/tutorials/hogql-autocapture.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/hogql-autocapture.md) · code · 4830 bytes

### hogql-breakdowns.mdx

Markdown page “Using SQL for advanced breakdowns”. export const MultiDark = 'https://res.clo
udinary.com/dmukukwp6/image/upload/posthog.com/contents/images/tutorials/hogql-
breakdowns/multi-dark.png' export const MultiLight = 'https://res.cloudinary.com/dmukukwp6/i
mage/upload/posthog.com/contents/images/tutorials/hogql-breakdowns/multi-light.png' MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/tutorials/hogql-breakdowns.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/hogql-breakdowns.mdx) · code · 6885 bytes

### hogql-date-time-filters.md

Markdown page “Using SQL for advanced time and date filters”. Since there are infinite ways
to break down time, there are infinite ways to filter based on time. SQL unlocks more of
these in PostHog, and in this tutorial we'll go through examples of how to use do that.

[`contents/tutorials/hogql-date-time-filters.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/hogql-date-time-filters.md) · code · 6234 bytes

### hogql-sum-aggregation.md

Markdown page “The power of SQL’s sum() aggregation”. PostHog provides multiple options for
aggregating data series including total count, count per user, unique sessions, property
values, and more. SQL unlocks a new level of aggregation customization, enabling you to use
[expressions](/docs/sql/expressions) to aggregate your data however you want. To showcase
this, this tutorial goes over one of the most powerful aggregations: sum().

[`contents/tutorials/hogql-sum-aggregation.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/hogql-sum-aggregation.md) · code · 5007 bytes

### holdout-testing.md

Markdown page “How to do holdout testing”. Holdout testing is a type of [A/B
testing](/docs/experiments) that measures the long term effects of product changes. In
holdout testing, a small group of users is not shown your changes for a long period of time,
typically weeks or months after your experiment ends.

[`contents/tutorials/holdout-testing.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/holdout-testing.md) · code · 4841 bytes

### how-to-capture-events-the-easy-way.md

Markdown page “How to create an action using the PostHog toolbar”. Estimated reading time: 6
minutes ☕☕.

[`contents/tutorials/how-to-capture-events-the-easy-way.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/how-to-capture-events-the-easy-way.md) · code · 6476 bytes

### how-to-connect-discord-to-posthog-with-zapier.md

Markdown page “How to trigger Discord notifications when an action is detected in PostHog”.
- *Level:* Easy 🦔 - *Estimated reading time:* 5 minutes ☕️.

[`contents/tutorials/how-to-connect-discord-to-posthog-with-zapier.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/how-to-connect-discord-to-posthog-with-zapier.md) · code · 4446 bytes

### how-to-connect-posthog-and-insforge.md

Markdown page “How to connect PostHog and InsForge”. [InsForge](https://insforge.dev) is a
backend-as-a-service for AI-built apps. This tutorial walks you through linking a PostHog
project from the InsForge dashboard, using the embedded analytics views, and sending events
from your app with the PostHog SDK.

[`contents/tutorials/how-to-connect-posthog-and-insforge.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/how-to-connect-posthog-and-insforge.md) · code · 3727 bytes

### how-to-connect-posthog-and-notion-with-zapier.md

Markdown page “How to automatically organize PostHog actions in Notion”. - *Level:* Easy 🦔 -
*Estimated reading time:* 5 minutes ☕️.

[`contents/tutorials/how-to-connect-posthog-and-notion-with-zapier.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/how-to-connect-posthog-and-notion-with-zapier.md) · code · 4463 bytes

### how-to-embed-shared-dashboard.mdx

Markdown page “How to embed a shared Dashboard within a web page”. _Estimated reading time:
3 minutes_ ☕ MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/tutorials/how-to-embed-shared-dashboard.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/how-to-embed-shared-dashboard.mdx) · code · 3606 bytes

### how-to-rename-events.mdx

Markdown page “How to rename events”. Estimated reading time: 3 minutes ☕☕ MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/tutorials/how-to-rename-events.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/how-to-rename-events.mdx) · code · 3198 bytes

### hubspot-reports.md

Markdown page “How to set up Hubspot reports”. Creating and analyzing reports of Hubspot
data along with product data helps you better understand your customers and close more
deals.

[`contents/tutorials/hubspot-reports.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/hubspot-reports.md) · code · 6012 bytes

### identifying-users-guide.md

Markdown page “An introductory guide to identifying users in PostHog”. To understand your
product’s usage, you must know who did what. Many of the most valuable insights require an
accurate understanding of the user using your product. To make sure user data and events are
as accurate as possible, it is critical to identify users properly.

[`contents/tutorials/identifying-users-guide.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/identifying-users-guide.md) · code · 5775 bytes

### intercom-session-replays.md

Markdown page “How to add session replays to Intercom”. [Session replays](/session-replay)
are a useful support tool for debugging and recreating issues. The errors, console, and
network data along with the rest of PostHog's tools make it a powerful support platform.

[`contents/tutorials/intercom-session-replays.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/intercom-session-replays.md) · code · 11088 bytes

### ios-ab-tests.md

Markdown page “How to run A/B tests in iOS”. [A/B tests](/experiments) help you make your
iOS app better by comparing the impact of changes on key metrics.

[`contents/tutorials/ios-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/ios-ab-tests.md) · code · 8405 bytes

### ios-analytics.md

Markdown page “How to set up analytics in iOS”.

[`contents/tutorials/ios-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/ios-analytics.md) · code · 12109 bytes

### ios-feature-flags.md

Markdown page “How to set up feature flags in iOS”.

[`contents/tutorials/ios-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/ios-feature-flags.md) · code · 7432 bytes

### ios-remote-config.md

Markdown page “How to set up iOS remote config”. [Remote config](/docs/feature-flags/remote-
config) enables you to update your iOS app's settings and behavior instantly without
deploying new code or waiting for App Store approval. This helps you control features access
on the fly and disable them instantly if needed.

[`contents/tutorials/ios-remote-config.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/ios-remote-config.md) · code · 5054 bytes

### ios-session-replay.md

Markdown page “How to set up iOS session replay”. [Session replay](/session-replay) is a
useful support tool for understanding how users are interacting with your iOS app. It also
helps you debug and recreate issues.

[`contents/tutorials/ios-session-replay.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/ios-session-replay.md) · code · 11186 bytes

### laravel-ab-tests.md

Markdown page “How to set up A/B tests in Laravel”.

[`contents/tutorials/laravel-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/laravel-ab-tests.md) · code · 7501 bytes

### laravel-analytics.md

Markdown page “How to set up analytics in Laravel”.

[`contents/tutorials/laravel-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/laravel-analytics.md) · code · 11025 bytes

### laravel-feature-flags.md

Markdown page “How to set up feature flags in Laravel”.

[`contents/tutorials/laravel-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/laravel-feature-flags.md) · code · 7879 bytes

### limit-session-recordings.mdx

Markdown page “How to only record the sessions you want”.

[`contents/tutorials/limit-session-recordings.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/limit-session-recordings.mdx) · code · 7743 bytes

### llm-ab-tests.md

Markdown page “How to A/B test LLM models and prompts”. A/B tests enable you to compare how
changes to LLM models and prompts affect your app. In this tutorial, we'll show you how to
set one up to effectively evaluate your LLM improvements.

[`contents/tutorials/llm-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/llm-ab-tests.md) · code · 12240 bytes

### location-based-banner.md

Markdown page “How to set up a location-based site banner”. Many sites want to set up
banners to display information for different users, such as regional announcements or
country-based alerts. Doing this with [feature flags](/docs/feature-flags) is simple and
this tutorial shows you how to set it up for a Next.js app (but it can be done with any
framework).

[`contents/tutorials/location-based-banner.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/location-based-banner.md) · code · 6154 bytes

### mcp-analytics.mdx

Markdown page “How to set up MCP analytics and error tracking”. import { CalloutBox } from
'components/Docs/CalloutBox' import WizardCommand from 'components/WizardCommand' MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/tutorials/mcp-analytics.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/mcp-analytics.mdx) · code · 22391 bytes

### monitor-llama-index-with-langfuse.md

Markdown page “How to monitor LlamaIndex apps with Langfuse and PostHog”.
[LlamaIndex](https://www.llamaindex.ai/) is a powerful framework for connecting LLMs with
external data sources. By combining PostHog with [Langfuse](https://langfuse.com/), an [open
source AI Observability platform](/blog/best-open-source-llm-observability-tools), you can
easily monitor your LLM app.

[`contents/tutorials/monitor-llama-index-with-langfuse.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/monitor-llama-index-with-langfuse.md) · code · 8426 bytes

### multiple-environments.md

Markdown page “>-”. import {ProductScreenshot} from 'components/ProductScreenshot' import
{ProductVideo} from 'components/ProductVideo'.

[`contents/tutorials/multiple-environments.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/multiple-environments.md) · code · 9178 bytes

### new-user-experiments.md

Markdown page “Running experiments on new users”. - Level: Medium 🦔🦔 - Estimated reading
time: 10 minutes ☕️☕️.

[`contents/tutorials/new-user-experiments.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/new-user-experiments.md) · code · 8433 bytes

### next-steps-after-installing.md

Markdown page “What to do after installing PostHog in 5 steps”. You created a PostHog
account and installed it on your site, but what’s next? This tutorial goes over what to do
after signing up and installing PostHog (we are assuming you’ve done both).

[`contents/tutorials/next-steps-after-installing.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/next-steps-after-installing.md) · code · 10384 bytes

### nextjs-ab-tests.md

Markdown page “How to set up Next.js A/B tests”. [A/B tests](/experiments) are a way to make
sure the content of your Next.js app performs as well as possible. They compare two or more
variations on their impact on a goal.

[`contents/tutorials/nextjs-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nextjs-ab-tests.md) · code · 10489 bytes

### nextjs-analytics.md

Markdown page “How to set up Next.js analytics, feature flags, and more”. Next.js is one of
the most popular frameworks for building web apps. Have one and need to know what users are
doing in these apps or release a feature safely? PostHog can help.

[`contents/tutorials/nextjs-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nextjs-analytics.md) · code · 9983 bytes

### nextjs-bootstrap-flags.md

Markdown page “How to use Next.js middleware to bootstrap feature flags”. [Next.js
middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
enables you to run functions between requests and responses. We can use this to [bootstrap
Feature Flags](/docs/feature-flags/bootstrapping) on page load and make them available
immediately without making an additional request.

[`contents/tutorials/nextjs-bootstrap-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nextjs-bootstrap-flags.md) · code · 9755 bytes

### nextjs-cookie-banner.md

Markdown page “Building a Next.js cookie consent banner”. To ensure compliance with privacy
regulations like GDPR, you may need to ask for consent from users to track them using
cookies. PostHog enables you to track users with or without cookies, but you need to set up
the logic to ensure you are compliant both ways.

[`contents/tutorials/nextjs-cookie-banner.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nextjs-cookie-banner.md) · code · 6187 bytes

### nextjs-error-monitoring.md

Markdown page “How to set up Next.js error monitoring”. Errors are an inevitable part of
software development, but so is catching and fixing them. You can use error tracking in
PostHog to help you do this.

[`contents/tutorials/nextjs-error-monitoring.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nextjs-error-monitoring.md) · code · 10417 bytes

### nextjs-monitoring.md

Markdown page “How to set up Next.js monitoring”. Monitoring a Next.js app for performance
regressions, loading speed, and errors helps you be confident your app is providing the best
possible experience. [Real user monitoring](/blog/real-user-monitoring) is a best practice
for apps looking to optimize their user experience.

[`contents/tutorials/nextjs-monitoring.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nextjs-monitoring.md) · code · 9253 bytes

### nextjs-pages-analytics.md

Markdown page “How to set up Next.js pages router analytics, feature flags, and more”.
Next.js is one of the web's most popular frameworks. Built on React, it provides
optimizations and abstractions to help developers build fast and performant apps and sites.

[`contents/tutorials/nextjs-pages-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nextjs-pages-analytics.md) · code · 22226 bytes

### nextjs-supabase-signup-funnel.mdx

Markdown page “Building and measuring a sign up funnel with Next.js, Supabase, and PostHog”.
_Estimated reading time: 20 minutes_ ☕☕☕ MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/tutorials/nextjs-supabase-signup-funnel.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nextjs-supabase-signup-funnel.mdx) · code · 26780 bytes

### nextjs-surveys.md

Markdown page “How to set up surveys in Next.js”. [Surveys](/docs/surveys) are an excellent
way to get feedback from your users. In this guide, we show you how to add a survey to your
Next.js app.

[`contents/tutorials/nextjs-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nextjs-surveys.md) · code · 15696 bytes

### node-express-ab-tests.md

Markdown page “How to set up A/B tests in Node.js (Express)”.

[`contents/tutorials/node-express-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/node-express-ab-tests.md) · code · 7801 bytes

### node-express-analytics.md

Markdown page “How to set up Node.js (Express) analytics, feature flags, and more”. Node.js
is a JavaScript runtime and server environment. Express.js is a web application framework
for Node.js. Express is the most popular backend JavaScript framework and one of the most
popular web frameworks across all languages.

[`contents/tutorials/node-express-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/node-express-analytics.md) · code · 15249 bytes

### non-technical-guide-to-data.md

Markdown page “A non-technical guide to understanding data in PostHog”. Non-technical users
have many tools in PostHog for gaining insights from their product data. You don’t need to
be a software engineer, but you do need some knowledge of your data. Knowing the formatting
and structure of your data, for example, is key to getting the most out of PostHog as a non-
technical user.

[`contents/tutorials/non-technical-guide-to-data.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/non-technical-guide-to-data.md) · code · 6644 bytes

### nuxt-analytics.md

Markdown page “How to set up analytics in Nuxt”. import NuxtApiKeysSecurity from
"../docs/integrate/_snippets/nuxt-api-keys-security.mdx".

[`contents/tutorials/nuxt-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nuxt-analytics.md) · code · 8728 bytes

### nuxt-feature-flags.md

Markdown page “How to set up feature flags in Nuxt”.

[`contents/tutorials/nuxt-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nuxt-feature-flags.md) · code · 9281 bytes

### nuxt-surveys.md

Markdown page “How to set up surveys in Nuxt”.

[`contents/tutorials/nuxt-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nuxt-surveys.md) · code · 16847 bytes

### nuxtjs-ab-tests.md

Markdown page “How to set up A/B tests in Nuxt”. import NuxtApiKeysSecurity from
"../docs/integrate/_snippets/nuxt-api-keys-security.mdx".

[`contents/tutorials/nuxtjs-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/nuxtjs-ab-tests.md) · code · 9455 bytes

### one-time-feature-flags.md

Markdown page “How to set up one-time feature flags”. Sometimes you want to show users a
component or some content only once. You can use a field in their user model or store it
locally, but this gets messy fast. It also might prevent you from changing it remotely. A
better way to do this is a feature flag that changes once a user completes what you want.

[`contents/tutorials/one-time-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/one-time-feature-flags.md) · code · 7366 bytes

### openai-observability.md

Markdown page “How to set up OpenAI observability”. Tracking your OpenAI API usage, costs,
and latency is crucial to understanding how your users are interacting with your AI and LLM-
powered features.

[`contents/tutorials/openai-observability.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/openai-observability.md) · code · 7386 bytes

### openrouter-observability.md

Markdown page “How to set up OpenRouter LLM observability”. import { CalloutBox } from
'components/Docs/CalloutBox'.

[`contents/tutorials/openrouter-observability.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/openrouter-observability.md) · code · 7199 bytes

### performance-marketing.md

Markdown page “How to track performance marketing in PostHog”. Performance marketing is
paying for ads, attention, and clicks to your site where you try to convert them into users
and customers. Companies use channels like Google, Facebook, other social media, ad
networks, and sponsorships to do this.

[`contents/tutorials/performance-marketing.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/performance-marketing.md) · code · 8822 bytes

### performance-metrics.md

Markdown page “How to improve web app performance using PostHog session replays”. Waiting
for slow web apps is like watching paint dry. It's the bane of productivity, the destroyer
of efficiency, and a leading cause of [customer churn](/blog/customer-churn-analysis-guide).

[`contents/tutorials/performance-metrics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/performance-metrics.md) · code · 12147 bytes

### php-ab-tests.md

Markdown page “How to set up A/B tests in PHP”.

[`contents/tutorials/php-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/php-ab-tests.md) · code · 6882 bytes

### php-analytics.md

Markdown page “How to set up analytics in PHP”.

[`contents/tutorials/php-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/php-analytics.md) · code · 10352 bytes

### php-feature-flags.md

Markdown page “How to set up feature flags in PHP”.

[`contents/tutorials/php-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/php-feature-flags.md) · code · 7334 bytes

### power-users.md

Markdown page “How to identify and analyze power users”. Power users are your best and most
important customers. They're knowledgable, willing to learn, and more likely to give
feedback than average users. They're also more demanding.

[`contents/tutorials/power-users.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/power-users.md) · code · 7045 bytes

### prevent-fouc-ab-tests.md

Markdown page “How to prevent flashing of content during A/B tests”. 🚧 Note: As an
alternative to the approach described below, we're experimenting with client-side feature
flag assignments. Check out our [fast feature flag minisite](https://posthog-fast-feature-
flags.vercel.app/) to learn more. We are keen to gather as much feedback as possible so if
you try this out please let us know.

[`contents/tutorials/prevent-fouc-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/prevent-fouc-ab-tests.md) · code · 3200 bytes

### product-data-in-new-tab.md

Markdown page “Adding product data in new tab with Momentum Dash”. Keeping product analytics
top of mind keeps you focused on what matters to your product and customers. It reminds you
about the state of the product, and what you need to do to improve it.

[`contents/tutorials/product-data-in-new-tab.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/product-data-in-new-tab.md) · code · 5953 bytes

### property-filter.md

Markdown page “How to protect user privacy with the Property Filter app”. When collecting
data with PostHog, you may want to avoid collecting certain properties for privacy reasons.
For example, you may want to ensure you never collect IP addresses or exact locations.

[`contents/tutorials/property-filter.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/property-filter.md) · code · 8207 bytes

### public-beta-program.md

Markdown page “How to set up a public beta program using early access management”. Public
betas are a way to get new features into the hands of users and get valuable feedback and
analytics. In this tutorial, we show you how to add a basic public beta program to your app
with PostHog’s [early access management feature](/docs/feature-flags/early-access-feature-
management).

[`contents/tutorials/public-beta-program.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/public-beta-program.md) · code · 9839 bytes

### python-ab-testing.md

Markdown page “How to set up Python A/B testing”. A/B testing enables you to experiment with
how changes to your app affect metrics you care about. PostHog makes it easy to set up [A/B
tests](/experiments) in Python. This tutorial shows you how to create a basic Python app
with Flask, add PostHog to it, and then set up an A/B test to compare button variants.

[`contents/tutorials/python-ab-testing.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/python-ab-testing.md) · code · 7866 bytes

### python-analytics.md

Markdown page “How to set up Python analytics in Flask”.

[`contents/tutorials/python-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/python-analytics.md) · code · 10897 bytes

### python-error-tracking.md

Markdown page “How to set up Python (and Flask) error tracking”. No matter how hard you try
to prevent errors, they inevitably happen. To limit their impact, you need to catch and fix
them as quickly as possible. PostHog provides error tracking to help you do this.

[`contents/tutorials/python-error-tracking.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/python-error-tracking.md) · code · 4879 bytes

### python-feature-flags.md

Markdown page “How to set up Python feature flags in Flask”. Feature flags make it easy to
conditionally run code and show content based on users or conditions. In this tutorial, we
show how to create a basic Python Flask app, add PostHog, and set up [feature
flags](/feature-flags) to conditionally show content in the app.

[`contents/tutorials/python-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/python-feature-flags.md) · code · 5621 bytes

### python-v6-migration.md

Markdown page “Migrating to PostHog Python SDK V6”. import { CalloutBox } from
'components/Docs/CalloutBox'.

[`contents/tutorials/python-v6-migration.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/python-v6-migration.md) · code · 12299 bytes

### react-ab-testing.md

Markdown page “How to set up React A/B testing”. A/B tests help you make your React app
better by comparing changes for their impact on key metrics. To show you how to set one up,
we will create a basic React app with Vite, add PostHog, create an experiment, and implement
it to A/B test content in our app.

[`contents/tutorials/react-ab-testing.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-ab-testing.md) · code · 6451 bytes

### react-analytics.md

Markdown page “How to set up analytics in React”. [Product analytics](/product-analytics)
enables you to gather and analyze data about how users interact with your React app. To show
you how to set up analytics, in this tutorial we create a basic React app with Vite, add
PostHog, and use it to capture pageviews and custom events.

[`contents/tutorials/react-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-analytics.md) · code · 5116 bytes

### react-charts.md

Markdown page “How to use React Charts to visualize analytics data (with examples)”. [React
Charts](https://react-charts.tanstack.com/) is a popular visualization and charting library
for React. It provides a simplified set of performant charts to use with analytics data from
PostHog.

[`contents/tutorials/react-charts.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-charts.md) · code · 13527 bytes

### react-cookie-banner.md

Markdown page “Building a tracking cookies consent banner in React”. If you’ve spent any
time online, you’ve seen a cookie consent banner. Because of GDPR and other worldwide
internet privacy regulations, most sites need to get consent to track users and use cookies.

[`contents/tutorials/react-cookie-banner.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-cookie-banner.md) · code · 9003 bytes

### react-error-tracking.md

Markdown page “How to set up React error tracking”. Errors are inevitable when building
apps. Setting up error tracking limits their impact by helping you identify, debug, and fix
them fast.

[`contents/tutorials/react-error-tracking.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-error-tracking.md) · code · 5164 bytes

### react-feature-flags.md

Markdown page “How to set up React feature flags with Vite”. [Feature flags](/docs/feature-
flags) help you release features and conditionally show content in your React apps. This
tutorial shows you how to create a React app with Vite, add PostHog, create a feature flag,
and then implement the flag to control content in your app.

[`contents/tutorials/react-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-feature-flags.md) · code · 5642 bytes

### react-heatmap.md

Markdown page “How to set up a React app heatmap with PostHog”. Understanding where users
click your site or app shows you what interests them. A heatmap can visualize these clicks
to make this analysis easier.

[`contents/tutorials/react-heatmap.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-heatmap.md) · code · 5721 bytes

### react-native-ab-tests.md

Markdown page “How to set up A/B tests in React Native (Expo)”.

[`contents/tutorials/react-native-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-native-ab-tests.md) · code · 9246 bytes

### react-native-analytics.md

Markdown page “How to set up React Native (Expo) analytics, feature flags, and more”. React
Native is a popular mobile app framework for writing native mobile apps using React.

[`contents/tutorials/react-native-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-native-analytics.md) · code · 12802 bytes

### react-native-remote-config.md

Markdown page “How to set up a React Native remote config (with Expo Router)”. [Remote
config](/docs/feature-flags/remote-config) enables you to update your React Native app's
settings and behavior instantly without deploying new code or waiting for app store
approval. This makes it perfect for controlling features on the fly and disabling
problematic features if needed.

[`contents/tutorials/react-native-remote-config.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-native-remote-config.md) · code · 6529 bytes

### react-surveys.md

Markdown page “How to set up surveys in React”. [Surveys](/docs/surveys) are a great tool to
collect qualitative feedback from your users. This tutorial shows you how to easily set up
surveys in your React app.

[`contents/tutorials/react-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/react-surveys.md) · code · 16313 bytes

### recharts.md

Markdown page “How to use Recharts to visualize analytics data (with examples)”. Recharts is
a popular charting library for React. It provides many visualization and customization
options to use with analytics data in PostHog.

[`contents/tutorials/recharts.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/recharts.md) · code · 14598 bytes

### redirect-testing.md

Markdown page “How to do redirect testing”. Redirect testing is a way to [A/B
test](/experiments) web pages by redirecting users to one or the other.

[`contents/tutorials/redirect-testing.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/redirect-testing.md) · code · 13786 bytes

### regex-basics.md

Markdown page “The basics of using regex in PostHog”. Regular expressions or regex is a way
to search text for patterns. It is a structure of symbols that finds text matching what you
want. In doing so, it is a powerful way to filter and validate strings of text.

[`contents/tutorials/regex-basics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/regex-basics.md) · code · 5042 bytes

### remix-ab-tests.md

Markdown page “How to set up A/B tests in Remix”. import { ProductScreenshot } from
'components/ProductScreenshot' export const EventsInPostHogLight = "https://res.cloudinary.c
om/dmukukwp6/image/upload/posthog.com/contents/images/tutorials/remix-ab-tests/events-
light.png" export const EventsInPostHogDark = "https://res.cloudinary.com/dmukukwp6/image/up
load/posthog.com/contents/images/tutorials/remix-ab-tests/events-dark.png".

[`contents/tutorials/remix-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/remix-ab-tests.md) · code · 10612 bytes

### remix-analytics.md

Markdown page “How to set up Remix analytics, feature flags, and more”. Remix is a full
stack web framework built on [React](/docs/libraries/react) with a specific focus on
following web standards.

[`contents/tutorials/remix-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/remix-analytics.md) · code · 16855 bytes

### remix-surveys.md

Markdown page “How to set up surveys in Remix”.

[`contents/tutorials/remix-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/remix-surveys.md) · code · 15725 bytes

### rss-item-capture.md

Markdown page “How to capture new RSS items in PostHog (releases, blogs, status)”. RSS is a
popular format for providing feeds of content. For example, GitHub uses it to provide feeds
of releases, blogs provide feeds of new posts, and status pages provide feeds of incidents.

[`contents/tutorials/rss-item-capture.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/rss-item-capture.md) · code · 6147 bytes

### ruby-on-rails-ab-tests.md

Markdown page “How to set up A/B tests in Ruby on Rails”.

[`contents/tutorials/ruby-on-rails-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/ruby-on-rails-ab-tests.md) · code · 13197 bytes

### ruby-on-rails-analytics.md

Markdown page “How to set up Ruby on Rails analytics, feature flags and more”. Ruby on Rails
is a popular fullstack web framework used by companies like Shopify, GitHub, Twitch, and
more.

[`contents/tutorials/ruby-on-rails-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/ruby-on-rails-analytics.md) · code · 15867 bytes

### rust-analytics.md

Markdown page “How to set up analytics in Rust”.

[`contents/tutorials/rust-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/rust-analytics.md) · code · 11041 bytes

### scroll-depth.md

Markdown page “How to track scroll depth”. You can waste a lot of effort on parts of pages
people never see. While [session replay](/tutorials/explore-insights-session-recordings) is
great for understanding individual sessions, an aggregate understanding of how much of a
page is viewed is valuable too. This is where tracking scroll depth can be helpful.

[`contents/tutorials/scroll-depth.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/scroll-depth.md) · code · 11139 bytes

### session-metrics.md

Markdown page “>-”. A session is a set of events grouped to capture a "single use" of your
product. If you use the [snippet](/docs/getting-started/install?tab=snippet), [JavaScript
Web SDK](/docs/libraries/js), or [mobile SDKs](/docs/libraries/ios), PostHog automatically
groups events into sessions. We then provide multiple ways to analyze these sessions to get
a fuller picture of how users are using your product, where they are spendin.

[`contents/tutorials/session-metrics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/session-metrics.md) · code · 5031 bytes

### session-recordings-for-support.md

Markdown page “How to use session replays to improve your support experience”. On top of
being useful for understanding user behavior, session replays help solve problems with your
product. You can use them to discover issues, understand why they are happening, and work to
fix them. In this way, session replays help you provide a better support experience to
users.

[`contents/tutorials/session-recordings-for-support.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/session-recordings-for-support.md) · code · 4957 bytes

### session-recordings-in-slack.mdx

Markdown page “How to send a Slack notification when there's a recording to watch”.
Sometimes it's important to watch recordings as soon as they are available. You can take
advantage of a little custom code and our new [Hog](/docs/hog) powered functions to receive
a Slack notification every time there's a new recording. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/tutorials/session-recordings-in-slack.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/session-recordings-in-slack.mdx) · code · 4267 bytes

### single-page-app-pageviews.md

Markdown page “Tracking pageviews in single-page apps (SPA)”. A single-page application (or
SPA) dynamically loads content for new pages using JavaScript instead of loading new pages
from the server. Ideally, this enables users to navigate around the app without waiting for
new pages to load, providing a seamless user experience.

[`contents/tutorials/single-page-app-pageviews.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/single-page-app-pageviews.md) · code · 7997 bytes

### slack-surveys.md

Markdown page “How to send survey responses to Slack”. This tutorial requires you to first
create a survey. Our [docs](/docs/surveys/creating-surveys) cover how to do this, so we
won't go into detail here. We also have [framework-specific
tutorials](/docs/surveys/tutorials#framework-guides).

[`contents/tutorials/slack-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/slack-surveys.md) · code · 3438 bytes

### squarespace-analytics.md

Markdown page “How to set up Squarespace analytics”. Squarespace offers analytics with a
basic set of metrics like visits, pageviews, and bounce rate, but for many, this isn't
enough to understand what's going on on your site. PostHog offers a full set of web
analytics metrics like session duration, entry and exit pages, sources, retention, and goals
along with custom events, insights, session replay, and more.

[`contents/tutorials/squarespace-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/squarespace-analytics.md) · code · 4193 bytes

### sticky-feature-flags.md

Markdown page “How to create sticky feature flags”. Sticky feature flags ensure users
maintain their original variant assignment even after rollout conditions change. This is
crucial for experiments where you need consistent user experiences throughout the test
period, regardless of changes to targeting rules or rollout percentages.

[`contents/tutorials/sticky-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/sticky-feature-flags.md) · code · 6958 bytes

### stripe-reports.md

Markdown page “How to set up Stripe reports”. Creating and analyzing reports for your Stripe
data helps you understand how you are making money and how you can improve.

[`contents/tutorials/stripe-reports.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/stripe-reports.md) · code · 11045 bytes

### supabase-query.md

Markdown page “How to sync and query Supabase data in PostHog”. Combining your database and
analytics data is a powerful way to understand your users. [Supabase](https://supabase.com/)
is a popular choice for handling that app data, as it provides a database, auth, storage,
and more all-in-one.

[`contents/tutorials/supabase-query.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/supabase-query.md) · code · 8095 bytes

### survey.md

Markdown page “How to create custom surveys”. [Surveys](/docs/surveys/manual) make it easy
to collect qualitative feedback fast. PostHog provides everything you need to do this, but
you can also customize the implementation of the survey in your app. In this tutorial, we
show you how to do this by creating a Next.js app, adding PostHog, setting up a basic
survey, and then creating a completely custom survey.

[`contents/tutorials/survey.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/survey.md) · code · 10115 bytes

### svelte-ab-tests.md

Markdown page “How to set up A/B tests in Svelte”. import { ProductScreenshot } from
'components/ProductScreenshot' export const EventsInPostHogLight = "https://res.cloudinary.c
om/dmukukwp6/image/upload/posthog.com/contents/images/tutorials/svelte-ab-tests/events-
light.png" export const EventsInPostHogDark = "https://res.cloudinary.com/dmukukwp6/image/up
load/posthog.com/contents/images/tutorials/svelte-ab-tests/events-dark.png".

[`contents/tutorials/svelte-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/svelte-ab-tests.md) · code · 9198 bytes

### svelte-analytics.md

Markdown page “How to set up Svelte analytics, feature flags, and more”. Svelte is a popular
frontend JavaScript framework, similar to [Next.js](/tutorials/nextjs-analytics) and
[Vue](/tutorials/posthog-for-vuejs). Svelte shifts much of the work for processing the app
from the browser, to a compile step when you build your app.

[`contents/tutorials/svelte-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/svelte-analytics.md) · code · 13317 bytes

### svelte-surveys.md

Markdown page “How to set up surveys in Svelte”.

[`contents/tutorials/svelte-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/svelte-surveys.md) · code · 15566 bytes

### test-frontend-feature-flags.md

Markdown page “Testing frontend feature flags with React, Vitest, and PostHog”. Combining
both testing and feature flags can be a bit tricky. Tests generally check only one variant
of the feature flag and leave other code untested. If you want to test the code behind
feature flags, you must set up your tests to do so.

[`contents/tutorials/test-frontend-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/test-frontend-feature-flags.md) · code · 7258 bytes

### time-breakdowns.md

Markdown page “How to do time-based breakdowns (hour, minute, real time)”. By default,
PostHog provides an easy way to group events by week, day, and even hour. Sometimes,
smaller, more specific breakdowns are required. With [SQL](/docs/sql), you can break down
events by time of day, hourly, and even minute-by-minute to help you do a detailed analysis
of when they happen, and this tutorial shows you how to do that.

[`contents/tutorials/time-breakdowns.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/time-breakdowns.md) · code · 4624 bytes

### time-on-page.md

Markdown page “How to calculate time on page”. Understanding how users spend their time on
your site helps you understand your site’s strengths and weaknesses. Calculating the time
spent on a page is the key metric for doing this. In this tutorial, we show you how to
calculate time on page and related metrics using PostHog.

[`contents/tutorials/time-on-page.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/time-on-page.md) · code · 12214 bytes

### track-high-volume-apis.md

Markdown page “How to track high-volume APIs”. Tracking high-volume APIs is a balancing act.
You want to keep them as efficient as possible, while still capturing data to improve them.
This tutorial aims to help you find this balance.

[`contents/tutorials/track-high-volume-apis.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/track-high-volume-apis.md) · code · 9995 bytes

### track-new-returning-users.md

Markdown page “How to track new and returning users in PostHog”. Understanding user growth
is critical to building a successful product. A lack of new users or existing users churning
is a bad sign. This tutorial goes over the different ways to calculate new and returning
users in PostHog, as well as insights you can create using these calculations.

[`contents/tutorials/track-new-returning-users.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/track-new-returning-users.md) · code · 5262 bytes

### understand-ai-agent-performance.mdx

Markdown page “How to understand AI agent performance in your product”. If you're anything
like literally every other tech company in the world right now, chances are you've already
shipped, or are planning to ship, an AI product. Tools of the past make it hard (impossible,
really) to understand how your product is performing.

[`contents/tutorials/understand-ai-agent-performance.mdx`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/understand-ai-agent-performance.mdx) · code · 20855 bytes

### validating-what-you-ship.md

Markdown page “Validating what you ship: Did anyone use it? Did it work?”. You shipped.
People clapped in Slack. Now what?

[`contents/tutorials/validating-what-you-ship.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/validating-what-you-ship.md) · code · 10238 bytes

### variance-connector.md

Markdown page “How to enrich customer data by connecting PostHog with Variance”. _Estimated
reading time: 6 minutes_ ☕☕.

[`contents/tutorials/variance-connector.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/variance-connector.md) · code · 6981 bytes

### vue-ab-tests.md

Markdown page “How to set up A/B tests in Vue”. A/B tests help you make your Vue app better
by enabling you to compare the impact of changes on key metrics. To show you how to set one
up, in this tutorial we create a basic Vue app, add PostHog, create an A/B test, and
implement the code for it.

[`contents/tutorials/vue-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/vue-ab-tests.md) · code · 5917 bytes

### vue-analytics.md

Markdown page “How to set up analytics in Vue”. [Product analytics](/product-analytics)
enable you to gather and analyze data about how users interact with your Vue.js app. To show
you how to set up analytics, in this tutorial we create a basic Vue app, add PostHog, and
use it to capture pageviews and custom events.

[`contents/tutorials/vue-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/vue-analytics.md) · code · 5942 bytes

### vue-cookie-banner.md

Markdown page “Building a Vue cookie consent banner”. With internet privacy regulations like
GDPR coming into effect, managing cookies is becoming increasingly important. Cookies are
pieces of information apps set in users’ browsers to help them store information and
identity. It’s possible to use [PostHog without cookies](/tutorials/cookieless-tracking),
but it’s simpler to use them.

[`contents/tutorials/vue-cookie-banner.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/vue-cookie-banner.md) · code · 9323 bytes

### vue-feature-flags.md

Markdown page “How to set up feature flags in Vue”.

[`contents/tutorials/vue-feature-flags.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/vue-feature-flags.md) · code · 6929 bytes

### vue-surveys.md

Markdown page “How to set up surveys in Vue”.

[`contents/tutorials/vue-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/vue-surveys.md) · code · 17681 bytes

### web-redact-properties.md

Markdown page “How to redact event data before it is sent to PostHog”. When collecting data
to better understand your customers, it's important to comply with [privacy
regulations](/docs/privacy).

[`contents/tutorials/web-redact-properties.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/web-redact-properties.md) · code · 3619 bytes

### web-worker.md

Markdown page “How to use PostHog in a web worker”. Web workers enable you to run
computationally expensive tasks or scripts in background threads. This prevents the main
webpage thread from slowing down or being blocked.

[`contents/tutorials/web-worker.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/web-worker.md) · code · 7533 bytes

### webflow-ab-tests.md

Markdown page “How to run A/B tests in Webflow”. Optimizing your marketing site often
requires testing small changes against each other, also known as A/B tests. Getting the best
site possible requires tweaking, experimenting, and tracking results.

[`contents/tutorials/webflow-ab-tests.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/webflow-ab-tests.md) · code · 4915 bytes

### webflow-form-submissions.md

Markdown page “How to capture Webflow form submissions”. With PostHog, you can autocapture
events and record sessions on your Webflow site. With a bit more setup, you can also use it
to capture form submissions. In this tutorial, we show how to do this with a basic Webflow
site, PostHog, and some JavaScript.

[`contents/tutorials/webflow-form-submissions.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/webflow-form-submissions.md) · code · 4343 bytes

### webflow-surveys.md

Markdown page “How to create surveys in Webflow”. Surveys are a great way to collect
feedback from your users. This tutorial shows you how to create surveys for your
[Webflow](https://webflow.com/) marketing site using PostHog.

[`contents/tutorials/webflow-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/webflow-surveys.md) · code · 3993 bytes

### webflow.md

Markdown page “How to set up Webflow analytics and session recordings”. Webflow is one of
the most popular no-code site builders. It makes building high-quality marketing sites,
blogs, landing pages, and ecommerce stores a breeze.

[`contents/tutorials/webflow.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/webflow.md) · code · 3184 bytes

### wix-analytics.md

Markdown page “How to set up Wix analytics, heatmaps, and more”. To create the best possible
Wix site, you need to know how users interact your site. PostHog provides tools like
[analytics](/web-analytics), [heatmaps](/docs/toolbar/heatmaps), and [session
replays](/session-replay) to help you do this. Best of all, PostHog has a generous always
free tier (unlike other Wix analytics tools).

[`contents/tutorials/wix-analytics.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/wix-analytics.md) · code · 4425 bytes

### workflows-ab-testing.md

Markdown page “Run A/B tests inside your Workflows”.
[Workflows](https://app.posthog.com/workflows) let you automate actions based on things your
users do (or don't do). A user signs up? Send them an email. Someone hits a paywall three
times? Ping your sales team. A trial's about to expire? Update a property and trigger a re-
engagement sequence.

[`contents/tutorials/workflows-ab-testing.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/workflows-ab-testing.md) · code · 5732 bytes

### zapier-surveys.md

Markdown page “How to send survey responses to Zapier”. It can be useful to send survey
responses to [Zapier](https://zapier.com/). This way you can automatically trigger workflows
in thousands of other apps, such as creating tickets in your help desk or updating your CRM
with customer feedback.

[`contents/tutorials/zapier-surveys.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/zapier-surveys.md) · code · 7266 bytes

### zendesk-reports.md

Markdown page “How to set up Zendesk reports”. Combining Zendesk data and product data helps
you understand support performance, identify problem areas, and provide a better customer
experience.

[`contents/tutorials/zendesk-reports.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/zendesk-reports.md) · code · 7396 bytes

### zendesk-session-replays.md

Markdown page “How to add session replays to Zendesk”. [Session replays](/session-replay)
can be a useful support tool for debugging and recreating issues. The errors, console, and
network data along with the rest of PostHog's tools make PostHog a powerful support
platform.

[`contents/tutorials/zendesk-session-replays.md`](https://github.com/quirq-ai/website/blob/main/contents/tutorials/zendesk-session-replays.md) · code · 7718 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
