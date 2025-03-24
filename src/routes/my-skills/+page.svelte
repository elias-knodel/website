<!--<script lang="ts">-->
<!--    import { Star } from 'lucide-svelte';-->

<!--    let StarFull = Star;-->
<!--</script>-->

<main>
<!--    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">-->
<!--        Skills & Expertise-->
<!--    </h1>-->
<!--    <p class="leading-7 [&:not(:first-child)]:mt-6">-->
<!--        <strong class="text-blue-600">WordPress (WooCommerce, Elementor)</strong> - <span class="text-yellow-500">★★★★★</span> (100%)<br />-->
<!--        <strong class="text-blue-600">PHP (Symfony, Doctrine)</strong> - <span class="text-yellow-500">★★★★☆</span> (70%)<br />-->
<!--        <strong class="text-blue-600">JavaScript (Svelte, Bun, Node.js)</strong> - <span class="text-yellow-500">★★★★☆</span> (70%)<br />-->
<!--        <strong class="text-blue-600">PostgreSQL (Datenbanken)</strong> - <span class="text-yellow-500">★★★★☆</span> (65%)<br />-->
<!--        <strong class="text-blue-600">Linux (Server-Administration)</strong> - <span class="text-yellow-500">★★★☆☆</span> (50%)<br />-->
<!--        <strong class="text-blue-600">DevOps (Docker, Kubernetes)</strong> - <span class="text-yellow-500">★★☆☆☆</span> (35%)<br />-->
<!--        <strong class="text-blue-600">Python</strong> - <span class="text-yellow-500">★★☆☆☆</span> (30%)<br />-->
<!--        <strong class="text-blue-600">Go</strong> - <span class="text-yellow-500">★☆☆☆☆</span> (20%)<br />-->
<!--        <strong class="text-blue-600">Java</strong> - <span class="text-yellow-500">★☆☆☆☆</span> (10%)<br />-->
<!--    </p>-->
</main>

<script lang="ts">
    import { flip } from 'svelte/animate';

    let skills = [
        { name: "WordPress (WooCommerce, Elementor)", rating: 5, percentage: 100 },
        { name: "PHP (Symfony, Doctrine)", rating: 4, percentage: 70 },
        { name: "JavaScript (Svelte, Bun, Node.js)", rating: 4, percentage: 70 },
        { name: "PostgreSQL (Datenbanken)", rating: 4, percentage: 65 },
        { name: "Linux (Server-Administration)", rating: 3, percentage: 50 },
        { name: "DevOps (Docker, Kubernetes)", rating: 2, percentage: 35 },
        { name: "Python", rating: 2, percentage: 30 },
        { name: "Go", rating: 1, percentage: 20 },
        { name: "Java", rating: 1, percentage: 10 }
    ];

    export let skill;
    let flipped = false;

    function toggleFlip() {
        flipped = !flipped;
    }
</script>

{#each skills as skill, index (skill.name)}
    <div class="card" on:click={toggleFlip} animate:flip>
        <div class="card-inner">
            <div class="card-front">
                <strong class="text-blue-600">{skill.name}</strong>
            </div>
            <div class="card-back">
                <span class="text-yellow-500">{'★'.repeat(skill.rating)}{'☆'.repeat(5 - skill.rating)}</span>
            </div>
        </div>
    </div>
{/each}
