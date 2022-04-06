<script setup>
import { reactive } from "vue";

const data = reactive([
  {
    name: "BTC/USDT",
    num_1: "0.0000",
    num_2: "0.0155",
    price: "3300.00",
    title: "限單價/賣出",
    type: 0,
    date: "2020-02-12 21:09:59",
  },
  {
    name: "BTC/USDT",
    num_1: "0.0000",
    num_2: "0.0155",
    price: "3300.00",
    title: "限單價/買入",
    type: 1,
    date: "2020-02-12 21:09:59",
  },
]);
</script>

<template>
  <div class="px-2 h-1/4 overflow-y-scroll" style="height: 25vh">
    <div v-for="item in data" :key="item.name" class="mt-2">
      <div class="flex items-start justify-between text-left">
        <div
          class="w-1/3"
          :class="item.type ? 'text-green-500' : 'text-red-500'"
        >
          {{ item.title }}
        </div>
        <div class="w-2/3 flex items-center justify-between">
          <div class="font-bold">{{ item.name }}</div>
          <div class="text-xs">{{ item.date }}</div>
        </div>
      </div>
      <div class="flex items-star justify-center">
        <div class="w-1/3 mt-2">
          <el-progress
            :width="60"
            type="circle"
            :percentage="20"
            :color="item.type ? '#2dbd88' : '#dc2625'"
          />
        </div>
        <div class="w-2/3 pt-2">
          <div class="text-left">
            <div>數量：{{ item.num_1 }}/{{ item.num_2 }}</div>
            <div>價格：{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
