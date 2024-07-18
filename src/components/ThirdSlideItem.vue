<script setup>
defineProps({
  id: Number,
  title: String,
  descriptionArr: Array,
  imageUrl: String
})
// const ['row_' + props.id / 2] = ref()

const addRow = (row) => {
  console.log(id)
}
</script>

<template>
  <div v-if="!(id % 2)" :class="'row_' + id / 2" :ref="'row_' + id / 2" @v-model="'row_' + id / 2">
    <div class="third-slide-item">
      <div class="ts-item-image"><img :src="imageUrl" /></div>
      <div>
        <h2>{{ title }}</h2>
      </div>
      <div class="item-description">
        <p v-for="dscr in descriptionArr" :key="dscr.index">{{ dscr }}</p>
      </div>
    </div>
  </div>
  <div v-else @v-html="'row_' + id / 2">
    <div class="third-slide-item">
      <div class="ts-item-image"><img :src="imageUrl" /></div>
      <div>
        <h2>{{ title }}</h2>
      </div>
      <div class="item-description">
        <p v-for="dscr in descriptionArr" :key="dscr.index">{{ dscr }}</p>
      </div>
    </div>
  </div>
</template>
