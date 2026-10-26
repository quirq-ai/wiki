<!-- quirq-wiki-generated repo=setup dir=components -->

# setup / components

Source: [components](https://github.com/quirq-ai/setup/tree/main/components) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### about.tsx

What qq and xo are, in the words of their own guides (docs.quirq.dev "What is qq", the xo
README and quickstart). Each says a line and links out; the guides stay the place to read
more. Notable exports: `AboutQq`, `AboutXo`, `AboutOrgSetup`, `AboutTogether`.

[`components/about.tsx`](https://github.com/quirq-ai/setup/blob/main/components/about.tsx) · code · 3645 bytes

### command.tsx

export function Command({ children, label }: { children: string; label: string }) { const
[copied, setCopied] = useState(null); return ( Notable exports: `Command`. Marked `'use
client'` so it runs in the browser.

[`components/command.tsx`](https://github.com/quirq-ai/setup/blob/main/components/command.tsx) · code · 1581 bytes

### learn-more.tsx

/** A quiet "learn more" line: closed by default, opens in place (never a popup), so the
page stays short until asked. */ export function LearnMore({ title, children }: { title:
string; children: React.ReactNode }) { return ( Notable exports: `LearnMore`, `GuideLink`.
Marked `'use client'` so it runs in the browser.

[`components/learn-more.tsx`](https://github.com/quirq-ai/setup/blob/main/components/learn-more.tsx) · code · 1354 bytes

### machine-panel.tsx

type Tool = "qq" | "xo"; type Run = NonNullable Notable exports: `MachinePanel`. Marked
`'use client'` so it runs in the browser.

[`components/machine-panel.tsx`](https://github.com/quirq-ai/setup/blob/main/components/machine-panel.tsx) · code · 17043 bytes

### setup-form.tsx

import { api, ApiError, keyFromHash, KIND_LABELS, STARTER_LABELS, type RepoList, type
StarterKind, type Machine, type State, } from "@/lib/api"; What closed the form: the "This
machine" Done button, or the org answers. type Mode = "machine" | "repos" Notable exports:
`SetupForm`. Marked `'use client'` so it runs in the browser.

[`components/setup-form.tsx`](https://github.com/quirq-ai/setup/blob/main/components/setup-form.tsx) · code · 19988 bytes

_Generated 2026-10-26 11:39 UTC from `main`._
