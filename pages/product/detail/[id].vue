<template>
  <div class="container pt-[20px] bg-white w-full">
    <n-breadcrumb class="mb-3">
      <n-breadcrumb-item>
        <NuxtLink to="/">首页</NuxtLink>
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <NuxtLink to="/product">产品列表</NuxtLink>
      </n-breadcrumb-item>
      <n-breadcrumb-item>{{ title }}</n-breadcrumb-item>
    </n-breadcrumb>

    <div class="min-h-xs">
      <h1>产品详情。。。</h1>
    </div>
  </div>
</template>
<script setup>
import {
  NBreadcrumb,
  NBreadcrumbItem,
  NGrid,
  NGridItem,
  NDivider,
  NButton,
  NAvatar,
  NTag,
  NImage,
  NImageGroup,
  NIcon
} from "naive-ui"

import {
  ThumbsUpSharp
} from "@vicons/ionicons5"

const route = useRoute()
const id = route.params.id

const {
  data,
  error,
  pending
} = await useReadPostApi(id)

const title = computed(() => {
  if (pending.value) {
    return "产品详情"
  }
  let t = data.value?.desc?.text
  if (t && t.length >= 10) {
    t = t.slice(0, 10) + "..."
  }
  return t
})

useHead({title})


const {
  supportLoading,
  handleSupport
} = useHandleSupportPost()

// 评论成功
const CommentRef = ref(null)

function handleCommentSuccess() {
  CommentRef.value.handlePageChange(1)
}

</script>
