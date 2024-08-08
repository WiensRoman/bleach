<script setup>
import SixthSlideReviewsLeft from './SixthSlideReviewsLeft.vue'
import SixthSlideReviewsRight from './SixthSlideReviewsRight.vue'
import reviewImg1 from '@/assets/images/review_1.png'
import reviewImg2 from '@/assets/images/review_2.png'
import reviewImg3 from '@/assets/images/review_3.png'
import reviewImg4 from '@/assets/images/review_4.png'
import reviewImg5 from '@/assets/images/review_5.png'

const reviewsLeftArr = [
  { imageUrl: reviewImg1 },
  { imageUrl: reviewImg2 },
  { imageUrl: reviewImg3 },
  { imageUrl: reviewImg4 },
  { imageUrl: reviewImg5 }
]
</script>

<template>
  <div class="sixth-slide-reviews flex">
    <div class="sixth-slide-review-left">
      <SixthSlideReviewsLeft
        v-for="review in reviewsLeftArr"
        :key="review.id"
        :id="review.id"
        :imageUrl="review.imageUrl"
      ></SixthSlideReviewsLeft>
    </div>

    <SixthSlideReviewsRight />
  </div>
</template>
