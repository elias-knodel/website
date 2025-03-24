<script lang="ts">
    import '../app.css';
    // <!--    import Window from '$lib/components/organism/Window.svelte';-->
    // <!--    import StatusBar from '$lib/components/organism/StatusBar.svelte';-->
    // <!--    import Dock from '$lib/components/organism/Dock.svelte';-->
    // <!--    import { setNavigationContext } from '$lib/state/Navigation.svelte';-->

    let { children } = $props();

    // <!--    setNavigationContext();-->

    let copyright = new Date().getFullYear();
</script>

<!--<div class="h-screen flex flex-col">-->
<!--    <div class="min-h-10 max-h-10 grow w-screen">-->
<!--        <StatusBar />-->
<!--    </div>-->

<!--    <div class="grow max-w-screen-2xl w-screen mx-auto">-->
<!--        <Window>-->
<!--            {@render children()}-->
<!--        </Window>-->
<!--    </div>-->

<!--    <div class="min-h-20 mx-auto">-->
<!--        <Dock />-->
<!--    </div>-->
<!--    <div class="text-black flex justify-end">-->
<!--        <div class="bg-white px-2">-->
<!--            <a href="/imprint">Impressum</a>-->
<!--            <span> | </span>-->
<!--            <a href="/data-privacy">Datenschutz</a>-->
<!--            <span> | </span>-->
<!--            <span> &copy; {copyright} Elias Knodel</span>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->


<div class="h-screen flex flex-col">
    <div class="grow flex justify-center items-center">
        <div class="mx-auto max-w-screen-lg p-5">
            {@render children()}
        </div>
    </div>

    <div class="text-black flex justify-end">
        <div class="bg-white px-2">
            <a href="/imprint">Impressum</a>
            <span> | </span>
            <a href="/data-privacy">Datenschutz</a>
            <span> | </span>
            <span> &copy; {copyright} Elias Knodel</span>
        </div>
    </div>
</div>

