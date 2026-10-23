<!-- quirq-wiki-generated repo=quirqy dir=src/gravity -->

# quirqy / src/gravity

Source: [src/gravity](https://github.com/quirq-ai/quirqy/tree/quirq/src/gravity) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### grav.js

Gravity Lab physics: N-body leapfrog for massive bodies + massless tracers, orbital-element
analysis, tunable central-force exponent, and pedagogical quantum-gravity effective models
(see quantum.js). Units: kilometers, kilograms, seconds (same as the solar N-body lab).
Scene conversion happens only at the render boundary. Orbital elements from the specific
angular momentum and eccentricity vectors (Battin / Vallado style).

[`src/gravity/grav.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/gravity/grav.js) · code · 13364 bytes

### gravitylab.js

Gravity Lab scene: cinematic potential well, glowing tracers, atmospheric primaries, polar
guides and additive trails. Physics stays in km; sceneScale maps to units. Orbits live in
the horizontal XZ plane. Notable exports: `GravityLab`.

[`src/gravity/gravitylab.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/gravity/gravitylab.js) · code · 22486 bytes

### presets.js

Gravity Lab presets. Positions/velocities in km and km/s; masses in kg. Each preset returns
{ bodies, G, exponent, sceneScale, speedMul, camera, well, params }. Notable exports:
`getPreset`, `presetsByFamily`, `PRESETS`.

[`src/gravity/presets.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/gravity/presets.js) · code · 31112 bytes

### quantum.js

Pedagogical quantum-gravity effective models for the Gravity Lab. Teaching toys inspired by
research programs (LQG bounce, asymptotic safety, massive graviton, spacetime foam, Hawking
evaporation, Schrödinger-Newton). Not solutions of a full quantum gravity theory. Notable
exports: `runningGAt`, `qgAccelFromTo`, `qgAccelAt`, `qgPotentialAt`, `hawkingMassRate`,
`foamKick`, `quantumPressureAccel`, `packetCom`, and 2 more.

[`src/gravity/quantum.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/gravity/quantum.js) · code · 7477 bytes

_Generated 2026-10-23 10:36 UTC from `quirq`._
