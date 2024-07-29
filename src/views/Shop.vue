<script setup>
import axios from 'axios'
import CardList from '@/components/CardList.vue'
import { inject, reactive, watch, ref, onMounted } from 'vue'

const { cart, addToCart, removeFromCart } = inject('cart')

const items = ref([])

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id
      }
      item.isFavorite = true

      const { data } = await axios.post('https://d8618ff445c5b9a8.mokky.dev/favorites', obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://d8618ff445c5b9a8.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
  console.log(item)
}

// const onChangeSelect = (event) => {
//   filters.sortBy = event.target.value
// }

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get('https://d8618ff445c5b9a8.mokky.dev/items', {
      params
    })
    console.log(data)
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (err) {
    console.log(err)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://d8618ff445c5b9a8.mokky.dev/favorites')

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
    console.log(items.value)
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []

  await fetchItems()
  await fetchFavorites()

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
})

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }))
})

watch(filters, fetchItems)
</script>

<template>
  <div className="shop-slide">
    <div className="shop-container">
      <CardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddPlus" />
    </div>
  </div>
</template>
