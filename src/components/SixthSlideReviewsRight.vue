<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Controller, Navigation, Autoplay } from 'swiper/modules'
</script>

<template>
  <div class="sixth-slide-review-right-carousel">
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
      <swiper-slide><img src="../assets/review_carousel_0.png" /></swiper-slide>
      <swiper-slide><img src="../assets/review_carousel_1.png" /></swiper-slide>
      <swiper-slide><img src="../assets/review_carousel_2.png" /></swiper-slide>
      <swiper-slide><img src="../assets/review_carousel_3.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/review_carousel_4.png" /></swiper-slide>
      <swiper-slide><img src="../assets/review_carousel_5.png" /></swiper-slide>
      <swiper-slide><img src="../assets/review_carousel_6.png" /></swiper-slide>
      <swiper-slide><img src="../assets/otziv_new_7.png" /></swiper-slide>
      <div class="carousel-control-prev"><span class="s-button-prev"></span></div>
      <div class="carousel-control-next"><span class="s-button-next"></span></div>
    </swiper>
  </div>
</template>
