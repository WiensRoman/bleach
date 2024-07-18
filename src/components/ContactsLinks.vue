<script setup>
import SeventhSlideIcons from './SeventhSlideIcons.vue'
import ComponentButton from './ComponentButton.vue'
</script>

<template>
  <div className="seventh-slide-links flex">
    <div className="seventh-slide-buttons">
      <component-button
        className="seventh-slide-button"
        title="Рассчитать стоимость"
      ></component-button>
      <component-button
        className="seventh-slide-button second"
        title="Позвонить"
      ></component-button>
    </div>
    <div className="seventh-slide-stick"></div>
    <div className="seventh-slide-icons">
      <SeventhSlideIcons class="flex ml-8 mr-4 icons-line" />
    </div>
  </div>
</template>
