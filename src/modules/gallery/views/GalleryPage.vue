<script setup>
import GalleryHeader from '../components/GalleryHeader.vue'
import GalleryItem from '../components/GalleryItem.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

let items = ref([])

const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://d8618ff445c5b9a8.mokky.dev/gallery', {})
    items.value = data.map((obj) => ({
      ...obj
    }))
    console.log(items)
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await fetchItems()
})
</script>

<template>
  <div class="gallery">
    <div class="gallery__container container-fluid">
      <GalleryHeader />
      <div class="gallery__items">
        <GalleryItem
          v-for="item in items"
          :key="item.index"
          :imageUrl="item.imageUrl"
          :id="item.id"
        ></GalleryItem>
      </div>
    </div>
  </div>
</template>
