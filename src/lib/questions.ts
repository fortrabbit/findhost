import { soften } from './seo.ts';

/**
 * The questions under a list page, and the one answer the register gives to
 * every page alike.
 *
 * Answers are written, not generated: a count answers nothing a reader asked,
 * and a sentence assembled from counts is the thin content this dataset exists
 * to correct. A facet's note may carry questions for every value of it, with
 * `{label}` standing in for the value; a value's note carries its own.
 */

export type Question = { q: string; a: string };

/*
 * The phrase a "best" question is asked about, where one reads well for every
 * value of a facet. Elsewhere the question falls back to "these providers",
 * and a note may override the phrase with `topic`.
 */
const topics: Record<string, (label: string) => string> = {
  software: (label) => `${label} hosting provider`,
  runtimes: (label) => `${label} hosting provider`,
  categories: (label) => `${soften(label)} provider`,
  regions: (label) => `hosting provider in ${label}`,
  headquarters: (label) => `hosting company based in ${label}`,
  'use-cases': (label) => `host for ${soften(label)}`,
  audience: (label) => `host for ${soften(label)}`,
  currencies: (label) => `host that bills in ${label}`,
};

export const topicOf = (facet: string, label: string, override?: string) =>
  override ?? topics[facet]?.(label.trim());

/**
 * Asked on every list page, because it is what people type, and answered the
 * same way on each, because the answer does not change with the list: nothing
 * here is ranked, and "best" depends on the reader.
 */
export const best = (topic?: string): Question => ({
  q: topic ? `Who is the best ${topic}?` : 'Which of these providers is best?',
  a: "We don't know, and FindHost doesn't pick one. It depends on the app, where its users are, how much server work the team wants to take on, and the budget. Nobody pays to be listed here and the order is alphabetical. Compare a few records on the fields that matter to the project; the [guide](/guide/) lists the ones worth comparing.",
});

/** The value's own questions first, then the facet's, then the one every page asks. */
export const questionsFor = (
  label: string,
  topic: string | undefined,
  facetQuestions: Question[] = [],
  valueQuestions: Question[] = [],
): Question[] => [
  ...valueQuestions,
  ...facetQuestions.map(({ q, a }) => ({ q: fill(q, label), a: fill(a, label) })),
  best(topic),
];

const fill = (text: string, label: string) => text.replaceAll('{label}', label.trim());

const link = /\[([^\]]+)\]\(([^)\s]+)\)/g;

const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** An answer as HTML. Links are the only markup an answer may carry. */
export const answerHtml = (answer: string) =>
  escape(answer).replace(link, (_, text: string, href: string) => `<a href="${href}">${text}</a>`);

/** An answer as plain text, for the schema and anywhere a link cannot follow. */
export const answerText = (answer: string) => answer.replace(link, '$1');

/** The same questions as structured data, from the same strings the page shows. */
export const faqSchema = (questions: Question[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: answerText(a) },
  })),
});
