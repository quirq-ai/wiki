import type { APIRoute } from 'astro';
import { absolute } from '../lib/agents';

// Every crawler and agent is welcome; the wiki is public documentation.
export const GET: APIRoute = ({ site }) =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      ...(site ? [`Sitemap: ${absolute('/sitemap.xml', site)}`] : []),
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
