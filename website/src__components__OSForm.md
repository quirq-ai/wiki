<!-- quirq-wiki-generated repo=website dir=src/components/OSForm -->

# website / src/components/OSForm

Source: [src/components/OSForm](https://github.com/quirq-ai/website/tree/main/src/components/OSForm) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Combobox.tsx

import React from 'react' import { IconX, IconCheck } from '@posthog/icons' import OSButton
from 'components/OSButton' Notable exports: `Combobox`.

[`src/components/OSForm/Combobox.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSForm/Combobox.tsx) · code · 11220 bytes

### README.md

The project README (“OSForm Components”). A comprehensive form component system for the
PostHog website that provides consistent styling and behavior across all forms.

[`src/components/OSForm/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/OSForm/README.md) · code · 20479 bytes

### TeamMemberMultiSelect.tsx

import React from 'react' import { IconX } from '@posthog/icons' import { Accordion } from
'components/RadixUI/Accordion' import { Checkbox } from 'components/RadixUI/Checkbox' import
Tooltip from 'components/RadixUI/Tooltip' Notable exports: `TeamMemberMultiSelect`,
`TeamContext`, `SelectedMember`, `TeamProfile`, `Team`.

[`src/components/OSForm/TeamMemberMultiSelect.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSForm/TeamMemberMultiSelect.tsx) · code · 19373 bytes

### field.tsx

import React from 'react' import { IconInfo } from '@posthog/icons' Provides a default
export as the module's public entry.

[`src/components/OSForm/field.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSForm/field.tsx) · code · 2103 bytes

### index.tsx

export { default as OSInput } from './input' export { default as OSTextarea } from
'./textarea' export { default as OSSelect } from './select' export { Combobox } from
'./Combobox' export { TeamMemberMultiSelect } from './TeamMemberMultiSelect' export type {
SelectedMember } from './TeamMemberMultiSelect' Notable exports: `OSInput`, `OSTextarea`,
`OSSelect`, `Combobox`, `TeamMemberMultiSelect`.

[`src/components/OSForm/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSForm/index.tsx) · code · 307 bytes

### input.tsx

import React from 'react' import { IconInfo, IconX } from '@posthog/icons' import Tooltip
from 'components/RadixUI/Tooltip' Provides a default export as the module's public entry.

[`src/components/OSForm/input.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSForm/input.tsx) · code · 5402 bytes

### select.tsx

import React, { useState, useRef, useEffect, useMemo } from 'react' import {
IconChevronDown, IconSearch, IconCheck, IconInfo } from '@posthog/icons' import Tooltip from
'components/RadixUI/Tooltip' import ScrollArea from 'components/RadixUI/ScrollArea' Notable
exports: `SelectOption`.

[`src/components/OSForm/select.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSForm/select.tsx) · code · 19100 bytes

### textarea.tsx

import React from 'react' import { IconInfo } from '@posthog/icons' Provides a default
export as the module's public entry.

[`src/components/OSForm/textarea.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/OSForm/textarea.tsx) · code · 4083 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
