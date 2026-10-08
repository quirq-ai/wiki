<!-- quirq-wiki-generated repo=website dir=src/components/QuirqAvatar -->

# website / src/components/QuirqAvatar

Source: [src/components/QuirqAvatar](https://github.com/quirq-ai/website/tree/main/src/components/QuirqAvatar) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“quirq avatar”). A [Blobatar](https://blobatar.dev/) character for the
home screen, adapted from Euler's avatar. Avatars render locally from a name (the seed) with
the vendored renderer in src/vendor/blobatar/; nothing calls an avatar service.

[`src/components/QuirqAvatar/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqAvatar/README.md) · code · 1070 bytes

### index.tsx

import React, { useEffect, useMemo, useRef, useState } from 'react' import { AvatarConfig,
avatarBackgrounds, avatarExpressions, avatarShapes, avatarUri, defaultAvatarConfig,
normalizeAvatarConfig, saveAvatarConfig, useQuirqAvatar, } from 'lib/quirqAvatar' Notable
exports: `QuirqAvatar`, `AvatarEditor`.

[`src/components/QuirqAvatar/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqAvatar/index.tsx) · code · 19105 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
