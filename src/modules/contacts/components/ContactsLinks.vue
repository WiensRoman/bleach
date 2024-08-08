<script setup>
import ContactsIcons from './ContactsIcons.vue'
import ComponentButton from '@/core/components/ComponentButton.vue'
</script>

<template>
  <div class="seventh-slide-links flex">
    <div class="seventh-slide-buttons">
      <ComponentButton
        class="seventh-slide-button"
        title="Рассчитать стоимость"
        :isLink="true"
      ></ComponentButton>
      <a class="seventh-slide-button second" href="tel:+79255163317">Позвонить</a>
    </div>
    <div class="seventh-slide-stick"></div>
    <div class="seventh-slide-icons">
      <ContactsIcons class="flex ml-8 mr-4 icons-line" />
    </div>
  </div>
</template>
