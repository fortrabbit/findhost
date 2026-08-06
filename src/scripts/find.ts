/**
 * The find view — the only JavaScript this site ships.
 *
 * It is deliberately generic: everything it knows about the dataset comes from
 * providers.json, so an eleventh facet is an entry in fields.yml and nothing here.
 */

interface FacetValue {
  id: string;
  label: string;
  count: number;
}

interface Facet {
  id: string;
  label: string;
  field: string;
  multiple: boolean;
  values: FacetValue[];
  unknown: number;
  notApplicable: number;
}

interface ProviderRow {
  id: string;
  name: string;
  description?: string;
  publishedByUs?: boolean;
  greenWebId?: number | null;
  country?: string;
  figure?: { emoji: string; color: string; textColor: string };
  facets: Record<string, string | string[]>;
  notApplicable: string[];
}

/**
 * One row, built to the same shape ProviderList.astro renders — the filtered
 * view and the server-rendered one have to be indistinguishable, or filtering
 * would quietly change what a row looks like.
 */
function row(provider: ProviderRow): HTMLLIElement {
  const item = document.createElement('li');
  if (!provider.description) item.className = 'one-line';

  const tile = document.createElement('span');
  tile.className = provider.figure ? 'provider-tile' : 'provider-tile letter';
  tile.setAttribute('aria-hidden', 'true');
  if (provider.figure) {
    tile.style.background = provider.figure.color;
    tile.style.color = provider.figure.textColor;
    tile.textContent = provider.figure.emoji;
  } else {
    tile.textContent = provider.name.slice(0, 1).toLowerCase();
  }
  item.append(tile);

  const body = document.createElement('div');
  body.className = 'provider-body';

  const name = document.createElement('span');
  name.className = 'provider-name';

  const link = document.createElement('a');
  link.href = `/${provider.id}/`;
  link.textContent = provider.name;
  name.append(link);

  if (provider.greenWebId) {
    const mark = document.createElement('span');
    mark.className = 'green-mark';
    mark.title = 'Listed in the Green Web Foundation directory, which verifies the claim against published evidence';
    mark.textContent = '🌿';

    // A leaf is not a word. The server-rendered row spells it out for a screen
    // reader and the filtered row has to say the same thing, or filtering
    // quietly removes the only accessible copy of the mark.
    const spelled = document.createElement('span');
    spelled.className = 'visually-hidden';
    spelled.textContent = ' Listed in the Green Web Foundation directory';
    mark.append(spelled);

    name.append(mark);
  }

  if (provider.publishedByUs) {
    const marker = document.createElement('span');
    marker.className = 'self-marker';
    marker.textContent = 'published by us';
    name.append(marker);
  }

  body.append(name);

  if (provider.description) {
    const description = document.createElement('p');
    description.textContent = provider.description;
    body.append(description);
  }

  item.append(body);

  if (provider.country) {
    const country = document.createElement('span');
    country.className = 'provider-country';
    country.textContent = provider.country;
    item.append(country);
  }

  return item;
}

const filtersEl = document.querySelector<HTMLElement>('[data-find-filters]');
const resultsEl = document.querySelector<HTMLElement>('[data-find-results]');
const summaryEl = document.querySelector<HTMLElement>('[data-find-summary]');
const styleEl = document.querySelector<HTMLElement>('[data-list-style]');

