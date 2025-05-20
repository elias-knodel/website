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

    const imageCount = Object.keys(imageModules).length;
    const randomImageIndex = Math.floor(Math.random() * imageCount);

    const imagesMap = new Map();
    for (let i = 0; i < imageCount; i++) {
        imagesMap.set(i, Object.entries(imageModules)[i][1].default);
    }

    const randomImage = imagesMap.get(randomImageIndex);
    imagesMap.delete(randomImageIndex);
</script>


<div class="absolute inset-0">
    <enhanced:img
        src={randomImage}
        alt="A picture from Japan."
        class="h-full w-full object-cover"
    />
</div>

<!-- Text on top Image -->
<div class="relative z-10 h-full w-full bg-indigo-900/70">
    <div class="p-4">
        <p class="font-mono">02.Gallery</p>
    </div>
    <div class="p-4">
        <div class="grid grid-cols-2 gap-4">
            {#each Array.from(imagesMap.values()) as image}
                <enhanced:img
                    src={image}
                    alt="A picture from Japan."
                    class="h-48 w-full object-cover rounded-xl"
                />
            {/each}
        </div>
    </div>
</div>
