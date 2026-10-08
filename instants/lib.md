<!-- quirq-wiki-generated repo=instants dir=lib -->

# instants / lib

Source: [lib](https://github.com/quirq-ai/instants/tree/main/lib) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### brand.ts

export type Theme = "light" | "dark"; export { brand }; const kebab = (value: string) =>
value.replace(/[A-Z]/g, (letter) => -${letter.toLowerCase()}); export function
brandVariables(theme: Theme) { const colors = { ...brand.themes[theme], ...brand.colors };
return Object.fromEntries([ ...Object.entries(colors).map(([key, value]) => [
--ig-${kebab(key)}, val Notable exports: `brandVariables`, `Theme`, `brandStyles`, `brand`.

[`lib/brand.ts`](https://github.com/quirq-ai/instants/blob/main/lib/brand.ts) · code · 1132 bytes

### connector-context.ts

Capture the trusted capability before Vinext derives its revalidation context, which does
not retain custom execution-context props. Never share across requests. Notable exports:
`runWithConnectorBinding`, `getConnectorBinding`.

[`lib/connector-context.ts`](https://github.com/quirq-ai/instants/blob/main/lib/connector-context.ts) · code · 612 bytes

### connector-contract.mts

export type Json = | null | boolean | number | string | Json[] | { [key: string]: Json }
Notable exports: `createConnectors`, `Json`, `ConnectorFailureStatus`, `ConnectorContent`,
`ConnectorResult`, `ConnectorBinding`, `ConnectorContext`.

[`lib/connector-contract.mts`](https://github.com/quirq-ai/instants/blob/main/lib/connector-contract.mts) · code · 5362 bytes

### connector-errors.mts

/** Validate and project runtime results onto the public connector response. */ export
function connectorResponse(result: unknown): Response { try { Keep server-only parsing lazy
so client recovery UI can tree-shake it out. const requestId = z .string()
.regex(/^[A-Za-z0-9._:-]{1,128}$/) .optional() .catch(undefined); const envelope = { error:
z.never().opti Notable exports: `connectorResponse`, `connectorErrorRecovery`.

[`lib/connector-errors.mts`](https://github.com/quirq-ai/instants/blob/main/lib/connector-errors.mts) · code · 2717 bytes

### connector-preview.d.ts

declare module "virtual:sites-connector-preview" { const binding: import("./connector-
contract.mjs").ConnectorBinding; export default binding; } Provides a default export as the
module's public entry.

[`lib/connector-preview.d.ts`](https://github.com/quirq-ai/instants/blob/main/lib/connector-preview.d.ts) · code · 433 bytes

### connectors.ts

/** Keep invocation context on this request; never cache it across visitors. */ export
function connectorsForRequest() { return createConnectors(getConnectorBinding()); } export
type { ConnectorContext, ConnectorResult, ConnectorFailureStatus, Json, } from "./connector-
contract.mjs" Notable exports: `connectorsForRequest`.

[`lib/connectors.ts`](https://github.com/quirq-ai/instants/blob/main/lib/connectors.ts) · code · 416 bytes

### data.ts

export type Company = { id: string; name: string; handle: string; description: string;
color: string; initials: string; }; export type User = { id: string; username: string; name:
string; avatar: string; verified: boolean; following: boolean; companyId: string; role:
string; }; export type Instant = { kind: string; title: string; expiresInMinutes: number; op
Notable exports: `Company`, `User`, `Instant`, `Comment`, `Post`, `Message`, `Thread`

[`lib/data.ts`](https://github.com/quirq-ai/instants/blob/main/lib/data.ts) · code · 2274 bytes

### motion-core.mjs

Pure gesture rules shared by the pointer hook and the regression tests. Notable exports:
`classifySwipe`, `nearestSlide`, `isDoubleTap`.

[`lib/motion-core.mjs`](https://github.com/quirq-ai/instants/blob/main/lib/motion-core.mjs) · code · 989 bytes

### motion-tokens.ts

export { motion }; export const motionStyles = `:root{${Object.entries(motion.durations)
.map(([key, value]) => --motion-${key}:${value}ms) .join( ";", )};--motion-
ease:${motion.easing.standard};--motion-spring:${motion.easing.spring}}` Notable exports:
`motionStyles`, `motion`.

[`lib/motion-tokens.ts`](https://github.com/quirq-ai/instants/blob/main/lib/motion-tokens.ts) · code · 293 bytes

### motion.ts

export { motion }; export function useReducedMotion() { const [reduced, setReduced] =
useState(false); useEffect(() => { const query = window.matchMedia("(prefers-reduced-motion:
reduce)"); const update = () => setReduced(query.matches); update();
query.addEventListener("change", update); return () => query.removeEventListener("change",
update); }, []); retu Notable exports: `useReducedMotion`, `prefersReducedMotion`

[`lib/motion.ts`](https://github.com/quirq-ai/instants/blob/main/lib/motion.ts) · code · 3563 bytes

### utils.ts

export function cn(...inputs: ClassValue[]): string { return twMerge(clsx(inputs)); }
Notable exports: `cn`.

[`lib/utils.ts`](https://github.com/quirq-ai/instants/blob/main/lib/utils.ts) · code · 177 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
