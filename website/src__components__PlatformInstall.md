<!-- quirq-wiki-generated repo=website dir=src/components/PlatformInstall -->

# website / src/components/PlatformInstall

Source: [src/components/PlatformInstall](https://github.com/quirq-ai/website/tree/main/src/components/PlatformInstall) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### CopyableCommand.tsx

import React, { useRef, useState } from 'react' import { IconCheck, IconCopy } from
'@posthog/icons' import { useToast } from '../../context/Toast' import { cn } from
'../../utils' import { useCopyConfettiZIndex, fireCopyConfetti } from './confetti' Notable
exports: `CopyableCommand`, `CopyableCommandProps`.

[`src/components/PlatformInstall/CopyableCommand.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PlatformInstall/CopyableCommand.tsx) · code · 3794 bytes

### IconButton.tsx

import React from 'react' import ZoomHover from 'components/ZoomHover' import Tooltip from
'components/RadixUI/Tooltip' import { cn } from '../../utils' Notable exports: `IconButton`,
`IconButtonProps`.

[`src/components/PlatformInstall/IconButton.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PlatformInstall/IconButton.tsx) · code · 2228 bytes

### InlineCommand.tsx

import React, { useRef, useState } from 'react' import { IconCopy, IconChevronRight,
IconCheck, IconArrowUpRight } from '@posthog/icons' import { useToast } from
'../../context/Toast' import Link from 'components/Link' import ZoomHover from
'components/ZoomHover' import { useCopyConfettiZIndex, fireCopyConfetti } from './confetti'
Notable exports: `InlineCommand`, `InlineCommandProps`.

[`src/components/PlatformInstall/InlineCommand.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PlatformInstall/InlineCommand.tsx) · code · 4431 bytes

### README.md

The project README (“PlatformInstall”). A reusable copy-snippet installer that surfaces
tailored instructions for each supported platform behind a single, schema-driven UI.

[`src/components/PlatformInstall/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/PlatformInstall/README.md) · code · 5812 bytes

### buildCommand.ts

Single source of truth for how the PostHog wizard command string is assembled. Notable
exports: `buildWizardCommand`, `buildSchemaCommand`.

[`src/components/PlatformInstall/buildCommand.ts`](https://github.com/quirq-ai/website/blob/main/src/components/PlatformInstall/buildCommand.ts) · code · 2487 bytes

### confetti.ts

import { useMemo } from 'react' import confetti from 'canvas-confetti' import { useApp }
from '../../context/App' Notable exports: `useCopyConfettiZIndex`, `fireCopyConfetti`.

[`src/components/PlatformInstall/confetti.ts`](https://github.com/quirq-ai/website/blob/main/src/components/PlatformInstall/confetti.ts) · code · 2645 bytes

### index.tsx

import React, { useEffect, useMemo, useState } from 'react' import { IconInfo, IconQuestion
} from '@posthog/icons' import Link from 'components/Link' import Tooltip from
'components/RadixUI/Tooltip' import { cn } from '../../utils' import ZoomHover from
'components/ZoomHover' import IconButton from './IconButton' import { CopyableCommand } from
'./CopyableC Notable exports: `PlatformInstall`, `PlatformInstallProps`, `CopyableCommand`

[`src/components/PlatformInstall/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PlatformInstall/index.tsx) · code · 16980 bytes

### schema.tsx

import React from 'react' import { IconClaudeCode, LogomarkCodex, LogomarkCursor,
LogomarkLovable, LogomarkReplit, LogomarkV0, LogomarkVSCode, LogomarkWindsurf, LogomarkZed,
} from 'components/OSIcons/Icons' import Link from 'components/Link' import
WizardFrameworksTeaser from 'components/WizardFrameworksTeaser' import { IconArrowUpRight }
from '@posthog/ico Notable exports: `InstallMethod`, `PlatformOption`, `Platform`

[`src/components/PlatformInstall/schema.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/PlatformInstall/schema.tsx) · code · 19482 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
