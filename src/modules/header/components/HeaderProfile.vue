<script setup>
import LoginRegistrationModal from './LoginRegistrationModal.vue'
import MyProfileModal from './MyProfileModal.vue'
import { inject } from 'vue'
import { useTabStore } from '../../../stores/TabStore.js'

defineProps({
  totalPrice: Number
})

const tabStore = useTabStore()

const setTab = (id) => {
  tabStore.setActiveTab(id)
}
const { thisUserData } = inject('user')
const { LoginRegistrationModalOpen } = inject('modal')
const { myProfileModalOpen } = inject('user')
const emit = defineEmits(['openDrawer', 'openLoginRegistrationModal', 'openMyProfileModal'])
</script>

<template>
  <ul class="header-profile">
    <li
      @click="
        () => {
          emit('openDrawer')
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
          emit('openLoginRegistrationModal')
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
