<!-- quirq-wiki-generated repo=website dir=src/components/ImageAnnotations -->

# website / src/components/ImageAnnotations

Source: [src/components/ImageAnnotations](https://github.com/quirq-ai/website/tree/main/src/components/ImageAnnotations) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### FromProduct.tsx

import React from 'react' import ImageAnnotations, { type Annotation, type AnnotationSet,
type AnnotationType } from './index' import { useProductScreenshot } from
'./useProductScreenshot' Notable exports: `ProductImageAnnotations`,
`ProductImageAnnotationsProps`.

[`src/components/ImageAnnotations/FromProduct.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ImageAnnotations/FromProduct.tsx) · code · 4760 bytes

### Image.tsx

import React, { useEffect, useState } from 'react' import CloudinaryImage from
'components/CloudinaryImage' import { Popover } from 'components/RadixUI/Popover' import
Tooltip from 'components/RadixUI/Tooltip' import { useImageAnnotations, type Annotation }
from './index' import { useProductScreenshot } from './useProductScreenshot' Notable
exports: `ImageAnnotationsImageProps`.

[`src/components/ImageAnnotations/Image.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ImageAnnotations/Image.tsx) · code · 7118 bytes

### Key.tsx

import React from 'react' import { useImageAnnotations } from './index' Notable exports:
`ImageAnnotationsKeyProps`.

[`src/components/ImageAnnotations/Key.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ImageAnnotations/Key.tsx) · code · 2449 bytes

### README.md

The project README (“ImageAnnotations”). Renders interactive callouts ("annotations") on top
of an image. Instead of baking dots/numbers into the image file, the markers are live DOM
positioned with percentage coordinates, so they stay anchored and scale automatically when
the image is resized.

[`src/components/ImageAnnotations/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/ImageAnnotations/README.md) · code · 9419 bytes

### index.tsx

import React, { createContext, useContext, useMemo, useState } from 'react' import
ImageAnnotationsImage from './Image' import ImageAnnotationsKey from './Key' import
ProductImageAnnotations from './FromProduct' Notable exports: `useImageAnnotations`,
`AnnotationType`, `Annotation`, `AnnotationSet`, `ImageAnnotationsProps`.

[`src/components/ImageAnnotations/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ImageAnnotations/index.tsx) · code · 3051 bytes

### useProductScreenshot.ts

import { useMemo } from 'react' import useProducts from 'hooks/useProducts' Notable exports:
`useProductScreenshot`, `ResolvedScreenshot`.

[`src/components/ImageAnnotations/useProductScreenshot.ts`](https://github.com/quirq-ai/website/blob/main/src/components/ImageAnnotations/useProductScreenshot.ts) · code · 819 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
