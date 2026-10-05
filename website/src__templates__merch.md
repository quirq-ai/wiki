<!-- quirq-wiki-generated repo=website dir=src/templates/merch -->

# website / src/templates/merch

Source: [src/templates/merch](https://github.com/quirq-ai/website/tree/main/src/templates/merch) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AdjustedLineItems.tsx

import React from 'react' import { cn } from '../../utils' import { AdjustedLineItem } from
'./types' import { IconInfo } from '@posthog/icons' Notable exports: `AdjustedLineItems`.

[`src/templates/merch/AdjustedLineItems.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/AdjustedLineItems.tsx) · code · 3726 bytes

### BackInStockForm.tsx

import React, { useState } from 'react' import { CallToAction } from
'components/CallToAction' import usePostHog from 'hooks/usePostHog' import Input from
'components/OSForm/input' import * as yup from 'yup' Notable exports: `BackInStockForm`.

[`src/templates/merch/BackInStockForm.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/BackInStockForm.tsx) · code · 3157 bytes

### Cart.tsx

import CloudinaryImage from 'components/CloudinaryImage' import React from 'react' import {
cn } from '../../utils' import { Checkout } from './Checkout' import { LineItem } from
'./LineItem' import { Price } from './Price' import { useCartStore } from './store' import *
as Icons from '@posthog/icons' Notable exports: `Cart`.

[`src/templates/merch/Cart.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/Cart.tsx) · code · 3795 bytes

### Checkout.tsx

import { CallToAction } from 'components/CallToAction' import React, { useCallback } from
'react' import { createCartQuery, getCartQuery } from '../../lib/shopify' import { cn } from
'../../utils' import { AdjustedLineItems } from './AdjustedLineItems' import { LoaderIcon }
from './LoaderIcon' import { useCartStore } from './store' import type { AdjustedLine
Notable exports: `getCheckoutUrl`, `Checkout`.

[`src/templates/merch/Checkout.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/Checkout.tsx) · code · 7585 bytes

### Collection.tsx

Category configuration with icons and display order Notable exports: `Collection`.

[`src/templates/merch/Collection.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/Collection.tsx) · code · 24755 bytes

### LineItem.tsx

import { GatsbyImage } from 'gatsby-plugin-image' import React, { useEffect, useState } from
'react' import { cn } from '../../utils' import { Price } from './Price' import { Quantity }
from './Quantity' import { useCartStore } from './store' import { getLineItemImage } from
'./transforms' import { CartItem } from './types' Notable exports: `LineItem`.

[`src/templates/merch/LineItem.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/LineItem.tsx) · code · 3463 bytes

### LoaderIcon.tsx

import * as React from 'react' import { Ref, SVGProps, forwardRef } from 'react' Notable
exports: `LoaderIcon`.

[`src/templates/merch/LoaderIcon.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/LoaderIcon.tsx) · code · 1192 bytes

### MerchVideoCard.tsx

import React from 'react' import WistiaEmbed from 'components/WistiaEmbed' Notable exports:
`MerchVideoCard`.

[`src/templates/merch/MerchVideoCard.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/MerchVideoCard.tsx) · code · 709 bytes

### Nav.tsx

import { Listbox, Transition } from '@headlessui/react' import { IconCheck, IconChevronDown
} from '@posthog/icons' import Link from 'components/Link' import { navigate } from 'gatsby'
import React, { Fragment, useState } from 'react' import type { ShopifyCollection } from
'./types' Notable exports: `Nav`.

[`src/templates/merch/Nav.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/Nav.tsx) · code · 6960 bytes

### Price.tsx

import React from 'react' Notable exports: `Price`.

[`src/templates/merch/Price.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/Price.tsx) · code · 344 bytes

### Product.tsx

import { CallToAction } from 'components/CallToAction' import Layout from
'components/Layout' import { graphql } from 'gatsby' import React, { useState } from 'react'
import { cn } from '../../utils' import { BackInStockForm } from './BackInStockForm' import
{ LoaderIcon } from './LoaderIcon' import { Nav } from './Nav' import { Price } from
'./Price' import Notable exports: `Product`, `query`.

[`src/templates/merch/Product.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/Product.tsx) · code · 9106 bytes

### ProductCard.tsx

import { GatsbyImage } from 'gatsby-plugin-image' import React, { useMemo } from 'react'
import { cn } from '../../utils' import { ShopifyProduct } from './types' import {
getProductMetafield, getDisplayTitle } from './utils' import { getShopifyImage } from
'./utils' Notable exports: `ProductCard`.

[`src/templates/merch/ProductCard.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/ProductCard.tsx) · code · 3470 bytes

### ProductCarousel.tsx

import { GatsbyImage } from 'gatsby-plugin-image' import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' import React, { useMemo, useState,
useEffect } from 'react' import { cn } from '../../utils' import { ShopifyProduct } from
'./types' import { getProductImages, getShopifyImage, calculateAspectRatioDimensions } from
'./ Notable exports: `ProductCarousel`.

[`src/templates/merch/ProductCarousel.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/ProductCarousel.tsx) · code · 5330 bytes

### ProductGrid.tsx

import { Drawer } from 'components/Drawer' import React, { useState } from 'react' import {
cn } from '../../utils' import { ProductCard } from './ProductCard' import MerchVideoCard
from './MerchVideoCard' import { ProductPanels } from './ProductPanels' import {
ShopifyProduct } from './types' Notable exports: `ProductGrid`.

[`src/templates/merch/ProductGrid.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/ProductGrid.tsx) · code · 3703 bytes

