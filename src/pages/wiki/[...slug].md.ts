import type { APIRoute } from 'astro';
import { getWiki, type WikiPage } from '../../lib/wiki';

export async function getStaticPaths() {
  return (await getWiki()).pages.map((page) => ({
    params: { slug: page.slug },
    props: { page },
  }));
}

// The committed Markdown, unchanged, so agents read exactly what the article
// renders. Relative links are the wiki repository's own: most resolve to another
// twin here, but some point at files that only exist in the repository on GitHub.
export const GET: APIRoute = ({ props }) =>
  new Response((props as { page: WikiPage }).page.raw, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
