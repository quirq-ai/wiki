<!-- quirq-wiki-generated repo=euler dir=scripts -->

# euler / scripts

Source: [scripts](https://github.com/quirq-ai/euler/tree/main/scripts) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### apps-sync.mjs

const execute = promisify(execFile); const manifestPath = 'app/upstream.json'; const help =
`Update Euler's embedded applications from their upstream Git repositories. Notable exports:
`main`.

[`scripts/apps-sync.mjs`](https://github.com/quirq-ai/euler/blob/main/scripts/apps-sync.mjs) · code · 19240 bytes

### migrate-app-data.mjs

const appIds = ['innernet', 'quitter', 'instants']; const generated = new
Set(['node_modules', '.next', '.next-euler', 'dist', 'dist-euler', '.nx']); const help =
`Move personal app files left behind by Euler's apps/ to app/ rename. Notable exports:
`migrateAppData`, `main`.

[`scripts/migrate-app-data.mjs`](https://github.com/quirq-ai/euler/blob/main/scripts/migrate-app-data.mjs) · code · 8111 bytes

### setup.mjs

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..'); const knownApps =
['home', 'innernet', 'quitter', 'instants']; export function setupApps(args) { if
(args.some((id) => !knownApps.includes(id))) throw new Error(Unknown app. Choose:
${knownApps.join(', ')}.); return args.length ? [...new Set(args)] : [...knownApps]; }
Notable exports: `setupApps`, `npmCliCandidates`, `setup`.

[`scripts/setup.mjs`](https://github.com/quirq-ai/euler/blob/main/scripts/setup.mjs) · code · 3696 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
