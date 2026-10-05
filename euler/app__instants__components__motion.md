<!-- quirq-wiki-generated repo=euler dir=app/instants/components/motion -->

# euler / app/instants/components/motion

Source: [app/instants/components/motion](https://github.com/quirq-ai/euler/tree/main/app/instants/components/motion) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### carousel.css

Stylesheet `carousel.css` for layout and visual treatment in this folder. Leading class
selectors include `motion-carousel`, `motion-carousel-track`, `motion-carousel-slide`,
`motion-carousel-dots`. Defines or consumes CSS custom properties (design tokens).

[`app/instants/components/motion/carousel.css`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/motion/carousel.css) · code · 1974 bytes

### carousel.tsx

export function MotionCarousel({ images, alt, label = "Post photos", onDoubleTap, children,
onIndexChange, }: { images: string[]; alt: string; label?: string; onDoubleTap?: () => void;
children?: ReactNode; onIndexChange?: (index: number) => void; }) { const track =
useRef(null); const [index, setIndex] = useState(0); const indexRef = useRef(0); const drag
= Notable exports: `MotionCarousel`. Marked `'use client'` so it runs in the browser.

[`app/instants/components/motion/carousel.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/motion/carousel.tsx) · code · 7311 bytes

### motion-lab.css

Stylesheet `motion-lab.css` for layout and visual treatment in this folder. Leading class
selectors include `motion-lab`, `motion-lab-modal`, `motion-lab-sheet`, `motion-lab-header`,
`motion-lab-header-inner`, `motion-lab-brand`, `motion-lab-header-divider`, `motion-lab-
header-label`, and 68 more. Defines or consumes CSS custom properties (design tokens).

[`app/instants/components/motion/motion-lab.css`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/motion/motion-lab.css) · code · 25444 bytes

### motion-lab.tsx

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Bookmark, Check, ChevronRight, Compass,
Heart, Home, Moon, MoveHorizontal, Play, RotateCcw, Send, SlidersHorizontal, Sparkles, Sun,
User, } from "lucide-react"; import { Dialog, DialogClose, DialogContent, DialogDescription,
DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"; import { Notable
exports: `MotionLab`. Wired into a Next.js app (App Router or Next APIs).

[`app/instants/components/motion/motion-lab.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/components/motion/motion-lab.tsx) · code · 25254 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
