<script lang="ts">
    import Dialog from '$lib/components/map/Dialog.svelte';
    import Draggable from '$lib/components/map/Draggable.svelte';
    import JapanMap from '$lib/components/map/JapanMap.svelte';
    import { mapState } from '$lib/components/map/Map.svelte.ts';

    $effect(() => {
        mapState.savePosition();
    });
</script>

<div class="mx-auto max-w-7xl">
    {#if mapState.selected}
        <Draggable bind:left={mapState.dialogLeft} bind:top={mapState.dialogTop}>
            <Dialog id={mapState.selected.id} />
        </Draggable>
    {/if}

    <JapanMap />
</div>
