<script setup>
import ComponentHeader from '@/core/components/ComponentHeader.vue'
import ServiceCard from '../components/ServiceCard.vue'
import Contacts from '@/modules/contacts/components/Contacts.vue'
import ContactsLinks from '../../contacts/components/ContactsLinks.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
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

let filteredItems = []
const rows = ref([])

// const rows = [
//   {
//     id: 0,
//     title: 'Чистка обуви'
//   },
//   {
//     id: 1,
//     title: 'Реставрация обуви и курток'
//   },
//   {
//     id: 2,
//     title: 'Ремонт обуви'
//   },
//   {
//     id: 3,
//     title: 'Чистка и реставрация сумок'
//   }
// ]

const items = [
  {
    id: 0,
    imageUrl: serviceImg1,
    title: 'Чистка обуви',
    price: 'от 3500 руб.',
    text: [
      'Любая низкая обувь - 3500 руб.',
      'Ботинки и зимняя обувь до 30см - 4000 руб.',
      'Длинные сапоги и ботинки выше 30см - 4500 руб.',
      'Замена шнурков +500 руб.',
      'Водоотталкивающая пропитка +500 руб.',
      'Чистка обуви любых типов, брендов и из любых материалов. Выведение реагентов, трудных пятен и запахов. Чистка внутри и снаружи, чистка шнурков и дезодорант.'
    ],
    rowType: 0
  },
  {
    id: 1,
    imageUrl: serviceImg2,
    title: 'Комплекс UGG',
    price: '5000 руб.',
    text: [
      'Комплекс работ вернет вид вашим УГГам.',
      'Особый комплекс UGGи включает в себя',
      'бережную чистку вашей пары, выведение',
      'реагентов (по необходимости, в несколько',
      'этапов) и покраску / тонирование.'
    ],
    rowType: 0
  },
  {
    id: 2,
    imageUrl: serviceImg3,
    title: 'Базовый уход для классической обуви',
    price: '3500 руб.',
    text: [
      'Комплекс процедур по уходу за',
      'классической обувью. В услугу входит:',
      'чистка, выведение солей и реагентов,',
      'обработка бальзамами и кремами верхней',
      'части обуви, восстановление цвета и',
      'полировка, а так же обработка подошвы.'
    ],
    rowType: 0
  },
  {
    id: 3,
    imageUrl: serviceImg4,
    title: 'Комплекс: чистка, покраска и реставрация обуви',
    price: 'от 6000 р.',
    text: [
      'В комплекс входит чистка, реставрация',
      'царапин/задиров и покраска.',
      'Любая низкая обувь - 6500 руб.',
      'Ботинки и зимняя обувь до 30см - 7000 руб.',
      'Длинные сапоги и обувь выше 30см - 7500 руб.',
      'Каждый доп. цвет при покраске +1000 руб.',
      '(доп 2 цвета при покраске обуви +1500 руб.)',
      'Металлик цвет +2000 руб.',
      'Маскировка контрастной нити / сложная',
      'оклейка +1000 руб.'
    ],
    rowType: 1
  },
  {
    id: 4,
    imageUrl: serviceImg5,
    title: 'Реставрация каблуков и мысов',
    price: 'от 4000 р.',
    text: [
      'Реставрация кожаных каблуков / мысов - 4000 руб.',
      'Реставрация лаковых каблуков / мысов - 7000 руб.',
      'Реставрация лаковых мысов + каблуков - 10 000 руб.'
    ],
    rowType: 1
  },
  {
    id: 5,
    imageUrl: serviceImg6,
    title: 'Покраска куртки',
    price: 'от 12000 р.',
    text: [
      'Покраска кожаной / замшевой куртки с',
      'реставрацией от 12000 руб в зависимости от',
      'сложности работ.',
      'Оценка стоимости производится по фото в',
      'WhatsApp или в нашем приемном пункте.'
    ],
    rowType: 1
  },
  {
    id: 6,
    imageUrl: serviceImg7,
    title: 'Профилактика для обуви',
    price: 'от 2000 р.',
    text: [
      'Профилактика стандартная - 2000 руб.',
      'Профилактика глянцевая - 3000 руб.',
      'Подбор цвета профилактики'
    ],
    rowType: 2
  },
  {
    id: 7,
    imageUrl: serviceImg8,
    title: 'Набойки для обуви',
    price: 'от 1 000 р.',
    text: [
      'Набойки шпилька - 1000 руб.',
      'Набойки стандарт - 1500 руб.',
      'Набойки тракторные - 2000 руб.'
    ],
    rowType: 2
  },
  {
    id: 8,
    imageUrl: serviceImg9,
    title: 'Ремонт задников, изготовление стелек',
    price: 'от 1 500 р.',
    text: [
      'Заплатки (кармашки) на задники - от 3000 руб.',
      'Полный перешив задников - от 6500 руб.',
      'Внутренняя заплатка (например, разрыв на',
      'стыке подошвы и верха) - от 1500 руб.',
      'Изготовление стелек - 1000-1500 руб'
    ],
    rowType: 2
  },
  {
    id: 9,
    imageUrl: serviceImg10,
    title: 'Замена подошвы Loro Piana',
    price: '12 000 р.',
    text: [
      'Частая проблема дорогостоящей обуви',
      'от бренда Loro Piana - оригинальная подошва',
      'очень быстро желтеет, теряя товарный вид.'
    ],
    rowType: 2
  },
  {
    id: 10,
    imageUrl: serviceImg11,
    title: 'Замена молнии на обуви',
    price: '2500 р.',
    text: [
      'Замена молнии до 20 см (одна) - 2000 р.',
      'Замена молнии до 20 см (две) - 3500 р.',
      'Замена молнии более 20 см (одна) - 3000 р.',
      'Замена молнии более 25 см (две) - 5000 р.'
    ],
    rowType: 2
  },
  {
    id: 11,
    imageUrl: serviceImg12,
    title: 'Чистка сумки',
    price: 'от 3000 р.',
    text: [
      'Чистка сумки до 25см (без подклада) - 3000 руб.',
      'Более 25см (без подклада) - 4000 руб.',
      'Чистка подклада - 2500 руб.'
    ],
    rowType: 3
  },
  {
    id: 12,
    imageUrl: serviceImg13,
    title: 'Реставрация углов сумки',
    price: 'от 4000 р.',
    text: ['Реставрация 1-2 углов - 4000 руб.', 'Реставрация 3-4 углов - 5000 руб.'],
    rowType: 3
  },
  {
    id: 13,
    imageUrl: serviceImg14,
    title: 'Реставрация уреза',
    price: 'от 2000 р.',
    text: [
      'Ручка односторонняя - 2000-3000 руб.',
      'Ручка двусторонняя - 3000-5000 руб.',
      'Кошелек - 3000-5000 руб.',
      'Сумка (углы) - 2000-4000 руб.',
      'Сумка (корпус) - 5000 руб.',
      'Ремешок от 25см - 5000 руб.'
    ],
    rowType: 3
  },
  {
    id: 14,
    imageUrl: serviceImg15,
    title: 'Покраска сумки с подбором цвета',
    price: 'от 8000 р.',
    text: [
      'Покраска сумки до 25см (в любую из сторон) - от 8 000 руб.',
      'Покраска сумки более 25см (в любую из сторон) - от 12 000 руб.',
      'Каждый доп. цвет при покраске +2000 руб.',
      'Металлик цвет +2 000 руб.',
      'Маскировка нити / сложная оклейка +2000 руб.'
    ],
    rowType: 3
  },
  {
    id: 15,
    imageUrl: serviceImg16,
    title: 'Покраска клатча или кошелька',
    price: 'от 6 000 р.',
    text: [
      'Покраска клатча/кошелька с реставрацией кожи от 6 000 руб.',
      'Каждый доп. цвет при покраске +2000 руб.',
      'Металлик цвет +2 000 руб.',
      'Маскировка нити / сложная оклейка +2000 руб.'
    ],
    rowType: 3
  },
  {
    id: 16,
    imageUrl: serviceImg17,
    title: 'Ремонт сумок',
    price: 'от 2000 р.',
    text: [
      'Кошелек/клатч замена молнии - 3000 р.',
      'Сумка замена молнии до 25 см - 4000 р.',
      'Сумка замена молнии более 25 см - 5000 р.',
      'Рюкзак замена молнии - 6000р.',
      'Ремонт / изготовление петельки (одна) - 2000/3000 р.',
      'Ремонт / изготовление петельки (две) 3500/5000 р.'
    ],
    rowType: 3
  }
]
const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://d8618ff445c5b9a8.mokky.dev/serviceTypes', {})
    rows.value = data.map((obj) => ({
      ...obj
    }))
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await fetchItems()
})

const renderCards = (rowId) => {
  filteredItems = items.filter((item) => {
    return item.rowType == rowId ? item : null
  })
}
</script>

<template>
  <div className="services">
    <div class="container-fluid">
      <ComponentHeader title="НАШИ УСЛУГИ" className="text-center services-title"></ComponentHeader>
      <div className="services-cards">
        <div className="services-cards-title" v-for="row in rows" :key="row.id">
          <h3>{{ row.title }}</h3>

          <div className="row">
            {{ renderCards(row.id) }}
            <ServiceCard
              v-for="item in filteredItems"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              :price="item.price"
              :imageUrl="item.imageUrl"
              :textArr="item.text"
            >
            </ServiceCard>
          </div>
        </div>
      </div>
      <ComponentHeader title="Контакты" className="text-center"></ComponentHeader>
      <Contacts />
      <ContactsLinks />
    </div>
  </div>
</template>
