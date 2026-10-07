<!-- quirq-wiki-generated repo=ui dir=components/shapes/graphs-trees -->

# ui / components/shapes/graphs-trees

Source: [components/shapes/graphs-trees](https://github.com/quirq-ai/ui/tree/main/components/shapes/graphs-trees) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### cycle-demo.tsx

const TAGLINE = "Start simply. Understand the work. Improve the space." Notable exports:
`CycleDiagramDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/graphs-trees/cycle-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/cycle-demo.tsx) · code · 3851 bytes

### cycle-diagram.tsx

Improvement loop: five to eight stages on a ring, curved arrows between them, a return edge
back to the first stage (labeled "next configuration"), an optional entry node above the
ring, and a center that shows the tagline or the active stage's note and status. Notable
exports: `CycleDiagram`, `StageStatus`, `CycleStage`, `CycleDiagramProps`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/graphs-trees/cycle-diagram.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/cycle-diagram.tsx) · code · 9180 bytes

### diagram.tsx

Shared node-and-edge diagram engine for flow, architecture and decision diagrams. Nodes are
HTML boxes positioned on a fixed-size stage; edges, group frames and decision diamonds are
drawn in one SVG layer underneath. No hooks: interactive wrappers pass highlight sets and
handlers in. Geometry is plain arithmetic, so server and client agree.

[`components/shapes/graphs-trees/diagram.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/diagram.tsx) · code · 19786 bytes

### file-explorer.tsx

Two-pane file explorer: a crumb, a folder and file count, folders on the left and files on
the right with size and modified time, and a Copy path menu on every row. Panes stack on
narrow screens; a folder without subfolders shows the files pane alone. Notable exports:
`FileExplorer`, `FsNode`, `ExplorerState`, `FileExplorerProps`. Marked `'use client'` so it
runs in the browser.

[`components/shapes/graphs-trees/file-explorer.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/file-explorer.tsx) · code · 15540 bytes

### file-tree-data.ts

File tree demo data: the xo-space fixture tree, three more project trees for the growth
tree, deterministic modified times, and the preview samples. Notable exports:
`XO_SPACE_TREE`, `GALILEO_TREE`, `BILLING_TREE`, `LANDING_TREE`, `DEMO_KIT_TREE`,
`PROJECTS_FOLDER`, `PREVIEWS`.

[`components/shapes/graphs-trees/file-tree-data.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/file-tree-data.ts) · code · 5261 bytes

### file-tree-demo.tsx

export function FileTreeDemo() { const [openedFromTree, setOpenedFromTree] = useState(null);
const [openedFromPane, setOpenedFromPane] = useState(null) Notable exports: `FileTreeDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/graphs-trees/file-tree-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/file-tree-demo.tsx) · code · 4539 bytes

### file-tree-preview.tsx

Tree + preview: an indented file tree (WAI tree keyboard pattern) beside a read-only preview
with Preview and Code views for Markdown, HTML and CSV. On narrow screens the two panes take
turns: picking a file opens the preview, and "Files" goes back. Notable exports:
`FileTreePreview`, `PreviewSource`, `FileTreePreviewProps`. Marked `'use client'` so it runs
in the browser.

[`components/shapes/graphs-trees/file-tree-preview.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/file-tree-preview.tsx) · code · 13978 bytes

### flow-diagram-data.ts

Flow diagram datasets. Product and work maps follow the terminology brief (arrows are roles,
dashed arrows are intended and not validated); the routing picture and route map follow
galileo's architecture and reference docs; the blueprint is illustrative. Notable exports:
`BLUEPRINT_NODES`, `BLUEPRINT_EDGES`, `DRAFT_NODES`, `DRAFT_EDGES`, `DRAFT_DESCRIPTION`,
`BLUEPRINT_DESCRIPTION`, `PRODUCT_MAP`, `PRODUCT_MAP_DESCRIPTION`, and 7 more.

