import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EMPTY_RFQ, guessFromLabel, step1Errors, step2Errors, isBot, buildRfqMessage, toPayload } from './rfq.js';

const full = { ...EMPTY_RFQ, product: 'EP pipe', grade: '316/316L', finish: 'SF4', quantity: '200 m', city: 'Pune', details: '2" Sch 10',
  name: 'Asha', company: 'Acme Pharma', email: 'asha@acme.in', phone: '+91 98200 12345' };

test('guessFromLabel maps page labels to step-1 chips', () => {
  assert.deepEqual(guessFromLabel('SS 316L Electropolished Pipe'), { product: 'EP pipe', grade: '316/316L' });
  assert.deepEqual(guessFromLabel('ASME BPE SF4 Electropolished Tubes'), { product: 'EP tube', finish: 'SF4' });
  assert.equal(guessFromLabel('EP 90° Elbow').product, 'EP fittings');
  assert.deepEqual(guessFromLabel('SS 304 Round Bar'), { product: 'Other', otherProduct: 'SS 304 Round Bar', grade: '304/304L' });
  assert.deepEqual(guessFromLabel(''), {});
  assert.deepEqual(guessFromLabel('About Page Hero Quote'), {});
  assert.deepEqual(guessFromLabel('RFQ for Pune'), {});
  assert.equal(guessFromLabel('Contact Request - EP Spec').product, 'EP pipe');
});

test('step 1 needs product, quantity and city; Other needs a name', () => {
  assert.deepEqual(Object.keys(step1Errors(EMPTY_RFQ)), ['product', 'quantity', 'city']);
  assert.deepEqual(Object.keys(step1Errors({ ...full, product: 'Other' })), ['otherProduct']);
  assert.deepEqual(step1Errors(full), {});
});

test('step 2 needs all four contact fields and a real phone', () => {
  assert.deepEqual(Object.keys(step2Errors(EMPTY_RFQ)), ['name', 'company', 'email', 'phone']);
  assert.equal(step2Errors({ ...full, phone: '12345' }).phone, 'Valid phone number is required');
  assert.equal(step2Errors({ ...full, email: 'asha@' }).email, 'Valid email is required');
  assert.deepEqual(step2Errors({ ...full, phone: '(022) 2345-6789' }), {});
});

test('honeypot flags bots only', () => {
  assert.equal(isBot(full), false);
  assert.equal(isBot({ ...full, website: 'http://spam' }), true);
});

test('payload carries step 1 inside the message the Worker requires', () => {
  const p = toPayload({ ...full, grade: '', details: '' }, '/electropolished-pipes/');
  assert.deepEqual(Object.keys(p), ['name', 'email', 'phone', 'company', 'location', 'message']);
  assert.equal(p.location, 'Pune');
  assert.equal(p.message, 'RFQ (gift card + 30-minute quote test)\nProduct: EP pipe\nFinish: SF4\nQuantity: 200 m\nDelivery city: Pune\nPage: /electropolished-pipes/');
  assert.match(toPayload(full, '/', 'RFQ for Pune').message, /\nClicked: RFQ for Pune$/);
  assert.match(buildRfqMessage({ ...full, product: 'Other', otherProduct: 'SS 304 Round Bar' }), /Product: SS 304 Round Bar/);
});
