import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createRouter, createWebHistory } from 'vue-router'
import 'aos/dist/aos.css'

const app = createApp(App)
// app.component('font-awesome-icon', FontAwesomeIcon)
app.use(PrimeVue, {
  unstyled: true
})

// app.use(createPinia())
const routes = []

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)

app.mount('#app')
