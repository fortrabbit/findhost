/**
 * The find view — the only JavaScript this site ships.
 *
 * It is deliberately generic: everything it knows about the dataset comes from
 * the index the page inlines, so an eleventh facet is an entry in fields.yml and
 * nothing here.
 *
 * It never builds a row. The register is server-rendered and complete, and
 * filtering hides what does not match — so there is one row renderer on this
 * site (ProviderList.astro) rather than two that have to be kept identical, and
 * a filtered row is the same element as an unfiltered one rather than a copy of
 * it that has to look the same.
 */

interface Facet {
  id: string;
  field: string;
  /** Only the values some record holds — a box for anything else can never be ticked. */
  values: string[];
}

interface ProviderRow {
  id: string;
  facets: Record<string, string | string[]>;
  notApplicable: string[];
}

/**
 * What was used, never who used it. Fathom is cookieless and the event is a
 * facet — "filter software" — which says how the panel is read without saying
 * anything about a reader.
 *
 * The facet, not the value it was set to: one event per facet is a dozen names a
 * person can read, where facet-and-value was 228 of them, each with one hit. Two
 * words, no punctuation — Fathom's own advice is to avoid special characters in
 * an event name, and a name cannot be renamed once it has been fired.
 *
 * Optional by construction: the script only loads where a site id is configured,
 * so this is a no-op everywhere else rather than something to remember to guard.
 */
const track = (event: string) => {
  (window as { fathom?: { trackEvent: (name: string) => void } }).fathom?.trackEvent(event);
};

const filtersEl = document.querySelector<HTMLElement>('[data-find-filters]');
const resultsEl = document.querySelector<HTMLElement>('[data-find-results]');
/*
 * The count, not the sentence it sits in: the links to the groups beside the
 * register share that paragraph and do not change when a filter does.
 */
const summaryEl = document.querySelector<HTMLElement>('[data-find-count]');
const styleEl = document.querySelector<HTMLElement>('[data-list-style]');
const indexEl = document.querySelector<HTMLScriptElement>('[data-find-index]');

/*
 * Extended or slim, as a class on the results rather than as a second way to
 * build a row. It runs on every page carrying a register, including the facet
 * value pages that ship no filters at all, so it is wired apart from everything
 * below.
 */
if (styleEl && resultsEl) {
  const stored = localStorage.getItem('list-style');
  let current = stored === 'slim' ? 'slim' : 'extended';

  const show = (style: string) => {
    current = style;
    resultsEl.classList.toggle('slim', style === 'slim');
    for (const button of styleEl.querySelectorAll<HTMLButtonElement>('button')) {
      button.setAttribute('aria-pressed', String(button.value === style));
    }
    localStorage.setItem('list-style', style);
  };

  for (const button of styleEl.querySelectorAll<HTMLButtonElement>('button[disabled]')) button.disabled = false;

  styleEl.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button');
    if (button && button.value !== current) {
      show(button.value);
      track(`list ${button.value}`);
    }
  });

  show(current);
}

