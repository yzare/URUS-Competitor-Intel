# `data.json` field reference

`data.json` is the canonical dataset for the URUS Global Competitor Landscape dashboard. Every other file in this repo (`urus_dashboard_data_v6.js`, the published Artifact) is generated from it by `build.js` — edit `data.json`, never the generated files.

## Top-level shape

```
{
  meta:            { title, subtitle, revision, date, scope, source_doc }
  urus_brands:      [ { id, name, focus }, ... ]
  threats:          [ { id, name, severity, summary, examples[], urus_exposure }, ... ]
  competitors:      [ ...see below... ]
  out_of_scope:     [ { id, name, category, relevance, why_parked, trigger_to_promote }, ... ]
  recommendations:  { urus_level: [...], by_brand: { <brand_id>: [...] } }
  watchlist:        [ "signal text", ... ]
}
```

## Fields per competitor (`competitors[]`)

| Field | Type | Notes |
|---|---|---|
| `id` | string | Short unique id (lowercase, no spaces) |
| `name` | string | Display name |
| `hq` | string | Country / city |
| `category` | string | One of: `software`, `milking`, `wearables`, `genetics`, `ivf`, `beef`, `calf_nutrition` |
| `threat` | string | One of: `critical`, `high`, `medium`, `low` |
| `brands` | object | URUS brand exposure map, keyed by brand id: `"P"` primary competitor, `"S"` secondary competitor, `"C"` partner/channel overlap |
| `funding` | string | Headline funding or ownership fact (venture rounds, parent, acquisition) |
| `scale` | object | `{ revenue, customers, growth }` |
| `what` | string | One-sentence description of what they do |
| `ai` | string | One-sentence description of their AI layer |
| `moat` | object | `{ type, switching_cost, vulnerability }` |
| `why` | string | Strategic note — why URUS should care |
| `confidence` | string | One of: `verified`, `partial`, `thin` |
| `confidence_note` | string | Short explanation of uncertainty |
| `urls` | array | `[{ label, url }, ...]` source links |

## Conventions

- Distinguish company-stated claims from independently verified facts — tag speculative or unverified numbers inline, e.g. `[company claim, unverified]`.
- `confidence: "thin"` means treat the entry with real skepticism; leave a `confidence_note` explaining exactly what's unresolved.
- Don't delete history when correcting a fact — note the correction in the next `CHANGELOG.md` entry so the reasoning is traceable.
