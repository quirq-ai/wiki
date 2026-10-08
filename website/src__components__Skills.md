<!-- quirq-wiki-generated repo=website dir=src/components/Skills -->

# website / src/components/Skills

Source: [src/components/Skills](https://github.com/quirq-ai/website/tree/main/src/components/Skills) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### FlowChips.tsx

import React from 'react' import { IconGraph } from '@posthog/icons' import Link from
'components/Link' import { useFlowToolResolver } from 'hooks/skills' Notable exports:
`FlowChips`.

[`src/components/Skills/FlowChips.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/FlowChips.tsx) · code · 2267 bytes

### README.md

The project README (“Skills explorer”). UI for browsing agent-oriented PostHog use cases at
/skills. The page shows what each skill does, which products/tools power it, and the chain
of MCP tools an agent calls.

[`src/components/Skills/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/README.md) · code · 3987 bytes

### SkillDetailPane.tsx

const POSTHOG_APP_URL = 'https://app.posthog.com' Notable exports: `SkillDetailPane`.

[`src/components/Skills/SkillDetailPane.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/SkillDetailPane.tsx) · code · 6314 bytes

### SkillsBrowseHeader.tsx

import React from 'react' import { IconSearch, IconX } from '@posthog/icons' import {
ToggleGroup, ToggleOption } from 'components/RadixUI/ToggleGroup' import { BrowseMode,
SkillsBrowseHeaderProps } from './types' Notable exports: `SkillsBrowseHeader`.

[`src/components/Skills/SkillsBrowseHeader.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/SkillsBrowseHeader.tsx) · code · 2397 bytes

### SkillsColumnRow.tsx

import React from 'react' import { IconChevronRight, IconDocument } from '@posthog/icons'
import * as RadioGroup from '@radix-ui/react-radio-group' Notable exports:
`SkillsColumnRow`.

[`src/components/Skills/SkillsColumnRow.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/SkillsColumnRow.tsx) · code · 1865 bytes

### SkillsColumnShell.tsx

import React from 'react' Notable exports: `SkillsColumnShell`.

[`src/components/Skills/SkillsColumnShell.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/SkillsColumnShell.tsx) · code · 613 bytes

### SkillsColumnView.tsx

import React, { useMemo, useState, useEffect } from 'react' import useProduct from
'hooks/useProduct' import { Skill, buildOutcomeTree, buildProductTree, slugifySkillName }
from 'hooks/skills' import { resolveSkillResource } from 'hooks/skillsResourceRegistry'
import { useWindow } from '../../context/Window' import SkillsMobileColumnView from
'./SkillsMobile Notable exports: `SkillsColumnView`.

[`src/components/Skills/SkillsColumnView.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/SkillsColumnView.tsx) · code · 8152 bytes

### SkillsFinderColumn.tsx

import React, { useMemo } from 'react' import * as ScrollArea from '@radix-ui/react-scroll-
area' import * as RadioGroup from '@radix-ui/react-radio-group' import SkillsColumnRow from
'./SkillsColumnRow' import SkillsColumnShell from './SkillsColumnShell' import
SkillsBrowseHeader from './SkillsBrowseHeader' import SkillsMobileNav from
'./SkillsMobileNav' imp Notable exports: `SkillsFinderColumn`.

[`src/components/Skills/SkillsFinderColumn.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/SkillsFinderColumn.tsx) · code · 3201 bytes

### SkillsMobileColumnView.tsx

import React, { useCallback, useEffect, useRef, useState } from 'react' import {
OutcomeTreeNode, Skill } from 'hooks/skills' import SkillsFinderColumn from
'./SkillsFinderColumn' import SkillsOutcomeSkillsColumn from './SkillsOutcomeSkillsColumn'
import SkillDetailPane from './SkillDetailPane' import SkillsMobileNav from
'./SkillsMobileNav' import { MobileP Notable exports: `SkillsMobileColumnView`.

[`src/components/Skills/SkillsMobileColumnView.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/SkillsMobileColumnView.tsx) · code · 6846 bytes

### SkillsMobileNav.tsx

import React from 'react' import { IconArrowLeft } from '@posthog/icons' import {
SkillsMobileNavProps } from './types' Notable exports: `SkillsMobileNav`.

[`src/components/Skills/SkillsMobileNav.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/SkillsMobileNav.tsx) · code · 805 bytes

### SkillsOutcomeSkillsColumn.tsx

import React from 'react' import * as ScrollArea from '@radix-ui/react-scroll-area' import *
as RadioGroup from '@radix-ui/react-radio-group' import { IconDocument } from
'@posthog/icons' import { Skill, OutcomeTreeNode } from 'hooks/skills' import
SkillsColumnShell from './SkillsColumnShell' import SkillsMobileNav from './SkillsMobileNav'
import { SkillsMob Notable exports: `SkillsOutcomeSkillsColumn`.

[`src/components/Skills/SkillsOutcomeSkillsColumn.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/SkillsOutcomeSkillsColumn.tsx) · code · 4455 bytes

### SkillsWideColumnView.tsx

import React from 'react' import SkillsFinderColumn from './SkillsFinderColumn' import
SkillsOutcomeSkillsColumn from './SkillsOutcomeSkillsColumn' import SkillDetailPane from
'./SkillDetailPane' import { SkillsBrowseColumnsProps, SkillsDetailPaneProps } from
'./types' Notable exports: `SkillsWideColumnView`.

[`src/components/Skills/SkillsWideColumnView.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/SkillsWideColumnView.tsx) · code · 3865 bytes

### types.ts

import type React from 'react' import { OutcomeTreeNode, Skill } from 'hooks/skills' Notable
exports: `BrowseMode`, `MobilePanel`, `ProductBrowseEntry`, `SkillsBrowseHeaderProps`,
`SkillsMobileNavProps`, `SkillsBrowseColumnsProps`, `SkillsDetailPaneProps`.

[`src/components/Skills/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Skills/types.ts) · code · 1505 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
