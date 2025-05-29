<script>
    import Dialog from '$lib/components/map/Dialog.svelte';
    import Draggable from '$lib/components/map/Draggable.svelte';
    import JapanMap from '$lib/components/map/JapanMap.svelte';
    import { mapState } from '$lib/components/map/Map.svelte.ts';
</script>

<div class="mx-auto max-w-4xl">
    {#if mapState.data.id}
        <Draggable>
            <Dialog bind:title={mapState.data.title} />
        </Draggable>
    {/if}

    <JapanMap />
</div>
