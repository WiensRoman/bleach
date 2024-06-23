<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Controller, Navigation, Autoplay } from 'swiper/modules'
</script>

<template>
  <div class="second-slide-carousel">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="[Controller, Navigation, Autoplay]"
      :navigation="{ nextEl: '.s-button-next', prevEl: '.s-button-prev' }"
      :autoplay="{ delay: 2000 }"
      :swiper-navigation-top-offset="100"
      :swiper-navigation-sides-offset="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide><img src="../assets/example1.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/example2.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/example3.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/example4.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/example5.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/example6.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/example7.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/example8.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/example9.jpg" /></swiper-slide>
      <div class="carousel-control-prev"><span class="s-button-prev"></span></div>
      <div class="carousel-control-next"><span class="s-button-next"></span></div>
    </swiper>
  </div>
</template>
