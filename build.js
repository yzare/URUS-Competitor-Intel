#!/usr/bin/env node
/*
 * Build script for the URUS Competitor Landscape dashboard.
 *
 * data.json is the only file anyone should hand-edit. This script regenerates
 * the derived outputs from it:
 *
 *   node build.js js         -> writes urus_dashboard_data_v6.js
 *                                (window.COMPETITOR_DATA wrapper, loaded by
 *                                URUS_Competitor_Dashboard_v6.html via a
 *                                <script src> tag so the dashboard still
 *                                opens directly from disk with no server,
 *                                no fetch(), no CORS problems)
 *
 *   node build.js artifact   -> writes urus_dashboard_artifact.html
 *                                (a single self-contained file: HTML + CSS +
 *                                data + render script all inlined, suitable
 *                                for publishing as a Claude Artifact)
 *
 *   node build.js briefing   -> writes urus_competitor_briefing.html
 *                                (a static, non-interactive text + infographic
 *                                companion report - KPI tiles, bar charts, a
 *                                condensed competitor index, recommendations,
 *                                out-of-scope, and watchlist - for platforms
 *                                that can't run the interactive dashboard's JS)
 *
 *   node build.js all        -> all of the above (default if no arg given)
 */
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const DATA_JSON = path.join(DIR, 'data.json');
const JS_WRAPPER = path.join(DIR, 'urus_dashboard_data_v6.js');
const HTML_TEMPLATE = path.join(DIR, 'URUS_Competitor_Dashboard_v6.html');
const ARTIFACT_OUT = path.join(DIR, 'urus_dashboard_artifact.html');
const BRIEFING_OUT = path.join(DIR, 'urus_competitor_briefing.html');

function loadData() {
  return JSON.parse(fs.readFileSync(DATA_JSON, 'utf8'));
}

function buildJsWrapper(data) {
  const banner =
    '/* ==============================================================\n' +
    '   URUS Global Competitor Landscape - Dashboard Data (Revision ' + data.meta.revision + ')\n' +
    '   ==============================================================\n' +
    '   GENERATED FILE - DO NOT EDIT DIRECTLY.\n' +
    '   Source of truth is data.json in this repo. Edit that file, then run:\n' +
    '     node build.js\n' +
    '   to regenerate this file and the publishable artifact.\n' +
    '   Field docs: SCHEMA.md   Revision history: CHANGELOG.md\n' +
    '   Updated: ' + data.meta.date + '\n' +
    '   ============================================================== */\n\n';
  const content = banner + 'window.COMPETITOR_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
  fs.writeFileSync(JS_WRAPPER, content);
  console.log('Wrote', path.basename(JS_WRAPPER), '(' + content.length + ' bytes)');
}

