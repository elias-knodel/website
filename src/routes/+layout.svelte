<script lang="ts">
    import '../app.css';

    let { children } = $props();

    let copyright = new Date().getFullYear();
</script>

<svelte:head>
    <title>Website | Elias</title>
    <meta name="description" content="Fullstack Web Developer. Currently employed full time and not accepting jobs.">
</svelte:head>

<div class="flex h-screen flex-col">
    <div class="flex grow items-center justify-center bg-linear-to-br from-sky-500 to-indigo-500 ek-custom-bg">
        {@render children()}
    </div>

    <div class="flex justify-end text-black">
        <div class="bg-white px-2">
            <a class="hover:underline" href="/imprint">Impressum</a>
            <span> | </span>
            <a class="hover:underline" href="/data-privacy">Datenschutz</a>
            <span> | </span>
            <a class="hover:underline" href="/"> &copy; {copyright} Elias Knodel</a>
        </div>
    </div>
</div>

<style>
    .ek-custom-bg {
        background-image: url('/public/layered-waves.svg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed; /* This makes it fixed */
    }
</style>
