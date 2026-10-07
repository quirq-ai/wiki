<!-- quirq-wiki-generated repo=ui dir=components/shapes/data-display -->

# ui / components/shapes/data-display

Source: [components/shapes/data-display](https://github.com/quirq-ai/ui/tree/main/components/shapes/data-display) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### article.tsx

Article and markdown prose: ArticleHeader (back link, kicker, title, dek, mono meta line),
ArticleBody (h2, h3, p, described figure, quote with a spectrum bar, focusable code and
table regions, spectrum-bullet lists) and MarkdownProse (a small deterministic markdown
renderer for previews, chat replies and the local reader). Server-safe, no hooks.

[`components/shapes/data-display/article.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/article.tsx) · code · 18052 bytes

### avatars.tsx

Avatars: PeopleStack (overlapping initials with a +N chip, an empty "Not shared" line and a
loading skeleton pill; the title lists every name), AgentBlob (a soft organic mark for an
agent, shaped deterministically from its name, with the runtime logo inside) and PersonRow
(avatar, name, detail and a trailing slot). Initials only: rosters never carry pictures.
Server-safe and hydration stable: shapes and tints come from a string hash.

[`components/shapes/data-display/avatars.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/avatars.tsx) · code · 7114 bytes

### code-reader.tsx

CodeReader: a read-only source view with a line-number gutter, token colors from the quirq
palette, a wrap toggle and copy. Wrap is local state unless controlled. Notable exports:
`CodeReader`, `CodeReaderProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/data-display/code-reader.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/code-reader.tsx) · code · 4142 bytes

### controls.tsx

Small shared controls for data-display tool rows: ToggleButton (a labelled aria-pressed
toggle such as Wrap or Follow). No hooks; the caller owns the state. Notable exports:
`ToggleButton`, `ToggleButtonProps`.

[`components/shapes/data-display/controls.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/controls.tsx) · code · 1272 bytes

### definition-grid.tsx

Definition grid: label and value facts with an optional copy button per value.
DefinitionGrid (grid, rows or lead layout), IdentityPanel (space identity plus account
connections), RootPathStrip (host and container roots with access state) and FileMetaHead
(galileo file name, size, modified time and a Raw link). Server-safe: CopyButton carries its
own client boundary. Layouts respond to their container, not the viewport.

[`components/shapes/data-display/definition-grid.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/definition-grid.tsx) · code · 14688 bytes

### demo-article.tsx

Demo: Article and markdown prose. Research article (dated and undated headers, every body
block), markdown preview (previewer and chat sizes) and the local reader in Preview and
Source modes. Links go to other shapes on the page. Notable exports: `ArticleDemo`.

[`components/shapes/data-display/demo-article.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/demo-article.tsx) · code · 7811 bytes

### demo-avatars.tsx

Demo: Avatars and group. Single (sizes, presence, runtime), group (max 3 on cards, max 5 in
the project pane, empty "Not shared"), agent blob and the loading skeleton pill. Hover a
stack to read every name. Notable exports: `AvatarsDemo`.

[`components/shapes/data-display/demo-avatars.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/demo-avatars.tsx) · code · 6346 bytes

### demo-definition-grid.tsx

Demo: Definition grid. Every variant (metadata, identity, root path, storage split, file
meta, glossary term) and state (loading, not recorded), with copy on values. Notable
exports: `DefinitionGridDemo`.

[`components/shapes/data-display/demo-definition-grid.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/demo-definition-grid.tsx) · code · 13840 bytes

### demo-instruments.tsx

Demo: Instrument readouts and legends. Astrophysics and chemistry panels (emitting and
partial values), element legends, the flight readout with live updates, the overlay legend
(cycle with G or the layer switch), world labels and the targeting reticle. Notable exports:
`InstrumentsDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/data-display/demo-instruments.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/demo-instruments.tsx) · code · 15360 bytes

### demo-kit.tsx

Demo scaffolding for the data-display category: the small mono caption that names each
variant or state, and a labelled cell. Server-safe. Notable exports: `Caption`, `Cell`.

[`components/shapes/data-display/demo-kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/demo-kit.tsx) · code · 842 bytes

### demo-provenance.tsx

Demo: Provenance label and method footnote. Live host, mock data, illustrative and sample
badges (hover or focus for the source), a chart with its method footnote, the illustrative
quarter ledger, an Unavailable reading that links to the method, and the method itself.
Notable exports: `ProvenanceDemo`.

[`components/shapes/data-display/demo-provenance.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/demo-provenance.tsx) · code · 11786 bytes

### demo-rollout-matrix.tsx

Demo: Rollout matrix. Filter by category and search, expand a card (click, Enter, Space;
Escape collapses), empty cells (striped live, dash elsewhere) and the no-matches state.
Notable exports: `RolloutMatrixDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/data-display/demo-rollout-matrix.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/demo-rollout-matrix.tsx) · code · 5050 bytes

### demo-term-card.tsx

