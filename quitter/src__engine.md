<!-- quirq-wiki-generated repo=quitter dir=src/engine -->

# quitter / src/engine

Source: [src/engine](https://github.com/quirq-ai/quitter/tree/main/src/engine) in [quitter](https://github.com/quirq-ai/quitter).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### contract.ts

/** Framework-independent boundary. UI depends only on this contract and domain types. */
export interface QuitterEngine { getSnapshot(): EngineSnapshot; subscribe(listener: () =>
void): () => void; getFeed(query: FeedQuery): readonly ActivityPost[]; getReplies(postId:
string): readonly ActivityPost[]; searchActors(query: string): readonly Actor[]; getSugges
Notable exports: `EngineError`, `QuitterEngine`.

[`src/engine/contract.ts`](https://github.com/quirq-ai/quitter/blob/main/src/engine/contract.ts) · code · 1406 bytes

### postDesign.ts

export const DEFAULT_POST_DESIGN: PostDesign = Object.freeze({ layout: 'plain', accent:
'blue' }) Notable exports: `validatePostDesign`, `DEFAULT_POST_DESIGN`.

[`src/engine/postDesign.ts`](https://github.com/quirq-ai/quitter/blob/main/src/engine/postDesign.ts) · code · 886 bytes

### types.ts

export interface Actor { readonly id: string; readonly kind: 'human' | 'agent'; readonly
name: string; readonly handle: string; readonly initials: string; readonly color: string;
readonly verified?: boolean; readonly bio: string; readonly location?: string; readonly
website?: string; readonly joinedAt: string; readonly followers: number; readonly following
Notable exports: `Actor`, `PostImage`, `PostDesign`, `PollOption`, `Poll`, `ActivityPost`

[`src/engine/types.ts`](https://github.com/quirq-ai/quitter/blob/main/src/engine/types.ts) · code · 3199 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
