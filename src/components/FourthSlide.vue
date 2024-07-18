<script setup>
import FourthSlideCard from './FourthSlideCard.vue'
import ComponentHeader from './ComponentHeader.vue'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(async () => {
  AOS.init()
})
</script>

<template>
  <div data-aos="fade-down" className="fourth-slide">
    <div className="container-fluid">
      <component-header title="НАШИ УСЛУГИ"></component-header>
      <fourth-slide-card></fourth-slide-card>
    </div>
  </div>
</template>
