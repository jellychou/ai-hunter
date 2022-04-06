<script setup>
import DealNowEntrust from "./DealNowEntrust.vue";
import DealAssets from "./DealAssets.vue";
import { ref } from "vue";

const isActive = ref(0);
</script>
<template>
  <div class="flex items-center justify-start px-2">
    <div class="pr-3 underline" :class="{ 'text-blue-700' : !isActive}" @click="isActive = 0">當前委託 (0)</div>
    <div class="underline" :class="{ 'text-blue-700' : isActive}" @click="isActive = 1">現貨資產 (1)</div>
  </div>
  <!-- 當前委託 -->
  <DealNowEntrust v-if="!isActive" />
  <!-- 現貨資產 -->
  <DealAssets v-else />
</template>

<style lang="scss" scoped></style>
