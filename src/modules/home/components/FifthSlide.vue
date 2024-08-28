<script setup>
import ComponentHeader from '@/core/components/ComponentHeader.vue'
import FifthSlideDescription from './FifthSlideDescription.vue'
import FifthSlideCard from './FifthSlideCard.vue'
import { onMounted, ref } from 'vue'
import AOS from 'aos'
import axios from 'axios'

onMounted(async () => {
  AOS.init()
  await fetchItems()
})

let items = ref([])

const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://d8618ff445c5b9a8.mokky.dev/fifth-slide-items', {})
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
  <div data-aos="fade-down" class="fifth-slide" id="work">
    <div class="container-fluid">
      <ComponentHeader title="КАК ВОСПОЛЬЗОВАТЬСЯ НАШИМИ УСЛУГАМИ?"></ComponentHeader>
      <FifthSlideDescription />
      <FifthSlideCard
        v-for="card in items"
        :key="card.id"
        :id="card.id"
        :title="card.title"
        :subtitleArr="card.subtitleArr"
        :imageUrl="card.imageUrl"
        :cardsArrLength="items.length"
      ></FifthSlideCard>
    </div>
  </div>
</template>
