<!-- quirq-wiki-generated repo=website dir=src/components/ProductTabs -->

# website / src/components/ProductTabs

Source: [src/components/ProductTabs](https://github.com/quirq-ai/website/tree/main/src/components/ProductTabs) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“ProductTabs Component”). A reusable component that displays PostHog
products as tabs using the OSTabs component. It automatically pulls product data from the
useProduct hook based on an array of product handles.

[`src/components/ProductTabs/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/ProductTabs/README.md) · code · 3098 bytes

### index.tsx

import React, { useEffect, useState } from 'react' import OSTabs from 'components/OSTabs'
import useProduct from 'hooks/useProduct' import Link from 'components/Link' import OSButton
from 'components/OSButton' import { APP_COUNT } from '../../constants' import
CloudinaryImage from 'components/CloudinaryImage' import { useApp } from '../../context/App'
import Notable exports: `ProductTabs`.

[`src/components/ProductTabs/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ProductTabs/index.tsx) · code · 9786 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
