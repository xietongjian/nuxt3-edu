<template>
  <Image v-bind="$attrs" :src="logo" objectFit="cover"/>
</template>
<script setup>
import logo from "~/assets/imgs/logo.png"
import Image from "~/components/Ui/Image.vue"
</script>
