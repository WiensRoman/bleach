<script setup>
import SecondSlideCarousel from '../components/SecondSlideCarousel.vue'
import SecondSlideText from '../components/SecondSlideText.vue'
import ComponentButton from '../components/ComponentButton.vue'
import ComponentHeader from './ComponentHeader.vue'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(async () => {
  AOS.init()
})
</script>

<template>
  <div data-aos="fade-down" class="second-slide mt-16">
    <div class="container-fluid">
      <component-header title="НАШИ РАБОТЫ ДО/ПОСЛЕ" />
      <second-slide-carousel />
      <second-slide-text />
      <component-button title="Посмотреть" />
    </div>
  </div>
</template>
