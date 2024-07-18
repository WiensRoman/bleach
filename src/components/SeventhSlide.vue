<script setup>
import SeventhSlideContacts from './SeventhSlideContacts.vue'
import SeventhSlideLinks from '../components/SeventhSlideLinks.vue'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(async () => {
  AOS.init()
})
</script>

<template>
  <div data-aos="fade-down" className="seventh-slide">
    <div className="container-fluid flex">
      <div class="seventh-slide-header">
        <h1>Контакты</h1>
      </div>
      <SeventhSlideContacts></SeventhSlideContacts>
      <SeventhSlideLinks></SeventhSlideLinks>
    </div>
  </div>
</template>
