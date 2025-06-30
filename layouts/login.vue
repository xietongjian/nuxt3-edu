<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center bg-blue">
    <NavBar/>
    <div class="shadow-lg rounded-lg p-5 bg-white my-20">
      <h4 class="pb-4 text-xl text-gray-500">{{ $route.meta.title || '登录' }}</h4>
      <slot/>
    </div>
    <PageFooter class="w-full"/>
  </div>
</template>
<script setup lang="ts">
</script>
