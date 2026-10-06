<!-- quirq-wiki-generated repo=website dir=src/components/Pricing/PricingCalculator/AllProductsRatesModal -->

# website / src/components/Pricing/PricingCalculator/AllProductsRatesModal

Source: [src/components/Pricing/PricingCalculator/AllProductsRatesModal](https://github.com/quirq-ai/website/tree/main/src/components/Pricing/PricingCalculator/AllProductsRatesModal) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“AllProductsRatesModal”). Modal listing every calculator product with
its billed unit, first paid rate, and monthly free allocation. Opened from See all products
and per-unit rates under the estimate rail.

[`src/components/Pricing/PricingCalculator/AllProductsRatesModal/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/AllProductsRatesModal/README.md) · code · 578 bytes

### index.tsx

import React, { useEffect, useState } from 'react' import { IconCheck, IconPlus } from
'@posthog/icons' import ScrollArea from 'components/RadixUI/ScrollArea' import { useApp }
from '../../../../context/App' import { useWindow } from '../../../../context/Window' import
{ pluralizeUnit } from '../../utils' Notable exports: `AllProductsRatesModal`,
`ALL_PRODUCTS_RATES_MODAL_KEY`.

[`src/components/Pricing/PricingCalculator/AllProductsRatesModal/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingCalculator/AllProductsRatesModal/index.tsx) · code · 8410 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
