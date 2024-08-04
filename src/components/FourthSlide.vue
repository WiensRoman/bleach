<script setup>
import FourthSlideCard from './FourthSlideCard.vue'
import ComponentHeader from './ComponentHeader.vue'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(async () => {
  AOS.init()
})

let items = [
  {
    id: 0,
    title: 'Чистка обуви',
    textArr: ['Базовый уход для классической обуви', 'Чистка обуви', 'Чистка UGG'],
    price: 'От 6500 руб.',
    imageUrl: './src/assets/Fourth_slide_service_0.png'
  },
  {
    id: 1,
    title: 'Ремонт обуви',
    textArr: ['Профилактика для обуви', 'Набойки для обуви', 'Ремонт задников'],
    price: 'От 1000 руб.',
    imageUrl: './src/assets/Fourth_slide_service_1.png'
  },
  {
    id: 2,
    title: 'Реставрация обуви',
    textArr: ['Чистка, покраска и реставрация обуви', 'Реставрация каблуков'],
    price: 'От 6500 руб.',
    imageUrl: './src/assets/Fourth_slide_service_2.png'
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
    imageUrl: './src/assets/Fourth_slide_service_3.png'
  },
  {
    id: 4,
    title: 'Чистка и реставрация курток',
    textArr: [''],
    price: 'От 10000 руб.',
    imageUrl: './src/assets/Fourth_slide_service_4.png'
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
    imageUrl: './src/assets/Fourth_slide_service_5.png'
  }
]
</script>

<template>
  <div data-aos="fade-down" className="fourth-slide">
    <div className="container-fluid">
      <component-header title="НАШИ УСЛУГИ"></component-header>
      <div className="fourth-slide-cards row">
        <fourth-slide-card
          v-for="item in items"
          :key="item.index"
          :id="item.id"
          :title="item.title"
          :textArr="item.textArr"
          :price="item.price"
          :imageUrl="item.imageUrl"
        ></fourth-slide-card>
      </div>
    </div>
  </div>
</template>
