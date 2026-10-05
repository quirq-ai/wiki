<!-- quirq-wiki-generated repo=website dir=contents/docs/session-replay/_snippets -->

# website / contents/docs/session-replay/_snippets

Source: [contents/docs/session-replay/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/session-replay/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### android-installation.mdx

Markdown page “Step one: Add PostHog to your app”. import AndroidInstall from
"../../integrate/_snippets/install-android.mdx" MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/android-installation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/android-installation.mdx) · code · 4071 bytes

### android-logging.mdx

Markdown document `android-logging.mdx`. You can enable this feature from your client-side
by setting captureLogcat = true in your [Android Session Replay
configuration](/docs/session-replay/installation/android#step-three-configure-replay-
settings). Remote configuration via project settings requires Android SDK version 3.32.0 or
higher. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/android-logging.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/android-logging.mdx) · code · 301 bytes

### android-manual-replay-control.mdx

Markdown page “Record or ignore specific screens”. Requires PostHog Android SDK version >=
[3.16.0](https://github.com/PostHog/posthog-android/releases/tag/3.16.0). MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/android-manual-replay-control.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/android-manual-replay-control.mdx) · code · 2135 bytes

### android-network.mdx

Markdown page “Add tracing headers”. To capture network requests in your recordings, add
PostHogOkHttpInterceptor to your OkHttp Interceptor. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/android-network.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/android-network.mdx) · code · 864 bytes

### android-privacy.mdx

Markdown page “Masking views”. import SensitiveThirdPartyScreens from "./sensitive-third-
party-screens.mdx" MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/session-replay/_snippets/android-privacy.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/android-privacy.mdx) · code · 2517 bytes

### flutter-installation.mdx

Markdown page “Step one: Add PostHog to your app”. Session replay requires PostHog Flutter
SDK version >= [4.7.0](https://github.com/PostHog/posthog-flutter/releases), and it's
recommended to always use [the latest version](/docs/health-checks/sdk-health). MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/flutter-installation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/flutter-installation.mdx) · code · 5777 bytes

### flutter-manual-replay-control.mdx

Markdown page “Pause recording on a sensitive screen”. Requires PostHog Flutter SDK version
>= [5.14.0](https://github.com/PostHog/posthog-flutter/releases/5.14.0). Available on iOS,
Android, and Web. MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/session-replay/_snippets/flutter-manual-replay-control.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/flutter-manual-replay-control.mdx) · code · 4118 bytes

### flutter-privacy.mdx

Markdown page “Masking All Texts and Images”. import SensitiveThirdPartyScreens from
"./sensitive-third-party-screens.mdx" MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/session-replay/_snippets/flutter-privacy.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/flutter-privacy.mdx) · code · 8580 bytes

### ios-installation.mdx

Markdown page “Step one: Add PostHog to your app”. import IOSInstall from
"../../integrate/_snippets/install-ios.mdx" MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/ios-installation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/ios-installation.mdx) · code · 6384 bytes

### ios-logging.mdx

Markdown page “Sanitizing or skipping logs”. As console logs can contain sensitive
information, we do not capture these logs automatically. You can enable this feature from
your client-side by setting captureLogs = true in our [iOS SDK config](/docs/session-
replay/installation/ios#step-two-enable-session-recordings-in-your-project-settings). MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/ios-logging.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/ios-logging.mdx) · code · 3931 bytes

### ios-manual-replay-control.mdx

Markdown page “Record or ignore specific screens”. Requires PostHog iOS SDK version >=
[3.19.0](https://github.com/PostHog/posthog-ios/releases/tag/3.19.0). MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/ios-manual-replay-control.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/ios-manual-replay-control.mdx) · code · 1838 bytes

### ios-network.mdx

Markdown document `ios-network.mdx`. In iOS, PostHog uses method swizzling on
[URLSession](https://developer.apple.com/documentation/foundation/urlsession) methods, which
allows for the out-of-the-box collection of network data. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/ios-network.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/ios-network.mdx) · code · 1150 bytes

### ios-privacy.mdx

Markdown page “Masking views”. import SensitiveThirdPartyScreens from "./sensitive-third-
party-screens.mdx" MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/session-replay/_snippets/ios-privacy.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/ios-privacy.mdx) · code · 3546 bytes

### react-native-logging.mdx

Markdown document `react-native-logging.mdx`. You can enable this feature from your client-
side by setting captureLog: true in our [React Native SDK config](/docs/session-
replay/installation/react-native#step-two-configure-replay-settings). MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/react-native-logging.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/react-native-logging.mdx) · code · 715 bytes

### react-native-manual-replay-control.mdx

Markdown page “Record or ignore specific screens”. Requires posthog-react-native >=
[4.36.0](https://github.com/PostHog/posthog-js/releases) and posthog-react-native-session-
replay >= [1.3.0](https://github.com/PostHog/posthog-react-native-session-replay/releases).
From posthog-react-native 4.47.0+, posthog-react-native-session-replay is renamed to
@posthog/react-native-plugin (>= 2.0.1).

[`contents/docs/session-replay/_snippets/react-native-manual-replay-control.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/react-native-manual-replay-control.mdx) · code · 2470 bytes

### react-native-network.mdx

Markdown document `react-native-network.mdx`. To capture network requests in your
recordings, add captureNetworkTelemetry: true to your PostHog Session replay configuration
alongside any of your other configuration options MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/react-native-network.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/react-native-network.mdx) · code · 1020 bytes

### react-native-privacy.mdx

Markdown page “Masking”. By default all text, inputs, and images are masked. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/react-native-privacy.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/react-native-privacy.mdx) · code · 2992 bytes

### sensitive-third-party-screens.mdx

Markdown page “Handling sensitive third-party screens”. For third-party components (like
payment forms or authentication screens) that can't be masked, you can manually stop and
start session recordings. See [how to control which sessions you record](/docs/session-
replay/how-to-control-which-sessions-you-record#programmatic-start-and-stop-controls) for
details. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/session-replay/_snippets/sensitive-third-party-screens.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/sensitive-third-party-screens.mdx) · code · 352 bytes

### web-installation.mdx

Markdown page “Step one: Install our JavaScript web library”. import { ProductScreenshot }
from 'components/ProductScreenshot' MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/session-replay/_snippets/web-installation.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/web-installation.mdx) · code · 3544 bytes

### web-logging.mdx

Markdown document `web-logging.mdx`. As console logs can contain sensitive information, we
do not capture these logs automatically. You can enable this feature globally _either_ from
your [project settings](https://us.posthog.com/settings/project-replay#replay) or client-
side by setting enable_recording_console_log: true in our [JavaScript Web SDK
config](/docs/libraries/js/config).

[`contents/docs/session-replay/_snippets/web-logging.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/web-logging.mdx) · code · 845 bytes

### web-manual-replay-control.mdx

Markdown document `web-manual-replay-control.mdx`. import { ProductScreenshot } from
'components/ProductScreenshot' MDX page (Markdown with JSX components), typically rendered
by the docs site.

[`contents/docs/session-replay/_snippets/web-manual-replay-control.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/web-manual-replay-control.mdx) · code · 2176 bytes

### web-network.mdx

Markdown page “Sensitive information”.

[`contents/docs/session-replay/_snippets/web-network.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/web-network.mdx) · code · 7028 bytes

### web-privacy.mdx

Markdown page “Input elements”. import SensitiveThirdPartyScreens from "./sensitive-third-
party-screens.mdx" MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`contents/docs/session-replay/_snippets/web-privacy.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/session-replay/_snippets/web-privacy.mdx) · code · 7759 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
