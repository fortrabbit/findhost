import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { badgePlacements, badgeSnippets, badgeTerms } from '../lib/badge';
import { attribution } from '../lib/seo';

/**
 * The badge page as text — the form a provider's own agent is most likely to
 * read it in, and the one where the snippets need no copy button.
 *
 * Assembled rather than lifted, like /reach/ and unlike /about/: the page is
 * built from lib/badge.ts, so the twin is built from it too. Every sentence
 * that carries a promise comes from the same constant the page prints.
 */
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const note = (await getCollection('notes')).find((entry) => entry.id === 'page/badge');

  const fence = (snippet: { label: string; note: string; code: string }, language: string) => [
    `### ${snippet.label}`,
    '',
    snippet.note,
    '',
    '```' + language,
    snippet.code,
    '```',
    '',
  ];

  const [svg, html, markdown] = badgeSnippets(origin, 'your-record');

  const lines = [
    '# Badge',
    '',
    `Source: ${origin}/badge/`,
    '',
    ...(note?.data.description ? [note.data.description, ''] : []),
    ...(note?.data.lead ? [note.data.lead, ''] : []),
    '## What it means',
    '',
    ...badgeTerms.map((sentence) => `- ${sentence}`),
    '',
    '## The snippets',
    '',
    'Three forms of one link. Replace `your-record` with your own, or open your record on FindHost and take the snippet already filled in there.',
    '',
    ...fence(svg, 'html'),
    ...fence(html, 'html'),
    ...fence(markdown, 'markdown'),
    'The artwork is drawn in `currentColor`, so it takes the colour of the text around it in a light footer and a dark one alike.',
    '',
    '## Where to put it',
    '',
    'It does not have to be the homepage.',
    '',
    ...badgePlacements.map((where) => `- ${where}`),
    '',
    '## What we do with it',
    '',
    'Nothing measurable. The badge is inline markup, so displaying it never calls this server and no install count exists. A referrer, when somebody follows the link, is the whole of it.',
    '',
    'There is no application. If a record exists, the badge is available; the scope test at /about/ is the whole of the answer to why one does not.',
    '',
    '---',
    '',
    ...attribution,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/markdown; charset=utf-8' } });
};
