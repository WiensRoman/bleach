<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Controller, Navigation, Autoplay } from 'swiper/modules'
</script>

<template>
  <div class="second-slide-carousel">
    <Swiper
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
      <SwiperSlide><img src="../../../assets/images/example1.jpg" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/example2.jpg" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/example3.jpg" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/example4.jpg" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/example5.jpg" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/example6.jpg" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/example7.jpg" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/example8.jpg" /></SwiperSlide>
      <SwiperSlide><img src="../../../assets/images/example9.jpg" /></SwiperSlide>
      <div class="carousel-control-prev"><span class="s-button-prev"></span></div>
      <div class="carousel-control-next"><span class="s-button-next"></span></div>
    </Swiper>
  </div>
</template>
