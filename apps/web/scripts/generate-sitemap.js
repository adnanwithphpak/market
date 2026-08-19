import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.highdaguestposts.com';

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/buy-guest-posts', priority: '0.9', changefreq: 'monthly' },
  { path: '/blogger-outreach', priority: '0.9', changefreq: 'monthly' },
  { path: '/link-insertion', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '/submit-guest-post', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-services', priority: '0.3', changefreq: 'yearly' },
  { path: '/case-study', priority: '0.7', changefreq: 'monthly' }
];

async function getLandingPages() {
  const filePath = path.join(__dirname, '../src/content/landingPages.js');
  if (!fs.existsSync(filePath)) return [];

  const mod = await import(pathToFileURL(filePath).href);
  return mod.landingPages.map(({ slug }) => ({
    path: `/${slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));
}

function getBlogPosts() {
  const blogDir = path.join(__dirname, '../src/content/blog');
  if (!fs.existsSync(blogDir)) return [];
  
  const indexPath = path.join(blogDir, 'index.js');
  if (!fs.existsSync(indexPath)) return [];

  const indexContent = fs.readFileSync(indexPath, 'utf-8');
  
  const importMatches = [...indexContent.matchAll(/import\s+\{\s*post\s+as\s+\w+\s*\}\s+from\s+['"]\.\/([^'"]+)['"]/g)];
  const files = importMatches.map(match => match[1]);

  return files.map(file => {
    const filePath = path.join(blogDir, file);
    if (!fs.existsSync(filePath)) return null;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
    const updatedAtMatch = content.match(/updatedAt:\s*['"]([^'"]+)['"]/);

    if (slugMatch && updatedAtMatch) {
      return {
        slug: slugMatch[1],
        updatedAt: updatedAtMatch[1]
      };
    }
    return null;
  }).filter(Boolean);
}

async function generateSitemap() {
  const blogPosts = getBlogPosts();
  const landingPages = await getLandingPages();
  const pageRoutes = [...staticRoutes, ...landingPages];
  
  console.log(`Detected ${blogPosts.length} blog posts from src/content/blog/index.js`);

  // 1. Generate page-sitemap.xml
  let pageSitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  pageSitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  pageRoutes.forEach(route => {
    pageSitemap += `  <url>\n`;
    const pathname = route.path === '/' ? '/' : `${route.path}/`;
    pageSitemap += `    <loc>${BASE_URL}${pathname}</loc>\n`;
    pageSitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    pageSitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    pageSitemap += `    <priority>${route.priority}</priority>\n`;
    pageSitemap += `  </url>\n`;
  });
  pageSitemap += `</urlset>`;

  // 2. Generate post-sitemap.xml
  let postSitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  postSitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  blogPosts.forEach(post => {
    postSitemap += `  <url>\n`;
    postSitemap += `    <loc>${BASE_URL}/blog/${post.slug}/</loc>\n`;
    postSitemap += `    <lastmod>${post.updatedAt}</lastmod>\n`;
    postSitemap += `    <changefreq>monthly</changefreq>\n`;
    postSitemap += `    <priority>0.7</priority>\n`;
    postSitemap += `  </url>\n`;
  });
  postSitemap += `</urlset>`;

  // 3. Generate sitemap.xml (Sitemap Index)
  let sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapIndex += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  sitemapIndex += `  <sitemap>\n`;
  sitemapIndex += `    <loc>${BASE_URL}/page-sitemap.xml</loc>\n`;
  sitemapIndex += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  sitemapIndex += `  </sitemap>\n`;
  sitemapIndex += `  <sitemap>\n`;
  sitemapIndex += `    <loc>${BASE_URL}/post-sitemap.xml</loc>\n`;
  sitemapIndex += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  sitemapIndex += `  </sitemap>\n`;
  sitemapIndex += `</sitemapindex>`;

  // Write directly to the public folder
  const publicDir = path.join(__dirname, '../public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const pageSitemapPath = path.join(publicDir, 'page-sitemap.xml');
  const postSitemapPath = path.join(publicDir, 'post-sitemap.xml');
  const sitemapIndexPath = path.join(publicDir, 'sitemap.xml');

  fs.writeFileSync(pageSitemapPath, pageSitemap);
  fs.writeFileSync(postSitemapPath, postSitemap);
  fs.writeFileSync(sitemapIndexPath, sitemapIndex);

  console.log(`Generated sitemap.xml at: apps/web/public/sitemap.xml`);
  console.log(`Generated page-sitemap.xml at: apps/web/public/page-sitemap.xml`);
  console.log(`Generated post-sitemap.xml at: apps/web/public/post-sitemap.xml`);
  console.log(`Total pages in page-sitemap.xml: ${pageRoutes.length}`);
  console.log(`Total blog posts in post-sitemap.xml: ${blogPosts.length}`);

  // Verification Logging
  const printLines = (filePath, name) => {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n').slice(0, 30).join('\n');
      console.log(`\n--- First 30 lines of ${name} ---\n${lines}\n-----------------------------------`);
    }
  };

  printLines(sitemapIndexPath, 'sitemap.xml');
  printLines(pageSitemapPath, 'page-sitemap.xml');
  printLines(postSitemapPath, 'post-sitemap.xml');

  console.log(`Verification: sitemap.xml contains 2 URLs (sitemaps)`);
  console.log(`Verification: page-sitemap.xml contains ${pageRoutes.length} pages`);
  console.log(`Verification: post-sitemap.xml contains ${blogPosts.length} blog posts`);
  
  if (blogPosts.length > 0) {
    console.log(`Sample blog URLs:`);
    blogPosts.slice(0, 3).forEach(post => {
      console.log(`- ${BASE_URL}/blog/${post.slug}/`);
    });
  }
}

generateSitemap().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
