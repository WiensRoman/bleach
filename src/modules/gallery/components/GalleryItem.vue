<script setup>
defineProps({
  id: Number,
  imageUrl: String
})
</script>

<template>
  <div href="" class="gallery-image"><img :src="imageUrl" /></div>
</template>
