import { getWiki } from '../lib/wiki';
export async function GET() {
  const { pages } = await getWiki();
  return new Response(
    JSON.stringify(
      pages.map(({ title, href, description }) => ({
        title,
        href,
        description,
      })),
    ),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  );
}
