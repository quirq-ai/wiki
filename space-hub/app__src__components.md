<!-- quirq-wiki-generated repo=space-hub dir=app/src/components -->

# space-hub / app/src/components

Source: [app/src/components](https://github.com/quirq-ai/space-hub/tree/main/app/src/components) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### content-view.tsx

type ObjectValue = Record; type Navigate = (path: string) => void; const object = (value:
unknown): value is ObjectValue => value !== null && typeof value === "object" &&
!Array.isArray(value); const string = (value: unknown) => typeof value === "string" ? value
: "" Notable exports: `Markdown`, `FileContent`, `isConversation`.

[`app/src/components/content-view.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/content-view.tsx) · code · 13627 bytes

### theme-picker.tsx

function currentPreference(): ThemePreference { return
themePreference(document.documentElement.dataset.themePreference); } Notable exports:
`ThemePicker`.

[`app/src/components/theme-picker.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/components/theme-picker.tsx) · code · 3640 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
