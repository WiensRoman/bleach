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
  <div className="card">
    <div className="card__img"><img :src="imageUrl" /></div>
    <div className="card__title">
      <h4>{{ title }}</h4>
    </div>
    <div className="card__price">
      <p>{{ price }}</p>
    </div>
    <div className="card__text">
      <p v-for="text in textArr" :key="text.index">{{ text }}</p>
    </div>
    <ComponentButton
      className="card__button"
      title="Рассчитать стоимость"
      :isLink="true"
    ></ComponentButton>
  </div>
</template>
