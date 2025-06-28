<script setup lang="ts">
const imageModules = import.meta.glob('@/assets/images/*.{jpg,jpeg,png}', { eager: true });
const images = (Object.values(imageModules) as { default: string }[]).map(mod => mod.default);
console.log(images);
</script>

<template>
    <div class="gallery-grid">
        <img v-for="(image, idx) in images" :key="idx" :src="image" alt="">
    </div>
</template>

<style scoped>
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 90vw;
    box-sizing: border-box;

    img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
        border-radius: 8px; /* optional, for rounded corners */
    }
}
</style>