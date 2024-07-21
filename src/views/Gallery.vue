<script setup>
import { onMounted, ref } from 'vue'
import GalleryHeader from '@/components/GalleryHeader.vue'
import GalleryItem from '@/components/GalleryItem.vue'
import axios from 'axios'

// let items = [
//   { id: 0, imageUrl: 'src/assets/gallery_0.png' },
//   { id: 1, imageUrl: 'src/assets/gallery_1.png' },
//   { id: 2, imageUrl: 'src/assets/gallery_2.png' },
//   { id: 3, imageUrl: 'src/assets/gallery_3.png' },
//   { id: 4, imageUrl: 'src/assets/gallery_4.png' },
//   { id: 5, imageUrl: 'src/assets/gallery_5.png' },
//   { id: 6, imageUrl: 'src/assets/gallery_6.png' },
//   { id: 7, imageUrl: 'src/assets/gallery_7.png' },
//   { id: 8, imageUrl: 'src/assets/gallery_8.png' },
//   { id: 9, imageUrl: 'src/assets/gallery_9.png' },
//   { id: 10, imageUrl: 'src/assets/gallery_10.png' },
//   { id: 11, imageUrl: 'src/assets/gallery_11.png' },
//   { id: 12, imageUrl: 'src/assets/gallery_12.png' },
//   { id: 13, imageUrl: 'src/assets/gallery_13.png' },
//   { id: 14, imageUrl: 'src/assets/gallery_14.png' },
//   { id: 15, imageUrl: 'src/assets/gallery_15.png' },
//   { id: 16, imageUrl: 'src/assets/gallery_16.png' },
//   { id: 17, imageUrl: 'src/assets/gallery_17.png' },
//   { id: 18, imageUrl: 'src/assets/gallery_18.png' },
//   { id: 19, imageUrl: 'src/assets/gallery_19.png' },
//   { id: 20, imageUrl: 'src/assets/gallery_20.png' },
//   { id: 21, imageUrl: 'src/assets/gallery_21.png' },
//   { id: 22, imageUrl: 'src/assets/gallery_22.png' },
//   { id: 23, imageUrl: 'src/assets/gallery_23.png' },
//   { id: 24, imageUrl: 'src/assets/gallery_24.png' },
//   { id: 25, imageUrl: 'src/assets/gallery_25.png' },
//   { id: 26, imageUrl: 'src/assets/gallery_26.png' },
//   { id: 27, imageUrl: 'src/assets/gallery_27.png' },
//   { id: 28, imageUrl: 'src/assets/gallery_28.png' },
//   { id: 29, imageUrl: 'src/assets/gallery_29.png' },
//   { id: 30, imageUrl: 'src/assets/gallery_30.png' },
//   { id: 31, imageUrl: 'src/assets/gallery_31.png' }
// ]

let items = ref([])

const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://d8618ff445c5b9a8.mokky.dev/gallery', {})
    items.value = data.map((obj) => ({
      ...obj
    }))
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await fetchItems()
})
</script>

<template>
  <div className="gallery-slide">
    <div className="container-fluid">
      <GalleryHeader />
      <div className="gallery">
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
