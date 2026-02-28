<script>
    import { twMerge } from 'tailwind-merge';

    let { children, classes } = $props();

    // let defaultClasses = 'transition-all duration-250 hover:shadow-black/60 hover:shadow-2xl isolate rounded-xl backdrop-blur-md bg-teal-heavy/70 shadow-lg ring-1 ring-white/5 p-4 w-[250px] h-[250px]';
    let defaultClasses =
        'transition-all duration-250 hover:shadow-black/60 hover:shadow-2xl isolate p-4 w-[250px] h-[250px]';
    defaultClasses += ' ';
    defaultClasses += 'bg-black/30 backdrop-blur-md rounded-xl border border-white/20';
    const mergedClasses = twMerge(defaultClasses, classes);
</script>

<div class={mergedClasses}>
    {@render children()}
</div>
