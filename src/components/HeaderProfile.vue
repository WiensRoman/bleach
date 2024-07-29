<script setup>
defineProps({
  totalPrice: Number
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <ul className="flex items-center gap-5">
    <li @click="() => emit('openDrawer')" class="header-profile">
      <img src="../assets/cart.svg" alt="Cart" />
      <span>{{ totalPrice }} руб.</span>
    </li>
    <RouterLink to="/favorites"
      ><li className="header-profile">
        <img src="../assets/heart.svg" alt="Cart" />
        <span>Закладки</span>
      </li></RouterLink
    >

    <li className="header-profile">
      <img src="../assets/profile.svg" alt="Cart" />
      <span>Профиль</span>
    </li>
  </ul>
</template>
