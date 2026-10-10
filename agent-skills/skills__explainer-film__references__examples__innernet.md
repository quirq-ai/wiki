<!-- quirq-wiki-generated repo=agent-skills dir=skills/explainer-film/references/examples/innernet -->

# agent-skills / skills/explainer-film/references/examples/innernet

Source: [skills/explainer-film/references/examples/innernet](https://github.com/quirq-ai/agent-skills/tree/main/skills/explainer-film/references/examples/innernet) in [agent-skills](https://github.com/quirq-ai/agent-skills).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### BRIEF.md

Markdown page “Intent”. The explainer film for Innernet, embedded at the top of the in-app
field guide (/guide). Three chapters, about 40 seconds each: how it works (crawl, index, the
two readers: search and Innerpedia), how to add a site (what each ingredient of a folder
becomes on its page, the five steps, new roots), and how to contribute (the codebase map,
the loop, the conventions). A visual walkthrough, engaging.

[`skills/explainer-film/references/examples/innernet/BRIEF.md`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/innernet/BRIEF.md) · code · 2822 bytes

### README.md

The project README (“The reference film: Innernet field guide”). A 2:49 explainer for
Innernet (a personal search engine and encyclopedia of the folders on one machine), narrated
by Lily. Its full source is film/ in quirq-ai/innernet; these are copies of the parts most
worth reading before writing a film of your own.

[`skills/explainer-film/references/examples/innernet/README.md`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/innernet/README.md) · code · 1355 bytes

### STORYBOARD.md

Markdown page “INNERNET · A field guide in plates”. Message. Your folders are already a web.
Innernet lets you search it and read it, any folder can become a good site, and the code is
small enough for anyone to help.

[`skills/explainer-film/references/examples/innernet/STORYBOARD.md`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/innernet/STORYBOARD.md) · code · 16763 bytes

### film.mjs

Film data and timing. Scene length comes from the real narration (assets/audio/vo/
meta.json): a short lead-in, the line, a breath. Chapter cards are silent. Notable exports:
`timing`, `W`, `H`, `CHAPTERS`, `FRAMES`, `CARD_DUR`.

[`skills/explainer-film/references/examples/innernet/film.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/innernet/film.mjs) · code · 4288 bytes

### music-plan.mjs

The music plan of the Innernet field guide film (2:49), kept as a worked example of
src/music.mjs: a dawn open, a swell into each chapter card, an intimate close-in for the
privacy beat (F07), a dusk into the night chapter (III), and dawn at the close. It was
rendered by ElevenLabs music_v2_5 in one composition and fitted to the film with bed.mjs.
Frame ids refer to that film: 03, 11 and 17 are its chapter cards, 21 its close.

[`skills/explainer-film/references/examples/innernet/music-plan.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/innernet/music-plan.mjs) · code · 5227 bytes

### script.mjs

The narration, one line per frame (chapter cards are silent). Every claim here is checked
against FACTS.md. Lily (ElevenLabs) reads it; scripts/voice.mjs renders it. Notable exports:
`VOICE`, `SAY`, `spoken`, `LINES`.

[`skills/explainer-film/references/examples/innernet/script.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/references/examples/innernet/script.mjs) · code · 2854 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
