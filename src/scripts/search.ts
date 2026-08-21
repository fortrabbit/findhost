/**
 * Free-text search over the built site, served by Pagefind's chunked index.
 *
 * Pagefind is generated after the build, so the module only exists in `dist` —
 * hence the ignored dynamic import, and the honest message when it is missing.
 */

interface PagefindResult {
  data: () => Promise<{ url: string; meta: { title?: string; summary?: string }; excerpt: string }>;
}

interface Pagefind {
  search: (query: string) => Promise<{ results: PagefindResult[] }>;
  preload?: (query: string) => Promise<void>;
}

const form = document.querySelector<HTMLFormElement>('[data-search-form]');
const input = document.querySelector<HTMLInputElement>('[data-search-input]');
const resultsEl = document.querySelector<HTMLElement>('[data-search-results]');
const summaryEl = document.querySelector<HTMLElement>('[data-search-summary]');

if (form && input && resultsEl && summaryEl) {
  let pagefind: Pagefind | null = null;

  /*
   * The import itself is in search.astro, inline, out of the bundler's reach —
   * the reason is written there. This waits on what it left behind.
   */
  const load = async () => {
    if (pagefind) return pagefind;

    pagefind = ((await (window as { pagefind?: Promise<unknown> }).pagefind) as Pagefind | null) ?? null;

    if (!pagefind) {
      summaryEl.textContent =
        'The search index is only built for the deployed site. Run `pnpm build` to try it locally.';
    }

    return pagefind;
  };

  /*
   * What to show under the title. Pagefind starts its excerpt at the match, so a
   * hit on a heading gives back the heading — and the result read "Heroku"
   * twice. The title is stripped off the front where it leads, and where that
   * leaves nothing the record's own sentence stands in.
   *
   * Only the leading copy goes: the same word later in the sentence is context,
   * and Pagefind has wrapped it in a <mark> worth keeping.
   */
  const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const describe = (excerpt: string, title: string, summary?: string) => {
    const leading = new RegExp(`^(?:<mark>)?\\s*${escape(title)}\\s*(?:</mark>)?[\\s.,:;–—-]*`, 'i');
    const trimmed = excerpt.replace(leading, '').trim();
    const words = trimmed.replace(/<[^>]*>/g, '').trim();

    return words ? trimmed : (summary ?? '');
  };

  const run = async (query: string) => {
    resultsEl.innerHTML = '';

    if (!query.trim()) {
      summaryEl.textContent = 'Type a word or two.';
      return;
    }

    const engine = await load();
    if (!engine) return;

    summaryEl.textContent = 'Searching…';
    const { results } = await engine.search(query);
    const shown = await Promise.all(results.slice(0, 30).map((result) => result.data()));

    summaryEl.textContent = `${results.length} ${results.length === 1 ? 'page' : 'pages'} match “${query}”.`;

    for (const hit of shown) {
      const item = document.createElement('li');
      const title = hit.meta.title ?? hit.url;

      const link = document.createElement('a');
      link.className = 'search-title';
      link.href = hit.url;
      link.textContent = title;
      item.append(link);

      const body = describe(hit.excerpt, title, hit.meta.summary);
      if (body) {
        const excerpt = document.createElement('p');
        excerpt.className = 'search-excerpt';
        excerpt.innerHTML = body;
        item.append(excerpt);
      }

      resultsEl.append(item);
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value;

    /* That a search happened, never the words. The query is the reader's. */
    (window as { fathom?: { trackEvent: (name: string) => void } }).fathom?.trackEvent('search');
    history.replaceState(null, '', query ? `?q=${encodeURIComponent(query)}` : location.pathname);
    void run(query);
  });

  const initial = new URLSearchParams(location.search).get('q');
  if (initial) {
    input.value = initial;

    /*
     * After the parse, because the module holding Pagefind is an inline script
     * further down the page and this one is hoisted into the head. Both are
     * deferred, so both have run by the time this event fires; running the
     * query here instead would ask for a module that had not been reached yet.
     */
    document.addEventListener('DOMContentLoaded', () => void run(initial));
  }
}

export {};
