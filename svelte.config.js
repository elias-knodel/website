import adapter from 'svelte-adapter-bun';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
        paths: {
            // Bake the CDN origin into all /_app/ asset URLs at build time.
            // Pass via: docker build --build-arg PUBLIC_CDN_URL=https://cdn.yourdomain.com
            assets: process.env.PUBLIC_CDN_URL ?? ''
        }
    }
};

export default config;
