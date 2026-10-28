<!-- quirq-wiki-generated repo=monitoring dir=components/settings -->

# monitoring / components/settings

Source: [components/settings](https://github.com/quirq-ai/monitoring/tree/main/components/settings) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### connect.tsx

How this editor reaches GitHub. Locally (pnpm editor) it is the person's own gh login, and
the card says who that is. On the deployed site nobody signs in and no token is kept: the
review screen hands over a gh script instead. Notable exports: `ConnectCard`. Marked `'use
client'` so it runs in the browser.

[`components/settings/connect.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/settings/connect.tsx) · code · 2793 bytes

### editor.tsx

type Mode = "gh" | "script"; type Group = { id: string; title: string; blurb: string }
Notable exports: `SettingsEditor`. Marked `'use client'` so it runs in the browser.

[`components/settings/editor.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/settings/editor.tsx) · code · 20946 bytes

### fields.tsx

One row per value. A changed row carries a bar in the pending color and says what it was,
with an undo; a value the editor cannot change in place is shown as text with a link to its
line. Notable exports: `fieldText`, `TomlField`, `OwnerRuleRow`, `PropertyField`,
`OwnersDraft`. Marked `'use client'` so it runs in the browser.

[`components/settings/fields.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/settings/fields.tsx) · code · 11428 bytes

### review.tsx

const SCRIPT_NAME = "settings-change.sh" Notable exports: `Review`. Marked `'use client'` so
it runs in the browser.

[`components/settings/review.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/settings/review.tsx) · code · 11170 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
