<!-- quirq-wiki-generated repo=euler dir=app/instants/components/collaboration -->

# euler / app/instants/components/collaboration

Source: [app/instants/components/collaboration](https://github.com/quirq-ai/euler/tree/main/app/instants/components/collaboration) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### attention-queue.tsx

import { AtSign, Check, ChevronLeft, ChevronRight, MessageCircle, Plus, Send,
ClipboardCheck, ArrowUpRight, } from "lucide-react"; import { Dialog, DialogContent,
DialogTitle, DialogDescription, } from "@/components/ui/dialog"; import { getCompany,
getUser, mock, type AttentionKind, type Post, type QueueItem, } from "@/lib/data"; const
kinds = { dm: { label Notable exports: `AttentionQueue`, `QueueReplyDialog`.

[`app/instants/components/collaboration/attention-queue.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/collaboration/attention-queue.tsx) · code · 9628 bytes

### collaboration.css

Stylesheet `collaboration.css` for layout and visual treatment in this folder. Leading class
selectors include `attention-queue`, `attention-heading`, `attention-categories`,
`attention-people`, `attention-avatar`, `attention-type`, `attention-person`, `attention-
empty`, and 22 more. Defines or consumes CSS custom properties (design tokens).

[`app/instants/components/collaboration/collaboration.css`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/collaboration/collaboration.css) · code · 8895 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
