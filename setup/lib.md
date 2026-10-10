<!-- quirq-wiki-generated repo=setup dir=lib -->

# setup / lib

Source: [lib](https://github.com/quirq-ai/setup/tree/main/lib) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### api.ts

The form's side of the local API that cli/server.mjs serves. The page trades the single-use
key from the link's fragment (which browsers never send anywhere) for an HttpOnly session
cookie and a token. The token lives in this tab's sessionStorage (scoped to this port,
unlike cookies) and goes in the x-qq-setup header of every later call, with the cookie.

[`lib/api.ts`](https://github.com/quirq-ai/setup/blob/main/lib/api.ts) · code · 3832 bytes

### utils.ts

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); } Notable
exports: `cn`.

[`lib/utils.ts`](https://github.com/quirq-ai/setup/blob/main/lib/utils.ts) · code · 169 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
