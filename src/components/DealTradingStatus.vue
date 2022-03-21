<script setup>
import DealEntrust from "./DealEntrust.vue";
import DealSportGood from "./DealSportGood.vue";
import { ref } from "vue";

const activeName = ref("login");

const handleClick = () => {
  console.log(123);
};
</script>

<template>
  <div>
    <!-- BTC/USDT ETH/USDT 現貨狀態 合約狀態 BTC/USDT ETH/USDT 當前委託(􏍗)
    持有倉位(􏍗)  -->
    <h1 class="my-2 text-lg">
      即時交易狀態 <span class="text-sm">(歷史記錄)</span>
    </h1>
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs p-2"
      @tab-click="handleClick"
    >
      <el-tab-pane label="BTC/USDT" name="login">
        <DealEntrust />
      </el-tab-pane>
      <el-tab-pane label="ETH/USDT" name="register">
        <DealSportGood />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped></style>
