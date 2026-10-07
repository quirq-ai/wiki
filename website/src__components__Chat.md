<!-- quirq-wiki-generated repo=website dir=src/components/Chat -->

# website / src/components/Chat

Source: [src/components/Chat](https://github.com/quirq-ai/website/tree/main/src/components/Chat) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Inkeep.tsx

import React, { useCallback, useEffect, useRef, useState } from 'react' import {
DotLottiePlayer } from '@dotlottie/react-player' import { useChat } from 'hooks/useChat'
import { useApp } from '../../context/App' Notable exports: `InkeepEmbeddedChat`.

[`src/components/Chat/Inkeep.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Chat/Inkeep.tsx) · code · 2247 bytes

### index.tsx

Draggable, non-modal frame for the global chat overlay. Starts docked to the bottom-right
and can be dragged anywhere within the viewport. Rendered once via `ChatOverlay` rather than
as a managed window. Notable exports: `Chat`, `ChatFrame`.

[`src/components/Chat/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Chat/index.tsx) · code · 14536 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
