<script setup>
import ComponentButton from '@/core/components/ComponentButton.vue'
import serviceImg1 from '../../../assets/images/service_1.png'
import serviceImg2 from '../../../assets/images/service_2.png'
import serviceImg3 from '../../../assets/images/service_3.png'
import serviceImg4 from '../../../assets/images/service_4.png'
import serviceImg5 from '../../../assets/images/service_5.png'
import serviceImg6 from '../../../assets/images/service_6.png'
import serviceImg7 from '../../../assets/images/service_7.png'
import serviceImg8 from '../../../assets/images/service_8.png'
import serviceImg9 from '../../../assets/images/service_9.png'
import serviceImg10 from '../../../assets/images/service_10.png'
import serviceImg11 from '../../../assets/images/service_11.png'
import serviceImg12 from '../../../assets/images/service_12.png'
import serviceImg13 from '../../../assets/images/service_13.png'
import serviceImg14 from '../../../assets/images/service_14.png'
import serviceImg15 from '../../../assets/images/service_15.png'
import serviceImg16 from '../../../assets/images/service_16.png'
import serviceImg17 from '../../../assets/images/service_17.png'
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: String,
  textArr: Array
})

const arr = [
  serviceImg1,
  serviceImg2,
  serviceImg3,
  serviceImg4,
  serviceImg5,
  serviceImg6,
  serviceImg7,
  serviceImg8,
  serviceImg9,
  serviceImg10,
  serviceImg11,
  serviceImg12,
  serviceImg13,
  serviceImg14,
  serviceImg15,
  serviceImg16,
  serviceImg17
]
</script>

<template>
  <div class="card">
    <div class="card__img"><img :src="arr[id]" /></div>
    <div class="card__title">
      <h4>{{ title }}</h4>
    </div>
    <div class="card__price">
      <p>{{ price }}</p>
    </div>
    <div class="card__text">
      <p v-for="text in textArr" :key="text.index">{{ text }}</p>
    </div>
    <ComponentButton
      class="card__button"
      title="Рассчитать стоимость"
      :isLink="true"
    ></ComponentButton>
  </div>
</template>
