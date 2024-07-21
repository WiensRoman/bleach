<script setup>
defineProps({
  id: Number,
  imageUrl: String
})
</script>

<template>
  <a href="" className="gallery-image"><img :src="imageUrl" /></a>
</template>
