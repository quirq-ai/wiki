<!-- quirq-wiki-generated repo=euler dir=tests -->

# euler / tests

Source: [tests](https://github.com/quirq-ai/euler/tree/main/tests) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### apps-sync.test.mjs

const script = fileURLToPath(new URL('../scripts/apps-sync.mjs', import.meta.url)); const
manifestPath = 'app/upstream.json'; const appPath = 'app/innernet' Automated test file.

[`tests/apps-sync.test.mjs`](https://github.com/quirq-ai/euler/blob/main/tests/apps-sync.test.mjs) · code · 20686 bytes

### cli.test.mjs

const executable = fileURLToPath(new URL('../bin/euler.mjs', import.meta.url)) Automated
test file.

[`tests/cli.test.mjs`](https://github.com/quirq-ai/euler/blob/main/tests/cli.test.mjs) · code · 10924 bytes

### compiled.test.mjs

const index = 'Compiled fixture'; const withoutDock = (html) => html.replace(//g,
'').replace(//g, '').replace(//g, '') Automated test file.

[`tests/compiled.test.mjs`](https://github.com/quirq-ai/euler/blob/main/tests/compiled.test.mjs) · code · 27801 bytes

### dashboard-config.test.mjs

const projects = { web: { port: 3000, scripts: ['dev', 'start', 'build', 'test'] }, board: {
port: 5173, scripts: ['dev', 'preview', 'build'] }, api: { port: 8000, scripts: ['dev',
'start', 'runtime'] }, wiki: { scripts: ['validate'] }, }; const temporaryRoot = tmpdir()
Automated test file.

[`tests/dashboard-config.test.mjs`](https://github.com/quirq-ai/euler/blob/main/tests/dashboard-config.test.mjs) · code · 7658 bytes

### migrate-app-data.test.mjs

const ids = ['innernet', 'quitter', 'instants']; async function put(root, path, value =
'personal data') { await mkdir(dirname(join(root, path)), { recursive: true }); await
writeFile(join(root, path), value); } async function fixture(t) { const root = await
mkdtemp(join(tmpdir(), 'Euler migration with spaces ')); t.after(() => rm(root, { recursive:
true, fo Automated test file.

[`tests/migrate-app-data.test.mjs`](https://github.com/quirq-ai/euler/blob/main/tests/migrate-app-data.test.mjs) · code · 6783 bytes

### server.test.mjs

function managerStub() { const state = { projects: [{ id: 'euler', enabled: true, status:
'stopped', port: 8002 }] }; const calls = []; const requireProject = (id) => { if (id !==
'euler') throw Object.assign(new Error(Unknown app: ${id}), { statusCode: 404 }); }; const
record = (method) => async (...args) => { if (args.length) requireProject(args[0]); calls
Automated test file.

[`tests/server.test.mjs`](https://github.com/quirq-ai/euler/blob/main/tests/server.test.mjs) · code · 11721 bytes

### setup.test.mjs

test('setup selects only bundled apps and avoids duplicate installation requests', () => {
assert.deepEqual(setupApps([]), ['home', 'innernet', 'quitter', 'instants']);
assert.deepEqual(setupApps(['quitter', 'innernet', 'quitter']), ['quitter', 'innernet']);
assert.throws(() => setupApps(['../innernet']), /Unknown app/); }) Automated test file.

[`tests/setup.test.mjs`](https://github.com/quirq-ai/euler/blob/main/tests/setup.test.mjs) · code · 2254 bytes

### workspace.test.mjs

const repositoryRoot = fileURLToPath(new URL('..', import.meta.url)) Provides a default
export as the module's public entry. Automated test file.

[`tests/workspace.test.mjs`](https://github.com/quirq-ai/euler/blob/main/tests/workspace.test.mjs) · code · 9451 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
