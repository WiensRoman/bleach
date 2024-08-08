<script setup>
import Contacts from '../../contacts/components/Contacts.vue'
import ContactsLinks from '../../contacts/components/ContactsLinks.vue'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(async () => {
  AOS.init()
})
</script>

<template>
  <div data-aos="fade-down" class="seventh-slide">
    <div class="container-fluid flex">
      <div class="seventh-slide-header">
        <h1>КОНТАКТЫ</h1>
      </div>
      <Contacts id="contacts"></Contacts>
      <ContactsLinks />
    </div>
  </div>
</template>
