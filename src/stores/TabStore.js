import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTabStore = defineStore('tabStore', () => {
  const activeTab = ref(null)

  const setActiveTab = (id) => {
    activeTab.value = id
  }

  const tabInLocalStorage = localStorage.getItem('activeTab')
  if (tabInLocalStorage) {
    setActiveTab(tabInLocalStorage)
  }

  const checkActiveTab = (location) => {
    console.log(location)

    switch (location.fullPath) {
      case '/services':
        setActiveTab(1)
        break

      case '/gallery':
        setActiveTab(2)
        break

      case '/#work':
        setActiveTab(3)
        break

      case '/shop':
        setActiveTab(4)
        break

      case '/courier':
        setActiveTab(5)
        break

      case '/#contacts':
        setActiveTab(6)
        break

      case '/favorites':
        setActiveTab(8)
        break

      default:
        break
    }
  }

  watch(
    activeTab,
    () => {
      localStorage.setItem('activeTab', JSON.stringify(activeTab.value))
    },
    { deep: true }
  )

  return {
    activeTab,
    setActiveTab,
    checkActiveTab
  }
})
