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
import FifthSlide from '@/components/FifthSlide.vue'

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
  { path: '/work', name: 'FifthSlide', component: FifthSlide }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)

app.mount('#app')
