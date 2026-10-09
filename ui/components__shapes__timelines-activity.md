<!-- quirq-wiki-generated repo=ui dir=components/shapes/timelines-activity -->

# ui / components/shapes/timelines-activity

Source: [components/shapes/timelines-activity](https://github.com/quirq-ai/ui/tree/main/components/shapes/timelines-activity) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### activity-data.ts

Demo data for the activity feed shape, derived from the shared fixtures only. Mock data:
every relative time is computed against the fixed NOW_ISO, never the wall clock. Notable
exports: `runtimeLabel`, `PROJECT_NAME`, `FEED_EVENTS`, `LIVE_SESSIONS`, `SECTIONS_PROJECT`,
`SECTION_SESSIONS`, `SECTION_STATS`, `SECTION_STEPS`, and 6 more.

[`components/shapes/timelines-activity/activity-data.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/activity-data.ts) · code · 8961 bytes

### activity-feed-demo.tsx

Live demo for the activity feed shape: the space activity view with filters, refresh and
cursor pagination, the open sessions disclosure in every state, feed states, the XO Swarm
project sections, the visualizer drawer event lists and the signals panel. Notable exports:
`ActivityFeedDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/timelines-activity/activity-feed-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/activity-feed-demo.tsx) · code · 14562 bytes

### activity-feed.tsx

Activity feed (XO Space "Activity" view): a newest-first event list in a soft card. Rows are
a dot | body | time grid; under a narrow container the time moves under the body. Server-
safe and prop-driven: pass events, status and the optional callbacks from a client parent
(project links, load older events).

[`components/shapes/timelines-activity/activity-feed.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/activity-feed.tsx) · code · 11135 bytes

### event-list.tsx

Icon event list (projects visualizer drawer): a labelled section with rows of a 28px icon
tile, a bold one-line title and a "runtime · 12m ago" meta line. The first row has no top
border. Also the signals panel: up to three toned dots that say what needs attention.
Server-safe and prop-driven.

[`components/shapes/timelines-activity/event-list.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/event-list.tsx) · code · 5147 bytes

### index.tsx

Timelines and activity: feeds, steppers and swimlanes over time.

[`components/shapes/timelines-activity/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/index.tsx) · code · 2526 bytes

### live-sessions.tsx

Open sessions disclosure (XO Space activity view): a native <details> whose summary carries
the live count and the checking / refreshing / unavailable words. Server-safe; the browser
handles open and close, Enter and Space included. Notable exports: `LiveSessionsDisclosure`,
`LiveSession`, `LiveSessionsDisclosureProps`.

[`components/shapes/timelines-activity/live-sessions.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/live-sessions.tsx) · code · 4416 bytes

### pipeline-stepper-demo.tsx

Demo for the pipeline and stage stepper shape: deploy pipelines (landing rail, a space
starting, a space that could not start), the visualizer operating state and the XO
improvement loop. Static snapshots: steppers have no interactions. Notable exports:
`PipelineStepperDemo`.

[`components/shapes/timelines-activity/pipeline-stepper-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/pipeline-stepper-demo.tsx) · code · 11220 bytes

### pipeline-stepper.tsx

Pipeline and stage steppers. Server-safe and prop-driven. PipelineStepper: a vertical rail
of steps, as the landing deploy tile ("rail") or as an app list with detail and duration
("list"). States done, active, pending, plus failed, skipped. RailDot is the rail's status
dot alone, for legends. OperatingStateStepper: the visualizer's reached / not reached
project stages.

[`components/shapes/timelines-activity/pipeline-stepper.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/pipeline-stepper.tsx) · code · 16806 bytes

### project-sections.tsx

Project dashboard sections (XO Swarm project visualizer card): a header with refresh, then
section cards for open sessions, stats, steps and the event timeline, each with its own
empty state, plus the loading, partial error and error panels. Server-safe and prop-driven.
Notable exports: `MonoChip`, `ProjectSectionsHeader`, `ProjectSectionCard`, `SectionEmpty`,
`OpenSessionRows`, `StatTiles`, `StepGroups`, `stepSummary`, and 11 more.

[`components/shapes/timelines-activity/project-sections.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/project-sections.tsx) · code · 12537 bytes

### shared.tsx

Small server-safe pieces shared by the timelines-activity demos: mono captions, labelled
demo cells and UTC date helpers built from fixed name arrays (no Intl date data, so the
server and the browser always print the same string). Notable exports: `Caption`,
`DemoCell`, `DemoGroup`, `monthYear`, `monthTick`, `dayMonthYear`, `monthStart`,
`nextMonth`, and 1 more.

[`components/shapes/timelines-activity/shared.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/shared.tsx) · code · 3036 bytes

### swimlanes-data.ts

Demo data for the timeline swimlanes shape. Derived from the shared fixtures (projects,
orbit categories, the xo-space file tree) with the seeded mulberry32 PRNG, so the server and
the browser compute the same dates. Mock data: file dates stand for each file's first Git
commit, and commit days stand for each project's Git history. Notable exports: `SWIM_RANGE`,
`FILE_LANES`, `PROJECT_LANES`, `SWIM_MILESTONES`.

[`components/shapes/timelines-activity/swimlanes-data.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/swimlanes-data.ts) · code · 5045 bytes

### swimlanes-demo.tsx

Demo for the timeline swimlanes shape: the full timeline (by file and by project, play,
scrub, trace, zoom and drag) and labelled snapshots of each state. Notable exports:
`SwimlanesDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/timelines-activity/swimlanes-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/swimlanes-demo.tsx) · code · 5805 bytes

### swimlanes.tsx

Timeline swimlanes with playback (XO Space Timeline, landing "Thirteen months" tile).
PlaybackScrubber: Play or Pause, the month readout, a range scrubber with ticks.
TimelineSwimlanes: one lane per department (by file) or per project (by project), a month
grid, dated dots, a sweep at the playback date, trace, zoom and pan. Prop-driven: pass
lanes, the full range and optional defaults; the component owns its view state.

[`components/shapes/timelines-activity/swimlanes.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/timelines-activity/swimlanes.tsx) · code · 39064 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
