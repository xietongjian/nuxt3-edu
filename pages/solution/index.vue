<template>
  <div>

    <div class="bg-blue-100 h-[200px] w-full">
      Banner
    </div>
    <div class="container">
      解决方案
    </div>


  </div>
</template>
<script setup>
import {
  NButton,
  NGrid,
  NGridItem,
  NPagination
} from "naive-ui"

const route = useRoute()

const {
  page,
  limit,
  total,
  handlePageChange,
  rows,
  pending,
  error,
  refresh
} = await usePage(({page, limit}) => {
  return useListApi("testpaper", {
    page
  })
})

useHead({
  title: "解决方案"
})
</script>
