<script lang="ts">
     const imageModules = import.meta.glob(
         '$lib/assets/images/japan/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
         {
             eager: true,
             query: {
                 enhanced: true
             }
         }
     );

     // Helper to extract filename and turn into alt text
     function getAltFromPath(path: string): string {
         // Get filename without extension
         const match = path.match(/\/([^\/]+)\.[\w]+$/);
         if (!match) return 'A picture from Japan.';
         // Replace dashes/underscores and capitalize words
         const label = match[1]
             .replace(/[-_]/g, ' ')
             .replace(/\b(\w)/g, s => s.toUpperCase());
         return `Photo of ${label}, Japan`;
     }

     // Prepare entries with alt info
     const images = Object.entries(imageModules).map(([path, mod]) => ({
         src: mod.default,
         alt: getAltFromPath(path)
     }));

     const imageCount = images.length;
     const randomImageIndex = Math.floor(Math.random() * imageCount);
     const [randomImage, ...restImages] = [
         images[randomImageIndex],
         ...images.slice(0, randomImageIndex),
         ...images.slice(randomImageIndex + 1)
     ];
</script>

<div class="absolute inset-0">
    <enhanced:img
        src={randomImage.src}
        aria-hidden="true"
        alt={randomImage.alt}
        class="h-full w-full object-cover"
        fetchpriority="high"
    />
</div>

<!-- Text on top Image -->
<div class="relative z-10 h-full w-full bg-indigo-900/70">
    <div class="p-4">
        <p class="font-mono">02.Gallery</p>
    </div>
    <div class="p-4">
        <div class="grid grid-cols-2 gap-y-4 gap-4">
            {#each restImages as image}
                <enhanced:img
                    src={image.src}
                    aria-hidden="true"
                    alt="{image.alt}"
                    class="h-48 w-full object-cover rounded-xl"
                    fetchpriority="low"
                />
            {/each}
        </div>
    </div>
</div>
