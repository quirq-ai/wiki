<!-- quirq-wiki-generated repo=website dir=src/components/MSPaint -->

# website / src/components/MSPaint

Source: [src/components/MSPaint](https://github.com/quirq-ai/website/tree/main/src/components/MSPaint) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“MSPaint Component - Preloading Images”). The MSPaint component now
supports preloading images in two modes: 1. Coloring Book Mode - Converts images to black
line art for coloring 2. Full Color Mode - Loads images with their original colors
preserved.

[`src/components/MSPaint/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/MSPaint/README.md) · code · 2856 bytes

### TODO.md

Markdown page “MSPaint Component - Canvas Preservation Issue”. When the MSPaint window is
minimized in the windowed environment, the canvas content is cleared upon restoration. This
appears to be because React unmounts the component when it's not in the viewport, causing
the canvas to lose its content.

[`src/components/MSPaint/TODO.md`](https://github.com/quirq-ai/website/blob/main/src/components/MSPaint/TODO.md) · code · 1819 bytes

### index.tsx

import React, { useState, useRef, useEffect, useCallback } from 'react' import MenuBar from
'../RadixUI/MenuBar' import { toJpeg, toPng } from 'html-to-image' import { Pencil, Brush,
Eraser, Type, Pipette, PaintBucket, ZoomIn, Square, Circle, Minus, Move, Pentagon, SprayCan,
Spline, RectangleHorizontal, } from 'lucide-react' import { useWindow } from '../../ Notable
exports: `MSPaint`.

[`src/components/MSPaint/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/MSPaint/index.tsx) · code · 50995 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
