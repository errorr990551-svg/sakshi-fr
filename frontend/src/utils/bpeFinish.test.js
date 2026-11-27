// Run: npm test (node --test). Guards the Ra converter's ASME BPE designations (SF1-SF3 mechanically polished, SF4-SF6 electropolished).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bpeDesignations } from './bpeFinish.js';

const sf = (value, unit = 'um') => {
  const d = bpeDesignations(value, unit);
  return [d.ep?.sf ?? 'none', d.mp?.sf ?? 'none'];
};

test('readings in µm get the tightest designation for each finish', () => {
  assert.deepEqual(sf(0.30), ['SF4', 'SF1']);
  assert.deepEqual(sf(0.38), ['SF4', 'SF1']);
  assert.deepEqual(sf(0.45), ['SF5', 'SF1']);
  assert.deepEqual(sf(0.51), ['SF5', 'SF1']);
  assert.deepEqual(sf(0.60), ['SF6', 'SF2']);
  assert.deepEqual(sf(0.70), ['none', 'SF3']);
  assert.deepEqual(sf(0.80), ['none', 'none']);
});

test('limits in µin are met exactly, although they convert to slightly more than the µm limit', () => {
  assert.deepEqual(sf(15, 'uin'), ['SF4', 'SF1']);
  assert.deepEqual(sf(20, 'uin'), ['SF5', 'SF1']);
  assert.deepEqual(sf(30, 'uin'), ['none', 'SF3']);
  assert.deepEqual(sf(31, 'uin'), ['none', 'none']);
});

test('zero, negative or missing readings get no designation', () => {
  assert.equal(bpeDesignations(0, 'um'), null);
  assert.equal(bpeDesignations(-1, 'um'), null);
  assert.equal(bpeDesignations(NaN, 'uin'), null);
});
