<!-- quirq-wiki-generated repo=agent-skills dir=skills/explainer-film/template -->

# agent-skills / skills/explainer-film/template

Source: [skills/explainer-film/template](https://github.com/quirq-ai/agent-skills/tree/main/skills/explainer-film/template) in [agent-skills](https://github.com/quirq-ai/agent-skills).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 14 pattern(s)
including `node_modules/`, `.env`, `.env.*`, `renders/`, `previews/`, `.hyperframes/`,
`assets/fonts/`, `assets/audio/sfx/takes/`, and 6 more. Generated and secret files matching
these patterns are not in the clone the wiki summarizes.

[`skills/explainer-film/template/.gitignore`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/.gitignore) · other · 209 bytes

### AGENTS.md

The agent/workspace instructions (“Agent notes for this film”). This film is built with the
explainer-film skill. Its scene contract is src/ENGINE.md; its facts are FACTS.md.
Everything below is HyperFrames' own project guidance (from hyperframes init), kept because
the engine writes a HyperFrames composition.

[`skills/explainer-film/template/AGENTS.md`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/AGENTS.md) · code · 4346 bytes

### BRIEF.md

Markdown page “Intent”. User direction, verbatim: "".

[`skills/explainer-film/template/BRIEF.md`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/BRIEF.md) · code · 1321 bytes

### FACTS.md

Markdown page “<Product>: the facts”. The single source of truth for the narrator, the
plates and every on-screen label. Every claim here was checked against the code, the docs or
the live product on . Each fact names where it was checked (path:line, a command and its
output, a URL). When this file and a README disagree, this file follows the code.

[`skills/explainer-film/template/FACTS.md`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/FACTS.md) · code · 750 bytes

### README.md

The project README (“Explainer film”). A narrated explainer built as one HyperFrames
composition in an engraved-plate style, from the explainer-film skill. Read src/ENGINE.md
before writing a scene.

[`skills/explainer-film/template/README.md`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/README.md) · code · 2182 bytes

### STORYBOARD.md

Markdown page “<PRODUCT> · A field guide in plates”. Message.

[`skills/explainer-film/template/STORYBOARD.md`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/STORYBOARD.md) · code · 973 bytes

### hyperframes.json

JSON document `hyperframes.json` whose top-level keys are `$schema`, `paths`, `media`,
`authoringSkill`. Looks like a route or path table.

[`skills/explainer-film/template/hyperframes.json`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/hyperframes.json) · code · 268 bytes

### meta.json

JSON document `meta.json` whose top-level keys are `id`, `name`. Structured data consumed by
the surrounding app or tooling.

[`skills/explainer-film/template/meta.json`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/meta.json) · code · 57 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 65.0 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`skills/explainer-film/template/package-lock.json`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/package-lock.json) · lockfile · 66540 bytes

### package.json

npm package manifest for `explainer-film`. Scripts: `postinstall`, `build`, `dev`, `lint`,
`check`, `render`.

[`skills/explainer-film/template/package.json`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/package.json) · code · 781 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
