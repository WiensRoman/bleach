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
  <div class="drawer">
    <DrawerHead />

    <div v-if="!totalPrice || orderId" class="infoblock">
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

      <div v-if="totalPrice" class="bottom">
        <div class="total-box">
          <span>Итого:</span>
          <div class="total-box__price">
            <b>{{ totalPrice }} Р</b>
          </div>
        </div>

        <div class="tax-box">
          <span>Налог 5%:</span>
          <div class="tax-box__number">
            <b>{{ vatPrice }} Р</b>
          </div>
        </div>
        <button
          :disabled="buttonDisabled"
          @click="createOrder"
          class="order-button disabled:bg-slate-300 active:bg-lime-700"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>
