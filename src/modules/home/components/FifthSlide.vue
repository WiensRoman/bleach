<script setup>
import ComponentHeader from '@/core/components/ComponentHeader.vue'
import FifthSlideDescription from './FifthSlideDescription.vue'
import FifthSlideCard from './FifthSlideCard.vue'
import { onMounted } from 'vue'
import AOS from 'aos'
import fifthSlideImg1 from '@/assets/images/fifth_slide_01.png'
import fifthSlideImg2 from '@/assets/images/fifth_slide_02.png'
import fifthSlideImg3 from '@/assets/images/fifth_slide_03.png'

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
    imageUrl: fifthSlideImg1
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
    imageUrl: fifthSlideImg2
  },
  {
    id: 2,
    title: 'Выполняем работу',
    subtitleArr: [
      'Работаем с вашими изделиями: чистим, красим, ',
      'ремонтируем и отправляем с курьером обратно. Вы ',
      'также можете забрать заказ самостоятельно'
    ],
    imageUrl: fifthSlideImg3
  }
]
</script>

<template>
  <div data-aos="fade-down" class="fifth-slide" id="work">
    <div class="container-fluid">
      <ComponentHeader title="КАК ВОСПОЛЬЗОВАТЬСЯ НАШИМИ УСЛУГАМИ?"></ComponentHeader>
      <FifthSlideDescription />
      <FifthSlideCard
        v-for="card in cardsArr"
        :key="card.id"
        :id="card.id"
        :title="card.title"
        :subtitleArr="card.subtitleArr"
        :imageUrl="card.imageUrl"
        :cardsArrLength="cardsArr.length"
      ></FifthSlideCard>
    </div>
  </div>
</template>
