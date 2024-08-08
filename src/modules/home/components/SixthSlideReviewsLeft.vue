<script setup>
defineProps({
  id: Number,
  imageUrl: String
})
</script>

<template>
  <div class="sixth-slide-review-left-img"><img :src="imageUrl" /></div>
</template>
