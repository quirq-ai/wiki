<!-- quirq-wiki-generated repo=instants dir=app -->

# instants / app

Source: [app](https://github.com/quirq-ai/instants/tree/main/app) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### chatgpt-auth.ts

export type ChatGPTUser = { userId: string; displayName: string; email: string; fullName:
string | null; } Notable exports: `getChatGPTUser`, `requireChatGPTUser`,
`chatGPTSignInPath`, `chatGPTSignOutPath`, `ChatGPTUser`. Wired into a Next.js app (App
Router or Next APIs).

[`app/chatgpt-auth.ts`](https://github.com/quirq-ai/instants/blob/main/app/chatgpt-auth.ts) · code · 2550 bytes

### globals.css

Stylesheet `globals.css` for layout and visual treatment in this folder. Leading class
selectors include `ig-app`, `ig-sidebar`, `brand`, `wordmark`, `brand-image`, `compact-
logo`, `nav-item`, `nav-icon`, and 152 more. Defines or consumes CSS custom properties
(design tokens).

[`app/globals.css`](https://github.com/quirq-ai/instants/blob/main/app/globals.css) · code · 49657 bytes

### layout.tsx

const icon = brand.favicon || data:image/svg+xml,${encodeURIComponent()}; export const
metadata: Metadata = { title: brand.name, description: brand.description, icons: { icon },
}; export default function RootLayout({ children, }: Readonly) { return ( Notable exports:
`RootLayout`, `metadata`.

[`app/layout.tsx`](https://github.com/quirq-ai/instants/blob/main/app/layout.tsx) · code · 1463 bytes

### page.tsx

export default function Home() { return ; } Notable exports: `Home`.

[`app/page.tsx`](https://github.com/quirq-ai/instants/blob/main/app/page.tsx) · code · 115 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
