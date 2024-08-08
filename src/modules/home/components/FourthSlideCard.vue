<script setup>
defineProps({
  id: Number,
  title: String,
  textArr: Array,
  price: String,
  imageUrl: String
})
</script>

<template>
  <div class="fourth-slide-card col-4" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    <div class="fourth-slide-card-title">
      <h4>{{ title }}</h4>
    </div>
    <div class="fourth-slide-card-subtitle"></div>
    <div class="fourth-slide-card-text" v-for="text in textArr" :key="text.index">
      <p>{{ text }}</p>
    </div>
    <div class="fourth-slide-card-price">
      <p>{{ price }}</p>
    </div>

    <a href="/services" class="fourth-slide-card-button">Подробнее</a>
  </div>
</template>
