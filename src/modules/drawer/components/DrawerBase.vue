<script setup>
import { ref, computed, inject } from 'vue'
import DrawerHead from './DrawerHead.vue'
import DrawerCardList from './DrawerCardList.vue'
import DrawerInfoBlock from './DrawerInfoBlock.vue'
import axios from 'axios'
import packageIcon from '../../../assets/images/package-icon.png'
import orderSuccessIcon from '../../..//assets/images/order-success-icon.png'

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number
})

const { cart } = inject('cart')

const isCreating = ref(false)
const orderId = ref(null)

const createOrder = async () => {
  try {
    isCreating.value = true
    const { data } = await axios.post('https://d8618ff445c5b9a8.mokky.dev/orders', {
      items: cart.value,
      totalPrice: props.totalPrice.value
    })

    cart.value = []

    orderId.value = data.id
  } catch (error) {
    console.log(error)
  } finally {
    isCreating.value = false
  }
}

const cartIsEmpty = computed(() => cart.value.length === 0)
const buttonDisabled = computed(() => isCreating.value || cartIsEmpty.value)
</script>

<template>
  <div class="drawer-window"></div>
  <div class="drawer-container">
    <DrawerHead />

    <div v-if="!totalPrice || orderId" class="drawer-infoblock">
      <DrawerInfoBlock
        v-if="!totalPrice && !orderId"
        title="Корзина пустая"
        description="Добавьте хотя бы один товар, чтобы сделать заказ."
        :image-url="packageIcon"
      />

      <DrawerInfoBlock
        v-if="orderId"
        title="Заказ оформлен!"
        :description="`Ваш заказ №${orderId} скоро будет передан курьерской доставке`"
        :image-url="orderSuccessIcon"
      />
    </div>

    <div v-else>
      <DrawerCardList />

      <div v-if="totalPrice" class="drawer-bottom">
        <div class="drawer-bottom__total__box">
          <span>Итого:</span>
          <div class="drawer-bottom__total"></div>
          <b>{{ totalPrice }} Р</b>
        </div>

        <div class="drawer-bottom__tax__box">
          <span>Налог 5%:</span>
          <div class="drawer-bottom__ta"></div>
          <b>{{ vatPrice }} Р</b>
        </div>
        <button
          :disabled="buttonDisabled"
          @click="createOrder"
          class="drawer-bottom__order disabled:bg-slate-300 active:bg-lime-700"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>
