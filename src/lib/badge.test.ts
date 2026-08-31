import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { badgePlacements, badgeSnippets, badgeSvg, badgeTerms, badgeWords } from './badge.ts';

/*
 * The badge is the one artifact of this project that gets published on somebody
 * else's site, under their control, where nothing we write later can amend it.
 * Every rule it has to hold is here as an assertion rather than as a paragraph
 * in a ticket: the wording, the absence of a rank, the absence of a tracker.
 */

const origin = 'https://www.findhost.app';
const codeFor = (slug: string) => badgeSnippets(origin, slug).map((snippet) => snippet.code);

describe('the wording', () => {
  it('states a fact rather than a selection', () => {
    assert.equal(badgeWords, 'Listed on FindHost');
  });

  /*
   * The line the badge must not cross. A market full of bought "Top 10 2026"
   * seals is the reason this register exists, so the words that would put us in
   * that business are checked rather than trusted to review — including in the
   * artwork, which is where they would be hardest to notice later.
   */
  it('never implies a rank, an award or a year', () => {
    const forbidden = /\b(best|top|award|awarded|rated|rating|winner|featured|certified|approved|20\d\d)\b/i;

    /* The SVG namespace is a URL with a year in it, and it is not something anybody reads. */
    const said = (code: string) => code.replace(/xmlns="[^"]*"/g, '');

    for (const code of [...codeFor('hetzner'), badgeSvg()]) {
      assert.doesNotMatch(said(code), forbidden);
    }
  });

  it('is the anchor text of every form, so the link never reads as a keyword', () => {
    for (const code of codeFor('hetzner')) {
      assert.ok(code.includes(badgeWords), `missing the wording: ${code}`);
    }
  });
});

describe('the terms', () => {
  it('says what the badge is not, before anybody reads it as a seal', () => {
    const said = badgeTerms.join(' ');

    assert.match(said, /not an endorsement/);
    assert.match(said, /not a rating/);
    assert.match(said, /not a rank/);
    assert.match(said, /cannot be/);
  });

  /* The homepage is what a provider assumes is being asked for, and the reason most say no. */
  it('offers somewhere other than the homepage to put it', () => {
    assert.ok(badgePlacements.length > 1);
    assert.ok(badgePlacements.every((where) => !/homepage/i.test(where)));
  });
});

describe('the link', () => {
  it('points at the plain record', () => {
    for (const code of codeFor('hetzner')) {
      assert.ok(code.includes(`${origin}/hetzner/`), `wrong target: ${code}`);
    }
  });

  /*
   * No `?ref=`, no campaign, no fragment. A tracking parameter on a badge from a
   * project that rejects affiliate links would be the unforced error.
   */
  it('carries no query string and no fragment', () => {
    for (const code of codeFor('hetzner')) {
      assert.doesNotMatch(code, /findhost\.app\/[^"')\s]*[?#]/);
    }
  });

  it('survives an origin given with a trailing slash', () => {
    for (const code of badgeSnippets(`${origin}/`, 'hetzner').map((snippet) => snippet.code)) {
      assert.ok(code.includes(`${origin}/hetzner/`), `wrong target: ${code}`);
      assert.doesNotMatch(code, /findhost\.app\/\/+/);
    }
  });
});

describe('the artwork', () => {
  /*
   * The whole reason the badge is inline SVG. A hosted image would call this
   * server on every page view of theirs and hand us an install count — a tracker
   * by another name. Nothing in the markup may fetch anything.
   */
  it('fetches nothing', () => {
    const svg = badgeSvg();

    assert.doesNotMatch(svg, /<image\b/);
    assert.doesNotMatch(svg, /\bsrc=/);
    assert.doesNotMatch(svg, /\bhref=/);
    assert.doesNotMatch(svg, /url\(/);
    assert.doesNotMatch(svg, /@import/);
  });

  /* It takes the host footer's own ink, so it is right in their light theme and their dark one. */
  it('names no colour of its own', () => {
    const svg = badgeSvg();

    assert.ok(svg.includes('currentColor'));
    assert.doesNotMatch(svg, /#[0-9a-f]{3,6}\b/i);
  });

  it('is small enough to read before pasting it', () => {
    assert.ok(badgeSvg().length < 900, `${badgeSvg().length} bytes`);
  });

  /*
   * Pinned widths. The wordmark is drawn in whatever serif the visitor's machine
   * has, and an unpinned line set in a wide fallback runs out of the rule around
   * it — on a page we cannot see and cannot fix.
   */
  it('pins every line to a width the box can hold', () => {
    const lines = badgeSvg().match(/<text\b[^>]*>/g) ?? [];

    assert.ok(lines.length > 0);
    for (const line of lines) assert.match(line, /textLength="\d+"/);
  });

  it('names itself for a reader who cannot see it', () => {
    assert.ok(badgeSvg().includes(`<title>${badgeWords}</title>`));
  });
});

describe('the three forms', () => {
  it('offers the graphic, the plain link and the markdown', () => {
    assert.deepEqual(
      badgeSnippets(origin, 'hetzner').map((snippet) => snippet.id),
      ['svg', 'html', 'markdown'],
    );
  });

  it('wraps the artwork in the link rather than beside it', () => {
    const [svg] = badgeSnippets(origin, 'hetzner');

    assert.match(svg.code, /^<a href="[^"]+">\s*<svg/);
    assert.match(svg.code, /<\/svg>\s*<\/a>$/);
  });

  it('writes the markdown as markdown', () => {
    const markdown = badgeSnippets(origin, 'hetzner').at(-1)!;

    assert.equal(markdown.code, `[${badgeWords}](${origin}/hetzner/)`);
  });
});
