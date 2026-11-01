<!-- quirq-wiki-generated repo=space-hub dir=cli/test -->

# space-hub / cli/test

Source: [cli/test](https://github.com/quirq-ai/space-hub/tree/main/cli/test) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### agenthub.test.ts

Agenthub in front of a stand-in for an Agents Hub (npm test). Automated test file.

[`cli/test/agenthub.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/agenthub.test.ts) · code · 12605 bytes

### agenttemplate.test.ts

The starter definition of an agent (npm test). Automated test file.

[`cli/test/agenttemplate.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/agenttemplate.test.ts) · code · 622 bytes

### autosync.test.ts

Autosync against a plain bare repository standing in for the hub (npm test). Automated test
file.

[`cli/test/autosync.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/autosync.test.ts) · code · 5980 bytes

### avatar.test.ts

Avatars: GitHub pictures fetched by the hub, initials for everyone else. Automated test
file.

[`cli/test/avatar.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/avatar.test.ts) · code · 2434 bytes

### compat.test.ts

The CLI and hub protocol check (npm test). Automated test file.

[`cli/test/compat.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/compat.test.ts) · code · 3846 bytes

### device.test.ts

GitHub's device flow (run by the hub) against a stand-in for github.com (npm test).
Automated test file.

[`cli/test/device.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/device.test.ts) · code · 3549 bytes

### devicelogin.test.ts

The CLI's device sign-in against a stand-in hub (npm test). Automated test file.

[`cli/test/devicelogin.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/devicelogin.test.ts) · code · 4163 bytes

### dockerfile.test.ts

The image builds the CLI with only the module files it imports, copied one by one
(Dockerfile, the cli stage). A new import must be copied too (npm test). Automated test
file.

[`cli/test/dockerfile.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/dockerfile.test.ts) · code · 1092 bytes

### doctor.test.ts

spacehub doctor's checks, the PATH lines install-cli.sh prints, and the help added under a
permission refusal (npm test). Automated test file.

[`cli/test/doctor.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/doctor.test.ts) · code · 9374 bytes

### githubsignin.test.ts

Sign in to the website with GitHub, against stand-ins for github.com, its API and
SpacetimeDB's HTTP API (npm test). Automated test file.

[`cli/test/githubsignin.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/githubsignin.test.ts) · code · 7642 bytes

### hubbackup.test.ts

The hub backs up its own data folder while it runs, keeps the newest, and sub-hubs copy
those off the machine with a --keep window (npm test). Automated test file.

[`cli/test/hubbackup.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/hubbackup.test.ts) · code · 14093 bytes

### instancecapture.test.ts

const MAIN = 'a'.repeat(64), TLS = 'b'.repeat(64), STOPPED = 'c'.repeat(64); const
MAIN_IMAGE = 'sha256:' + '1'.repeat(64), TLS_IMAGE = 'sha256:' + '2'.repeat(64); const
PRIVATE_KEY = 'private-hub-signing-key'; const OAUTH = 'oauth-secret-kept-private'; const
SERVICES = ['main', 'tls', 'stopped'] Automated test file.

[`cli/test/instancecapture.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/instancecapture.test.ts) · code · 21984 bytes

### instanceconnections.test.ts

const snapshot = (): Snapshot => ({ id: 'a'.repeat(32), createdAt: 1_700_000_000_000,
source: 'primary-hub', services: ['spacehub', 'proxy'], scope: 'instance', consistency:
'stopped-containers', coverage: { data: true, runtime: true, configuration: true }, files:
5, bytes: 1024, sha256: 'b'.repeat(64) }); const denied = (status: number) => (error: any)
=> e Automated test file.

[`cli/test/instanceconnections.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/instanceconnections.test.ts) · code · 12040 bytes

### instancerecovery.test.ts

async function fixture(options: { noSource?: boolean } = {}) { const root =
fs.mkdtempSync(path.join(fs.realpathSync(os.tmpdir()), 'instance-recovery-')); const vault =
new InstanceVault(path.join(root, 'vault')); vault.initialize(); const source =
path.join(root, 'prepared'); fs.mkdirSync(source); fs.mkdirSync(path.join(source, 'volumes',
'data', 'config') Automated test file.

[`cli/test/instancerecovery.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/instancerecovery.test.ts) · code · 19872 bytes

### instanceruntime.test.ts

const PREFIX = '/-/api/instance-recovery'; const OPERATOR = 'private-operator-token-never-
persisted'; const SECRET = 'private-entire-instance-identity-key'; function put(root:
string, filename: string, bytes: string | Buffer) { const target = path.join(root,
...filename.split('/')); fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(ta Automated test file.

[`cli/test/instanceruntime.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/instanceruntime.test.ts) · code · 18333 bytes

### instancesubhub.test.ts

Exercise the actual CLI and standalone recovery HTTP service. Fixture archives deliberately
contain test bytes, never a production backup. Automated test file.

[`cli/test/instancesubhub.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/instancesubhub.test.ts) · code · 11564 bytes

### instancevault.test.ts

const INFO: CaptureInfo = { source: 'spacehub,proxy', services: ['spacehub', 'proxy'],
consistency: 'stopped-containers', createdAt: 1_700_000_000_000, coverage: { data: true,
runtime: true, configuration: true } }; const SECRET = 'private-oauth-secret-and-signing-
key'; const refusal = (code: number) => (error: unknown) => error instanceof
InstanceVaultError Automated test file.

[`cli/test/instancevault.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/instancevault.test.ts) · code · 23412 bytes

### livepage.test.ts

Which pages are live and what the live stream carries (npm test). Automated test file.

[`cli/test/livepage.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/livepage.test.ts) · code · 1530 bytes

### refplan.test.ts

The GitHub sync's rules, on a plain git repository (npm test). Automated test file.

[`cli/test/refplan.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/refplan.test.ts) · code · 4243 bytes

### signin.test.ts

GitHub sign-in in front of stand-ins for GitHub's API and SpacetimeDB's HTTP API (npm test).
Automated test file.

[`cli/test/signin.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/signin.test.ts) · code · 13323 bytes

### subhubrelay.test.ts

A connected sub-hub's storage, read live through the hub: the relay, and the whole path from
an operator through the hub to a running machine (npm test). Automated test file.

[`cli/test/subhubrelay.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/subhubrelay.test.ts) · code · 6124 bytes

### url.test.ts

quirq:// URLs and which token goes where (npm test). Automated test file.

[`cli/test/url.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/url.test.ts) · code · 3171 bytes

### visitor.test.ts

A visitor who is not signed in lands on the hub's front project (npm test). Automated test
file.

[`cli/test/visitor.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/visitor.test.ts) · code · 2625 bytes

### xo.test.ts

The xo API in front of a stand-in for SpacetimeDB's HTTP API (npm test). Automated test
file.

[`cli/test/xo.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/xo.test.ts) · code · 10229 bytes

### xosignin.test.ts

Sign in to the website with xo, against stand-ins for the xo server (and Clerk behind it)
and for SpacetimeDB's HTTP API (npm test). Automated test file.

[`cli/test/xosignin.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/test/xosignin.test.ts) · code · 12921 bytes

_Generated 2026-11-01 12:08 UTC from `main`._
