<script setup>
import FirstSlideLine from './FirstSlideLine.vue'
</script>

<template>
  <div class="first-slide">
    <img src="../assets/first_slide_image3.jpg" class="bg-cover min-w-full" />
    <div class="fs-container">
      <div class="fs-title">
        <h2>
          <span>ПРЕМИАЛЬНЫЙ СЕРВИС</span>
          ПО ВОССТАНОВЛЕНИЮ ВАШЕЙ
        </h2>
        <h2>ОБУВИ,СУМОК И ЛЮБЫХ ИЗДЕЛИЙ ИЗ КОЖИ И ЗАМШИ</h2>
      </div>
      <div class="fs-subtitle">
        <p>Отправьте фотографию и получите детальную</p>
        <p>
          оценку вашей обуви и изделий за
          <span>15 минут</span>
        </p>
      </div>
      <div class="fs-line d-flex">
        <FirstSlideLine />
      </div>
    </div>
  </div>
</template>
