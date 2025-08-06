<script lang="ts">
    import Image from '$lib/assets/images/Matsumoto.jpg?enhanced';
</script>

<div>
    <p class="font-mono">04.Skills</p>

    <section>
        <div class="flex flex-col gap-1 py-2">
            <span>Coming Soon</span>
            <span>In the meantime: Look at my favourite Japanese Castle: Matsumoto Castle</span>
        </div>

        <enhanced:img
            src={Image}
            aria-hidden="true"
            alt="My favourite Japanese Castle until now: Matsumoto Castle"
            class="h-full w-full object-cover"
            fetchpriority="high"
        />
    </section>
</div>
