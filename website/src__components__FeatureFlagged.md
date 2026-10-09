<!-- quirq-wiki-generated repo=website dir=src/components/FeatureFlagged -->

# website / src/components/FeatureFlagged

Source: [src/components/FeatureFlagged](https://github.com/quirq-ai/website/tree/main/src/components/FeatureFlagged) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Feature flagged”). Renders its children only when a PostHog feature
flag is enabled for the current visitor, with an optional fallback for everyone else. Use it
to merge unreleased copy or UI into master behind a 0% rollout, then flip the flag to ship.

[`src/components/FeatureFlagged/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/FeatureFlagged/README.md) · code · 1564 bytes

### index.tsx

import { useActiveFeatureFlags } from 'hooks/useActiveFeatureFlags' import React from
'react' Notable exports: `FeatureFlagged`.

[`src/components/FeatureFlagged/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/FeatureFlagged/index.tsx) · code · 994 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
