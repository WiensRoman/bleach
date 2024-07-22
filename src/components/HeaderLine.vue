<script setup>
import IconsWrapper from './IconsWrapper.vue'
</script>

<template>
  <div class="flex ml-96">
    <div class="header-link mx-4">
      <RouterLink to="/services"><span class="text-lg font-bold">Услуги</span></RouterLink>
    </div>
    <div class="header-link mx-4 hover:transition-transform text-lg font-bold">
      <RouterLink to="/gallery"><span>Примеры работ</span></RouterLink>
    </div>
    <div class="header-link mx-4 text-lg font-bold"><span>Как мы работаем</span></div>
    <div class="header-link mx-4 text-lg font-bold"><span>Контакты</span></div>
    <div class="header-phone mx-4 text-lg font-bold">
      <a href="tel:+79255163317">+7(925)516-33-17</a>
    </div>
    <IconsWrapper class="w-24 flex ml-8 mr-4 icons-line" />
  </div>
</template>
