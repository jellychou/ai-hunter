<script setup>
import DealSportGoodBTC from "./DealSportGoodBTC.vue";
import DealSportGoodETH from "./DealSportGoodETH.vue";
import { ref } from "vue";

const activeName = ref("BTC");

const handleClick = () => {
  console.log(123);
};
</script>

<template>
  <div>
    <h1 class="my-2 text-lg">
      即時交易狀態 <span class="text-sm">(歷史記錄)</span>
    </h1>
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs py-2"
      @tab-click="handleClick"
    >
      <el-tab-pane label="BTC/USDT" name="BTC">
        <!-- BTC/USDT -->
        <DealSportGoodBTC />
      </el-tab-pane>
      <el-tab-pane label="ETH/USDT" name="ETH">
        <!-- ETH/USDT -->
        <DealSportGoodETH />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped></style>
