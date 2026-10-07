<!-- quirq-wiki-generated repo=agent-skills dir=skills/explainer-film/template/scripts -->

# agent-skills / skills/explainer-film/template/scripts

Source: [skills/explainer-film/template/scripts](https://github.com/quirq-ai/agent-skills/tree/main/skills/explainer-film/template/scripts) in [agent-skills](https://github.com/quirq-ai/agent-skills).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capture.mjs

Captures a real product screen for assets/captures/ with the same headless Chrome the frame
scripts use. Run the product first (from a scratch copy if its repo must stay untouched: git
archive HEAD | tar -x -C <dir>). node scripts/capture.mjs <url> <name> [--size 1600x1000]
[--scale 2] [--wait 4000] [--dark] Writes assets/captures/<name>@2x.png at the given scale
(3200 px wide by default) and a 1x copy, <name>.png.

[`skills/explainer-film/template/scripts/capture.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/capture.mjs) · code · 2889 bytes

### chrome.mjs

Finds a headless Chrome for the screenshot scripts: $CHROME if set, else the newest
Playwright build in $PLAYWRIGHT_BROWSERS_PATH, ~/Library/Caches/ms-playwright (macOS) or
~/.cache/ms-playwright (Linux), else Chrome or Chromium on the PATH. Notable exports:
`chrome`, `chromeFlags`.

[`skills/explainer-film/template/scripts/chrome.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/chrome.mjs) · code · 1999 bytes

### contact.mjs

A contact sheet of a rendered film: one frame every few seconds, tiled three across, so you
(or a reviewer that cannot watch video) can look at the whole film at once. node
scripts/contact.mjs <film.mp4> [out.png] [--every 5] Writes .hyperframes/contact.png by
default and prints its path. Read it before calling the film done.

[`skills/explainer-film/template/scripts/contact.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/contact.mjs) · code · 1747 bytes

### deliver.mjs

Delivers a rendered film for the web: node scripts/deliver.mjs <render.mp4> [--poster
seconds] [--to folder] From the delivery-quality master it makes the web copy (H.264 CRF 24,
loudness normalised to -16 LUFS / -1.5 dBTP), WebVTT captions (from the narration word
timings, the same phrasing the film shows) and a poster JPEG, all named after BRAND.slug in
src/film.mjs, in renders/.

[`skills/explainer-film/template/scripts/deliver.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/deliver.mjs) · code · 3793 bytes

### eleven.mjs

Small ElevenLabs client for the film. Reads ELEVENLABS_API_KEY from the environment or .env
and never prints it. node scripts/eleven.mjs voices list voices (name, labels, id) node
scripts/eleven.mjs tts <voiceId> <text|@file> <out.mp3> [timestamps.json] node
scripts/eleven.mjs music "<prompt>" <seconds> <out.mp3> node scripts/eleven.mjs sfx
"<prompt>" <seconds> <out.mp3> Notable exports: `tts`, `VOICE_SETTINGS`.

[`skills/explainer-film/template/scripts/eleven.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/eleven.mjs) · code · 4138 bytes

### finish.sh

Rebuild the film and lint it. The music bed needs no carve here: bed.mjs bakes its own duck
under the voice. HyperFrames telemetry stays off. Shebang `#!/usr/bin/env bash`. Fails fast
(`set -e`).

[`skills/explainer-film/template/scripts/finish.sh`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/finish.sh) · code · 298 bytes

### frame.mjs

Screenshot a built page at given times, in parallel, without HyperFrames: node
scripts/frame.mjs <page.html> <t1,t2,...> [outDir] [--sheet sheet.png] The page's runtime
seeks to ?t= once fonts are ready. Prints the PNG paths. With --sheet, also tiles the frames
into one contact sheet (needs ffmpeg).

[`skills/explainer-film/template/scripts/frame.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/frame.mjs) · code · 3191 bytes

### plate-preview.mjs

Preview a plate the way the film colours it: the theme's day and night palettes, its fonts
and its accent. node scripts/plate-preview.mjs <id> [out.png] Writes a 1600x2000 PNG (day
palette on top, night below) and prints its path.

[`skills/explainer-film/template/scripts/plate-preview.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/plate-preview.mjs) · code · 2628 bytes

### set-elevenlabs-key.sh

Asks for the ElevenLabs API key without echoing it, saves it to .env (gitignored, readable
only by you), and checks it against ElevenLabs. The key is never printed. Shebang
`#!/usr/bin/env bash`. Fails fast (`set -e`).

[`skills/explainer-film/template/scripts/set-elevenlabs-key.sh`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/set-elevenlabs-key.sh) · code · 1210 bytes

### setup.mjs

Copies what the film loads from disk out of node_modules: the fonts (Latin subset, from the
@fontsource packages, under the names src/build.mjs uses) into assets/fonts, and GSAP into
assets/vendor, so renders never depend on a CDN. It also draws the film grain texture
(assets/tex/grain.png, random noise) with ffmpeg. Runs on npm install. The fonts are SIL
Open Font License; each package's LICENSE travels with it in node_modules.

[`skills/explainer-film/template/scripts/setup.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/setup.mjs) · code · 3036 bytes

### stt-check.mjs

Hears the narration back: transcribes every line with ElevenLabs speech-to-text and lists
the words the transcript disagrees with, which is where the voice mispronounced or slurred
something. A reviewer that cannot listen can still read this. node scripts/stt-check.mjs all
lines node scripts/stt-check.mjs 05 13 only these.

[`skills/explainer-film/template/scripts/stt-check.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/stt-check.mjs) · code · 4680 bytes

### voice.mjs

Renders the narration with ElevenLabs (VOICE in src/script.mjs), one file per frame, with
word timings. node scripts/voice.mjs all lines whose text changed since the last run node
scripts/voice.mjs 05 07 only these frames Writes assets/audio/vo/<id>.mp3 and
assets/audio/vo/meta.json: { [id]: { text, file, duration, words: [{ text, start, end }] }
}.

[`skills/explainer-film/template/scripts/voice.mjs`](https://github.com/quirq-ai/agent-skills/blob/main/skills/explainer-film/template/scripts/voice.mjs) · code · 3445 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
