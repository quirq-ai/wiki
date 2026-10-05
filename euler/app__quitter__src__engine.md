<!-- quirq-wiki-generated repo=euler dir=app/quitter/src/engine -->

# euler / app/quitter/src/engine

Source: [app/quitter/src/engine](https://github.com/quirq-ai/euler/tree/main/app/quitter/src/engine) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### contract.ts

/** Framework-independent boundary. UI depends only on this contract and domain types. */
export interface QuitterEngine { getSnapshot(): EngineSnapshot; subscribe(listener: () =>
void): () => void; getFeed(query: FeedQuery): readonly ActivityPost[]; getReplies(postId:
string): readonly ActivityPost[]; searchActors(query: string): readonly Actor[]; getSugges
Notable exports: `EngineError`, `QuitterEngine`.

[`app/quitter/src/engine/contract.ts`](https://github.com/quirq-ai/euler/blob/main/app/quitter/src/engine/contract.ts) · code · 1406 bytes

### postDesign.ts

export const DEFAULT_POST_DESIGN: PostDesign = Object.freeze({ layout: 'plain', accent:
'blue' }) Notable exports: `validatePostDesign`, `DEFAULT_POST_DESIGN`.

[`app/quitter/src/engine/postDesign.ts`](https://github.com/quirq-ai/euler/blob/main/app/quitter/src/engine/postDesign.ts) · code · 886 bytes

### types.ts

export interface Actor { readonly id: string; readonly kind: 'human' | 'agent'; readonly
name: string; readonly handle: string; readonly initials: string; readonly color: string;
readonly verified?: boolean; readonly bio: string; readonly location?: string; readonly
website?: string; readonly joinedAt: string; readonly followers: number; readonly following
Notable exports: `Actor`, `PostImage`, `PostDesign`, `PollOption`, `Poll`, `ActivityPost`

[`app/quitter/src/engine/types.ts`](https://github.com/quirq-ai/euler/blob/main/app/quitter/src/engine/types.ts) · code · 3199 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