### ProductOptionSelect.tsx

import { RadioGroup } from '@headlessui/react' import React from 'react' import { cn } from
'../../utils' import { ProductVariantOption } from './types' Notable exports:
`ProductOptionSelect`.

[`src/templates/merch/ProductOptionSelect.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/ProductOptionSelect.tsx) · code · 4736 bytes

### ProductPanel.tsx

import { CallToAction } from 'components/CallToAction' import React, { useMemo, useState }
from 'react' import { cn } from '../../utils' import { BackInStockForm } from
'./BackInStockForm' import { LoaderIcon } from './LoaderIcon' import { Price } from
'./Price' import { ProductCarousel } from './ProductCarousel' import { ProductOptionSelect }
from './Produc Notable exports: `ProductPanel`.

[`src/templates/merch/ProductPanel.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/ProductPanel.tsx) · code · 11889 bytes

### ProductPanels.tsx

import React, { useState } from 'react' import { cn } from '../../utils' import { Cart }
from './Cart' import { ProductPanel } from './ProductPanel' import { ShopifyProduct } from
'./types' Notable exports: `ProductPanels`.

[`src/templates/merch/ProductPanels.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/ProductPanels.tsx) · code · 1374 bytes

### Quantity.tsx

import { IconMinus, IconPlus } from '@posthog/icons' import { useControllableValue } from
'ahooks' import React from 'react' import { cn } from '../../utils' Notable exports:
`Quantity`.

[`src/templates/merch/Quantity.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/Quantity.tsx) · code · 2659 bytes

### QuantitySelector.tsx

Empty file `QuantitySelector.tsx` in the source tree. It is present (often as a placeholder
or `.gitkeep` stand-in) but contains no content to describe.

[`src/templates/merch/QuantitySelector.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/QuantitySelector.tsx) · empty · 0 bytes

### ShippingBanner.tsx

import React from 'react' import { IconWarning } from '@posthog/icons' Notable exports:
`ShippingBanner`.

[`src/templates/merch/ShippingBanner.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/ShippingBanner.tsx) · code · 1005 bytes

### SizeGuide.tsx

import CloudinaryImage from 'components/CloudinaryImage' import { ZoomImage } from
'components/ZoomImage' import React, { useState } from 'react' Notable exports: `SizeGuide`.

[`src/templates/merch/SizeGuide.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/SizeGuide.tsx) · code · 1739 bytes

### hooks.ts

import { shopifyHeaders, shopifyStorefrontUrl } from 'lib/shopify' import { useEffect,
useState } from 'react' import type { ProductVariantOption, SelectedOption, SelectedOptions,
StorefrontProduct, StorefrontProductOption, StorefrontProductVariant,
StorefrontProductVariantEdge, StorefrontProductVariantNode, StorefrontProductVariantsEdges,
StorefrontShopRequ Notable exports: `useProduct`.

[`src/templates/merch/hooks.ts`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/hooks.ts) · code · 7768 bytes

### index.tsx

import { getShopifyProduct } from './transforms' Notable exports: `MerchPage`, `query`.

[`src/templates/merch/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/index.tsx) · code · 6028 bytes

### store.ts

import { create } from 'zustand' import { persist, subscribeWithSelector } from
'zustand/middleware' import { getCartQuery } from '../../lib/shopify' import type { Cart,
CartItem, ShopifyProductVariant } from './types' Notable exports: `useCartStore`.

[`src/templates/merch/store.ts`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/store.ts) · code · 4483 bytes

### transforms.ts

import { IGatsbyImageData } from 'gatsby-plugin-image' import { ShopifyProduct,
ShopifyProductVariant } from './types' import { getShopifyImage } from './utils' Notable
exports: `getLineItemImage`, `shopifyGidToId`, `getProduct`, `getVariant`.

[`src/templates/merch/transforms.ts`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/transforms.ts) · code · 1058 bytes

### types.ts

import type { IGatsbyImageData } from 'gatsby-plugin-image' import { GraphQLError } from
'graphql' Notable exports: `CollectionPageContext`, `ImageLocalFile`, `MetafieldValue`,
`MetafieldKey`, `Metafield`, `ShopifyProductCategory`, `ShopifyCollection`,
`AllShopifyProduct`, and 34 more.

[`src/templates/merch/types.ts`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/types.ts) · code · 6887 bytes

### utils.ts

import { shopifyHeaders } from '../../lib/shopify' import type { CartItem, CartLineInput,
CreateCartVariables, MetafieldValue, ShopifyMediaImage, ShopifyMediaItem, ShopifyProduct, }
from './types' import { IUrlBuilderArgs, getImageData, IGatsbyImageData } from 'gatsby-
plugin-image' Notable exports: `getCartVariables`, `isNotNullish`, `getProductMetafield`,
`getProductMetafieldByNamespace`, `getProductImages`, `urlBuilder`

[`src/templates/merch/utils.ts`](https://github.com/quirq-ai/website/blob/main/src/templates/merch/utils.ts) · code · 4933 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
