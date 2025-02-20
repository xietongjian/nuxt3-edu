<template>
  <div class="navbar">
    <div class="container flex items-center h-[60px]">
      <nuxt-link to="/" class="flex items-center !text-xl !font-bold cursor-pointer">
        <Logo class="w-[40px] h-[40px] rounded mr-2"/>
        XXXX流程引擎
      </nuxt-link>

      <ui-menu>
        <ui-menu-item v-for="(item,index) in menus" :key="index" :active="isMenuItemActive(item)"
                      @click="handleOpen(item.path)">
          {{ item.name }}
        </ui-menu-item>
      </ui-menu>

<!--      <n-button circle class="ml-auto mr-3" @click="openSearch">
        <template #icon>
          <n-icon>
            <Search/>
          </n-icon>
        </template>
      </n-button>-->

      <div class="ml-auto mr-3"></div>
      <nuxt-link to="/login" v-if="!user">
        <n-button secondary strong>登录</n-button>
      </nuxt-link>

      <n-dropdown v-else :options="userOptions" @select="handleSelect">
        <n-avatar
            round
            size="small"
            :src=" user.avatar || 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'"
        />
      </n-dropdown>
    </div>
  </div>
  <div class="w-[100%] h-[61px]"></div>
<!--  <SearchBar ref="SearchBarRef"/>-->
</template>
<script setup>
import {
  NButton,
  NIcon,
  NDropdown,
  NAvatar,
  createDiscreteApi, NImage
} from "naive-ui"
import {
  Search
} from "@vicons/ionicons5"
import Logo from "~/components/Ui/Logo.vue";

const user = useUser()

const route = useRoute()
const menus = [{
  name: "首页",
  path: "/"
}, {
  name: "产品",
  path: "/product"
}, {
  name: "解决方案",
  path: "/solution"
}, {
  name: "客户案例",
  path: "/case/0/1",
  match: [{
    name: "list-type-page",
    params: {
      type: "case-case_id-page"
    }
  }]
}, {
  name: "关于我们",
  path: "/about"
}, {
  name: "开发文档",
  path: "/list/column/1",
  match: [{
    name: "list-type-page",
    params: {
      type: "column"
    }
  }]
}]

function handleOpen(path) {
  navigateTo(path)
}

const isMenuItemActive = (item) => {
  if (item.match) {
    let i = item.match.findIndex(o => {
      let res = true
      if (o.params && typeof o.params === "object") {
        res = (Object.keys(o.params).findIndex(k => route.params[k] == o.params[k])) != -1
      }
      return o.name == route.name && res
    })
    return i != -1
  }
  return route.path == item.path
}

const userOptions = [{
  label: "用户中心",
  key: "center",
}, {
  label: "退出",
  key: "logout",
}]


const SearchBarRef = ref(null)
const openSearch = () => SearchBarRef.value.open()

const handleSelect = (k) => {
  console.log(k)
  switch (k) {
    case "logout":
      const {dialog} = createDiscreteApi(["dialog"])
      dialog.warning({
        content: "是否要退出登录？",
        positiveText: "退出",
        negativeText: "取消",
        onPositiveClick: async () => {
          await useLogout()
        },
      });
      break;
    case "center":
      navigateTo({
        path: "/user/history/1"
      })
      break;
  }
}
</script>
<style>
.navbar {
  z-index: 1000;
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
}
</style>
