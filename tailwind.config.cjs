/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            textColor: {
                DEFAULT: 'rgba(var(--color-text), <alpha-value>)',
                subtext: {
                    1: 'rgba(var(--color-subtext1), <alpha-value>)',
                    0: 'rgba(var(--color-subtext0), <alpha-value>)'
                },
                basic: 'rgba(var(--color-base), <alpha-value>)'
            }
        },
        colors: {
            inherit: 'inherit',
            current: 'currentColor',
            transparent: 'transparent',
            rosewater: 'rgba(var(--color-rosewater), <alpha-value>)',
            flamingo: 'rgba(var(--color-flamingo), <alpha-value>)',
            pink: 'rgba(var(--color-pink), <alpha-value>)',
            mauve: 'rgba(var(--color-mauve), <alpha-value>)',
            red: 'rgba(var(--color-red), <alpha-value>)',
            maroon: 'rgba(var(--color-maroon), <alpha-value>)',
            peach: 'rgba(var(--color-peach), <alpha-value>)',
            yellow: 'rgba(var(--color-yellow), <alpha-value>)',
            green: 'rgba(var(--color-green), <alpha-value>)',
            teal: 'rgba(var(--color-teal), <alpha-value>)',
            sky: 'rgba(var(--color-sky), <alpha-value>)',
            sapphire: 'rgba(var(--color-sapphire), <alpha-value>)',
            blue: 'rgba(var(--color-blue), <alpha-value>)',
            lavender: 'rgba(var(--color-lavender), <alpha-value>)',
            overlay: {
                2: 'rgba(var(--color-overlay2), <alpha-value>)',
                1: 'rgba(var(--color-overlay1), <alpha-value>)',
                0: 'rgba(var(--color-overlay0), <alpha-value>)'
            },
            surface: {
                2: 'rgba(var(--color-surface2), <alpha-value>)',
                1: 'rgba(var(--color-surface1), <alpha-value>)',
                0: 'rgba(var(--color-surface0), <alpha-value>)'
            },
            base: 'rgba(var(--color-base), <alpha-value>)',
            mantle: 'rgba(var(--color-mantle), <alpha-value>)',
            crust: 'rgba(var(--color-crust), <alpha-value>)'
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
