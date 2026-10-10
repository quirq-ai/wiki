<!-- quirq-wiki-generated repo=website dir=src/components/Explorer -->

# website / src/components/Explorer

Source: [src/components/Explorer](https://github.com/quirq-ai/website/tree/main/src/components/Explorer) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Product.tsx

import { IconBook, IconCalendar, IconCreditCard, IconGanttChart, IconListCheck,
IconMegaphone, IconMessage, IconPeople, } from '@posthog/icons' import OSButton from
'components/OSButton' import useProduct from 'hooks/useProduct' import React from 'react'
Notable exports: `Product`.

[`src/components/Explorer/Product.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Explorer/Product.tsx) · code · 7549 bytes

### ProductSidebar.tsx

import React from 'react' import useProduct from 'hooks/useProduct' import { Accordion }
from 'components/RadixUI/Accordion' import OSButton from 'components/OSButton' import {
IconCursor, IconHeadset, IconQuestion } from '@posthog/icons' Notable exports:
`ProductSidebar`.

[`src/components/Explorer/ProductSidebar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Explorer/ProductSidebar.tsx) · code · 6775 bytes

### index.tsx

import React, { useMemo, useRef, useState } from 'react' import { motion } from 'framer-
motion' import { Select } from '../RadixUI/Select' import HeaderBar from
'components/OSChrome/HeaderBar' import { navigate } from 'gatsby' import { useLocation }
from '@reach/router' import { DebugContainerQuery } from 'components/DebugContainerQuery'
import ScrollArea fr Notable exports: `Explorer`.

[`src/components/Explorer/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Explorer/index.tsx) · code · 10647 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
