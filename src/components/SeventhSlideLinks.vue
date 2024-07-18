<script setup>
import SeventhSlideIcons from './SeventhSlideIcons.vue'
</script>

<template>
  <div className="seventh-slide-links flex">
    <div className="seventh-slide-buttons">
      <button className="seventh-slide-button"><p>Рассчитать стоимость</p></button>
      <button className="seventh-slide-button second"><p>Позвонить</p></button>
    </div>
    <div className="seventh-slide-stick"></div>
    <div className="seventh-slide-icons">
      <SeventhSlideIcons class="flex ml-8 mr-4 icons-line" />
    </div>
  </div>
</template>
