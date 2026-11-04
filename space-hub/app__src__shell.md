<!-- quirq-wiki-generated repo=space-hub dir=app/src/shell -->

# space-hub / app/src/shell

Source: [app/src/shell](https://github.com/quirq-ai/space-hub/tree/main/app/src/shell) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### dock-icons.ts

What a drawn icon shows (ui/app-icon.tsx): a section's glyph, or a project's initials.
Notable exports: `projectIcons`, `DockArt`, `DockIcon`, `folderIcon`, `APP_ICONS`,
`SECTION_ICONS`, `spaceIcon`, `projectIcon`.

[`app/src/shell/dock-icons.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/shell/dock-icons.ts) · code · 3812 bytes

### path-bar.tsx

type Option = { key: string; label: string; href: string; kind: "space" | "project" |
"folder" | "file"; spaceKind?: string }; type Segment = { key: string; label: string; href:
string; current: boolean; load: () => Promise } Notable exports: `PathBar`.

[`app/src/shell/path-bar.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/shell/path-bar.tsx) · code · 5501 bytes

### search.tsx

type Result = { key: string; kind: "space" | "project" | "file"; label: string; detail:
string; href: string; name?: string } Notable exports: `SearchPalette`.

[`app/src/shell/search.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/shell/search.tsx) · code · 5039 bytes

### shell.tsx

/** A thin bar across the top while the reader waits for something to load.

[`app/src/shell/shell.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/shell/shell.tsx) · code · 17151 bytes

_Generated 2026-11-04 13:22 UTC from `main`._
