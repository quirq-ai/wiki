<!-- quirq-wiki-generated repo=website dir=src/components/Presentation -->

# website / src/components/Presentation

Source: [src/components/Presentation](https://github.com/quirq-ai/website/tree/main/src/components/Presentation) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### FullScreen.tsx

import React, { useState, useEffect, useCallback, useRef } from 'react' import {
createPortal } from 'react-dom' import { IconX } from '@posthog/icons' import ScalableSlide
from './ScalableSlide' import { PresentationModeContext } from '../RadixUI/Tabs' Provides a
default export as the module's public entry.

[`src/components/Presentation/FullScreen.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Presentation/FullScreen.tsx) · code · 11468 bytes

### README.md

The project README (“Presentation System”). The Presentation system is a flexible framework
for creating custom sales presentations and demos. It uses JSON configuration files to
define slide content and templates that render the slides.

[`src/components/Presentation/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Presentation/README.md) · code · 13120 bytes

### ResponsiveSlideContent.tsx

import React, { useContext } from 'react' import { PresentationModeContext } from
'../RadixUI/Tabs' Notable exports: `ResponsiveSlideContent`.

[`src/components/Presentation/ResponsiveSlideContent.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Presentation/ResponsiveSlideContent.tsx) · code · 1749 bytes

### ScalableSlide.tsx

import React, { useEffect, useRef, useState, useCallback } from 'react' Provides a default
export as the module's public entry.

[`src/components/Presentation/ScalableSlide.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Presentation/ScalableSlide.tsx) · code · 8291 bytes

### index.tsx

Mapping for team query parameter - makes URL less conspicuous Notable exports:
`Presentation`, `getIsMobile`.

[`src/components/Presentation/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Presentation/index.tsx) · code · 21741 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
