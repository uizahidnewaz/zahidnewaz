// app/sitemap.xml/route.js

export async function GET() {
  const urls = [
    {
      loc: 'https://zahidnewaz.vercel.app/',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 1.0,
    },
    {
      loc: 'https://zahidnewaz.vercel.app/about',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 1.0,
    },
    {
      loc: 'https://zahidnewaz.vercel.app/projects',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
