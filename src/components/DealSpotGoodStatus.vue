<script setup>
import DealSportGoodChart from "@/components/DealSportGoodChart.vue";
import DealTradingStatus from "@/components/DealTradingStatus.vue";
</script>
<template>
  <div class="spotGoodStatus mt-2">
    <DealSportGoodChart />
    <DealTradingStatus />
  </div>
</template>

<style lang="scss" scoped>
.spotGoodStatus {
  .card {
    border: 1px solid #b9bbb2;
    border-radius: 5px;
  }
}
</style>
