<!-- quirq-wiki-generated repo=quirqy dir=src/fractal -->

# quirqy / src/fractal

Source: [src/fractal](https://github.com/quirq-ai/quirqy/tree/quirq/src/fractal) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### fractallab.js

Fractals Lab: immersive fullscreen explorer. Escape + ray families are NDC-filling GPU
shaders; IFS is a dense additive particle cloud in a void stage. No billboards, no floor
props. Notable exports: `FractalLab`.

[`src/fractal/fractallab.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/fractal/fractallab.js) · code · 22540 bytes

### fractals.js

CPU probe + analysis helpers for escape-time and IFS fractals. Notable exports:
`escapeProbe`, `fmtComplex`.

[`src/fractal/fractals.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/fractal/fractals.js) · code · 2351 bytes

### ifs.js

Dense IFS attractors with richer color ramps for additive point clouds. Notable exports:
`generateIFS`, `IFS_DIM`.

[`src/fractal/ifs.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/fractal/ifs.js) · code · 3221 bytes

### kochDiffraction.js

Koch snowflake aperture + Fraunhofer diffraction via 2D FFT. Intensity I(fx, fy) ∝ |ℱ{A(x,
y)}|² where A is the binary aperture. Classic diffractal: self-similar rings + hexagonal
symmetry (Uozumi et al.). Notable exports: `kochSnowflakePolygon`, `rasterizeKochAperture`,
`fraunhoferIntensity`, `packDiffractionTexture`, `computeKochDiffraction`, `KOCH_DIM`.

[`src/fractal/kochDiffraction.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/fractal/kochDiffraction.js) · code · 7703 bytes

### presets.js

Curated fractal destinations: each is a shareable, tuned view. Notable exports: `getPreset`,
`PRESETS`.

[`src/fractal/presets.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/fractal/presets.js) · code · 8844 bytes

### shaders.js

Museum-grade fractal shaders: fullscreen NDC quads, IQ-style palettes, smooth potential +
exterior distance, and lit DE raymarching. Notable exports: `paletteIndex`,
`VERT_FULLSCREEN`, `FRAG_ESCAPE`, `FRAG_RAY`, `FRAG_IFS`, `FRAG_DIFFRACTION`.

[`src/fractal/shaders.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/fractal/shaders.js) · code · 16992 bytes

_Generated 2026-10-20 10:30 UTC from `quirq`._
