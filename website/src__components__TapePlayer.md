<!-- quirq-wiki-generated repo=website dir=src/components/TapePlayer -->

# website / src/components/TapePlayer

Source: [src/components/TapePlayer](https://github.com/quirq-ai/website/tree/main/src/components/TapePlayer) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### CassetteTape.tsx

import React from 'react' Notable exports: `CassetteTape`.

[`src/components/TapePlayer/CassetteTape.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TapePlayer/CassetteTape.tsx) · code · 4261 bytes

### MixtapeEditor.tsx

import React from 'react' import { useFormik } from 'formik' import { MixtapeFormValues,
YTPlayer, Track } from './types' import { Fieldset } from 'components/OSFieldset' import {
OSInput } from 'components/OSForm' import CassetteTape from './CassetteTape' import
ScrollArea from 'components/RadixUI/ScrollArea' import { IconArrowUpRight, IconCheck,
IconSpinne Notable exports: `MixtapeEditor`.

[`src/components/TapePlayer/MixtapeEditor.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TapePlayer/MixtapeEditor.tsx) · code · 29405 bytes

### Mixtapes.tsx

import React, { useState, useMemo } from 'react' import CassetteTape from './CassetteTape'
import { useMixtapes } from '../../hooks/useMixtapes' import { useUser } from
'hooks/useUser' import Link from 'components/Link' import { OSSelect } from
'components/OSForm' import ScrollArea from 'components/RadixUI/ScrollArea' Notable exports:
`Mixtapes`.

[`src/components/TapePlayer/Mixtapes.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TapePlayer/Mixtapes.tsx) · code · 13656 bytes

### Switch.tsx

import React from 'react' Notable exports: `Switch`.

[`src/components/TapePlayer/Switch.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TapePlayer/Switch.tsx) · code · 2203 bytes

### TapeButton.tsx

import React from 'react' Notable exports: `TapeButton`.

[`src/components/TapePlayer/TapeButton.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TapePlayer/TapeButton.tsx) · code · 1545 bytes

### index.tsx

import React, { useState, useEffect, useRef, useCallback } from 'react' import { Track,
YTPlayer } from './types' import Switch from './Switch' import TapeButton from
'./TapeButton' import CassetteTape from './CassetteTape' import SEO from 'components/seo'
import { useUser } from 'hooks/useUser' import { IconCheck, IconNotebook, IconPencil,
IconPlus, IconVid Notable exports: `TapePlayer`.

[`src/components/TapePlayer/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TapePlayer/index.tsx) · code · 41238 bytes

### types.ts

YouTube API types Notable exports: `YTPlayer`, `YTPlayerConfig`, `YTPlayerConstructor`,
`YTNamespace`, `Track`, `MixtapeFormValues`.

[`src/components/TapePlayer/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/TapePlayer/types.ts) · code · 1574 bytes

### utils.tsx

export const extractVideoId = (url: string): string => { Handle various YouTube URL formats
const patterns = [
/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
/^([a-zA-Z0-9_-]{11})$/, // Direct video ID ] Notable exports: `extractVideoId`.

[`src/components/TapePlayer/utils.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TapePlayer/utils.tsx) · code · 441 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
