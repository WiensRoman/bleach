<script setup>
defineProps({
  title: String,
  isLink: Boolean
})
</script>

<template>
  <a v-if="isLink" class="button" href="https://wa.me//79255163317"
    ><p>{{ title }}</p></a
  >
  <button v-else class="button">
    <p>{{ title }}</p>
  </button>
</template>
