<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import HeaderLine from './HeaderLine.vue'
import HeaderProfile from './HeaderProfile.vue'
import { useTabStore } from '../../../stores/TabStore.js'

const tabStore = useTabStore()

const setTab = (id) => {
  tabStore.setActiveTab(id)
}

defineProps({
  totalPrice: Number
})
</script>

<template>
  <header class="header">
    <div class="header__logo" @click="setTab(0)">
      <RouterLink to="/"
        ><img src="/src/assets/images/logo.png" alt="Logo" class="header__logo-image"
      /></RouterLink>
    </div>

    <HeaderLine />
    <HeaderProfile :total-price="totalPrice" />
  </header>
</template>
