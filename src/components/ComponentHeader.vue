<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
  <div class="text-center">
    <h1>{{ title }}</h1>
  </div>
</template>
