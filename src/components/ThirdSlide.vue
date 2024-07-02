<script setup>
import ThirdSlideItem from '../components/ThirdSlideItem.vue'
import ThirdSlideButton from '../components/ThirdSlideButton.vue'
import ComponentHeader from '../components/ComponentHeader.vue'
// defineProps({
//   items: Array
// })

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
    imageUrl: 'src/assets/component_1.png',
    row: false
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
    imageUrl: 'src/assets/component_2.png',
    row: false
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
    imageUrl: 'src/assets/component_3.png',
    row: false
  },
  {
    id: 3,
    title: 'Бесплатная доставка в пределах МКАД',
    description: ['Наш курьер заберет ваши изделия', 'и доставит готовый заказ в удобное время'],
    imageUrl: 'src/assets/component_4.png',
    row: false
  }
]
// items = items.map(() => {
//   items.id / 2 ? (items.row = true) : (items.row = false)
// })
// console.log(items)
</script>

<template>
  <div class="flex justify-center third-slide">
    <div className="container-fluid">
      <component-header title="Почему мы?"></component-header>
      <third-slide-item
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :imageUrl="item.imageUrl"
        :descriptionArr="item.description"
      ></third-slide-item>
      <third-slide-button />
    </div>
  </div>
</template>
