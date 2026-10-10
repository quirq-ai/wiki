<!-- quirq-wiki-generated repo=website dir=src/components/Points -->

# website / src/components/Points

Source: [src/components/Points](https://github.com/quirq-ai/website/tree/main/src/components/Points) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### CopyButton.tsx

import React, { useState } from 'react' import { IconCheck, IconCopy } from '@posthog/icons'
Notable exports: `CopyButton`.

[`src/components/Points/CopyButton.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Points/CopyButton.tsx) · code · 815 bytes

### RewardCard.tsx

import React, { useState } from 'react' import OSButton from 'components/OSButton' import {
useApp } from '../../context/App' import { useUser } from 'hooks/useUser' import {
createCartQuery, shopifyStorefrontUrl, shopifyHeaders } from '../../lib/shopify' import
CopyButton from './CopyButton' import type { Reward, RewardCardState } from './types'
Notable exports: `RewardCard`.

[`src/components/Points/RewardCard.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Points/RewardCard.tsx) · code · 11171 bytes

### TransactionTitle.tsx

import React, { useState } from 'react' import { IconPresent, IconReceipt, IconBadge,
IconCheck, IconCopy, IconMessage } from '@posthog/icons' import CloudinaryImage from
'components/CloudinaryImage' import dayjs from 'dayjs' import type { TransactionMetadata }
from './types' import Link from 'components/Link' Notable exports: `TransactionTitle`.

[`src/components/Points/TransactionTitle.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Points/TransactionTitle.tsx) · code · 5306 bytes

### index.tsx

import React, { useState } from 'react' import { graphql, useStaticQuery } from 'gatsby'
import { IconShieldLock, IconWarning } from '@posthog/icons' import { Fieldset } from
'components/OSFieldset' import Link from 'components/Link' import Tooltip from
'components/RadixUI/Tooltip' import { useUser } from 'hooks/useUser' import RewardCard from
'./RewardCard' Notable exports: `Points`.

[`src/components/Points/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Points/index.tsx) · code · 8417 bytes

### types.ts

export interface Reward { id: string handle: string title: string description: string price:
number image: string merchStoreHandle: string | null discountAmount: number | null } Notable
exports: `Reward`, `RewardCardState`.

[`src/components/Points/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Points/types.ts) · code · 528 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
