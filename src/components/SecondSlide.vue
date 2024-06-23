<script setup>
import SecondSlideCarousel from '../components/SecondSlideCarousel.vue'
import SecondSlideText from '../components/SecondSlideText.vue'
import SecondSlideButton from '../components/SecondSlideButton.vue'
import ComponentHeader from './ComponentHeader.vue'
</script>

<template>
  <div class="second-slide mt-16">
    <div class="container-fluid">
      <component-header title="НАШИ РАБОТЫ ДО/ПОСЛЕ" />
      <second-slide-carousel />
      <second-slide-text />
      <second-slide-button />
    </div>
  </div>
</template>
