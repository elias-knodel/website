<script lang="ts">
    import DockItem from '$lib/components/atom/DockItem.svelte';
    import { getNavigationContext } from '$lib/state/Navigation.svelte';

    let navItems = getNavigationContext();
    let items = navItems.data;
</script>

<div
    class="backdrop-blur-sm bg-white/30 text-white rounded-lg sm:px-10 p-1 flex flex-row sm:gap-4 justify-center shadow-2xl">
    {#each items as item, index (item.id)}
        {#if index > 0 && items[index - 1].category !== item.category}
            <div class="w-[2px] rounded-full h-16 bg-white/30 mx-1"></div>
        {/if}
        <div>
            <DockItem {item} />
        </div>
    {/each}
</div>
