import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildCountryNotes, mumbaiAt10 } from './countryLayer.js';

const cities = JSON.parse(readFileSync(new URL('./market_cities.json', import.meta.url))).filter((c) => c.country !== 'India');

test('Mumbai time for a 10:00 local RFQ', () => {
  assert.equal(mumbaiAt10(1), '14:30');      // CET
  assert.equal(mumbaiAt10(-5), '20:30');     // US Eastern
  assert.equal(mumbaiAt10(10), '05:30');     // AEST
  assert.equal(mumbaiAt10(9.5), '06:00');    // ACST
  assert.equal(mumbaiAt10(-8), '23:30');     // US Pacific
  assert.equal(mumbaiAt10(-7), '22:30');
});

test('every foreign city gets ports and a time block; India gets none', () => {
  assert.equal(buildCountryNotes({ city: 'Pune', country: 'India' }), null);
  for (const c of cities) {
    const n = buildCountryNotes(c);
    assert.ok(n, c.city);
    assert.ok(n.blocks.some((b) => b.title.endsWith('vs Mumbai time')), `time: ${c.city} ${c.state}`);
    assert.ok(n.sources.length >= 3, c.city);
    for (const b of n.blocks) for (const p of b.paras) assert.ok(!/undefined|NaN/.test(p), `${c.city}: ${p}`);
  }
});
