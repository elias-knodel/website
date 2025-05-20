<script>
    import { twMerge } from 'tailwind-merge';

    let { children, classes } = $props();

    const defaultClasses =
        'transition-all duration-250 hover:scale-105 isolate rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-4 w-[250px] h-[250px]';
    const mergedClasses = twMerge(defaultClasses, classes);
</script>

<div class={mergedClasses}>
    {@render children()}
</div>
