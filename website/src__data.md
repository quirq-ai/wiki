<!-- quirq-wiki-generated repo=website dir=src/data -->

# website / src/data

Source: [src/data](https://github.com/quirq-ai/website/tree/main/src/data) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### authors.json

JSON array `authors.json` with 104 items; first item keys: `handle`, `name`, `role`,
`link_type`, `link_url`, `profile_id`.

[`src/data/authors.json`](https://github.com/quirq-ai/website/blob/main/src/data/authors.json) · code · 24023 bytes

### cassetteBackgrounds.ts

export interface CassetteLabelBackground { name: string url: string backgroundSize?: string
backgroundRepeat?: string backgroundPosition?: string } Notable exports:
`CassetteLabelBackground`, `cassetteLabelBackgrounds`.

[`src/data/cassetteBackgrounds.ts`](https://github.com/quirq-ai/website/blob/main/src/data/cassetteBackgrounds.ts) · code · 1184 bytes

### companies.ts

export type EngineerDecision = 'Yes' | 'No' | 'To some extent' | 'Unclear' export type
BooleanFilter = 'Yes' | 'No' | 'Unclear' Notable exports: `EngineerDecision`,
`BooleanFilter`, `CompanyMetadata`, `COMPANIES`.

[`src/data/companies.ts`](https://github.com/quirq-ai/website/blob/main/src/data/companies.ts) · code · 7801 bytes

### glossary.json

JSON array `glossary.json` with 1 items; first item keys: `word`, `pluralize`, `slug`.

[`src/data/glossary.json`](https://github.com/quirq-ai/website/blob/main/src/data/glossary.json) · code · 84 bytes

### mcp-rest-mapping.json

JSON document `mcp-rest-mapping.json` whose top-level keys are `activity_log_list`,
`advanced_activity_logs_list`, `alerts_list`, `annotations_create`, `annotations_destroy`,
`annotations_list`, `annotations_partial_update`, `annotations_retrieve`,
`approval_policies_list`, `batch_exports_list`, `change_requests_list`,
`cohorts_add_persons_to_static_cohort_partial_update`, and 183 more.

[`src/data/mcp-rest-mapping.json`](https://github.com/quirq-ai/website/blob/main/src/data/mcp-rest-mapping.json) · code · 13956 bytes

### profileBackgrounds.ts

export interface ProfileBackground { id: string name: string url: string backgroundSize?:
string backgroundRepeat?: string backgroundPosition?: string } Notable exports:
`ProfileBackground`, `profileBackgrounds`.

[`src/data/profileBackgrounds.ts`](https://github.com/quirq-ai/website/blob/main/src/data/profileBackgrounds.ts) · code · 1041 bytes

### quirq-projects.json

JSON document `quirq-projects.json` whose top-level keys are `organization`, `fetchedAt`,
`starsSource`, `repositories`. Structured data consumed by the surrounding app or tooling.

[`src/data/quirq-projects.json`](https://github.com/quirq-ai/website/blob/main/src/data/quirq-projects.json) · code · 12876 bytes

### quirq-repositories.json

Large text file (416.0 KB), over the generator's 256 KB parse cap. Only a prefix was
inspected.

[`src/data/quirq-repositories.json`](https://github.com/quirq-ai/website/blob/main/src/data/quirq-repositories.json) · huge · 425956 bytes

### subprocessors.json

JSON array `subprocessors.json` with 10 items; first item keys: `name`, `type`, `contact`,
`subject`, `duration`, `reason`, `location`, `regions`, and 3 more.

[`src/data/subprocessors.json`](https://github.com/quirq-ai/website/blob/main/src/data/subprocessors.json) · code · 10436 bytes

### testimonials.json

JSON array `testimonials.json` with 52 items; first item keys: `featuresUsed`, `author`,
`quote`.

[`src/data/testimonials.json`](https://github.com/quirq-ai/website/blob/main/src/data/testimonials.json) · code · 21785 bytes

### tools.ts

export type ToolStatus = 'WIP' | 'alpha' | 'beta' Notable exports: `ToolStatus`, `Tool`,
`tools`, `ToolHandle`, `getTool`.

[`src/data/tools.ts`](https://github.com/quirq-ai/website/blob/main/src/data/tools.ts) · code · 12565 bytes

### videos.README.md

Markdown page “Video Library Data”. This directory contains the video library data structure
for PostHog's video library at /videos.

[`src/data/videos.README.md`](https://github.com/quirq-ai/website/blob/main/src/data/videos.README.md) · code · 2443 bytes

### videos.ts

export interface Video { source: 'youtube' | 'wistia' videoId: string title: string folder:
string tags?: string[] thumbnail?: string } Notable exports: `Video`, `videos`.

[`src/data/videos.ts`](https://github.com/quirq-ai/website/blob/main/src/data/videos.ts) · code · 848 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
