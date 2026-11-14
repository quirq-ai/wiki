<!-- quirq-wiki-generated repo=liftoff dir=src -->

# liftoff / src

Source: [src](https://github.com/quirq-ai/liftoff/tree/main/src) in [liftoff](https://github.com/quirq-ai/liftoff).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### cli.js

const HELP = `Liftoff: deploy XO Launchpad docker apps without typing the registry password.
Notable exports: `main`.

[`src/cli.js`](https://github.com/quirq-ai/liftoff/blob/main/src/cli.js) · code · 20129 bytes

### commands.js

Shared by the server, the CLI and the browser (served as /lib/commands.js): no Node imports
here. Notable exports: `splitArgs`, `parseImageRef`, `imageRef`, `parseRepo`, `repoKey`,
`liveUrlFor`, `suggestName`, `parseLaunchpadCommands`.

[`src/commands.js`](https://github.com/quirq-ai/liftoff/blob/main/src/commands.js) · code · 7186 bytes

### docker.js

let command = [process.env.LIFTOFF_DOCKER || 'docker'] Notable exports: `setDockerCommand`,
`runDocker`, `runProcess`, `inspectEngine`, `resolveEndpoint`, `createSession`,
`sweepSessions`, `imageInfo`, and 1 more.

[`src/docker.js`](https://github.com/quirq-ai/liftoff/blob/main/src/docker.js) · code · 7850 bytes

### pipeline.js

/** * One deploy, start to finish: * preflight folder, Dockerfile, stored password and
Docker engine are all there * login docker login -u --password-stdin (password from the
vault) * build docker build --platform -t . * push docker push * verify ask the registry
what the tag points to and compare with what was pushed * The unencrypted password touches
the d Notable exports: `testLogin`, `startDeployment`.

[`src/pipeline.js`](https://github.com/quirq-ai/liftoff/blob/main/src/pipeline.js) · code · 19785 bytes

### queuefile.js

/** * The queue is a JSON file you can edit by hand: a list of entries, oldest * first. To
deploy, add an entry to the end and save: * { "app": 2, "src": "my-project" } * "app" is the
app's fixed number (or its id). "src" is the source folder, * relative to the folder the
queue file is in, or a full path; leave it out * to use the folder the app already has.
Notable exports: `fileStatus`, `QueueFile`, `QueueWatcher`.

[`src/queuefile.js`](https://github.com/quirq-ai/liftoff/blob/main/src/queuefile.js) · code · 17816 bytes

### registry.js

/** * A small read-only client for the registry's HTTP API, used to check what a * tag
points to after a push. It signs in the way the registry asks to: Harbor *
(registry.xo.builders) hands out a short-lived token from its token service, * simpler
registries accept the username and password directly. */ Notable exports: `registryBase`,
`headManifest`, `listTags`, `RegistryError`.

[`src/registry.js`](https://github.com/quirq-ai/liftoff/blob/main/src/registry.js) · code · 6947 bytes

### server.js

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url))); const PUBLIC =
path.join(ROOT, 'public'); const VERSION = JSON.parse(fs.readFileSync(path.join(ROOT,
'package.json'), 'utf8')).version Notable exports: `createServer`.

[`src/server.js`](https://github.com/quirq-ai/liftoff/blob/main/src/server.js) · code · 20393 bytes

### store.js

/** * Everything Liftoff remembers, as plain files under the Liftoff folder: * apps.json the
apps and their settings (no secrets) * deployments//.json one record per deploy *
deployments//.log that deploy's output, one JSON object per line * One file per deploy means
the server and a liftoff deploy in a terminal can * run side by side without overwriting eac
Notable exports: `normalizeApp`, `ValidationError`, `NotFoundError`, `Store`, `STEP_KEYS`

[`src/store.js`](https://github.com/quirq-ai/liftoff/blob/main/src/store.js) · code · 16769 bytes

### util.js

/** Where Liftoff keeps its apps, encrypted passwords and deploy history. */ export function
resolveHome(explicit) { return path.resolve(explicit || process.env.LIFTOFF_HOME ||
path.join(os.homedir(), '.liftoff')); } Notable exports: `resolveHome`, `readJson`,
`writeJson`, `writeText`, `isPidAlive`, `formatDuration`, `formatBytes`, `shortDigest`.

[`src/util.js`](https://github.com/quirq-ai/liftoff/blob/main/src/util.js) · code · 2659 bytes

### vault.js

/** * Passwords at rest. * On Windows each password is sealed with DPAPI for the signed-in
Windows * account: the file on disk is useless to another user or on another machine, * and
no master password is needed. Elsewhere the fallback is AES-256-GCM with * a key file next
to the vault, which only keeps the password out of plain * sight (anyone who can read
Notable exports: `defaultBackend`, `cleanSecret`, `Vault`.

[`src/vault.js`](https://github.com/quirq-ai/liftoff/blob/main/src/vault.js) · code · 6404 bytes

_Generated 2026-11-14 12:36 UTC from `main`._
