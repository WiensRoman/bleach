<script setup>
import IconsWrapper from './IconsWrapper.vue'
</script>

<template>
  <div className="header-links flex">
    <div className="header-link mx-4">
      <RouterLink to="/services"><span className="text-lg font-bold">Услуги</span></RouterLink>
    </div>
    <div className="header-link mx-4 hover:transition-transform text-lg font-bold">
      <RouterLink to="/gallery"><span>Примеры работ</span></RouterLink>
    </div>
    <div className="header-link mx-4 text-lg font-bold">
      <RouterLink to="/#work"><span>Как мы работаем</span></RouterLink>
    </div>
    <div className="header-link mx-4 text-lg font-bold">
      <RouterLink to="/#contacts"><span>Контакты</span></RouterLink>
    </div>
    <div className="header-phone mx-4 text-lg font-bold">
      <a href="tel:+79255163317">+7(925)516-33-17</a>
    </div>
    <IconsWrapper class="w-24 flex ml-8 mr-4 icons-line" />
  </div>
</template>
