<!-- quirq-wiki-generated repo=agent-skills dir=skills/explainer-film/references/examples/quirq-infra -->

# agent-skills / skills/explainer-film/references/examples/quirq-infra

Source: [skills/explainer-film/references/examples/quirq-infra](https://github.com/quirq-ai/agent-skills/tree/main/skills/explainer-film/references/examples/quirq-infra) in [agent-skills](https://github.com/quirq-ai/agent-skills).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Second reference: the quirq infra field guide”). A 3:02 explainer for
quirq infra (qq), the org's CI/CD system, made with this engine on 2026-10-05 and narrated
by Lily over an ElevenLabs bed. It is the film the quirq team asked to be made reusable.

[`skills/explainer-film/references/examples/quirq-infra/README.md`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/quirq-infra/README.md) · code · 3885 bytes

### film.css

quirq infra film. Tokens follow the xo-space quirq theme (plum-black, pink accent), sized
Leading class selectors include `layer`, `aurora`, `scene`, `scene-in`, `hud-l`, `hud-name`,
`hud-ch`, `hud-r`, and 38 more. Defines or consumes CSS custom properties (design tokens).

[`skills/explainer-film/references/examples/quirq-infra/film.css`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/quirq-infra/film.css) · code · 10027 bytes

### film.mjs

Film data and timing. Scene length comes from the real narration (assets/audio/vo/
meta.json): a short lead-in, the line, a breath. Chapter cards are silent. Notable exports:
`timing`, `W`, `H`, `CHAPTERS`, `FRAMES`, `CARD_DUR`.

[`skills/explainer-film/references/examples/quirq-infra/film.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/quirq-infra/film.mjs) · code · 3746 bytes

### plates.mjs

The engraved plates of the quirq infra film, one function per plate. Each plate is a
1700x730 line drawing that sits 1:1 in the scene area (x 110 to 1810, y 150 to 880), in the
five layers of lib.mjs (con, main, det, acc, lbl). Every name, number and schedule on a
plate is from FACTS.md. node assets/plates/src/plates.mjs writes assets/plates/<id>.svg for
every plate.

[`skills/explainer-film/references/examples/quirq-infra/plates.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/quirq-infra/plates.mjs) · code · 16077 bytes

### script.mjs

The narration, one line per frame (chapter cards are silent). Every claim here is checked
against FACTS.md. Lily (ElevenLabs) reads it; scripts/voice.mjs renders it. Notable exports:
`VOICE`, `SAY`, `spoken`, `LINES`.

[`skills/explainer-film/references/examples/quirq-infra/script.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/quirq-infra/script.mjs) · code · 3089 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
