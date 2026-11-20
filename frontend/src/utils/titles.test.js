// Run: npm test (node --test). Guards the title shortener used for every page's <title>.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatTitle, formatMetaDesc } from './titles.js';

test('short titles are kept as they are', () => {
  assert.equal(formatTitle('Electropolished Pipes Manufacturer in Pune'), 'Electropolished Pipes Manufacturer in Pune');
});

test('a long title is cut on a whole word and never ends on "&", ":" or "("', () => {
  const t = formatTitle('EP Pipe Price in India: What Drives the Cost (2026 Buyer Guide for Pharma & Dairy Plants)');
  assert.equal(t, 'EP Pipe Price in India: What Drives the Cost');
  for (const long of [
    'Electropolished Instrument Tubing for Aerospace & Defence: Specs, Ra Values and Testing',
    'Butt Weld vs Forged Fittings: A Complete Guide for Process Plant Engineers and Buyers',
  ]) {
    const cut = formatTitle(long);
    assert.ok(cut.length <= 60, cut);
    assert.doesNotMatch(cut, /(&|:|\(|\b(and|or|for|in|of|the|to|with|vs))$/i, cut);
  }
});

test('long descriptions stop at a sentence end within 160 characters', () => {
  const d = formatMetaDesc('A'.repeat(120) + '. ' + 'More words here that run past the limit for sure and keep going on.');
  assert.ok(d.length <= 160);
  assert.ok(d.endsWith('.'));
});
