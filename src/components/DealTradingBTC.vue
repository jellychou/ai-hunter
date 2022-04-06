<script setup>
import DealTradingNow from "./DealTradingNow.vue";
import DealTradingHold from "./DealTradingHold.vue";
import { ref } from "vue";

const isActive = ref(0);
</script>
<template>
  <div class="flex items-center justify-start px-2">
    <div class="pr-3 underline" :class="{ 'text-blue-700' : !isActive}" @click="isActive = 0">當前委託 (0)</div>
    <div class="underline" :class="{ 'text-blue-700' : isActive}" @click="isActive = 1">持有倉位 (1)</div>
  </div>
  <!-- 當前委託 -->
  <DealTradingNow v-if="!isActive" />
  <!-- 持有倉位 -->
  <DealTradingHold v-else />
</template>

<style lang="scss" scoped></style>
