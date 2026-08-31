import type { APIRoute } from 'astro';
import { loadProviders } from '../lib/providers';
import { attribution } from '../lib/seo';
import { movementOf } from '../lib/record';

/**
 * The chart as text. The bars carry the shape and the numbers carry the fact, so
 * the markdown twin loses only the shape — which is why the figure is printed
 * beside every bar on the page rather than left to the length of it.
 */
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const providers = await loadProviders();

  const bars = providers
    .filter((provider) => provider.data.referringSubnets)
    .map((provider) => ({
      id: provider.id,
      name: String(provider.data.name),
      now: provider.data.referringSubnets!.now,
      before: provider.data.referringSubnets!.before,
    }))
    .sort((a, b) => b.now - a.now);

  const unmeasured = providers.filter((provider) => provider.data.referringSubnets === null).length;
  const unknown = providers.length - bars.length - unmeasured;

  const number = new Intl.NumberFormat('en');
  const moved = (bar: (typeof bars)[number]) => {
    const movement = movementOf(bar);
    if (movement === 'new') return ', not in the previous list';
    if (movement === 'flat') return ', unchanged';
    return `, ${movement} from ${number.format(bar.before!)}`;
  };

  const lines = [
    '# Reach',
    '',
    `Source: ${origin}/reach/`,
    '',
    "Networks linking to each provider's own domain, from the Majestic Million (https://majestic.com/reports/majestic-million), published under CC BY 3.0. A measure of how linked-to a domain is — not of how good a host is, and not of how large one is.",
    '',
    `${number.format(bars.length)} of ${number.format(providers.length)} records carry a figure.`,
    ...(unmeasured > 0
      ? [
          `The list publishes none for a further ${unmeasured}: the domain is below the millionth, or it is a subdomain of a larger company and the list counts whole domains.`,
        ]
      : []),
    ...(unknown > 0 ? [`${unknown} have not been read against the list yet.`] : []),
    '',
    '## Providers, most linked-to first',
    '',
    ...bars.map((bar) => `- [${bar.name}](${origin}/${bar.id}/) — ${number.format(bar.now)} networks${moved(bar)}`),
    '',
    '---',
    '',
    ...attribution,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/markdown; charset=utf-8' } });
};
