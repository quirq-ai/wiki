<!-- quirq-wiki-generated repo=quirqy dir=src/repository -->

# quirqy / src/repository

Source: [src/repository](https://github.com/quirq-ai/quirqy/tree/quirq/src/repository) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### connection.js

const KEY = 'quirq-observatory.connected-repository.v1'; let current = null Notable exports:
`connectedRepository`, `connectRepository`.

[`src/repository/connection.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/repository/connection.js) · code · 623 bytes

### session.js

Only repository metadata is cached. Authentication and source blobs do not belong in this
session. The small pointer can be saved synchronously on seek. Notable exports:
`createRepositorySession`, `REPOSITORY_SESSION_STORAGE_KEY`, `restoreRepositorySession`,
`saveRepositoryDataset`, `updateRepositorySelection`, `flushRepositorySession`,
`clearRepositorySession`.

[`src/repository/session.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/repository/session.js) · code · 20112 bytes

### session.test.js

const ref = number => number.toString(16).padStart(40, '0'); const fileId =
'file:src%2Fa.js'; function dataset(seed = 1) { return { repository: { name: 'repo',
fullName: 'owner/repo', url: 'https://github.com/owner/repo', branch: 'main', source:
'github', headSha: ref(seed + 1) }, files: [{ path: 'src/a.js', size: 123, existsAtHead:
true }], commits: [seed Automated test file.

[`src/repository/session.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/repository/session.test.js) · code · 19699 bytes

_Generated 2026-10-20 10:30 UTC from `quirq`._
