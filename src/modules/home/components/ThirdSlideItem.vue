<script setup>
defineProps({
  id: Number,
  title: String,
  descriptionArr: Array,
  imageUrl: String
})
</script>

<template>
  <div class="third-slide-card" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    <div class="third-slide-card__title">
      <h3>{{ title }}</h3>
    </div>
    <div class="third-slide-card__text">
      <p v-for="dscr in descriptionArr" :key="dscr.index">{{ dscr }}</p>
    </div>
    <div v-if="id == 1" class="third-slide-card__image">
      <img src="../../../assets/images/component_2.png" />
    </div>
    <div v-else-if="id == 3" class="third-slide-card__image-dostavka">
      <img src="../../../assets/images/dostavka.png" />
    </div>
  </div>
</template>
