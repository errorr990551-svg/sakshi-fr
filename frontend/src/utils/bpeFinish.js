// ASME BPE Table SF-2.4-1: maximum Ra of each product-contact surface designation, in both units as the standard lists them.
// Each finish is listed tightest first, so find() returns the best designation a reading meets.
export const BPE_SF_LIMITS = [
  { sf: 'SF4', finish: 'ep', um: 0.38, uin: 15 },
  { sf: 'SF5', finish: 'ep', um: 0.51, uin: 20 },
  { sf: 'SF6', finish: 'ep', um: 0.64, uin: 25 },
  { sf: 'SF1', finish: 'mp', um: 0.51, uin: 20 },
  { sf: 'SF2', finish: 'mp', um: 0.64, uin: 25 },
  { sf: 'SF3', finish: 'mp', um: 0.76, uin: 30 },
];

// Best designation an Ra reading meets as electropolished (ep) and as mechanically polished (mp); null where it meets none.
// Compared in the unit entered, because 15 µin converts to 0.381 µm, just over the 0.38 µm limit.
export function bpeDesignations(value, unit) {
  if (!(value > 0)) return null;
  const best = (finish) => BPE_SF_LIMITS.find((l) => l.finish === finish && value <= l[unit]) || null;
  return { ep: best('ep'), mp: best('mp') };
}
