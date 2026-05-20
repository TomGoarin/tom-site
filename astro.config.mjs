// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// [À CONFIRMER] domaine final
const SITE_URL = 'https://tomgoarin.fr';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
