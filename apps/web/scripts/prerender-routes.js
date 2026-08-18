#!/usr/bin/env node

// GitHub Pages has no server-side rewrite, so any URL beyond the built
// index.html (e.g. /travel-guest-post) has no real file and gets served with
// a genuine HTTP 404 status via the 404.html SPA fallback. Googlebot reads
// that 404 status and refuses to index the page, even though the JS bundle
// would render it correctly for a human visitor. Fix: copy the built
// index.html into a real directory per route so each URL resolves to an
// actual 200 response, while the client router still takes over on load.

import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), '../../dist/apps/web');
const indexHtmlPath = path.join(distDir, 'index.html');

const STATIC_ROUTES = [
	'/buy-guest-posts',
	'/blogger-outreach',
	'/link-insertion',
	'/pricing',
	'/submit-guest-post',
	'/about',
	'/contact',
	'/blog',
	'/privacy-policy',
	'/terms-of-services',
	'/case-study',
];

function extractSlugs(content, pattern) {
	return [...content.matchAll(pattern)].map((match) => match[1]);
}

function getLandingPageRoutes() {
	const filePath = path.join(process.cwd(), 'src/content/landingPages.js');
	if (!fs.existsSync(filePath)) return [];

	const content = fs.readFileSync(filePath, 'utf-8');
	const slugs = extractSlugs(content, /(?:nichePage|servicePage)\(\s*['"]([^'"]+)['"]/g);

	return slugs.map((slug) => `/${slug}`);
}

function getBlogRoutes() {
	const blogDir = path.join(process.cwd(), 'src/content/blog');
	const indexPath = path.join(blogDir, 'index.js');
	if (!fs.existsSync(indexPath)) return [];

	const indexContent = fs.readFileSync(indexPath, 'utf-8');
	const files = extractSlugs(indexContent, /from\s+['"]\.\/([^'"]+)['"]/g);

	const slugs = files
		.map((file) => {
			const filePath = path.join(blogDir, file);
			if (!fs.existsSync(filePath)) return null;
			const content = fs.readFileSync(filePath, 'utf-8');
			const match = content.match(/slug:\s*['"]([^'"]+)['"]/);
			return match ? match[1] : null;
		})
		.filter(Boolean);

	return slugs.map((slug) => `/blog/${slug}`);
}

function prerenderRoutes() {
	if (!fs.existsSync(indexHtmlPath)) {
		console.error(`prerender-routes: built index.html not found at ${indexHtmlPath}`);
		process.exit(1);
	}

	const html = fs.readFileSync(indexHtmlPath, 'utf-8');
	const routes = [
		...STATIC_ROUTES,
		...getLandingPageRoutes(),
		...getBlogRoutes(),
	];

	let count = 0;
	for (const route of routes) {
		const routeDir = path.join(distDir, route.replace(/^\//, ''));
		fs.mkdirSync(routeDir, { recursive: true });
		fs.writeFileSync(path.join(routeDir, 'index.html'), html);
		count += 1;
	}

	console.log(`prerender-routes: wrote static index.html for ${count} routes`);
}

prerenderRoutes();
