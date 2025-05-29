<script lang="ts">
    interface DialogProps {
        title: string;
    }

    let { title }: DialogProps = $props();
</script>

<section class="w-72 h-72">
    <h2 class="mb-2 font-bold">{title ?? "Placeholder"}</h2>

    <p>Hier werden informationen stehen welche super cool sind.</p>
</section>
