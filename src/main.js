import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import 'aos/dist/aos.css'
import Home from './modules/home/views/Home.vue'
import ServicesPage from './modules/services/views/ServicesPage.vue'
import Gallery from './modules/gallery/views/Gallery.vue'
import Shop from './modules/shop/views/Shop.vue'
import Courier from './modules/courier/views/Courier.vue'
import Favorites from './modules/shop/views/Favorites.vue'

const app = createApp(App)
// app.component('font-awesome-icon', FontAwesomeIcon)
app.use(PrimeVue, {
  unstyled: true
})

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: ServicesPage },
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
app.use(autoAnimatePlugin)
app.mount('#app')
