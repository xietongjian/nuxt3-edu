<template>
  <div class="mt-auto bg-dark-400 text-gray-100 pt-10">
    <div class="container grid grid-cols-3 gap-5 ">
      <div class="flex flex-col">
        <h1 class="mb-4">友情链接</h1>
        <a href="#" v-for="i in 5" class="mb-2">链接一{{ i }}</a>
      </div>

      <div class="flex flex-col">
        <h1 class="mb-4">商业授权</h1>
        <a>商业授权</a>
        <a>产品</a>
      </div>
      <div class="flex flex-col">
        <h1 class="mb-4">联系方式</h1>
        <a>400-888-8888</a>
        <a>138-8888-8888</a>
        <a>www.xxxx.cn</a>
      </div>
    </div>

    <div class="container border-t border-gray-700 flex items-center justify-center py-5">
      <small class="mr-20">
        Copyright © 2022 www.xxxx.cn 粤ICP备20250205-36号
      </small>
      <small>
        深圳市龙岗区龙岗街道金汐府2栋A座2单元2401
      </small>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
