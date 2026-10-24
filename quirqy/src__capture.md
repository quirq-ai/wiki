<!-- quirq-wiki-generated repo=quirqy dir=src/capture -->

# quirqy / src/capture

Source: [src/capture](https://github.com/quirq-ai/quirqy/tree/quirq/src/capture) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### datatrace.js

Per-point data trace during recording, with expected vs actual summaries. Notable exports:
`createDataTrace`, `hudFromSnapshot`.

[`src/capture/datatrace.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/capture/datatrace.js) · code · 6176 bytes

### overlay.js

Composite frame painter: WebGL view + Quirq logo + live equation / lab HUD. Notable exports:
`createOverlayPainter`.

[`src/capture/overlay.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/capture/overlay.js) · code · 7603 bytes

### recorder.js

Canvas video capture with Quirq/logo HUD overlay and per-point data traces. Hard-capped at
10 seconds. On stop: downloads video + JSON/CSV traces and returns a report for the results
panel (expected vs actual). Notable exports: `createRecorder`, `RECORD_MAX_MS`.

[`src/capture/recorder.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/capture/recorder.js) · code · 7397 bytes

_Generated 2026-10-24 09:54 UTC from `quirq`._
