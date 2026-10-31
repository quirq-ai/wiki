<!-- quirq-wiki-generated repo=euler dir=scripts -->

# euler / scripts

Source: [scripts](https://github.com/quirq-ai/euler/tree/main/scripts) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### migrate-app-data.mjs

const appIds = ['innernet', 'quitter', 'instants']; const generated = new
Set(['node_modules', '.next', '.next-euler', 'dist', 'dist-euler', '.nx']); const help =
`Move personal app files left behind by Euler's apps/ to app/ rename. Notable exports:
`migrateAppData`, `main`.

[`scripts/migrate-app-data.mjs`](https://github.com/quirq-ai/euler/blob/main/scripts/migrate-app-data.mjs) · code · 8129 bytes

### setup.mjs

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..'); const knownApps =
['home', 'innernet', 'quitter', 'instants']; export function setupApps(args) { if
(args.some((id) => !knownApps.includes(id))) throw new Error(Unknown app. Choose:
${knownApps.join(', ')}.); return args.length ? [...new Set(args)] : [...knownApps]; }
Notable exports: `setupApps`, `npmCliCandidates`, `setup`.

[`scripts/setup.mjs`](https://github.com/quirq-ai/euler/blob/main/scripts/setup.mjs) · code · 3980 bytes

### sources.mjs

Euler keeps no copy of its apps. infra/repo.toml pins each one to a commit of its own
repository; `qq sync` fetches it, read only, to .qq/deps/<id>. Preparing builds the pinned
files plus Euler's adapter (app/adapters/<id>.patch) in a staging folder, then brings
app/<id> to exactly that tree.

[`scripts/sources.mjs`](https://github.com/quirq-ai/euler/blob/main/scripts/sources.mjs) · code · 12970 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
