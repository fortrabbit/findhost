import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { outboundLinkAttrs } from './links.ts';

describe('the outbound link policy', () => {
  it('nofollows everything that leaves the site', () => {
    assert.equal(outboundLinkAttrs('https://www.hetzner.com/').rel, 'nofollow');
    assert.equal(outboundLinkAttrs('https://www.hetzner.com/', 'record').rel, 'nofollow');
  });

  it('hands the record path to a provider, and to nobody else', () => {
    assert.equal(outboundLinkAttrs('https://www.hetzner.com/', 'record').referrerpolicy, 'no-referrer-when-downgrade');
    assert.equal(outboundLinkAttrs('https://www.hetzner.com/').referrerpolicy, undefined);
  });

  // The register's own source is not a company the register describes.
  it("leaves the project's own repository alone", () => {
    assert.deepEqual(outboundLinkAttrs('https://github.com/fortrabbit/findhost/issues', 'record'), {});
  });
});
