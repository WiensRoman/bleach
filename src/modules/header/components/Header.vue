<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import HeaderLine from './HeaderLine.vue'
import HeaderProfile from './HeaderProfile.vue'
import { useTabStore } from '../../../stores/TabStore.js'
import { ref, provide, inject } from 'vue'
import MobileMenu from './MobileMenu.vue'

const tabStore = useTabStore()

const setTab = (id) => {
  tabStore.setActiveTab(id)
}

let openMobileMenu = ref(false)

defineProps({
  totalPrice: Number
})
</script>

<template>
  <header>
    <div class="header">
      <div class="header__logo" @click="setTab(0)">
        <RouterLink to="/"
          ><img src="/src/assets/images/logo.png" alt="Logo" class="header__logo-image"
        /></RouterLink>
      </div>

      <HeaderLine />
      <HeaderProfile :total-price="totalPrice" />
    </div>
    <div class="header-1260px">
      <div class="container">
        <div class="header-1260px-logo">
          <RouterLink to="/"
            ><img src="/src/assets/images/logo.png" alt="Logo" class="header__logo-image"
          /></RouterLink>
        </div>
        <div
          :class="['burger-menu2', { open: openMobileMenu }]"
          @click="openMobileMenu = !openMobileMenu"
        >
          <div class="bar2"></div>
          <div class="bar2"></div>
          <div class="bar2"></div>
        </div>
      </div>
      <MobileMenu
        v-if="openMobileMenu"
        :class="{ 'show-menu': openMobileMenu }"
        :total-price="totalPrice"
      />
    </div>
  </header>
</template>
