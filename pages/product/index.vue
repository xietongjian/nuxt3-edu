<template>
    <div >
      <div class="bg-blue-400 h-[200px] w-full">
        Banner
      </div>

      <div class="container">
        <div class="p-3 border-b text-lg">
          <h4>产品</h4>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-5">
          <ProductList v-for="(item,index) in data" :key="index" :item="item"/>
        </div>
      </div>

      <n-grid :x-gap="20" class="container">
        <n-grid-item :span="18">
<!--          <LoadingGroup :pending="pending" :error="error" :is-empty="rows.length === 0">
            <TestpaperList v-for="(item,index) in rows" :key="index" :item="item"/>
            <div class="flex justify-center items-center mt-5 mb-10">
              <n-pagination size="large" :page="page" :item-count="total" :page-size="limit" :on-update:page="handlePageChange"/>
            </div>
          </LoadingGroup>-->
        </n-grid-item>
        <n-grid-item :span="6">

        </n-grid-item>
      </n-grid>
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
} = await usePage(({ page,limit })=> {
    return useListApi("testpaper",{
        page
    })
})

let {
  data
} = await useHotCourseListApi()
useHead({
    title:"产品列表"
})
</script>
