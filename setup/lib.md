<!-- quirq-wiki-generated repo=setup dir=lib -->

# setup / lib

Source: [lib](https://github.com/quirq-ai/setup/tree/main/lib) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### api.ts

The form's side of the local API that cli/server.mjs serves. Every call carries the one-time
key from the link the terminal printed (kept in the URL fragment, which browsers never send
anywhere). Notable exports: `keyFromHash`, `Kind`, `Org`, `Repo`, `State`, `RepoList`,
`StarterKind`, `Answers`, and 3 more.

[`lib/api.ts`](https://github.com/quirq-ai/setup/blob/main/lib/api.ts) · code · 2427 bytes

### utils.ts

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); } Notable
exports: `cn`.

[`lib/utils.ts`](https://github.com/quirq-ai/setup/blob/main/lib/utils.ts) · code · 169 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
