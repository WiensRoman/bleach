<script setup>
import { ref, watch, provide, computed } from 'vue'
import Header from '@/modules/header/components/Header.vue'
import Drawer from '@/modules/drawer/components/Drawer.vue'

const cart = ref([])

const drawerOpen = ref(false)

const profileModalOpen = ref(false)

const myProfileModalOpen = ref(false)

let thisUserData = ref(null)

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const closeMyProfileModal = () => {
  myProfileModalOpen.value = false
}

const openMyProfileModal = () => {
  myProfileModalOpen.value = true
}

const closeProfileModal = () => {
  profileModalOpen.value = false
}

const openProfileModal = () => {
  profileModalOpen.value = true

  console.log(profileModalOpen.value)
}

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
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

provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart
})
provide('modal', { openProfileModal, closeProfileModal, profileModalOpen })

provide('user', { openMyProfileModal, closeMyProfileModal, myProfileModalOpen, thisUserData })
</script>
<template>
  <Drawer v-if="drawerOpen" :total-price="totalPrice" :vatPrice="vatPrice" />
  <Header
    :total-price="totalPrice"
    @open-drawer="openDrawer"
    @open-profile-modal="openProfileModal"
  ></Header>
  <RouterView />
</template>

<style scoped></style>
