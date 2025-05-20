<script lang="ts">
    const projects = [
        {
            name: 'Multi-Step-Forms',
            description: 'Symfony basierte Google Forms alternative auf maximalen Datenschutzniveau.'
        },
        {
            name: 'WP AI Post recommendations',
            description: 'OpenAI gestützte Blog-Post Empfehlungen.'
        },
        {
            name: 'Svelte Structured Data',
            description: 'Modulbasierte Komponenten basierend auf Schema.org (noch in arbeit).'
        }
    ];
</script>

<div>
    <p class="font-mono">03.Projects</p>

    <section>
        {#each projects as project}
            <div class="mt-5">
                <h3 class="pb-2 font-bold underline">
                    {project.name}
                </h3>
                <p>
                    {project.description}
                </p>
            </div>
        {/each}
    </section>
</div>
