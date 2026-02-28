<script lang="ts">
    import { getPrefecture } from '$lib/data/japanPrefectures';
    import { mapState } from '$lib/components/map/Map.svelte.ts';

    interface DialogProps {
        id: string;
    }

    let { id }: DialogProps = $props();

    const prefecture = $derived(getPrefecture(id));
</script>

<section class="min-h-36 w-72 p-1">
    <div class="mb-0.5 flex items-start justify-between">
        <div>
            <h2 class="text-lg font-bold">{prefecture?.name ?? id}</h2>
            <p class="text-sm text-gray-400">{prefecture?.nameJa ?? ''}</p>
        </div>
        <button
            onmousedown={(e) => e.stopPropagation()}
            onclick={() => mapState.clear()}
            class="ml-2 cursor-pointer text-xl leading-none text-gray-400 hover:text-gray-700"
            aria-label="Close">✕</button
        >
    </div>

    {#if prefecture}
        <dl class="mt-3 space-y-1 text-sm">
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
