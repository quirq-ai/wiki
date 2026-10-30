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

export declare const CACHE_DIR: string; export declare const POSTS_DIR: string; export
declare const UPLOADS_DIR: string; export declare const DEFAULT_ROOTS: string[].

[`research/engine.d.mts`](https://github.com/quirq-ai/instants/blob/main/research/engine.d.mts) · code · 1161 bytes

### engine.mjs

Recall engine: scan roots, collect material, generate posts with Claude, copy media, and
write ResearchRecord JSON to .research-cache/posts. Notable exports: `scanRoots`,
`cachedScan`, `resolveWatchedTarget`, `runGeneration`, `ingestUpload`, `deleteRecord`,
`CACHE_DIR`, `POSTS_DIR`, and 3 more.

[`research/engine.mjs`](https://github.com/quirq-ai/instants/blob/main/research/engine.mjs) · code · 15511 bytes

### generate.mjs

Generation: the GeneratedPost JSON Schema, the prompt, the two Claude backends (Messages API
or local claude CLI) and output validation/repair. Notable exports: `buildPrompt`,
`stripDashes`, `validatePost`, `generatePost`, `PROMPT_VERSION`, `TOPICS`, `POST_SCHEMA`,
`SYSTEM`.

[`research/generate.mjs`](https://github.com/quirq-ai/instants/blob/main/research/generate.mjs) · code · 28510 bytes

### media.mjs

Media: pick real images (and SVG diagrams) from a research folder and copy them, downscaled,
into public/research/media/<slug>/. Notable exports: `pickMedia`, `copyMedia`.

[`research/media.mjs`](https://github.com/quirq-ai/instants/blob/main/research/media.mjs) · code · 4781 bytes

### pipeline.mjs

Back-compat entry: the generator now lives in engine.mjs (plus collect, media and generate
modules).

[`research/pipeline.mjs`](https://github.com/quirq-ai/instants/blob/main/research/pipeline.mjs) · code · 137 bytes

### video.d.mts

export type VideoAspect = NonNullable; export declare const VIDEOS_CACHE: string; export
declare const VIDEOS_PUBLIC: string; export declare const VIDEO_TIMEOUT: number; export
declare const ASPECTS: Record; export declare function statusFile(slug: string): string;
export declare function readVideoStatus(slug: string): Promise; export declare function
delete Notable exports: `VideoAspect`.

[`research/video.d.mts`](https://github.com/quirq-ai/instants/blob/main/research/video.d.mts) · code · 986 bytes

### video.mjs

Video: turn one Recall post into an MP4 by running the HyperFrames skill in an unattended
local `claude` agent scoped to .research-cache/videos/<slug>/. Status lives in .research-
cache/videos/<slug>/status.json; the finished file is copied to
public/research/videos/<slug>.mp4 (+ .jpg poster).

[`research/video.mjs`](https://github.com/quirq-ai/instants/blob/main/research/video.mjs) · code · 18148 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
