import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { answerHtml, answerText, best, faqSchema, questionsFor, topicOf } from './questions.ts';

describe('topicOf', () => {
  it('phrases a value by its facet', () => {
    assert.equal(topicOf('software', 'Kirby'), 'Kirby hosting provider');
    assert.equal(topicOf('regions', 'Germany'), 'hosting provider in Germany');
  });

  it('lower-cases a sentence-case label and keeps one with capitals of its own', () => {
    assert.equal(topicOf('categories', 'Shared hosting'), 'shared hosting provider');
    assert.equal(topicOf('categories', 'Platform as a Service'), 'Platform as a Service provider');
  });

  it('prefers the note over the pattern', () => {
    assert.equal(topicOf('categories', 'Virtual Private Servers', 'VPS provider'), 'VPS provider');
  });

  it('has no phrase for a facet that reads badly as one', () => {
    assert.equal(topicOf('operating-system', 'Provider'), undefined);
    assert.equal(best(undefined).q, 'Which of these providers is best?');
  });
});

describe('best', () => {
  it('words the answer the same way for the same page on every build', () => {
    assert.equal(best('Kirby hosting provider').a, best('Kirby hosting provider').a);
  });

  it('words it differently across pages', () => {
    const topics = ['Kirby', 'WordPress', 'PHP', 'Node.js', 'Germany', 'France', 'VPS', 'PaaS'];
    const answers = new Set(topics.map((topic) => best(topic).a));
    assert.ok(answers.size > 1);
  });
});

describe('questionsFor', () => {
  it('puts the value first, the facet next and the best question last', () => {
    const questions = questionsFor(
      'Kirby',
      'Kirby hosting provider',
      [{ q: 'Do I need special hosting for {label}?', a: '{label} runs where PHP runs.' }],
      [{ q: 'Does Kirby need a database?', a: 'No.' }],
    );

    assert.deepEqual(
      questions.map(({ q }) => q),
      [
        'Does Kirby need a database?',
        'Do I need special hosting for Kirby?',
        'Who is the best Kirby hosting provider?',
      ],
    );
    assert.equal(questions[1]!.a, 'Kirby runs where PHP runs.');
  });
});

describe('answers', () => {
  const answer = 'See the [guide](/guide/) & <this>.';

  it('renders links and escapes everything else', () => {
    assert.equal(answerHtml(answer), 'See the <a href="/guide/">guide</a> &amp; &lt;this&gt;.');
  });

  it('keeps the link text and drops the address in plain text', () => {
    assert.equal(answerText(answer), 'See the guide & <this>.');
  });

  it('writes the schema from the same strings', () => {
    const schema = faqSchema([{ q: 'Why?', a: answer }]);
    assert.equal(schema['@type'], 'FAQPage');
    assert.deepEqual(schema.mainEntity[0], {
      '@type': 'Question',
      name: 'Why?',
      acceptedAnswer: { '@type': 'Answer', text: 'See the guide & <this>.' },
    });
  });
});
