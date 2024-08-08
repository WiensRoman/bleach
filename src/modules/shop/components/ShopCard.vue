<script setup>
import like1Icon from '../../../assets/icons/like-1.svg'
import like2Icon from '../../../assets/icons/like-2.svg'
import plusIcon from '../../../assets/icons/plus.svg'
import checked2Icon from '../../../assets/icons/checked.svg'
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
const props = defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function
})

const visibleFavoriteButton = Boolean(props.onClickAdd)

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
  <div class="shop-card transition hover:-translate-y-2 hover:shadow-xl">
    <img
      v-if="visibleFavoriteButton"
      :src="!isFavorite ? like1Icon : like2Icon"
      alt="Like 1"
      class="like"
      @click="onClickFavorite"
    />

    <img :src="arr[id]" alt="Item" />

    <p class="mt-2">{{ title }}</p>

    <div class="shop-card__bottom">
      <div class="shop-card__price">
        <span class="shop-card__price__title">Цена:</span>
        <b>{{ price }} руб.</b>
      </div>

      <img
        v-if="visibleFavoriteButton"
        className="add"
        @click="onClickAdd"
        :src="!isAdded ? plusIcon : checked2Icon"
        alt="Plus"
      />
    </div>
  </div>
</template>
