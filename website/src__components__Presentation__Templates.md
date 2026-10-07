<!-- quirq-wiki-generated repo=website dir=src/components/Presentation/Templates -->

# website / src/components/Presentation/Templates

Source: [src/components/Presentation/Templates](https://github.com/quirq-ai/website/tree/main/src/components/Presentation/Templates) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### BookingTemplate.tsx

import React, { useState } from 'react' import ParseHtml from '../Utilities/parseHtml'
import { DemoScheduler } from 'components/DemoScheduler' import SalesRep from
'../Utilities/SalesRep' import TeamMembers from '../Utilities/TeamMembers' import Logos from
'../Utilities/Logos' import OSButton from 'components/OSButton' Notable exports:
`ColumnsTemplate`.

[`src/components/Presentation/Templates/BookingTemplate.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Presentation/Templates/BookingTemplate.tsx) · code · 3914 bytes

### ColumnsTemplate.tsx

import React from 'react' import ParseHtml from '../Utilities/parseHtml' import
CloudinaryImage from 'components/CloudinaryImage' import useProduct from 'hooks/useProduct'
import ScrollArea from 'components/RadixUI/ScrollArea' Notable exports: `ColumnsTemplate`.

[`src/components/Presentation/Templates/ColumnsTemplate.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Presentation/Templates/ColumnsTemplate.tsx) · code · 4835 bytes

### PricingTemplate.tsx

@TODOS - Right now the Hogzill image is hard-coded. We have support for a custom image
(which will hide Hogzilla) but it's not formatted - Design basically expects content to fit
around Hogzilla. Probably need ability to offset/shrink Hogzilla and/or allow right-padding
to compensate for the width of an image. Notable exports: `PricingTemplate`.

[`src/components/Presentation/Templates/PricingTemplate.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Presentation/Templates/PricingTemplate.tsx) · code · 3058 bytes

### ProductTemplate.tsx

import React from 'react' import useProduct from 'hooks/useProduct' import CloudinaryImage
from 'components/CloudinaryImage' import ParseHtml from '../Utilities/parseHtml' import
Logos from '../Utilities/Logos' Notable exports: `ProductTemplate`.

[`src/components/Presentation/Templates/ProductTemplate.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Presentation/Templates/ProductTemplate.tsx) · code · 4711 bytes

### StackedTemplate.tsx

@TODOS - Right now the Hogzill image is hard-coded. We have support for a custom image
(which will hide Hogzilla) but it's not formatted - Design basically expects content to fit
around Hogzilla. Probably need ability to offset/shrink Hogzilla and/or allow right-padding
to compensate for the width of an image. Notable exports: `StackedTemplate`.

[`src/components/Presentation/Templates/StackedTemplate.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Presentation/Templates/StackedTemplate.tsx) · code · 4864 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
