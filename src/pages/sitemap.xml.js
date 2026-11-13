import { business } from '../data/site.js';
import { sitemapPaths } from '../data/sitemap.js';

export function GET() {
  const urls = sitemapPaths
    .map((pathname) => {
      const loc = new URL(pathname, business.url).href;
      return `  <url><loc>${loc}</loc></url>`;
    })
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
