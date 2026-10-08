<!-- quirq-wiki-generated repo=website dir=src/components/CodeBlock -->

# website / src/components/CodeBlock

Source: [src/components/CodeBlock](https://github.com/quirq-ai/website/tree/main/src/components/CodeBlock) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### index.tsx

import React from 'react' import { AnimatePresence, motion } from 'framer-motion' import
Highlight, { defaultProps, Language } from 'prism-react-renderer' import {
generateRandomHtmlId, getCookie } from '../../lib/utils' import { Listbox, Tab } from
'@headlessui/react' import { SelectorIcon } from '@heroicons/react/outline' import
ScrollArea from 'components Notable exports: `MdxCodeBlock`, `SingleCodeBlock`, `CodeBlock`.

[`src/components/CodeBlock/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/CodeBlock/index.tsx) · code · 40686 bytes

### languages.tsx

import React from 'react' import type { Language } from 'prism-react-renderer' import Prism
from 'prism-react-renderer/prism' ;(typeof global !== 'undefined' ? global : window).Prism =
Prism Provides a default export as the module's public entry.

[`src/components/CodeBlock/languages.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/CodeBlock/languages.tsx) · code · 5628 bytes

### theme.ts

import type { PrismTheme } from 'prism-react-renderer' Notable exports: `lightTheme`,
`darkTheme`.

[`src/components/CodeBlock/theme.ts`](https://github.com/quirq-ai/website/blob/main/src/components/CodeBlock/theme.ts) · code · 4048 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
