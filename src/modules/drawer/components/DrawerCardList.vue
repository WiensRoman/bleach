<script setup>
import { inject } from 'vue'
import DrawerCard from './DrawerCard.vue'

const { cart, removeFromCart } = inject('cart')
</script>

<template>
  <div class="card-list" v-auto-animate>
    <DrawerCard
      v-for="item in cart"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :price="item.price"
      :image-url="item.imageUrl"
      @on-click-remove="() => removeFromCart(item)"
    />
  </div>
</template>
