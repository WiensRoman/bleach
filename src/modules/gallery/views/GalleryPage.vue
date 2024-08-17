<script setup>
import GalleryHeader from '../components/GalleryHeader.vue'
import GalleryItem from '../components/GalleryItem.vue'
import galleryImg0 from '@/assets/images/gallery_0.png'
import galleryImg1 from '@/assets/images/gallery_1.png'
import galleryImg2 from '@/assets/images/gallery_2.png'
import galleryImg3 from '@/assets/images/gallery_3.png'
import galleryImg4 from '@/assets/images/gallery_4.png'
import galleryImg5 from '@/assets/images/gallery_5.png'
import galleryImg6 from '@/assets/images/gallery_6.png'
import galleryImg7 from '@/assets/images/gallery_7.png'
import galleryImg8 from '@/assets/images/gallery_8.png'
import galleryImg9 from '@/assets/images/gallery_9.png'
import galleryImg10 from '@/assets/images/gallery_10.png'
import galleryImg11 from '@/assets/images/gallery_11.png'
import galleryImg12 from '@/assets/images/gallery_12.png'
import galleryImg13 from '@/assets/images/gallery_13.png'
import galleryImg14 from '@/assets/images/gallery_14.png'
import galleryImg15 from '@/assets/images/gallery_15.png'
import galleryImg16 from '@/assets/images/gallery_16.png'
import galleryImg17 from '@/assets/images/gallery_17.png'
import galleryImg18 from '@/assets/images/gallery_18.png'
import galleryImg19 from '@/assets/images/gallery_19.png'
import galleryImg20 from '@/assets/images/gallery_20.png'
import galleryImg21 from '@/assets/images/gallery_21.png'
import galleryImg22 from '@/assets/images/gallery_22.png'
import galleryImg23 from '@/assets/images/gallery_23.png'
import galleryImg24 from '@/assets/images/gallery_24.png'
import galleryImg25 from '@/assets/images/gallery_25.png'
import galleryImg26 from '@/assets/images/gallery_26.png'
import galleryImg27 from '@/assets/images/gallery_27.png'
import galleryImg28 from '@/assets/images/gallery_28.png'
import galleryImg29 from '@/assets/images/gallery_29.png'
import galleryImg30 from '@/assets/images/gallery_30.png'
import galleryImg31 from '@/assets/images/gallery_31.png'

let items = [
  { id: 0, imageUrl: galleryImg0 },
  { id: 1, imageUrl: galleryImg1 },
  { id: 2, imageUrl: galleryImg2 },
  { id: 3, imageUrl: galleryImg3 },
  { id: 4, imageUrl: galleryImg4 },
  { id: 5, imageUrl: galleryImg5 },
  { id: 6, imageUrl: galleryImg6 },
  { id: 7, imageUrl: galleryImg7 },
  { id: 8, imageUrl: galleryImg8 },
  { id: 9, imageUrl: galleryImg9 },
  { id: 10, imageUrl: galleryImg10 },
  { id: 11, imageUrl: galleryImg11 },
  { id: 12, imageUrl: galleryImg12 },
  { id: 13, imageUrl: galleryImg13 },
  { id: 14, imageUrl: galleryImg14 },
  { id: 15, imageUrl: galleryImg15 },
  { id: 16, imageUrl: galleryImg16 },
  { id: 17, imageUrl: galleryImg17 },
  { id: 18, imageUrl: galleryImg18 },
  { id: 19, imageUrl: galleryImg19 },
  { id: 20, imageUrl: galleryImg20 },
  { id: 21, imageUrl: galleryImg21 },
  { id: 22, imageUrl: galleryImg22 },
  { id: 23, imageUrl: galleryImg23 },
  { id: 24, imageUrl: galleryImg24 },
  { id: 25, imageUrl: galleryImg25 },
  { id: 26, imageUrl: galleryImg26 },
  { id: 27, imageUrl: galleryImg27 },
  { id: 28, imageUrl: galleryImg28 },
  { id: 29, imageUrl: galleryImg29 },
  { id: 30, imageUrl: galleryImg30 },
  { id: 31, imageUrl: galleryImg31 }
]
</script>

<template>
  <div class="gallery">
    <div class="gallery__container container-fluid">
      <GalleryHeader />
      <div class="gallery__items">
        <GalleryItem
          v-for="item in items"
          :key="item.index"
          :imageUrl="item.imageUrl"
          :id="item.id"
        ></GalleryItem>
      </div>
    </div>
  </div>
</template>
