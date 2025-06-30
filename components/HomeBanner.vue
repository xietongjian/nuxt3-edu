<template>
  <n-carousel show-arrow class="mb-6" autoplay>
    <div
        v-for="(item,index) in data"
        :key="index"
        class="bg-white carousel-img cursor-pointer object-cover text-center">
      <img :src="item.src" class="object-contain md:object-cover m-auto"
           @click="$commonOpen(item)"
      >
    </div>
  </n-carousel>
</template>
<script setup>
import {
  NCarousel
} from "naive-ui"

defineProps({
  data: Array
})
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
