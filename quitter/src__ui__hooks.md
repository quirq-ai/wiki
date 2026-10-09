<!-- quirq-wiki-generated repo=quitter dir=src/ui/hooks -->

# quitter / src/ui/hooks

Source: [src/ui/hooks](https://github.com/quirq-ai/quitter/tree/main/src/ui/hooks) in [quitter](https://github.com/quirq-ai/quitter).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### useQuitterEngine.ts

export const QuitterEngineContext = createContext(null); export function useQuitterEngine()
{ const engine = useContext(QuitterEngineContext); if (!engine) throw new Error('Provide a
QuitterEngine to the UI.'); const snapshot = useSyncExternalStore(engine.subscribe,
engine.getSnapshot, engine.getSnapshot); return { engine, snapshot }; } Notable exports:
`useQuitterEngine`, `QuitterEngineContext`.

[`src/ui/hooks/useQuitterEngine.ts`](https://github.com/quirq-ai/quitter/blob/main/src/ui/hooks/useQuitterEngine.ts) · code · 503 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
