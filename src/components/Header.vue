<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import HeaderLine from './HeaderLine.vue'
</script>

<template>
  <div class="border-spacing-3 justify-between border-b border-slate-200 px-10 header">
    <div class="flex">
      <div className="header-logo">
        <RouterLink to="/"
          ><img src="/src/assets/logo.png" alt="Logo" class="w-40 logo"
        /></RouterLink>
      </div>

      <HeaderLine />
      <a href="https://wa.me//79255163317" className="header-button">
        <span>Рассчитать стоимость</span>
      </a>
    </div>
  </div>
</template>
