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
  /** Which list the row is in. A record is in exactly one of them. */
  register: string;
  facets: Record<string, string | string[]>;
  notApplicable: string[];
}

interface Register {
  key: string;
  label: string;
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
 * The count on its own. The groups beside the register are a row under it and do
 * not change when a filter does, so they are not in this element to be rewritten.
 */
const summaryEl = document.querySelector<HTMLElement>('[data-find-count]');
const styleEl = document.querySelector<HTMLElement>('[data-list-style]');
const indexEl = document.querySelector<HTMLScriptElement>('[data-find-index]');

/*
 * Storage is a convenience, never a dependency. A browser that blocks site data
 * throws on the accessor itself, and an uncaught throw here ends the module
 * before the filters below are wired — checkboxes shipped disabled would stay
 * that way, on a page that looks like it works.
 */
const remembered = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const remember = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Nothing to remember into. The choice still applies for this page. */
  }
};

/*
 * Extended or slim, as a class on the results rather than as a second way to
 * build a row. It runs on every page carrying a register, including the facet
 * value pages that ship no filters at all, so it is wired apart from everything
 * below.
 */
if (styleEl && resultsEl) {
  const stored = remembered('list-style');
  let current = stored === 'slim' ? 'slim' : 'extended';

  /* Every list on the page, not only the one on show: a toggle that skipped the
     others would change under the reader the moment they switched lists. */
  const lists = [resultsEl, ...document.querySelectorAll<HTMLElement>('[data-find-list]')];

  const show = (style: string) => {
    current = style;
    for (const list of lists) list.classList.toggle('slim', style === 'slim');
    for (const button of styleEl.querySelectorAll<HTMLButtonElement>('button')) {
      button.setAttribute('aria-pressed', String(button.value === style));
    }
    remember('list-style', style);
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
  const { facets, providers, registers } = JSON.parse(indexEl.textContent!) as {
    facets: Facet[];
    providers: ProviderRow[];
    registers: Register[];
  };

  /*
   * The lists the page carries, the register first. Each is whole and only one
   * is shown; the others arrive hidden and are shown by swapping which, so a
   * reader switching lists keeps every tick they had made.
   */
  const home = registers[0]?.key ?? 'hosting';
  let register = home;
  const listOf = new Map<string, HTMLElement>([[home, resultsEl]]);
  for (const list of document.querySelectorAll<HTMLElement>('[data-find-list]')) {
    listOf.set(list.dataset.findList!, list);
  }

  /* Every row the server drew, by the id it carries. Nothing is added or removed. */
  const rowOf = new Map<string, HTMLElement>();
  const letterGroups: HTMLElement[] = [];
  for (const list of listOf.values()) {
    for (const row of list.querySelectorAll<HTMLElement>('li[data-record]')) rowOf.set(row.dataset.record!, row);
    letterGroups.push(...list.querySelectorAll<HTMLElement>('.letter-group'));
  }

  const selected = new Map<string, Set<string>>();

  /*
   * The query string is the state. A facet value page carries its narrowing in
   * its path instead and ships no filters at all — it links here with the value
   * already set, because a tick that contradicted the URL would leave the
   * heading, the prose and the address bar disagreeing.
   */
  const readUrl = () => {
    const params = new URLSearchParams(location.search);

    /* A list nobody offers is not a list: an unknown name falls back to the
       register rather than emptying the page. */
    const wanted = params.get('register');
    register = registers.some((entry) => entry.key === wanted) ? wanted! : home;

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
    /* First, because it says which list the rest of the query narrows. The
       register itself is the default and stays out of the address. */
    if (register !== home) params.set('register', register);

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

  /* The list on show before any facet narrows it. Every number on the page is
     taken from this rather than from every row the page happens to carry. */
  const listed = () => providers.filter((provider) => provider.register === register);

  const matches = () =>
    listed().filter((provider) =>
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

    for (const input of filtersEl.querySelectorAll<HTMLInputElement>('input[data-register-option]')) {
      input.addEventListener('change', () => {
        if (!input.checked || input.value === register) return;

        /*
         * The ticks stay. Asking for German email hosting after German hosting
         * is one question rather than two, and it is why this is a filter and
         * not the row of links it used to be.
         */
        register = input.value;
        track('filter register');
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
    for (const input of filtersEl.querySelectorAll<HTMLInputElement>('input[data-register-option]')) {
      input.checked = input.value === register;
      /* A list asked for in the address is a narrowing the reader cannot see:
         the box that says which one is behind the disclosure. */
      if (input.checked && register !== home) input.closest<HTMLDetailsElement>('details')?.setAttribute('open', '');
    }

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
    const total = listed().length;

    /*
     * The register says what it counts; the other lists say which list they are.
     * Their labels name a group rather than what is in it, and "28 server
     * management" reads as a phrase cut short.
     */
    const said =
      register === home
        ? `${total} ${total === 1 ? 'web host' : 'web hosts'}`
        : `${total} in ${registers.find((entry) => entry.key === register)?.label}`;

    summaryEl.textContent = activeFacets().length ? `${found} of ${said}.` : `${said}.`;
  };

  /**
   * The number in a count link, leaving the words beside it alone: the element
   * is also the link to that value's page, and the rest of it is what a screen
   * reader hears.
   */
  const setNumber = (element: Element | null | undefined, value: number) => {
    for (const node of element?.childNodes ?? []) {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim()) {
        node.nodeValue = String(value);
        return;
      }
    }
  };

  /*
   * What the panel's numbers count, now that the list under them can change. A
   * "79" beside WordPress is 79 of the list on show; left there after switching
   * to the email hosts it would be the panel describing a page nobody is
   * looking at.
   *
   * A value nothing in the list holds loses its row, the way a facet nothing
   * answers has no box — unless it is ticked, because a filter the reader
   * cannot see to untick is worse than one reading zero.
   */
  const updateCounts = () => {
    const rows = listed();

    for (const box of filtersEl.querySelectorAll<HTMLElement>('[data-facet-box]')) {
      const facet = facets.find((entry) => entry.id === box.dataset.facetBox);
      if (!facet) continue;

      /* The same three rules as countValues() in lib/rows.ts: a field a record
         sets to null does not apply to it, one it never mentions is unknown,
         and only the rest can hold a value. */
      const applicable = rows.filter((row) => !row.notApplicable.includes(facet.field));
      const known = applicable.filter((row) => row.facets[facet.field] !== undefined);
      let visible = 0;

      for (const row of box.querySelectorAll<HTMLElement>('.find-row')) {
        const input = row.querySelector<HTMLInputElement>('input[data-facet]');
        if (!input) continue;

        const count = known.filter((entry) => holds(entry, facet.field, input.value)).length;
        setNumber(row.querySelector('.find-count'), count);

        row.hidden = count === 0 && !input.checked;
        if (!row.hidden) visible += 1;
      }

      setNumber(box.querySelector('.find-jump'), visible);

      const foot = box.querySelector<HTMLElement>('.find-facet-foot');
      if (foot) {
        foot.textContent = [
          applicable.length > known.length && `${applicable.length - known.length} unknown`,
          rows.length > applicable.length && `${rows.length - applicable.length} n/a`,
        ]
          .filter(Boolean)
          .join(' · ');
      }

      box.hidden = visible === 0;
    }
  };

  const aside = document.querySelector<HTMLElement>('[data-find-aside]');

  const renderResults = () => {
    const found = new Set(matches().map((provider) => provider.id));

    /* One list on show, and it is a whole list rather than rows picked out of
       several: the register's own markup is what says how many hosts there are. */
    for (const [key, list] of listOf) list.hidden = key !== register;
    if (aside) aside.hidden = register !== home;

    for (const [id, row] of rowOf) row.hidden = !found.has(id);

    /* A letter with nothing left under it takes its heading and its rule away. */
    for (const group of letterGroups) {
      group.hidden = !group.querySelector('li[data-record]:not([hidden])');
    }

    updateCounts();
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
