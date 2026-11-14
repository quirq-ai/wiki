<!-- quirq-wiki-generated repo=liftoff dir=test -->

# liftoff / test

Source: [test](https://github.com/quirq-ai/liftoff/tree/main/test) in [liftoff](https://github.com/quirq-ai/liftoff).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### commands.test.js

test('tells a repository address from a folder, and finds its name and branch', () => {
assert.deepEqual(parseRepo('https://github.com/owner/my-project'), { url:
'https://github.com/owner/my-project', branch: null, name: 'my-project' });
assert.deepEqual(parseRepo(' https://github.com/owner/my-project.git/ '), { url:
'https://github.com/owner/my-project.git' Automated test file.

[`test/commands.test.js`](https://github.com/quirq-ai/liftoff/blob/main/test/commands.test.js) · code · 6510 bytes

### helpers.js

const HERE = path.dirname(fileURLToPath(import.meta.url)) Notable exports: `tempDir`,
`sourceDir`, `useFakeDocker`, `startRegistry`, `sha256`.

[`test/helpers.js`](https://github.com/quirq-ai/liftoff/blob/main/test/helpers.js) · code · 5367 bytes

### pipeline.test.js

const USER = 'xo-demo-xo-abc123+push'; const PASSWORD = 'correct horse battery staple';
const MANIFEST = JSON.stringify({ schemaVersion: 2, config: {}, layers: [] }); const DIGEST
= sha256(MANIFEST); const real = (dir) => fs.realpathSync.native(dir); const leftovers = ()
=> fs.readdirSync(os.tmpdir()).filter((name) => name.startsWith(liftoff-docker-${process
Automated test file.

[`test/pipeline.test.js`](https://github.com/quirq-ai/liftoff/blob/main/test/pipeline.test.js) · code · 16310 bytes

### queuefile.test.js

const USER = 'xo-demo-xo-abc123+push'; const PASSWORD = 'correct horse battery staple';
const MANIFEST = JSON.stringify({ schemaVersion: 2, config: {}, layers: [] }); const DIGEST
= sha256(MANIFEST); const real = (dir) => fs.realpathSync.native(dir) Automated test file.

[`test/queuefile.test.js`](https://github.com/quirq-ai/liftoff/blob/main/test/queuefile.test.js) · code · 20540 bytes

### registry.test.js

const manifest = JSON.stringify({ schemaVersion: 2, layers: [] }); const account = { user:
'xo-app+push', password: 'pässword with spaces' }; const target = (registry, extra = {}) =>
({ registry: registry.host, username: account.user, password: account.password, ...extra })
Automated test file.

[`test/registry.test.js`](https://github.com/quirq-ai/liftoff/blob/main/test/registry.test.js) · code · 4036 bytes

### server.test.js

const USER = 'xo-demo-xo-abc123+push'; const PASSWORD = 'correct horse battery staple';
const MANIFEST = JSON.stringify({ schemaVersion: 2 }) Automated test file.

[`test/server.test.js`](https://github.com/quirq-ai/liftoff/blob/main/test/server.test.js) · code · 18088 bytes

### store.test.js

const sample = (extra = {}) => ({ name: 'Floating Containers', registry:
'registry.xo.builders', repository: 'test-floating-containers-xo-n6d5yb4/app', username:
'xo-test-floating-containers-xo-n6d5yb4+push', contextDir: path.resolve('some', 'project'),
...extra, }) Automated test file.

[`test/store.test.js`](https://github.com/quirq-ai/liftoff/blob/main/test/store.test.js) · code · 10982 bytes

### vault.test.js

const awkward = 'p@ss wörd/with+odd=chars"\'%$`é漢' Automated test file.

[`test/vault.test.js`](https://github.com/quirq-ai/liftoff/blob/main/test/vault.test.js) · code · 3320 bytes

_Generated 2026-11-14 12:36 UTC from `main`._
