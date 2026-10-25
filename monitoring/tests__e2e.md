<!-- quirq-wiki-generated repo=monitoring dir=tests/e2e -->

# monitoring / tests/e2e

Source: [tests/e2e](https://github.com/quirq-ai/monitoring/tree/main/tests/e2e) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### framing.spec.ts

The quirq.dev website shows the dashboard in an iframe (config/framing.ts). Only that site
and the dashboard itself may frame it; the local settings editor may not be framed at all.

[`tests/e2e/framing.spec.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/e2e/framing.spec.ts) · code · 5107 bytes

### origin.ts

export const origin = "http://127.0.0.1:3010" Notable exports: `origin`, `editorOrigin`,
`EDITOR_KEY`, `FAKE_GH_LOG`.

[`tests/e2e/origin.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/e2e/origin.ts) · code · 525 bytes

### pages.spec.ts

const themes = ["light", "dark"] as const; const viewports = [ { name: "390", width: 390,
height: 844 }, { name: "1280", width: 1280, height: 800 }, ] as const.

[`tests/e2e/pages.spec.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/e2e/pages.spec.ts) · code · 30005 bytes

### settings.spec.ts

The settings editor: the deployed form (it writes nothing and hands over a gh script) and
the local one (pnpm editor), here with tests/fake-gh/gh, which logs each write instead of
sending it.

[`tests/e2e/settings.spec.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/e2e/settings.spec.ts) · code · 5530 bytes

### shell.spec.ts

const themes = ["light", "dark"] as const; const viewports = [ { name: "390", width: 390,
height: 844 }, { name: "1280", width: 1280, height: 800 }, ] as const.

[`tests/e2e/shell.spec.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/e2e/shell.spec.ts) · code · 2805 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
