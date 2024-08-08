<script setup>
import FourthSlideCard from './FourthSlideCard.vue'
import ComponentHeader from '@/core/components/ComponentHeader.vue'
import { onMounted } from 'vue'
import AOS from 'aos'
import service0 from '@/assets/images/Fourth_slide_service_0.png'
import service1 from '@/assets/images/Fourth_slide_service_1.png'
import service2 from '@/assets/images/Fourth_slide_service_2.png'
import service3 from '@/assets/images/Fourth_slide_service_3.png'
import service4 from '@/assets/images/Fourth_slide_service_4.png'
import service5 from '@/assets/images/Fourth_slide_service_5.png'

onMounted(async () => {
  AOS.init()
})

let items = [
  {
    id: 0,
    title: 'Чистка обуви',
    textArr: ['Базовый уход для классической обуви', 'Чистка обуви', 'Чистка UGG'],
    price: 'От 6500 руб.',
    imageUrl: service0
  },
  {
    id: 1,
    title: 'Ремонт обуви',
    textArr: ['Профилактика для обуви', 'Набойки для обуви', 'Ремонт задников'],
    price: 'От 1000 руб.',
    imageUrl: service1
  },
  {
    id: 2,
    title: 'Реставрация обуви',
    textArr: ['Чистка, покраска и реставрация обуви', 'Реставрация каблуков'],
    price: 'От 6500 руб.',
    imageUrl: service2
  },
  {
    id: 3,
    title: 'Чистка и реставрация сумок',
    textArr: [
      'Покраска сумки с подбором цвета',
      'Реставрация углов сумки',
      'Чистка сумки',
      'Заливка уреза'
    ],
    price: 'От 3000 руб.',
    imageUrl: service3
  },
  {
    id: 4,
    title: 'Чистка и реставрация курток',
    textArr: [''],
    price: 'От 10000 руб.',
    imageUrl: service4
  },
  {
    id: 5,
    title: 'Замена подошвы Loro Piana',
    textArr: [
      'Покраска сумки с подбором цвета',
      'Реставрация углов сумки',
      'Чистка сумки',
      'Заливка уреза'
    ],
    price: '12000 руб.',
    imageUrl: service5
  }
]
</script>

<template>
  <div data-aos="fade-down" class="fourth-slide">
    <div class="container-fluid">
      <ComponentHeader title="НАШИ УСЛУГИ"></ComponentHeader>
      <div class="fourth-slide-cards row">
        <FourthSlideCard
          v-for="item in items"
          :key="item.index"
          :id="item.id"
          :title="item.title"
          :textArr="item.textArr"
          :price="item.price"
          :imageUrl="item.imageUrl"
        ></FourthSlideCard>
      </div>
    </div>
  </div>
</template>
