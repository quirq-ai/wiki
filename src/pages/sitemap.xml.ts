import type { APIRoute } from 'astro';
import { getWiki } from '../lib/wiki';
import { absolute } from '../lib/agents';

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async ({ site }) => {
  const wiki = await getWiki();
  const paths = [
    '/',
    '/repositories/',
    '/recent-changes/',
    ...wiki.pages.map((page) => page.href),
  ];
  const lastmod = wiki.generatedAt.slice(0, 10);
  const urls = paths.map(
    (path) =>
      `  <url><loc>${escape(absolute(path, site))}</loc><lastmod>${lastmod}</lastmod></url>`,
  );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
