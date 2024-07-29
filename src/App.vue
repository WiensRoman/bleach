<script setup>
import { ref, watch, provide, computed } from 'vue'
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'

const cart = ref([])

const drawerOpen = ref(false)

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
  console.log(drawerOpen.value)
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)

provide('cart', { cart, closeDrawer, openDrawer, addToCart, removeFromCart })
</script>
<template>
  <Drawer v-if="drawerOpen" :total-price="totalPrice" :vatPrice="vatPrice" />
  <Header :total-price="totalPrice" @open-drawer="openDrawer"></Header>
  <RouterView />
</template>

<style scoped></style>
