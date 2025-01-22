<script>
    import { onMount } from 'svelte';
    import { BatteryMedium, CloudDownload, Cpu, MemoryStick, SquareStack, Wifi } from 'lucide-svelte';

    let time = $state(new Date());

    let timeString = $derived(time.toLocaleTimeString('de-DE'));

    let dateString = $derived(time.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: 'short'
    }));

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<!--mx-2 my-1 py-1 px-3-->
<div class="bg-slate-900 text-white rounded-lg my-1 px-3 py-1 mx-4 shadow-2xl">
    <div class="flex justify-center sm:justify-between">
        <div class="hidden sm:flex flex-row gap-4 items-center">
            <Cpu size="20" />
            <MemoryStick size="20" />
            <CloudDownload size="20" />
        </div>
        <div class="flex flex-row gap-4 items-center">
            <span>{dateString}</span>
            <span>{timeString}</span>
        </div>
        <div class="hidden sm:flex flex-row gap-4 items-center">
            <SquareStack size="20" />
            <Wifi size="20" />
            <BatteryMedium size="20" />
        </div>
    </div>
</div>
