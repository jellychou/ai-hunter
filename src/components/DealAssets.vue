<script setup>
import { reactive } from "@vue/reactivity";

const data = reactive([
  {
    name: "BTC",
    num_1: "0.0155844",
    num_2: "324.05",
    realName: "Bitcoin",
  },
  {
    name: "USDT",
    num_1: "0.0155844",
    num_2: "324.05",
    realName: "TetherUS",
  },
]);
</script>

<template>
  <div
    class="flex items-center justify-between mt-2"
    v-for="item in data"
    :key="item.name"
  >
    <img class="coin-icon mr-1" src="@/assets/image/btc.png" alt="" />
    <div class="w-1/2 text-left pl-2">
      <div>{{ item.name }}</div>
      <div class="text-gray-400 text-xs">{{ item.realName }}</div>
    </div>
    <div class="w-1/2 text-right">
      <div>{{ item.num_1 }}</div>
      <div class="text-gray-400 text-xs">{{ item.num_2 }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coin-icon {
  height: 25px;
  width: 25px;
}
</style>
