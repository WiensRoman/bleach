<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String
})
</script>

<template>
  <div class="info">
    <img height="80" width="80" :src="imageUrl" alt="Info image" />
    <h2 class="info__title">{{ title }}</h2>
    <p class="info__description">{{ description }}</p>
  </div>
</template>
