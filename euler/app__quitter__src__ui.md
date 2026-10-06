<!-- quirq-wiki-generated repo=euler dir=app/quitter/src/ui -->

# euler / app/quitter/src/ui

Source: [app/quitter/src/ui](https://github.com/quirq-ai/euler/tree/main/app/quitter/src/ui) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### QuitterApp.tsx

export function QuitterApp({ engine }: { engine: QuitterEngine }) { return ; } function
decode(value: string) { try { return decodeURIComponent(value); } catch { return value; } }
function QuitterWorkspace() { const { snapshot } = useQuitterEngine(); const [path, setPath]
= useState(() => window.location.hash.slice(1) || '/home'); const [toast, setToast] = u
Notable exports: `QuitterApp`.

[`app/quitter/src/ui/QuitterApp.tsx`](https://github.com/quirq-ai/euler/blob/main/app/quitter/src/ui/QuitterApp.tsx) · code · 9394 bytes

### styles.css

Stylesheet `styles.css` for layout and visual treatment in this folder. Leading class
selectors include `app-shell`, `timeline`, `post-card`, `right-rail`, `compose-dialog`,
`header-left`, `profile-cover`, `notification-row`, and 11 more. Defines or consumes CSS
custom properties (design tokens).

[`app/quitter/src/ui/styles.css`](https://github.com/quirq-ai/euler/blob/main/app/quitter/src/ui/styles.css) · code · 39828 bytes

_Generated 2026-10-06 12:17 UTC from `main`._
