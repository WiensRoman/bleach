<script setup>
import LoginRegistrationModal from './LoginRegistrationModal.vue'
import MyProfileModal from './MyProfileModal.vue'
import { inject } from 'vue'
defineProps({
  totalPrice: Number
})
const { thisUserData } = inject('user')
const { LoginRegistrationModalOpen } = inject('modal')
const { myProfileModalOpen } = inject('user')
const emit = defineEmits(['openDrawer', 'openLoginRegistrationModal', 'openMyProfileModal'])
</script>

<template>
  <ul class="flex items-center gap-5">
    <li @click="() => emit('openDrawer')" class="header-profile">
      <img src="../../../assets/icons/cart.svg" alt="Cart" />
      <span>{{ totalPrice }} руб.</span>
    </li>
    <RouterLink to="/favorites"
      ><li class="header-profile">
        <img src="../../../assets/icons/heart.svg" alt="Cart" />
        <span>Закладки</span>
      </li></RouterLink
    >

    <li
      v-if="!thisUserData"
      @click="() => emit('openLoginRegistrationModal')"
      class="header-profile"
    >
      <img src="../../../assets/icons/profile.svg" alt="Cart" />
      <span>Профиль</span>
    </li>
    <li v-else @click="() => (myProfileModalOpen = true)" class="header-profile">
      <img src="../../../assets/icons/profile.svg" alt="Cart" />
      <span>{{ thisUserData.fullName }}</span>
    </li>
  </ul>
  <MyProfileModal v-if="myProfileModalOpen" />
  <LoginRegistrationModal v-if="LoginRegistrationModalOpen" />
</template>
