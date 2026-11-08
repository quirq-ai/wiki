<!-- quirq-wiki-generated repo=control dir=test -->

# control / test

Source: [test](https://github.com/quirq-ai/control/tree/main/test) in [control](https://github.com/quirq-ai/control).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### canonical.test.js

test('sorts keys at every level and drops undefined', () => { assert.equal(canonicalize({ b:
1, a: { d: [3, { z: 1, y: 2 }], c: 'x' }, u: undefined }),
'{"a":{"c":"x","d":[3,{"y":2,"z":1}]},"b":1}'); }) Automated test file.

[`test/canonical.test.js`](https://github.com/quirq-ai/control/blob/main/test/canonical.test.js) · code · 647 bytes

### cli.test.js

const BIN = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'bin',
'control.js') Automated test file.

[`test/cli.test.js`](https://github.com/quirq-ai/control/blob/main/test/cli.test.js) · code · 4214 bytes

### config.test.js

const EXAMPLES = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'examples')
Automated test file.

[`test/config.test.js`](https://github.com/quirq-ai/control/blob/main/test/config.test.js) · code · 1336 bytes

### e2e-dir.test.js

async function pair(opts) { const env = setup(opts); const ctl = await new
Controller(env.controller, { logger: quiet }).start(); const node = await new
Controlled(env.controlled, { logger: quiet, hostEnv: opts?.hostEnv ?? {} }).start(); return
{ ...env, ctl, node }; } Automated test file.

[`test/e2e-dir.test.js`](https://github.com/quirq-ai/control/blob/main/test/e2e-dir.test.js) · code · 9433 bytes

### e2e-git.test.js

test('git transport: job and result travel through a real git remote', async () => { const
env = setup({ transport: 'git', policy: { allow: [{ command: 'echo' }, { command: 'git',
args: ['--version'] }] } }); const ctl = await new Controller(env.controller, { logger:
quiet }).start(); const node = await new Controlled(env.controlled, { logger: quiet, hostEnv
Automated test file.

[`test/e2e-git.test.js`](https://github.com/quirq-ai/control/blob/main/test/e2e-git.test.js) · code · 2935 bytes

### executor.test.js

const base = (extra) => ({ cwd: tmpdir(), env: { PATH: '/usr/local/bin:/usr/bin:/bin', HOME:
'/tmp' }, timeoutSeconds: 10, maxOutputBytes: 1 { const r = await execute(base({ argv:
['sh', '-c', 'echo out; echo err 1>&2; exit 3'] })); assert.equal(r.exitCode, 3);
assert.match(r.output, /out/); assert.match(r.output, /err/); }) Automated test file.

[`test/executor.test.js`](https://github.com/quirq-ai/control/blob/main/test/executor.test.js) · code · 2185 bytes

### helpers.js

export function tmpdir(prefix = 'control-test-') { return
fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), prefix))); } Notable exports:
`tmpdir`, `setup`, `git`, `quiet`.

[`test/helpers.js`](https://github.com/quirq-ai/control/blob/main/test/helpers.js) · code · 2474 bytes

### ids.test.js

test('job ids are valid names and sort in creation order, even within one millisecond', ()
=> { const now = new Date(); const ids = Array.from({ length: 50 }, () => newJobId(now));
assert.ok(ids.every(isName)); assert.deepEqual([...ids].sort(), ids); assert.equal(new
Set(ids).size, ids.length); }) Automated test file.

[`test/ids.test.js`](https://github.com/quirq-ai/control/blob/main/test/ids.test.js) · code · 686 bytes

### keys.test.js

function pair(dir, name) { writeKeyPair(path.join(dir, ${name}.key), path.join(dir,
${name}.pub)); const priv = loadPrivateKey(path.join(dir, ${name}.key)); const pub =
loadPublicKey(path.join(dir, ${name}.pub)); return { priv, trusted: new Map([[pub.keyId, {
name, publicKey: pub.publicKey }]]) }; } Automated test file.

[`test/keys.test.js`](https://github.com/quirq-ai/control/blob/main/test/keys.test.js) · code · 2820 bytes

### policy.test.js

const job = (cmd, extra = {}) => ({ cmd, ...extra }) Automated test file.

[`test/policy.test.js`](https://github.com/quirq-ai/control/blob/main/test/policy.test.js) · code · 3529 bytes

### redact.test.js

const r = makeRedactor() Automated test file.

[`test/redact.test.js`](https://github.com/quirq-ai/control/blob/main/test/redact.test.js) · code · 2321 bytes

_Generated 2026-11-08 12:18 UTC from `main`._
