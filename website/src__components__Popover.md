<!-- quirq-wiki-generated repo=website dir=src/components/Popover -->

# website / src/components/Popover

Source: [src/components/Popover](https://github.com/quirq-ai/website/tree/main/src/components/Popover) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### index.tsx

import React from 'react' import { Popover as HeadlessPopover } from '@headlessui/react'
import { useState } from 'react' import { usePopper } from 'react-popper' export function
Popover({ children, button }: { children: React.ReactNode; button: string | React.ReactNode
}) { const [referenceElement, setReferenceElement] = useState() const [popperElement, set
Notable exports: `Popover`.

[`src/components/Popover/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Popover/index.tsx) · code · 1307 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
