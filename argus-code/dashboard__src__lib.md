<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/lib -->

# argus-code / dashboard/src/lib

Source: [dashboard/src/lib](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/lib) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### agents.test.ts

it('labels known agents and passes unknown ones through', () => {
expect(agentLabel('claude_code')).toBe('Claude Code');
expect(agentLabel('codex')).toBe('Codex'); expect(agentLabel('hermes')).toBe('hermes'); })
Automated test file.

[`dashboard/src/lib/agents.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/agents.test.ts) · code · 1294 bytes

### agents.ts

const LABEL: Record = { claude_code: 'Claude Code', codex: 'Codex' } Notable exports:
`resumeCommand`, `agentOptions`, `agentLabel`, `agentShortName`, `agentOfId`.

[`dashboard/src/lib/agents.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/agents.ts) · code · 1211 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
