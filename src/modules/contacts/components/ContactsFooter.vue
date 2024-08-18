<script setup>
import ContactsText from './ContactsText.vue'
import ContactsLinks from './ContactsLinks.vue'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(async () => {
  AOS.init()
})
</script>

<template>
  <div data-aos="fade-down" class="contacts">
    <div class="container-fluid">
      <div class="contacts__header">
        <h1>КОНТАКТЫ</h1>
      </div>
      <ContactsText id="contacts"></ContactsText>
      <ContactsLinks />
    </div>
  </div>
</template>
