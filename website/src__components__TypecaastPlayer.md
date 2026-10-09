<!-- quirq-wiki-generated repo=website dir=src/components/TypecaastPlayer -->

# website / src/components/TypecaastPlayer

Source: [src/components/TypecaastPlayer](https://github.com/quirq-ai/website/tree/main/src/components/TypecaastPlayer) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“TypecaastPlayer”). Thin wrapper around
[@typecaast/react](https://www.npmjs.com/package/@typecaast/react) for embedding Typecaast
conversation scripts (Slack/Cursor/etc. simulations) across posthog.com. Use it instead of
importing Typecaast directly so every embed shares the same theme handling, sizing, and
isolation defaults.

[`src/components/TypecaastPlayer/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/TypecaastPlayer/README.md) · code · 3911 bytes

### index.tsx

import React from 'react' import { Typecaast, type TypecaastConfig, type TypecaastProps }
from '@typecaast/react' import { useInView } from 'react-intersection-observer' import {
useApp } from '../../context/App' Notable exports: `TypecaastPlayer`,
`TypecaastPlayerProps`.

[`src/components/TypecaastPlayer/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TypecaastPlayer/index.tsx) · code · 3276 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
