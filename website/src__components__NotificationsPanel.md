<!-- quirq-wiki-generated repo=website dir=src/components/NotificationsPanel -->

# website / src/components/NotificationsPanel

Source: [src/components/NotificationsPanel](https://github.com/quirq-ai/website/tree/main/src/components/NotificationsPanel) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### index.tsx

import React, { useEffect, useRef } from 'react' import { IconX } from '@posthog/icons'
import { useUser } from 'hooks/useUser' import dayjs from 'dayjs' import relativeTime from
'dayjs/plugin/relativeTime' import isSameOrAfter from 'dayjs/plugin/isSameOrAfter' import {
navigate } from 'gatsby' import ScrollArea from 'components/RadixUI/ScrollArea' import {
Notable exports: `NotificationsPanel`.

[`src/components/NotificationsPanel/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/NotificationsPanel/index.tsx) · code · 10376 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
