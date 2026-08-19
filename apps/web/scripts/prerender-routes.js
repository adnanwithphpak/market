#!/usr/bin/env node

// GitHub Pages has no server-side rewrite, so any URL beyond the built
// index.html (e.g. /travel-guest-post) has no real file and gets served with
// a genuine HTTP 404 status via the 404.html SPA fallback. Googlebot reads
// that 404 status and refuses to index the page, even though the JS bundle
// would render it correctly for a human visitor. Fix: copy the built
// index.html into a real directory per route so each URL resolves to an
// actual 200 response, while the client router still takes over on load.
//
// This script also extends llms.txt (started by tools/generate-llms.js) with
// the guest-post landing pages and blog posts, since those pages use dynamic
// Helmet titles that the static-title regex in generate-llms.js can't read.

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const distDir = path.join(process.cwd(), '../../dist/apps/web');
const indexHtmlPath = path.join(distDir, 'index.html');
const llmsTxtPath = path.join(distDir, 'llms.txt');
const SITE_URL = 'https://www.highdaguestposts.com';

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

async function getLandingPages() {
	const filePath = path.join(process.cwd(), 'src/content/landingPages.js');
	if (!fs.existsSync(filePath)) return [];

	try {
		const mod = await import(pathToFileURL(filePath).href);
		return mod.landingPages.map((page) => ({
			slug: page.slug,
			title: page.title,
			description: page.description,
		}));
	} catch (error) {
		console.warn(`prerender-routes: could not import landingPages.js (${error.message})`);
		return [];
	}
}

function getBlogPosts() {
	const blogDir = path.join(process.cwd(), 'src/content/blog');
	const indexPath = path.join(blogDir, 'index.js');
	if (!fs.existsSync(indexPath)) return [];

	const indexContent = fs.readFileSync(indexPath, 'utf-8');
	const files = [...indexContent.matchAll(/from\s+['"]\.\/([^'"]+)['"]/g)].map((match) => match[1]);

	return files
		.map((file) => {
			const filePath = path.join(blogDir, file);
			if (!fs.existsSync(filePath)) return null;
			const content = fs.readFileSync(filePath, 'utf-8');
			const slug = content.match(/slug:\s*['"]([^'"]+)['"]/)?.[1];
			const title = content.match(/title:\s*['"]([^'"]+)['"]/)?.[1];
			const description = content.match(/description:\s*['"]([^'"]+)['"]/)?.[1];
			if (!slug) return null;
			return { slug, title: title || slug, description: description || '' };
		})
		.filter(Boolean);
}

function prerenderRoutes(routes) {
	if (!fs.existsSync(indexHtmlPath)) {
		console.error(`prerender-routes: built index.html not found at ${indexHtmlPath}`);
		process.exit(1);
	}

	const html = fs.readFileSync(indexHtmlPath, 'utf-8');

	for (const route of routes) {
		const routeDir = path.join(distDir, route.replace(/^\//, ''));
		fs.mkdirSync(routeDir, { recursive: true });
		fs.writeFileSync(path.join(routeDir, 'index.html'), html);
	}

	console.log(`prerender-routes: wrote static index.html for ${routes.length} routes`);
}

function appendLlmsTxt(landingPages, blogPosts) {
	try {
		let content = fs.existsSync(llmsTxtPath)
			? fs.readFileSync(llmsTxtPath, 'utf-8')
			: '## Pages\n';

		if (landingPages.length) {
			content += '\n\n## Guest Post & Link Building Services\n';
			content += landingPages
				.map((page) => `- [${page.title}](${SITE_URL}/${page.slug}/): ${page.description}`)
				.join('\n');
		}

		if (blogPosts.length) {
			content += '\n\n## Blog\n';
			content += blogPosts
				.map((post) => `- [${post.title}](${SITE_URL}/${post.slug}/): ${post.description}`)
				.join('\n');
		}

		fs.writeFileSync(llmsTxtPath, `${content}\n`);
		console.log(`prerender-routes: extended llms.txt with ${landingPages.length} landing pages and ${blogPosts.length} blog posts`);
	} catch (error) {
		console.warn(`prerender-routes: skipped llms.txt extension (${error.message})`);
	}
}

async function main() {
	const landingPages = await getLandingPages();
	const blogPosts = getBlogPosts();

	const routes = [
		...STATIC_ROUTES,
		...landingPages.map((page) => `/${page.slug}`),
		...blogPosts.map((post) => `/${post.slug}`),
	];

	prerenderRoutes(routes);
	appendLlmsTxt(landingPages, blogPosts);
}

main();
