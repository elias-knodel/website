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
    <div class="homepage-grid max-w-[1314px]">
        <div class="area-intro">
            <Card classes="w-full">
                <Intro />
            </Card>
        </div>

        <div class="area-gallery">
            <Card classes="w-full h-full p-0 relative overflow-hidden">
                <Gallery />
            </Card>
        </div>

        <div class="area-projects">
            <Card classes="w-full h-full">
                <Projects />
            </Card>
        </div>

        <div class="area-skills">
            <Card classes="w-full h-full overflow-hidden">
                <Skills readmeHtml={data.readmeHtml} />
            </Card>
        </div>

        <div class="area-socials">
            <Card classes="w-full h-full">
                <Socials />
            </Card>
        </div>

        <div class="area-saying">
            <Card classes="w-full h-full">
                <JapaneseSaying />
            </Card>
        </div>
    </div>
</main>

<style>
    /* Named areas assigned to each item */
    .area-intro    { grid-area: intro; }
    .area-gallery  { grid-area: gallery; }
    .area-projects { grid-area: projects; }
    .area-skills   { grid-area: skills; }
    .area-socials  { grid-area: socials; }
    .area-saying   { grid-area: saying; }

    /* mobile: single column, items stack in order */
    .homepage-grid {
        display: grid;
        gap: 1rem;
        grid-auto-rows: auto;
        grid-template-areas:
            "intro"
            "gallery"
            "projects"
            "skills"
            "socials"
            "saying";
    }

    /* sm (640px): 2 cols — Gallery and Skills each span full width (2 cols) */
    @media (min-width: 640px) {
        .homepage-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 250px;
            grid-template-areas:
                "intro    intro"
                "gallery  gallery"
                "gallery  gallery"
                "projects socials"
                "projects saying"
                "skills   skills"
                "skills   skills";
        }
    }

    /* md (768px): 3 cols — Gallery and Skills each 2 cols, Saying fills the 3rd col */
    @media (min-width: 768px) {
        .homepage-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 250px;
            grid-template-areas:
                "intro   intro   projects"
                "gallery gallery projects"
                "gallery gallery socials"
                "skills  skills  saying"
                "skills  skills  saying";
        }
    }

    /* lg (1024px): 4 cols — compact 3-row layout, no gaps */
    @media (min-width: 1024px) {
        .homepage-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 250px;
            grid-template-areas:
                "intro    intro   gallery  gallery"
                "projects socials gallery  gallery"
                "projects skills  skills   saying";
        }
    }

    /* xl (1280px): 5 cols — full layout, 3 rows, no gaps */
    @media (min-width: 1280px) {
        .homepage-grid {
            grid-template-columns: repeat(5, 1fr);
            grid-auto-rows: 250px;
            grid-template-areas:
                "intro   intro   gallery  gallery  projects"
                "skills  skills  gallery  gallery  projects"
                "skills  skills  socials  saying   saying";
        }
    }
</style>
