// Run: npm test (node --test). The email service is faked by stubbing fetch, so nothing is sent.
import { test } from "node:test";
import assert from "node:assert/strict";

let sent = [];
let fail = false;
globalThis.fetch = async (url, init) => {
  if (fail) return new Response(JSON.stringify({ message: "secret upstream detail", name: "err" }), { status: 401, headers: { "content-type": "application/json" } });
  sent.push(JSON.parse(init.body));
  return new Response(JSON.stringify({ id: "x" }), { status: 200, headers: { "content-type": "application/json" } });
};
process.env.RESEND_API_KEY = "re_dummy";
const { default: app } = await import("./server.js");

const SITE = "https://steelmanufacturer.in";
const post = (fields, origin = SITE, path = "/api/contact") =>
  app.request(path, {
    method: "POST",
    headers: { "content-type": "application/json", ...(origin ? { origin } : {}) },
    body: JSON.stringify(fields),
  });
const valid = { name: "Ravi", email: "ravi@example.com", phone: "9800000000", message: "Need 2 inch EP tube" };

test("an enquiry from the site is emailed, with reply-to set to the customer", async () => {
  sent = [];
  const res = await post(valid);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("access-control-allow-origin"), SITE);
  assert.equal(sent.length, 1);
  assert.deepEqual(sent[0].reply_to, "ravi@example.com");
});

test("a malformed email address still sends the enquiry, without reply-to", async () => {
  sent = [];
  const res = await post({ ...valid, email: "ravi at example" });
  assert.equal(res.status, 200);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].reply_to, undefined);
});

test("form text is escaped in the email", async () => {
  sent = [];
  await post({ ...valid, name: '<a href="http://evil">Click</a>', message: "hi\n<script>x</script>" });
  const html = sent[0].html;
  assert.doesNotMatch(html, /<a href|<script>/);
  assert.ok(html.includes("&lt;a href=&quot;http://evil&quot;&gt;"));
  assert.ok(html.includes("hi<br/>&lt;script"));
});

test("posts without the site's Origin are refused", async () => {
  assert.equal((await post(valid, null)).status, 403);
  assert.equal((await post(valid, "https://evil.example")).status, 403);
});

test("missing required fields get 400", async () => {
  assert.equal((await post({ name: "Ravi" })).status, 400);
});

test("a send failure does not leak the email service's error text", async () => {
  fail = true;
  const res = await post(valid);
  fail = false;
  assert.equal(res.status, 500);
  assert.ok(!(await res.text()).includes("secret"));
});

test("removed endpoints answer 404", async () => {
  assert.equal((await post(valid, SITE, "/api/complaint")).status, 404);
  assert.equal((await post(valid, SITE, "/api/apply")).status, 404);
});

test("health check answers", async () => {
  assert.equal((await app.request("/health")).status, 200);
});
