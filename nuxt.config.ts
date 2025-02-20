// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s - 流程引擎",
      title: "XXXX流程引擎",
      charset: "utf-8",
      htmlAttrs: {
        lang: "zh-cn",
      },
      meta: [
        { name: "description", content: "XXXX流程引擎描述" },
        { name: "keywords", content: "XXXX流程引擎关键词" },
      ],
      script: [
        // { src:"http://xxx.js" }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        // { rel:"stylesheet",href:"http://xxx.css" }
      ],
    },
  },
  css: [
    "@/assets/main.css",
  ],
  modules: [
    "nuxt-windicss",
  ],
  build: {
    transpile: process.env.NODE_ENV === "production"
      ? [
        "naive-ui",
        "vueuc",
        "@css-render/vue3-ssr",
        "@juggle/resize-observer",
      ]
      : ["@juggle/resize-observer"],
  },
  vite: {
    optimizeDeps: {
      include: process.env.NODE_ENV === "development"
        ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
        : [],
    },
  },
  imports: {
    dirs: ["apis"],
  },
  nitro: {
    // 缩小捆绑包
    minify: true,
    // 关闭源映射生成
    sourceMap: false,
  },
});
