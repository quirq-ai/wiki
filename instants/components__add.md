<!-- quirq-wiki-generated repo=instants dir=components/add -->

# instants / components/add

Source: [components/add](https://github.com/quirq-ai/instants/tree/main/components/add) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### add-flow.tsx

import { AlertTriangle, Check, File as FileIcon, FileCode, FileImage, FileSpreadsheet,
FileText, FileVideo, Loader2, UploadCloud, X, } from "lucide-react"; const MAX = 50 * 1024 *
1024; const STEPS = ["Reading files", "Writing post", "Preparing slides", "Done"] Notable
exports: `AddFlow`. Wired into a Next.js app (App Router or Next APIs). Marked `'use
client'` so it runs in the browser.

[`components/add/add-flow.tsx`](https://github.com/quirq-ai/instants/blob/main/components/add/add-flow.tsx) · code · 14546 bytes

### created-preview.tsx

/** Shown after a successful upload: the new post's cover and next steps. */ export function
CreatedPreview({ record, video }: { record: ResearchRecord; video?: string }) { const { post
} = record; return ( Notable exports: `CreatedPreview`. Wired into a Next.js app (App Router
or Next APIs).

[`components/add/created-preview.tsx`](https://github.com/quirq-ai/instants/blob/main/components/add/created-preview.tsx) · code · 3081 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
