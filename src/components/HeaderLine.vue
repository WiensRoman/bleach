<script setup>
import IconsWrapper from './IconsWrapper.vue'
</script>

<template>
  <div class="flex ml-96">
    <div class="header-link mx-4">
      <span class="text-lg font-bold">Услуги</span>
      <ul>
        <li><span class="text-lg font-bold">Услуги</span></li>
        <li><span class="text-lg font-bold">Сервис Loro Piana</span></li>
      </ul>
    </div>
    <div class="header-link mx-4 hover:transition-transform text-lg font-bold">
      <span>Примеры работ</span>
    </div>
    <div class="header-link mx-4 text-lg font-bold"><span>Как мы работаем</span></div>
    <div class="header-link mx-4 text-lg font-bold"><span>Контакты</span></div>
    <div class="header-phone mx-4 text-lg font-bold"><span>+7(925)435-01-01</span></div>
    <IconsWrapper class="w-24 flex ml-8 mr-4 icons-line" />
  </div>
</template>
