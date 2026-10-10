<!-- quirq-wiki-generated repo=ui dir=library/website/source/src/components/QuirqAvatar -->

# ui / library/website/source/src/components/QuirqAvatar

Source: [library/website/source/src/components/QuirqAvatar](https://github.com/quirq-ai/ui/tree/main/library/website/source/src/components/QuirqAvatar) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“quirq avatar”). A [Blobatar](https://blobatar.dev/) character for the
home screen, adapted from Euler's avatar. Avatars render locally from a name (the seed) with
the vendored renderer in src/vendor/blobatar/; nothing calls an avatar service.

[`library/website/source/src/components/QuirqAvatar/README.md`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/components/QuirqAvatar/README.md) · code · 1521 bytes

### index.tsx

import React, { useEffect, useMemo, useRef, useState } from 'react' import { QuirqTile }
from 'components/QuirqAppIcon' import { AvatarConfig, avatarBackgrounds, avatarExpressions,
avatarShapes, avatarUri, defaultAvatarConfig, normalizeAvatarConfig, saveAvatarConfig,
useQuirqAvatar, } from 'lib/quirqAvatar' Notable exports: `QuirqAvatar`, `QuirqAvatarTile`,
`AvatarEditor`.

[`library/website/source/src/components/QuirqAvatar/index.tsx`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/components/QuirqAvatar/index.tsx) · code · 19992 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
