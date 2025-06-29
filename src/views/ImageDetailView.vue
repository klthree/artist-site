<script setup lang="ts">
defineProps<{
  imageSrc: string;
  imageName: string;
  imageDescription?: string;
}>();
</script>

<template>
    <div class="image-detail" @click.self="$emit('close')">
        <img :src="imageSrc" alt="Image Detail" />
        <h2>{{ imageName }}</h2>
        <p>{{ imageDescription }}</p>
    </div>
</template>

<style scoped>
.image-detail {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.image-detail img {
    max-width: 90vw;
    max-height: 80vh;
    width: auto;
    height: auto;
    box-shadow: 0 4px 32px rgba(0,0,0,0.5);
    border-radius: 12px;
}
.image-detail h2, .image-detail p {
    color: #fff;
    text-align: center;
}
</style>