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
  <div class="fifth-slide-card">
    <div class="fifth-slide-card__img"><img :src="imageUrl" /></div>
    <div class="fifth-slide-card__text">
      <div class="fifth-slide-card__title">
        <h3>{{ title }}</h3>
      </div>
      <div class="fifth-slide-card__subtitle">
        <p v-for="subtitle in subtitleArr" :key="subtitle.index">{{ subtitle }}</p>
        <br />
      </div>
    </div>
  </div>
  <FifthSlideAngle v-if="title && id != cardsArrLength - 1"></FifthSlideAngle>
</template>
