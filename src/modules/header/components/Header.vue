<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import HeaderLine from './HeaderLine.vue'
import HeaderProfile from './HeaderProfile.vue'

defineProps({
  totalPrice: Number
})

const emit = defineEmits(['openDrawer', 'openLoginRegistrationModal'])
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <RouterLink to="/"
        ><img src="/src/assets/images/logo.png" alt="Logo" class="header__logo-image"
      /></RouterLink>
    </div>

    <HeaderLine />
    <HeaderProfile
      :total-price="totalPrice"
      @open-drawer="emit('openDrawer')"
      @open-login-registration-modal="emit('openLoginRegistrationModal')"
    />
  </header>
</template>