if (filtersEl && resultsEl && summaryEl && indexEl) {
  const { facets, providers } = JSON.parse(indexEl.textContent!) as {
    facets: Facet[];
    providers: ProviderRow[];
  };

  /* Every row the server drew, by the id it carries. Nothing is added or removed. */
  const rowOf = new Map<string, HTMLElement>();
  for (const row of resultsEl.querySelectorAll<HTMLElement>('li[data-record]')) {
    rowOf.set(row.dataset.record!, row);
  }

  const letterGroups = [...resultsEl.querySelectorAll<HTMLElement>('.letter-group')];

  const selected = new Map<string, Set<string>>();

  /*
   * The query string is the state. A facet value page carries its narrowing in
   * its path instead and ships no filters at all — it links here with the value
   * already set, because a tick that contradicted the URL would leave the
   * heading, the prose and the address bar disagreeing.
   */
  const readUrl = () => {
    const params = new URLSearchParams(location.search);
    selected.clear();
    for (const facet of facets) {
      const asked = params.get(facet.id);
      if (!asked) continue;

      /*
       * Only values that still exist AND that some record holds. A link written
       * before a value was renamed — /?category=shared, say — would otherwise
       * filter to nothing and read as "no such providers" rather than as a dead
       * link. A defined-but-unused value is the same trap with a crueller
       * ending: the panel draws no box for it, so nothing can untick it.
       */
      const known = new Set(facet.values);
      const held = asked.split(',').filter((value) => known.has(value));
      if (held.length) selected.set(facet.id, new Set(held));
    }
  };

  const writeUrl = () => {
    const params = new URLSearchParams();
    for (const [facetId, values] of selected) {
      if (values.size) params.set(facetId, [...values].join(','));
    }
    const query = params.toString();
    history.replaceState(null, '', query ? `${location.pathname}?${query}` : location.pathname);
  };

  const holds = (provider: ProviderRow, field: string, value: string) => {
    const held = provider.facets[field];
    if (held === undefined) return false;
    return Array.isArray(held) ? held.includes(value) : held === value;
  };

  const activeFacets = () => facets.filter((facet) => (selected.get(facet.id)?.size ?? 0) > 0);

  const matches = () =>
    providers.filter((provider) =>
      activeFacets().every((facet) =>
        [...selected.get(facet.id)!].some((value) => holds(provider, facet.field, value)),
      ),
    );

  /*
   * The panel is markup — components/FindFilters.astro — and this attaches to
   * it. Building it here put the whole design of the filter inside a script
   * nobody opens for design reasons, and rebuilding it on every tick re-sorted
   * the values under the pointer that had just chosen one.
   *
   * The panel is visible from the first paint and its checkboxes come with it,
   * inert. Enabling them is this script saying it is in charge: a box that is
   * clickable before its listener exists is a filter that silently does nothing,
   * which is the one failure a reader cannot tell from a broken site.
   */
  const wireFilters = () => {
    for (const input of filtersEl.querySelectorAll<HTMLInputElement>('input[data-facet]')) {
      const facetId = input.dataset.facet!;
      input.addEventListener('change', () => {
        const next = new Set(selected.get(facetId) ?? []);
        if (input.checked) next.add(input.value);
        else next.delete(input.value);

        /* Only the tick. An untick is a correction, and counting it would read as interest. */
        if (input.checked) track(`filter ${facetId}`);
        if (next.size) selected.set(facetId, next);
        else selected.delete(facetId);
        writeUrl();
        renderResults();
      });
    }

    for (const input of filtersEl.querySelectorAll<HTMLInputElement>('input[disabled]')) input.disabled = false;
  };

  /*
   * A ticked box the reader cannot see is a filter nobody trusts, and the values
   * scroll now — so a value arriving ticked from the URL is scrolled to, and one
   * that sits under the "More filters" disclosure opens it.
   */
  const syncFilters = () => {
    for (const input of filtersEl.querySelectorAll<HTMLInputElement>('input[data-facet]')) {
      input.checked = selected.get(input.dataset.facet!)?.has(input.value) ?? false;
      if (!input.checked) continue;

      const hidden = input.closest<HTMLDetailsElement>('details');
      if (hidden) hidden.open = true;
      input.closest('.find-row')?.scrollIntoView({ block: 'nearest' });
    }
  };

  // With nothing selected this says exactly what the server rendered. A visitor
  // with JavaScript should not be told "150 of 150" where a visitor without it
  // is told "150" — the script is here to narrow the list, not to restate it.
  const updateSummary = (found: number) => {
    const noun = providers.length === 1 ? 'record' : 'records';
    summaryEl.textContent = activeFacets().length
      ? `${found} of ${providers.length} ${noun}.`
      : `${providers.length} ${noun}.`;
  };

  const renderResults = () => {
    const found = new Set(matches().map((provider) => provider.id));

    for (const [id, row] of rowOf) row.hidden = !found.has(id);

    /* A letter with nothing left under it takes its heading and its rule away. */
    for (const group of letterGroups) {
      group.hidden = !group.querySelector('li[data-record]:not([hidden])');
    }

    updateSummary(found.size);
  };

  window.addEventListener('popstate', () => {
    readUrl();
    syncFilters();
    renderResults();
  });

  readUrl();
  wireFilters();
  syncFilters();
  renderResults();
}

export {};
