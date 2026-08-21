import { attribution } from './seo.ts';

/**
 * A markdown page as its own machine-readable twin.
 *
 * `/guide/` and `/about/` are authored as markdown and rendered through a layout,
 * so unlike a record — which is assembled from fields — the twin already exists
 * as a file. Taking the body verbatim is what stops the two from drifting: there
 * is one copy of the prose and this adds a heading, a source line and the credit
 * the other exports end on.
 *
 * The frontmatter is lifted rather than printed. `layout` and `figure` describe
 * how the page is drawn, which means nothing to a reader that only wanted the
 * words, while `title`, `description` and `lead` are the words and stay.
 */
export function markdownTwin(raw: string, source: string): Response {
  const match = /^---\n([\s\S]*?)\n---\n?/.exec(raw);
  const front = match?.[1] ?? '';
  const body = raw.slice(match?.[0].length ?? 0).trim();

  /* Only the scalar keys, and only the three that carry prose. */
  const value = (key: string) => {
    const found = new RegExp(`^${key}: *(.+)$`, 'm').exec(front)?.[1]?.trim();
    return found?.replace(/^['"]|['"]$/g, '');
  };

  const lines = [
    `# ${value('title') ?? 'FindHost'}`,
    '',
    `Source: ${source}`,
    '',
    ...(value('description') ? [value('description')!, ''] : []),
    ...(value('lead') ? [value('lead')!, ''] : []),
    body,
    '',
    '---',
    '',
    ...attribution,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/markdown; charset=utf-8' } });
}
