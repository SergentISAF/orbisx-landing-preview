# OrbisX landing-preview

Statisk prototype af prospect-funnel'en: en minimalistisk frontpage med org-søgning, der sender
videre til en dynamisk landing page pr. organisation med CTA til orgens live demo-side på orbisx.ai.

**Live:** https://sergentisaf.github.io/orbisx-landing-preview/

## Sådan hænger den sammen

| Fil | Rolle |
|---|---|
| `index.html` | Frontpage: "Hvad skriver medierne om jer?" + søgefelt med live-forslag |
| `landing.html?org=<slug>` | Landing pr. org: navn, segment-matchet kundecitat, CTA til live demo-side |
| `app.js` | Delt logik: søge-normalisering + slug→visningsnavn (æ/ø/å-gendannelse med undtagelser) |
| `demo-index.json` | 10.354 org-slugs fra orbisx.ai's offentlige demo-sitemap |
| `style.css` | Samme designtokens som dashboard-prototypen (navy/blå, Inter, radius 16) |

100 % statisk: ingen backend, ingen API-kald, ingen credentials. Kundecitaterne er ordrette og må
ikke ændres.

## Kendt begrænsning

Org-navne gendannes fra ASCII-slugs (aa→å, oe→ø, ae→æ med undtagelsesliste for Aarhus, Maersk,
Michael m.fl.). Sjældne ord i den lange hale kan stå forkert. Den rigtige løsning er rigtige
org-navne fra backenden, hvis funnel'en går i produktion.

## Lokal visning

```bash
python3 -m http.server 8742   # åbn http://localhost:8742/
```

Spørgsmål: Dan Holmstad (holmstad@orbisx.ai).
