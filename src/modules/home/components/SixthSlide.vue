<script setup>
import ComponentHeader from '@/core/components/ComponentHeader.vue'
import SixthSlideSubtitle from './SixthSlideSubtitle.vue'
import SixthSlideReviews from './SixthSlideReviews.vue'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(async () => {
  AOS.init()
})
</script>

<template>
  <div data-aos="fade-down" class="sixth-slide">
    <div class="container-fluid">
      <ComponentHeader title="ОТЗЫВЫ КЛИЕНТОВ" class="sixth-slide__title"></ComponentHeader>
      <SixthSlideSubtitle />
      <SixthSlideReviews />
    </div>
  </div>
</template>