Demo: Term card with use and avoid. Product names, everyday work terms, setup terms and
collision resolutions; filter by group and copy a term. Notable exports: `TermCardDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/data-display/demo-term-card.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/demo-term-card.tsx) · code · 5184 bytes

### demo-terminal.tsx

Demo: Terminal, logs and code. Status transcript, log viewer (streaming, idle, loading,
offline; follow tail, copy, scroll), galileo gateway log (start banner, per-source lines,
added/changed/removed, sample port fallback, port taken with exit 1) and the code reader
(TypeScript, JSON, raw text; wrapped and unwrapped). Notable exports: `TerminalDemo`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/data-display/demo-terminal.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/demo-terminal.tsx) · code · 10795 bytes

### demo-trust-boundary.tsx

Demo: Local vs sent trust panel. Stays local vs sent split (copy a path), usage reporting in
all four states plus a live switch (off, pending, on; a rejected key blocks it), the storage
map while it loads, the localhost vs acme.localhost boundary diagram, the FILES STAY LOCAL
header tag and the attribution row. Notable exports: `TrustBoundaryDemo`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/data-display/demo-trust-boundary.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/demo-trust-boundary.tsx) · code · 7500 bytes

### highlight.ts

Tiny deterministic highlighter for the code reader: TypeScript and JSON only. Pure
functions, no DOM; the same input yields the same tokens on server and client. Notable
exports: `highlight`, `TokenKind`, `Token`, `CodeLanguage`, `TOKEN_CLASS`.

[`components/shapes/data-display/highlight.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/highlight.ts) · code · 4479 bytes

### index.tsx

export const shapes: Shape[] = [ { id: "definition-grid", name: "Definition grid", purpose:
"Label/value facts with copy.", seenIn: [ "landing:definition-grid", "space-ui:metadata-
definition-grid", "space-ui:identity-panel", "space-ui:root-path-strip", "space-ui:storage-
map-split", "galileo:file-meta-head", "viz:glossary-term-card", ], variants: ["metadata"
Notable exports: `shapes`.

[`components/shapes/data-display/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/index.tsx) · code · 4750 bytes

### instruments.tsx

Instrument readouts and legends from the file-map visualizers: InstrumentPanel (law strip,
subject, formula, mono dl with emitting and partial values), ElementLegend (formula string,
dot legend with heat, shape legend), FlightReadout (state, speed, bar), OverlayLegendCard
(gradient scale), WorldLabel (body label or atom chip) and TargetingReticle (idle, locked,
fired). Server-safe; motion is transitions only.

[`components/shapes/data-display/instruments.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/instruments.tsx) · code · 13521 bytes

### log-viewer.tsx

LogViewer: line-numbered mono log with level tags, a follow-tail toggle, copy, and the
streaming, idle, loading and offline states. Scrolling up pauses follow; scrolling back to
the bottom or pressing "Jump to latest" resumes it. Lines come in through props, so the
caller decides how they stream; new lines are counted by id, so a sliding window of the
latest lines works as well as an ever-growing list.

[`components/shapes/data-display/log-viewer.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/log-viewer.tsx) · code · 7611 bytes

### markdown-reader.tsx

MarkdownReader: the local reader for a markdown file. Preview renders the prose, Source
shows the raw text with line numbers and an optional wrap. Mode, wrap and copy are local
state; the file content comes in through props. Notable exports: `MarkdownReader`,
`ReaderMode`, `MarkdownReaderProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/data-display/markdown-reader.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/markdown-reader.tsx) · code · 4794 bytes

### path-text.tsx

PathText: a file path that prefers to wrap after a slash. Each "/" is followed by a <wbr>
break opportunity, and the caller keeps overflow-wrap:anywhere as the last resort, so a
narrow column reads "papers/verification/" then "snapshot-diffs.md". Server-safe. Notable
exports: `PathText`.

[`components/shapes/data-display/path-text.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/path-text.tsx) · code · 641 bytes

### provenance.tsx

Provenance and method: every number says where it came from and how it was made.
ProvenanceBadge (live host, mock data, illustrative, sample, unavailable; hover or focus
shows the source), MethodFootnote (provenance · method · unit · scope · window, linking to
the method), MetaLine (byline, qualifier, reassurance), UnavailableValue (the word
Unavailable with a link to the method) and QuarterLedger (illustrative QER table).

[`components/shapes/data-display/provenance.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/provenance.tsx) · code · 9269 bytes

### rollout-matrix.tsx

RolloutMatrix: stages across, lanes down, project cards in the cells. One card expands at a
time (click, Enter or Space on its header; Escape collapses). Empty live cells are striped,
other empty cells show a faint dash, and a filtered-out category shows the no-matches line.
The grid scrolls sideways inside a focusable region on narrow screens, with the lane column
pinned so every card keeps its lane.

[`components/shapes/data-display/rollout-matrix.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/rollout-matrix.tsx) · code · 13754 bytes

### term-card.tsx

TermCard: teaches one term with its definition, a correct use, the wording to avoid (struck
through) and, for collisions, the existing wording and the v1 convention. Server-safe:
CopyButton carries its own client boundary. Notable exports: `TermCard`, `TermGroup`,
`TERM_GROUPS`, `Term`, `TermCardProps`.

[`components/shapes/data-display/term-card.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/term-card.tsx) · code · 4775 bytes

### terminal.tsx

Terminal output: TerminalFrame (hairline window with a mono title), TerminalTranscript ($
prompt, ✓ ok, → next, ✗ failed lines with emphasized spans) and GatewayLog (galileo CLI
lines with a colored [prefix], an error line and its exit code). Server-safe. The pre is
focusable because it scrolls sideways on narrow screens.

[`components/shapes/data-display/terminal.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/terminal.tsx) · code · 5554 bytes

### trust-boundary.tsx

Trust boundary: what stays on this machine and what leaves the space. TrustSplit (two railed
columns: local vs portable, or stays local vs sent), UsageReportingStatus (on, blocked,
pending, off), BoundaryDiagram (two origins and the messages allowed across), LocalOnlyTag,
LocalHeaderStrip (product header with the FILES STAY LOCAL tag) and AttributionRow. Server-
safe: CopyButton carries its own client boundary.

[`components/shapes/data-display/trust-boundary.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/data-display/trust-boundary.tsx) · code · 16091 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
