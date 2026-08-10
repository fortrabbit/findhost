import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { labelOf } from '../../lib/fields';
import { price } from '../../lib/record';
import { shareCard } from '../../lib/og';

export async function getStaticPaths() {
  const providers = await getCollection('providers');
  return providers.map((provider) => ({ params: { provider: provider.id }, props: { provider } }));
}

/**
 * What kind, where from, what it costs. Three facts because a card is read at a
 * glance and in a feed — the record page is where the other forty live.
 *
 * A record that is not trading, or that owns hosting brands without selling
 * hosting, leads with that instead: it is the first thing anyone arriving at the
 * page needs to know, and it is usually the only field such a record can fill.
 */
const factsOf = (data: Record<string, any>): string[] => {
  const standing = data.status && data.status !== 'active' ? labelOf('status', data.status) : undefined;

  return [
    standing,
    data.category?.[0] && labelOf('category', data.category[0]),
    data.hqCountry && labelOf('hqCountry', data.hqCountry),
    price(data.entryPrice),
  ]
    .filter(Boolean)
    .slice(0, 3) as string[];
};

/**
 * Records without a one-line description still open with a paragraph saying what
 * the thing is, so the card borrows that rather than going out blank. Markdown
 * emphasis and links are unwrapped: a card is a picture of text and cannot show
 * a link, but it can show the words.
 */
const opening = (body: string | undefined): string | undefined => {
  const paragraph = (body ?? '')
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block.length > 0 && !block.startsWith('#') && !block.startsWith('<!--') && !block.startsWith(':'));

  if (!paragraph) return undefined;

  const plain = paragraph
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  /* Cut at a sentence if one ends in range, at a word otherwise — never mid-word. */
  if (plain.length <= 190) return plain;
  const stop = plain.lastIndexOf('. ', 190);
  if (stop > 90) return plain.slice(0, stop + 1);
  return `${plain.slice(0, plain.lastIndexOf(' ', 187))}…`;
};

export const GET: APIRoute = async ({ props }) => {
  const { data, body } = props.provider;

  const png = await shareCard({
    name: data.name,
    description: data.description ?? opening(body),
    facts: factsOf(data),
    figure: data.figure,
  });

  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
