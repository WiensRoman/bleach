<script setup>
import closeIcon from '../../../assets/icons/close.svg'
import shopImgUrl0 from '../../../assets/images/shop0.png'
import shopImgUrl1 from '../../../assets/images/shop1.png'
import shopImgUrl2 from '../../../assets/images/shop2.png'
import shopImgUrl3 from '../../../assets/images/shop3.png'
import shopImgUrl4 from '../../../assets/images/shop4.png'
import shopImgUrl5 from '../../../assets/images/shop5.png'
import shopImgUrl6 from '../../../assets/images/shop6.png'
import shopImgUrl7 from '../../../assets/images/shop7.png'
import shopImgUrl8 from '../../../assets/images/shop8.png'
import shopImgUrl9 from '../../../assets/images/shop9.png'
import shopImgUrl10 from '../../../assets/images/shop10.png'
const emit = defineEmits(['onClickRemove'])

defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number
})

const arr = [
  shopImgUrl0,
  shopImgUrl1,
  shopImgUrl2,
  shopImgUrl3,
  shopImgUrl4,
  shopImgUrl5,
  shopImgUrl6,
  shopImgUrl7,
  shopImgUrl8,
  shopImgUrl9,
  shopImgUrl10
]
</script>

<template>
  <div class="drawer-card">
    <img class="drawer-card__image" :src="arr[id]" :alt="title" />

    <div class="drawer-card__title">
      <p>{{ title }}</p>

      <div class="drawer-card__price">
        <b>{{ price }} руб.</b>
        <img
          @click="emit('onClickRemove')"
          class="drawer-card__remove hover:opacity-100 transition"
          :src="closeIcon"
        />
      </div>
    </div>
  </div>
</template>
