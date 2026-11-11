<!-- quirq-wiki-generated repo=control dir=src -->

# control / src

Source: [src](https://github.com/quirq-ai/control/tree/main/src) in [control](https://github.com/quirq-ai/control).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### canonical.js

Canonical JSON: object keys sorted, no whitespace. Signatures are computed over this form so
that key order or formatting never changes a signature. Notable exports: `canonicalize`.

[`src/canonical.js`](https://github.com/quirq-ai/control/blob/main/src/canonical.js) · code · 867 bytes

### cli.js

Command line interface. See `control help`. Notable exports: `parseArgs`, `main`, `VERSION`.

[`src/cli.js`](https://github.com/quirq-ai/control/blob/main/src/cli.js) · code · 11684 bytes

### config.js

Config loading. One JSON file per side. Relative paths resolve against the config file's
directory; "~" expands to the home directory. Notable exports: `defaultConfigPath`,
`loadConfig`, `normalizeConfig`, `ROLES`.

[`src/config.js`](https://github.com/quirq-ai/control/blob/main/src/config.js) · code · 2382 bytes

### controlled.js

The controlled role: pull jobs, check them, run the allowed ones, push results. Notable
exports: `sleep`, `Controlled`.

[`src/controlled.js`](https://github.com/quirq-ai/control/blob/main/src/controlled.js) · code · 5597 bytes

### controller.js

The controller role: sign and submit jobs, verify and read results. Notable exports:
`Controller`.

[`src/controller.js`](https://github.com/quirq-ai/control/blob/main/src/controller.js) · code · 6436 bytes

### envelope.js

Message formats. Every message on a transport is a signed JSON envelope. job controller ->
controlled what to run cancel controller -> controlled do not run job <id> result controlled
-> controller what happened, with a digest of the log Notable exports: `makeJob`,
`jobProblem`, `makeCancel`, `cancelProblem`, `makeResult`, `VERSION`, `MAX_SCRIPT_BYTES`,
`STATUSES`.

[`src/envelope.js`](https://github.com/quirq-ai/control/blob/main/src/envelope.js) · code · 4496 bytes

### executor.js

Runs one planned job: no shell for argv jobs, a fresh minimal environment, a hard timeout
that kills the whole process group, and capped output. Notable exports: `execute`.

[`src/executor.js`](https://github.com/quirq-ai/control/blob/main/src/executor.js) · code · 3265 bytes

### ids.js

export const NAME_RE = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/ Notable exports: `assertName`,
`isName`, `newJobId`, `NAME_RE`.

[`src/ids.js`](https://github.com/quirq-ai/control/blob/main/src/ids.js) · code · 867 bytes

### index.js

Library entry point. Notable exports: `Controller`, `Controlled`, `loadConfig`,
`normalizeConfig`, `makeJob`, `makeResult`, `makeCancel`, `jobProblem`, and 16 more.

[`src/index.js`](https://github.com/quirq-ai/control/blob/main/src/index.js) · code · 719 bytes

### keys.js

Ed25519 keys, signing and verification, using only node:crypto. Notable exports:
`generateKeyPair`, `keyIdOf`, `writeKeyPair`, `loadPrivateKey`, `loadPublicKey`, `digest`,
`signEnvelope`, `verifyEnvelope`.

[`src/keys.js`](https://github.com/quirq-ai/control/blob/main/src/keys.js) · code · 3616 bytes

### policy.js

Policy: what a controlled node agrees to run. Default is deny everything. Notable exports:
`resolvePolicy`, `expandHome`, `matchRule`, `evaluate`, `DEFAULT_POLICY`.

[`src/policy.js`](https://github.com/quirq-ai/control/blob/main/src/policy.js) · code · 4400 bytes

### redact.js

Redaction applied to every log before it leaves the controlled node. Notable exports:
`makeRedactor`, `secretValuesFromEnv`.

[`src/redact.js`](https://github.com/quirq-ai/control/blob/main/src/redact.js) · code · 2225 bytes

### state.js

Local, append-only record of which job ids a node has started and finished. Kept outside the
transport, so deleting a result from the queue can never make a job run twice (at-most-
once). Notable exports: `JobState`.

[`src/state.js`](https://github.com/quirq-ai/control/blob/main/src/state.js) · code · 976 bytes

_Generated 2026-11-11 13:02 UTC from `main`._
