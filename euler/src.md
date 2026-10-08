<!-- quirq-wiki-generated repo=euler dir=src -->

# euler / src

Source: [src](https://github.com/quirq-ai/euler/tree/main/src) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### cli.mjs

export function parseArgs(args) { const options = { port: 2713 }; const seen = new Set();
for (let index = 0; index 65535) throw new Error('Choose an Euler port between 1024 and
65535.'); if (options.workspace && options.config) throw new Error('Choose only one of
--workspace or --config.'); if (options.app && !options.build) throw new Error('--app
requires Notable exports: `parseArgs`, `main`.

[`src/cli.mjs`](https://github.com/quirq-ai/euler/blob/main/src/cli.mjs) · code · 3281 bytes

### compiled.mjs

const failure = (message, statusCode = 409) => Object.assign(new Error(message), {
statusCode }); const prefix = (id) => /app/${id}; const markerName = 'quirq-build.json';
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
'.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json':
'applicat Notable exports: `compiledStore`, `inspectBuild`, `buildCompiledWorkspace`

[`src/compiled.mjs`](https://github.com/quirq-ai/euler/blob/main/src/compiled.mjs) · code · 13050 bytes

### config.mjs

const configFields = new Set(['enabled', 'useOverrides', 'port', 'mode']); const modes = new
Set(['dev', 'start', 'preview']) Notable exports: `effectiveConfig`, `createConfigStore`,
`ConfigError`.

[`src/config.mjs`](https://github.com/quirq-ai/euler/blob/main/src/config.mjs) · code · 6963 bytes

### server.mjs

const bodyLimit = 64 * 1024; const error = (message, statusCode) => Object.assign(new
Error(message), { statusCode }); const contentPolicy = "default-src 'self'; script-src
'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none';
base-uri 'none'; form-action 'self'"; function decodeId(value) { try { return
decodeURIComponen Notable exports: `createEulerServer`.

[`src/server.mjs`](https://github.com/quirq-ai/euler/blob/main/src/server.mjs) · code · 5405 bytes

### workspace.mjs

export const manifestName = 'euler.workspace.json'; export const defaultManifest =
fileURLToPath(new URL('../euler.workspace.json', import.meta.url)); const launchModes = new
Set(['dev', 'start', 'preview']); const placeholders = new Set(['node', 'port',
'workspaceRoot', 'projectRoot']); const identifier = /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/; const
object = (valu Notable exports: `validateManifest`, `loadWorkspace`, `manifestName`

[`src/workspace.mjs`](https://github.com/quirq-ai/euler/blob/main/src/workspace.mjs) · code · 7128 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
