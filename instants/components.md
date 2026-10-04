<!-- quirq-wiki-generated repo=instants dir=components -->

# instants / components

Source: [components](https://github.com/quirq-ai/instants/tree/main/components) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### connector-error.tsx

/** Render in the affected feature, leaving the rest of the Site usable. */ export function
ConnectorError({ error, connectorName, reconnectHref, }: { error: { status: string; message:
string }; connectorName: string; reconnectHref: string; }) { const recovery =
connectorErrorRecovery(error, connectorName, reconnectHref); return ( Notable exports:
`ConnectorError`.

[`components/connector-error.tsx`](https://github.com/quirq-ai/instants/blob/main/components/connector-error.tsx) · code · 1082 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
