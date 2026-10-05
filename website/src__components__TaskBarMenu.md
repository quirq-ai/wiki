<!-- quirq-wiki-generated repo=website dir=src/components/TaskBarMenu -->

# website / src/components/TaskBarMenu

Source: [src/components/TaskBarMenu](https://github.com/quirq-ai/website/tree/main/src/components/TaskBarMenu) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“TaskBar Menu System”). The TaskBar menu system provides a desktop-style
navigation experience that adapts to mobile viewports. On mobile devices (viewport < 768px),
the menu automatically truncates deep nesting and simplifies navigation to improve
usability.

[`src/components/TaskBarMenu/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/TaskBarMenu/README.md) · code · 5219 bytes

### SearchableProductMenu.tsx

import React, { useState, useMemo, useEffect, useRef } from 'react' import { IconSearch }
from '@posthog/icons' import Link from 'components/Link' import { BROWSE_TOOLS_HANDLES }
from 'constants/productNavigation' Provides a default export as the module's public entry.

[`src/components/TaskBarMenu/SearchableProductMenu.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TaskBarMenu/SearchableProductMenu.tsx) · code · 5437 bytes

### index.tsx

import React, { useCallback, useEffect, useState } from 'react' import { IconSearch, IconApp
} from '@posthog/icons' import { useAppActions } from '../../context/App' import MenuBar
from 'components/RadixUI/MenuBar' import ActiveWindowsPanel from
'components/ActiveWindowsPanel' import OSButton from 'components/OSButton' import Tooltip
from 'components/RadixU Provides a default export as the module's public entry.

[`src/components/TaskBarMenu/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TaskBarMenu/index.tsx) · code · 5064 bytes

### menuData.tsx

import React from 'react' import { MenuType, MenuItemType } from
'components/RadixUI/MenuBar' import { IconBrightness, IconChevronDown, IconHome, IconApps }
from '@posthog/icons' import { IconGithub } from 'components/OSIcons' import QuirqAppIcon
from 'components/QuirqAppIcon' import { useAppActions, useAppSettings } from
'../../context/App' import { getQuir Notable exports: `useMenuData`, `useMenuSelectOptions`

[`src/components/TaskBarMenu/menuData.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/TaskBarMenu/menuData.tsx) · code · 3682 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
