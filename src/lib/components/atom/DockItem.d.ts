import type { SvelteComponent } from 'svelte';

interface DockItem {
    id: string;
    icon: SvelteComponent;
    title: string;
    color: string;
    category: string;
}

export {
    DockItem
}
