import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
    plugins: [
        tailwindcss(),
        enhancedImages(),
        sveltekit(),
        paraglideVitePlugin({
            project: './project.inlang',
            outdir: './src/lib/paraglide'
        })
    ]
});
