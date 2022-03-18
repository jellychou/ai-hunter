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
  <table class="deal-report my-3">
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
      <td class="text-left">
        <span>{{ list.name }}</span
        ><br />
        <span class="text-gray-400 text-xs">{{ list.originalName }}</span>
      </td>
      <td class="text-left">
        <span class="text-red-600">${{ list.price }}</span
        ><br />
        <span class="text-green-500">+{{ list.gain }}%</span>
      </td>
      <td class="text-right">
        <span>${{ list.maxDeal }}M</span
        ><br />
        <span class="text-gray-400 text-xs">{{ list.volume }}M</span>
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
.deal-report {
  width: 100%;
}
</style>
