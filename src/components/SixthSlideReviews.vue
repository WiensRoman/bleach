<script setup>
import SixthSlideReviewsLeft from './SixthSlideReviewsLeft.vue'
import SixthSlideReviewsRight from './SixthSlideReviewsRight.vue'
import reviewImg1 from '../assets/review_1.png'
import reviewImg2 from '../assets/review_2.png'
import reviewImg3 from '../assets/review_3.png'
import reviewImg4 from '../assets/review_4.png'
import reviewImg5 from '../assets/review_5.png'

const reviewsLeftArr = [
  { imageUrl: reviewImg1 },
  { imageUrl: reviewImg2 },
  { imageUrl: reviewImg3 },
  { imageUrl: reviewImg4 },
  { imageUrl: reviewImg5 }
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