/*
 * Extended or slim, as a class on the results rather than as a second way to
 * build a row. Rebuilding the list on a filter keeps whichever view is on,
 * because the class is on the container the rows are put into and the rows
 * themselves are identical either way.
 *
 * It runs on every page carrying a register, including the facet value pages
 * that ship no filters at all, so it is wired apart from everything below.
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
    if (button && button.value !== current) show(button.value);
  });

  show(current);
}

if (filtersEl && resultsEl && summaryEl) {
  const response = await fetch('/providers.json');
  const { facets, providers, drafts, asides } = (await response.json()) as {
    facets: Facet[];
    providers: ProviderRow[];
    drafts: ProviderRow[];
    asides: { key: string; label: string; rows: ProviderRow[] }[];
  };

  /*
   * Hidden records are shown only when asked for, never counted in the register,
   * and never filtered — a stub has almost no fields, so running it through the
   * facets would drop it on the first tick and imply we had checked.
   */
  let showDrafts = false;

  /*
   * The groups beside the register, by key. Kept out of it for the same reason as
   * a stub and offered back for a different one: a stub is work we have not
   * finished, while a provider that stopped, or a parent that never sold hosting,
   * is a finished fact about the market. All of them are shown as themselves
   * rather than filtered — they answer few fields, and would drop out on the
   * first tick as though somebody had checked.
   */
  const shownAsides = new Set<string>();

  /* What each group is called where it is appended, and why it is not counted. */
  const asideCopy: Record<string, { heading: string; note: string }> = {
    defunct: {
      heading: 'No longer trading',
      note: 'Providers that have stopped. They keep their records and their pages, and they are not part of the count above — a register of hosting you can buy today has to mean today.',
    },
    unlisted: {
      heading: 'Owns hosting brands, sells none',
      note: 'Companies that own hosting brands without selling hosting under their own name. They have no runtimes, no regions and no price to record, so they are here to be found rather than compared.',
    },
  };

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
       * before a value was renamed — /?category=shared, say — would
       * otherwise filter to nothing and read as "no such providers" rather than
       * as a dead link. A defined-but-unused value is the same trap with a
       * crueller ending: the panel draws no box for it, so nothing can untick it.
       */
      const known = new Set(facet.values.filter((value) => value.count > 0).map((value) => value.id));
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
   * The panel is markup now — components/FindFilters.astro — and this attaches
   * to it. Building it here put the whole design of the filter inside a script
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
        if (next.size) selected.set(facetId, next);
        else selected.delete(facetId);
        writeUrl();
        renderResults();
      });
    }

    const draftsBox = filtersEl.querySelector<HTMLInputElement>('input[data-drafts]');
    draftsBox?.addEventListener('change', () => {
      showDrafts = draftsBox.checked;
      renderResults();
    });

    for (const box of filtersEl.querySelectorAll<HTMLInputElement>('input[data-aside]')) {
      box.addEventListener('change', () => {
        if (box.checked) shownAsides.add(box.dataset.aside!);
        else shownAsides.delete(box.dataset.aside!);
        renderResults();
      });
    }

    for (const input of filtersEl.querySelectorAll<HTMLInputElement>('input[disabled]')) input.disabled = false;

  };

  /*
   * A ticked box the reader cannot see is a filter nobody trusts, and the values
   * scroll now — so a value arriving ticked from the URL is scrolled to, and one
   * that sits under the "All filters" disclosure opens it.
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

  const letterOf = (name: string) => {
    const initial = name.replace(/^the /i, '').charAt(0).toUpperCase();
    return /[A-Z]/.test(initial) ? initial : '#';
  };

  const renderResults = () => {
    const found = matches();

    resultsEl.innerHTML = '';

    let letter = '';
    let list: HTMLUListElement | null = null;

    for (const provider of found) {
      const initial = letterOf(provider.name);

      if (initial !== letter) {
        letter = initial;
        const anchor = initial === '#' ? 'other' : initial.toLowerCase();

        const section = document.createElement('section');
        section.className = 'letter-group';
        section.id = anchor;

        const label = initial === '#' ? '0–9' : initial;

        // The letter is the link. ProviderRegister.astro builds exactly this;
        // the two headings differ and the register looks like two lists.
        const heading = document.createElement('h2');
        const anchorLink = document.createElement('a');
        anchorLink.className = 'anchor-link';
        anchorLink.href = `#${anchor}`;
        anchorLink.setAttribute('aria-label', `Link to ${label}`);
        anchorLink.textContent = label;
        heading.append(anchorLink);
        section.append(heading);

        list = document.createElement('ul');
        list.className = 'provider-list';
        section.append(list);
        resultsEl.append(section);
      }

      list?.append(row(provider));
    }

    /* An appended group, its own heading, outside the count. Two of them now. */
    const appendAside = (rows: ProviderRow[], heading: string, explanation: string) => {
      if (!rows.length) return;

      const section = document.createElement('section');
      section.className = 'letter-group';

      const title = document.createElement('h2');
      title.textContent = heading;
      section.append(title);

      const note = document.createElement('p');
      note.className = 'annotation';
      note.textContent = explanation;
      section.append(note);

      const list = document.createElement('ul');
      list.className = 'provider-list';
      for (const record of rows) list.append(row(record));
      section.append(list);

      resultsEl.append(section);
    };

    for (const aside of asides) {
      if (!shownAsides.has(aside.key)) continue;
      const copy = asideCopy[aside.key];
      appendAside(aside.rows, copy?.heading ?? aside.label, copy?.note ?? 'Not part of the count above.');
    }

    if (showDrafts) {
      appendAside(
        drafts,
        'Not in the register',
        'Records started and not finished, or considered and failed against a numbered inclusion criterion. They are not part of the count above and the filters do not apply to them.',
      );
    }

    // With nothing selected this says exactly what the server rendered. A visitor
    // with JavaScript should not be told "150 of 150" where a visitor without it
    // is told "150" — the script is here to narrow the list, not to restate it.
    const noun = providers.length === 1 ? 'record' : 'records';
    const parts = [
      activeFacets().length
        ? `${found.length} of ${providers.length} ${noun}, sorted alphabetically.`
        : `${providers.length} ${noun}, sorted alphabetically.`,
    ];
    summaryEl.textContent = parts.join(' ');
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
