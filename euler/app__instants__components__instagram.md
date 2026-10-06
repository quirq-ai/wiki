<!-- quirq-wiki-generated repo=euler dir=app/instants/components/instagram -->

# euler / app/instants/components/instagram

Source: [app/instants/components/instagram](https://github.com/quirq-ai/euler/tree/main/app/instants/components/instagram) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### app.tsx

import { Search, Compass, Clapperboard, Send, Heart, SquarePlus, Menu, Zap, Moon, Sun,
ChevronRight, Download, Bookmark, Check, } from "lucide-react"; import { DropdownMenu,
DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from
"@/components/ui/dropdown-menu"; import { HomeIcon, Avatar, Wordmark, PoweredBy, Verified,
mock, Post, } from "./shared Notable exports: `InstantsApp`.

[`app/instants/components/instagram/app.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/instagram/app.tsx) · code · 26047 bytes

### instant-response.tsx

export function InstantResponse({ instant, selected, expiresAt, onRespond, }: { instant:
Instant; selected?: string; expiresAt?: number; onRespond: (option: string) => void; }) {
const [now, setNow] = useState(0); useEffect(() => { setNow(Date.now()); const timer =
window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer)
Notable exports: `InstantResponse`. Marked `'use client'` so it runs in the browser.

[`app/instants/components/instagram/instant-response.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/instagram/instant-response.tsx) · code · 3153 bytes

### overlays.tsx

import { Dialog, DialogContent, DialogTitle, DialogDescription, } from
"@/components/ui/dialog"; import { Sheet, SheetContent, SheetTitle, SheetDescription, } from
"@/components/ui/sheet"; export function SidePanel({ panel, onClose, onProfile, attention,
onOpenQueue, }: { panel: string | null; onClose: () => void; onProfile: (id: string) =>
void; attention Notable exports: `SidePanel`, `PostDialog`, `CreateDialog`, `ShareDialog`.

[`app/instants/components/instagram/overlays.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/instagram/overlays.tsx) · code · 16295 bytes

### post-card.tsx

import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile, } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from
"@/components/ui/dropdown-menu"; export default function PostCard({ post, liked, saved,
onLike, onSave, onComment, onShare, onProfile, response, expiresAt, onRespond, }: { post
Notable exports: `PostCard`. Marked `'use client'` so it runs in the browser.

[`app/instants/components/instagram/post-card.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/instagram/post-card.tsx) · code · 7073 bytes

### shared.tsx

export { mock, getUser, getCompany } from "@/lib/data"; export type { User, Instant, Post }
from "@/lib/data"; export function Photo({ src, alt, className = "", eager = false, }: {
src: string; alt: string; className?: string; eager?: boolean; }) { const [failedSrc,
setFailedSrc] = useState(null); const image = useRef(null); useEffect(() => { A cached
failur Notable exports: `Photo`, `Avatar`, `Verified`, `Wordmark`, `PoweredBy`, `HomeIcon`

[`app/instants/components/instagram/shared.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/instagram/shared.tsx) · code · 2751 bytes

### use-theme-tool.ts

type Context = { registerTool: ( tool: { name: string; description: string; inputSchema:
object; annotations: object; execute: (input: unknown) => unknown; }, options: { signal:
AbortSignal }, ) => void | Promise; }; export function useThemeTool(changeTheme: (theme:
Theme) => void) { const current = useRef(changeTheme); current.current = changeTheme;
useEffe Notable exports: `useThemeTool`. Marked `'use client'` so it runs in the browser.

[`app/instants/components/instagram/use-theme-tool.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/instagram/use-theme-tool.ts) · code · 2024 bytes

### views.tsx

import { Search, Heart, MessageCircle, Send, Bookmark, Grid3X3, Contact, Settings,
ChevronDown, PenSquare, Phone, Video, Info, Smile, ArrowLeft, Layers3, } from "lucide-
react"; import { Dialog, DialogContent, DialogTitle, DialogDescription, } from
"@/components/ui/dialog"; export function ExploreView({ onOpen, onSearch, }: { onOpen:
(post: Post) => void; onS Notable exports: `ExploreView`, `ProfileView`, `MessagesView`

[`app/instants/components/instagram/views.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/instagram/views.tsx) · code · 20259 bytes

_Generated 2026-10-06 12:17 UTC from `main`._
