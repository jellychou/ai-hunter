<script setup>
import DealChart from "@/components/DealChart.vue";
import DealSportGood from "@/components/DealSportGood.vue";
import DealTrading from "@/components/DealTrading.vue";
import { defineProps } from "vue";

defineProps({
  activePage: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <DealChart />
  <!-- 現貨狀態/即時交易狀態 -->
  <DealSportGood v-if="activePage === 'sportGood'" />
  <!-- 合約狀態/即時交易狀態 -->
  <DealTrading v-else />
</template>

<style lang="scss" scoped></style>
