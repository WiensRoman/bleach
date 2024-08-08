<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Controller, Navigation, Autoplay } from 'swiper/modules'
</script>

<template>
  <div class="sixth-slide-review-right-carousel">
    <Swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="[Controller, Navigation, Autoplay]"
      :navigation="{ nextEl: '.s-button-next', prevEl: '.s-button-prev' }"
      :autoplay="{ delay: 2000 }"
      :swiper-navigation-top-offset="100"
      :swiper-navigation-sides-offset="30"
    >
      <SwiperSlide><img src="../../../assets/images/otziv_new_13-fotor.png" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/otziv_new_12-fotor.png" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/otziv_new_14-fotor.png" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/otziv_new_10-fotor.png" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/otziv_new_7-fotor.png" /></SwiperSlide>
      <div class="carousel-control-prev"><span class="s-button-prev"></span></div>
      <div class="carousel-control-next"><span class="s-button-next"></span></div>
    </Swiper>
  </div>
</template>
