#!/usr/bin/env node
/*
 * Build script for the URUS Competitor Landscape dashboard.
 *
 * data.json is the only file anyone should hand-edit. This script regenerates
 * the two derived outputs from it:
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
 *   node build.js all        -> both of the above (default if no arg given)
 */
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const DATA_JSON = path.join(DIR, 'data.json');
const JS_WRAPPER = path.join(DIR, 'urus_dashboard_data_v6.js');
const HTML_TEMPLATE = path.join(DIR, 'URUS_Competitor_Dashboard_v6.html');
const ARTIFACT_OUT = path.join(DIR, 'urus_dashboard_artifact.html');

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

const mode = process.argv[2] || 'all';
const data = loadData();

if (mode === 'js' || mode === 'all') buildJsWrapper(data);
if (mode === 'artifact' || mode === 'all') buildArtifact(data);
