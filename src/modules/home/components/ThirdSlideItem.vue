<script setup>
defineProps({
  id: Number,
  title: String,
  descriptionArr: Array,
  imageUrl: String
})
</script>

<template>
  <div class="ts-card" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    <div className="ts-card-title">
      <h3>{{ title }}</h3>
    </div>
    <div class="ts-card-text">
      <p v-for="dscr in descriptionArr" :key="dscr.index">{{ dscr }}</p>
    </div>
    <div v-if="id == 1" className="ts-image">
      <img src="../../../assets/images/component_2.png" />
    </div>
    <div v-else-if="id == 3" className="ts-image-dostavka">
      <img src="../../../assets/images/dostavka.png" />
    </div>
  </div>
</template>
