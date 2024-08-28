<script setup>
import FifthSlideAngle from './FifthSlideAngle.vue'
import fifthSlideImg1 from '@/assets/images/fifth_slide_01.png'
import fifthSlideImg2 from '@/assets/images/fifth_slide_02.png'
import fifthSlideImg3 from '@/assets/images/fifth_slide_03.png'
defineProps({
  id: Number,
  title: String,
  subtitleArr: Array,
  imageUrl: String,
  cardsArrLength: Number
})
const arr = [fifthSlideImg1, fifthSlideImg2, fifthSlideImg3]
</script>

<template>
  <div class="fifth-slide-card">
    <div class="fifth-slide-card__img"><img :src="arr[id]" /></div>
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
