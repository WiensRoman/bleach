<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import ShopCardList from '../components/ShopCardList.vue'
const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://d8618ff445c5b9a8.mokky.dev/favorites?_relations=items'
    )
    favorites.value = data.map((obj) => obj.item)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div className="favorites-container">
    <h1 class="favorites-title text-3xl font-bold mb-8">Мои закладки</h1>
    <ShopCardList :items="favorites" is-favorites />
  </div>
</template>
