<script setup>
import HeaderIconsWrapper from './HeaderIconsWrapper.vue'
import { useTabStore } from '../../../stores/TabStore.js'

const tabStore = useTabStore()

const setTab = (id) => {
  tabStore.setActiveTab(id)
}
</script>

<template>
  <div class="links flex">
    <div class="link" @click="setTab(1)">
      <RouterLink to="/services"
        ><span :class="{ active: tabStore.activeTab == 1 }">Услуги</span></RouterLink
      >
    </div>
    <div class="link" @click="setTab(2)">
      <RouterLink to="/gallery"
        ><span :class="{ active: tabStore.activeTab == 2 }">Примеры работ</span></RouterLink
      >
    </div>
    <div class="link" @click="setTab(3)">
      <RouterLink to="/#work"
        ><span :class="{ active: tabStore.activeTab == 3 }">Как мы работаем</span></RouterLink
      >
    </div>
    <div class="link" @click="setTab(4)">
      <RouterLink to="/shop"
        ><span :class="{ active: tabStore.activeTab == 4 }">Магазин</span></RouterLink
      >
    </div>
    <div class="link" @click="setTab(5)">
      <RouterLink to="/courier"
        ><span :class="{ active: tabStore.activeTab == 5 }">Вызвать курьера</span></RouterLink
      >
    </div>
    <div class="link" @click="setTab(6)">
      <RouterLink to="/#contacts"
        ><span :class="{ active: tabStore.activeTab == 6 }">Контакты</span></RouterLink
      >
    </div>
    <div class="phone">
      <a href="tel:+79255163317">+7(925)516-33-17</a>
    </div>
    <div class="icons">
      <div class="icon">
        <a href="https://www.instagram.com/romanwiens">
          <img src="../../../assets/icons/instagram-black.svg" />
        </a>
      </div>
      <div class="icon">
        <a href="https://wa.me//79255163317"
          ><img src="../../../assets/icons/whatsapp-black.svg"
        /></a>
      </div>
      <div class="icon" style="margin-top: 27%">
        <a href="https://t.me/Wiensus"><img src="../../../assets/icons/telegram-black.svg" /></a>
      </div>
    </div>
  </div>
</template>
