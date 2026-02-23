<script lang="ts">
    import { getPrefecture } from '$lib/data/japanPrefectures';
    import { mapState } from '$lib/components/map/Map.svelte.ts';

    interface DialogProps {
        id: string;
    }

    let { id }: DialogProps = $props();

    const prefecture = $derived(getPrefecture(id));
</script>

<section class="w-72 min-h-36 p-1">
    <div class="flex justify-between items-start mb-0.5">
        <div>
            <h2 class="font-bold text-lg">{prefecture?.name ?? id}</h2>
            <p class="text-sm text-gray-400">{prefecture?.nameJa ?? ''}</p>
        </div>
        <button
            onmousedown={(e) => e.stopPropagation()}
            onclick={() => mapState.clear()}
            class="ml-2 text-gray-400 hover:text-gray-700 text-xl leading-none cursor-pointer"
            aria-label="Close"
        >✕</button>
    </div>

    {#if prefecture}
        <dl class="text-sm space-y-1 mt-3">
            <div class="flex gap-2">
                <dt class="text-gray-400">Region</dt>
                <dd>{prefecture.region}</dd>
            </div>
            <div class="flex gap-2">
                <dt class="text-gray-400">Capital</dt>
                <dd>{prefecture.capital}</dd>
            </div>
        </dl>
    {/if}
</section>
