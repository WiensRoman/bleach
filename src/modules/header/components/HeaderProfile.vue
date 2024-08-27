<script setup>
import LoginRegistrationModal from './LoginRegistrationModal.vue'
import MyProfileModal from './MyProfileModal.vue'
import { ref, provide } from 'vue'
import { useTabStore } from '../../../stores/TabStore.js'
import { useCartStore } from '../../../stores/CartStore.js'

defineProps({
  totalPrice: Number
})

const tabStore = useTabStore()
const cartStore = useCartStore()

const setTab = (id) => {
  tabStore.setActiveTab(id)
}

const myProfileModalOpen = ref(false)

let thisUserData = ref(null)
const closeMyProfileModal = () => {
  myProfileModalOpen.value = false
}

const openMyProfileModal = () => {
  myProfileModalOpen.value = true
}

const LoginRegistrationModalOpen = ref(false)

const closeLoginRegistrationModal = () => {
  LoginRegistrationModalOpen.value = false
}

const openLoginRegistrationModal = () => {
  LoginRegistrationModalOpen.value = true

  console.log(LoginRegistrationModalOpen.value)
}

provide('modal', {
  openLoginRegistrationModal,
  closeLoginRegistrationModal,
  LoginRegistrationModalOpen
})

provide('user', {
  thisUserData,
  openMyProfileModal,
  closeMyProfileModal,
  myProfileModalOpen
})
</script>

<template>
  <ul class="header-profile">
    <li
      @click="
        () => {
          cartStore.openDrawer()
          setTab(7)
        }
      "
      class="header-profile__item"
    >
      <img src="../../../assets/icons/cart.svg" alt="Cart" />
      <span :class="{ active: tabStore.activeTab == 7 }">{{ totalPrice }} руб.</span>
    </li>
    <RouterLink to="/favorites"
      ><li class="header-profile__item" @click="setTab(8)">
        <img src="../../../assets/icons/heart.svg" alt="Cart" />
        <span :class="{ active: tabStore.activeTab == 8 }">Закладки</span>
      </li></RouterLink
    >

    <li
      v-if="!thisUserData"
      @click="
        () => {
          openLoginRegistrationModal()
          setTab(9)
        }
      "
      class="header-profile__item"
    >
      <img src="../../../assets/icons/profile.svg" alt="Cart" />
      <span :class="{ active: tabStore.activeTab == 9 }">Профиль</span>
    </li>
    <li
      v-else
      @click="
        () => {
          myProfileModalOpen = true
          setTab(10)
        }
      "
      class="header-profile__item"
    >
      <img src="../../../assets/icons/profile.svg" alt="Cart" />
      <span :class="{ active: tabStore.activeTab == 10 }">{{ thisUserData.fullName }}</span>
    </li>
  </ul>
  <MyProfileModal v-if="myProfileModalOpen" />
  <LoginRegistrationModal v-if="LoginRegistrationModalOpen" />
</template>
