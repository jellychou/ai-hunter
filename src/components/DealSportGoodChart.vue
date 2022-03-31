<script setup>
import { reactive, computed } from "vue";
import TabMenu from "../components/TabMenu.vue";
// const usdtType = ref("BTC");

const data = reactive([
  {
    id: 0,
    buy: "0.0001",
    price: "44,510.15",
    status: "rise",
  },
  {
    id: 1,
    buy: "0.0002",
    price: "44,510.15",
    status: "fall",
  },
  {
    id: 2,
    buy: "0.0003",
    price: "44,510.15",
    status: "rise",
  },
  {
    id: 3,
    buy: "0.0004",
    price: "44,510.15",
    status: "fall",
  },
  {
    id: 4,
    buy: "0.0005",
    price: "44,510.15",
    status: "rise",
  },
  {
    id: 5,
    buy: "0.0006",
    price: "44,510.15",
    status: "fall",
  },
]);

const riseData = computed(() => data.filter((e) => e.status === "rise"));
const fallData = computed(() => data.filter((e) => e.status === "fall"));

console.log(riseData, fallData);

const tabItems = reactive(["BTC/USDT", "ETH/USDT"]);
</script>

<template>
  <div class="card text-right py-2 px-3">
    <TabMenu :items="tabItems" @getTabValue="getTabValue" />
    <!-- <span
      @click="usdtType = 'BTC'"
      :class="['pr-5', { 'underline decoration-sky-600': usdtType === 'BTC' }]"
    >
      BTC/USDT
    </span>
    <span
      @click="usdtType = 'ETH'"
      :class="{ 'underline decoration-sky-600': usdtType === 'ETH' }"
    >
      ETH/USDT
    </span> -->
    <div class="flex my-3">
      <div class="text-left w-3/4">
        <span class="font-bold text-red-600 text-lg">44,510.29</span><br />
        <span class="text-red-600">=1,231,355,10 TWD</span>
        <span class="text-red-600"> (-3.45%)</span>
      </div>
      <div class="text-left w-1/4">123</div>
    </div>
    <div class="flex items-center justify-between mb-1">
      <div class="text-sm text-gray-400">買盤(BTC)</div>
      <div class="text-sm text-gray-400">價格(USDT)</div>
      <div class="text-sm text-gray-400">買盤(BTC)</div>
    </div>
    <div class="grid grid-cols-2 gap-2 text-sm">
      <div>
        <div
          class="flex items-center justify-between pb-1"
          v-for="rise in riseData"
          :key="rise.id"
        >
          <span>{{ rise.buy }}</span>
          <span>{{ rise.price }}</span>
        </div>
      </div>
      <div>
        <div
          class="flex items-center justify-between pb-1"
          v-for="fall in fallData"
          :key="fall.id"
        >
          <span>{{ fall.price }}</span>
          <span>{{ fall.buy }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
