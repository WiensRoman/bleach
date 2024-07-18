<script setup>
import ComponentHeader from './ComponentHeader.vue'
import FifthSlideDescription from './FifthSlideDescription.vue'
import FifthSlideCard from './FifthSlideCard.vue'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(async () => {
  AOS.init()
})

const cardsArr = [
  {
    id: 0,
    title: 'Оцениваем заказ',
    subtitleArr: [
      'Мы не берёмся за работу вслепую. Нам крайне важно',
      'дать нашим клиентам высокое качество и экспертизу',
      'Поэтому,перед тем,как назначить курьера, наши',
      'специалисты оценивают сложность работ по фото,',
      'которые вы присылаете нам в соцсетях и дают',
      'комментарий по объёму работ и ожидаемому результату.'
    ],
    imageUrl: 'src/assets/fifth_slide_01.png'
  },
  {
    id: 1,
    title: 'Назначаем курьера',
    subtitleArr: [
      'После оценки работ, наша команда назначает',
      'курьера, который приедет на ваш адрес и заберёт',
      'обувь и изделия в нашу мастерскую. Также, вы',
      'можете привезти её к нам самостоятельно в один из',
      'приёмных пунктов.'
    ],
    imageUrl: 'src/assets/fifth_slide_02.png'
  },
  {
    id: 2,
    title: 'Выполняем работу',
    subtitleArr: [
      'Работаем с вашими изделиями: чистим, красим, ',
      'ремонтируем и отправляем с курьером обратно. Вы ',
      'также можете забрать заказ самостоятельно'
    ],
    imageUrl: 'src/assets/fifth_slide_03.png'
  }
]
</script>

<template>
  <div data-aos="fade-down" className="fifth-slide">
    <div className="container-fluid">
      <component-header title="КАК ВОСПОЛЬЗОВАТЬСЯ НАШИМИ УСЛУГАМИ?"></component-header>
      <fifth-slide-description></fifth-slide-description>
      <fifth-slide-card
        v-for="card in cardsArr"
        :key="card.id"
        :id="card.id"
        :title="card.title"
        :subtitleArr="card.subtitleArr"
        :imageUrl="card.imageUrl"
        :cardsArrLength="cardsArr.length"
      ></fifth-slide-card>
    </div>
  </div>
</template>
