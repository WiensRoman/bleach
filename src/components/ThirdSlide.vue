<script setup>
import ThirdSlideItem from '../components/ThirdSlideItem.vue'
import ComponentButton from '../components/ComponentButton.vue'
import ComponentHeader from '../components/ComponentHeader.vue'
import { onMounted } from 'vue'
import AOS from 'aos'
import photo from '/assets/component_1.png'

onMounted(async () => {
  AOS.init()
})

let filteredItems = []

let rows = [0, 1]

let items = [
  {
    id: 0,
    title: 'Нам более 5 лет',
    description: [
      'Тысячи довольных клиентов',
      'воспользовались нашим сервисом и',
      'десятки тысяч пар обуви, сумок и изделий ',
      'прошли через наши руки.'
    ],
    imageUrl: photo,
    rowType: 0
  },
  {
    id: 1,
    title: 'Делаем предварительную оценку удаленно',
    description: [
      'Оцениваем стоимость',
      'работ по фото, которые',
      'вы присылаете нам и',
      'даём гарантию результата'
    ],
    imageUrl: '../assets/component_10_7.png',
    rowType: 0
  },
  {
    id: 2,
    title: 'Наша миссия',
    description: [
      '— Донести в массы тот факт, что вашей обуви,',
      'сумкам и другим изделиям из кожи можно',
      'подарить вторую жизнь или продлить срок',
      'службы. Благодаря бережному уходу и услугам',
      'по реставрации ваши любимые вещи пробудут с',
      'вами гораздо дольше!'
    ],
    imageUrl: '../assets/component_3.png',
    rowType: 1
  },
  {
    id: 3,
    title: 'Бесплатная доставка в пределах МКАД',
    description: ['Наш курьер заберет ваши изделия', 'и доставит готовый заказ в удобное время'],
    imageUrl: '../assets/component_10_7.png',
    rowType: 1
  }
]
const renderCards = (rowId) => {
  filteredItems = []
  filteredItems = items.filter((item) => {
    return item.rowType == rowId ? item : null
  })
}
</script>

<template>
  <div data-aos="fade-down" class="flex justify-center third-slide">
    <div className="container-fluid">
      <component-header title="ПОЧЕМУ МЫ?"></component-header>
      <div className="row ts-cards-top" v-for="row in rows" :key="row">
        {{ renderCards(row) }}
        <third-slide-item
          v-for="item in filteredItems"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :imageUrl="item.imageUrl"
          :descriptionArr="item.description"
        ></third-slide-item>
      </div>
      <component-button title="Рассчитать стоимость" :isLink="true" />
    </div>
  </div>
</template>
