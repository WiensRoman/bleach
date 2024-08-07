<script setup>
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
</script>

<template>
  <div
    class="shop-card relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      v-if="visibleFavoriteButton"
      :src="!isFavorite ? 'src/assets/icons/like-1.svg' : 'src/assets/icons/like-2.svg'"
      alt="Like 1"
      class="like absolute top-8 left-8"
      @click="onClickFavorite"
    />

    <img :src="imageUrl" alt="Item" />

    <p class="mt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <b>{{ price }} руб.</b>
      </div>

      <img
        v-if="visibleFavoriteButton"
        className="add"
        @click="onClickAdd"
        :src="!isAdded ? 'src/assets/icons/plus.svg' : 'src/assets/icons/checked.svg'"
        alt="Plus"
      />
    </div>
  </div>
</template>
