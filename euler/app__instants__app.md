<!-- quirq-wiki-generated repo=euler dir=app/instants/app -->

# euler / app/instants/app

Source: [app/instants/app](https://github.com/quirq-ai/euler/tree/main/app/instants/app) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### chatgpt-auth.ts

export type ChatGPTUser = { userId: string; displayName: string; email: string; fullName:
string | null; } Notable exports: `getChatGPTUser`, `requireChatGPTUser`,
`chatGPTSignInPath`, `chatGPTSignOutPath`, `ChatGPTUser`. Wired into a Next.js app (App
Router or Next APIs).

[`app/instants/app/chatgpt-auth.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/app/chatgpt-auth.ts) · code · 2550 bytes

### globals.css

Stylesheet `globals.css` for layout and visual treatment in this folder. Leading class
selectors include `ig-app`, `ig-sidebar`, `brand`, `wordmark`, `brand-image`, `compact-
logo`, `nav-item`, `nav-icon`, and 152 more. Defines or consumes CSS custom properties
(design tokens).

[`app/instants/app/globals.css`](https://github.com/quirq-ai/euler/blob/main/app/instants/app/globals.css) · code · 49657 bytes

### layout.tsx

const icon = brand.favicon || data:image/svg+xml,${encodeURIComponent()}; export const
metadata: Metadata = { title: brand.name, description: brand.description, icons: { icon:
appPath(icon) }, }; export default function RootLayout({ children, }: Readonly) { return (
Notable exports: `RootLayout`, `metadata`.

[`app/instants/app/layout.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/app/layout.tsx) · code · 1533 bytes

### page.tsx

export default function Home() { return ; } Notable exports: `Home`.

[`app/instants/app/page.tsx`](https://github.com/quirq-ai/euler/blob/main/app/instants/app/page.tsx) · code · 115 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
