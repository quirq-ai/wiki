<!-- quirq-wiki-generated repo=quirqy dir=src/activity-lab -->

# quirqy / src/activity-lab

Source: [src/activity-lab](https://github.com/quirq-ai/quirqy/tree/quirq/src/activity-lab) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### app.js

const KINDS = [ ['pull_request', 'Pull requests', '#a6baf0', 'Proposed changes and merges'],
['issue', 'Issues', '#86d7ad', 'Questions, bugs and ideas'], ['review', 'Reviews',
'#e5ba78', 'Feedback on pull requests'], ['comment', 'Comments', '#87c8d0', 'Conversations
around the work'], ['fork', 'Forks', '#c6a5dd', 'Repositories branching outward'],
['contribu Notable exports: `mountActivityLab`.

[`src/activity-lab/app.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/app.js) · code · 40290 bytes

### constellation-enclosure.js

const CLEARANCE = .001; const finite = (value, fallback = 0) => Number.isFinite(value) ?
value : fallback; const compare = (a, b) => a b ? 1 : 0; const circle = value => ({ x:
finite(value?.x), y: finite(value?.y), radius: Math.max(0, finite(value?.radius)), })
Notable exports: `encloseContributorCards`, `displaceConstellationClusters`.

[`src/activity-lab/constellation-enclosure.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/constellation-enclosure.js) · code · 6834 bytes

### constellation-enclosure.test.js

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y); const contains = (outer, inner)
=> distance(outer, inner) + (inner.radius || 0) distance(a, b) >= a.radius + b.radius + gap
- 1e-7; const corners = (card, padding = 0) => [-1, 1].flatMap(x => [-1, 1].map(y => ({ x:
card.x + x * (card.width / 2 + padding), y: card.y + y * (card.height / 2 + padding)
Automated test file.

[`src/activity-lab/constellation-enclosure.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/constellation-enclosure.test.js) · code · 7955 bytes

### contributor-portrait.js

/** One scene-owned texture; late image loads cannot outlive their repository. */ export
function createContributorPortrait(actor) { const canvas = document.createElement('canvas');
canvas.width = canvas.height = 256; const context = canvas.getContext('2d'); const
background = context.createLinearGradient(0, 0, 256, 256); background.addColorStop(0,
'#344663' Notable exports: `createContributorPortrait`.

[`src/activity-lab/contributor-portrait.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/contributor-portrait.js) · code · 2083 bytes

### contributor-profile.js

Verified against contributor records, never inferred from names or emails. Source URLs,
capture times and hashes: /activity-lab/contributors/provenance.json. Notable exports:
`contributorPortrait`.

[`src/activity-lab/contributor-profile.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/contributor-profile.js) · code · 2427 bytes

### contributor-profile.test.js

const known = { login: 'quirq-gates', avatarUrl:
'https://avatars.githubusercontent.com/u/333820652?v=4' } Automated test file.

[`src/activity-lab/contributor-profile.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/contributor-profile.test.js) · code · 3749 bytes

### contributor-screen-layout.js

const CLEARANCE_EPSILON = .001; const finite = (value, fallback) => Number.isFinite(value) ?
value : fallback; const compare = (a, b) => a b ? 1 : 0; const rectangle = value => ({ id:
value.id, x: finite(value.x, 0), y: finite(value.y, 0), width: Math.max(1,
finite(value.width, 1)), height: Math.max(1, finite(value.height, 1)), }); const overlaps =
(a, b, ga Notable exports: `placeContributorCards`.

[`src/activity-lab/contributor-screen-layout.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/contributor-screen-layout.js) · code · 10976 bytes

### contributor-screen-layout.test.js

const gap = 12; const placedCards = (cards, positions) => cards.map(card => ({ ...card,
...positions.get(card.id) })); function assertClear(cards, positions, { obstacles = [],
left, right, top, gap: requiredGap = gap } = {}) { assert.equal(positions.size,
cards.length); const placed = placedCards(cards, positions); for (const card of placed) {
assert.ok(Numb Automated test file.

[`src/activity-lab/contributor-screen-layout.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/contributor-screen-layout.test.js) · code · 14288 bytes

### examples.js

const snapshots = [xo, xoSpace]; export const DEFAULT_ACTIVITY_EXAMPLE_URL =
'https://github.com/quirq-ai/xo'; export const ACTIVITY_EXAMPLES =
Object.freeze(snapshots.map(dataset => Object.freeze({ name: dataset.repository.fullName,
fullName: dataset.repository.fullName, url: dataset.repository.url, fetchedAt:
dataset.fetchedAt, }))) Notable exports: `getActivityExample`

[`src/activity-lab/examples.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/examples.js) · code · 1018 bytes

### github.js

const API = 'https://api.github.com'; export const ACTIVITY_LIMITS = Object.freeze({
pullRequests: 20, issueListing: 50, openPullRequests: 50, openIssues: 50, comments: 30,
reviewComments: 30, forks: 20, contributors: 30, issueEvents: 50, reviewedPullRequests: 8,
reviewsPerPullRequest: 30 }); const endpoints = { pulls:
'/pulls?state=all&sort=updated&directio Notable exports: `normalizeCommunityActor`

[`src/activity-lab/github.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/github.js) · code · 22087 bytes

### model.js

export const COMMUNITY_KINDS = Object.freeze(['pull_request', 'issue', 'review', 'comment',
'fork', 'contributor']); const kindSet = new Set(COMMUNITY_KINDS); const validDate = value
=> typeof value === 'string' && Number.isFinite(Date.parse(value)); const timestamp = value
=> validDate(value) ? new Date(value).toISOString() : null; const isOpen = item => it
Notable exports: `buildCommunityModel`, `filterCommunityItems`, `COMMUNITY_KINDS`.

[`src/activity-lab/model.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/model.js) · code · 5217 bytes

### model.test.js

const url = 'https://github.com/owner/repo'; const user = login => ({ login, avatar_url:
https://avatars.githubusercontent.com/u/${login.length}, html_url:
https://github.com/${login} }); const envelope = data => ({ data, status: 200, more: false,
fetchedAt: '2026-10-19T12:00:00Z', url: 'https://api.github.com/repos/owner/repo' });
function fixture() { const Automated test file.

[`src/activity-lab/model.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/model.test.js) · code · 23507 bytes

### scene-layout.js

export const ACTIVITY_KIND_COLORS = Object.freeze({ pull_request: '#a6baf0', issue:
'#86d7ad', review: '#e5ba78', comment: '#87c8d0', fork: '#c6a5dd', contributor: '#d9dfe9',
}); export const ACTIVITY_KIND_LABELS = Object.freeze({ pull_request: 'Pull requests',
issue: 'Issues', review: 'Reviews', comment: 'Comments', fork: 'Forks', contributor:
'Contributors Notable exports: `activityHash`, `activityRadius`, `activityClusterVisible`

[`src/activity-lab/scene-layout.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/scene-layout.js) · code · 13868 bytes

### scene-layout.test.js

const items = [ { id: 'person:a', kind: 'contributor', actor: { login: 'alice' } }, { id:
'issue:1', kind: 'issue', actor: { login: 'alice' } }, { id: 'review:2', kind: 'review',
actor: { login: 'other' }, parentId: 'pr:2' }, { id: 'pr:2', kind: 'pull_request', actor: {
login: 'alice' } }, { id: 'comment:3', kind: 'comment', actor: null, parentId: 'missing'
Automated test file.

[`src/activity-lab/scene-layout.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/scene-layout.test.js) · code · 12827 bytes

### scene.js

export { ACTIVITY_KIND_COLORS, ACTIVITY_KIND_LABELS } from './scene-layout.js'; const UP =
new THREE.Vector3(0, 1, 0); const GOLD = new THREE.Color('#ffcd87'); const WHITE = new
THREE.Color('#edf3ff'); const easing = value => value * value * (3 - 2 * value); const vec =
value => new THREE.Vector3(...value); const clamp = (value, min, max) => Math.max(min, Ma
Notable exports: `ActivityScene`, `ACTIVITY_KIND_COLORS`, `ACTIVITY_KIND_LABELS`.

[`src/activity-lab/scene.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/scene.js) · code · 56719 bytes

### style.css

Activity is a native Observatory scene. Its HUD follows Data Lab's primitives. Leading class
selectors include `activity-sheet-close`, `activity-kind-key`, `activity-history-controls`,
`activity-history-toggle`, `activity-fields`, `activity-filter-footer`, `activity-text-
button`, `activity-guide-actions`, and 20 more. Defines or consumes CSS custom properties
(design tokens).

[`src/activity-lab/style.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/activity-lab/style.css) · code · 14586 bytes

_Generated 2026-10-23 10:36 UTC from `quirq`._
