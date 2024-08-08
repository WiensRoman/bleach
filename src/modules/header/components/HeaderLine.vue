<script setup>
import HeaderIconsWrapper from './HeaderIconsWrapper.vue'
</script>

<template>
  <div class="header-links flex">
    <div class="header-link">
      <RouterLink to="/services"><span>Услуги</span></RouterLink>
    </div>
    <div class="header-link">
      <RouterLink to="/gallery"><span>Примеры работ</span></RouterLink>
    </div>
    <div class="header-link">
      <RouterLink to="/#work"><span>Как мы работаем</span></RouterLink>
    </div>
    <div class="header-link">
      <RouterLink to="/shop"><span>Магазин</span></RouterLink>
    </div>
    <div class="header-link">
      <RouterLink to="/courier"><span>Вызвать курьера</span></RouterLink>
    </div>
    <div class="header-link">
      <RouterLink to="/#contacts"><span>Контакты</span></RouterLink>
    </div>
    <div class="header-phone">
      <a href="tel:+79255163317">+7(925)516-33-17</a>
    </div>
    <HeaderIconsWrapper class="w-24 flex mr-4 icons-line" />
  </div>
</template>
