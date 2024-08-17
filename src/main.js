import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import 'aos/dist/aos.css'
import HomePage from './modules/home/views/HomePage.vue'
import ServicesPage from './modules/services/views/ServicesPage.vue'
import GalleryPage from './modules/gallery/views/GalleryPage.vue'
import ShopPage from './modules/shop/views/ShopPage.vue'
import CourierPage from './modules/courier/views/CourierPage.vue'
import FavoritesPage from './modules/shop/views/FavoritesPage.vue'

const app = createApp(App)
app.use(PrimeVue, {
  unstyled: true
})

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/services', name: 'Services', component: ServicesPage },
  { path: '/gallery', name: 'Gallery', component: GalleryPage },
  { path: '/shop', name: 'Shop', component: ShopPage },
  { path: '/courier', name: 'Courier', component: CourierPage },
  { path: '/favorites', name: 'Favorites', component: FavoritesPage }
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
