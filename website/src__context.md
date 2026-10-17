<!-- quirq-wiki-generated repo=website dir=src/context -->

# website / src/context

Source: [src/context](https://github.com/quirq-ai/website/tree/main/src/context) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### App.tsx

eslint-disable @typescript-eslint/no-empty-function Notable exports: `MenuItem`, `Menu`,
`AppActionsContextType`, `AppSettingsContextType`, `AppUIStateContextType`,
`AppWindowsContextType`, `Context`, `ActionsContext`, and 7 more.

[`src/context/App.tsx`](https://github.com/quirq-ai/website/blob/main/src/context/App.tsx) · code · 70648 bytes

### Toast.tsx

import React, { createContext, useContext, useState } from 'react' import Toasts from
'components/Toast' Notable exports: `Toast`, `Context`, `Provider`, `useToast`.

[`src/context/Toast.tsx`](https://github.com/quirq-ai/website/blob/main/src/context/Toast.tsx) · code · 1617 bytes

### Window.tsx

import React, { createContext, useContext, useMemo } from 'react' import { AppSetting,
MenuItem } from './App' import { MenuItemType } from 'components/RadixUI/MenuBar' Notable
exports: `WindowMenuItem`, `AppWindow`, `Context`, `Provider`, `useWindow`.

[`src/context/Window.tsx`](https://github.com/quirq-ai/website/blob/main/src/context/Window.tsx) · code · 4631 bytes

_Generated 2026-10-17 09:48 UTC from `main`._
