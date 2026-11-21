<!-- quirq-wiki-generated repo=heartwood dir=src -->

# heartwood / src

Source: [src](https://github.com/quirq-ai/heartwood/tree/main/src) in [heartwood](https://github.com/quirq-ai/heartwood).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### audio.js

Audio: one context, four sources (the generative score, a song from the studio, a track of
your own, the microphone), and an analyser that turns whatever is playing into smoothed bass
/ mid / high levels, spectrum bars for the UI, and beat events. It can also record what it
plays to a file. Notable exports: `AudioEngine`.

[`src/audio.js`](https://github.com/quirq-ai/heartwood/blob/main/src/audio.js) · code · 13399 bytes

### config.js

The scene: "tree_360_8-1" by wanghongtao, published on SuperSplat under CC BY 4.0. The
splats stream straight from PlayCanvas's CDN (it allows any origin), as a level-of-detail
set: 4 levels, 5.9M splats at full detail. Notable exports: `readOverrides`, `SCENE`.

[`src/config.js`](https://github.com/quirq-ai/heartwood/blob/main/src/config.js) · code · 1933 bytes

### main.js

const params = new URLSearchParams(location.search); const scene = { ...SCENE,
...readOverrides(params) }; const debug = params.has('debug').

[`src/main.js`](https://github.com/quirq-ai/heartwood/blob/main/src/main.js) · code · 23115 bytes

### music.js

A small generative composer for the Web Audio API: three moods sharing one set of
instruments (heartbeat kick, sub bass, wide pads, FM plucks, bells, hats). Notes are
scheduled slightly ahead on the audio clock, and every musical event is also reported with
its audio time so the visuals can land exactly on it. Notable exports: `Composer`, `MOODS`.

[`src/music.js`](https://github.com/quirq-ai/heartwood/blob/main/src/music.js) · code · 20133 bytes

### orbit.js

A small orbit camera: drag to orbit, right-drag or two fingers to pan, wheel or pinch to
zoom, taps reported separately. Everything is damped, and the camera drifts around on its
own when left alone. Notable exports: `OrbitRig`.

[`src/orbit.js`](https://github.com/quirq-ai/heartwood/blob/main/src/orbit.js) · code · 14228 bytes

### pulse.js

The pulse: GPU-side splat modifiers driven by the music. Everything happens in the engine's
`gsplatModifyVS` hook, once per splat, in world space: - rings: expanding bands of light
that lift and swell the splats they pass through. Beat rings travel outward around the
trunk; tap rings are spheres from the tapped point. - sway: the canopy drifts with the mids
and breathes outward with the bass.

[`src/pulse.js`](https://github.com/quirq-ai/heartwood/blob/main/src/pulse.js) · code · 16237 bytes

### scene.js

import { AppBase, AppOptions, Asset, CameraComponentSystem, CameraFrame, Color,
DEVICETYPE_WEBGL2, DEVICETYPE_WEBGPU, Entity, FILLMODE_FILL_WINDOW, GSplatComponentSystem,
GSplatHandler, Picker, RESOLUTION_AUTO, TONEMAP_LINEAR, TextureHandler, Vec3,
createGraphicsDevice, platform } from 'playcanvas' Notable exports: `createStage`,
`loadSplat`.

[`src/scene.js`](https://github.com/quirq-ai/heartwood/blob/main/src/scene.js) · code · 7370 bytes

### sequencer.js

Plays a studio song with the composer's instruments and buses (kick with sidechain, pads, FM
plucks and bells, reverb, echo). Every note is reported with the part, step and row it came
from, so the studio can light its square and the tree can draw it. Notable exports:
`Sequencer`.

[`src/sequencer.js`](https://github.com/quirq-ai/heartwood/blob/main/src/sequencer.js) · code · 7824 bytes

### song.js

Songs for the studio. A song is one bar of 16 steps for each part, looped under a
progression of four chords, one per bar. Everything is stored relative to the key: the
melody as rows of the key's pentatonic scale, the bass as tones of the bar's chord, the
chords as scale degrees. So changing the key or a chord carries the whole song with it, and
no note can be out of key.

[`src/song.js`](https://github.com/quirq-ai/heartwood/blob/main/src/song.js) · code · 14190 bytes

### studio.js

The studio: a step sequencer for the song the tree plays. Each part is one bar of sixteen
steps, looped under four bars of chords. Tap a square to write, drag to paint, tap a part's
name to mute it, its dice for a new one. Squares light as they sound. Notable exports:
`createStudio`.

[`src/studio.js`](https://github.com/quirq-ai/heartwood/blob/main/src/studio.js) · code · 17963 bytes

### style.css

Note: wherever both are set, -webkit-backdrop-filter comes before backdrop-filter. The
build's Leading class selectors include `ic`, `ripples`, `hud`, `brand`, `brand-text`,
`wordmark`, `byline`, `beat-dot`, and 58 more. Defines or consumes CSS custom properties
(design tokens).

[`src/style.css`](https://github.com/quirq-ai/heartwood/blob/main/src/style.css) · code · 28766 bytes

### ui.js

The DOM side: intro, dock, sliders, swatches, toasts, the about card, drag and drop. Notable
exports: `createUI`.

[`src/ui.js`](https://github.com/quirq-ai/heartwood/blob/main/src/ui.js) · code · 10120 bytes

_Generated 2026-11-21 13:47 UTC from `main`._
