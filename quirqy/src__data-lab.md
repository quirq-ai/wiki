<!-- quirq-wiki-generated repo=quirqy dir=src/data-lab -->

# quirqy / src/data-lab

Source: [src/data-lab](https://github.com/quirq-ai/quirqy/tree/quirq/src/data-lab) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### app.js

Data Lab uses Quirqy's stage and HUD, with its own repository state. Notable exports:
`mountDataLab`.

[`src/data-lab/app.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/app.js) · code · 22193 bytes

### author-profile.js

GitHub account metadata only: an author name or email is never an account ID. Notable
exports: `normalizeAuthorProfile`.

[`src/data-lab/author-profile.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/author-profile.js) · code · 1050 bytes

### author-profile.test.js

const apiAuthor = { login: 'real-author', avatar_url:
'https://avatars.githubusercontent.com/u/123?v=4', html_url: 'https://github.com/real-
author', }; const normalizedAuthor = { login: 'real-author', avatarUrl:
apiAuthor.avatar_url, url: apiAuthor.html_url, } Automated test file.

[`src/data-lab/author-profile.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/author-profile.test.js) · code · 5430 bytes

### commit-bubble-layout.js

const clamp = (value, low, high) => Math.max(low, Math.min(high, value)) Notable exports:
`placeCommitBubble`.

[`src/data-lab/commit-bubble-layout.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/commit-bubble-layout.js) · code · 1710 bytes

### commit-bubble-layout.test.js

const desktop = { x: 500, y: 300, width: 1200, height: 800, bubbleWidth: 300, bubbleHeight:
180 }; const mobile = { x: 195, y: 400, width: 390, height: 844, bubbleWidth: 320,
bubbleHeight: 220 } Automated test file.

[`src/data-lab/commit-bubble-layout.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/commit-bubble-layout.test.js) · code · 5668 bytes

### data-controls.js

Internal state used by the pinned Three.js TrackballControls implementation. Notable
exports: `DataLabControls`.

[`src/data-lab/data-controls.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/data-controls.js) · code · 12265 bytes

### encoding.js

Shared by the repository scene and its guide so visual meanings stay aligned. Notable
exports: `fileKind`, `FOLDER_COLORS`, `CHANGE_COLORS`, `FILE_KINDS`.

[`src/data-lab/encoding.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/encoding.js) · code · 1039 bytes

### examples.js

Both snapshots ship with Data Lab: choosing an example never fetches GitHub. Notable
exports: `getExampleDataset`, `DEFAULT_EXAMPLE_URL`, `DEFAULT_EXAMPLE_COMMIT_LIMIT`,
`EXAMPLE_REPOSITORIES`.

[`src/data-lab/examples.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/examples.js) · code · 2268 bytes

### examples.test.js

test('the only built-in examples are the two requested repositories, with XO as default', ()
=> { assert.deepEqual(EXAMPLE_REPOSITORIES.map(example => example.url), [
'https://github.com/quirq-ai/xo', 'https://github.com/quirq-ai/xo-space', ]);
assert.equal(DEFAULT_EXAMPLE_URL, EXAMPLE_REPOSITORIES[0].url);
assert.equal(getExampleDataset().repository.fullNam Automated test file.

[`src/data-lab/examples.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/examples.test.js) · code · 4647 bytes

### github.js

Public GitHub metadata only. No source execution, credentials or backend. Notable exports:
`parseRepositoryUrl`, `loadRepository`, `DEFAULT_REPOSITORY_COMMIT_LIMIT`.

[`src/data-lab/github.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/github.js) · code · 10045 bytes

### guide.js

const hex = value => #${value.toString(16).padStart(6, '0')}; const icons = { trunk: '',
branch: '', roots: '', leaf: '', atom: '', carbon: 'C', } Notable exports: `DataGuide`.

[`src/data-lab/guide.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/guide.js) · code · 26987 bytes

### layout.js

Pure repository containment layout. Commit playback never changes coordinates. Notable
exports: `stableHash`, `createRepositoryLayout`.

[`src/data-lab/layout.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/layout.js) · code · 5602 bytes

### layout.test.js

const make = count => ({ repository: { name: 'test' }, nodes: Array.from({ length: count },
(_, i) => ({ id: file:${i}, path: src/feature${i % 8}/nested/file${i}.js })), commits: []
}); test('containment layout is deterministic across input ordering and has genuine depth',
() => { const model = make(80); const a = createRepositoryLayout(model); const b = cre
Automated test file.

[`src/data-lab/layout.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/layout.test.js) · code · 1982 bytes

### model.js

Deterministic file identities and replay states, shared by both visualizations. Notable
exports: `buildModel`, `stateAt`, `activityInsights`.

[`src/data-lab/model.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/model.js) · code · 8332 bytes

### model.test.js

const repository = { name: 'sample', fullName: 'example/sample', source: 'demo', headSha:
'c3' }; const file = (path, status, extra = {}) => ({ path, status, additions: 1, deletions:
0, ...extra }); const commit = (sha, files) => ({ sha, message: sha, author: 'Example',
date: '', url: '', files }); const dataset = (files, commits) => ({ repository, files, co
Automated test file.

[`src/data-lab/model.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/model.test.js) · code · 11131 bytes

### molecule-activity.js

Activity belongs to the loaded commit window, not the full repository history. These stable
keys distinguish separate file identities and their historical folder attachments, including
renames and delete/re-add cycles. Notable exports: `activityLevel`, `buildActivityHistory`,
`activityAt`, `membershipActivityKey`.

[`src/data-lab/molecule-activity.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/molecule-activity.js) · code · 6468 bytes

### molecule-activity.test.js

const dataset = (files, commits) => ({ repository: { name: 'activity-fixture' }, files:
files.map(path => ({ path })), commits }); const build = (files, commits, options) => {
const model = buildModel(dataset(files, commits)), graph = buildMolecularTree(model,
options); return { model, graph, history: buildActivityHistory(model, graph) }; }; const
idFor = (m Automated test file.

[`src/data-lab/molecule-activity.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/molecule-activity.test.js) · code · 11511 bytes

### molecule-enclosure-scene.js

const BASE_CAPACITY = 8; const EXPANSION_DURATION = 0.25; const finitePoint = point =>
Array.isArray(point) && point.length === 3 && point.every(Number.isFinite) Notable exports:
`FolderEnclosureScene`.

[`src/data-lab/molecule-enclosure-scene.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/molecule-enclosure-scene.js) · code · 7530 bytes

### molecule-enclosure-spacing.js

const GAP = 3; const FILE_MARGIN = 1; const inSubtree = (path, root) => root === '' || path
=== root || path.startsWith(${root}/); const distanceXZ = (a, b) => Math.hypot(a[0] - b[0],
a[2] - b[2]) Notable exports: `spaceFolderEnclosures`.

[`src/data-lab/molecule-enclosure-spacing.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/molecule-enclosure-spacing.js) · code · 5554 bytes

### molecule-enclosure-spacing.test.js

const modelFor = paths => buildModel({ repository: { name: 'spacing' }, files:
paths.map(path => ({ path })), commits: [] }); const positions = graph => new Map([
...graph.folders.map(folder => [folder:${folder.path}, [...folder.position]]),
...[...graph.folderSlots].flatMap(([folder, slots]) => [...slots].map(([id, position]) =>
[slot:${folder}:${id}, [...p Automated test file.

[`src/data-lab/molecule-enclosure-spacing.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/molecule-enclosure-spacing.test.js) · code · 6531 bytes

### molecule-enclosures.js

Folder envelopes are context geometry only: they never create repository atoms, containment
edges or activity touches. Positions supplied by the molecular layout stay untouched.
Notable exports: `buildFolderEnclosures`.

[`src/data-lab/molecule-enclosures.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/molecule-enclosures.js) · code · 10944 bytes

### molecule-enclosures.test.js

const create = (paths, commits = []) => { const model = buildModel({ repository: { name:
'enclosure-fixture' }, files: paths.map(path => ({ path })), commits }); return { model,
graph: buildMolecularTree(model) }; }; const stateFor = (model, graph, index) => { const
state = stateAt(model, index); return molecularTreeState(graph, state.activeIds,
Object.fromE Automated test file.

[`src/data-lab/molecule-enclosures.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/molecule-enclosures.test.js) · code · 13538 bytes

### molecule-layout.js

export const FILE_ATOM_RADIUS = 1.20; export const BACKBONE_ATOM_RADIUS = 1.60; These
element identities and display radii are a visual vocabulary for file categories. They are
not a chemical analysis, atomic-radius data or masses.

[`src/data-lab/molecule-layout.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/molecule-layout.js) · code · 13538 bytes

### molecule-layout.test.js

const modelFor = paths => buildModel({ repository: { name: 'fixture' }, files:
paths.map(path => ({ path, size: 128 })), commits: [] }); const at = (model, graph, index)
=> { const frame = stateAt(model, index); return molecularTreeState(graph, frame.activeIds,
Object.fromEntries(frame.files.map(file => [file.id, file.path]))); }; const movedFixture =
() => Automated test file.

[`src/data-lab/molecule-layout.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/molecule-layout.test.js) · code · 15642 bytes

### molecule-scene.js

const DURATION = 1.6; const UP = new THREE.Vector3(0, 1, 0); const FOLDER_COLOR = new
THREE.Color(0x50545d); const BOND_COLOR = new THREE.Color(0xadb6c7); const GOLD = new
THREE.Color(0xffd19a); const ROOT_SUN_COLOR = new THREE.Color(0xffb65c); const ease = value
=> value * value * (3 - 2 * value); const asSet = value => value instanceof Set ? value :
new Se Notable exports: `MoleculeScene`.

[`src/data-lab/molecule-scene.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/molecule-scene.js) · code · 47546 bytes

### panel.js

const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '':
'&gt;', '"': '&quot;', "'": '&#39;' }[char])); const fmt = value => Number(value ||
0).toLocaleString(); const fmtLength = value => Number(value || 0).toLocaleString(undefined,
{ maximumFractionDigits: 2 }); const rootGrowthStep = layout =>
layout?.lengthGrowth?.lengthP Notable exports: `DataPanel`.

[`src/data-lab/panel.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/panel.js) · code · 31582 bytes

### root-activity.js

Root strands describe touches in the loaded commit window only. The history is independent
of layout, visibility, rendering limits and animation time. Notable exports:
`buildRootActivityHistory`, `rootActivityAt`, `rootPathGrowth`, `rootMembershipKey`.

[`src/data-lab/root-activity.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-activity.js) · code · 4679 bytes

### root-activity.test.js

const change = (path, status = 'modified', extra = {}) => ({ path, status, ...extra });
const build = (paths, commits) => { const model = buildModel({ repository: { name: 'root-
activity' }, files: paths.map(path => ({ path })), commits }); return { model, history:
buildRootActivityHistory(model) }; }; const idFor = (model, path) => model.nodes.find(node
=> n Automated test file.

[`src/data-lab/root-activity.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-activity.test.js) · code · 18036 bytes

### root-geometry.js

export const ROOT_STRAND_RADIUS = 0.002; The renderer supports either accumulation rule
without changing the layout.

[`src/data-lab/root-geometry.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-geometry.js) · code · 10974 bytes

### root-geometry.test.js

import { ROOT_STRAND_RADIUS, rootStrandRadius, createRootStrandBatch, setRootStrandCurve,
setRootStrandRadius, setRootStrandColor, finishRootStrandUpdate, } from './root-geometry.js'
Automated test file.

[`src/data-lab/root-geometry.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-geometry.test.js) · code · 11084 bytes

### root-label-layout.js

const compare = (a, b) => String(a) String(b) ? 1 : 0; const clamp = (value, low, high) =>
Math.max(low, Math.min(high, value)); Half a CSS pixel of clearance avoids touching glyph
rows and browser rounding turning an exact shared edge into a visible overlap. const
intersects = (a, b) => a.left b.left && a.top b.top; const overlapArea = (a, b) => { const
hei Notable exports: `placeRootLabels`, `placeReadableRootLabels`.

[`src/data-lab/root-label-layout.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-label-layout.js) · code · 14707 bytes

### root-label-layout.test.js

const overlaps = (a, b) => a.left b.left && a.top b.top; const file = (key, x, y, width =
80) => ({ key, kind: 'file', x, y, width, height: 22 }) Automated test file.

[`src/data-lab/root-label-layout.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-label-layout.test.js) · code · 10009 bytes

### root-labels.js

const basename = path => String(path || '').split('/').filter(Boolean).pop() || ''; const
finite = value => Number.isFinite(value); const FILE_FONT = 11; const FILE_LINE = 14; const
FONT_FAMILY = 'ui-monospace,SFMono-Regular,Consolas,monospace' Notable exports:
`RootLabels`.

[`src/data-lab/root-labels.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-labels.js) · code · 11562 bytes

### root-layout.js

export { ROOT_TIER_HEIGHT } from './root-proportions.js' Notable exports:
`createRootLayout`, `ROOT_TIER_HEIGHT`.

[`src/data-lab/root-layout.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-layout.js) · code · 14268 bytes

### root-layout.test.js

const make = paths => ({ repository: { name: 'roots' }, nodes: paths.map((path, index) => ({
id: file:${index}, path, size: index * 17 })) }); const mapFolders = layout => new
Map(layout.folders.map(folder => [folder.path, folder])); const parentOf = path =>
path.includes('/') ? path.slice(0, path.lastIndexOf('/')) : '' Automated test file.

[`src/data-lab/root-layout.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-layout.test.js) · code · 19593 bytes

### root-length-layout.js

export { ROOT_LENGTH_PER_TOUCH } from './root-proportions.js'; const DEFAULT_PADDING = 2
Notable exports: `rootCurveLength`, `createRootLengthLayout`, `ROOT_LENGTH_PER_TOUCH`.

[`src/data-lab/root-length-layout.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-length-layout.js) · code · 6823 bytes

### root-length-layout.test.js

const modelFor = paths => ({ repository: { name: 'length' }, nodes: paths.map((path, index)
=> ({ id: f${index}, path })) }); const geometry = layout => layout.rows.map(row => ({ kind:
row.kind, id: row.id, path: row.path, position: row.position, curve: row.curve })); const
near = (actual, expected, tolerance = 1e-7) => assert.ok(Math.abs(actual - expected)
Automated test file.

[`src/data-lab/root-length-layout.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-length-layout.test.js) · code · 13747 bytes

### root-proportions.js

export const ROOT_REFERENCE_WIDTH = 160; export const ROOT_TIER_HEIGHT = 16; export const
ROOT_LENGTH_PER_TOUCH = 6 Notable exports: `createRootProportions`, `ROOT_REFERENCE_WIDTH`,
`ROOT_TIER_HEIGHT`, `ROOT_LENGTH_PER_TOUCH`.

[`src/data-lab/root-proportions.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-proportions.js) · code · 890 bytes

### root-proportions.test.js

test('compact repositories keep the established tier and per-touch growth', () => { for
(const width of [0, 35, 80, 160]) { const proportions = createRootProportions(width);
assert.equal(proportions.repositoryWidth, width); assert.equal(proportions.referenceWidth,
ROOT_REFERENCE_WIDTH); assert.equal(proportions.scale, 1);
assert.equal(proportions.tierHeight Automated test file.

[`src/data-lab/root-proportions.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-proportions.test.js) · code · 1616 bytes

### root-rope-geometry.js

export const ROOT_VINE_RADIUS = 0.14; export const ROOT_ROPE_PITCH = 8; const GAP = 1.06;
const TAU = Math.PI * 2; const packings = new Map([[1, [[0, 0]]]]); const settledPackings =
new Map(); const touchValue = value => Math.max(0, Number(value) || 0); const scaleValue =
value => { const scale = Number(value); if (!Number.isFinite(scale) || scale Array.from
Notable exports: `rootRopeRadius`, `createRootRopeBatch`, `setRootRopeShape`

[`src/data-lab/root-rope-geometry.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-rope-geometry.js) · code · 18879 bytes

### root-rope-geometry.test.js

import { ROOT_VINE_RADIUS, ROOT_ROPE_PITCH, rootRopeRadius, createRootRopeBatch,
setRootRopeShape, setRootRopeColor, finishRootRopeUpdate, } from './root-rope-geometry.js'
Automated test file.

[`src/data-lab/root-rope-geometry.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-rope-geometry.test.js) · code · 17731 bytes

### root-scene.js

const asVector = point => new THREE.Vector3(...point); const toSet = value => value
instanceof Set ? value : new Set(value || []); const makeCurve = points => new
THREE.CubicBezierCurve3(...points.map(asVector)); const STRAND_COLOR = new
THREE.Color(0xb0926f); const SELECTED_COLOR = new THREE.Color(0xe1eefc); const ease = value
=> value * value * (3 - 2 * va Notable exports: `RepositoryRoots`.

[`src/data-lab/root-scene.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-scene.js) · code · 26290 bytes

### root-surface.js

const RADIUS_X = 50; const RADIUS_Z = 30; const DEPTH_WEIGHT = 0.2; Ground relief
supplements label spacing without stretching the hierarchy.

[`src/data-lab/root-surface.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-surface.js) · code · 10479 bytes

### root-surface.test.js

const model = paths => ({ repository: { name: 'surface' }, nodes: paths.map((path, i) => ({
id: f${i}, path })) }); const geometry = layout => [...layout.folders,
...layout.nodes].map(row => ({ id: row.id, path: row.path, position: row.position, curve:
row.curve })); const near = (a, b, tolerance = 1e-8) => Math.abs(a - b) { const length =
Math.hypot(...vect Automated test file.

[`src/data-lab/root-surface.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-surface.test.js) · code · 20368 bytes

### root-warp.js

const BASE_RADIUS = 0.002; const compare = (a, b) => a b ? 1 : 0; const readRadius =
(values, key, baseRadius) => { const value = values instanceof Map ? values.get(key) :
values?.[key]; return Number.isFinite(Number(value)) ? Math.max(0, Number(value)) :
baseRadius; }; const strainFor = (radius, baseRadius, compact) => { const growth =
Math.max(0, radius - Notable exports: `createRootWarpLayout`.

[`src/data-lab/root-warp.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-warp.js) · code · 12583 bytes

### root-warp.test.js

const model = paths => ({ repository: { name: 'warp' }, nodes: paths.map((path, index) => ({
id: f${index}, path })) }); const folderMap = layout => new Map(layout.folders.map(folder =>
[folder.path, folder])); const geometry = layout => [...layout.folders,
...layout.nodes].map(item => ({ id: item.id, path: item.path, position: item.position,
curve: item.cur Automated test file.

[`src/data-lab/root-warp.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/root-warp.test.js) · code · 24202 bytes

### scene-drag-handles.js

Keep label clicks native; hand drags to the same controls as the canvas. Notable exports:
`bindSceneDragHandles`.

[`src/data-lab/scene-drag-handles.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/scene-drag-handles.js) · code · 2867 bytes

### scene.js

const DURATION = 1.6; const WHITE = new THREE.Color(0xf0f4ff); const ROOT_POSITION = new
THREE.Vector3(); const ease = value => value value instanceof Set ? value : new Set(value ||
[]) Notable exports: `RepositoryScene`.

[`src/data-lab/scene.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/scene.js) · code · 27244 bytes

### style.css

Data Lab uses Observatory's shared HUD primitives and leaves the scene full-screen. Leading
class selectors include `data-source-row`, `data-source-tools`, `data-example-choices`,
`data-repo-meta`, `data-view-toggles`, `data-structure`, `data-structure-summary`, `data-
structure-details`, and 61 more. Defines or consumes CSS custom properties (design tokens).

[`src/data-lab/style.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/style.css) · code · 26715 bytes

### sun-credit.js

let nextBubbleId = 0 Notable exports: `SunCredit`.

[`src/data-lab/sun-credit.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/sun-credit.js) · code · 18108 bytes

### tree-framing.test.js

function fixture(width, height, reducedMotion, dataset = createRepositoryFixture(), index) {
const model = buildModel(dataset); const head = stateAt(model, model.commits.length - 1);
const headLayout = createRootLayout(model, { activeIds: head.activeIds, paths: new
Map(head.files.map(file => [file.id, file.path])) }); const repositoryWidth =
headLayout.footp Automated test file.

[`src/data-lab/tree-framing.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/tree-framing.test.js) · code · 18986 bytes

### tree-layout.js

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5)); const TAU = Math.PI * 2; const add = (a,
b) => a.map((value, index) => value + b[index]); const scale = (value, factor) =>
value.map(component => component * factor); const lerp = (a, b, amount) => a.map((value,
index) => value + (b[index] - value) * amount); const normalize = value => scale(value, 1 /
(Math Notable exports: `leafSizing`, `leafScale`, `trunkRadius`, `createTreeLayout`

[`src/data-lab/tree-layout.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/tree-layout.js) · code · 12905 bytes

### tree-layout.test.js

test('growth tree uses exactly the mapped file identities and connected directory
hierarchy', () => { const model = buildModel(createRepositoryFixture()); const layout =
createTreeLayout(model); assert.equal(layout.nodes.length, model.nodes.length);
assert.equal(new Set(layout.nodes.map(node => node.id)).size, model.nodes.length); const
folders = new Map(lay Automated test file.

[`src/data-lab/tree-layout.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/tree-layout.test.js) · code · 10699 bytes

### tree-scene.js

const DURATION = 1.6; const GROUND_Y = -40; const PRESENTATION = { tree: { canopy: 1, roots:
0.32 }, roots: { canopy: 0.24, roots: 1 } }; const FLAT_GROUND = { height: 0, radiusX: 50,
radiusZ: 30, depthWeight: 0.2, active: false }; const UP = new THREE.Vector3(0, 1, 0); const
WHITE = new THREE.Color(0xf2f0d8); const FOLIAGE = [0x83a974, 0xa1b775, 0x67a489, 0 Notable
exports: `createLeafGeometry`, `TreeScene`.

[`src/data-lab/tree-scene.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/data-lab/tree-scene.js) · code · 44759 bytes

_Generated 2026-10-22 10:44 UTC from `quirq`._
