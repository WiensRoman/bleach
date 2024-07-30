<script setup>
import ProfileModal from './ProfileModal.vue'
import { ref } from 'vue'
defineProps({
  totalPrice: Number
})

const openModal = ref(false)

const emit = defineEmits(['openDrawer', 'openProfileModal'])
</script>

<template>
  <ul className="flex items-center gap-5">
    <li @click="() => emit('openDrawer')" class="header-profile">
      <img src="../assets/cart.svg" alt="Cart" />
      <span>{{ totalPrice }} руб.</span>
    </li>
    <RouterLink to="/favorites"
      ><li className="header-profile">
        <img src="../assets/heart.svg" alt="Cart" />
        <span>Закладки</span>
      </li></RouterLink
    >

    <li
      @click="
        () => {
          openModal = true
        }
      "
      className="header-profile"
    >
      <img src="../assets/profile.svg" alt="Cart" />
      <span>Профиль</span>
    </li>
  </ul>
  <ProfileModal v-if="openModal" :open-modal="openModal" />
</template>
