<script setup>
import ContactsIcons from './ContactsIcons.vue'
import ComponentButton from '@/core/components/ComponentButton.vue'
</script>

<template>
  <div className="seventh-slide-links flex">
    <div className="seventh-slide-buttons">
      <ComponentButton
        className="seventh-slide-button"
        title="Рассчитать стоимость"
        :isLink="true"
      ></ComponentButton>
      <a className="seventh-slide-button second" href="tel:+79255163317">Позвонить</a>
    </div>
    <div className="seventh-slide-stick"></div>
    <div className="seventh-slide-icons">
      <ContactsIcons class="flex ml-8 mr-4 icons-line" />
    </div>
  </div>
</template>
