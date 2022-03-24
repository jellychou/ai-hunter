<script setup>
import { reactive } from "vue";

const dealData = reactive([
  {
    name: "USTD",
    originalName: "TetherUS",
    price: "1.00000",
    gain: "0.02",
    maxDeal: "77,908.75",
    volume: "44,554.01",
  },
  {
    name: "BTC",
    originalName: "Bitcoin",
    price: "42,790.00000",
    gain: "3.20",
    maxDeal: "810,906.05",
    volume: "18,952.62",
  },
  {
    name: "ETH",
    originalName: "Ethereum",
    price: "3,077.70000",
    gain: "2.32",
    maxDeal: "367,711.41",
    volume: "10,456.73",
  },
]);
</script>

<template>
  <table class="deal-report mt-5 mb-3">
    <tr>
      <th class="text-left w-1/3">
        <span class="text-gray-400">名稱</span>
      </th>
      <th class="text-left w-5/12">
        <span class="text-gray-400">價格/24h 漲跌</span>
      </th>
      <th class="text-right w-5/12">
        <span class="text-gray-400">上限/成交量</span>
      </th>
    </tr>
    <tr v-for="list in dealData" :key="list.name">
      <td class="text-left flex">
        <img class="coin-icon mr-1" src="@/assets/image/btc.png" alt="" />
        <div>
          <div>{{ list.name }}</div>
          <div class="text-gray-400 text-xs">{{ list.originalName }}</div>
        </div>
      </td>
      <td class="text-left">
        <div class="text-red-600">${{ list.price }}</div>
        <div class="text-green-500">+{{ list.gain }}%</div>
      </td>
      <td class="text-right">
        <div>${{ list.maxDeal }}M</div>
        <div class="text-gray-400 text-xs">{{ list.volume }}M</div>
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
.deal-report {
  width: 100%;
}
.coin-icon {
  height: 25px;
  width: 25px;
}
</style>
