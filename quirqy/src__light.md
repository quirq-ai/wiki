<!-- quirq-wiki-generated repo=quirqy dir=src/light -->

# quirqy / src/light

Source: [src/light](https://github.com/quirq-ai/quirqy/tree/quirq/src/light) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### lightlab.js

Light Lab scene: a geometric-optics bench with live multi-wavelength ray tracing. 1 scene
unit = 1 mm. Working plane is XY (y up); rays are drawn slightly stacked in Z by wavelength
so a spectrum reads as a ribbon. Notable exports: `LightLab`.

[`src/light/lightlab.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/light/lightlab.js) · code · 17880 bytes

### optics.js

Geometric optics: Snell's law, Fresnel reflectance, Cauchy dispersion, and a multi-bounce
ray tracer over plane / spherical surfaces. Units: millimeters for bench geometry (1 scene
unit = 1 mm), nanometers for wavelength, dimensionless refractive index. Speed of light kept
in mm/ns so optical path length converts cleanly to time of flight.

[`src/light/optics.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/light/optics.js) · code · 13642 bytes

### presets.js

Curated optical-bench presets for the Light Lab. Geometry is in millimeters; the scene maps
1 unit = 1 mm. Surfaces use Cauchy materials from optics.js. Notable exports: `getPreset`,
`PRESETS`.

[`src/light/presets.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/light/presets.js) · code · 17445 bytes

_Generated 2026-10-25 10:15 UTC from `quirq`._
