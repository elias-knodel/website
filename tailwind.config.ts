import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            backgroundImage: {
                'custom-image': 'url("/background.JPEG")'
            },
            filter: {
                'blur-grayscale': 'blur(5px) grayscale(100%)'
            }
        }
    },

    plugins: []
} satisfies Config;
