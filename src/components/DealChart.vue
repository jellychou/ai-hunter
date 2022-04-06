<script setup>
import { reactive, computed } from "vue";
import TabMenu from "./TabMenu.vue";
import Chart from "@/components/Chart.vue";

const data = reactive([
  {
    id: 0,
    buy: "0.0001",
    price: "44,510.15",
    status: "rise",
    percent: 50,
  },
  {
    id: 1,
    buy: "0.0002",
    price: "44,510.15",
    status: "fall",
    percent: 90,
  },
  {
    id: 2,
    buy: "0.0003",
    price: "44,510.15",
    status: "rise",
    percent: 60,
  },
  {
    id: 3,
    buy: "0.0004",
    price: "44,510.15",
    status: "fall",
    percent: 20,
  },
  {
    id: 4,
    buy: "0.0005",
    price: "44,510.15",
    status: "rise",
    percent: 70,
  },
  {
    id: 5,
    buy: "0.0006",
    price: "44,510.15",
    status: "fall",
    percent: 30,
  },
]);

const riseData = computed(() => data.filter((e) => e.status === "rise"));
const fallData = computed(() => data.filter((e) => e.status === "fall"));

console.log(riseData, fallData);

const tabItems = reactive(["BTC/USDT", "ETH/USDT"]);

const getTabValue = (val) => {
  console.log(val);
};

const getDownColor = (val) => {
  return `background: linear-gradient(to left, #6ad6701a 0, #6ad6701a ${val}%, #f5f5f5 ${val}%, #f5f5f5 100%)`;
};
const getUpColor = (val) => {
  return `background: linear-gradient(to right, #ff00001a 0, #ff00001a ${val}%, #f5f5f5 ${val}%, #f5f5f5 100%)`;
};
</script>

<template>
  <div class="text-right py-2 px-3">
    <TabMenu class="w-1/2" :items="tabItems" @getTabValue="getTabValue" />
    <div class="flex my-3">
      <div class="text-left w-1/2">
        <div class="font-bold text-red-600 text-xl">44,510.29</div>
        <div class="text-red-600 text-xs">
          =1,231,355,10 TWD<span class="text-red-600"> (-3.45%)</span>
        </div>
      </div>
      <div class="text-left w-1/2">
        <Chart />
      </div>
    </div>
    <div class="flex items-center justify-between mb-1">
      <div class="text-sm text-gray-400">買盤(BTC)</div>
      <div class="text-sm text-gray-400">價格(USDT)</div>
      <div class="text-sm text-gray-400">買盤(BTC)</div>
    </div>
    <div class="grid grid-cols-2 text-sm">
      <div>
        <div
          class="flex items-center justify-between py-1 pr-1"
          v-for="rise in riseData"
          :style="getDownColor(rise.percent)"
          :key="rise.id"
        >
          <span>{{ rise.buy }}</span>
          <span>{{ rise.price }}</span>
        </div>
      </div>
      <div>
        <div
          class="flex items-center justify-between py-1 pl-1"
          v-for="fall in fallData"
          :style="getUpColor(fall.percent)"
          :key="fall.id"
        >
          <span>{{ fall.price }}</span>
          <span>{{ fall.buy }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right {
  background: linear-gradient(
    to right,
    #ff00001a 0,
    #ff00001a 50%,
    #f5f5f5 50%,
    #f5f5f5 100%
  );
}
.left {
  background: linear-gradient(
    to left,
    #6ad6701a 0,
    #6ad6701a 37%,
    #f5f5f5 37%,
    #f5f5f5 100%
  );
}

.curve-btc {
  .stroke {
    stroke: #f69119;
    stroke-width: 2;
  }
  .fill {
    fill: url(#btcFill);
    fill-opacity: 0.5;
  }
}
</style>
