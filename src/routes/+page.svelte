<script lang="ts">
    import Card from '$lib/components/Card.svelte';
    import Intro from '$lib/components/homepage/Intro.svelte';
    import Gallery from '$lib/components/homepage/Gallery.svelte';
    import Projects from '$lib/components/homepage/Projects.svelte';
    import Skills from '$lib/components/homepage/Skills.svelte';
    import Socials from '$lib/components/homepage/Socials.svelte';
    import JapaneseSaying from '$lib/components/homepage/JapaneseSaying.svelte';

    let { data } = $props();
</script>

<svelte:head>
    <title>Homepage</title>
</svelte:head>

<main class="m-5 text-white">
    <div
        class="grid gap-4 [grid-auto-rows:auto] sm:[grid-auto-rows:250px] max-w-[1314px]
               grid-cols-1
               sm:grid-cols-2
               md:grid-cols-3
               lg:grid-cols-4
               xl:grid-cols-5"
    >
        <!-- 01: Intro — 2 cols, 1 row -->
        <div class="col-span-1 sm:col-span-2">
            <Card classes="w-full h-full">
                <Intro />
            </Card>
        </div>

        <!-- 02: Gallery — 2 cols, 2 rows -->
        <div class="col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 sm:h-auto">
            <Card classes="w-full h-full p-0 relative overflow-hidden">
                <Gallery />
            </Card>
        </div>

        <!-- 03: Projects — 1 col, 2 rows -->
        <div class="col-span-1 row-span-1 sm:row-span-2">
            <Card classes="w-full h-full">
                <Projects />
            </Card>
        </div>

        <!-- 04: Skills — 2 cols, 2 rows (xl only) -->
        <div class="hidden xl:block col-span-2 row-span-2">
            <Card classes="w-full h-full overflow-hidden">
                <Skills readmeHtml={data.readmeHtml} />
            </Card>
        </div>

        <!-- 05: Socials — 1 col, 1 row -->
        <div class="col-span-1">
            <Card classes="w-full h-full">
                <Socials />
            </Card>
        </div>

        <!-- 06: Japanese saying — 2 cols, 1 row (lg+) -->
        <div class="hidden lg:block col-span-2">
            <Card classes="w-full h-full">
                <JapaneseSaying />
            </Card>
        </div>
    </div>
</main>
