<!-- quirq-wiki-generated repo=website dir=src/components/CompensationCalculator -->

# website / src/components/CompensationCalculator

Source: [src/components/CompensationCalculator](https://github.com/quirq-ai/website/tree/main/src/components/CompensationCalculator) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Combobox.tsx

import React from 'react' import { Combobox as HeadlessCombobox, Transition } from
'@headlessui/react' import { SelectorIcon, CheckIcon } from '@heroicons/react/outline'
import { classNames } from 'lib/utils' Notable exports: `Combobox`.

[`src/components/CompensationCalculator/Combobox.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/CompensationCalculator/Combobox.tsx) · code · 6971 bytes

### index.tsx

import React from 'react' import { RadioGroup } from '@headlessui/react' import Combobox
from './Combobox' import { useBreakpoint } from 'gatsby-plugin-breakpoints' import {
locationFactor } from './compensation_data/location_factor' import { sfBenchmark } from
'./compensation_data/sf_benchmark' import { levelModifier } from
'./compensation_data/level_modifi Notable exports: `CompensationCalculator`.

[`src/components/CompensationCalculator/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/CompensationCalculator/index.tsx) · code · 14722 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
