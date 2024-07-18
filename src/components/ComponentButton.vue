<script setup>
defineProps({
  title: String
})
</script>

<template>
  <button className="button">
    <p>{{ title }}</p>
  </button>
</template>