function buildArtifact(data) {
  const html = fs.readFileSync(HTML_TEMPLATE, 'utf8');

  const title = html.match(/<title>([\s\S]*?)<\/title>/)[1];
  const rootMatch = html.match(/:root \{([\s\S]*?)\n  \}/);
  const styleFull = html.match(/<style>([\s\S]*?)<\/style>/)[1];
  const restOfStyle = styleFull.slice(styleFull.indexOf(rootMatch[0]) + rootMatch[0].length);
  const bodyFull = html.match(/<body>([\s\S]*?)<\/body>/)[1];
  const bodyNoScripts = bodyFull.replace(
    /<script src="urus_dashboard_data_v6\.js"><\/script>\s*<script>[\s\S]*?<\/script>/,
    '__SCRIPTS_PLACEHOLDER__'
  );
  const renderScript = html
    .match(/<script>\n\(function\(\)\{[\s\S]*?\}\)\(\);\n<\/script>/)[0]
    .replace(/^<script>\n/, '')
    .replace(/\n<\/script>$/, '');

  if (bodyNoScripts === bodyFull) {
    throw new Error('Could not find the data+render <script> tags in the HTML template to replace');
  }

  const dataScript = 'window.COMPETITOR_DATA = ' + JSON.stringify(data, null, 2) + ';';
  const finalBody = bodyNoScripts.replace(
    '__SCRIPTS_PLACEHOLDER__',
    '<script>\n' + dataScript + '\n</script>\n<script>\n' + renderScript + '\n</script>'
  );

  const out = '<title>' + title + '</title>\n<style>' + rootMatch[0] + restOfStyle + '</style>\n' + finalBody;
  fs.writeFileSync(ARTIFACT_OUT, out);
  console.log('Wrote', path.basename(ARTIFACT_OUT), '(' + out.length + ' bytes)');
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildBriefing(data) {
  const d = data;
  const threatOrder = ['critical', 'high', 'medium', 'low'];
  const threatCounts = { critical: 0, high: 0, medium: 0, low: 0 };
  d.competitors.forEach(c => threatCounts[c.threat]++);

  const catMeta = {
    software: 'Software / HMS',
    milking: 'Milking OEM',
    wearables: 'Wearables / Sensors / Vision',
    genetics: 'Genetics / AI mating',
    ivf: 'IVF / Embryo',
    beef: 'Beef seedstock',
    calf_nutrition: 'Calf nutrition / Colostrum',
  };
  const catOrder = Object.keys(catMeta);
  const catCounts = {};
  catOrder.forEach(c => catCounts[c] = 0);
  d.competitors.forEach(c => catCounts[c.category]++);

  const brandCounts = {};
  d.urus_brands.forEach(b => brandCounts[b.id] = { P: 0, S: 0, C: 0, name: b.name });
  d.competitors.forEach(c => {
    Object.entries(c.brands || {}).forEach(([b, mark]) => {
      if (brandCounts[b]) brandCounts[b][mark] = (brandCounts[b][mark] || 0) + 1;
    });
  });
  const brandRows = Object.entries(brandCounts)
    .map(([id, v]) => ({ id, ...v, total: v.P + v.S }))
    .sort((a, b) => b.P - a.P);

  const catColorVar = (i) => `var(--cat-${(i % 7) + 1})`;

  const threatLabel = { critical: 'Critical', high: 'High', medium: 'Medium', low: 'Low' };
  const confLabel = { verified: 'Verified', partial: 'Partial', thin: 'Thin sourcing' };

  function threatChip(t) {
    return `<span class="chip chip-${t}"><span class="dot"></span>${threatLabel[t]}</span>`;
  }
  function confChip(c) {
    return `<span class="chip chip-conf-${c}"><span class="dot"></span>${confLabel[c]}</span>`;
  }

  const kpis = [
    { n: d.competitors.length, l: 'Competitors tracked' },
    { n: threatCounts.critical, l: 'Critical threat' },
    { n: threatCounts.high, l: 'High threat' },
    { n: d.urus_brands.length, l: 'URUS brands covered' },
    { n: d.out_of_scope.length, l: 'Categories parked, watched' },
    { n: d.watchlist.length, l: 'Signals on the watchlist' },
  ];
  const kpiHtml = kpis.map(k => `
  <div class="kpi">
    <div class="kpi-num">${k.n}</div>
    <div class="kpi-label">${esc(k.l)}</div>
  </div>`).join('');

  const maxThreat = Math.max(...threatOrder.map(t => threatCounts[t]));
  const threatChart = threatOrder.map(t => {
    const pct = Math.round((threatCounts[t] / maxThreat) * 100);
    return `
  <div class="bar-row">
    <div class="bar-label">${threatLabel[t]}</div>
    <div class="bar-track"><div class="bar-fill bar-${t}" style="width:${pct}%"></div></div>
    <div class="bar-value">${threatCounts[t]}</div>
  </div>`;
  }).join('');

  const maxCat = Math.max(...catOrder.map(c => catCounts[c]));
  const catChart = catOrder.map((c, i) => {
    const pct = Math.round((catCounts[c] / maxCat) * 100);
    return `
  <div class="bar-row">
    <div class="bar-label">${esc(catMeta[c])}</div>
    <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${catColorVar(i)}"></div></div>
    <div class="bar-value">${catCounts[c]}</div>
  </div>`;
  }).join('');

  const maxBrand = Math.max(...brandRows.map(b => b.P));
  const brandChart = brandRows.map(b => {
    const pct = Math.round((b.P / maxBrand) * 100);
    return `
  <div class="bar-row">
    <div class="bar-label">${esc(b.name)}</div>
    <div class="bar-track"><div class="bar-fill bar-accent" style="width:${pct}%"></div></div>
    <div class="bar-value">${b.P}<span class="bar-value-sub"> primary</span></div>
  </div>`;
  }).join('');

  const threatVectors = d.threats.map(t => `
  <article class="vector-card vector-${t.severity}">
    <div class="vector-head">
      <h3>${esc(t.name)}</h3>
      ${threatChip(t.severity)}
    </div>
    <p class="vector-summary">${esc(t.summary)}</p>
    <div class="vector-examples">
      ${t.examples.map(e => `<span class="ex-chip">${esc(e)}</span>`).join('')}
    </div>
    <div class="vector-exposure"><span class="label-kicker">URUS exposure</span> ${esc(t.urus_exposure)}</div>
  </article>`).join('');

  const criticals = d.competitors.filter(c => c.threat === 'critical');
  const criticalCards = criticals.map(c => `
  <article class="spotlight-card">
    <div class="spotlight-head">
      <h3>${esc(c.name)}</h3>
      ${confChip(c.confidence)}
    </div>
    <div class="spotlight-meta">${esc(c.hq)} &middot; ${esc(catMeta[c.category])}</div>
    <p>${esc(c.what)}</p>
    <p class="spotlight-why"><span class="label-kicker">Why it matters</span> ${esc(c.why)}</p>
  </article>`).join('');

  const highs = d.competitors.filter(c => c.threat === 'high').sort((a, b) => a.name.localeCompare(b.name));
  const highRows = highs.map(c => `
  <tr>
    <td class="t-name">${esc(c.name)}</td>
    <td>${esc(catMeta[c.category])}</td>
    <td>${esc(c.what)}</td>
    <td>${confChip(c.confidence)}</td>
  </tr>`).join('');

  const indexSections = catOrder.map(cat => {
    const rows = d.competitors
      .filter(c => c.category === cat)
      .sort((a, b) => threatOrder.indexOf(a.threat) - threatOrder.indexOf(b.threat) || a.name.localeCompare(b.name))
      .map(c => `
    <li class="idx-row">
      <span class="idx-dot dot-${c.threat}"></span>
      <span class="idx-name">${esc(c.name)}</span>
      <span class="idx-hq">${esc(c.hq)}</span>
      <span class="idx-what">${esc(c.what)}</span>
      ${threatChip(c.threat)}
    </li>`).join('');
    return `
  <div class="idx-group">
    <h4>${esc(catMeta[cat])} <span class="idx-count">${catCounts[cat]}</span></h4>
    <ul class="idx-list">${rows}</ul>
  </div>`;
  }).join('');

  const recs = d.recommendations.urus_level.map(r => `
  <article class="rec-card rec-${r.severity}">
    <div class="rec-head">
      <h3>${esc(r.title)}</h3>
      ${threatChip(r.severity)}
    </div>
    <ul>${r.actions.map(a => `<li>${esc(a)}</li>`).join('')}</ul>
  </article>`).join('');

  const brandHighlights = Object.entries(d.recommendations.by_brand).map(([bid, items]) => {
    const brand = d.urus_brands.find(b => b.id === bid);
    if (!brand || !items.length) return '';
    const picked = items.slice(0, 2);
    return `
  <article class="brand-card">
    <h4>${esc(brand.name)}</h4>
    <p class="brand-focus">${esc(brand.focus)}</p>
    ${picked.map(p => `<div class="brand-action"><span class="action-type">${esc(p.type)}</span>${esc(p.text)}</div>`).join('')}
  </article>`;
  }).join('');

  const oosCards = d.out_of_scope.map(o => `
  <article class="oos-card">
    <h3>${esc(o.name)}</h3>
    <p class="oos-relevance">${esc(o.relevance)}</p>
    <div><span class="label-kicker">Why parked</span> ${esc(o.why_parked)}</div>
    <div><span class="label-kicker">Would promote if</span> ${esc(o.trigger_to_promote)}</div>
  </article>`).join('');

  const watchItems = d.watchlist.map(w => {
    const resolved = /^RESOLVED/i.test(w.trim());
    return `<li class="watch-item ${resolved ? 'watch-resolved' : ''}">${esc(w)}</li>`;
  }).join('');

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>URUS Competitor Briefing</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    color-scheme: light;
    --paper: #f6f5ef;
    --surface: #fdfcf8;
    --surface-2: #eeece2;
    --ink: #181b15;
    --ink-soft: #4b5142;
    --ink-muted: #82877a;
    --line: #ddddcf;
    --line-strong: #c2c4b2;
    --accent: #3d5c3a;
    --accent-strong: #2b4228;
    --accent-soft: #e5ebdd;
    --accent-ink: #21351f;

    --good: #0ca30c;
    --good-bg: #e3f4e0;
    --warning: #b8790a;
    --warning-bg: #fbedd2;
    --serious: #c05a2e;
    --serious-bg: #fbe4d6;
    --critical: #b8263f;
    --critical-bg: #fbe3e7;

    --cat-1: #2a78d6;
    --cat-2: #eb6834;
    --cat-3: #1baf7a;
    --cat-4: #eda100;
    --cat-5: #e87ba4;
    --cat-6: #008300;
    --cat-7: #4a3aa7;

    --shadow-sm: 0 1px 2px rgba(24,27,21,0.05), 0 0 0 1px rgba(24,27,21,0.04);
    --shadow-md: 0 6px 20px rgba(24,27,21,0.08), 0 0 0 1px rgba(24,27,21,0.04);
    --radius: 10px;
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      color-scheme: dark;
      --paper: #14160f;
      --surface: #1b1e15;
      --surface-2: #23261b;
      --ink: #edeee3;
      --ink-soft: #c1c5b3;
      --ink-muted: #8b9080;
      --line: #33362a;
      --line-strong: #454a38;
      --accent: #8fc98c;
      --accent-strong: #a9dba5;
      --accent-soft: #24301f;
      --accent-ink: #cdeecb;

      --good: #6cd66c;
      --good-bg: #1c3320;
      --warning: #ecb75c;
      --warning-bg: #3a2c12;
      --serious: #ef8f66;
      --serious-bg: #3a2416;
      --critical: #ef7b8c;
      --critical-bg: #3a1b23;

      --cat-1: #3987e5;
      --cat-2: #d95926;
      --cat-3: #199e70;
      --cat-4: #c98500;
      --cat-5: #d55181;
      --cat-6: #008300;
      --cat-7: #9085e9;

      --shadow-sm: 0 1px 2px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05);
      --shadow-md: 0 6px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06);
    }
  }
  :root[data-theme="dark"] {
    color-scheme: dark;
    --paper: #14160f;
    --surface: #1b1e15;
    --surface-2: #23261b;
    --ink: #edeee3;
    --ink-soft: #c1c5b3;
    --ink-muted: #8b9080;
    --line: #33362a;
    --line-strong: #454a38;
    --accent: #8fc98c;
    --accent-strong: #a9dba5;
    --accent-soft: #24301f;
    --accent-ink: #cdeecb;

    --good: #6cd66c;
    --good-bg: #1c3320;
    --warning: #ecb75c;
    --warning-bg: #3a2c12;
    --serious: #ef8f66;
    --serious-bg: #3a2416;
    --critical: #ef7b8c;
    --critical-bg: #3a1b23;

    --cat-1: #3987e5;
    --cat-2: #d95926;
    --cat-3: #199e70;
    --cat-4: #c98500;
    --cat-5: #d55181;
    --cat-6: #008300;
    --cat-7: #9085e9;

    --shadow-sm: 0 1px 2px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05);
    --shadow-md: 0 6px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: "IBM Plex Sans", system-ui, -apple-system, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  ::selection { background: var(--accent-soft); }

  h1, h2, h3, h4 {
    font-family: "Fraunces", Georgia, serif;
    font-weight: 600;
    color: var(--ink);
    text-wrap: balance;
    margin: 0;
  }
  .mono, .kpi-num, .bar-value, .idx-hq, td.t-name + td, .kpi-label { font-variant-numeric: tabular-nums; }

  a { color: var(--accent-strong); }

  .wrap { max-width: 1080px; margin: 0 auto; padding: 0 28px 100px; }

  header.masthead {
    background: linear-gradient(180deg, var(--accent-strong) 0%, var(--accent) 100%);
    color: #fbfaf3;
    padding: 56px 28px 40px;
  }
  header.masthead .inner { max-width: 1080px; margin: 0 auto; }
  .eyebrow {
    font-family: "IBM Plex Mono", monospace;
    font-size: 12.5px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    opacity: 0.85;
    margin-bottom: 14px;
  }
  header.masthead h1 { font-size: clamp(32px, 4.4vw, 46px); color: #fff; letter-spacing: -0.01em; }
  header.masthead .sub { font-size: 18px; opacity: 0.92; margin-top: 8px; max-width: 640px; }
  header.masthead .meta {
    margin-top: 22px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.28);
    font-family: "IBM Plex Mono", monospace; font-size: 13px; opacity: 0.85;
    display: flex; flex-wrap: wrap; gap: 6px 22px;
  }

  nav.jump {
    position: sticky; top: 0; z-index: 5;
    background: var(--surface);
    border-bottom: 1px solid var(--line);
    overflow-x: auto;
  }
  nav.jump .inner { max-width: 1080px; margin: 0 auto; padding: 0 28px; display: flex; gap: 4px; white-space: nowrap; }
  nav.jump a {
    display: inline-block; padding: 13px 14px; font-size: 14px; font-weight: 500;
    color: var(--ink-soft); text-decoration: none; border-bottom: 2px solid transparent;
  }
  nav.jump a:hover { color: var(--ink); border-bottom-color: var(--line-strong); }

  section { padding-top: 52px; }
  section:first-of-type { padding-top: 40px; }
  .section-head { margin-bottom: 20px; }
  .section-head h2 { font-size: 24px; }
  .section-head p { color: var(--ink-soft); font-size: 15.5px; max-width: 680px; margin-top: 6px; }
  .label-kicker {
    font-family: "IBM Plex Mono", monospace; font-size: 11.5px; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--ink-muted); margin-right: 6px;
  }

  /* KPIs */
  .kpi-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
  .kpi { background: var(--surface); padding: 20px 16px; }
  .kpi-num { font-family: "IBM Plex Mono", monospace; font-size: 30px; font-weight: 600; color: var(--accent-strong); }
  .kpi-label { font-size: 12.5px; color: var(--ink-muted); margin-top: 4px; line-height: 1.35; }

  /* bar charts */
  .chart-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; }
  .chart-card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 22px 24px; box-shadow: var(--shadow-sm); }
  .chart-card h3 { font-size: 16px; margin-bottom: 16px; }
  .bar-row { display: grid; grid-template-columns: 132px 1fr 56px; align-items: center; gap: 10px; margin-bottom: 10px; }
  .bar-label { font-size: 13.5px; color: var(--ink-soft); }
  .bar-track { height: 10px; background: var(--surface-2); border-radius: 5px; overflow: hidden; }
  .bar-fill { height: 100%; border-radius: 5px; }
  .bar-critical { background: var(--critical); }
  .bar-high { background: var(--serious); }
  .bar-medium { background: var(--warning); }
  .bar-low { background: var(--good); }
  .bar-accent { background: var(--accent); }
  .bar-value { font-family: "IBM Plex Mono", monospace; font-size: 13.5px; text-align: right; color: var(--ink); }
  .bar-value-sub { font-size: 10.5px; color: var(--ink-muted); }

  /* chips */
  .chip {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 12px; font-weight: 600; letter-spacing: 0.02em;
    padding: 3px 9px 3px 6px; border-radius: 20px; white-space: nowrap;
    background: var(--surface-2); color: var(--ink-soft);
  }
  .chip .dot { width: 7px; height: 7px; border-radius: 50%; flex: none; }
  .chip-critical .dot { background: var(--critical); } .chip-critical { background: var(--critical-bg); color: var(--critical); }
  .chip-high .dot { background: var(--serious); } .chip-high { background: var(--serious-bg); color: var(--serious); }
  .chip-medium .dot { background: var(--warning); } .chip-medium { background: var(--warning-bg); color: var(--warning); }
  .chip-low .dot { background: var(--good); } .chip-low { background: var(--good-bg); color: var(--good); }
  .chip-conf-verified .dot { background: var(--good); } .chip-conf-verified { background: var(--good-bg); color: var(--good); }
  .chip-conf-partial .dot { background: var(--warning); } .chip-conf-partial { background: var(--warning-bg); color: var(--warning); }
  .chip-conf-thin .dot { background: var(--critical); } .chip-conf-thin { background: var(--critical-bg); color: var(--critical); }

  /* threat vectors */
  .vector-list { display: grid; gap: 14px; }
  .vector-card { background: var(--surface); border: 1px solid var(--line); border-left: 4px solid var(--line-strong); border-radius: var(--radius); padding: 20px 22px; box-shadow: var(--shadow-sm); }
  .vector-critical { border-left-color: var(--critical); }
  .vector-high { border-left-color: var(--serious); }
  .vector-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px; }
  .vector-head h3 { font-size: 17.5px; }
  .vector-summary { color: var(--ink-soft); font-size: 15px; margin: 6px 0 12px; }
  .vector-examples { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
  .ex-chip { font-size: 12.5px; padding: 3px 9px; border-radius: 5px; background: var(--surface-2); color: var(--ink-soft); }
  .vector-exposure { font-size: 13.5px; color: var(--ink-muted); padding-top: 10px; border-top: 1px dashed var(--line); }

  /* spotlight (critical) */
  .spotlight-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .spotlight-card { background: var(--surface); border: 1px solid var(--line); border-top: 3px solid var(--critical); border-radius: var(--radius); padding: 20px; box-shadow: var(--shadow-sm); }
  .spotlight-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px; }
  .spotlight-head h3 { font-size: 17px; }
  .spotlight-meta { font-size: 12.5px; color: var(--ink-muted); margin-bottom: 10px; }
  .spotlight-card p { font-size: 14.5px; color: var(--ink-soft); margin: 8px 0 0; }
  .spotlight-why { padding-top: 10px; margin-top: 10px !important; border-top: 1px dashed var(--line); }

  /* high threat table */
  .table-wrap { overflow-x: auto; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow-sm); }
  table.htable { width: 100%; border-collapse: collapse; font-size: 14px; }
  table.htable th { text-align: left; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-muted); padding: 12px 16px; border-bottom: 1px solid var(--line-strong); background: var(--surface-2); position: sticky; top: 48px; }
  table.htable td { padding: 11px 16px; border-bottom: 1px solid var(--line); vertical-align: top; color: var(--ink-soft); }
  table.htable tr:last-child td { border-bottom: none; }
  table.htable td.t-name { color: var(--ink); font-weight: 600; white-space: nowrap; }

  /* competitor index */
  .idx-group { margin-bottom: 26px; }
  .idx-group h4 { font-size: 14.5px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-strong); padding-bottom: 8px; border-bottom: 1px solid var(--line-strong); margin-bottom: 4px; display: flex; align-items: baseline; gap: 8px; }
  .idx-count { font-family: "IBM Plex Mono", monospace; font-size: 12px; color: var(--ink-muted); font-weight: 400; }
  .idx-list { list-style: none; margin: 0; padding: 0; }
  .idx-row { display: grid; grid-template-columns: 10px 200px 150px 1fr auto; align-items: center; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--line); font-size: 13.8px; }
  .idx-row:last-child { border-bottom: none; }
  .idx-dot { width: 8px; height: 8px; border-radius: 50%; }
  .dot-critical { background: var(--critical); } .dot-high { background: var(--serious); } .dot-medium { background: var(--warning); } .dot-low { background: var(--good); }
  .idx-name { font-weight: 600; color: var(--ink); }
  .idx-hq { color: var(--ink-muted); font-size: 12.5px; }
  .idx-what { color: var(--ink-soft); font-size: 13.5px; }

  /* recommendations */
  .rec-list { display: grid; gap: 14px; }
  .rec-card { background: var(--surface); border: 1px solid var(--line); border-left: 4px solid var(--accent); border-radius: var(--radius); padding: 20px 22px; box-shadow: var(--shadow-sm); }
  .rec-critical { border-left-color: var(--critical); }
  .rec-high { border-left-color: var(--serious); }
  .rec-medium { border-left-color: var(--warning); }
  .rec-head { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 10px; }
  .rec-head h3 { font-size: 16.5px; }
  .rec-card ul { margin: 0; padding-left: 20px; color: var(--ink-soft); font-size: 14.5px; }
  .rec-card li { margin-bottom: 6px; }

  /* brand highlights */
  .brand-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 14px; }
  .brand-card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 18px 20px; box-shadow: var(--shadow-sm); }
  .brand-card h4 { font-size: 15.5px; }
  .brand-focus { font-size: 12.5px; color: var(--ink-muted); margin: 3px 0 12px; }
  .brand-action { font-size: 13.5px; color: var(--ink-soft); margin-bottom: 8px; }
  .action-type { display: inline-block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--accent-strong); margin-right: 6px; }

  /* out of scope */
  .oos-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .oos-card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 20px 22px; box-shadow: var(--shadow-sm); }
  .oos-card h3 { font-size: 16px; }
  .oos-relevance { font-style: italic; color: var(--ink-muted); font-size: 13.5px; margin: 6px 0 12px; }
  .oos-card div { font-size: 14px; color: var(--ink-soft); margin-bottom: 6px; line-height: 1.5; }

  /* watchlist */
  .watch-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
  .watch-item { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 13px 16px; font-size: 14.5px; color: var(--ink-soft); border-left: 3px solid var(--line-strong); }
  .watch-resolved { border-left-color: var(--good); }
  .watch-resolved::before { content: "Resolved · "; color: var(--good); font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; }

  footer.doc-footer {
    margin-top: 64px; padding-top: 24px; border-top: 1px solid var(--line);
    font-size: 13px; color: var(--ink-muted);
  }

  @media (max-width: 880px) {
    .kpi-grid { grid-template-columns: repeat(3, 1fr); }
    .chart-grid, .spotlight-grid, .oos-grid { grid-template-columns: 1fr; }
    .idx-row { grid-template-columns: 8px 1fr; grid-template-areas: "dot name" ". hq" ". what" ". chip"; row-gap: 3px; }
    .idx-hq, .idx-what, .idx-row .chip { grid-column: 2; }
  }
  @media print {
    nav.jump { display: none; }
    header.masthead { background: var(--accent) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
</style>
</head>
<body>

<header class="masthead">
  <div class="inner">
    <div class="eyebrow">Competitive Intelligence &middot; Text &amp; Infographic Edition</div>
    <h1>${esc(d.meta.title)}</h1>
    <div class="sub">${esc(d.meta.subtitle)} — a condensed, non-interactive briefing covering the same dataset as the full explorer dashboard, built for reading, printing, and sharing on platforms that can't run the interactive version.</div>
    <div class="meta">
      <span>Revision ${esc(d.meta.revision)}</span>
      <span>&middot;</span>
      <span>${esc(d.meta.date)}</span>
      <span>&middot;</span>
      <span>${esc(d.meta.scope)}</span>
    </div>
  </div>
</header>

<nav class="jump">
  <div class="inner">
    <a href="#overview">Overview</a>
    <a href="#vectors">Threat Vectors</a>
    <a href="#exposure">Brand Exposure</a>
    <a href="#top-threats">Top Threats</a>
    <a href="#index">Competitor Index</a>
    <a href="#recommendations">Recommendations</a>
    <a href="#brand-actions">By Brand</a>
    <a href="#out-of-scope">Out of Scope</a>
    <a href="#watchlist">Watchlist</a>
  </div>
</nav>

<div class="wrap">

  <section id="overview">
    <div class="kpi-grid">${kpiHtml}</div>
  </section>

  <section id="charts">
    <div class="chart-grid">
      <div class="chart-card">
        <h3>Competitors by threat level</h3>
        ${threatChart}
      </div>
      <div class="chart-card">
        <h3>Competitors by category</h3>
        ${catChart}
      </div>
    </div>
  </section>

  <section id="vectors">
    <div class="section-head">
      <h2>Five threat vectors</h2>
      <p>The structural patterns behind the individual competitors — where they cut across categories and compound.</p>
    </div>
    <div class="vector-list">${threatVectors}</div>
  </section>

  <section id="exposure">
    <div class="section-head">
      <h2>Competitor-to-brand exposure</h2>
      <p>Count of primary competitors named against each URUS operating company. A brand with a long bar has the most crowded field.</p>
    </div>
    <div class="chart-card">${brandChart}</div>
  </section>

  <section id="top-threats">
    <div class="section-head">
      <h2>Top threats to watch</h2>
      <p>The ${criticals.length} competitors rated critical, in full, followed by all ${highs.length} rated high in condensed form.</p>
    </div>
    <div class="spotlight-grid">${criticalCards}</div>
    <div class="table-wrap" style="margin-top:18px">
      <table class="htable">
        <thead><tr><th>Company</th><th>Category</th><th>What they do</th><th>Sourcing</th></tr></thead>
        <tbody>${highRows}</tbody>
      </table>
    </div>
  </section>

  <section id="index">
    <div class="section-head">
      <h2>Full competitor index</h2>
      <p>All ${d.competitors.length} tracked competitors, grouped by category and ordered by threat level within each group.</p>
    </div>
    ${indexSections}
  </section>

  <section id="recommendations">
    <div class="section-head">
      <h2>Strategic recommendations</h2>
      <p>URUS-level priorities from the landscape analysis, numbered in the order they appear in the source document.</p>
    </div>
    <div class="rec-list">${recs}</div>
  </section>

  <section id="brand-actions">
    <div class="section-head">
      <h2>By URUS brand</h2>
      <p>The lead defensive and offensive move recommended for each brand. Full detail lives in the interactive dashboard.</p>
    </div>
    <div class="brand-grid">${brandHighlights}</div>
  </section>

  <section id="out-of-scope">
    <div class="section-head">
      <h2>Deliberately out of scope</h2>
      <p>Watched but not treated as primary competitors today, with the condition that would promote each one.</p>
    </div>
    <div class="oos-grid">${oosCards}</div>
  </section>

  <section id="watchlist">
    <div class="section-head">
      <h2>12-month watchlist</h2>
      <p>Signals that would shift the picture materially if they resolve. Items already resolved are marked.</p>
    </div>
    <ul class="watch-list">${watchItems}</ul>
  </section>

  <footer class="doc-footer">
    Source dataset: <span class="mono">data.json</span>, Revision ${esc(d.meta.revision)} (${esc(d.meta.date)}). Source document: ${esc(d.meta.source_doc)}. This is a condensed text/infographic companion to the interactive competitor explorer — figures tagged as company claims in the source dataset remain unverified estimates unless otherwise noted.
  </footer>

</div>

</body>
</html>`;

  fs.writeFileSync(BRIEFING_OUT, html);
  console.log('Wrote', path.basename(BRIEFING_OUT), '(' + html.length + ' bytes)');
}

const mode = process.argv[2] || 'all';
const data = loadData();

if (mode === 'js' || mode === 'all') buildJsWrapper(data);
if (mode === 'artifact' || mode === 'all') buildArtifact(data);
if (mode === 'briefing' || mode === 'all') buildBriefing(data);
