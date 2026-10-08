<!-- quirq-wiki-generated repo=research dir=infra/output/app/infra-map/src -->

# research / infra/output/app/infra-map/src

Source: [infra/output/app/infra-map/src](https://github.com/quirq-ai/research/tree/main/infra/output/app/infra-map/src) in [research](https://github.com/quirq-ai/research).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Alpha.tsx

The alpha checklist: what each alpha user does, step by step, and what the team finishes
first. Commands come from src/commands/*.sh, imported raw so the page shows exactly the
tested text. Notable exports: `AlphaChecklist`, `BeforeAlpha`.

[`infra/output/app/infra-map/src/Alpha.tsx`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/src/Alpha.tsx) · code · 31031 bytes

### App.tsx

import { useEffect, useState } from "react" import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator" import { Table, TableBody, TableCell,
TableHead, TableHeader, TableRow } from "@/components/ui/table" import { Tabs, TabsContent,
TabsList, TabsTrigger } from "@/components/ui/tabs" import { RepoMap } from "@/RepoMap
Notable exports: `App`.

[`infra/output/app/infra-map/src/App.tsx`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/src/App.tsx) · code · 11248 bytes

### RepoMap.tsx

import { useState } from "react" import { Button } from "@/components/ui/button" import {
Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" import { cn } from "@/lib/utils" import {
EDGES, FLOW, LANES, ON_PRODUCTS, REPOS } from "@/repos" Notable exports: `RepoMap`.

[`infra/output/app/infra-map/src/RepoMap.tsx`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/src/RepoMap.tsx) · code · 9997 bytes

### RepoPage.tsx

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react" import { Badge } from
"@/components/ui/badge" import { Button } from "@/components/ui/button" import { Card,
CardContent, CardHeader, CardTitle } from "@/components/ui/card" import { Table, TableBody,
TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table" import { RepoMap
} from Notable exports: `RepoPage`, `PageData`, `ORDER`.

[`infra/output/app/infra-map/src/RepoPage.tsx`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/src/RepoPage.tsx) · code · 7331 bytes

### index.css

Stylesheet `index.css` for layout and visual treatment in this folder. Defines or consumes
CSS custom properties (design tokens).

[`infra/output/app/infra-map/src/index.css`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/src/index.css) · code · 4120 bytes

### main.tsx

import { StrictMode } from "react" import { createRoot } from "react-dom/client" import
"./index.css" import App from "./App".

[`infra/output/app/infra-map/src/main.tsx`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/src/main.tsx) · code · 213 bytes

### raw.d.ts

declare module "*?raw" { const s: string; export default s } Provides a default export as
the module's public entry.

[`infra/output/app/infra-map/src/raw.d.ts`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/src/raw.d.ts) · code · 61 bytes

### repos.ts

The 13 qq repos, how they use each other, and a walk-through of one change. Edges come from
each repo's pinned dependencies (pyproject.toml, pins.toml) and README. Notable exports:
`Lane`, `Repo`, `LANES`, `REPOS`, `EDGES`, `ON_PRODUCTS`, `FlowStep`, `FLOW`.

[`infra/output/app/infra-map/src/repos.ts`](https://github.com/quirq-ai/research/blob/main/infra/output/app/infra-map/src/repos.ts) · code · 8964 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
