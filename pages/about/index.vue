<template>
    <div >
      <div>
        <img class="object-fill w-[100%] h-[200px]" src="https://www.baidu.com/img/bd_logo1.png" alt="">
      </div>
      <div class="container">
        <h1>
          关于我们
        </h1>
        <p class="mb-5 indent-2xl indent-8">
          深圳途浪科技有限公司成立于2017年03月，专注于低代码流程引擎平台的研发。深耕于业务流程管理、审批流程管理、表单引擎软件和决策引擎等几个方面的研发与创新。创始团队曾服务于世界500强与中国500强和多家上市公司担任要职。
        </p>
        <p class="mb-5 indent-md">
          途浪科技已为多家国内大中型企业和政府提供了从表单设计、流程梳理、流程设计、流程运行、流程集成、流程挖掘的全生命周期流程软件产品和解决方案。服务的客户分布于制造、电商、食品安全、建材、教育等多个行业中。
        </p>
        <p class="mb-5 indent-md">
          随着国家对数字化的高度重视和布局以及企业对数字化改造浪潮箭在弦上，公司研发的产品不仅具有很高的前瞻性和时代性，也符合国内企业用户的操作习惯与使用场景，成为流程引擎管理和自动化软件行业的领跑者。
        </p>
      </div>
      <div>

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
} = await usePage(({ page,limit })=> {
    return useListApi("testpaper",{
        page
    })
})

useHead({
    title:"关于我们"
})
</script>
