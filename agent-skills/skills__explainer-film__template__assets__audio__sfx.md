<!-- quirq-wiki-generated repo=agent-skills dir=skills/explainer-film/template/assets/audio/sfx -->

# agent-skills / skills/explainer-film/template/assets/audio/sfx

Source: [skills/explainer-film/template/assets/audio/sfx](https://github.com/quirq-ai/agent-skills/tree/main/skills/explainer-film/template/assets/audio/sfx) in [agent-skills](https://github.com/quirq-ai/agent-skills).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### sfx.mjs

Sound marks for the film. None ship with the skill: each film generates its own with the
user's ElevenLabs key (eight calls, one take per mark), then checks and retunes them. node
assets/audio/sfx/sfx.mjs generate [name ...] render takes into sfx/takes/ (ElevenLabs, costs
credits; TAKES=n env) node assets/audio/sfx/sfx.mjs build cut the picked take of each mark
into sfx/<name>.mp3 A take that sounds wrong: generate it again (TAKES=3 node .

[`skills/explainer-film/template/assets/audio/sfx/sfx.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/assets/audio/sfx/sfx.mjs) · code · 8535 bytes

_Generated 2026-10-09 12:09 UTC from `main`._
