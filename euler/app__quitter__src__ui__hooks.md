<!-- quirq-wiki-generated repo=euler dir=app/quitter/src/ui/hooks -->

# euler / app/quitter/src/ui/hooks

Source: [app/quitter/src/ui/hooks](https://github.com/quirq-ai/euler/tree/main/app/quitter/src/ui/hooks) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### useQuitterEngine.ts

export const QuitterEngineContext = createContext(null); export function useQuitterEngine()
{ const engine = useContext(QuitterEngineContext); if (!engine) throw new Error('Provide a
QuitterEngine to the UI.'); const snapshot = useSyncExternalStore(engine.subscribe,
engine.getSnapshot, engine.getSnapshot); return { engine, snapshot }; } Notable exports:
`useQuitterEngine`, `QuitterEngineContext`.

[`app/quitter/src/ui/hooks/useQuitterEngine.ts`](https://github.com/quirq-ai/euler/blob/main/app/quitter/src/ui/hooks/useQuitterEngine.ts) · code · 503 bytes

_Generated 2026-10-09 12:09 UTC from `main`._
