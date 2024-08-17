<script setup>
defineProps({
  id: Number,
  imageUrl: String
})
</script>

<template>
  <div href="" class="gallery__items-image"><img :src="imageUrl" /></div>
</template>
