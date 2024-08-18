<script setup>
defineProps({
  id: Number,
  imageUrl: String
})
</script>

<template>
  <div class="sixth-slide-review-left__img"><img :src="imageUrl" /></div>
</template>
