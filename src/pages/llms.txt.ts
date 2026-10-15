import type { APIRoute } from 'astro';
import { getWiki } from '../lib/wiki';
import { absolute, markdownHref } from '../lib/agents';

// https://llmstxt.org: a Markdown map of the wiki for agents, linking every
// article's Markdown twin.
export const GET: APIRoute = async ({ site }) => {
  const wiki = await getWiki();
  const line = (title: string, slug: string, description: string) =>
    `- [${title}](${absolute(markdownHref(slug), site)})${description ? `: ${description}` : ''}`;
  const sections = [
    '# Quirq Wiki',
    '',
    `> Self evolving knowledge base for the ${wiki.org} GitHub organization: one Markdown article per source directory, regenerated from the code. Every article is also served as Markdown at /wiki/<path>.md. Relative links inside an article follow the wiki repository's layout; one that is not served here resolves under https://github.com/quirq-ai/wiki/blob/main/.`,
    '',
    `Snapshot: ${wiki.generatedAt}. Repositories: ${wiki.repos.length}. Articles: ${wiki.pages.length}.`,
    '',
    '## Start here',
    '',
    line('About Quirq Wiki', 'readme', 'what the wiki is and how it is built'),
    line('Repository index', 'index', 'every repository and its pages'),
    `- [Activity](${absolute('/activity/', site)}): commits, pull requests, issues, releases and failed runs, day by day; raw daily JSONL batches are in https://github.com/quirq-ai/wiki/tree/main/_activity`,
    `- [Repository sizes](${absolute('/sizes.md', site)}): files and bytes per repository and for the whole organization, recorded daily; raw snapshots are in https://github.com/quirq-ai/wiki/tree/main/_sizes`,
  ];
  for (const repo of wiki.repos) {
    const pages = wiki.pages.filter((page) => page.repo === repo.name);
    if (!pages.length) continue;
    sections.push('', `## ${repo.name}`, '');
    if (repo.description) sections.push(repo.description, '');
    for (const page of pages)
      sections.push(line(page.title, page.slug, page.description));
  }
  return new Response(`${sections.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
