import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.resolve(distPath, 'index.html');

// Routes to prerender
const routes = [
    '/',
    '/about',
    '/services',
    '/facilities',
    '/contact',
];

async function prerender() {
    console.log('Starting prerender process...');

    if (!fs.existsSync(distPath)) {
        console.error('Dist directory does not exist. Run "npm run build" first.');
        process.exit(1);
    }

    const indexHtml = fs.readFileSync(indexPath, 'utf8');

    // Create directories for each route
    for (const route of routes) {
        if (route === '/') continue; // Root already exists

        const routePath = path.join(distPath, route.substring(1));
        console.log(`Creating directory: ${routePath}`);

        if (!fs.existsSync(routePath)) {
            fs.mkdirSync(routePath, { recursive: true });
        }

        const htmlPath = path.join(routePath, 'index.html');
        console.log(`Writing file: ${htmlPath}`);
        fs.writeFileSync(htmlPath, indexHtml);
    }

    console.log('Prerender complete!');
}

prerender().catch(err => {
    console.error('Failed to prerender:', err);
    process.exit(1);
}); 