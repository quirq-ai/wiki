<!-- quirq-wiki-generated repo=website dir=src/components/ui -->

# website / src/components/ui

Source: [src/components/ui](https://github.com/quirq-ai/website/tree/main/src/components/ui) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“ui”). [shadcn/ui](https://ui.shadcn.com) primitives for new quirq UI:
Button, Card, Badge and Tabs. They are copied from shadcn's source and restyled with this
site's color tokens (bg-primary, bg-accent, border-primary, text-primary, text-secondary),
so they follow the light and dark themes like the rest of the desktop.

[`src/components/ui/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/ui/README.md) · code · 1379 bytes

### badge.tsx

shadcn/ui Badge, restyled with the site's tokens. Status variants keep the label in the
primary text color and carry the status color on a dot, so the text meets 4.5:1 in both
themes. Notable exports: `Badge`, `BadgeVariant`.

[`src/components/ui/badge.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ui/badge.tsx) · code · 1446 bytes

### button.tsx

shadcn/ui Button (new-york-v4 registry, shadcn-ui/ui@6efecd8), restyled with the site's
tokens. Variants are a plain class map instead of class-variance-authority, and ButtonLink
stands in for `asChild` so no Radix Slot dependency is needed: it renders a Gatsby Link for
internal paths and a new-tab anchor for external URLs. Notable exports: `buttonVariants`,
`Button`, `ButtonLink`, `ButtonVariant`, `ButtonSize`.

[`src/components/ui/button.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ui/button.tsx) · code · 2566 bytes

### card.tsx

shadcn/ui Card, restyled with the site's color tokens (bg-primary, border-primary, text-
secondary). Notable exports: `Card`, `CardHeader`, `CardTitle`, `CardDescription`,
`CardContent`.

[`src/components/ui/card.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ui/card.tsx) · code · 1588 bytes

### tabs.tsx

shadcn/ui Tabs on Radix, restyled with the site's tokens. The selected tab carries a bottom
bar in the primary text color, so it stands out at more than 3:1, not only by its
background. Notable exports: `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`.

[`src/components/ui/tabs.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/ui/tabs.tsx) · code · 1942 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
