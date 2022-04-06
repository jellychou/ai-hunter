<script setup>
import DealStatus from "@/components/DealStatus.vue";
import { ref } from "vue";

const isActive = ref('sportGood');
</script>
<template>
  <div class="header flex items-center justify-between px-2 theme-bg-color">
    <div class="flex ml-auto">
      <div
        @click="isActive = 'sportGood'"
        class="mr-3 text-sm"
        :class="{ 'text-yellow-500': isActive === 'sportGood' }"
      >
        現貨狀態
      </div>
      <div
        @click="isActive = 'trading'"
        class="text-sm"
        :class="{ 'text-yellow-500': isActive === 'trading' }"
      >
        合約狀態
      </div>
    </div>
  </div>
  <DealStatus :activePage="isActive" />
</template>

<style lang="scss" scoped></style>
