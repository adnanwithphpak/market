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

  // Generate one sitemap containing both regular pages and blog posts.
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  pageRoutes.forEach(route => {
    sitemap += `  <url>\n`;
    const pathname = route.path === '/' ? '/' : `${route.path}/`;
    sitemap += `    <loc>${BASE_URL}${pathname}</loc>\n`;
    sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += `  </url>\n`;
  });
  blogPosts.forEach(post => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${BASE_URL}/${post.slug}/</loc>\n`;
    sitemap += `    <lastmod>${post.updatedAt}</lastmod>\n`;
    sitemap += `    <changefreq>monthly</changefreq>\n`;
    sitemap += `    <priority>0.7</priority>\n`;
    sitemap += `  </url>\n`;
  });
  sitemap += `</urlset>`;

  // Write directly to the public folder
  const publicDir = path.join(__dirname, '../public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapIndexPath = path.join(publicDir, 'sitemap.xml');

  fs.writeFileSync(sitemapIndexPath, sitemap);

  for (const obsoleteFile of ['page-sitemap.xml', 'post-sitemap.xml']) {
    const obsoletePath = path.join(publicDir, obsoleteFile);
    if (fs.existsSync(obsoletePath)) fs.unlinkSync(obsoletePath);
  }

  console.log(`Generated sitemap.xml at: apps/web/public/sitemap.xml`);
  console.log(`Total pages: ${pageRoutes.length}`);
  console.log(`Total blog posts: ${blogPosts.length}`);

  // Verification Logging
  const printLines = (filePath, name) => {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n').slice(0, 30).join('\n');
      console.log(`\n--- First 30 lines of ${name} ---\n${lines}\n-----------------------------------`);
    }
  };

  printLines(sitemapIndexPath, 'sitemap.xml');

  console.log(`Verification: sitemap.xml contains ${pageRoutes.length + blogPosts.length} URLs`);
  
  if (blogPosts.length > 0) {
    console.log(`Sample blog URLs:`);
    blogPosts.slice(0, 3).forEach(post => {
      console.log(`- ${BASE_URL}/${post.slug}/`);
    });
  }
}

generateSitemap().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