[`components/shapes/graphs-trees/flow-diagram-data.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/flow-diagram-data.ts) · code · 15155 bytes

### flow-diagram-demo.tsx

import { BLUEPRINT_DESCRIPTION, BLUEPRINT_EDGES, BLUEPRINT_NODES, DRAFT_DESCRIPTION,
DRAFT_EDGES, DRAFT_NODES, PRODUCT_MAP, PRODUCT_MAP_DESCRIPTION, ROUTE_GROUPS, ROUTING,
ROUTING_DESCRIPTION, RUNTIME_CAPABILITIES_CHIPS, WATCHER_PIPELINE, WORK_MAP,
WORK_MAP_DESCRIPTION, } from "./flow-diagram-data"; const ROLE_LEGEND = [ { style: "solid"
as const, label: "Ro Notable exports: `FlowDiagramDemo`.

[`components/shapes/graphs-trees/flow-diagram-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/flow-diagram-demo.tsx) · code · 4920 bytes

### flow-diagram.tsx

Flow and architecture diagrams: the blueprint canvas (trigger, agent, conditional and
function nodes on a dotted board), a generic node-and-edge map with solid role edges and
dashed intended edges, the four-step pipeline strip, the universal runtime tree and the
galileo route map. Node focus lights a node's edges; wide boards scroll sideways.

[`components/shapes/graphs-trees/flow-diagram.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/flow-diagram.tsx) · code · 18974 bytes

### growth-tree.tsx

Horizontal growth tree: the projects folder on the left, one column per level of folders,
files stacked in a card beside the folder that holds them. Link weight grows with what a
branch holds; new branches grow in and their links draw in. Drag the canvas to pan. Notable
exports: `GrowthTree`, `GrowthTreeProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/graphs-trees/growth-tree.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/growth-tree.tsx) · code · 18631 bytes

### index.tsx

