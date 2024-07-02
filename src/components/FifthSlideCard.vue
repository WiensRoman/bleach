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
  <div className="fifth-slide-card flex">
    <div className="fifth-slide-card-img"><img :src="imageUrl" /></div>
    <div className="fifth-slide-card-text">
      <div className="fifth-slide-card-title">
        <h3>{{ title }}</h3>
      </div>
      <div className="fifth-slide-card-subtitle">
        <p v-for="subtitle in subtitleArr" :key="subtitle.index">{{ subtitle }}</p>
        <br />
      </div>
    </div>
  </div>
  <fifth-slide-angle v-if="title && id != cardsArrLength - 1"></fifth-slide-angle>
</template>
