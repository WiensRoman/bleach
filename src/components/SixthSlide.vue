<script setup>
import ComponentHeader from './ComponentHeader.vue'
import SixthSlideSubtitle from './SixthSlideSubtitle.vue'
import SixthSlideReviews from './SixthSlideReviews.vue'
</script>
<template>
  <div className="sixth-slide">
    <div className="container-fluid">
      <component-header
        title="ОТЗЫВЫ КЛИЕНТОВ"
        className="sixth-slide-title text-center"
      ></component-header>
      <sixth-slide-subtitle></sixth-slide-subtitle>
      <sixth-slide-reviews></sixth-slide-reviews>
    </div>
  </div>
</template>
