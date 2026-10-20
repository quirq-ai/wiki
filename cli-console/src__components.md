<!-- quirq-wiki-generated repo=cli-console dir=src/components -->

# cli-console / src/components

Source: [src/components](https://github.com/quirq-ai/cli-console/tree/main/src/components) in [cli-console](https://github.com/quirq-ai/cli-console).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### console.tsx

type Preview = { id: string; command: string; cwd: string; terminalReason: string | null;
stdinBytes: number }; const favorites = ["gh", "git", "npm", "pnpm", "docker", "kubectl",
"vercel", "curl", "python3", "node"]; async function api(body?: unknown, runsOnly = false):
Promise { const response = await fetch("/api/console" + (runsOnly ? "?runs=1" : ""), bod
Notable exports: `Console`. Marked `'use client'` so it runs in the browser.

[`src/components/console.tsx`](https://github.com/quirq-ai/cli-console/blob/main/src/components/console.tsx) · code · 22904 bytes

_Generated 2026-10-20 10:30 UTC from `main`._
