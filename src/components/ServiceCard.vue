<script setup>
import ComponentButton from './ComponentButton.vue'
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  textArr: Array
})
</script>

<template>
  <div className="services-card сol-lg-4">
    <div className="services-card-img"><img :src="imageUrl" /></div>
    <div className="services-card-title">
      <h4>{{ title }}</h4>
    </div>
    <div className="services-card-price">
      <p>{{ price }}</p>
    </div>
    <div className="services-card-text">
      <p v-for="text in textArr" :key="text.index">{{ text }}</p>
    </div>
    <component-button
      className="services-card-button"
      title="Рассчитать стоимость"
    ></component-button>
  </div>
</template>
