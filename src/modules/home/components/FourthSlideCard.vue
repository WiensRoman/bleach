<script setup>
import service0 from '@/assets/images/Fourth_slide_service_0.png'
import service1 from '@/assets/images/Fourth_slide_service_1.png'
import service2 from '@/assets/images/Fourth_slide_service_2.png'
import service3 from '@/assets/images/Fourth_slide_service_3.png'
import service4 from '@/assets/images/Fourth_slide_service_4.png'
import service5 from '@/assets/images/Fourth_slide_service_5.png'
defineProps({
  id: Number,
  title: String,
  textArr: Array,
  price: String,
  imageUrl: String
})
const arr = [service0, service1, service2, service3, service4, service5]
</script>

<template>
  <div class="fourth-slide-card" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    <div class="fourth-slide-card__title">
      <h4>{{ title }}</h4>
    </div>
    <div class="fourth-slide-card__subtitle"></div>
    <div class="fourth-slide-card__text" v-for="text in textArr" :key="text.index">
      <p>{{ text }}</p>
    </div>
    <div class="fourth-slide-card__price">
      <p>{{ price }}</p>
    </div>

    <a href="/services" class="fourth-slide-card-button">Подробнее</a>
  </div>
</template>
