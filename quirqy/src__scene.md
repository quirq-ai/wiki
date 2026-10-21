<!-- quirq-wiki-generated repo=quirqy dir=src/scene -->

# quirqy / src/scene

Source: [src/scene](https://github.com/quirq-ai/quirqy/tree/quirq/src/scene) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### asteroids.js

Main asteroid belt (instanced rocks on real Keplerian orbits, with Kirkwood gaps at the 3:1,
5:2 and 7:3 Jupiter resonances) plus a Kuiper belt point cloud. Notable exports:
`AsteroidBelt`, `KuiperBelt`.

[`src/scene/asteroids.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/scene/asteroids.js) · code · 6474 bytes

### bodies3d.js

Builds and animates every planet, dwarf planet and moon. Scene graph per planet: anchor
(heliocentric position) tiltGroup (axial pole orientation) mesh (spins about local Y) clouds
/ atmosphere shell / rings equatorial-frame moons (anchor + orbit line each) ecliptic-frame
moons (Earth's Moon) label, pick sphere Notable exports: `PlanetSystem`.

[`src/scene/bodies3d.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/scene/bodies3d.js) · code · 13708 bytes

### comet.js

Comet 1P/Halley: real orbit (e = 0.967, retrograde), a coma and a two-part tail (straight
blue ion tail, curved warm dust tail) that grow near perihelion. Notable exports: `Comet`.

[`src/scene/comet.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/scene/comet.js) · code · 8087 bytes

### materials.js

Custom shader materials. All custom shaders include the logdepthbuf chunks because the
renderer runs with a logarithmic depth buffer (the scene spans from sub-unit planet surfaces
to a starfield millions of units away). Notable exports: `makeEarthMaterial`,
`makeAtmosphereMaterial`, `makeRingMaterial`, `makeSunMaterial`.

[`src/scene/materials.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/scene/materials.js) · code · 9699 bytes

### render-on-demand.js

Render on demand: the repository labs only redraw while something can change. A frame is
drawn while the lab reports it is busy (playback), for a grace period after any invalidation
(input, camera movement, data or view changes, late texture loads), and otherwise at most
once per keep-alive interval as a safety net for an update that forgot to invalidate.

[`src/scene/render-on-demand.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/scene/render-on-demand.js) · code · 2591 bytes

### render-on-demand.test.js

function clock(start = 0) { let time = start; return { now: () => time, advance: ms => {
time += ms; return time; } }; } Automated test file.

[`src/scene/render-on-demand.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/scene/render-on-demand.test.js) · code · 4661 bytes

### setup.js

Renderer, camera, post-processing chain, starfield and base lighting. Notable exports:
`createStage`, `softDotTexture`, `createEclipticGrid`.

[`src/scene/setup.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/scene/setup.js) · code · 3711 bytes

### sun.js

The Sun: animated shader photosphere, layered corona sprites and a lens flare. Notable
exports: `poleVector`, `Sun`.

[`src/scene/sun.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/scene/sun.js) · code · 4487 bytes

### trails.js

Fading motion trails for experiment mode, so orbital divergence from the real ephemeris
(spirals, escapes, captures) is visible at a glance. Notable exports: `TrailSystem`.

[`src/scene/trails.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/scene/trails.js) · code · 3006 bytes

_Generated 2026-10-21 10:42 UTC from `quirq`._
