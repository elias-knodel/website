<script>
    import { twMerge } from 'tailwind-merge';

    let moving = false;
    let element;
    let { children, left = $bindable(100), top = $bindable(100), classes } = $props();

    const defaultClasses =
        'bg-white rounded-xl p-3 shadow-xl';
    const mergedClasses = twMerge(defaultClasses, classes);

    function onMouseDown() {
        moving = true;
    }

    function onMouseMove(e) {
        if (moving && element) {
            const rect = element.getBoundingClientRect();

            const newLeft = left + e.movementX;
            const newTop = top + e.movementY;

            // Clamp within viewport
            left = Math.max(0, Math.min(newLeft, window.innerWidth - rect.width));
            top = Math.max(0, Math.min(newTop, window.innerHeight - rect.height));
        }
    }

    function onMouseUp() {
        moving = false;
    }
</script>

<style>
    .draggable {
        user-select: none;
        position: absolute;
    }
</style>

<section
    bind:this={element}
    on:mousedown={onMouseDown}
    style="left: {left}px; top: {top}px;"
    class="draggable {mergedClasses}"
>
    {@render children()}
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
