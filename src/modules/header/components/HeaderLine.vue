<script setup>
import HeaderIconsWrapper from './HeaderIconsWrapper.vue'
</script>

<template>
  <div class="links flex">
    <div class="link">
      <RouterLink to="/services"><span>Услуги</span></RouterLink>
    </div>
    <div class="link">
      <RouterLink to="/gallery"><span>Примеры работ</span></RouterLink>
    </div>
    <div class="link">
      <RouterLink to="/#work"><span>Как мы работаем</span></RouterLink>
    </div>
    <div class="link">
      <RouterLink to="/shop"><span>Магазин</span></RouterLink>
    </div>
    <div class="link">
      <RouterLink to="/courier"><span>Вызвать курьера</span></RouterLink>
    </div>
    <div class="link">
      <RouterLink to="/#contacts"><span>Контакты</span></RouterLink>
    </div>
    <div class="phone">
      <a href="tel:+79255163317">+7(925)516-33-17</a>
    </div>
    <HeaderIconsWrapper class="icons" />
  </div>
</template>
