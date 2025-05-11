import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');

// Base URL for the site
const baseUrl = 'https://kindamedical.com'; // Update with your production URL

// Routes to include in sitemap
const routes = [
    '/',
    '/about',
    '/services',
    '/facilities',
    '/contact',
];

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

async function generateSitemap() {
    console.log('Generating sitemap.xml...');

    if (!fs.existsSync(distPath)) {
        console.error('Dist directory does not exist. Run "npm run build" first.');
        process.exit(1);
    }

    // Create the sitemap content
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add each route to the sitemap
    for (const route of routes) {
        const url = `${baseUrl}${route}`;
        sitemap += '  <url>\n';
        sitemap += `    <loc>${url}</loc>\n`;
        sitemap += `    <lastmod>${today}</lastmod>\n`;
        sitemap += '    <changefreq>weekly</changefreq>\n';
        sitemap += '    <priority>0.8</priority>\n';
        sitemap += '  </url>\n';
    }

    sitemap += '</urlset>';

    // Write the sitemap file
    const sitemapPath = path.join(distPath, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);

    console.log(`Sitemap generated at: ${sitemapPath}`);
}

generateSitemap().catch(err => {
    console.error('Failed to generate sitemap:', err);
    process.exit(1);
}); 