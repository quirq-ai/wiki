import type { APIRoute } from 'astro';
import { getSizesMarkdown } from '../lib/sizes';

// The Markdown twin of /sizes/: the committed _sizes/README.md, unchanged.
export const GET: APIRoute = async () =>
  new Response(
    (await getSizesMarkdown()) ??
      '# Repository sizes\n\nNo sizes have been recorded yet.\n',
    { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } },
  );
