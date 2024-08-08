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
  <header>
    <div class="header border-spacing-3 justify-between border-b border-slate-200 px-10">
      <div class="flex">
        <div class="header-logo">
          <RouterLink to="/"
            ><img src="/src/assets/images/logo.png" alt="Logo" class="w-40 logo"
          /></RouterLink>
        </div>

        <HeaderLine />
        <HeaderProfile
          :total-price="totalPrice"
          @open-drawer="emit('openDrawer')"
          @open-login-registration-modal="emit('openLoginRegistrationModal')"
        />
      </div>
    </div>
  </header>
</template>
