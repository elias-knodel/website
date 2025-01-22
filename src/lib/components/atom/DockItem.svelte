<script lang="ts">
    import type { DockItem } from '$lib/components/atom/DockItem';
    import { page } from '$app/state';

    export const { item }: DockItem = $props();

    const routePath = $derived(page.url.pathname);

    const isActive = $derived(routePath === item.id);

    const Icon = $derived(item.icon);
</script>

<a href="{item.id}" target={item.category === 'socials' ? '_blank' : ''}>
    <div class="rounded-lg h-16 w-16 flex justify-center items-center flex-col gap-1"
         class:active={isActive}>
        <div
            class="h-10 w-10 {item.category === 'socials' ? 'm' : 'mt-1'} {item.color} rounded-lg flex items-center justify-center">
            <span><Icon size="32" /></span>
            <!--    <tooltip>{title}</tooltip>-->
        </div>
        {#if item.category !== 'socials'}
            <div class="h-2 w-2 bg-gray-700 rounded-full flex items-center justify-center"></div>
        {/if}
    </div>
</a>

<style>
    .active {
        @apply bg-slate-900 duration-300 ease-out;
    }
</style>
