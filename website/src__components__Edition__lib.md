<!-- quirq-wiki-generated repo=website dir=src/components/Edition/lib -->

# website / src/components/Edition/lib

Source: [src/components/Edition/lib](https://github.com/quirq-ai/website/tree/main/src/components/Edition/lib) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### index.ts

export const fetchCategories = (query = '') => { return
fetch(${process.env.GATSBY_SQUEAK_API_HOST}/api/post-categories?${query}) .then((res) =>
res.json()) .then((data) => { const categories = data?.data return categories }) } Notable
exports: `fetchCategories`.

[`src/components/Edition/lib/index.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Edition/lib/index.ts) · code · 282 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
