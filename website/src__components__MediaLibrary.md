<!-- quirq-wiki-generated repo=website dir=src/components/MediaLibrary -->

# website / src/components/MediaLibrary

Source: [src/components/MediaLibrary](https://github.com/quirq-ai/website/tree/main/src/components/MediaLibrary) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Image.tsx

import { IconCopy, IconSpinner, IconTrash } from '@posthog/icons' import { useToast } from
'../../context/Toast' import React, { useEffect, useState } from 'react' import
CreatableMultiSelect from 'components/CreatableMultiSelect' import { useUser } from
'hooks/useUser' import Link from 'components/Link' import { OSSelect } from
'components/OSForm' import OS Notable exports: `Image`.

[`src/components/MediaLibrary/Image.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/MediaLibrary/Image.tsx) · code · 18556 bytes

### Libraries.tsx

import { OSInput, OSSelect } from 'components/OSForm' import React, { useState } from
'react' import { IconChevronDown, IconChevronLeft, IconSparkles, IconSpinner } from
'@posthog/icons' import OSButton from 'components/OSButton' import Image from './Image'
import { MediaFolder, useMediaLibraryContext } from './context' import { useMediaLibrary }
from 'hooks Notable exports: `Libraries`.

[`src/components/MediaLibrary/Libraries.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/MediaLibrary/Libraries.tsx) · code · 8308 bytes

### Uploads.tsx

import { OSInput, OSSelect } from 'components/OSForm' import { Checkbox } from
'components/RadixUI/Checkbox' import React, { useEffect, useMemo, useState } from 'react'
import Image from './Image' import ScrollArea from 'components/RadixUI/ScrollArea' import {
useMediaLibrary } from 'hooks/useMediaLibrary' import OSButton from 'components/OSButton'
import { Notable exports: `Uploads`.

[`src/components/MediaLibrary/Uploads.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/MediaLibrary/Uploads.tsx) · code · 4949 bytes

### context.tsx

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { useUser } from 'hooks/useUser' import qs from 'qs' Notable exports:
`MediaLibraryProvider`, `useMediaLibraryContext`, `MediaFolder`, `MediaTag`.

[`src/components/MediaLibrary/context.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/MediaLibrary/context.tsx) · code · 3756 bytes

### index.tsx

import { IconUpload } from '@posthog/icons' import uploadImage from
'components/Squeak/util/uploadImage' import { useApp } from '../../context/App' import {
useUser } from 'hooks/useUser' import React, { useEffect, useState } from 'react' import {
useDropzone } from 'react-dropzone' import { useWindow } from '../../context/Window' import
{ useToast } from '. Notable exports: `MediaLibrary`.

[`src/components/MediaLibrary/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/MediaLibrary/index.tsx) · code · 7051 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
