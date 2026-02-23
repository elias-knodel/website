<script lang="ts">
    import Dialog from '$lib/components/map/Dialog.svelte';
    import Draggable from '$lib/components/map/Draggable.svelte';
    import JapanMap from '$lib/components/map/JapanMap.svelte';
    import { mapState } from '$lib/components/map/Map.svelte.ts';

    let dialogLeft = $state(100);
    let dialogTop = $state(100);
</script>

<div class="mx-auto max-w-4xl">
    {#if mapState.data.id}
        <Draggable bind:left={dialogLeft} bind:top={dialogTop}>
            <Dialog id={mapState.data.id} />
        </Draggable>
    {/if}

    <JapanMap />
</div>
