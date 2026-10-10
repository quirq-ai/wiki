<!-- quirq-wiki-generated repo=website dir=src/pages/connect/posthog -->

# website / src/pages/connect/posthog

Source: [src/pages/connect/posthog](https://github.com/quirq-ai/website/tree/main/src/pages/connect/posthog) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### redirect.tsx

Landing page for the PostHog OAuth flow. Strapi finishes the PKCE exchange with
oauth.posthog.com server-side, then redirects the browser here with `?access_token=<PostHog
provider token>`. We hand that token to `/api/auth/posthog/resolve`, which keys off the
durable OIDC `sub` and returns either a session (JWT), a "needs disambiguation" state, or an
error.

[`src/pages/connect/posthog/redirect.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/connect/posthog/redirect.tsx) · code · 6563 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
