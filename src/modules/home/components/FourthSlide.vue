<script setup>
import FourthSlideCard from './FourthSlideCard.vue'
import ComponentHeader from '@/core/components/ComponentHeader.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import AOS from 'aos'

onMounted(async () => {
  AOS.init()
  await fetchItems()
})

let items = ref([])

const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://d8618ff445c5b9a8.mokky.dev/fourth-slide-items', {})
    items.value = data.map((obj) => ({
      ...obj
    }))
    console.log(items)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div data-aos="fade-down" class="fourth-slide">
    <div class="container-fluid">
      <ComponentHeader title="НАШИ УСЛУГИ"></ComponentHeader>
      <div class="fourth-slide-cards row">
        <FourthSlideCard
          v-for="item in items"
          :key="item.index"
          :id="item.id"
          :title="item.title"
          :textArr="item.textArr"
          :price="item.price"
          :imageUrl="item.imageUrl"
        ></FourthSlideCard>
      </div>
    </div>
  </div>
</template>
