<!-- quirq-wiki-generated repo=euler dir=app/innernet/film -->

# euler / app/innernet/film

Source: [app/innernet/film](https://github.com/quirq-ai/euler/tree/main/app/innernet/film) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 8 pattern(s)
including `.env`, `.env.*`, `node_modules`, `renders/`, `.media/cache/`, `.hyperframes/`,
`previews/`, `index.html`. Generated and secret files matching these patterns are not in the
clone the wiki summarizes.

[`app/innernet/film/.gitignore`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/.gitignore) · other · 83 bytes

### AGENTS.md

The agent/workspace instructions (“HyperFrames Composition Project”). Always invoke the
relevant skill before writing or modifying compositions. Skills encode framework-specific
patterns (e.g., window.__timelines registration, data-* attribute semantics, shader-
compatible CSS rules) that are NOT in generic web docs. Skipping them produces broken
compositions.

[`app/innernet/film/AGENTS.md`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/AGENTS.md) · code · 8390 bytes

### BRIEF.md

Markdown page “Intent”. The explainer film for Innernet, embedded at the top of the in-app
field guide (/guide). Three chapters, about 40 seconds each: how it works (crawl, index, the
two readers: search and Innerpedia), how to add a site (what each ingredient of a folder
becomes on its page, the five steps, new roots), and how to contribute (the codebase map,
the loop, the conventions). A visual walkthrough, engaging.

[`app/innernet/film/BRIEF.md`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/BRIEF.md) · code · 2822 bytes

### CLAUDE.md

The Claude Code instructions (“HyperFrames Composition Project”). Always invoke the relevant
skill before writing or modifying compositions. Skills encode framework-specific patterns
(e.g., window.__timelines registration, data-* attribute semantics, shader-compatible CSS
rules) that are NOT in generic web docs. Skipping them produces broken compositions.

[`app/innernet/film/CLAUDE.md`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/CLAUDE.md) · code · 8390 bytes

### FACTS.md

Markdown page “Innernet: the facts”. The single source of truth for the film narrator, the
guide page builder and the diagram designer. Every claim here was checked against the code
or the live index on 2 October 2026. Paths are relative to experiments/innernet. B =
scripts/build-index.ts, N = lib/normalize.ts, T = lib/text.ts, S = lib/search.ts, D =
lib/data.ts. When this file and DESIGN.md or README.md disagree, this file follows the code.

[`app/innernet/film/FACTS.md`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/FACTS.md) · code · 38497 bytes

### README.md

The project README (“The Innernet field guide film”). A 2:49 explainer for Innernet,
narrated by Lily (ElevenLabs), built as one HyperFrames composition in an engraved-plate
style. It plays at the top of the in-app field guide (/guide) of the Innernet app at the
repo root.

[`app/innernet/film/README.md`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/README.md) · code · 1867 bytes

### STORYBOARD.md

Markdown page “INNERNET · A field guide in plates”. Message. Your folders are already a web.
Innernet lets you search it and read it, any folder can become a good site, and the code is
small enough for anyone to help.

[`app/innernet/film/STORYBOARD.md`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/STORYBOARD.md) · code · 16763 bytes

### hyperframes.json

JSON document `hyperframes.json` whose top-level keys are `$schema`, `registry`, `paths`,
`media`, `authoringSkill`. Looks like a route or path table.

[`app/innernet/film/hyperframes.json`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/hyperframes.json) · code · 355 bytes

### meta.json

JSON document `meta.json` whose top-level keys are `id`, `name`, `createdAt`. Structured
data consumed by the surrounding app or tooling.

[`app/innernet/film/meta.json`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/meta.json) · code · 109 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 55.5 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`app/innernet/film/package-lock.json`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/package-lock.json) · lockfile · 56824 bytes

### package.json

npm package manifest for `innernet-guide-film`. Scripts: `dev`, `check`, `render`,
`publish`.

[`app/innernet/film/package.json`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/package.json) · code · 372 bytes

### storyboard-v2.png

Binary PNG asset (2.8 MB). Left unsummarized; open the file in the source repository if you
need the actual bytes. Wiki pages do not copy images, fonts, archives, or other generated
blobs.

[`app/innernet/film/storyboard-v2.png`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/storyboard-v2.png) · binary · 2912110 bytes

### storyboard.html

HTML document `storyboard.html` titled “Innernet field guide film · storyboard v2”. Innernet
field guide film · storyboard v2.

[`app/innernet/film/storyboard.html`](https://github.com/quirq-ai/euler/blob/main/app/innernet/film/storyboard.html) · code · 154116 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
