import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const redirectFile = path.resolve('public/_redirects');

const extraPaths = [
  '/treatments-sports-massage-cardiff-injury-prevention-rehabilitation',
  '/',
  '/home',
  '/home/',
  '/home-sports-massage-cardiff-injury-recovery-rehabilitation',
  '/home-sports-massage-cardiff-injury-recovery-rehabilitation/',
];

const homeRedirects = [
  '/home',
  '/home/',
  '/home-sports-massage-cardiff-injury-recovery-rehabilitation',
  '/home-sports-massage-cardiff-injury-recovery-rehabilitation/',
];

function parseRedirects(text) {
  const rules = [];
  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const parts = trimmed.split(/\s+/);
    if (parts.length < 3) continue;
    const [from, to, status] = parts;
    rules.push({ from, to, status: Number(status) });
  }
  return rules;
}

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function fileFor(pathname) {
  const clean = pathname.split('#')[0].split('?')[0];
  if (clean === '/' || clean === '') return path.join(root, 'index.html');
  return path.join(root, `${clean.replace(/^\//, '')}.html`);
}

async function exists(file) {
  try {
    await readFile(file);
    return true;
  } catch {
    return false;
  }
}

async function idsIn(file) {
  const html = await readFile(file, 'utf8');
  return new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
}

const redirects = parseRedirects(await readFile(redirectFile, 'utf8'));
const redirectFrom = new Map(redirects.map((rule) => [rule.from, rule]));

let sitemap = [];
try {
  const xml = await fetch('https://www.sporttherapycymru.com/sitemap.xml').then((response) => response.text());
  sitemap = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => new URL(match[1]))
    .filter((url) => url.hostname.endsWith('sporttherapycymru.com'))
    .map((url) => url.pathname);
} catch (error) {
  console.error('Could not read the live sitemap:', error.message);
  process.exit(1);
}

const paths = [...new Set([...sitemap, ...extraPaths])];
const failures = [];

for (const pathname of homeRedirects) {
  const rule = redirectFrom.get(pathname);
  if (!rule) {
    failures.push(`${pathname} has no redirect`);
    continue;
  }
  if (rule.status !== 301 || rule.to.split('#')[0] !== '/') {
    failures.push(`${pathname} must 301 to / in one hop, got ${rule.status} ${rule.to}`);
  }
}

for (const pathname of paths) {
  if (await exists(fileFor(pathname))) continue;
  const rule = redirectFrom.get(pathname);
  if (!rule) {
    failures.push(`${pathname} has no page and no redirect`);
    continue;
  }
  const targetPath = rule.to.split('#')[0] || '/';
  const hash = rule.to.includes('#') ? rule.to.split('#')[1] : '';
  if (redirectFrom.has(targetPath) && targetPath !== pathname) {
    failures.push(`${pathname} redirects to ${rule.to}, which is another redirect`);
    continue;
  }
  const targetFile = fileFor(targetPath);
  if (!(await exists(targetFile))) {
    failures.push(`${pathname} redirects to missing ${rule.to}`);
    continue;
  }
  if (hash) {
    const ids = await idsIn(targetFile);
    if (!ids.has(hash)) failures.push(`${pathname} redirects to ${rule.to}, but #${hash} is missing`);
  }
}

const files = await htmlFiles(root);
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('/_astro/') ||
      href.startsWith('/fonts/') ||
      href.startsWith('/favicon') ||
      /\.(css|js|png|jpe?g|webp|avif|gif|svg|ico|woff2?)($|\?)/.test(href)
    ) {
      continue;
    }
    if (href.startsWith('#')) {
      const ids = await idsIn(file);
      if (!ids.has(href.slice(1))) failures.push(`${path.relative(root, file)} links to missing ${href}`);
      continue;
    }
    if (!href.startsWith('/')) continue;
    const url = new URL(href, 'https://www.sporttherapycymru.com');
    if (await exists(fileFor(url.pathname))) {
      if (url.hash) {
        const ids = await idsIn(fileFor(url.pathname));
        if (!ids.has(url.hash.slice(1))) failures.push(`${path.relative(root, file)} links to missing ${href}`);
      }
      continue;
    }
    const rule = redirectFrom.get(url.pathname);
    if (!rule) {
      failures.push(`${path.relative(root, file)} links to ${href}, which 404s`);
      continue;
    }
    const targetPath = rule.to.split('#')[0] || '/';
    if (!(await exists(fileFor(targetPath)))) failures.push(`${path.relative(root, file)} links to ${href}, whose redirect target is missing`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Checked ${paths.length} sitemap URLs and internal links in ${files.length} pages. One hop, no 404s.`);
