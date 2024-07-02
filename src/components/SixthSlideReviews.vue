<script setup>
import SixthSlideReviewsLeft from './SixthSlideReviewsLeft.vue'
import SixthSlideReviewsRight from './SixthSlideReviewsRight.vue'

const reviewsLeftArr = [
  { imageUrl: 'src/assets/review_1.png' },
  { imageUrl: 'src/assets/review_2.png' },
  { imageUrl: 'src/assets/review_3.png' },
  { imageUrl: 'src/assets/review_4.png' },
  { imageUrl: 'src/assets/review_5.png' }
]
</script>

<template>
  <div className="sixth-slide-reviews flex">
    <div className="sixth-slide-review-left">
      <sixth-slide-reviews-left
        v-for="review in reviewsLeftArr"
        :key="review.id"
        :id="review.id"
        :imageUrl="review.imageUrl"
      ></sixth-slide-reviews-left>
    </div>

    <sixth-slide-reviews-right></sixth-slide-reviews-right>
  </div>
</template>
