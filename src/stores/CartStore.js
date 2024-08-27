import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cartStore', () => {
  const drawerOpen = ref(false)
  const closeDrawer = () => {
    drawerOpen.value = false
  }

  const openDrawer = () => {
    drawerOpen.value = true
  }

  return {
    openDrawer,
    closeDrawer,
    drawerOpen
  }
})
