<script setup>
import { useTabStore } from '../../../stores/TabStore.js'
import { useRoute } from 'vue-router'
import { useCartStore } from '../../../stores/CartStore.js'

const cartStore = useCartStore()

const location = useRoute()

const tabStore = useTabStore()

tabStore.checkActiveTab(location)
</script>
<template>
  <div class="header">
    <svg
      @click="
        () => {
          cartStore.closeDrawer()
          tabStore.checkActiveTab(location)
        }
      "
      class="header__arrow rotate-180 hover:opacity-100 transition hover:-translate-x-1"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7H14.7143"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.71436 1L14.7144 7L8.71436 13"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <h2 class="header__title">Корзина</h2>
  </div>
</template>
