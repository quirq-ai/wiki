<!-- quirq-wiki-generated repo=website dir=src/components/RadixUI -->

# website / src/components/RadixUI

Source: [src/components/RadixUI](https://github.com/quirq-ai/website/tree/main/src/components/RadixUI) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Accordion.tsx

import React from 'react' import { Accordion as RadixAccordion } from 'radix-ui' import * as
Icons from '@posthog/icons' Notable exports: `Accordion`, `AccordionItem`,
`AccordionTrigger`, `AccordionContent`.

[`src/components/RadixUI/Accordion.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Accordion.tsx) · code · 5338 bytes

### Checkbox.tsx

import React from 'react' import { Checkbox as RadixCheckbox } from 'radix-ui' import {
IconCheck } from '@posthog/icons' Notable exports: `Checkbox`.

[`src/components/RadixUI/Checkbox.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Checkbox.tsx) · code · 1916 bytes

### ContextMenu.tsx

import * as React from 'react' import { ContextMenu as RadixContextMenu } from 'radix-ui'
import KeyboardShortcut from "components/KeyboardShortcut" Notable exports:
`ContextMenuItemProps`, `ContextMenuProps`.

[`src/components/RadixUI/ContextMenu.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/ContextMenu.tsx) · code · 3694 bytes

### FileMenu.tsx

--- Data Structure --- Notable exports: `FileMenu`.

[`src/components/RadixUI/FileMenu.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/FileMenu.tsx) · code · 9040 bytes

### MenuBar.tsx

Types Notable exports: `MenuItemType`, `MenuType`, `MenuBarProps`.

[`src/components/RadixUI/MenuBar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/MenuBar.tsx) · code · 20774 bytes

### Modal.tsx

import React from 'react' import { Dialog as RadixDialog } from 'radix-ui' import { IconX }
from '@posthog/icons' import { useWindow } from '../../context/Window' import OSButton from
'components/OSButton' Provides a default export as the module's public entry.

[`src/components/RadixUI/Modal.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Modal.tsx) · code · 2781 bytes

### Popover.tsx

import React, { useRef, useEffect } from 'react' import { Popover as RadixPopover } from
'radix-ui' import ScrollArea from 'components/RadixUI/ScrollArea' import { IconX } from
'@posthog/icons' Notable exports: `Popover`.

[`src/components/RadixUI/Popover.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Popover.tsx) · code · 4020 bytes

### RadioGroup.tsx

import React from 'react' import * as RadixRadioGroup from '@radix-ui/react-radio-group'
Notable exports: `RadioOption`, `RadioGroupProps`, `RadioGroup`.

[`src/components/RadixUI/RadioGroup.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/RadioGroup.tsx) · code · 1924 bytes

### ScrollArea.tsx

There is no media query for scrollbar visibility, so the OS preference has to be measured:
overlay scrollbars reserve no space, classic ones do. The probe lives in a shadow root
because Blink puts an element into custom-scrollbar mode — always classic, never overlay —
as soon as any author `::-webkit-scrollbar` rule matches it, and ours match `*`.

[`src/components/RadixUI/ScrollArea.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/ScrollArea.tsx) · code · 7285 bytes

### Select.tsx

import React from 'react' import { Select as RadixSelect } from 'radix-ui' import {
IconCheck, IconChevronDown } from '@posthog/icons' import * as NotProductIcons from
'../NotProductIcons' import * as NewIcons from '@posthog/icons' import * as OSIcons from
'../OSIcons/Icons' type SelectItem = { value: string label: string disabled?: boolean icon?:
string | R Notable exports: `Select`.

[`src/components/RadixUI/Select.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Select.tsx) · code · 9826 bytes

### Slider.tsx

import * as React from 'react' import { Slider as RadixSlider } from 'radix-ui' Provides a
default export as the module's public entry.

[`src/components/RadixUI/Slider.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Slider.tsx) · code · 1270 bytes

### Switch.tsx

import * as React from 'react' import { Switch as RadixSwitch } from 'radix-ui' Provides a
default export as the module's public entry.

[`src/components/RadixUI/Switch.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Switch.tsx) · code · 1847 bytes

### Tabs.tsx

import * as React from 'react' import { Tabs as RadixTabs } from 'radix-ui' Notable exports:
`PresentationModeContext`.

[`src/components/RadixUI/Tabs.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Tabs.tsx) · code · 6627 bytes

### Toast.tsx

import * as React from 'react' import { Toast as RadixToast } from 'radix-ui' import
OSButton from 'components/OSButton' import { IconUndo } from '@posthog/icons' import
'./css/toast.css' Provides a default export as the module's public entry.

[`src/components/RadixUI/Toast.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Toast.tsx) · code · 3223 bytes

### ToggleGroup.tsx

import React from 'react' import { ToggleGroup as RadixToggleGroup } from 'radix-ui' Notable
exports: `ToggleOption`, `ToggleGroupProps`, `ToggleGroup`.

[`src/components/RadixUI/ToggleGroup.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/ToggleGroup.tsx) · code · 2976 bytes

### Toolbar.tsx

import * as React from 'react' import * as RadixToolbar from '@radix-ui/react-toolbar'
import OSButton from 'components/OSButton' import { Select } from './Select' Notable
exports: `ToolbarItem`, `ToolbarGroup`, `ToolbarSelect`, `ToolbarElement`, `Toolbar`.

[`src/components/RadixUI/Toolbar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Toolbar.tsx) · code · 4110 bytes

### Tooltip.tsx

import * as React from 'react' import { Tooltip as RadixTooltip } from 'radix-ui' import {
cn } from '../../utils' Notable exports: `TooltipProps`.

[`src/components/RadixUI/Tooltip.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/RadixUI/Tooltip.tsx) · code · 2598 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
