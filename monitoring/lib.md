<!-- quirq-wiki-generated repo=monitoring dir=lib -->

# monitoring / lib

Source: [lib](https://github.com/quirq-ai/monitoring/tree/main/lib) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### contrast.ts

export const TEXT_PAIRS = [ ["--foreground", "--background"], ["--foreground", "--card"], ["
--foreground", "--muted"], ["--muted-foreground", "--background"], ["--muted-foreground", "
--card"], ["--muted-foreground", "--muted"], ["--card-foreground", "--background"], ["--
card-foreground", "--card"], ["--card-foreground", "--muted"], ["--primary-foreground", "
Notable exports: `parseColor`, `contrast`, `parseTokenBlocks`, `contrastFailures`

[`lib/contrast.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/contrast.ts) · code · 4374 bytes

### fetch.ts

Every network read in the app goes through this file or lib/github.ts. Pages never fetch.
Notable exports: `rawBase`, `rawUrl`, `blobUrl`, `treeUrl`, `rememberMissing`,
`isRememberedMissing`, `rememberedMissingMessage`, `forgetMissing`, and 9 more.

[`lib/fetch.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/fetch.ts) · code · 5624 bytes

### github.ts

The only GitHub API client. GET only: the dashboard never writes. The token is sent only to
api.github.com (or to a loopback fixture server under test), never anywhere else, and it is
never logged or returned. Notable exports: `isApiOutageReason`, `rateLimitedUntil`,
`forgetBackoff`, `apiBase`, `hasToken`, `requestsThisHour`, `isPlainNotFound`, `ghGet`, and
7 more.

[`lib/github.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/github.ts) · code · 11137 bytes

### signal.ts

The one shape every source returns. A page never sees a raw fetch result: it sees a Signal,
which either carries a validated value or says in one line why it does not. Notable exports:
`okSignal`, `failSignal`, `carryFailure`, `readAt`, `states`, `State`, `Read`, `Signal`.

[`lib/signal.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/signal.ts) · code · 2382 bytes

### utils.ts

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); } Notable
exports: `cn`.

[`lib/utils.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/utils.ts) · code · 169 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
