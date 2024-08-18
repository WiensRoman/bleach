<script setup>
import FirstSlideLine from './FirstSlideLine.vue'
import img from '@/assets/images/first_slide_image3.jpg'
</script>

<template>
  <div class="first-slide" :style="{ backgroundImage: 'url(' + img + ')' }">
    <div class="first-slide-container">
      <div class="first-slide-container__title">
        <h2>
          <span>ЛУЧШАЯ ХИМЧИСТКА</span>
          ОБУВИ,СУМОК И ЛЮБЫХ ИЗДЕЛИЙ ИЗ КОЖИ И ЗАМШИ,
        </h2>
        <h2>КОТОРАЯ ИСПОЛЬЗУЕТ САМЫЕ ПЕРЕДОВЫЕ ТЕХНИКИ И СРЕДСТВА</h2>
      </div>
      <div class="first-slide-container__subtitle">
        <p>Отправьте фотографию и получите детальную</p>
        <p>
          оценку вашей обуви и изделий за
          <span>15 минут</span>
        </p>
      </div>
      <div class="line">
        <FirstSlideLine />
      </div>
    </div>
  </div>
</template>
