<script setup>
import ContactsIcons from './ContactsIcons.vue'
import ComponentButton from '@/core/components/ComponentButton.vue'
</script>

<template>
  <div class="contacts-links">
    <div class="contacts-buttons">
      <ComponentButton
        class="contacts-button"
        title="Рассчитать стоимость"
        :isLink="true"
      ></ComponentButton>
      <a class="contacts-button second" href="tel:+79255163317">Позвонить</a>
    </div>
    <div class="contacts__stick"></div>
    <div class="contacts-icons">
      <ContactsIcons class="icons-line" />
    </div>
  </div>
</template>
