<!-- quirq-wiki-generated repo=cli-console dir=src/lib -->

# cli-console / src/lib

Source: [src/lib](https://github.com/quirq-ai/cli-console/tree/main/src/lib) in [cli-console](https://github.com/quirq-ai/cli-console).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### boundary.ts

export class HttpError extends Error { constructor(message: string, public status = 400) {
super(message); } } Notable exports: `assertLocal`, `readJson`, `HttpError`.

[`src/lib/boundary.ts`](https://github.com/quirq-ai/cli-console/blob/main/src/lib/boundary.ts) · code · 1372 bytes

### catalog.ts

const cacheDir = join(process.cwd(), ".cache", "catalog"); const inFlight = new Map>();
const cacheKey = (tool: string, path: string[]) =>
createHash("sha256").update(JSON.stringify([tool, path])).digest("hex"); const cacheFile =
(tool: string, path: string[]) => join(cacheDir, cacheKey(tool, path) + ".json"); const
directories = () => [...new Set((process.e Notable exports: `resolveTool`, `fingerprint`

[`src/lib/catalog.ts`](https://github.com/quirq-ai/cli-console/blob/main/src/lib/catalog.ts) · code · 7537 bytes

### parser.ts

export function cleanHelp(text: string) { return text.replace(/\x1b\[[0-?]*[ -/]*[@-~]/g,
"").replace(/.\x08/g, "").replace(/\r/g, "").slice(0, 160_000); } Notable exports:
`cleanHelp`, `parseHelp`, `shellQuote`, `displayCommand`, `buildArgv`.

[`src/lib/parser.ts`](https://github.com/quirq-ai/cli-console/blob/main/src/lib/parser.ts) · code · 5484 bytes

### process.ts

const { AI_GATEWAY_API_KEY: _aiKey, ...inheritedEnv } = process.env; export const processEnv
= { ...inheritedEnv, NO_COLOR: "1", TERM: "dumb", PAGER: "cat", MANPAGER: "cat", GIT_PAGER:
"cat", GH_PAGER: "cat", CI: "1", GIT_TERMINAL_PROMPT: "0", GH_PROMPT_DISABLED: "1" } Notable
exports: `capture`, `processEnv`.

[`src/lib/process.ts`](https://github.com/quirq-ai/cli-console/blob/main/src/lib/process.ts) · code · 1414 bytes

### runner.ts

type Preview = { id: string; command: string; cwd: string; argv: string[]; executable:
string; fingerprint: string; expiresAt: number; terminalReason: string | null; stdin: string
}; type State = { previews: Map; runs: Map; processes: Map }; const globalState = globalThis
as typeof globalThis & { cliConsoleState?: State }; const state = globalState.cliConsol
Notable exports: `terminalReason`, `createPreview`, `runPreview`, `listRuns`, `cancelRun`.

[`src/lib/runner.ts`](https://github.com/quirq-ai/cli-console/blob/main/src/lib/runner.ts) · code · 6269 bytes

### schema.ts

export const token = z.string().regex(/^[a-zA-Z0-9][a-zA-Z0-9_.+-]*$/).max(100); export
const flagSchema = z.object({ name: z.string().regex(/^--?[a-zA-Z0-9][a-zA-Z0-9-]*$/),
aliases: z.array(z.string()).default([]), value: z.string(), description: z.string(),
joinValue: z.boolean().default(false), }); export const commandSchema = z.object({ tool:
token, pat Notable exports: `token`, `flagSchema`, `commandSchema`, `Command`, `Flag`

[`src/lib/schema.ts`](https://github.com/quirq-ai/cli-console/blob/main/src/lib/schema.ts) · code · 1200 bytes

_Generated 2026-10-29 11:51 UTC from `main`._
