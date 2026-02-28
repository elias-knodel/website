<script lang="ts">
    import { onMount, tick } from 'svelte';
    import Card from '$lib/components/Card.svelte';
    import Intro from '$lib/components/homepage/Intro.svelte';
    import Gallery from '$lib/components/homepage/Gallery.svelte';
    import Projects from '$lib/components/homepage/Projects.svelte';
    import Skills from '$lib/components/homepage/Skills.svelte';
    import Socials from '$lib/components/homepage/Socials.svelte';
    import JapaneseSaying from '$lib/components/homepage/JapaneseSaying.svelte';

    let { data } = $props();

    type Bp = '' | 'sm' | 'md' | 'lg' | 'xl';
    let bp = $state<Bp>('');
    let gridEl = $state<HTMLDivElement>();

    function detectBp(): Bp {
        const w = window.innerWidth;
        if (w >= 1280) return 'xl';
        if (w >= 1024) return 'lg';
        if (w >= 768) return 'md';
        if (w >= 640) return 'sm';
        return '';
    }

    onMount(() => {
        bp = detectBp();

        const queries = [640, 768, 1024, 1280].map(w =>
            window.matchMedia(`(min-width: ${w}px)`)
        );

        const onChange = async () => {
            const next = detectBp();
            if (next === bp || !gridEl) return;

            const items = Array.from(gridEl.querySelectorAll<HTMLElement>(
                '.area-intro, .area-gallery, .area-projects, .area-skills, .area-socials, .area-saying'
            ));

            // Fade out all items
            try {
                await Promise.all(items.map(el =>
                    el.animate(
                        [{ opacity: 1 }, { opacity: 0 }],
                        { duration: 150, easing: 'ease-in', fill: 'forwards' }
                    ).finished
                ));
            } catch {
                return;
            }

            // Swap the layout
            bp = next;
            await tick();

            // Cancel fade-out fills, then stagger items back in
            items.forEach((el, i) => {
                el.getAnimations().forEach(a => a.cancel());
                el.animate(
                    [
                        { opacity: 0, transform: 'translateY(8px) scale(0.97)' },
                        { opacity: 1, transform: 'none' }
                    ],
                    { duration: 300, delay: i * 40, easing: 'ease-out', fill: 'backwards' }
                );
            });
        };

        queries.forEach(mq => mq.addEventListener('change', onChange));
        return () => queries.forEach(mq => mq.removeEventListener('change', onChange));
    });
</script>

<svelte:head>
    <title>Homepage</title>
</svelte:head>

<main class="m-5 text-white">
    <div class="homepage-grid max-w-[1314px] {bp}" bind:this={gridEl}>
        <div class="area-intro">
            <Card classes="w-full content-center">
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
    .area-intro    { grid-area: intro; }
    .area-gallery  { grid-area: gallery; }
    .area-projects { grid-area: projects; }
    .area-skills   { grid-area: skills; }
    .area-socials  { grid-area: socials; }
    .area-saying   { grid-area: saying; }

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

    .homepage-grid.sm {
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

    .homepage-grid.md {
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 250px;
        grid-template-areas:
            "intro   intro   projects"
            "gallery gallery projects"
            "gallery gallery socials"
            "skills  skills  saying"
            "skills  skills  saying";
    }

    .homepage-grid.lg {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 250px;
        grid-template-areas:
            "intro    intro   gallery  gallery"
            "projects socials gallery  gallery"
            "projects skills  skills   saying";
    }

    .homepage-grid.xl {
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: 250px;
        grid-template-areas:
            "intro   intro   gallery  gallery  projects"
            "skills  skills  gallery  gallery  projects"
            "skills  skills  socials  saying   saying";
    }
</style>
