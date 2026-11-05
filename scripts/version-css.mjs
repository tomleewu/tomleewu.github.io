import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

const css = await readFile(new URL('../static/dist.css', import.meta.url));
const version = createHash('sha256').update(css).digest('hex').slice(0, 12);
const pagePath = new URL('../index.html', import.meta.url);
const page = await readFile(pagePath, 'utf8');
const stylesheetLink = /href="static\/dist\.css(?:\?v=[a-f0-9]+)?"/g;

if ([...page.matchAll(stylesheetLink)].length !== 1) {
  throw new Error('Expected exactly one link to static/dist.css in index.html');
}

const updated = page.replace(stylesheetLink, `href="static/dist.css?v=${version}"`);
if (updated !== page) await writeFile(pagePath, updated);
console.log(`Stylesheet version: ${version}`);
