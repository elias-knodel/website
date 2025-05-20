<script>
    import Card from '$lib/components/Card.svelte';
    import Intro from '$lib/components/homepage/Intro.svelte';
    import Gallery from '$lib/components/homepage/Gallery.svelte';
    import Projects from '$lib/components/homepage/Projects.svelte';
    import Skills from '$lib/components/homepage/Skills.svelte';
    import Socials from '$lib/components/homepage/Socials.svelte';
</script>

<main class="m-5 text-white">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Card classes="bg-violet-600/20 w-[500px] h-[250px] col-span-2 ">
            <Intro />
        </Card>
        <Card classes="p-0 w-[500px] h-[500px] row-span-2 col-span-2 relative overflow-hidden">
            <Gallery />
        </Card>
        <Card classes="bg-purple-900/30 w-[250px] h-[500px] row-span-2 ">
            <Projects />
        </Card>
        <Card classes="w-[500px] h-[500px] row-span-2 col-span-2 ">
            <Skills />
        </Card>
        <Card classes="bg-violet-400/30 w-[250px] h-[250px] col-span-1 ">
            <Socials />
        </Card>
        <Card classes="bg-pink-400/30 w-[525px] h-[250px] col-span-2 ">
            <p>06: ???</p>
            <p>Coming Soon...</p>
        </Card>
    </div>
</main>
