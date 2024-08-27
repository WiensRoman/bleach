<script setup>
import galleryImg0 from '../../../assets/images/gallery_0.png'
import galleryImg1 from '../../../assets/images/gallery_1.png'
import galleryImg2 from '../../../assets/images/gallery_2.png'
import galleryImg3 from '../../../assets/images/gallery_3.png'
import galleryImg4 from '../../../assets/images/gallery_4.png'
import galleryImg5 from '../../../assets/images/gallery_5.png'
import galleryImg6 from '../../../assets/images/gallery_6.png'
import galleryImg7 from '../../../assets/images/gallery_7.png'
import galleryImg8 from '../../../assets/images/gallery_8.png'
import galleryImg9 from '../../../assets/images/gallery_9.png'
import galleryImg10 from '../../../assets/images/gallery_10.png'
import galleryImg11 from '../../../assets/images/gallery_11.png'
import galleryImg12 from '../../../assets/images/gallery_12.png'
import galleryImg13 from '../../../assets/images/gallery_13.png'
import galleryImg14 from '../../../assets/images/gallery_14.png'
import galleryImg15 from '../../../assets/images/gallery_15.png'
import galleryImg16 from '../../../assets/images/gallery_16.png'
import galleryImg17 from '../../../assets/images/gallery_17.png'
import galleryImg18 from '../../../assets/images/gallery_18.png'
import galleryImg19 from '../../../assets/images/gallery_19.png'
import galleryImg20 from '../../../assets/images/gallery_20.png'
import galleryImg21 from '../../../assets/images/gallery_21.png'
import galleryImg22 from '../../../assets/images/gallery_22.png'
import galleryImg23 from '../../../assets/images/gallery_23.png'
import galleryImg24 from '../../../assets/images/gallery_24.png'
import galleryImg25 from '../../../assets/images/gallery_25.png'
import galleryImg26 from '../../../assets/images/gallery_26.png'
import galleryImg27 from '../../../assets/images/gallery_27.png'
import galleryImg28 from '../../../assets/images/gallery_28.png'
import galleryImg29 from '../../../assets/images/gallery_29.png'
import galleryImg30 from '../../../assets/images/gallery_30.png'
import galleryImg31 from '../../../assets/images/gallery_31.png'
defineProps({
  id: Number,
  imageUrl: String
})

const arr = [
  galleryImg0,
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
  galleryImg8,
  galleryImg9,
  galleryImg10,
  galleryImg11,
  galleryImg12,
  galleryImg13,
  galleryImg14,
  galleryImg15,
  galleryImg16,
  galleryImg17,
  galleryImg18,
  galleryImg19,
  galleryImg20,
  galleryImg21,
  galleryImg22,
  galleryImg23,
  galleryImg24,
  galleryImg25,
  galleryImg26,
  galleryImg27,
  galleryImg28,
  galleryImg29,
  galleryImg30,
  galleryImg31
]
</script>

<template>
  <div href="" class="gallery__items-image"><img :src="arr[id]" /></div>
</template>
