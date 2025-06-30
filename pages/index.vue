<template>
  <div >
    <n-carousel class="mb-6" autoplay >
      <div class="bg-[#0830df] flex flex-col gap-4 justify-center h-[350px] carousel-img object-cover text-center">
        <h1 class="text-4xl text-white">数据驱动决策，流程赋能效率</h1>
        <div class="flex flex-row items-center justify-center gap-8 text-white">
          <span>微信/支付宝流水分析</span>
          <span>BPM流程引擎</span>
          <span>企业数据服务</span>
          <span>项目服务</span>
        </div>
      </div>
    </n-carousel>
  </div>

  <div class="container flex flex-row justify-around">
    aaa<div class="flex-row flex">
      <n-statistic tabular-nums>
        <n-number-animation :precision="3" show-separator :from="0" :to="12039" />
        <template #suffix>
          <div>流水分析<br/>次数</div>
        </template>
      </n-statistic>
<!--      <h2 class="text-[#0830df] text-3xl">100000000+</h2>
      <div>流水分析<br/>次数</div>-->
    </div>
<!--    <div class="flex-row flex">
      <h2>100000000+</h2>
      <div>流水分析<br/>次数</div>
    </div>
    <div class="flex-row flex">
      <h2>100000000+</h2>
      <div>流水分析<br/>次数</div>
    </div>-->
  </div>

<!--  <LoadingGroup :pending="pending" :error="error">
    <template v-for="(item, index) in data" :key="index">
      <Banner :data="item.data" v-if="item.type == 'swiper'" />
      <div class="container">
        <ImageNav :data="item.data" v-if="item.type == 'icons'" />
        <ImageAd :data="item.data" v-if="item.type == 'imageAd'" />
        <ListCard
                  :title="item.title"
                  :data="item.data"
                  v-else-if="item.type == 'list'"
        />
      </div>
    </template>
  </LoadingGroup>-->
</template>
<script setup>
import {NCarousel} from "naive-ui";

useHead({
  title: "首页",
  meta: [
    { name: "description", content: "首页描述" },
    { name: "keywords", content: "首页关键词" },
  ],
})

const { pending, data, refresh, error } = await useIndexDataApi()

// 服务端时直接报错
if (process.server && error.value) {
  // throwError(error.value?.data?.data)
  // >=3.0.0 使用 throw createError 代替 throwError
  throw createError(error.value)
}
</script>
