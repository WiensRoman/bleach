<script setup>
import { ref, watch, provide, computed } from 'vue'
import Header from '@/modules/header/components/Header.vue'
import DrawerBase from '@/modules/drawer/components/DrawerBase.vue'
import { useCartStore } from '../src/stores/CartStore.js'

const cartStore = useCartStore()

const cart = ref([])

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

let openMobileMenu = ref(false)

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)

provide('cart', {
  cart,
  addToCart,
  removeFromCart
})

provide('mobile', { openMobileMenu, totalPrice })
</script>
<template>
  <DrawerBase v-if="cartStore.drawerOpen" :total-price="totalPrice" :vatPrice="vatPrice" />
  <Header :total-price="totalPrice"></Header>
  <RouterView />
</template>

<style scoped></style>
