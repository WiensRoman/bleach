<script setup>
import ComponentButton from '@/core/components/ComponentButton.vue'
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: String,
  textArr: Array
})
</script>

<template>
  <div class="services-card сol-lg-4">
    <div class="services-card-img"><img :src="imageUrl" /></div>
    <div class="services-card-title">
      <h4>{{ title }}</h4>
    </div>
    <div class="services-card-price">
      <p>{{ price }}</p>
    </div>
    <div class="services-card-text">
      <p v-for="text in textArr" :key="text.index">{{ text }}</p>
    </div>
    <ComponentButton
      class="services-card-button"
      title="Рассчитать стоимость"
      :isLink="true"
    ></ComponentButton>
  </div>
</template>
