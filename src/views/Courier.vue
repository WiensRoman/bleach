<script setup>
import CourierForm from '@/components/CourierForm.vue'
import CourierDescription from '@/components/CourierDescription.vue'
</script>

<template>
  <div className="courier-slide">
    <div className="courier-container">
      <div className="courier-row">
        <CourierForm></CourierForm>
        <CourierDescription></CourierDescription>
      </div>
    </div>
  </div>
</template>
