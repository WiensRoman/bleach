<script setup>
import FifthSlideAngle from './FifthSlideAngle.vue'
defineProps({
  id: Number,
  title: String,
  subtitleArr: Array,
  imageUrl: String,
  cardsArrLength: Number
})
</script>

<template>
  <div class="fifth-slide-card flex">
    <div class="fifth-slide-card-img"><img :src="imageUrl" /></div>
    <div class="fifth-slide-card-text">
      <div class="fifth-slide-card-title">
        <h3>{{ title }}</h3>
      </div>
      <div class="fifth-slide-card-subtitle">
        <p v-for="subtitle in subtitleArr" :key="subtitle.index">{{ subtitle }}</p>
        <br />
      </div>
    </div>
  </div>
  <FifthSlideAngle v-if="title && id != cardsArrLength - 1"></FifthSlideAngle>
</template>
