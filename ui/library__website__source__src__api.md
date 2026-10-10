<!-- quirq-wiki-generated repo=ui dir=library/website/source/src/api -->

# ui / library/website/source/src/api

Source: [library/website/source/src/api](https://github.com/quirq-ai/ui/tree/main/library/website/source/src/api) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### frame-check.ts

GET /api/frame-check?url=<https page>&origin=<this site's origin>: whether the page lets
this site show it in a window (src/lib/frameCheck.ts). The browser can't read another site's
headers, so this is the site's only server code. It reads a response's status and headers,
never its body, and only from public https hosts: every address a host resolves to must be
public, so it can't be pointed at a private network.

[`library/website/source/src/api/frame-check.ts`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/api/frame-check.ts) · code · 4500 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
