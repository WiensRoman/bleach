<script setup>
defineProps({
  id: Number,
  imageUrl: String
})
</script>

<template>
  <div href="" className="gallery-image"><img :src="imageUrl" /></div>
</template>
