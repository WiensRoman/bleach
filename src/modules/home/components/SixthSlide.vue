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
  <div data-aos="fade-down" className="sixth-slide">
    <div className="container-fluid">
      <ComponentHeader
        title="ОТЗЫВЫ КЛИЕНТОВ"
        className="sixth-slide-title text-center"
      ></ComponentHeader>
      <SixthSlideSubtitle />
      <SixthSlideReviews />
    </div>
  </div>
</template>
