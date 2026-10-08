<!-- quirq-wiki-generated repo=euler dir=app/instants/components -->

# euler / app/instants/components

Source: [app/instants/components](https://github.com/quirq-ai/euler/tree/main/app/instants/components) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### connector-error.tsx

/** Render in the affected feature, leaving the rest of the Site usable. */ export function
ConnectorError({ error, connectorName, reconnectHref, }: { error: { status: string; message:
string }; connectorName: string; reconnectHref: string; }) { const recovery =
connectorErrorRecovery(error, connectorName, reconnectHref); return ( Notable exports:
`ConnectorError`.

[`app/instants/components/connector-error.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/connector-error.tsx) · code · 1082 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
