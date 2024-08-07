<script setup>
import ProfileModal from './ProfileModal.vue'
import MyProfileModal from './MyProfileModal.vue'
import { inject } from 'vue'
defineProps({
  totalPrice: Number
})
const { thisUserData } = inject('user')
const { profileModalOpen } = inject('modal')
const { myProfileModalOpen } = inject('user')
const emit = defineEmits(['openDrawer', 'openProfileModal', 'openMyProfileModal'])
</script>

<template>
  <ul className="flex items-center gap-5">
    <li @click="() => emit('openDrawer')" class="header-profile">
      <img src="../../../assets/icons/cart.svg" alt="Cart" />
      <span>{{ totalPrice }} руб.</span>
    </li>
    <RouterLink to="/favorites"
      ><li className="header-profile">
        <img src="../../../assets/icons/heart.svg" alt="Cart" />
        <span>Закладки</span>
      </li></RouterLink
    >

    <li v-if="!thisUserData" @click="() => emit('openProfileModal')" className="header-profile">
      <img src="../../../assets/icons/profile.svg" alt="Cart" />
      <span>Профиль</span>
    </li>
    <li v-else @click="() => (myProfileModalOpen = true)" className="header-profile">
      <img src="../../../assets/icons/profile.svg" alt="Cart" />
      <span>{{ thisUserData.fullName }}</span>
    </li>
  </ul>
  <MyProfileModal v-if="myProfileModalOpen" />
  <ProfileModal v-if="profileModalOpen" />
</template>
