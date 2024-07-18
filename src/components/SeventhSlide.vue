<script setup>
import Contacts from './Contacts.vue'
import ContactsLinks from '../components/ContactsLinks.vue'
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
      <Contacts></Contacts>
      <ContactsLinks></ContactsLinks>
    </div>
  </div>
</template>
