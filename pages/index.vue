<template>
  <LoadingGroup :pending="pending" :error="error">
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
  </LoadingGroup>
</template>
<script setup>
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
