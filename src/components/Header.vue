<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import HeaderLine from './HeaderLine.vue'
</script>

<template>
  <div class="border-spacing-3 justify-between border-b border-slate-200 px-10 header">
    <div class="flex">
      <RouterLink to="/"><img src="/logo.png" alt="Logo" class="w-40 logo" /></RouterLink>
      <HeaderLine />
      <button
        class="bg-black hover:text-black hover:bg-white border-2 rounded-3xl text-white h-12 px-5 mt-5"
      >
        Рассчитать стоимость
      </button>
    </div>
  </div>
</template>
