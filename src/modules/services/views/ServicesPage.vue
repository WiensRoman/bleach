<script setup>
import ServiceCard from '../components/ServiceCard.vue'
import ContactsFooter from '../../contacts/components/ContactsFooter.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

let filteredItems = []
const rows = ref([])

let items = []

const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://d8618ff445c5b9a8.mokky.dev/services', {})
    items = data.map((obj) => ({
      ...obj
    }))
  } catch (err) {
    console.log(err)
  }
}

const fetchServiceTypes = async () => {
  try {
    const { data } = await axios.get('https://d8618ff445c5b9a8.mokky.dev/serviceTypes', {})
    rows.value = data.map((obj) => ({
      ...obj
    }))
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await fetchItems()
  await fetchServiceTypes()
})

const renderCards = (rowId) => {
  filteredItems = items.filter((item) => {
    return item.rowType == rowId ? item : null
  })
}
</script>

<template>
  <div class="services container-fluid">
    <h3 class="services__title">НАШИ УСЛУГИ</h3>
    <div class="card-list">
      <div class="card-list__title" v-for="row in rows" :key="row.id">
        <h4>{{ row.title }}</h4>

        <div class="row">
          {{ renderCards(row.id) }}
          <ServiceCard
            v-for="item in filteredItems"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :price="item.price"
            :imageUrl="item.imageUrl"
            :textArr="item.text"
          >
          </ServiceCard>
        </div>
      </div>
    </div>
    <ContactsFooter />
  </div>
</template>
