<!-- quirq-wiki-generated repo=website dir=src/components/WebMCP -->

# website / src/components/WebMCP

Source: [src/components/WebMCP](https://github.com/quirq-ai/website/tree/main/src/components/WebMCP) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“WebMCP”). Registers
[WebMCP](https://webmachinelearning.github.io/webmcp/) tools on every page so a browser
agent can search, read, and navigate posthog.com through typed function calls instead of
reading the DOM. The component renders nothing. It is mounted once, in components/Wrapper,
next to the other global overlays.

[`src/components/WebMCP/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/WebMCP/README.md) · code · 6023 bytes

### index.tsx

import { useEffect, useRef } from 'react' import type { MutableRefObject } from 'react'
import { navigate } from 'gatsby' import { useAppActions } from '../../context/App' import
type { ChatParams } from '../../context/App' import { useAgentSkills } from 'hooks/skills'
import type { AgentSkill } from 'hooks/skills' import { algoliaIndexName, algoliaSearchCli
Notable exports: `WebMCP`.

[`src/components/WebMCP/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/WebMCP/index.tsx) · code · 20911 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
