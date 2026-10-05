<!-- quirq-wiki-generated repo=website dir=src/components/WaitlistForm -->

# website / src/components/WaitlistForm

Source: [src/components/WaitlistForm](https://github.com/quirq-ai/website/tree/main/src/components/WaitlistForm) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“WaitlistForm”). A thin wrapper around
[SurveySignup](../SurveySignup/README.md) preconfigured for the PostHog Desktop waitlist.
Defaults to the "PostHog Desktop waitlist" survey and PostHog Desktop's concept-stage Early
Access Feature flag (twig); other products pass their own surveyId, productHandle,
productName, and flagKey (see src/pages/replay-vision.tsx).

[`src/components/WaitlistForm/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/WaitlistForm/README.md) · code · 3403 bytes

### index.tsx

The "PostHog Desktop waitlist" survey — the same list the /roadmap card and the in-app
feature previews collect into, so every PostHog Desktop sign-up lands in one place. Notable
exports: `WaitlistForm`.

[`src/components/WaitlistForm/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/WaitlistForm/index.tsx) · code · 2916 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
