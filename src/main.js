import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createRouter, createWebHistory } from 'vue-router'
import 'aos/dist/aos.css'
import Home from '@/views/Home.vue'
import Services from '@/views/Services.vue'
import Gallery from '@/views/Gallery.vue'
import Shop from './views/Shop.vue'
import Courier from './views/Courier.vue'
import Favorites from './views/Favorites.vue'

const app = createApp(App)
// app.component('font-awesome-icon', FontAwesomeIcon)
app.use(PrimeVue, {
  unstyled: true
})

// app.use(createPinia())
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/courier', name: 'Courier', component: Courier },
  { path: '/favorites', name: 'Favorites', component: Favorites }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { x: 0, y: 0 }
  }
})

app.use(router)

app.mount('#app')
