<script setup>
import { useCartStore } from '../../../stores/CartStore.js'
defineProps({
  totalPrice: Number
})

const cartStore = useCartStore()
</script>

<template>
  <div class="mobile-menu">
    <div class="header-line">
      <div class="header-links">
        <div class="header-link">
          <RouterLink to="/services"><span>Услуги</span></RouterLink>
        </div>
        <div class="header-link">
          <RouterLink to="/gallery"><span>Примеры работ</span></RouterLink>
        </div>
        <div class="header-link">
          <RouterLink to="/#work"><span>Как мы работаем</span></RouterLink>
        </div>
        <div class="header-link">
          <RouterLink to="/shop"><span>Магазин</span></RouterLink>
        </div>
        <div class="header-link">
          <RouterLink to="/courier"><span>Вызвать курьера</span></RouterLink>
        </div>
        <div class="header-link">
          <RouterLink to="/#contacts"><span>Контакты</span></RouterLink>
        </div>
        <div class="header-link">
          <RouterLink to="/favorites"><span>Закладки</span></RouterLink>
        </div>
        <div class="header-link">
          <RouterLink to=""><span>Профиль</span></RouterLink>
        </div>
        <div
          class="header-link"
          @click="
            () => {
              cartStore.openDrawer()
            }
          "
        >
          <RouterLink to=""
            ><span>Корзина: {{ totalPrice }} руб.</span></RouterLink
          >
        </div>
      </div>
      <div class="header-phone">
        <a href="tel:+79255163317">+7(925)516-33-17</a>
      </div>
      <div class="header-icons">
        <a href="https://wa.me//79255163317"
          ><img
            src="../../../assets/icons/whatsapp-white.svg
        "
        /></a>
        <a href="https://www.instagram.com/romanwiens"
          ><img
            src="../../../assets/icons/instagram-white.svg
        "
        /></a>
        <a href="https://t.me/Wiensus"
          ><img
            src="../../../assets/icons/telegram-white.svg
        "
        /></a>
      </div>
    </div>
  </div>
</template>
