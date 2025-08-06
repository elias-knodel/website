<script>
    import Card from '$lib/components/Card.svelte';
    import Intro from '$lib/components/homepage/Intro.svelte';
    import Gallery from '$lib/components/homepage/Gallery.svelte';
    import Projects from '$lib/components/homepage/Projects.svelte';
    import Skills from '$lib/components/homepage/Skills.svelte';
    import Socials from '$lib/components/homepage/Socials.svelte';
</script>

<svelte:head>
    <title>Homepage</title>
</svelte:head>

<main class="m-5 text-white">
    <div class="grid grid-cols-1 gap-y-4 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Card classes="w-full sm:w-[250px] lg:w-[500px] h-fit sm:h-[250px] col-span-2 ">
            <Intro />
        </Card>
        <Card classes="w-full h-fit p-0 sm:w-[500px] sm:h-[500px] row-span-2 col-span-2 relative overflow-hidden">
            <Gallery />
        </Card>
        <Card classes="w-full h-fit sm:w-[250px] sm:h-[500px] col-span-2 row-span-1 sm:col-span-1 sm:row-span-2">
            <Projects />
        </Card>
        <Card classes="hidden xl:block w-[500px] h-[500px] row-span-2 col-span-2">
            <Skills />
        </Card>
        <Card classes="w-full h-fit sm:w-[250px] sm:h-[250px] col-span-1">
            <Socials />
        </Card>
        <Card classes="hidden lg:block w-[525px] h-[250px] col-span-2 ">
            <p class="font-mono">06: Capacity</p>
            <br>
            <p>DE: Derzeit bin ich Vollzeit beschäftigt und nehme keine Aufträge an.</p>
            <p>EN: Currently employed full time and not accepting jobs.</p>
            <p></p>
        </Card>
    </div>
</main>
