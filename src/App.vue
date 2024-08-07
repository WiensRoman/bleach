<script setup>
import { ref, watch, provide, computed } from 'vue'
import Header from '@/modules/header/components/Header.vue'
import DrawerBase from '@/modules/drawer/components/DrawerBase.vue'

const cart = ref([])

const drawerOpen = ref(false)

const LoginRegistrationModalOpen = ref(false)

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

const closeLoginRegistrationModal = () => {
  LoginRegistrationModalOpen.value = false
}

const openLoginRegistrationModal = () => {
  LoginRegistrationModalOpen.value = true

  console.log(LoginRegistrationModalOpen.value)
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
provide('modal', {
  openLoginRegistrationModal,
  closeLoginRegistrationModal,
  LoginRegistrationModalOpen
})

provide('user', { openMyProfileModal, closeMyProfileModal, myProfileModalOpen, thisUserData })
</script>
<template>
  <DrawerBase v-if="drawerOpen" :total-price="totalPrice" :vatPrice="vatPrice" />
  <Header
    :total-price="totalPrice"
    @open-drawer="openDrawer"
    @open-login-registration-modal="openLoginRegistrationModal"
  ></Header>
  <RouterView />
</template>

<style scoped></style>
