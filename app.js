/* Delt navne- og søgelogik for frontpage + landing. */

/* Dansk tekst -> slug-form, så "Aalborg Håndbold" matcher "aalborg-haandbold". */
function normalize(s) {
  return s.toLowerCase().trim()
    .replaceAll('æ', 'ae').replaceAll('ø', 'oe').replaceAll('å', 'aa')
    .replace(/[^a-z0-9]+/g, '-');
}

/* Slug -> visningsnavn. Slugs er ASCII, så æ/ø/å gendannes pr. ord med en
   undtagelsesliste for navne der officielt skrives med aa/ae (Aarhus, Maersk)
   eller hvor bogstavparret ikke er en omskrivning (Michael, ligaen). */
const KEEP_ASCII = new Set([
  'aarhus', 'aalborg', 'aabenraa', 'faaborg', 'aars', 'aakirkeby',
  'maersk', 'michael', 'israel', 'rafael', 'ligaen',
]);
const KEEP_UPPER = new Set(['ob', 'fc', 'if', 'fck', 'agf', 'eu', 'dr', 'dsb', 'kb', 'bk', 'hk', 'ik']);

function displayName(slug) {
  const words = slug.replace(/-\d+$/, '').split('-');
  return words.map((w, i) => {
    if (i === words.length - 1 && w === 'as') return 'A/S';
    if (KEEP_UPPER.has(w)) return w.toUpperCase();
    if (!KEEP_ASCII.has(w)) {
      w = w.replaceAll('aa', 'å').replaceAll('oe', 'ø').replaceAll('ae', 'æ');
    }
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}
