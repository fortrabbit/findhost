import { test } from 'node:test';
import assert from 'node:assert/strict';
import { recordTitle } from './seo.ts';

test('a record title carries as many categories as the budget allows', () => {
  assert.equal(recordTitle('Hetzner', ['VPS', 'Bare metal', 'IaaS']), 'Hetzner — VPS, Bare metal, IaaS — FindHost');
});

test('a record with no category keeps the plain form', () => {
  assert.equal(recordTitle('Hetzner', []), 'Hetzner — FindHost');
});

test('a category that will not fit is left off rather than truncated', () => {
  const title = recordTitle('A Very Long Provider Name Indeed', ['Platform as a Service']);
  assert.equal(title, 'A Very Long Provider Name Indeed — FindHost');
});

test('later categories are dropped once the budget runs out, earlier ones kept', () => {
  const title = recordTitle('Provider', ['Shared hosting', 'Server management', 'Domains']);
  assert.equal(title, 'Provider — Shared hosting, Server management — FindHost');
  assert.ok(title.length <= 60);
});
