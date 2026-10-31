<!-- quirq-wiki-generated repo=instants dir=research -->

# instants / research

Source: [research](https://github.com/quirq-ai/instants/tree/main/research) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### collect.mjs

Collector: walk a research folder (or one file), read every format it can, and build a
numbered, citable material block for the model plus FolderMeta. Notable exports: `walk`,
`listFiles`, `isReadable`, `gitMeta`, `folderMeta`, `collect`, `run`, `SKIP_DIRS`, and 6
more.

[`research/collect.mjs`](https://github.com/quirq-ai/instants/blob/main/research/collect.mjs) · code · 24413 bytes

### engine.d.mts

export declare const CACHE_DIR: string; export declare const DEFAULT_ROOTS: string[].

[`research/engine.d.mts`](https://github.com/quirq-ai/instants/blob/main/research/engine.d.mts) · code · 1079 bytes

### engine.mjs

Instants engine: scan roots, collect material, generate posts with Claude, copy media, and
write ResearchRecord JSON into the content store (store.mjs). Notable exports: `scanRoots`,
`cachedScan`, `resolveWatchedTarget`, `runGeneration`, `ingestUpload`, `deleteRecord`,
`CACHE_DIR`, `DEFAULT_ROOTS`, and 1 more.

[`research/engine.mjs`](https://github.com/quirq-ai/instants/blob/main/research/engine.mjs) · code · 17278 bytes

### generate.mjs

Generation: the GeneratedPost JSON Schema, the prompt, the two Claude backends (Messages API
or local claude CLI) and output validation/repair. Notable exports: `buildPrompt`,
`stripDashes`, `validatePost`, `generatePost`, `PROMPT_VERSION`, `TOPICS`, `POST_SCHEMA`,
`SYSTEM`.

[`research/generate.mjs`](https://github.com/quirq-ai/instants/blob/main/research/generate.mjs) · code · 28602 bytes

### media.mjs

Media: pick real images (and SVG diagrams) from a research folder and copy them, downscaled,
into the store's media/<slug>/ (served at /research/media/<slug>/). Notable exports:
`pickMedia`, `copyMedia`.

[`research/media.mjs`](https://github.com/quirq-ai/instants/blob/main/research/media.mjs) · code · 5252 bytes

### pipeline.mjs

Back-compat entry: the generator now lives in engine.mjs (plus collect, media and generate
modules).

[`research/pipeline.mjs`](https://github.com/quirq-ai/instants/blob/main/research/pipeline.mjs) · code · 137 bytes

### store.d.mts

export type SpaceConfig = { project: string | null; autoGenerate: boolean; connectedAt?:
string }; export declare const CACHE_DIR: string; export declare const LOCAL_STORE: string;
export declare const SPACE_ROOT: string; export declare const SPACE_CONFIG: string; export
declare const VIDEOS_WORK: string; export declare const PROJECT_RE: RegExp; export decla
Notable exports: `SpaceConfig`.

[`research/store.d.mts`](https://github.com/quirq-ai/instants/blob/main/research/store.d.mts) · code · 1489 bytes

### store.mjs

The content store: one directory holding everything Instants generates and everything that
should travel with the Curie library (posts, media, videos, uploaded sources). It is the
Spacehub clone when a space is connected, else .research-cache/store. Per-user state
(activity, scan cache, video working dirs, space config) never lives here.

[`research/store.mjs`](https://github.com/quirq-ai/instants/blob/main/research/store.mjs) · code · 13148 bytes

### video.d.mts

export type VideoAspect = NonNullable; export declare const VIDEOS_CACHE: string; export
declare const VIDEO_TIMEOUT: number; export declare const ASPECTS: Record; export declare
function statusFile(slug: string): string; export declare function readVideoStatus(slug:
string): Promise; export declare function deleteVideo(slug: string): Promise; export declare
Notable exports: `VideoAspect`.

[`research/video.d.mts`](https://github.com/quirq-ai/instants/blob/main/research/video.d.mts) · code · 1048 bytes

### video.mjs

Video: turn one Instants post into an MP4 by running the HyperFrames skill in an unattended
local `claude` agent scoped to .research-cache/videos-work/<slug>/. Live status lives in
.research-cache/videos-work/<slug>/status.json (local); the finished file is copied to the
store's videos/<slug>.mp4 (+ .jpg poster, + .status.json with the ready result so other
machines see it).

[`research/video.mjs`](https://github.com/quirq-ai/instants/blob/main/research/video.mjs) · code · 20845 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
