<!-- quirq-wiki-generated repo=innernet dir=film/scripts -->

# innernet / film/scripts

Source: [film/scripts](https://github.com/quirq-ai/innernet/tree/main/film/scripts) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### deliver.mjs

Delivers a rendered film to the Innernet field guide: node scripts/deliver.mjs
renders/innernet-explainer.mp4 [posterSeconds] From the delivery-quality master it makes the
web copy (H.264 CRF 24, loudness normalised to -16 LUFS / -1.5 dBTP), renders/innernet-
explainer.vtt (captions from the narration word timings, the same phrasing the film shows)
and a poster JPEG, then copies all three into the app's public/guide/ (the repo root) as

[`film/scripts/deliver.mjs`](https://github.com/quirq-ai/innernet/blob/main/film/scripts/deliver.mjs) · code · 3371 bytes

### eleven.mjs

Small ElevenLabs client for this film. Reads ELEVENLABS_API_KEY from .env and never prints
it. node scripts/eleven.mjs voices list voices (name, labels, id) node scripts/eleven.mjs
tts <voiceId> <text|@file> <out.mp3> [timestamps.json] node scripts/eleven.mjs music
"<prompt>" <seconds> <out.mp3> node scripts/eleven.mjs sfx "<prompt>" <seconds> <out.mp3>
Notable exports: `tts`, `VOICE_SETTINGS`.

[`film/scripts/eleven.mjs`](https://github.com/quirq-ai/innernet/blob/main/film/scripts/eleven.mjs) · code · 4059 bytes

### finish.sh

Rebuild the film, carve the music bed under the narration, and lint. The carve writes onto
the bed in index.html, so it runs after every build. Shebang `#!/usr/bin/env bash`. Fails
fast (`set -e`).

[`film/scripts/finish.sh`](https://github.com/quirq-ai/innernet/blob/main/film/scripts/finish.sh) · code · 354 bytes

### frame.mjs

Screenshot a built page at given times, in parallel, without HyperFrames: node
scripts/frame.mjs <page.html> <t1,t2,...> [outDir] [--sheet sheet.png] The page's runtime
seeks to ?t= once fonts are ready. Prints the PNG paths. With --sheet, also tiles the frames
into one contact sheet (needs ffmpeg).

[`film/scripts/frame.mjs`](https://github.com/quirq-ai/innernet/blob/main/film/scripts/frame.mjs) · code · 2965 bytes

### plate-preview.mjs

Preview a plate the way the film and the guide colour it: ink on paper and paper on night,
accent in link blue, plus a mid-draw state (construction and main layers only). node
scripts/plate-preview.mjs <id> [out.png] Writes a 1600x2000 PNG (paper on top, night below)
and prints its path.

[`film/scripts/plate-preview.mjs`](https://github.com/quirq-ai/innernet/blob/main/film/scripts/plate-preview.mjs) · code · 2567 bytes

### set-elevenlabs-key.sh

Asks for the ElevenLabs API key without echoing it, saves it to .env (gitignored, readable
only by you), and checks it against ElevenLabs. The key is never printed. Shebang
`#!/usr/bin/env bash`. Fails fast (`set -e`).

[`film/scripts/set-elevenlabs-key.sh`](https://github.com/quirq-ai/innernet/blob/main/film/scripts/set-elevenlabs-key.sh) · code · 1114 bytes

### sheet.mjs

Writes storyboard.html: the sketch sheet reviewed before the build. One static 1920x1080 SVG
per frame (real copy, real fonts, real folder names; plain line stand-ins where the engraved
plates will go), plus a seam map and a tokens cell. Opens from file://. node
scripts/sheet.mjs.

[`film/scripts/sheet.mjs`](https://github.com/quirq-ai/innernet/blob/main/film/scripts/sheet.mjs) · code · 40044 bytes

### stt-check.mjs

Hears the narration back: transcribes every line with ElevenLabs speech-to-text and lists
the words the transcript disagrees with, which is where Lily mispronounced or slurred
something. A reviewer that cannot listen can still read this. node scripts/stt-check.mjs all
lines node scripts/stt-check.mjs 05 13 only these.

[`film/scripts/stt-check.mjs`](https://github.com/quirq-ai/innernet/blob/main/film/scripts/stt-check.mjs) · code · 2894 bytes

### voice.mjs

Renders the narration with ElevenLabs (Lily), one file per frame, with word timings. node
scripts/voice.mjs all lines whose text changed since the last run node scripts/voice.mjs 05
07 only these frames Writes assets/audio/vo/<id>.mp3 and assets/audio/vo/meta.json: { [id]:
{ text, file, duration, words: [{ text, start, end }] } }.

[`film/scripts/voice.mjs`](https://github.com/quirq-ai/innernet/blob/main/film/scripts/voice.mjs) · code · 3426 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
