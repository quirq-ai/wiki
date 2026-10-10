<!-- quirq-wiki-generated repo=website dir=src/context -->

# website / src/context

Source: [src/context](https://github.com/quirq-ai/website/tree/main/src/context) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### App.tsx

eslint-disable @typescript-eslint/no-empty-function Notable exports: `MenuItem`, `Menu`,
`ChatParams`, `AppActionsContextType`, `AppSettingsContextType`, `AppUIStateContextType`,
`AppWindowsContextType`, `Context`, and 8 more.

[`src/context/App.tsx`](https://github.com/quirq-ai/website/blob/main/src/context/App.tsx) · code · 101766 bytes

### Toast.tsx

import React, { createContext, useContext, useState } from 'react' import Toasts from
'components/Toast' Notable exports: `Toast`, `Context`, `Provider`, `useToast`.

[`src/context/Toast.tsx`](https://github.com/quirq-ai/website/blob/main/src/context/Toast.tsx) · code · 1617 bytes

### Window.tsx

import { IMenu } from 'components/PostLayout/types' import React, { createContext,
useContext, useMemo } from 'react' import { AppSetting, MenuItem } from './App' import {
MenuItemType } from 'components/RadixUI/MenuBar' Notable exports: `AppWindow`, `Context`,
`Provider`, `useWindow`.

[`src/context/Window.tsx`](https://github.com/quirq-ai/website/blob/main/src/context/Window.tsx) · code · 5520 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
