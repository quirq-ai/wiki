<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/lib/format -->

# argus-code / dashboard/src/lib/format

Source: [dashboard/src/lib/format](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/lib/format) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### format.test.ts

describe('usd', () => { it('tiers precision by magnitude (legacy contract)', () => {
expect(usd(1408.2)).toBe('$1,408'); expect(usd(203.4)).toBe('$203');
expect(usd(11.567)).toBe('$11.57'); expect(usd(3.49)).toBe('$3.49');
expect(usd(0.0123)).toBe('$0.012'); expect(usd(0.0012)).toBe('$0.0012');
expect(usd(null)).toBe('$—'); }); }) Automated test file.

[`dashboard/src/lib/format/format.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/format/format.test.ts) · code · 1747 bytes

### format.ts

export const usd = (n: number | null | undefined): string => { if (n == null) return '$—';
if (n >= 1000) return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); if (n
>= 100) return '$' + n.toFixed(0); if (n >= 1) return '$' + n.toFixed(2); if (n >= 0.01)
return '$' + n.toFixed(3); return '$' + n.toFixed(4); } Notable exports: `usd`, `tok`,
`num`, `pct`, `dur`, `ago`, `shortDate`, `fmtLocalDateTime`, and 1 more.

[`dashboard/src/lib/format/format.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/format/format.ts) · code · 2076 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
