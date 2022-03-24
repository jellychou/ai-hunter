<script setup>
import DealSpotGoodStatus from "@/components/DealSpotGoodStatus.vue";
import DealContractStatus from "@/components/DealContractStatus";
import { ref } from "vue";

const isActive = ref(0);
</script>
<template>
  <div class="header flex items-center justify-between px-2 theme-bg-color">
    <div class="flex ml-auto">
      <div
        @click="isActive = 0"
        class="mr-3 text-sm"
        :class="{ 'text-yellow-500': isActive === 0 }"
      >
        現貨狀態
      </div>
      <div
        @click="isActive = 1"
        class="text-sm"
        :class="{ 'text-yellow-500': isActive === 1 }"
      >
        合約狀態
      </div>
    </div>
  </div>
  <DealSpotGoodStatus v-show="isActive === 0" />
  <DealContractStatus v-show="isActive === 1" />
</template>

<style lang="scss" scoped></style>
