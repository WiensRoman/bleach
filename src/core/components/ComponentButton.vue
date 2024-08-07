<script setup>
defineProps({
  title: String,
  isLink: Boolean
})
</script>

<template>
  <a v-if="isLink" className="button" href="https://wa.me//79255163317"
    ><p>{{ title }}</p></a
  >
  <button v-else className="button">
    <p>{{ title }}</p>
  </button>
</template>
