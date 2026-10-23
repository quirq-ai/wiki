<!-- quirq-wiki-generated repo=quirqy dir=src/sim -->

# quirqy / src/sim

Source: [src/sim](https://github.com/quirq-ai/quirqy/tree/quirq/src/sim) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### clock.js

JS Date only covers +-8.64e15 ms from epoch; clamp so a runaway fast-forward cannot turn the
readout into NaN Notable exports: `SimClock`.

[`src/sim/clock.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/sim/clock.js) · code · 1167 bytes

### constants.js

Core physical and scene-scale constants. Scene convention: 1 AU = 1000 scene units, Y axis =
ecliptic north, X axis = vernal equinox. Notable exports: `jdFromUnixMs`, `unixMsFromJd`,
`gmstDeg`, `AU_KM`, `UNITS_PER_AU`, `KM_TO_UNITS`, `J2000_JD`, `DAYS_PER_CENTURY`, and 4
more.

[`src/sim/constants.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/sim/constants.js) · code · 863 bytes

### kepler.js

Keplerian orbit propagation. Planets use JPL's approximate elements (Standish, valid 1800 to
2050 AD): each element is [value at J2000, rate per Julian century], angles in degrees, a in
AU. Moons use fixed elements relative to their parent (a in km). Notable exports:
`solveKepler`, `elementsAt`, `planeToScene`, `positionFromElements`, `moonLocalPosition`,
`orbitPathPositions`, `orbitalSpeedKms`, `moonSpeedKms`.

[`src/sim/kepler.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/sim/kepler.js) · code · 3977 bytes

### nbody.js

Direct N-body gravity integrator for experiment mode. Works in km, km/s and kg on ecliptic
scene axes. Integrates the Sun, the planets, Pluto, Ceres and Halley with a symplectic
leapfrog (kick-drift-kick) scheme, which conserves orbital energy well over long spans.
Substeps adapt down when the user cranks G or a body's mass so tight fast orbits stay
stable. Collisions merge the smaller body into the larger one, conserving momentum.

[`src/sim/nbody.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/sim/nbody.js) · code · 8307 bytes

_Generated 2026-10-23 10:36 UTC from `quirq`._
