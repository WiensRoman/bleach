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
  <div class="card">
    <div class="card__img"><img :src="imageUrl" /></div>
    <div class="card__title">
      <h4>{{ title }}</h4>
    </div>
    <div class="card__price">
      <p>{{ price }}</p>
    </div>
    <div class="card__text">
      <p v-for="text in textArr" :key="text.index">{{ text }}</p>
    </div>
    <ComponentButton
      class="card__button"
      title="Рассчитать стоимость"
      :isLink="true"
    ></ComponentButton>
  </div>
</template>
