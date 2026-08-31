/**
 * The outbound policy applied to prose, which used to escape it.
 *
 * The four links a record page draws itself are attributes somebody wrote, so
 * they ask lib/links.ts. The links inside the prose are markdown, nothing stood
 * between them and the HTML, and they came out followed by accident. This is
 * that thing, as a Sätteri hast plugin — see `markdown.processor` in
 * astro.config.mjs.
 *
 * Only the dataset's own prose: records and notes. Everything under src/pages is
 * the site speaking for itself, and the credits on /about/ pointing at Astro and
 * Pagefind are not the register linking to a company it describes.
 */
import type { satteri } from '@astrojs/markdown-satteri';
import { outboundLinkAttrs, type LinkedFrom } from './links.ts';

/*
 * Derived rather than imported: `satteri` is what the config calls, and the
 * package declaring the plugin type is a dependency of that package rather than
 * one of ours, so it is not ours to import by name.
 */
type HastPlugin = NonNullable<NonNullable<Parameters<typeof satteri>[0]>['hastPlugins']>[number];

/** Which of the two collections the file being compiled belongs to, or neither. */
const sourceOf = (fileURL: URL | undefined): LinkedFrom | undefined => {
  const path = fileURL?.pathname ?? '';

  if (path.includes('/src/content/providers/')) return 'record';
  if (path.includes('/src/content/notes/')) return 'page';
  return undefined;
};

export const outboundProse: HastPlugin = {
  name: 'findhost:outbound-prose',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const from = sourceOf(ctx.fileURL);
      if (!from) return;

      const href = String(node.properties?.href ?? '');
      if (!/^https?:\/\//i.test(href)) return;

      // Set, not merged: a `rel` typed by hand in prose is the case this exists
      // to overrule, and `null` is how a property is taken off again.
      const { rel, referrerpolicy } = outboundLinkAttrs(href, from);
      ctx.setProperty(node, 'rel', rel ?? null);
      ctx.setProperty(node, 'referrerpolicy', referrerpolicy ?? null);
    },
  },
};
