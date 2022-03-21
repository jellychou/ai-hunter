<script setup>
import DealSpotGoodStatus from "@/components/DealSpotGoodStatus.vue";
import DealContractStatus from "@/components/DealContractStatus";
import { ref } from "vue";
import { useRouter } from "vue-router";

const isActive = ref(0);
const router = useRouter();
</script>
<template>
  <div class="header flex items-center justify-between px-2">
    <el-icon size="large" @click="router.push('/')">
      <arrow-left-bold />
    </el-icon>
    <div class="flex">
      <div class="flex">
        <div
          @click="isActive = 0"
          class="mr-2 p-2 rounded text-sm"
          :class="{ 'theme-bg-color': isActive === 0 }"
        >
          現貨狀態
        </div>
        <div
          @click="isActive = 1"
          class="p-2 rounded text-sm"
          :class="{ 'theme-bg-color': isActive === 1 }"
        >
          合約狀態
        </div>
      </div>
    </div>
  </div>
  <DealSpotGoodStatus v-show="isActive === 0" />
  <DealContractStatus v-show="isActive === 1" />
</template>

<style lang="scss" scoped></style>
