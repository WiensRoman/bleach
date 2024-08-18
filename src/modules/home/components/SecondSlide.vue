<script setup>
import SecondSlideCarousel from './SecondSlideCarousel.vue'
import SecondSlideText from './SecondSlideText.vue'
import ComponentButton from '@/core/components/ComponentButton.vue'
import ComponentHeader from '@/core/components/ComponentHeader.vue'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(async () => {
  AOS.init()
})
</script>

<template>
  <div data-aos="fade-down" class="second-slide">
    <div class="container-fluid">
      <ComponentHeader title="НАШИ РАБОТЫ ДО/ПОСЛЕ" />
      <SecondSlideCarousel />
      <SecondSlideText />
      <RouterLink to="/gallery"><ComponentButton title="ПОСМОТРЕТЬ" /></RouterLink>
    </div>
  </div>
</template>
