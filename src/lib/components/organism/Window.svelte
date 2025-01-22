<script lang="ts">
    let { children } = $props();
    import { Maximize2, Minus, X } from 'lucide-svelte';

    let isVisible = $state(true);

    $effect(() => {
        console.log('isVisible', isVisible);
    });

    function toggleVisibility() {
        isVisible = !isVisible;
    }
</script>

<div class="mx-4 my-2 shadow-xl max-h-[calc(100vh-14rem)]">
    <div class="window border border-gray-100 rounded-lg shadow-lg overflow-hidden">
        <!-- Window Status Bar-->
        <div class="header bg-gray-100 p-2 flex justify-between items-center border-b border-gray-300">
            <span>Window Title</span>
            <div>
                <button class="rounded-full p-1 close-button bg-green-600 border-none text-lg cursor-pointer"
                        onclick={toggleVisibility}>
                    <Maximize2 size="15" />
                </button>
                <button class="rounded-full p-1 close-button bg-yellow-600 border-none text-lg cursor-pointer"
                        onclick={toggleVisibility}>
                    <Minus size="15" />
                </button>
                <button class="rounded-full p-1 close-button bg-red-600 border-none text-lg cursor-pointer"
                        onclick={toggleVisibility}>
                    <X size="15" />
                </button>
            </div>
        </div>
        {#if isVisible}
            <!-- Window Content -->
            <div class="content p-4 bg-white min-h-[50vh] overflow-y-auto max-h-[calc(100vh-14rem)]">
                <div>
                    {@render children()}
                </div>
            </div>
        {/if}
    </div>
</div>
