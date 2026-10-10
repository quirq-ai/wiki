<!-- quirq-wiki-generated repo=instants dir=components/collaboration -->

# instants / components/collaboration

Source: [components/collaboration](https://github.com/quirq-ai/instants/tree/main/components/collaboration) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### attention-queue.tsx

import { AtSign, Check, ChevronLeft, ChevronRight, MessageCircle, Plus, Send,
ClipboardCheck, ArrowUpRight, } from "lucide-react"; import { Dialog, DialogContent,
DialogTitle, DialogDescription, } from "@/components/ui/dialog"; const kinds = { dm: {
label: "DM", plural: "DMs", icon: Send }, comment: { label: "Comment", plural: "Comments",
icon: MessageCircle Notable exports: `AttentionQueue`, `QueueReplyDialog`.

[`components/collaboration/attention-queue.tsx`](https://github.com/quirq-ai/instants/blob/main/components/collaboration/attention-queue.tsx) · code · 10227 bytes

### collaboration.css

Stylesheet `collaboration.css` for layout and visual treatment in this folder. Leading class
selectors include `attention-queue`, `attention-heading`, `attention-categories`,
`attention-people`, `attention-avatar`, `attention-type`, `attention-person`, `attention-
empty`, and 42 more. Defines or consumes CSS custom properties (design tokens).

[`components/collaboration/collaboration.css`](https://github.com/quirq-ai/instants/blob/main/components/collaboration/collaboration.css) · code · 15133 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
