<!-- quirq-wiki-generated repo=quirq_ai dir=app/scenes -->

# quirq_ai / app/scenes

Source: [app/scenes](https://github.com/quirq-ai/quirq_ai/tree/main/app/scenes) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### page.tsx

export const metadata: Metadata = { title: "Scenes", description: "How to customize and
create scenes: the four parts of the shot, the fourteen knobs you may turn, why the camera
never moves, and the pose presets to compose from.", } Notable exports: `Page`, `metadata`.

[`app/scenes/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/scenes/page.tsx) · code · 976 bytes

### story.ts

/** * The scene-customization guide, as story data. Facts here mirror the code: * camera at
[0,0,9] fov 38 in stage/scene.tsx, poses and optics from * choreo-tree.ts, brightness
presets from lib/lighting.ts. */ export const STORY: BeatData[] = [ { index: 0, id: "scenes-
hero", layout: "center", title: ["The scene is", "yours to stage."], glass: 1, lede: "Ever
Notable exports: `STORY`.

[`app/scenes/story.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/scenes/story.ts) · code · 4774 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