export const shapes: Shape[] = [ { id: "knowledge-graph", name: "Knowledge and session
graph", purpose: "Map sessions, projects, files and ties.", seenIn: [ "landing:observatory-
session-graph", "space-ui:force-directed-knowledge-graph", "space-ui:graph-legend", "space-
ui:graph-focus-overlays", "space-ui:todo-satellite-orbit", ], variants: ["sessions by harne
Notable exports: `shapes`.

[`components/shapes/graphs-trees/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/index.tsx) · code · 3282 bytes

### knowledge-graph-data.ts

Datasets for the knowledge-graph demos, built from the shared fixtures with plain arithmetic
(rounded), so the server and the browser compute the same layout. Notable exports:
`GraphDataset`, `CATEGORY_GRAPH`, `PROJECT_SATELLITES`, `XO_SPACE_SATELLITES`,
`HARNESS_GRAPH`, `FILE_GRAPH`, `FILE_GRAPH_CLOSED`.

[`components/shapes/graphs-trees/knowledge-graph-data.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/knowledge-graph-data.ts) · code · 11896 bytes

### knowledge-graph-demo.tsx

export function KnowledgeGraphDemo() { return ( Notable exports: `KnowledgeGraphDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/graphs-trees/knowledge-graph-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/knowledge-graph-demo.tsx) · code · 2647 bytes

### knowledge-graph.tsx

Knowledge and session graph: a root, hubs with counts, dashed hulls around each hub's
leaves, leaf glyphs by type, todo satellites around a focused project, a legend, a focus
crumb and a settling indicator. SVG, so it renders on the server; the layout is passed in
(precomputed and deterministic) and the "settle" is an eased replay from a seeded scatter.

[`components/shapes/graphs-trees/knowledge-graph.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/knowledge-graph.tsx) · code · 45543 bytes

### markdown-lite.tsx

A small, safe Markdown and code renderer for file previews: headings, paragraphs, lists,
fenced code, tables and quotes, plus line-numbered source with light token colors. It builds
React elements only (never HTML strings), so file contents cannot inject markup. Notable
exports: `MarkdownLite`, `CodeView`, `CsvTable`.

[`components/shapes/graphs-trees/markdown-lite.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/markdown-lite.tsx) · code · 8614 bytes

### orbit-map-data.ts

Orbit map datasets from the shared fixtures: every project by category, and the research-lab
space alone (three categories empty, drawn as dim stubs). Notable exports: `ORBIT_ALL`,
`ORBIT_ALL_EVENTS`, `ORBIT_LAB`, `ORBIT_LAB_NAME`, `ORBIT_LAB_EVENTS`, `ORBIT_DATE`.

[`components/shapes/graphs-trees/orbit-map-data.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/orbit-map-data.ts) · code · 2279 bytes

### orbit-map-demo.tsx

export function OrbitMapDemo() { const [query, setQuery] = useState(""); const [category,
setCategory] = useState(null); const [opened, setOpened] = useState("xo-space"); const
project = opened ? PROJECT_BY_ID[opened] : null Notable exports: `OrbitMapDemo`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/graphs-trees/orbit-map-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/orbit-map-demo.tsx) · code · 4712 bytes

### orbit-map.tsx

Radial orbit map: a core with an event cloud, two rings, numbered category hubs, project
nodes with satellites, and a category focus view with a side panel. Search mutes what does
not match (12 percent, 180ms). SVG with fixed coordinates, so it renders on the server.
Notable exports: `OrbitMap`, `OrbitSatellite`, `OrbitProject`, `OrbitCategoryData`,
`OrbitMapProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/graphs-trees/orbit-map.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/orbit-map.tsx) · code · 22582 bytes

### parts.tsx

Small server-safe building blocks shared by the graphs-trees demos and components: the mono
demo caption, a captioned demo cell, and a tone helper for inline SVG. Notable exports:
`Caption`, `DemoCell`, `toneColor`.

[`components/shapes/graphs-trees/parts.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/parts.tsx) · code · 1519 bytes

### project-meta.ts

Demo-side project metadata shared by the graph and orbit demos: the artifact tag each
project carries in the Space dashboard (App, One-pager, Docs, Slides, Unknown) and the
matching graph glyph. Deterministic, derived from fixture ids only. Notable exports:
`ProjectTag`, `PROJECT_TAG`, `TAG_GLYPH`, `tagOf`.

[`components/shapes/graphs-trees/project-meta.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/project-meta.ts) · code · 944 bytes

### sequence-data.ts

Sequences and decision trees from galileo's architecture doc, with the acme source on its
fixture port. Short labels ride on the arrows; the full wording is in the step list. Notable
exports: `OPEN_PARTICIPANTS`, `OPEN_MESSAGES`, `DOWN_MESSAGES`, `HISTORY_PARTICIPANTS`,
`HISTORY_MESSAGES`, `SORT_NODES`, `SORT_EDGES`, `SORT_TRACES`, and 9 more.

[`components/shapes/graphs-trees/sequence-data.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/sequence-data.ts) · code · 11881 bytes

### sequence-demo.tsx

import { CSP_DESCRIPTION, CSP_EDGES, CSP_NODES, CSP_TRACES, DOWN_MESSAGES,
FILES_DESCRIPTION, FILES_EDGES, FILES_NODES, FILES_TRACES, HISTORY_MESSAGES,
HISTORY_PARTICIPANTS, OPEN_MESSAGES, OPEN_PARTICIPANTS, SORT_DESCRIPTION, SORT_EDGES,
SORT_NODES, SORT_TRACES, } from "./sequence-data"; export function SequenceDiagramDemo() {
return ( Notable exports: `SequenceDiagramDemo`.

[`components/shapes/graphs-trees/sequence-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/sequence-demo.tsx) · code · 2839 bytes

### sequence-diagram.tsx

Sequence and decision diagrams for gateway and runtime flows. SequenceDiagram draws
participant heads, dashed lifelines and numbered message arrows (dashed for returns); hover
a step or an arrow to light it, or focus the diagram and step with the arrow keys.
DecisionTree lays out diamonds and results top-down and traces a request's path.

[`components/shapes/graphs-trees/sequence-diagram.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/graphs-trees/sequence-diagram.tsx) · code · 17492 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
