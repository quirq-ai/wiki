<!-- quirq-wiki-generated repo=website dir=src/components/Pricing/PricingTable -->

# website / src/components/Pricing/PricingTable

Source: [src/components/Pricing/PricingTable](https://github.com/quirq-ai/website/tree/main/src/components/Pricing/PricingTable) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### CloudEnterpriseModal.js

import { Close } from 'components/Icons/Icons' import Modal from 'components/Modal' import {
useActions, useValues } from 'kea' import React, { useEffect } from 'react' import {
CLOUD_ENTERPRISE_MINIMUM_PRICING } from '../constants' import { PricingSlider } from
'../PricingSlider' import { pricingSliderLogic } from '../PricingSlider/pricingSliderLogic'
impor Notable exports: `CloudEnterpriseModal`.

[`src/components/Pricing/PricingTable/CloudEnterpriseModal.js`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingTable/CloudEnterpriseModal.js) · code · 6854 bytes

### CloudModal.js

import { Close } from 'components/Icons/Icons' import Modal from 'components/Modal' import {
useActions, useValues } from 'kea' import React, { useEffect } from 'react' import {
CLOUD_MINIMUM_PRICING } from '../constants' import { PricingSlider } from '../PricingSlider'
import { pricingSliderLogic } from '../PricingSlider/pricingSliderLogic' import { Plan }
Notable exports: `CloudModal`.

[`src/components/Pricing/PricingTable/CloudModal.js`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingTable/CloudModal.js) · code · 6015 bytes

### CloudPlanBreakdown.tsx

import { section } from 'components/Home/classes' import { Cloud as CloudIcon, Lightning }
from 'components/Icons/Icons' import React, { useState } from 'react' import { Cloud,
CloudEnterprise } from './Plans' import CloudModal from './CloudModal' import
CloudEnterpriseModal from './CloudEnterpriseModal' Notable exports: `CloudPlanBreakdown`.

[`src/components/Pricing/PricingTable/CloudPlanBreakdown.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingTable/CloudPlanBreakdown.tsx) · code · 2302 bytes

### EnterpriseModal.js

import { Close } from 'components/Icons/Icons' import Modal from 'components/Modal' import {
useActions, useValues } from 'kea' import React, { useEffect } from 'react' import {
ENTERPRISE_MINIMUM_PRICING } from '../constants' import { PricingSlider } from
'../PricingSlider' import { pricingSliderLogic } from '../PricingSlider/pricingSliderLogic'
import { Pl Notable exports: `EnterpriseModal`.

[`src/components/Pricing/PricingTable/EnterpriseModal.js`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingTable/EnterpriseModal.js) · code · 6283 bytes

### Plan.tsx

import React from 'react' import { feature } from './classes' Notable exports: `Feature`,
`Features`, `Badge`, `Title`, `Plan`, `Price`, `Section`.

[`src/components/Pricing/PricingTable/Plan.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingTable/Plan.tsx) · code · 2461 bytes

### Plans.js

import { TrackedCTA } from 'components/CallToAction/index.tsx' import { Check2 } from
'components/Icons/Icons' import Link from 'components/Link' import CallToAction from
'components/MainNav/Submenus/CallToAction' import React from 'react' import { SelfHostIcon }
from '../Calculator' import { CLOUD_ENTERPRISE_MINIMUM_PRICING, CLOUD_MINIMUM_PRICING,
ENTERPRIS Notable exports: `SelfHosted`, `Enterprise`.

[`src/components/Pricing/PricingTable/Plans.js`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingTable/Plans.js) · code · 4458 bytes

### ScaleModal.js

import { Close } from 'components/Icons/Icons' import Modal from 'components/Modal' import {
useActions, useValues } from 'kea' import React, { useEffect } from 'react' import {
SCALE_MINIMUM_PRICING } from '../constants' import { PricingSlider } from '../PricingSlider'
import { pricingSliderLogic } from '../PricingSlider/pricingSliderLogic' import { Plan }
Notable exports: `ScaleModal`.

[`src/components/Pricing/PricingTable/ScaleModal.js`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingTable/ScaleModal.js) · code · 6309 bytes

### SelfHostedPlanBreakdown.tsx

import { section } from 'components/Home/classes' import { Prohibited, ServerLocked, WebCode
} from 'components/Icons/Icons' import React, { useState } from 'react' import { Enterprise,
OpenSource, Scale } from './Plans' import ScaleModal from './ScaleModal' import
EnterpriseModal from './EnterpriseModal' Notable exports: `SelfHostedPlanBreakdown`.

[`src/components/Pricing/PricingTable/SelfHostedPlanBreakdown.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingTable/SelfHostedPlanBreakdown.tsx) · code · 2814 bytes

### classes.js

import cntl from 'cntl' Notable exports: `feature`.

[`src/components/Pricing/PricingTable/classes.js`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingTable/classes.js) · code · 227 bytes

### index.tsx

import { useLocation } from '@reach/router' import Chip from 'components/Chip' import {
inverseCurve } from 'components/Pricing/PricingSlider/Slider' import { useActions } from
'kea' import queryString from 'query-string' import React, { useEffect, useState } from
'react' import { Structure } from '../../Structure' import { PricingOptionType,
pricingSliderLo Notable exports: `PricingTable`.

[`src/components/Pricing/PricingTable/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Pricing/PricingTable/index.tsx) · code · 2293 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
